
//
// Copyright 2011 Mentor Graphics Corporation
//
//    All Rights Reserved.
//
// THIS WORK CONTAINS TRADE SECRET
// AND PROPRIETARY INFORMATION WHICH IS THE
// PROPERTY OF MENTOR GRAPHICS
// CORPORATION OR ITS LICENSORS AND IS
// SUBJECT TO LICENSE TERMS.
//

// InfoHub data
var mInfoHub = "flotherm_rls_info_ih";
var mProductList = "FloTHERM.";

var Entry;
var List;

// Online Help & Manuals
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Release Notes" );
List = new List_Object();
List.fAddItem( "FloTHERM Release Notes", "flotherm_rn"  );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Install &amp; Licensing" );
List = new List_Object("doclist");
List.fAddItem( "Licensing Mentor Graphics Software", "mgc_licen", "pdf" );
List.fAddItem( "FlexNet License Administration Guide", "flexnet_admin", "pdf" );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );


// Support
IHTab_Support.fVisible( true );

Entry = new TabEntry_Object( "Technical Support & Downloads" );
Entry.fAddLink( "Access your Support Center default product", "microsite" );
Entry.fAddLink( "Sign up for SupportPro Newsletter", "supportpro" );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Communities" );
Entry.fAddLink( "Participate in Mechanical Analysis communities", "community_ma", "A place to learn, share, and network with other designers." );
Entry.fAddLink( "Participate in Mentor Ideas for Mechanical Analysis products", "ideas_ma", "A site to suggest and discuss ideas, and to vote for product improvements." );
IHTab_Support.fAddEntry( Entry );


Entry = new TabEntry_Object( "Contact Us" );
Entry.fAddLink( "Send feedback on the documentation", "feedback" );
Entry.fAddLink( "Visit www.mentor.com", "mentor" );
IHTab_Support.fAddEntry( Entry );


// Training
IHTab_Training.fVisible( true );

Entry = new TabEntry_Object( "Training" );
Entry.fAddLink( "View available training courses", "training" );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Movies and Training Courses" );
Entry.fAddLink( "View How-To and Tutorial movies on Support Center", "animations", "A list of movies relating to the products supported by this InfoHub scope." );
IHTab_Training.fAddEntry( Entry );

