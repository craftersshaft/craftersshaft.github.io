-- Rock the vote v1, by wolfs
-- Based on the same SourceMod functionality
-- Designed for SRB2 Kart, but should work for noping out of levels in vanilla SRB2 as well.

-- Written by Lat', counts the current number of players in the server
local function countplayers()
    local fuck = 0
    for p in players.iterate do
		if p.spectator then continue end -- Don't count spectators
		if p.splitscreenindex then continue end -- NOTE: This does not work in 1.0.3. It won't throw errors, but it also won't carry the desired effect.
        fuck = $+1
    end
    return fuck
end

local function LapCheck()
	for p in players.iterate do
		if (p.laps >= 1)
			return true
		end
	end
	return false
end

-- Clears RTV status from all players
local function ClearRTV()
	for p in players.iterate do
		if (p.rtv)
			p.rtv = false
		end
	end
	server.rtvcount = 0
end

addHook("PlayerMsg", function(source, msgtype, target, msg)
	-- Initialize variables
	local playercount = countplayers() -- Number of players in the server
	if not (server.rtvcount) then
		server.rtvcount = 0 -- Server's RTV count
	end
	if not (server.neededvotes) then
		server.neededvotes = 0 -- Votes needed for RTV to succeed
	end
	if not (server.intermission) then
		server.intermission = 0 -- Keeps track of whether or not the game has reached the intermission screen
	end
	
	-- Kill the RTV in these cases:
	if (playercount == 0) then return false end -- Why would this work if nobody's here???
	if (msgtype ~= 0) then return false end -- Only trigger for global messages
	if (splitscreen) and not (netgame) then return false end -- Yeah... this isn't gonna work.
	if (source.rtv) then return false end -- Player can't RTV twice
	if not (source.mo) or (source.spectator) then return false end -- Kill RTV when spectating
	if (LapCheck()) then return false end -- Kill RTV if someone completes a lap
	if (server.intermission == 1) then return false end -- Server is currently in an intermission

	if (playercount > 1) then
		server.neededvotes = (playercount/2) + 1 -- Need votes from more than half the server to trigger RTV
	else
		server.neededvotes = 1 -- Only one player, trigger it anyway.
	end
	if (msg:sub(1, 3):lower() == "rtv") then -- Player wants to rock the vote
		source.rtv = true
		server.rtvcount = $ + 1
		if (server.rtvcount < server.neededvotes)
			chatprint("\x83*"..source.name.." wants to rock the vote. ("..server.rtvcount.." votes, "..server.neededvotes.." needed)")
		else
			chatprint("\x83*Vote requirement reached. Exiting the level...")
			server.rtvcount = 0
			ClearRTV()
			server.intermission = 1 -- Game can't keep track of intermissions, so mark it manually
			G_ExitLevel()
		end
	end
end)

addHook("PlayerQuit", function(p,r)
	if (p.rtv and server.rtvcount) then
		server.rtvcount = $ - 1 -- A RTV'd player has left the game, so make sure they don't get counted by the server
	end
end)

addHook("MapChange", function(gamemap)
	ClearRTV() -- Don't preserve RTV between maps
	server.intermission = 0 -- Intermission has ended
end)