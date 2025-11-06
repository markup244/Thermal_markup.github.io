//
// Copyright 2009-2011 Mentor Graphics Corporation
//
//    All Rights Reserved.
//
// THIS WORK CONTAINS TRADE SECRET
// AND PROPRIETARY INFORMATION WHICH IS THE
// PROPERTY OF MENTOR GRAPHICS
// CORPORATION OR ITS LICENSORS AND IS
// SUBJECT TO LICENSE TERMS.
//

// Define data relevant to all installed InfoHubs
var mReleaseName = "Simcenter Flotherm 2021.1";
var mbShowCommunities = true

// InfoHub data
var mInfoHub = "mgc_ih";

var Entry;
var List;

// Add InfoHubs tab
IHTab_InfoHubs.fVisible( true );

Entry = new TabEntry_Object( "Mechanical Analysis");
List = new List_Object("infohub", "nosort");
//List.fAddItem( "Release Information", "flotherm_rls_info_ih" );
List.fAddItem( "Simcenter Flotherm", "flotherm_ih" );
Entry.fAddList( List );
IHTab_InfoHubs.fAddEntry( Entry );

