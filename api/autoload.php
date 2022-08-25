<?php

function autoload($className)
{
    $paths = array('','action/', 'config/', 'validation/', 'database/', 'objects/', 'objects/elements/');

    foreach($paths as $path)
    {
        $include = './api/' . $path . strtolower($className) . '.php';
        if(is_readable($include))
        {
            include_once $include;
        }
    }
}

spl_autoload_register('autoload');
?>