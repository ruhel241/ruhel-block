<?php


// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}


function testing_guten_block_cgb_block_assets() {
	// Styles.
	wp_enqueue_style(
		'testing_guten_block-cgb-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		array( 'wp-blocks' )
	
	);
} 

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'testing_guten_block_cgb_block_assets' );


function testing_guten_block_cgb_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'testing_guten_block-cgb-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ),
		array( 'wp-blocks', 'wp-i18n', 'wp-element' ), 
		true 
	);

	// Styles.
	wp_enqueue_style(
		'testing_guten_block-cgb-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), 
		array( 'wp-edit-blocks' ) 
		
	);
} 

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'testing_guten_block_cgb_editor_assets' );
