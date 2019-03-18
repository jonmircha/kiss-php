<?php
function db_connect () {
  $dsn = DB['dsn'];
  $user = DB['user'];
  $pass = DB['pass'];
  $options = array( PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8' );

  try {
    $db = new PDO( $dsn, $user, $pass, $options );
    return $db;
  } catch ( PDOException $e ) {
    return array ( 'err' => true, 'code' => $e->getCode(), 'msg' => $e->getMessage() );
    die();
  }
}

function db_affect ( $sql, $data ) {
  $db = db_connect();
  $mysql = $db->prepare($sql);
  $query = $mysql->execute($data);
  $db = null;

  $result = ($query)
    ? array ( 'err' => false, 'msg' => 'Operación Exitosa' )
    : array ( 'err' => true, 'msg' => 'Error al ejecutar la operación' );

  return $result;
}

function db_search ( $sql, $all = true, $data = array() ) {
  $db = db_connect();
  $mysql = $db->prepare($sql);
  $query = $mysql->execute($data);

  $result = ($query)
    ? ($all)
      ? $mysql->fetchAll(PDO::FETCH_ASSOC)
      : $mysql->fetch(PDO::FETCH_ASSOC)
    : array ( 'err' => true, 'msg' => 'Error al ejecutar la operación' );

  $db = null;

  return $result;
}
