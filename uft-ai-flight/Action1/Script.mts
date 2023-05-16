AIUtil.SetContext WpfWindow("wpftypename:=window", "regexpwndtitle:=Micro Focus MyFlight Sample Application", "devname:=Micro Focus MyFlight Sample Application")
AIUtil("text_box", "Username").Type "john"
AIUtil("text_box", "Password").Type "hp"
AIUtil("button", "OK").Click
AIUtil.FindTextBlock("BOOK FLIGHT").CheckExists True
AIUtil("down_triangle", micAnyText, micFromTop, 1).Click
AIUtil.FindTextBlock("Frankfurt").Click
AIUtil("down_triangle", micAnyText, micFromTop, 2).Click
AIUtil.FindTextBlock("London").Click
AIUtil("button", "FIND FLIGHTS").Click
AIUtil.Table.Cell(4, 0).Click ' Select 4th row in table
AIUtil("button", "SELECT FLIGHT").Click
AIUtil("text_box", "Passenger Name").Type "Mark"
AIUtil("button", "ORDER").Click
' Check that the order went through with check mark graphic, highlight and "completed" text
AIUtil("check_mark", micAnyText, micFromBottom, 1).CheckExists True
AIUtil.FindText("completed").Highlight
AIUtil.FindText("completed").CheckExists True
' Close the Flights GUI
AIUtil("close").Click
