<?php
$sql = mysqli_connect('localhost','cmack','letmein','connorsAwesomeDatabase');
$query = "SELECT * FROM accounts";
$result = mysqli_query($sql,$query);
?>
<html>
    
<head>
  <link rel="stylesheet" href="./index.css">
  <button id="returnLink"><a href="index.html">Home</a></button>
  </style>
</head> 

<body>
<table>
<tr><th>First Name</th> <th>Last Name</th> <th>Email</th> <th>Phone</th></tr>
<?php
while($row = mysqli_fetch_row($result)){
    echo "<tr>";
    echo "<td>".$row[0]."</td>";
    echo "<td>".$row[1]."</td>";
    echo "<td>".$row[2]."</td>";
    echo "<td>".$row[3]."</td>";
    echo "</tr>";
}
?>
</table>
</body>
</html>


