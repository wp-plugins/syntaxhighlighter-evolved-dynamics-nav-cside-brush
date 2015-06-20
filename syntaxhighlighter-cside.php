<?php
/*
Plugin Name: SyntaxHighlighter Evolved: Dynamics NAV CSide Brush
Description: Adds support for the Dynamics NAV C/AL Cside language to the SyntaxHighlighter Evolved plugin.
Author: David Cox
Version: 0.2
Author URI: http://adeptris.com/
*/
 
// SyntaxHighlighter Evolved doesn't do anything until early in the "init" hook, so best to wait until after that
add_action( 'init', 'syntaxhighlighter_cside_regscript' );
 
// Tell SyntaxHighlighter Evolved about this new language/brush
add_filter( 'syntaxhighlighter_brushes', 'syntaxhighlighter_cside_addlang' );
 
// Register the brush file with WordPress
function syntaxhighlighter_cside_regscript() {
    wp_register_script( 'syntaxhighlighter-brush-cside', plugins_url( 'shBrushCside.js', __FILE__ ), array( 'syntaxhighlighter-core' ), '1.2.3' );
}
 
// Filter SyntaxHighlighter Evolved's language array
function syntaxhighlighter_cside_addlang( $brushes ) {
    $brushes['cal'] = 'cside';    
    $brushes['cside'] = 'cside';
    $brushes['nav'] = 'cside';
    $brushes['navision'] = 'cside';	
 
    return $brushes;
}