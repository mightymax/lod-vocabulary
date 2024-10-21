// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.w3.org/ns/sosa/');

/**
 * [sosa](http://www.w3.org/ns/sosa/})
 */
const sosa = {
  /**
    * **[Actuatable Property](http://www.w3.org/ns/sosa/ActuatableProperty)** (class)
    * 
    * An actuatable quality (property, characteristic) of a FeatureOfInterest.
    */
    ActuatableProperty: prefixer('ActuatableProperty'),

    /**
    * **[Actuation](http://www.w3.org/ns/sosa/Actuation)** (class)
    * 
    * An Actuation carries out an (Actuation) Procedure to change the state of the world using an Actuator.
    */
    Actuation: prefixer('Actuation'),

    /**
    * **[Actuator](http://www.w3.org/ns/sosa/Actuator)** (class)
    * 
    * A device that is used by, or implements, an (Actuation) Procedure that changes the state of the world.
    */
    Actuator: prefixer('Actuator'),

    /**
    * **[Feature Of Interest](http://www.w3.org/ns/sosa/FeatureOfInterest)** (class)
    * 
    * The thing whose property is being estimated or calculated in the course of an Observation to arrive at a Result or whose property is being manipulated by an Actuator, or which is being sampled or transformed in an act of Sampling.
    */
    FeatureOfInterest: prefixer('FeatureOfInterest'),

    /**
    * **[Observable Property](http://www.w3.org/ns/sosa/ObservableProperty)** (class)
    * 
    * An observable quality (property, characteristic) of a FeatureOfInterest.
    */
    ObservableProperty: prefixer('ObservableProperty'),

    /**
    * **[Observation](http://www.w3.org/ns/sosa/Observation)** (class)
    * 
    * Act of carrying out an (Observation) Procedure to estimate or calculate a value of a property of a FeatureOfInterest. Links to a Sensor to describe what made the Observation and how; links to an ObservableProperty to describe what the result is an estimate of, and to a FeatureOfInterest to detail what that property was associated with.
    */
    Observation: prefixer('Observation'),

    /**
    * **[Platform](http://www.w3.org/ns/sosa/Platform)** (class)
    * 
    * A Platform is an entity that hosts other entities, particularly Sensors, Actuators, Samplers, and other Platforms.
    */
    Platform: prefixer('Platform'),

    /**
    * **[Procedure](http://www.w3.org/ns/sosa/Procedure)** (class)
    * 
    * A workflow, protocol, plan, algorithm, or computational method specifying how to make an Observation, create a Sample, or make a change to the state of the world (via an Actuator). A Procedure is re-usable, and might be involved in many Observations, Samplings, or Actuations. It explains the steps to be carried out to arrive at reproducible results.
    */
    Procedure: prefixer('Procedure'),

    /**
    * **[Result](http://www.w3.org/ns/sosa/Result)** (class)
    * 
    * The Result of an Observation, Actuation, or act of Sampling. To store an observation's simple result value one can use the hasSimpleResult property.
    */
    Result: prefixer('Result'),

    /**
    * **[Sample](http://www.w3.org/ns/sosa/Sample)** (class)
    * 
    * Feature which is intended to be representative of a FeatureOfInterest on which Observations may be made.
    */
    Sample: prefixer('Sample'),

    /**
    * **[Sampler](http://www.w3.org/ns/sosa/Sampler)** (class)
    * 
    * A device that is used by, or implements, a Sampling Procedure to create or transform one or more samples.
    */
    Sampler: prefixer('Sampler'),

    /**
    * **[Sampling](http://www.w3.org/ns/sosa/Sampling)** (class)
    * 
    * An act of Sampling carries out a sampling Procedure to create or transform one or more samples.
    */
    Sampling: prefixer('Sampling'),

    /**
    * **[Sensor](http://www.w3.org/ns/sosa/Sensor)** (class)
    * 
    * Device, agent (including humans), or software (simulation) involved in, or implementing, a Procedure. Sensors respond to a stimulus, e.g., a change in the environment, or input data composed from the results of prior Observations, and generate a Result. Sensors can be hosted by Platforms.
    */
    Sensor: prefixer('Sensor'),

    /**
    * **[acts on property](http://www.w3.org/ns/sosa/actsOnProperty)** (property)
    * 
    * Relation between an Actuation and the property of a FeatureOfInterest it is acting upon.
    */
    actsOnProperty: prefixer('actsOnProperty'),

    /**
    * **[is acted on by](http://www.w3.org/ns/sosa/isActedOnBy)** (property)
    * 
    * Relation between an ActuatableProperty of a FeatureOfInterest and an Actuation changing its state.
    */
    isActedOnBy: prefixer('isActedOnBy'),

    /**
    * **[has feature of interest](http://www.w3.org/ns/sosa/hasFeatureOfInterest)** (property)
    * 
    * A relation between an Observation and the entity whose quality was observed, or between an Actuation and the entity whose property was modified, or between an act of Sampling and the entity that was sampled.
    */
    hasFeatureOfInterest: prefixer('hasFeatureOfInterest'),

    /**
    * **[is feature of interest of](http://www.w3.org/ns/sosa/isFeatureOfInterestOf)** (property)
    * 
    * A relation between a FeatureOfInterest and an Observation about it, an Actuation acting on it, or an act of Sampling that sampled it.
    */
    isFeatureOfInterestOf: prefixer('isFeatureOfInterestOf'),

    /**
    * **[has result](http://www.w3.org/ns/sosa/hasResult)** (property)
    * 
    * Relation linking an Observation or Actuation or act of Sampling and a Result or Sample.
    */
    hasResult: prefixer('hasResult'),

    /**
    * **[is result of](http://www.w3.org/ns/sosa/isResultOf)** (property)
    * 
    * Relation linking a Result to the Observation or Actuation or act of Sampling that created or caused it.
    */
    isResultOf: prefixer('isResultOf'),

    /**
    * **[has sample](http://www.w3.org/ns/sosa/hasSample)** (property)
    * 
    * Relation between a FeatureOfInterest and the Sample used to represent it.
    */
    hasSample: prefixer('hasSample'),

    /**
    * **[is sample of](http://www.w3.org/ns/sosa/isSampleOf)** (property)
    * 
    * Relation from a Sample to the FeatureOfInterest that it is intended to be representative of.
    */
    isSampleOf: prefixer('isSampleOf'),

    /**
    * **[hosts](http://www.w3.org/ns/sosa/hosts)** (property)
    * 
    * Relation between a Platform and a Sensor, Actuator, Sampler, or Platform, hosted or mounted on it.
    */
    hosts: prefixer('hosts'),

    /**
    * **[is hosted by](http://www.w3.org/ns/sosa/isHostedBy)** (property)
    * 
    * Relation between a Sensor, Actuator, Sampler, or Platform, and the Platform that it is mounted on or hosted by.
    */
    isHostedBy: prefixer('isHostedBy'),

    /**
    * **[is observed by](http://www.w3.org/ns/sosa/isObservedBy)** (property)
    * 
    * Relation between an ObservableProperty and the Sensor able to observe it.
    */
    isObservedBy: prefixer('isObservedBy'),

    /**
    * **[observes](http://www.w3.org/ns/sosa/observes)** (property)
    * 
    * Relation between a Sensor and an ObservableProperty that it is capable of sensing.
    */
    observes: prefixer('observes'),

    /**
    * **[made actuation](http://www.w3.org/ns/sosa/madeActuation)** (property)
    * 
    * Relation between an Actuator and the Actuation it has made.
    */
    madeActuation: prefixer('madeActuation'),

    /**
    * **[made by actuator](http://www.w3.org/ns/sosa/madeByActuator)** (property)
    * 
    * Relation linking an Actuation to the Actuator that made that Actuation.
    */
    madeByActuator: prefixer('madeByActuator'),

    /**
    * **[made by sampler](http://www.w3.org/ns/sosa/madeBySampler)** (property)
    * 
    * Relation linking an act of Sampling to the Sampler (sampling device or entity) that made it.
    */
    madeBySampler: prefixer('madeBySampler'),

    /**
    * **[made sampling](http://www.w3.org/ns/sosa/madeSampling)** (property)
    * 
    * Relation between a Sampler (sampling device or entity) and the Sampling act it performed.
    */
    madeSampling: prefixer('madeSampling'),

    /**
    * **[made by sensor](http://www.w3.org/ns/sosa/madeBySensor)** (property)
    * 
    * Relation between an Observation and the Sensor which made the Observation.
    */
    madeBySensor: prefixer('madeBySensor'),

    /**
    * **[made observation](http://www.w3.org/ns/sosa/madeObservation)** (property)
    * 
    * Relation between a Sensor and an Observation made by the Sensor.
    */
    madeObservation: prefixer('madeObservation'),

    /**
    * **[observed property](http://www.w3.org/ns/sosa/observedProperty)** (property)
    * 
    * Relation linking an Observation to the property that was observed. The ObservableProperty should be a property of the FeatureOfInterest (linked by hasFeatureOfInterest) of this Observation.
    */
    observedProperty: prefixer('observedProperty'),

    /**
    * **[phenomenon time](http://www.w3.org/ns/sosa/phenomenonTime)** (property)
    * 
    * The time that the Result of an Observation, Actuation or Sampling applies to the FeatureOfInterest. Not necessarily the same as the resultTime. May be an Interval or an Instant, or some other compound TemporalEntity.
    */
    phenomenonTime: prefixer('phenomenonTime'),

    /**
    * **[used procedure](http://www.w3.org/ns/sosa/usedProcedure)** (property)
    * 
    * A relation to link to a re-usable Procedure used in making an Observation, an Actuation, or a Sample, typically through a Sensor, Actuator or Sampler.
    */
    usedProcedure: prefixer('usedProcedure'),

    /**
    * **[has simple result](http://www.w3.org/ns/sosa/hasSimpleResult)** (property)
    * 
    * The simple value of an Observation or Actuation or act of Sampling.
    */
    hasSimpleResult: prefixer('hasSimpleResult'),

    /**
    * **[result time](http://www.w3.org/ns/sosa/resultTime)** (property)
    * 
    * The result time is the instant of time when the Observation, Actuation or Sampling activity was completed.
    */
    resultTime: prefixer('resultTime'),

  
  };

export default sosa

