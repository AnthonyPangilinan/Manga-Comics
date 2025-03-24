<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $operator = $_POST['operator'];
    $result = '';

    if (is_numeric($num1) && is_numeric($num2)) {
        switch ($operator) {
            case 'add':
                $result = $num1 + $num2;
                break;
            case 'subtract':
                $result = $num1 - $num2;
                break;
            case 'multiply':
                $result = $num1 * $num2;
                break;
            case 'divide':
                $result = ($num2 != 0) ? $num1 / $num2 : 'Cannot divide by zero';
                break;
            default:
                $result = 'Invalid operator';
        }
    } else {
        $result = 'Please enter valid numbers';
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>PHP Calculator</title>
</head>
<body>
    <h2>Simple PHP Calculator</h2>
    <form method="post">
        <input type="text" name="num1" placeholder="Enter first number" required>
        <select name="operator">
            <option value="add">+</option>
            <option value="subtract">-</option>
            <option value="multiply">*</option>
            <option value="divide">/</option>
        </select>
        <input type="text" name="num2" placeholder="Enter second number" required>
        <button type="submit">Calculate</button>
    </form>
    
    <?php if (isset($result)) { echo "<h3>Result: $result</h3>"; } ?>
</body>
</html>
