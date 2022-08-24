<?php

function autoload($className)
{
    $paths = array('api', 'api/action', 'api/config', 'api/validation', 'api/database', 'api/objects', 'api/objects/elements');

    foreach($paths as $path)
    {
        $include = '/Users/Alex/source/repos/react-test-task/' . $path . '/' . $className . '.php';
        if(is_readable($include))
        {
            include_once $include;
        }
    }
}

spl_autoload_register('autoload');
?>