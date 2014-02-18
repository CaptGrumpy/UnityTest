#pragma strict

function Start ()
{
}

function Update ()
{
	Camera.main.transform.position.x += Input.GetAxis( "Mouse X" );
	Camera.main.transform.position.y += Input.GetAxis( "Mouse Y" );
	Camera.main.transform.position.z += Input.GetAxis( "Mouse ScrollWheel" );
}

function OnMouseUp ()
{
	// Construct a ray from the current mouse coordinates
	var ray : Ray = Camera.main.ScreenPointToRay( Input.mousePosition );
	var hit : RaycastHit;
	if ( Physics.Raycast( ray, hit ) )
	{
		Debug.DrawLine( ray.origin, hit.point );
		GameObject.Find( "StatusBar" ).GetComponent.<GUIText>().text = "Clicked: " + hit.point;
		GameObject.Find( "Flame" ).GetComponent.<NavMeshAgent>().SetDestination( hit.point );
		GameObject.Find( "Tower" ).GetComponent.<NavMeshAgent>().SetDestination( hit.point );
	}
}
