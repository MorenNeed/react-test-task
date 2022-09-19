<?php
class Autoload
{
    public static function register()
    {
        spl_autoload_register(function ($className)
        {
            $paths = array('','controller', 'router', 'config', 'validation', 'database', 'objects', 'objects'. DIRECTORY_SEPARATOR . 'elements');

            foreach($paths as $path)
            {
                $include = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'api' . DIRECTORY_SEPARATOR . $path . DIRECTORY_SEPARATOR . strtolower($className) . '.php';
                if(is_readable($include))
                {
                    include_once $include;
                }
            }
        });
    }
}

Autoload::register();
?>