// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://www.w3.org/ns/oa#');

/**
 * [oa](http://www.w3.org/ns/oa#})
 */
const oa = {
  /**
    * **[Annotation](http://www.w3.org/ns/oa#Annotation)** (class)
    * 
    * The class for Web Annotations.
    */
    Annotation: prefixer('Annotation'),

    /**
    * **[Choice](http://www.w3.org/ns/oa#Choice)** (class)
    * 
    * A subClass of  as:OrderedCollection  that conveys to a consuming application that it should select one of the resources in the  as:items  list to use, rather than all of them.  This is typically used to provide a choice of resources to render to the user, based on further supplied properties.  If the consuming application cannot determine the user's preference, then it should use the first in the list.
    */
    Choice: prefixer('Choice'),

    /**
    * **[CssSelector](http://www.w3.org/ns/oa#CssSelector)** (class)
    * 
    * A CssSelector describes a Segment of interest in a representation that conforms to the Document Object Model through the use of the CSS selector specification.
    */
    CssSelector: prefixer('CssSelector'),

    /**
    * **[Selector](http://www.w3.org/ns/oa#Selector)** (class)
    * 
    * A resource which describes the segment of interest in a representation of a Source resource, indicated with oa:hasSelector from the Specific Resource. This class is not used directly in the Annotation model, only its subclasses.
    */
    Selector: prefixer('Selector'),

    /**
    * **[CssStyle](http://www.w3.org/ns/oa#CssStyle)** (class)
    * 
    * A resource which describes styles for resources participating in the Annotation using CSS.
    */
    CssStyle: prefixer('CssStyle'),

    /**
    * **[Style](http://www.w3.org/ns/oa#Style)** (class)
    * 
    * A Style describes the intended styling of a resource as applied to the particular Annotation, and thus provides the information to ensure that rendering is consistent across implementations.
    */
    Style: prefixer('Style'),

    /**
    * **[DataPositionSelector](http://www.w3.org/ns/oa#DataPositionSelector)** (class)
    * 
    * DataPositionSelector describes a range of data by recording the start and end positions of the selection in the stream. Position 0 would be immediately before the first byte, position 1 would be immediately before the second byte, and so on. The start byte is thus included in the list, but the end byte is not.
    */
    DataPositionSelector: prefixer('DataPositionSelector'),

    /**
    * **[Direction](http://www.w3.org/ns/oa#Direction)** (class)
    * 
    * A class to encapsulate the different text directions that a textual resource might take.  It is not used directly in the Annotation Model, only its three instances.
    */
    Direction: prefixer('Direction'),

    /**
    * **[FragmentSelector](http://www.w3.org/ns/oa#FragmentSelector)** (class)
    * 
    * The FragmentSelector class is used to record the segment of a representation using the IRI fragment specification defined by the representation's media type.
    */
    FragmentSelector: prefixer('FragmentSelector'),

    /**
    * **[HttpRequestState](http://www.w3.org/ns/oa#HttpRequestState)** (class)
    * 
    * The HttpRequestState class is used to record the HTTP request headers that a client SHOULD use to request the correct representation from the resource.
    */
    HttpRequestState: prefixer('HttpRequestState'),

    /**
    * **[State](http://www.w3.org/ns/oa#State)** (class)
    * 
    * A State describes the intended state of a resource as applied to the particular Annotation, and thus provides the information needed to retrieve the correct representation of that resource.
    */
    State: prefixer('State'),

    /**
    * **[Motivation](http://www.w3.org/ns/oa#Motivation)** (class)
    * 
    * The Motivation class is used to record the user's intent or motivation for the creation of the Annotation, or the inclusion of the body or target, that it is associated with.
    */
    Motivation: prefixer('Motivation'),

    /**
    * **[RangeSelector](http://www.w3.org/ns/oa#RangeSelector)** (class)
    * 
    * A Range Selector can be used to identify the beginning and the end of the selection by using other Selectors. The selection consists of everything from the beginning of the starting selector through to the beginning of the ending selector, but not including it.
    */
    RangeSelector: prefixer('RangeSelector'),

    /**
    * **[ResourceSelection](http://www.w3.org/ns/oa#ResourceSelection)** (class)
    * 
    * Instances of the ResourceSelection class identify part (described by an oa:Selector) of another resource (referenced with oa:hasSource), possibly from a particular representation of a resource (described by an oa:State). Please note that ResourceSelection is not used directly in the Web Annotation model, but is provided as a separate class for further application profiles to use, separate from oa:SpecificResource which has many Annotation specific features.
    */
    ResourceSelection: prefixer('ResourceSelection'),

    /**
    * **[SpecificResource](http://www.w3.org/ns/oa#SpecificResource)** (class)
    * 
    * Instances of the SpecificResource class identify part of another resource (referenced with oa:hasSource), a particular representation of a resource, a resource with styling hints for renders, or any combination of these, as used within an Annotation.
    */
    SpecificResource: prefixer('SpecificResource'),

    /**
    * **[SvgSelector](http://www.w3.org/ns/oa#SvgSelector)** (class)
    * 
    * An SvgSelector defines an area through the use of the Scalable Vector Graphics [SVG] standard. This allows the user to select a non-rectangular area of the content, such as a circle or polygon by describing the region using SVG. The SVG may be either embedded within the Annotation or referenced as an External Resource.
    */
    SvgSelector: prefixer('SvgSelector'),

    /**
    * **[TextPositionSelector](http://www.w3.org/ns/oa#TextPositionSelector)** (class)
    * 
    * The TextPositionSelector describes a range of text by recording the start and end positions of the selection in the stream. Position 0 would be immediately before the first character, position 1 would be immediately before the second character, and so on.
    */
    TextPositionSelector: prefixer('TextPositionSelector'),

    /**
    * **[TextQuoteSelector](http://www.w3.org/ns/oa#TextQuoteSelector)** (class)
    * 
    * The TextQuoteSelector describes a range of text by copying it, and including some of the text immediately before (a prefix) and after (a suffix) it to distinguish between multiple copies of the same sequence of characters.
    */
    TextQuoteSelector: prefixer('TextQuoteSelector'),

    /**
    * **[TextualBody](http://www.w3.org/ns/oa#TextualBody)** (class)
    * 
    * 
    */
    TextualBody: prefixer('TextualBody'),

    /**
    * **[TimeState](http://www.w3.org/ns/oa#TimeState)** (class)
    * 
    * A TimeState records the time at which the resource's state is appropriate for the Annotation, typically the time that the Annotation was created and/or a link to a persistent copy of the current version.
    */
    TimeState: prefixer('TimeState'),

    /**
    * **[XPathSelector](http://www.w3.org/ns/oa#XPathSelector)** (class)
    * 
    * An XPathSelector is used to select elements and content within a resource that supports the Document Object Model via a specified XPath value.
    */
    XPathSelector: prefixer('XPathSelector'),

    /**
    * **[annotationService](http://www.w3.org/ns/oa#annotationService)** (property)
    * 
    * The object of the relationship is the end point of a service that conforms to the annotation-protocol, and it may be associated with any resource.  The expectation of asserting the relationship is that the object is the preferred service for maintaining annotations about the subject resource, according to the publisher of the relationship.
    * 
    * This relationship is intended to be used both within Linked Data descriptions and as the  rel  type of a Link, via HTTP Link Headers rfc5988 for binary resources and in HTML <link> elements.  For more information about these, please see the Annotation Protocol specification annotation-protocol.
    * 
    */
    annotationService: prefixer('annotationService'),

    /**
    * **[bodyValue](http://www.w3.org/ns/oa#bodyValue)** (property)
    * 
    * The object of the predicate is a plain text string to be used as the content of the body of the Annotation.  The value MUST be an  xsd:string  and that data type MUST NOT be expressed in the serialization. Note that language MUST NOT be associated with the value either as a language tag, as that is only available for  rdf:langString .
    * 
    */
    bodyValue: prefixer('bodyValue'),

    /**
    * **[cachedSource](http://www.w3.org/ns/oa#cachedSource)** (property)
    * 
    * A object of the relationship is a copy of the Source resource's representation, appropriate for the Annotation.
    */
    cachedSource: prefixer('cachedSource'),

    /**
    * **[canonical](http://www.w3.org/ns/oa#canonical)** (property)
    * 
    * A object of the relationship is the canonical IRI that can always be used to deduplicate the Annotation, regardless of the current IRI used to access the representation.
    */
    canonical: prefixer('canonical'),

    /**
    * **[end](http://www.w3.org/ns/oa#end)** (property)
    * 
    * The end property is used to convey the 0-based index of the end position of a range of content.
    */
    end: prefixer('end'),

    /**
    * **[exact](http://www.w3.org/ns/oa#exact)** (property)
    * 
    * The object of the predicate is a copy of the text which is being selected, after normalization.
    */
    exact: prefixer('exact'),

    /**
    * **[hasBody](http://www.w3.org/ns/oa#hasBody)** (property)
    * 
    * The object of the relationship is a resource that is a body of the Annotation.
    */
    hasBody: prefixer('hasBody'),

    /**
    * **[hasEndSelector](http://www.w3.org/ns/oa#hasEndSelector)** (property)
    * 
    * The relationship between a RangeSelector and the Selector that describes the end position of the range.
    */
    hasEndSelector: prefixer('hasEndSelector'),

    /**
    * **[hasPurpose](http://www.w3.org/ns/oa#hasPurpose)** (property)
    * 
    * The purpose served by the resource in the Annotation.
    */
    hasPurpose: prefixer('hasPurpose'),

    /**
    * **[hasScope](http://www.w3.org/ns/oa#hasScope)** (property)
    * 
    * The scope or context in which the resource is used within the Annotation.
    */
    hasScope: prefixer('hasScope'),

    /**
    * **[hasSelector](http://www.w3.org/ns/oa#hasSelector)** (property)
    * 
    * The object of the relationship is a Selector that describes the segment or region of interest within the source resource.  Please note that the domain ( oa:ResourceSelection ) is not used directly in the Web Annotation model.
    */
    hasSelector: prefixer('hasSelector'),

    /**
    * **[hasSource](http://www.w3.org/ns/oa#hasSource)** (property)
    * 
    * The resource that the ResourceSelection, or its subclass SpecificResource, is refined from, or more specific than. Please note that the domain ( oa:ResourceSelection ) is not used directly in the Web Annotation model.
    */
    hasSource: prefixer('hasSource'),

    /**
    * **[hasStartSelector](http://www.w3.org/ns/oa#hasStartSelector)** (property)
    * 
    * The relationship between a RangeSelector and the Selector that describes the start position of the range.
    */
    hasStartSelector: prefixer('hasStartSelector'),

    /**
    * **[hasState](http://www.w3.org/ns/oa#hasState)** (property)
    * 
    * The relationship between the ResourceSelection, or its subclass SpecificResource, and a State resource. Please note that the domain ( oa:ResourceSelection ) is not used directly in the Web Annotation model.
    */
    hasState: prefixer('hasState'),

    /**
    * **[hasTarget](http://www.w3.org/ns/oa#hasTarget)** (property)
    * 
    * The relationship between an Annotation and its Target.
    */
    hasTarget: prefixer('hasTarget'),

    /**
    * **[motivatedBy](http://www.w3.org/ns/oa#motivatedBy)** (property)
    * 
    * The relationship between an Annotation and a Motivation that describes the reason for the Annotation's creation.
    */
    motivatedBy: prefixer('motivatedBy'),

    /**
    * **[prefix](http://www.w3.org/ns/oa#prefix)** (property)
    * 
    * The object of the property is a snippet of content that occurs immediately before the content which is being selected by the Selector.
    */
    prefix: prefixer('prefix'),

    /**
    * **[processingLanguage](http://www.w3.org/ns/oa#processingLanguage)** (property)
    * 
    * The object of the property is the language that should be used for textual processing algorithms when dealing with the content of the resource, including hyphenation, line breaking, which font to use for rendering and so forth.  The value must follow the recommendations of BCP47.
    */
    processingLanguage: prefixer('processingLanguage'),

    /**
    * **[refinedBy](http://www.w3.org/ns/oa#refinedBy)** (property)
    * 
    * The relationship between a Selector and another Selector or a State and a Selector or State that should be applied to the results of the first to refine the processing of the source resource.
    */
    refinedBy: prefixer('refinedBy'),

    /**
    * **[renderedVia](http://www.w3.org/ns/oa#renderedVia)** (property)
    * 
    * A system that was used by the application that created the Annotation to render the resource.
    */
    renderedVia: prefixer('renderedVia'),

    /**
    * **[sourceDate](http://www.w3.org/ns/oa#sourceDate)** (property)
    * 
    * The timestamp at which the Source resource should be interpreted as being applicable to the Annotation.
    */
    sourceDate: prefixer('sourceDate'),

    /**
    * **[sourceDateEnd](http://www.w3.org/ns/oa#sourceDateEnd)** (property)
    * 
    * The end timestamp of the interval over which the Source resource should be interpreted as being applicable to the Annotation.
    */
    sourceDateEnd: prefixer('sourceDateEnd'),

    /**
    * **[sourceDateStart](http://www.w3.org/ns/oa#sourceDateStart)** (property)
    * 
    * The start timestamp of the interval over which the Source resource should be interpreted as being applicable to the Annotation.
    */
    sourceDateStart: prefixer('sourceDateStart'),

    /**
    * **[start](http://www.w3.org/ns/oa#start)** (property)
    * 
    * The start position in a 0-based index at which a range of content is selected from the data in the source resource.
    */
    start: prefixer('start'),

    /**
    * **[styleClass](http://www.w3.org/ns/oa#styleClass)** (property)
    * 
    * The name of the class used in the CSS description referenced from the Annotation that should be applied to the Specific Resource.
    */
    styleClass: prefixer('styleClass'),

    /**
    * **[styledBy](http://www.w3.org/ns/oa#styledBy)** (property)
    * 
    * A reference to a Stylesheet that should be used to apply styles to the Annotation rendering.
    */
    styledBy: prefixer('styledBy'),

    /**
    * **[suffix](http://www.w3.org/ns/oa#suffix)** (property)
    * 
    * The snippet of text that occurs immediately after the text which is being selected.
    */
    suffix: prefixer('suffix'),

    /**
    * **[textDirection](http://www.w3.org/ns/oa#textDirection)** (property)
    * 
    * The direction of the text of the subject resource. There MUST only be one text direction associated with any given resource.
    */
    textDirection: prefixer('textDirection'),

    /**
    * **[via](http://www.w3.org/ns/oa#via)** (property)
    * 
    * A object of the relationship is a resource from which the source resource was retrieved by the providing system.
    */
    via: prefixer('via'),

  
  };

export default oa

