// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.geonames.org/ontology#');

/**
 * [gn](http://www.geonames.org/ontology#})
 */
const gn = {
  /**
    * **[notation](http://www.w3.org/2004/02/skos/core#notation)** (property)
    * 
    * Used to store the values of feature codes
    */
    'skos:notation': prefixer('skos:notation'),

    /**
    * **[ISO country code](http://www.geonames.org/ontology#countryCode)** (property)
    * 
    * A two letters country code in the ISO 3166 list
    */
    countryCode: prefixer('countryCode'),

    /**
    * **[name](http://www.geonames.org/ontology#name)** (property)
    * 
    * The main international name of a feature. The value has no xml:lang tag.
    */
    name: prefixer('name'),

    /**
    * **[official name](http://www.geonames.org/ontology#officialName)** (property)
    * 
    * A name in an official local language
    */
    officialName: prefixer('officialName'),

    /**
    * **[Code](http://www.geonames.org/ontology#Code)** (class)
    * 
    * A feature code.
    */
    Code: prefixer('Code'),

    /**
    * **[Class](http://www.geonames.org/ontology#Class)** (class)
    * 
    * A class of features.
    */
    Class: prefixer('Class'),

    /**
    * **[Feature](http://www.geonames.org/ontology#Feature)** (class)
    * 
    * A geographical feature
    */
    Feature: prefixer('Feature'),

    /**
    * **[Geonames Feature](http://www.geonames.org/ontology#GeonamesFeature)** (class)
    * 
    * A feature described in geonames database, uniquely defined by its geonames identifier
    */
    GeonamesFeature: prefixer('GeonamesFeature'),

    /**
    * **[Map](http://www.geonames.org/ontology#Map)** (class)
    * 
    * A Web page displaying a map
    */
    Map: prefixer('Map'),

    /**
    * **[RDF Data](http://www.geonames.org/ontology#RDFData)** (class)
    * 
    * A Document containing RDF description of one or several features.
    */
    RDFData: prefixer('RDFData'),

    /**
    * **[Wikipedia Article](http://www.geonames.org/ontology#WikipediaArticle)** (class)
    * 
    * A Wikipedia article
    */
    WikipediaArticle: prefixer('WikipediaArticle'),

    /**
    * **[children features](http://www.geonames.org/ontology#childrenFeatures)** (property)
    * 
    * Links to an RDF document containing the descriptions of children features
    */
    childrenFeatures: prefixer('childrenFeatures'),

    /**
    * **[feature class](http://www.geonames.org/ontology#featureClass)** (property)
    * 
    * The main category of the feature, as defined in geonames taxonomy.
    */
    featureClass: prefixer('featureClass'),

    /**
    * **[feature code](http://www.geonames.org/ontology#featureCode)** (property)
    * 
    * Type of the feature, as defined in geonames taxonomy.
    */
    featureCode: prefixer('featureCode'),

    /**
    * **[located in](http://www.geonames.org/ontology#locatedIn)** (property)
    * 
    * Indicates that the subject resource is located in the object feature
    */
    locatedIn: prefixer('locatedIn'),

    /**
    * **[map](http://www.geonames.org/ontology#locationMap)** (property)
    * 
    * A geonames map centered on the feature.
    */
    locationMap: prefixer('locationMap'),

    /**
    * **[nearby](http://www.geonames.org/ontology#nearby)** (property)
    * 
    * A feature close to the reference feature
    */
    nearby: prefixer('nearby'),

    /**
    * **[nearby features](http://www.geonames.org/ontology#nearbyFeatures)** (property)
    * 
    * Links to an RDF document containing the descriptions of nearby features
    */
    nearbyFeatures: prefixer('nearbyFeatures'),

    /**
    * **[neighbour](http://www.geonames.org/ontology#neighbour)** (property)
    * 
    * A feature sharing a common boarder with the reference feature
    */
    neighbour: prefixer('neighbour'),

    /**
    * **[neighbouring features](http://www.geonames.org/ontology#neighbouringFeatures)** (property)
    * 
    * Links to an RDF document containing the descriptions of neighbouring features. Applies when the feature has definite boarders.
    */
    neighbouringFeatures: prefixer('neighbouringFeatures'),

    /**
    * **[parent feature](http://www.geonames.org/ontology#parentFeature)** (property)
    * 
    * A feature parent of the current one, in either administrative or physical subdivision.
    */
    parentFeature: prefixer('parentFeature'),

    /**
    * **[wikipedia article](http://www.geonames.org/ontology#wikipediaArticle)** (property)
    * 
    * A Wikipedia article of which subject is the resource.
    */
    wikipediaArticle: prefixer('wikipediaArticle'),

  
  };

export default gn

