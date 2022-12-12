<?php
    $mysqli= mysqli_connect("localhost", "cmmack", "letmein", "connorsAwesomeDatabase");
    $email = filter_input(INPUT_POST, "email");
    $fname = filter_input(INPUT_POST, "fname");
    $lname = filter_input(INPUT_POST, "lname");
    $tel = filter_input(INPUT_POST, "tel");

    $fname = "bill";
    $lname = "clinton";
    $email = "billyc@UnorthodoxRabi.ca";
    $tel = "111-111-1234";
    $add = "INSERT INTO accounts VALUES ('".$fname."', '".$lname."', '".$email."', '".$tel."')";
    echo "<p>Query: ".$add."</p>";
    $result = mysqli_query($sql, $add);
    echo "<p>finished</p>";
    
    echo "<html>";
    echo "<body>";
    echo "<h4>New record created succesfully.</h4>";
    echo "<table>";
    echo "<tr><th>First</th><th>Last</th><th>Email</th><th>Phone</th></tr>";
    echo "<tr><td>".$fname."</td><td>".$lname."</td><td>".$email."</td><td>".$tel."</td></tr>";
    echo "</table>";
    echo "<p>connected</p>";
?> 