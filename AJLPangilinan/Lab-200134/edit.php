<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic and Responsive Webpage</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background: linear-gradient(135deg, #2c3e50, #4ca1af);
            overflow-x: hidden;
            animation: gradient 5s ease infinite;
            background-size: 400% 400%;
        }
        @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        header {
            background: #2c3e50;
            color: white;
            padding: 20px 0;
            text-align: center;
            opacity: 0;
            animation: fadeIn 1s forwards;
        }
        nav {
            display: flex;
            justify-content: center;
            background: #1f2f3f;
            padding: 15px;
            opacity: 0;
            animation: fadeIn 1s forwards 0.5s;
        }
        nav a {
            color: white;
            margin: 0 15px;
            text-decoration: none;
            font-size: 1.2em;
        }
        nav a:hover {
            color: #ffd700;
        }
        .container {
            padding: 20px;
        }
        .section {
            margin: 20px 0;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1s forwards;
        }
        .section:nth-child(odd) {
            animation-delay: 1s;
        }
        .section:nth-child(even) {
            animation-delay: 1.5s;
        }
        footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 10px 0;
            opacity: 0;
            animation: fadeIn 1s forwards 2s;
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @media (max-width: 600px) {
            nav {
                flex-direction: column;
            }
            nav a {
                margin: 5px 0;
            }
        }
    </style>
</head>
<body>

<header>
    <h1>System Integration and Architecture</h1>
</header>

<nav>
    <a href="#section1">Group 1</a>
    <a href="#section2">Group 2</a>
    <a href="#section3">Group 3</a>
	<a href="#section4">Group 4</a>
	<a href="#section5">Group 5</a>
</nav>

<div class="container">
    <div id="section1" class="section">
        <h2 style="color: #2980b9;">Group 1</h2>
        <p>This is the first section of the webpage.</p>
    </div>
    <div id="section2" class="section">
        <h2 style="color: #27ae60;">Group 2</h2>
        <p>This is the second section of the webpage.</p>
    </div>
    <div id="section3" class="section">
        <h2 style="color: #c0392b;">Group 3</h2>
        <p>This is the third section of the webpage.</p>
    </div>
    <div id="section4" class="section">
        <h2 style="color: #c0392b;">Group 4</h2>
        <p>This is the third section of the webpage.</p>
    </div>
    <div id="section5" class="section">
        <h2 style="color: #c0392b;">Group 5</h2>
        <p>This is the third section of the webpage.</p>
    </div>
</div>

<footer>
    <p>© 2025 SIA-02. All rights reserved.</p>
</footer>

<script>
    $(document).ready(function() {
        $('nav a').click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500);
        });
    });
</script>

</body>
</html>
