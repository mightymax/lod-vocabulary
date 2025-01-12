// This file is generated by the build script. Do not edit it manually.
import { prefixer as $prefixer } from '../utilities.js';
const prefixer = $prefixer('http://purl.org/dc/dcmitype/');

/**
 * [dcmitype](http://purl.org/dc/dcmitype/})
 */
const dcmitype = {
  /**
    * **[Collection](http://purl.org/dc/dcmitype/Collection)** (class)
    * 
    * A collection is described as a group; its parts may also be separately described.
    */
    Collection: prefixer('Collection'),

    /**
    * **[Dataset](http://purl.org/dc/dcmitype/Dataset)** (class)
    * 
    * Examples include lists, tables, and databases.  A dataset may be useful for direct machine processing.
    */
    Dataset: prefixer('Dataset'),

    /**
    * **[Event](http://purl.org/dc/dcmitype/Event)** (class)
    * 
    * Metadata for an event provides descriptive information that is the basis for discovery of the purpose, location, duration, and responsible agents associated with an event. Examples include an exhibition, webcast, conference, workshop, open day, performance, battle, trial, wedding, tea party, conflagration.
    */
    Event: prefixer('Event'),

    /**
    * **[Image](http://purl.org/dc/dcmitype/Image)** (class)
    * 
    * Examples include images and photographs of physical objects, paintings, prints, drawings, other images and graphics, animations and moving pictures, film, diagrams, maps, musical notation.  Note that Image may include both electronic and physical representations.
    */
    Image: prefixer('Image'),

    /**
    * **[Interactive Resource](http://purl.org/dc/dcmitype/InteractiveResource)** (class)
    * 
    * Examples include forms on Web pages, applets, multimedia learning objects, chat services, or virtual reality environments.
    */
    InteractiveResource: prefixer('InteractiveResource'),

    /**
    * **[Moving Image](http://purl.org/dc/dcmitype/MovingImage)** (class)
    * 
    * Examples include animations, movies, television programs, videos, zoetropes, or visual output from a simulation.  Instances of the type Moving Image must also be describable as instances of the broader type Image.
    */
    MovingImage: prefixer('MovingImage'),

    /**
    * **[Physical Object](http://purl.org/dc/dcmitype/PhysicalObject)** (class)
    * 
    * Note that digital representations of, or surrogates for, these objects should use Image, Text or one of the other types.
    */
    PhysicalObject: prefixer('PhysicalObject'),

    /**
    * **[Service](http://purl.org/dc/dcmitype/Service)** (class)
    * 
    * Examples include a photocopying service, a banking service, an authentication service, interlibrary loans, a Z39.50 or Web server.
    */
    Service: prefixer('Service'),

    /**
    * **[Software](http://purl.org/dc/dcmitype/Software)** (class)
    * 
    * Examples include a C source file, MS-Windows .exe executable, or Perl script.
    */
    Software: prefixer('Software'),

    /**
    * **[Sound](http://purl.org/dc/dcmitype/Sound)** (class)
    * 
    * Examples include a music playback file format, an audio compact disc, and recorded speech or sounds.
    */
    Sound: prefixer('Sound'),

    /**
    * **[Still Image](http://purl.org/dc/dcmitype/StillImage)** (class)
    * 
    * Examples include paintings, drawings, graphic designs, plans and maps. Recommended best practice is to assign the type Text to images of textual materials. Instances of the type Still Image must also be describable as instances of the broader type Image.
    */
    StillImage: prefixer('StillImage'),

    /**
    * **[Text](http://purl.org/dc/dcmitype/Text)** (class)
    * 
    * Examples include books, letters, dissertations, poems, newspapers, articles, archives of mailing lists. Note that facsimiles or images of texts are still of the genre Text.
    */
    Text: prefixer('Text'),

  
  };

export default dcmitype

