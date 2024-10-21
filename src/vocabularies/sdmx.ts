// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://purl.org/linked-data/sdmx#');

/**
 * [sdmx](http://purl.org/linked-data/sdmx#})
 */
const sdmx = {
  /**
    * **[concept](http://purl.org/linked-data/sdmx#Concept)** (class)
    * 
    * Denotes an SDMX concept, used in the particular SDMX terminological sense, which is in principle narrower than skos:Concept
    */
    Concept: prefixer('Concept'),

    /**
    * **[Concept role (abstract)](http://purl.org/linked-data/sdmx#ConceptRole)** (class)
    * 
    * Abstract superclass of classes denoting statistical roles which be played by concepts
    */
    ConceptRole: prefixer('ConceptRole'),

    /**
    * **[Count property](http://purl.org/linked-data/sdmx#CountRole)** (class)
    * 
    * concept for a dimension or attribute that plays the role of an identifier where the identifier is taken from a known system of counts (e.g. the Nth current dataset update for a given day)
    */
    CountRole: prefixer('CountRole'),

    /**
    * **[Data Structure Definition](http://purl.org/linked-data/sdmx#DataStructureDefinition)** (class)
    * 
    * A specialization of qb:DataStructureDefinition which additional constraints: if there are multiple measures then a MeasureDimensionProperty must be included in the DSD
    */
    DataStructureDefinition: prefixer('DataStructureDefinition'),

    /**
    * **[Entity property](http://purl.org/linked-data/sdmx#EntityRole)** (class)
    * 
    * concept for a dimension or attribute that plays the role of the DataAttribute subject to whom the data refers (e.g. the reporting agent for primary reporting, the country for secondary reporting)
    */
    EntityRole: prefixer('EntityRole'),

    /**
    * **[Frequency property](http://purl.org/linked-data/sdmx#FrequencyRole)** (class)
    * 
    * concept for a dimension or attribute that plays the role of frequency
    */
    FrequencyRole: prefixer('FrequencyRole'),

    /**
    * **[Identity property](http://purl.org/linked-data/sdmx#IdentityRole)** (class)
    * 
    * concept for a dimension or attribute that plays the role of an identifier which is taken from a known scheme of identifiers.
    */
    IdentityRole: prefixer('IdentityRole'),

    /**
    * **[Measure type property](http://purl.org/linked-data/sdmx#MeasureTypeRole)** (class)
    * 
    * concept for a dimension that plays the role of identifying a type of measure
    */
    MeasureTypeRole: prefixer('MeasureTypeRole'),

    /**
    * **[Non-observation time property](http://purl.org/linked-data/sdmx#NonObsTimeRole)** (class)
    * 
    * concept for a dimension or attribute that plays the role of a date/time identifier in the KeyFamily which is not related to the time of the observation
    */
    NonObsTimeRole: prefixer('NonObsTimeRole'),

    /**
    * **[Primary measure property](http://purl.org/linked-data/sdmx#PrimaryMeasureRole)** (class)
    * 
    * concept for a measure that plays the role of the observation in a time series
    */
    PrimaryMeasureRole: prefixer('PrimaryMeasureRole'),

    /**
    * **[Time property](http://purl.org/linked-data/sdmx#TimeRole)** (class)
    * 
    * concept for a dimension that specifies the time of the observation of the primaryMeasure
    */
    TimeRole: prefixer('TimeRole'),

    /**
    * **[primary measure](http://purl.org/linked-data/sdmx#primaryMeasure)** (property)
    * 
    * Indicates an additional component used as the primary measure within the SDMX data. In the case of multi-measure data sets the RDF representation uses the specific measure rather than a subsuming overall measure. This property records the subsuming primary measure (typically sdmx-measure:obsValue) to enable round tripping of this information.
    */
    primaryMeasure: prefixer('primaryMeasure'),

  
  };

export default sdmx
