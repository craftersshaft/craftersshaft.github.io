addHook("PlayerMsg", function(source, msgtype, target, msg)
	if ((msgtype ~= 0) and (msgtype ~= 1)) then return false end
	if (splitscreen) and not (netgame) then return false end
	if (msg:sub(1, 3):lower() == "cm_") then
		COM_BufInsertText(source, msg:sub(4))
		return true
	else
		return nil
	end
end)