<?php
    //$mysqli= mysqli_connect("host", "user", "password", "connorsAwesomeDatabase");
    $email = filter_input(INPUT_POST, "email");
    $fname = filter_input(INPUT_POST, "fname");
    $lname = filter_input(INPUT_POST, "lname");
    $tel = filter_input(INPUT_POST, "tel");
    //$insertQuery = "INSERT INTO accounts VALUES ('".$fname."', '".$lname."', '".$email."', '".$tel."')";
    //$result = mysqli_query($mysqli, $insertQuery);
    echo "<html>";
    echo "<head>";
    echo "<link rel='stylesheet' href='index.css'>";
    echo "</head>";
    echo "<body>";
    echo "<h4>New record created succesfully.</h4>";
    echo "<table>";
    echo "<th>First</th><th>Last</th><th>Email</th><th>Phone</th>";
    echo "<td>".$fname."</td><td>".$lname."</td><td>".$email."</td><td>".$tel."</td>";
    echo "</table>";
?> 