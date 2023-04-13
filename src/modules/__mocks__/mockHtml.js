export default document.body.innerHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/d9a272ac0d.js" crossorigin="anonymous"></script>
    <title>To do list</title>
</head>
<body>
    <section class="to-do-list">
        <div class="listwrap">
            <div class="heading div">
             <h1 class="h1">Today's To Do</h1>
             <i class="fa-solid fa-arrows-rotate icon"></i>
            </div>
            <form action="" class="form">
                <div class="adddiv div">
                    <input type="text" class="addinput" placeholder="Add to your list...">
                    <span class="spanicon"><i class="fa-solid fa-arrow-turn-down fa-rotate-90 icon"></i></span>
                </div>
            </form> 
                <div class="list"></div>
            <button class="button div">Clear all completed</button>     
        </div>
    </section>
</body>
</html>
`;