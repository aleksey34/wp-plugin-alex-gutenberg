<?php
/**
 * Plugin Name:       Alex Gutenberg
 * Description:       Additional func for AlexTheme
 * Requires at least: 1.0
 * Requires PHP: 7.4
 * Version:           1.0
 * Author:            aleksey34
 * License:           GPL-2.0-or-later
 * Text Domain:       alex_theme
/
 * @package          plugin core of alextheme
 */



if(!defined('ABSPATH')) exit;



require_once plugin_dir_path(__DIR__) . 'alex-gutenberg/App/AppCore.php';


function AlexGutenbergInit(){

	\AlexGutenberg\App\AppCore::instance();


}

AlexGutenbergInit();