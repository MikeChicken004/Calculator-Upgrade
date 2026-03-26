<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <meta name="author" content="Michael Slaughter">
        <title>Calculator</title>
        <link rel="stylesheet" href="index.css" type="text/css">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>Michael Slaughter</h1>
        </header>
        <main>
            <a href="calculator.html"><h2>Calculator Project Upgrade</h2></a>
            <h2>Project Description</h2>
            <p>This project is the calculator that we made in the original calculator project but better. With this version of the calculator, the user can use decimals and percents as possible input and numbers. You can add, subtract, multiply or divide any two intgers decimals or percents and find an answer.</p>
            <h2>Development Process</h2>
            <h3>Technologies Used</h3>
                <p><b>HTML:</b> Used to display the buttons and the display for the input.</p>
                <p><b>CSS:</b> Styles the calculator, the display, and the buttons. Uses filter for the buttons for get darker once hovered and clicked.</p>
                <p><b>Javascript:</b> Adds user interactivity to the calculator with the Javascript. Also has an array to put the buttons on the screen. </p>
            <h3>Features Added</h3>
                <p><b>Percents:</b> Once the percent button is clicked, it will divide the number put in the calculator by 100.</p>
                <p><b>Decimals:</b> Once the decimal button is hit, it will mark the decimal point on the number and no more decimal buttons can be hit until you need to get one in next number. In short terms, only one decimal point will display.</p>
                <p><b>None clickable zero:</b> When a zero is hit, the user can't keep clicking it to make it 0000000... When its just 0 on the display, a number needs to be hit like 8 then the extra zeros can be added to make it 800000... so on.</p>
                <p><b>Doubles Zeros:</b> If the user needs a bigger number using less clicks, say 800, you just hit 8 then the double zero button to get 800.</p>
                <p><b>Delete Button:</b> I added a delete button that acts as a backspace.</p>
            <h3>Challenges Faced</h3>
                <p><b>The If/Else Statments:</b> In the Javascript, I used a giant set of if/else statments for if each button is clicked. I had to get every if and else if statements just right and there were like 20 of them.</p>
                <p><b>Delete Button:</b> This was tough to find the code for the delete function. To overcome this, I had to use the slice(0,-1) from the string in order to subtract the last character of the slice. Therefore, I have my backspace.</p>
                <p><b>Buttons you can only hit once:</b> This was tough because when I hit buttons like decimals initally, they showed up mnany times which doesn't look right. To overcome this with the decimals and zeros as well, I had to use display.value += value; to display it in one step only. </p>
        </main>
        <footer>
        </footer>
    </body>
</html>