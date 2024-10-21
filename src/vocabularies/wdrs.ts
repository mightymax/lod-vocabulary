// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.w3.org/2007/05/powder-s#');

/**
 * [wdrs](http://www.w3.org/2007/05/powder-s#})
 */
const wdrs = {
  /**
    * **[POWDER document](http://www.w3.org/2007/05/powder-s#Document)** (class)
    * 
    * A POWDER document.
    */
    Document: prefixer('Document'),

    /**
    * **[POWDER processor](http://www.w3.org/2007/05/powder-s#Processor)** (class)
    * 
    * A software agent able to process POWDER documents.
    */
    Processor: prefixer('Processor'),

    /**
    * **[authenticate](http://www.w3.org/2007/05/powder-s#authenticate)** (property)
    * 
    * A pointer to a document that describes how Description Resources created by a FOAF Agent or a DC Terms Agent may be authenticated
    */
    authenticate: prefixer('authenticate'),

    /**
    * **[certified](http://www.w3.org/2007/05/powder-s#certified)** (property)
    * 
    * A property that takes a Boolean value to declare whether the author of the data certifies the described resource.
    */
    certified: prefixer('certified'),

    /**
    * **[certified by](http://www.w3.org/2007/05/powder-s#certifiedby)** (property)
    * 
    * A property that links a resource to a POWDER document that certifies it.
    */
    certifiedby: prefixer('certifiedby'),

    /**
    * **[data error](http://www.w3.org/2007/05/powder-s#data_error)** (property)
    * 
    * A property denoting a description of the specific error found in a given POWDER document.
    */
    data_error: prefixer('data_error'),

    /**
    * **[described by](http://www.w3.org/2007/05/powder-s#describedby)** (property)
    * 
    * An RDF property to exactly match the describedby relationship type introduced in http://www.w3.org/TR/powder-dr/#assoc-linking and formally defined in appendix D of the same document, i.e. the relationship A 'describedby' B asserts that resource B provides a description of resource A. There are no constraints on the format or representation of either A or B, neither are there any further constraints on either resource.
    */
    describedby: prefixer('describedby'),

    /**
    * **[error code](http://www.w3.org/2007/05/powder-s#error_code)** (property)
    * 
    * A property denoting the code of any error encountered by the POWDER processor.
    */
    error_code: prefixer('error_code'),

    /**
    * **[has IRI](http://www.w3.org/2007/05/powder-s#hasIRI)** (property)
    * 
    * This property is meant to be used in OWL2 instead of wdrs:matchesregex. It denotes the string data range corresponding to a set of IRIs.
    */
    hasIRI: prefixer('hasIRI'),

    /**
    * **[issued by](http://www.w3.org/2007/05/powder-s#issuedby)** (property)
    * 
    * This property denotes the author of a POWDER document.
    */
    issuedby: prefixer('issuedby'),

    /**
    * **[logo](http://www.w3.org/2007/05/powder-s#logo)** (property)
    * 
    * Points to a graphic summary for the resources in a given class. Typically, it is a logo denoting conformance of a given (set of) resource(s) to a given set of criteria.
    */
    logo: prefixer('logo'),

    /**
    * **[matches regular expression](http://www.w3.org/2007/05/powder-s#matchesregex)** (property)
    * 
    * This is the key 'include' property for IRI set definitions in POWDER-S. It is necessary to take account of the POWDER Semantic Extension to process this fully. The value is a regular expression that is matched against an IRI.
    */
    matchesregex: prefixer('matchesregex'),

    /**
    * **[not known to](http://www.w3.org/2007/05/powder-s#notknownto)** (property)
    * 
    * Property used in results returned from a POWDER Processor that has no data about the candidate resource. The value is the IRI of the processor.
    */
    notknownto: prefixer('notknownto'),

    /**
    * **[matches regular expression](http://www.w3.org/2007/05/powder-s#notmatchesregex)** (property)
    * 
    * This is the key 'exclude' property for IRI set definitions in POWDER-S. It is necessary to take account of the POWDER Semantic Extension to process this fully. The value is a regular expression that is matched against an IRI.
    */
    notmatchesregex: prefixer('notmatchesregex'),

    /**
    * **[processing error](http://www.w3.org/2007/05/powder-s#proc_error)** (property)
    * 
    * A property denoting a description of the specific software error.
    */
    proc_error: prefixer('proc_error'),

    /**
    * **[SHA-1 sum](http://www.w3.org/2007/05/powder-s#sha1sum)** (property)
    * 
    * Links to a Base64-encoded binary SHA-1 hash of the described resource. May be used by POWDER Processors when assessing trustworthiness of a DR.
    */
    sha1sum: prefixer('sha1sum'),

    /**
    * **[supported by](http://www.w3.org/2007/05/powder-s#supportedby)** (property)
    * 
    * A property that links a POWDER document to some other data source that supports the descriptions provided.
    */
    supportedby: prefixer('supportedby'),

    /**
    * **[tag](http://www.w3.org/2007/05/powder-s#tag)** (property)
    * 
    * Property linking to a free-text tag which may include spaces.
    */
    tag: prefixer('tag'),

    /**
    * **[text that may be displayed](http://www.w3.org/2007/05/powder-s#text)** (property)
    * 
    * This property provides a summary of the descriptorset that it annotates, suitable for display to end users.
    */
    text: prefixer('text'),

    /**
    * **[valid from](http://www.w3.org/2007/05/powder-s#validfrom)** (property)
    * 
    * Provides a timestamp that a POWDER Processor may use when assessing trustworthiness of a POWDER document. Informally, a POWDER Processor should normally ignore data in the document before the given date.
    */
    validfrom: prefixer('validfrom'),

    /**
    * **[valid until](http://www.w3.org/2007/05/powder-s#validuntil)** (property)
    * 
    * Provides a timestamp that a POWDER Processor may use when assessing trustworthiness of a POWDER document. Informally, a POWDER Processor should normally ignore data in the document after the given date.
    */
    validuntil: prefixer('validuntil'),

  
  };

export default wdrs

