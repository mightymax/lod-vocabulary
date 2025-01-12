// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.w3.org/ns/hydra/core#');

/**
 * [hydra](http://www.w3.org/ns/hydra/core#})
 */
const hydra = {
  /**
    * **[ApiDocumentation](http://www.w3.org/ns/hydra/core#ApiDocumentation)** (class)
    * 
    * The Hydra API documentation class
    */
    ApiDocumentation: prefixer('ApiDocumentation'),

    /**
    * **[Hydra Resource](http://www.w3.org/ns/hydra/core#Resource)** (class)
    * 
    * The class of dereferenceable resources by means a client can attempt to dereference; however, the received responses should still be verified.
    */
    Resource: prefixer('Resource'),

    /**
    * **[Base Uri source](http://www.w3.org/ns/hydra/core#BaseUriSource)** (class)
    * 
    * Provides a base abstract for base Uri source for Iri template resolution.
    */
    BaseUriSource: prefixer('BaseUriSource'),

    /**
    * **[VariableRepresentation](http://www.w3.org/ns/hydra/core#VariableRepresentation)** (class)
    * 
    * A representation specifies how to serialize variable values into strings.
    */
    VariableRepresentation: prefixer('VariableRepresentation'),

    /**
    * **[Collection](http://www.w3.org/ns/hydra/core#Collection)** (class)
    * 
    * A collection holding references to a number of related resources.
    */
    Collection: prefixer('Collection'),

    /**
    * **[Error](http://www.w3.org/ns/hydra/core#Error)** (class)
    * 
    * A runtime error, used to report information beyond the returned status code.
    */
    Error: prefixer('Error'),

    /**
    * **[Status code description](http://www.w3.org/ns/hydra/core#Status)** (class)
    * 
    * Additional information about a status code that might be returned.
    */
    Status: prefixer('Status'),

    /**
    * **[IRI Template](http://www.w3.org/ns/hydra/core#IriTemplate)** (class)
    * 
    * The class of IRI templates.
    */
    IriTemplate: prefixer('IriTemplate'),

    /**
    * **[IriTemplateMapping](http://www.w3.org/ns/hydra/core#IriTemplateMapping)** (class)
    * 
    * A mapping from an IRI template variable to a property.
    */
    IriTemplateMapping: prefixer('IriTemplateMapping'),

    /**
    * **[Link](http://www.w3.org/ns/hydra/core#Link)** (class)
    * 
    * The class of properties representing links.
    */
    Link: prefixer('Link'),

    /**
    * **[Operation](http://www.w3.org/ns/hydra/core#Operation)** (class)
    * 
    * An operation.
    */
    Operation: prefixer('Operation'),

    /**
    * **[PartialCollectionView](http://www.w3.org/ns/hydra/core#PartialCollectionView)** (class)
    * 
    * A PartialCollectionView describes a partial view of a Collection. Multiple PartialCollectionViews can be connected with the the next/previous properties to allow a client to retrieve all members of the collection.
    */
    PartialCollectionView: prefixer('PartialCollectionView'),

    /**
    * **[Supported Property](http://www.w3.org/ns/hydra/core#SupportedProperty)** (class)
    * 
    * A property known to be supported by a Hydra class.
    */
    SupportedProperty: prefixer('SupportedProperty'),

    /**
    * **[Templated Link](http://www.w3.org/ns/hydra/core#TemplatedLink)** (class)
    * 
    * A templated link.
    */
    TemplatedLink: prefixer('TemplatedLink'),

    /**
    * **[Hydra Class](http://www.w3.org/ns/hydra/core#Class)** (class)
    * 
    * The class of Hydra classes.
    */
    Class: prefixer('Class'),

    /**
    * **[apiDocumentation](http://www.w3.org/ns/hydra/core#apiDocumentation)** (property)
    * 
    * A link to the API documentation
    */
    apiDocumentation: prefixer('apiDocumentation'),

    /**
    * **[Header specification](http://www.w3.org/ns/hydra/core#HeaderSpecification)** (class)
    * 
    * Specifies a possible either expected or returned header values
    */
    HeaderSpecification: prefixer('HeaderSpecification'),

    /**
    * **[collection](http://www.w3.org/ns/hydra/core#collection)** (property)
    * 
    * Collections somehow related to this resource.
    */
    collection: prefixer('collection'),

    /**
    * **[entrypoint](http://www.w3.org/ns/hydra/core#entrypoint)** (property)
    * 
    * A link to main entry point of the Web API
    */
    entrypoint: prefixer('entrypoint'),

    /**
    * **[expects](http://www.w3.org/ns/hydra/core#expects)** (property)
    * 
    * The information expected by the Web API.
    */
    expects: prefixer('expects'),

    /**
    * **[first](http://www.w3.org/ns/hydra/core#first)** (property)
    * 
    * The first resource of an interlinked set of resources.
    */
    first: prefixer('first'),

    /**
    * **[last](http://www.w3.org/ns/hydra/core#last)** (property)
    * 
    * The last resource of an interlinked set of resources.
    */
    last: prefixer('last'),

    /**
    * **[member](http://www.w3.org/ns/hydra/core#member)** (property)
    * 
    * A member of the collection
    */
    member: prefixer('member'),

    /**
    * **[next](http://www.w3.org/ns/hydra/core#next)** (property)
    * 
    * The resource following the current instance in an interlinked set of resources.
    */
    next: prefixer('next'),

    /**
    * **[operation](http://www.w3.org/ns/hydra/core#operation)** (property)
    * 
    * An operation supported by the Hydra resource
    */
    operation: prefixer('operation'),

    /**
    * **[possible status](http://www.w3.org/ns/hydra/core#possibleStatus)** (property)
    * 
    * A status that might be returned by the Web API (other statuses should be expected and properly handled as well)
    */
    possibleStatus: prefixer('possibleStatus'),

    /**
    * **[previous](http://www.w3.org/ns/hydra/core#previous)** (property)
    * 
    * The resource preceding the current instance in an interlinked set of resources.
    */
    previous: prefixer('previous'),

    /**
    * **[returns](http://www.w3.org/ns/hydra/core#returns)** (property)
    * 
    * The information returned by the Web API on success
    */
    returns: prefixer('returns'),

    /**
    * **[supported classes](http://www.w3.org/ns/hydra/core#supportedClass)** (property)
    * 
    * A class known to be supported by the Web API
    */
    supportedClass: prefixer('supportedClass'),

    /**
    * **[supported operation](http://www.w3.org/ns/hydra/core#supportedOperation)** (property)
    * 
    * An operation supported by instances of the specific Hydra class, or the target of the Hydra link, or IRI template.
    */
    supportedOperation: prefixer('supportedOperation'),

    /**
    * **[supported properties](http://www.w3.org/ns/hydra/core#supportedProperty)** (property)
    * 
    * The properties known to be supported by a Hydra class
    */
    supportedProperty: prefixer('supportedProperty'),

    /**
    * **[view](http://www.w3.org/ns/hydra/core#view)** (property)
    * 
    * A specific view of a resource.
    */
    view: prefixer('view'),

    /**
    * **[closed set](http://www.w3.org/ns/hydra/core#closedSet)** (property)
    * 
    * Determines whether the provided set of header values is closed or not.
    */
    closedSet: prefixer('closedSet'),

    /**
    * **[description](http://www.w3.org/ns/hydra/core#description)** (property)
    * 
    * A description.
    */
    description: prefixer('description'),

    /**
    * **[expects header](http://www.w3.org/ns/hydra/core#expectsHeader)** (property)
    * 
    * Specification of the header expected by the operation.
    */
    expectsHeader: prefixer('expectsHeader'),

    /**
    * **[extension](http://www.w3.org/ns/hydra/core#extension)** (property)
    * 
    * Hint on what kind of extensions are in use.
    */
    extension: prefixer('extension'),

    /**
    * **[freetext query](http://www.w3.org/ns/hydra/core#freetextQuery)** (property)
    * 
    * A property representing a freetext query.
    */
    freetextQuery: prefixer('freetextQuery'),

    /**
    * **[header name](http://www.w3.org/ns/hydra/core#headerName)** (property)
    * 
    * Name of the header.
    */
    headerName: prefixer('headerName'),

    /**
    * **[take](http://www.w3.org/ns/hydra/core#limit)** (property)
    * 
    * Instructs to limit set only to N elements.
    */
    limit: prefixer('limit'),

    /**
    * **[mapping](http://www.w3.org/ns/hydra/core#mapping)** (property)
    * 
    * A variable-to-property mapping of the IRI template.
    */
    mapping: prefixer('mapping'),

    /**
    * **[method](http://www.w3.org/ns/hydra/core#method)** (property)
    * 
    * The HTTP method.
    */
    method: prefixer('method'),

    /**
    * **[skip](http://www.w3.org/ns/hydra/core#offset)** (property)
    * 
    * Instructs to skip N elements of the set.
    */
    offset: prefixer('offset'),

    /**
    * **[page index](http://www.w3.org/ns/hydra/core#pageIndex)** (property)
    * 
    * Instructs to provide a specific page of the collection at a given index.
    */
    pageIndex: prefixer('pageIndex'),

    /**
    * **[page reference](http://www.w3.org/ns/hydra/core#pageReference)** (property)
    * 
    * Instructs to provide a specific page reference of the collection.
    */
    pageReference: prefixer('pageReference'),

    /**
    * **[possible header value](http://www.w3.org/ns/hydra/core#possibleValue)** (property)
    * 
    * Possible value of the header.
    */
    possibleValue: prefixer('possibleValue'),

    /**
    * **[property](http://www.w3.org/ns/hydra/core#property)** (property)
    * 
    * A property
    */
    property: prefixer('property'),

    /**
    * **[readable](http://www.w3.org/ns/hydra/core#readable)** (property)
    * 
    * True if the client can retrieve the property's value, false otherwise.
    */
    readable: prefixer('readable'),

    /**
    * **[required](http://www.w3.org/ns/hydra/core#required)** (property)
    * 
    * True if the property is required, false otherwise.
    */
    required: prefixer('required'),

    /**
    * **[returns header](http://www.w3.org/ns/hydra/core#returnsHeader)** (property)
    * 
    * Name of the header returned by the operation.
    */
    returnsHeader: prefixer('returnsHeader'),

    /**
    * **[status code](http://www.w3.org/ns/hydra/core#statusCode)** (property)
    * 
    * The HTTP status code. Please note it may happen this value will be different to actual status code received.
    */
    statusCode: prefixer('statusCode'),

    /**
    * **[template](http://www.w3.org/ns/hydra/core#template)** (property)
    * 
    * A templated string with placeholders. The literal's datatype indicates the template syntax; if not specified, hydra:Rfc6570Template is assumed.
    */
    template: prefixer('template'),

    /**
    * **[title](http://www.w3.org/ns/hydra/core#title)** (property)
    * 
    * A title, often used along with a description.
    */
    title: prefixer('title'),

    /**
    * **[total items](http://www.w3.org/ns/hydra/core#totalItems)** (property)
    * 
    * The total number of items referenced by a collection.
    */
    totalItems: prefixer('totalItems'),

    /**
    * **[variable](http://www.w3.org/ns/hydra/core#variable)** (property)
    * 
    * An IRI template variable
    */
    variable: prefixer('variable'),

    /**
    * **[variable representation](http://www.w3.org/ns/hydra/core#variableRepresentation)** (property)
    * 
    * The representation format to use when expanding the IRI template.
    */
    variableRepresentation: prefixer('variableRepresentation'),

    /**
    * **[writable](http://www.w3.org/ns/hydra/core#writable)** (property)
    * 
    * True if the client can change the property's value, false otherwise.
    */
    writable: prefixer('writable'),

    /**
    * **[search](http://www.w3.org/ns/hydra/core#search)** (property)
    * 
    * A IRI template that can be used to query a collection.
    */
    search: prefixer('search'),

  
  };

export default hydra

