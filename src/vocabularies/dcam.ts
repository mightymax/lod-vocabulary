// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://purl.org/dc/dcam/');

/**
 * [dcam](http://purl.org/dc/dcam/})
 */
const dcam = {
  /**
    * **[Vocabulary Encoding Scheme](http://purl.org/dc/dcam/VocabularyEncodingScheme)** (class)
    * 
    * An enumerated set of resources.
    */
    VocabularyEncodingScheme: prefixer('VocabularyEncodingScheme'),

    /**
    * **[Domain Includes](http://purl.org/dc/dcam/domainIncludes)** (property)
    * 
    * A suggested class for subjects of this property.
    */
    domainIncludes: prefixer('domainIncludes'),

    /**
    * **[Member Of](http://purl.org/dc/dcam/memberOf)** (property)
    * 
    * A relationship between a resource and a vocabulary encoding scheme which indicates that the resource is a member of a set.
    */
    memberOf: prefixer('memberOf'),

    /**
    * **[Range Includes](http://purl.org/dc/dcam/rangeIncludes)** (property)
    * 
    * A suggested class for values of this property.
    */
    rangeIncludes: prefixer('rangeIncludes'),

  
  };

export default dcam

