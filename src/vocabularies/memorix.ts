// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://memorix.io/ontology#');

/**
 * [memorix](http://memorix.io/ontology#})
 */
const memorix = {
  /**
    * **[hasAccessibilityAndRightsComponent](http://memorix.io/ontology#hasAccessibilityAndRightsComponent)** (property)
    * 
    * Links a AccessibilityAndRightsComponent to its Context
    */
    hasAccessibilityAndRightsComponent: prefixer('hasAccessibilityAndRightsComponent'),

    /**
    * **[hasContext](http://memorix.io/ontology#hasContext)** (property)
    * 
    * Links a Context object to a Record, AccessibilityAndRightsComponent or schema:DigitalDocument
    */
    hasContext: prefixer('hasContext'),

    /**
    * **[isDefaultDigitalDocument](http://memorix.io/ontology#isDefaultDigitalDocument)** (property)
    * 
    * If set to TRUE then a schema:DigitalDocument is the default Document for a Record.
    */
    isDefaultDigitalDocument: prefixer('isDefaultDigitalDocument'),

    /**
    * **[hasParents](http://memorix.io/ontology#hasRecord)** (property)
    * 
    * RDF List of parents of other record contexts, starting with the root and ending with the parent attached to the record
    */
    hasRecord: prefixer('hasRecord'),

    /**
    * **[accessModeDownload](http://memorix.io/ontology#accessModeDownload)** (property)
    * 
    * Allow download of attached assets.
    */
    accessModeDownload: prefixer('accessModeDownload'),

    /**
    * **[attributionRequired](http://memorix.io/ontology#attributionRequired)** (property)
    * 
    * If set to TRUE then it is required to show Creditstatement.
    */
    attributionRequired: prefixer('attributionRequired'),

    /**
    * **[accessModeScanningOnDemand](http://memorix.io/ontology#accessModeScanningOnDemand)** (property)
    * 
    * Allow scanning on demand.
    */
    accessModeScanningOnDemand: prefixer('accessModeScanningOnDemand'),

    /**
    * **[hasDigitalDocument](http://memorix.io/ontology#hasDigitalDocument)** (property)
    * 
    * Collection of links to digital documents stored in Asset Manegement System.
    */
    hasDigitalDocument: prefixer('hasDigitalDocument'),

    /**
    * **[conceptSchemeIn](http://memorix.io/ontology#conceptSchemeIn)** (property)
    * 
    * Specifies a list of skos:ConceptSchemes that can be used for picking Concepts.
    */
    conceptSchemeIn: prefixer('conceptSchemeIn'),

    /**
    * **[accessModeDisplay](http://memorix.io/ontology#accessModeDisplay)** (property)
    * 
    * Allow display of attached assets.
    */
    accessModeDisplay: prefixer('accessModeDisplay'),

    /**
    * **[AccessibilityAndRightsComponent](http://memorix.io/ontology#AccessibilityAndRightsComponent)** (class)
    * 
    * The class of information about Accessibility & Rights.
    */
    AccessibilityAndRightsComponent: prefixer('AccessibilityAndRightsComponent'),

    /**
    * **[constructQueryTitleAndDescription](http://memorix.io/ontology#constructQueryTitleAndDescription)** (property)
    * 
    * Sets a SPARQL CONSTRUCT on a Recordtype to create titles and descriptions of memorix:Context. Expects a dcterms:title and dcterms:decription predicates.
    */
    constructQueryTitleAndDescription: prefixer('constructQueryTitleAndDescription'),

    /**
    * **[Context](http://memorix.io/ontology#Context)** (class)
    * 
    * Memorix unit used as an entrypoint to all things related to an informationobject.
    */
    Context: prefixer('Context'),

    /**
    * **[audience](http://memorix.io/ontology#audience)** (property)
    * 
    * Property that makes a resource internal/external from the Application perspective.
    * An external resource may never be published outside the Memorix Application.
    * When used on a Shacl property (sh:property) this property may provide information for certain RDF statements
    * that may not be published outside Memorix.
    */
    audience: prefixer('audience'),

    /**
    * **[AccessModeType](http://memorix.io/ontology#AccessModeType)** (class)
    * 
    * The Class of <em>accessMode…</em> <a href=#datatypeproperties>Datatype Properties</a> that can be used to permit certain actions
    */
    AccessModeType: prefixer('AccessModeType'),

    /**
    * **[inTitleAt](http://memorix.io/ontology#inTitleAt)** (property)
    * 
    * Indicates that a sh:property is part of the title of memorix:Context
    */
    inTitleAt: prefixer('inTitleAt'),

    /**
    * **[Record](http://memorix.io/ontology#Record)** (class)
    * 
    * Recorded information that must be handled as a unit.
    */
    Record: prefixer('Record'),

    /**
    * **[hasRecordtype](http://memorix.io/ontology#hasRecordtype)** (property)
    * 
    * Marks a Recordtype as usable in a Collection
    */
    hasRecordtype: prefixer('hasRecordtype'),

    /**
    * **[Collection](http://memorix.io/ontology#Collection)** (class)
    * 
    * Collections are permanent groupings of Records that are conceptually linked.
    * Possible uses could be for works that were donated as a group, objects that all belonged to the same person,
    * or that were shown together in a historical exhibition etc.
    * Normally you wouldn’t use this to describe a category of works such as “books,”
    * though that is your choice. Object can only be in a single collection.
    */
    Collection: prefixer('Collection'),

    /**
    * **[accessModeReservation](http://memorix.io/ontology#accessModeReservation)** (property)
    * 
    * Allow request/reservations.
    */
    accessModeReservation: prefixer('accessModeReservation'),

    /**
    * **[Class](http://memorix.io/ontology#Class)** (class)
    * 
    * Base Class for main Memorix Classes
    */
    Class: prefixer('Class'),

    /**
    * **[inSummaryAt](http://memorix.io/ontology#inSummaryAt)** (property)
    * 
    * Indicates that a sh:property is part of the description of memorix:Context
    */
    inSummaryAt: prefixer('inSummaryAt'),

    /**
    * **[Organization](http://memorix.io/ontology#Organization)** (class)
    * 
    * The Organization making use of a specific Memorix instance.
    */
    Organization: prefixer('Organization'),

    /**
    * **[DepotLocationComponent](http://memorix.io/ontology#DepotLocationComponent)** (class)
    * 
    * Depot location information, specific to memorix application.
    */
    DepotLocationComponent: prefixer('DepotLocationComponent'),

    /**
    * **[Set](http://memorix.io/ontology#Set)** (class)
    * 
    * Sets are designed for temporary and arbitrary groupings of your Record,
    * often for a practical task such as creating an online exhibition,
    * or creating a working list of images for publication etc.
    * Sets can contain Records from one or more Collections.
    */
    Set: prefixer('Set'),

    /**
    * **[hasHistory](http://memorix.io/ontology#hasHistory)** (property)
    * 
    * Links zero or more History reources to a Class
    */
    hasHistory: prefixer('hasHistory'),

    /**
    * **[Vocabulary Editor](http://memorix.io/ontology#VocabularyEditor)** (class)
    * 
    * Editor for linking to a concept in a conceptscheme.
    */
    VocabularyEditor: prefixer('VocabularyEditor'),

    /**
    * **[copyrightHolder](https://schema.org/copyrightHolder)** (property)
    * 
    * Link to a Context/Record from Memorix
    */
    'sdo:copyrightHolder': prefixer('sdo:copyrightHolder'),

    /**
    * **[Container path editor](http://memorix.io/ontology#PathEditor)** (class)
    * 
    * Editor for managing the path of a container.
    */
    PathEditor: prefixer('PathEditor'),

    /**
    * **[hasInformationComponent](http://memorix.io/ontology#hasInformationComponent)** (property)
    * 
    * Links an InformationComponent to a RecordType. Can be used as information for frontend rendering.
    */
    hasInformationComponent: prefixer('hasInformationComponent'),

    /**
    * **[Recordtype](http://memorix.io/ontology#Recordtype)** (class)
    * 
    * Record Types are the most commonly used way to categorize Records in your collection.
    * The main guideline is to choose Record types that are broad enough so that an Record can never be more than one type
    * (ie a painting can never also be an moving image).
    * If you would like to describe your Records more specifically, you can supplement this categorization with an
    * additional "subtype" dropdown menu on the record editor itself.  For example, an object of type "ephemera"
    * could have a subtype list of "postcard," "poster," "letter," etc.
    * A subtype list could potentially be repeatable, so you would have the opportunity to assign multiple subtypes if that's appropriate.
    * Record types are described using SHACL Nodeshapes.
    */
    Recordtype: prefixer('Recordtype'),

    /**
    * **[AudienceExternal](http://memorix.io/ontology#AudienceExternal)** (class)
    * 
    * Indicates that something may be used outside of the Memorix application (to be used as value for <a href=#audience>audience</a> predicate on <a href=#Context>Context</a>).
    */
    AudienceExternal: prefixer('AudienceExternal'),

    /**
    * **[AudienceInternal](http://memorix.io/ontology#AudienceInternal)** (class)
    * 
    * Indicates that something may not be used outside of the Memorix application  (to be used as value for <a href=#audience>audience</a> predicate on <a href=#Context>Context</a>).
    */
    AudienceInternal: prefixer('AudienceInternal'),

    /**
    * **[GeoCoordinates](http://memorix.io/ontology#GeoCoordinates)** (class)
    * 
    * Class for storing GeoCoordinates data.
    */
    GeoCoordinates: prefixer('GeoCoordinates'),

    /**
    * **[TreePathComponent](http://memorix.io/ontology#TreePathComponent)** (class)
    * 
    * Render element to link a parent record and show a tree structure.
    */
    TreePathComponent: prefixer('TreePathComponent'),

    /**
    * **[Pagination](http://memorix.io/ontology#ResultPagination)** (class)
    * 
    * Parent Class for pagination properties.
    */
    ResultPagination: prefixer('ResultPagination'),

    /**
    * **[depot](http://memorix.io/ontology#depot)** (property)
    * 
    * UUID of a Depot object registred in Memorix. Depots are not expressed as RDF Resources!
    */
    depot: prefixer('depot'),

    /**
    * **[Linked Record Editor](http://memorix.io/ontology#LinkedRecordEditor)** (class)
    * 
    * Editor for linking to Memorix Nexus internal records.
    */
    LinkedRecordEditor: prefixer('LinkedRecordEditor'),

    /**
    * **[Coordinates Editor](http://memorix.io/ontology#LocationCoordinatesEditor)** (class)
    * 
    * Editor for selecting a Coordinates Location.
    */
    LocationCoordinatesEditor: prefixer('LocationCoordinatesEditor'),

    /**
    * **[restrictionsExpire](http://memorix.io/ontology#restrictionsExpire)** (property)
    * 
    * Property that defines when a restriction to Conditions of Access expires.
    */
    restrictionsExpire: prefixer('restrictionsExpire'),

    /**
    * **[BAG Editor](http://memorix.io/ontology#LocationBagEditor)** (class)
    * 
    * Editor for selecting a BAG Location.
    */
    LocationBagEditor: prefixer('LocationBagEditor'),

    /**
    * **[copyrightExpires](http://memorix.io/ontology#copyrightExpires)** (property)
    * 
    * Property that defines when the copyright expires.
    */
    copyrightExpires: prefixer('copyrightExpires'),

    /**
    * **[History](http://memorix.io/ontology#History)** (class)
    * 
    * The class of Actions performed on a resources by an Agent at a certain Time.
    * Note there is also a ObjectProperty 'history' on Resources which is used for last modification and creation history.
    */
    History: prefixer('History'),

    /**
    * **[total](http://memorix.io/ontology#total)** (property)
    * 
    * Total number of items in a result set.
    */
    total: prefixer('total'),

    /**
    * **[Integer date editor](http://memorix.io/ontology#DateEditor)** (class)
    * 
    * An editor for integer date literals, e.g. 20081201.
    */
    DateEditor: prefixer('DateEditor'),

    /**
    * **[perPage](http://memorix.io/ontology#perPage)** (property)
    * 
    * Maximium number of items in page of a result set (a.k.a. as 'limit').
    */
    perPage: prefixer('perPage'),

    /**
    * **[page](http://memorix.io/ontology#page)** (property)
    * 
    * Current page of result set (offset by 1).
    */
    page: prefixer('page'),

    /**
    * **[depotContainerStart](http://memorix.io/ontology#depotContainerStart)** (property)
    * 
    * UUID of a Depot Container that markes the start of a physical depot location of an object registered in Memorix. Containers are not expressed as RDF Resources!
    */
    depotContainerStart: prefixer('depotContainerStart'),

    /**
    * **[numberOfItems](http://memorix.io/ontology#numberOfItems)** (property)
    * 
    * Indicator for number of items (e.g. Records or Concepts) that are contained by Sets, Collections and ConceptSchemes
    */
    numberOfItems: prefixer('numberOfItems'),

    /**
    * **[depotContainerEnd](http://memorix.io/ontology#depotContainerEnd)** (property)
    * 
    * UUID of a Depot Container that markes the end of a physical depot location of an object registered in Memorix. Containers are not expressed as RDF Resources!
    */
    depotContainerEnd: prefixer('depotContainerEnd'),

    /**
    * **[numberOfPages](http://memorix.io/ontology#numberOfPages)** (property)
    * 
    * Total number of pages in result set.
    */
    numberOfPages: prefixer('numberOfPages'),

  
  };

export default memorix
