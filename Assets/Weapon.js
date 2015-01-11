#pragma strict

var damage : float;
var fireRate : float;
var whatToHit : LayerMask;

var bullet : GameObject;

var timeToFire : float = 0;
var firePoint : Transform;

function Awake () {
	firePoint = transform.FindChild("FirePoint");
	if(firePoint == null){
		Debug.Log("firEPoint Null");
	}
}

function Update () {
	if (fireRate == 0){
		if(Input.GetKeyDown(KeyCode.Mouse0)){
			shoot();
		}
	}else{
		if(Input.GetKeyDown(KeyCode.Mouse0) && Time.time > timeToFire){
			timeToFire = Time.time + 1/fireRate;
			shoot();
		}
	}
}

function shoot(){

	var clone : GameObject;
	
	var mouseX = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;
	var mouseY = Camera.main.ScreenToWorldPoint(Input.mousePosition).y;
	var mp : Vector2 = new Vector2(mouseX, mouseY);
	
	var firePointPosition : Vector2 = new Vector2 (firePoint.position.x, firePoint.position.y);
	
	var hit : RaycastHit2D = Physics2D.Raycast(firePointPosition, mp-firePointPosition, 100, whatToHit);
	
	clone = (Instantiate(bullet, transform.position,transform.rotation));
	 
	 var sp : Vector3 = Camera.main.WorldToScreenPoint(transform.parent.position);
	 var dir : Vector3 = (Input.mousePosition - sp).normalized;
	 clone.rigidbody2D.AddForce (dir * 400);
	
		
	Debug.DrawLine(firePointPosition, (mp-firePointPosition)*100, Color.cyan);
	if( hit.collider != null ){
		Debug.DrawLine(firePointPosition, hit.point, Color.red);
	}
}