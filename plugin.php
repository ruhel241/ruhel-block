<?php
/**
 * Plugin Name: Ruhel Block — Ruhel Gutenberg Block Plugin
 * Plugin URI: https://github.com/ruhel-guten-block/
 * Description: ruhel-guten-block — is a Gutenberg plugin created via create-guten-block.
 * Author: Ruhel
 * Author URI: https://ruhel.it/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package Ruhel Block
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

function mrk_register_book_post_type() {
  
    // $template = array(
    //     array( 'core/paragraph', array(
    //         'placeholder' => 'Add a root-level paragraph',
    //     ) ),
    //     array( 'core/columns', array(), array(
    //         array( 'core/column', array(), array(
    //             array( 'core/image', array() ),
    //         ) ),
    //         array( 'core/column', array(), array(
    //             array( 'core/paragraph', array(
    //                 'placeholder' => 'Add a inner paragraph'
    //             ) ),
    //         ) ),
    //     ) )
    // );
  
    $args = array(
        'public' => true,
        'label'  => 'Services Box',
        'show_in_rest' => true,
        // 'template' => $template
    );
    register_post_type( 'service-box', $args );
}
add_action( 'init', 'mrk_register_book_post_type' );


