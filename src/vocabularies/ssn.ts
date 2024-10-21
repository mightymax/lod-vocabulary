// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.w3.org/ns/ssn/');

/**
 * [ssn](http://www.w3.org/ns/ssn/})
 */
const ssn = {
  /**
    * **[Property](http://www.w3.org/ns/ssn/Property)** (class)
    * 
    * A quality of an entity. An aspect of an entity that is intrinsic to and cannot exist without the entity.
    */
    Property: prefixer('Property'),

    /**
    * **[System](http://www.w3.org/ns/ssn/System)** (class)
    * 
    * System is a unit of abstraction for pieces of infrastructure that implement Procedures. A System may have components, its subsystems, which are other systems.
    */
    System: prefixer('System'),

    /**
    * **[Deployment](http://www.w3.org/ns/ssn/Deployment)** (class)
    * 
    * Describes the Deployment of one or more Systems for a particular purpose. Deployment may be done on a Platform.
    */
    Deployment: prefixer('Deployment'),

    /**
    * **[Input](http://www.w3.org/ns/ssn/Input)** (class)
    * 
    * Any information that is provided to a Procedure for its use.
    */
    Input: prefixer('Input'),

    /**
    * **[Output](http://www.w3.org/ns/ssn/Output)** (class)
    * 
    * Any information that is reported from a Procedure.
    */
    Output: prefixer('Output'),

    /**
    * **[Stimulus](http://www.w3.org/ns/ssn/Stimulus)** (class)
    * 
    * An event in the real world that 'triggers' the Sensor. The properties associated to the Stimulus may be different to the eventual observed ObservableProperty. It is the event, not the object, that triggers the Sensor.
    */
    Stimulus: prefixer('Stimulus'),

    /**
    * **[for property](http://www.w3.org/ns/ssn/forProperty)** (property)
    * 
    * A relation between some aspect of an entity and a Property.
    */
    forProperty: prefixer('forProperty'),

    /**
    * **[deployed on platform](http://www.w3.org/ns/ssn/deployedOnPlatform)** (property)
    * 
    * Relation between a Deployment and the Platform on which the Systems are deployed.
    */
    deployedOnPlatform: prefixer('deployedOnPlatform'),

    /**
    * **[in deployment](http://www.w3.org/ns/ssn/inDeployment)** (property)
    * 
    * Relation between a Platform and a Deployment, meaning that the deployedSystems of the Deployment are hosted on the Platform.
    */
    inDeployment: prefixer('inDeployment'),

    /**
    * **[deployed system](http://www.w3.org/ns/ssn/deployedSystem)** (property)
    * 
    * Relation between a Deployment and a deployed System.
    */
    deployedSystem: prefixer('deployedSystem'),

    /**
    * **[has deployment](http://www.w3.org/ns/ssn/hasDeployment)** (property)
    * 
    * Relation between a System and a Deployment, recording that the System is deployed in that Deployment.
    */
    hasDeployment: prefixer('hasDeployment'),

    /**
    * **[detects](http://www.w3.org/ns/ssn/detects)** (property)
    * 
    * A relation from a Sensor to the Stimulus that the Sensor detects. The Stimulus itself will be serving as a proxy for some ObservableProperty.
    */
    detects: prefixer('detects'),

    /**
    * **[has input](http://www.w3.org/ns/ssn/hasInput)** (property)
    * 
    * Relation between a Procedure and an Input to it.
    */
    hasInput: prefixer('hasInput'),

    /**
    * **[has output](http://www.w3.org/ns/ssn/hasOutput)** (property)
    * 
    * Relation between a Procedure and an Output of it.
    */
    hasOutput: prefixer('hasOutput'),

    /**
    * **[has property](http://www.w3.org/ns/ssn/hasProperty)** (property)
    * 
    * Relation between an entity and a Property of that entity.
    */
    hasProperty: prefixer('hasProperty'),

    /**
    * **[is property of](http://www.w3.org/ns/ssn/isPropertyOf)** (property)
    * 
    * Relation between a Property and the entity it belongs to.
    */
    isPropertyOf: prefixer('isPropertyOf'),

    /**
    * **[has subsystem](http://www.w3.org/ns/ssn/hasSubSystem)** (property)
    * 
    * Relation between a System and its component parts.
    */
    hasSubSystem: prefixer('hasSubSystem'),

    /**
    * **[implemented by](http://www.w3.org/ns/ssn/implementedBy)** (property)
    * 
    * Relation between a Procedure (an algorithm, procedure or method) and an entity that implements that Procedure in some executable way.
    */
    implementedBy: prefixer('implementedBy'),

    /**
    * **[implements](http://www.w3.org/ns/ssn/implements)** (property)
    * 
    * Relation between an entity that implements a Procedure in some executable way and the Procedure (an algorithm, procedure or method).
    */
    implements: prefixer('implements'),

    /**
    * **[is proxy for](http://www.w3.org/ns/ssn/isProxyFor)** (property)
    * 
    * A relation from a Stimulus to the Property that the Stimulus is serving as a proxy for.
    */
    isProxyFor: prefixer('isProxyFor'),

    /**
    * **[was originated by](http://www.w3.org/ns/ssn/wasOriginatedBy)** (property)
    * 
    * Relation between an Observation and the Stimulus that originated it.
    */
    wasOriginatedBy: prefixer('wasOriginatedBy'),

  
  };

export default ssn
