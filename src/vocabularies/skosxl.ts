// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.w3.org/2008/05/skos-xl#');

/**
 * [skosxl](http://www.w3.org/2008/05/skos-xl#})
 */
const skosxl = {
  /**
    * **[Label](http://www.w3.org/2008/05/skos-xl#Label)** (class)
    * 
    * A special class of lexical entities.
    */
    Label: prefixer('Label'),

    /**
    * **[alternative label](http://www.w3.org/2008/05/skos-xl#altLabel)** (property)
    * 
    * The property skosxl:altLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:altLabel.
    */
    altLabel: prefixer('altLabel'),

    /**
    * **[hidden label](http://www.w3.org/2008/05/skos-xl#hiddenLabel)** (property)
    * 
    * The property skosxl:hiddenLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:hiddenLabel.
    */
    hiddenLabel: prefixer('hiddenLabel'),

    /**
    * **[label relation](http://www.w3.org/2008/05/skos-xl#labelRelation)** (property)
    * 
    * The property skosxl:labelRelation is used for representing binary ('direct') relations between instances of the class skosxl:Label.
    */
    labelRelation: prefixer('labelRelation'),

    /**
    * **[literal form](http://www.w3.org/2008/05/skos-xl#literalForm)** (property)
    * 
    * The property skosxl:literalForm is used to give the literal form of an skosxl:Label.
    */
    literalForm: prefixer('literalForm'),

    /**
    * **[preferred label](http://www.w3.org/2008/05/skos-xl#prefLabel)** (property)
    * 
    * The property skosxl:prefLabel is used to associate an skosxl:Label with a skos:Concept. The property is analogous to skos:prefLabel.
    */
    prefLabel: prefixer('prefLabel'),

  
  };

export default skosxl

