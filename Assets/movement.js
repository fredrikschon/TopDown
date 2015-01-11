#pragma strict

var moveUp : KeyCode;
var moveRight : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRoll : KeyCode;

var maxSpeed : float;

var rollCooldown : float;
private var timestamp : float;

function Update () {
	
	rigidbody2D.velocity = new Vector2(0,0);
	
	if(Input.GetKey(moveUp)){
		if(rigidbody2D.velocity.y < maxSpeed){
			rigidbody2D.velocity.y = maxSpeed;
		}
	}
	if(Input.GetKey(moveDown)){
		if(rigidbody2D.velocity.y > -maxSpeed){
			rigidbody2D.velocity.y = -maxSpeed;
		}
	}
	if(Input.GetKey(moveRight)){
		if(rigidbody2D.velocity.x < maxSpeed){
			rigidbody2D.velocity.x = maxSpeed;
		}
	}
	if(Input.GetKey(moveLeft)){
		if(rigidbody2D.velocity.x > -maxSpeed){
			rigidbody2D.velocity.x = -maxSpeed;
		}
	}
	if(Input.GetKey(moveRoll)){
		if(timestamp <= Time.time){	
			rigidbody2D.AddForce(rigidbody2D.velocity*1000);
			timestamp = Time.time + rollCooldown;
			Debug.Log(timestamp +  "<- Timestamp - current time ->"+ Time.time);
		}
	}
}