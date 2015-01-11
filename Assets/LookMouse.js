#pragma strict

function Update () {
	var mousePosition = Camera.main.ScreenToWorldPoint(Input.mousePosition);
	
	var rot : Quaternion = Quaternion.LookRotation(transform.position - mousePosition, Vector3.forward);
	
	transform.rotation = rot;
	
	transform.eulerAngles = new Vector3(0,0,transform.eulerAngles.z);
	
	rigidbody2D.angularVelocity = 0;
}