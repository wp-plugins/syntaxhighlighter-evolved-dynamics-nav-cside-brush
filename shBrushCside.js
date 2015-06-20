/**
 * SyntaxHighlighter Cside Plugin
 *
 * Uses the SyntaxHighlighter WordPress Plugin 
 * http://alexgorbatchev.com/SyntaxHighlighter
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate to.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @copyright SyntaxHighlighter 
 * Copyright (C) 2004-2014 Alex Gorbatchev.
 *
 * @copyright SyntaxHighlighter CSide Plugin 
 * Copyright (C) 2004-2015 David Cox (http:\\adeptris.com)
 *  
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	SyntaxHighlighter = SyntaxHighlighter || (typeof require !== 'undefined'? require('shCore').SyntaxHighlighter : null);

	function Brush()
	{
		var keywords =	'DIV MOD IN AND OR NOT XOR ASSERTERROR BEGIN CASE DO DOWNTO ' +
				'ELSE END EXIT FOR IF OF REPEAT THEN TO UNTIL WHILE WITH TRUE FALSE';
						
		this.regexList = [
			{ regex: /{(?!\$)[\s\S]*?}/gm,					css: 'comments' },  	// multiline comments { }
			{ regex: SyntaxHighlighter.regexLib.singleLineCComments,	css: 'comments' },  	// one line
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,		css: 'variable' },	// strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),		css: 'string' }	// keyword
			];
	};

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['cal', 'navision', 'nav', 'cside'];

	SyntaxHighlighter.brushes.Cside = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
