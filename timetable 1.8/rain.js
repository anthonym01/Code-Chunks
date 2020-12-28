var w = c.width = window.innerWidth,
		h = c.height = window.innerHeight,
		ctx = c.getContext( '2d' ),
		
		opts = {
			
			count: w/30,
			baseSize: 1,
			addedSize: 4,
			velX: 0.5,
			velY: 2,
			framesBack: 8,
			framesFront: 4
		},
		
		drops = [];

function anim(){
	
	window.requestAnimationFrame( anim );
	if(theme.themeset=="light"){
		ctx.fillStyle = '#ffffff';
		ctx.fillRect( 0, 0, w, h );
		ctx.strokeStyle = '#5e5e5e';
	}
	else if(theme.themeset=="dark"){
		ctx.fillStyle = '#000000';
		ctx.fillRect( 0, 0, w, h );
		ctx.strokeStyle = '#898989';
	}
	else
	{
		ctx.fillStyle = '#ffffff';
		ctx.fillRect( 0, 0, w, h );
		ctx.strokeStyle = '#5e5e5e';
	}
	
	if( drops.length < opts.count )
		drops.push( new Drop );
	
	drops.map( function( drop ){ drop.step(); } );
}
function Drop(){
	
	this.x = ( Math.random() * w ) | 0;
	this.y = 0;
	
	this.size = opts.baseSize + opts.addedSize * Math.random();
	
	this.vx = opts.velX * this.size;
	this.vy = opts.velY * this.size;
}
Drop.prototype.step = function(){
	
	this.x += this.vx
	this.y += this.vy;
	
	if( this.x - opts.framesBack * this.vy > w )
		this.x = -opts.framesFront * this.vy;
	
	if( this.y - opts.framesBack * this.vy > h )
		this.y = -opts.framesFront * this.vy;
	
	var x = this.x - opts.framesBack * this.vx,
			y = this.y - opts.framesBack * this.vy;
	
	for( var i = 1; i < opts.framesBack; ++i ){
		
		ctx.lineWidth = i / opts.framesBack * this.size;
		
		ctx.beginPath();
		ctx.moveTo( x, y );

		x += this.vx;
		y += this.vy;
		
		ctx.lineTo( x, y );
		ctx.stroke();
	}
	for( var i = 0; i < opts.framesFront; ++i ){
		
		ctx.lineWidth = this.size - i / opts.framesFront * this.size;
		
		ctx.beginPath();
		ctx.moveTo( x, y );

		x += this.vx;
		y += this.vy;
		
		ctx.lineTo( x, y );
		ctx.stroke();
	}
}
anim();
window.addEventListener( 'resize', function(){
	
	w = c.width = window.innerWidth;
	h = c.height = window.innerHeight;
})