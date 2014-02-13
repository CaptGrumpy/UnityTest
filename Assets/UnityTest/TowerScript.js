#pragma strict

private var Count : int;
private var Dir   : int;
private var OldPosition : Vector3;

function Start ()
{
	Count = 0;
	Dir   = 1;
}

function Update ()
{
	var turret  : Transform = transform.Find("Turret");
	var cannons : Transform = turret.transform.Find("CannonHolder");
	if ( ++Count > 60 ) { Dir = -Dir; Count = -60; }
	if ( transform.position != OldPosition )
	{
		transform.Find("WheelFL").Rotate( Vector3(0,-1,0) );
		transform.Find("WheelFR").Rotate( Vector3(0,-1,0) );
		transform.Find("WheelRL").Rotate( Vector3(0,-1,0) );
		transform.Find("WheelRR").Rotate( Vector3(0,-1,0) );
		OldPosition = transform.position;
	}
	var target : Transform = GameObject.Find("Flame").transform;
	var vec : Vector3 = target.position;
	target.position.y = turret.transform.position.y;
	turret.LookAt( target );
	//turret.Rotate( Vector3(0,Dir,0) );
	target.position = vec;
	//target.position.x = cannons.transform.position.x;
	//target.position.z = cannons.transform.position.z;
	cannons.LookAt( target );
	//cannons.Rotate( Vector3(Dir*0.5,0,0) );
	target.position = vec;
}
