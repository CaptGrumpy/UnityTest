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
	var turret : Transform;
	turret = transform.Find("Turret");
	if ( ++Count > 60 ) { Dir = -Dir; Count = -60; }
	turret.Rotate( Vector3(0,Dir,0) );
	turret.transform.Find("CannonLeft").Rotate( Vector3(Dir*0.5,0,0) );
	turret.transform.Find("CannonRight").Rotate( Vector3(Dir*0.5,0,0) );
	if ( transform.position != OldPosition )
	{
		transform.Find("WheelFL").Rotate( Vector3(0,-1,0) );
		transform.Find("WheelFR").Rotate( Vector3(0,-1,0) );
		transform.Find("WheelRL").Rotate( Vector3(0,-1,0) );
		transform.Find("WheelRR").Rotate( Vector3(0,-1,0) );
		OldPosition = transform.position;
	}
}
