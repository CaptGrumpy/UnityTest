#pragma strict

var BackObject: GameObject;
var ForeObject: GameObject;

private var path: NavMeshPath;
private var agent: NavMeshAgent;

function Start ()
{
	Debug.Log( "BackObject is at " + BackObject.transform.position );
	Debug.Log( "ForeObject is at " + ForeObject.transform.position );
	agent = GetComponent.<NavMeshAgent>();
	agent.SetDestination( ForeObject.transform.position );
}

function Update ()
{
	//Debug.Log( "We are at " + transform.position + " and agent destination is at " + agent.destination );
	if ( agent.remainingDistance < 0.1 )
	{
		if ( agent.destination.x == BackObject.transform.position.x && agent.destination.z == BackObject.transform.position.z )
			agent.SetDestination( ForeObject.transform.position );
		else
			agent.SetDestination( BackObject.transform.position );
	}
}

function OnCollisionEnter( collision: Collision )
{
	if ( collision.gameObject.name == "BigTree" )
	{
		Debug.Log( "Hit tree" );
	}
}
