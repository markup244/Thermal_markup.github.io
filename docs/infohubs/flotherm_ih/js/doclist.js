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

// InfoHub data (required)
var mInfoHub = "flotherm_ih";
var mProductList = "Simcenter Flotherm.";

var Entry;
var List;


// Online Help & Manuals
IHTab_Olh.fVisible( true );

Entry = new TabEntry_Object( "Simcenter Flotherm" );
List = new List_Object("doclist", "nosort");
List.fSetMaxSize( "10" )
List.fAddItem( "Getting Started with Simcenter Flotherm", "ft_gs" );
List.fAddItem( "Simcenter Flotherm User Guide", "ft_user" );
List.fAddItem( "Simcenter Flotherm SmartParts Reference Guide", "ft_sm_ref" );
List.fAddItem( "Simcenter Flotherm Project Attributes Reference Guide", "ft_at_ref" );
List.fAddItem( "Simcenter Flotherm Command Center User Guide", "ft_cc_user" );
List.fAddItem( "Simcenter Flotherm MCAD Bridge User Guide", "ft_mc_user" );
List.fAddItem( "Simcenter Flotherm EDA Bridge User Guide", "ft_eda_ur" );
List.fAddItem( "Simcenter Flotherm Background Theory Reference Guide", "ft_th_ref" );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

Entry = new TabEntry_Object( "Interfaces" );
List = new List_Object("doclist", "nosort");
List.fAddItem( "Cadence Allegro PCB Designer Interface User Guide", "flo_allegro_ur" );
List.fAddItem( "Cadence Allegro Package Designer Interface User Guide", "flo_apd_ur" );
List.fAddItem( "Board Station Interface User Guide", "flo_bdstation_ur" );
List.fAddItem( "Xpedition Interface User Guide", "flo_exp_ur" );
List.fAddItem( "Zuken CR-5000 Board Designer Interface User Guide", "flo_cr5000_ur" );
Entry.fAddList( List );
IHTab_Olh.fAddEntry( Entry );

//Entry = new TabEntry_Object( "Release Documentation on Support Center" );
//Entry.fAddLink( "View release documentation on Support Center ", "release_docs", "View the newest release notes, release highlights, installation, and licensing information, along with additional release and system management documents. On the Downloads page, scroll down to see the list of documents.");
//IHTab_Olh.fAddEntry( Entry );

// Support & Training
IHTab_Support.fVisible( true );

Entry = new TabEntry_Object( "Mechanical Analysis Ideas" );
Entry.fAddLink( "Participate in Mentor Ideas for Mechanical Analysis products", "ideas_ma", "A site to submit ideas, browse knowledge, and look at discussions. Login required to submit ideas." );
IHTab_Support.fAddEntry( Entry );

//Entry = new TabEntry_Object( "Mechanical Analysis Communities" );
//Entry.fAddLink( "Participate in Mechanical Analysis communities", "community_ma", "A place to learn, share, and network with other designers." );
//IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Technical Support" );
Entry.fAddLink( "Access Simcenter Flotherm on Support Center", "microsite" );
Entry.fAddLink( "Sign up for CustomerInsight Newsletter", "supportpro" );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Downloads" );
Entry.fAddLink( "Simcenter Flotherm Utilities", "webparts_flotherm", "Simcenter Flotherm SmartParts available for download (formerly known as WebParts)." );
IHTab_Support.fAddEntry( Entry );

Entry = new TabEntry_Object( "Contact Us" );
Entry.fAddLink( "Send feedback on the documentation", "feedback" );
Entry.fAddLink( "Visit www.mentor.com", "mentor" );
IHTab_Support.fAddEntry( Entry );


// Training
IHTab_Training.fVisible( true );

Entry = new TabEntry_Object( "Tutorials" );
List = new List_Object("doclist");
List.fAddItem( "Getting Started with Simcenter Flotherm", "ft_gs" );
Entry.fAddList( List );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Profiles Videos" );
List = new List_Object( "nosort" );
List.fSetTitle( "View locally installed videos" );
List.fAddItem( "Viewing Profile Plots", "videos/ft_12_1_viewing_profile_plots_vid/index.html" );
List.fAddItem( "Selecting Monitor Points for Profile Plots", "videos/ft_12_1_selecting_monitor_points_for_plots_vid/index.html" );
Entry.fAddList( List );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Analyze Mode Videos" );
List = new List_Object( "nosort" );
List.fSetTitle( "View locally installed videos" );
List.fAddItem( "Introduction to the Analyze Mode User Interface", "videos/ft_2019_2_intro_to_analyze_mode_vid/index.html" );
List.fAddItem( "Getting Started With Results Tables", "videos/ft_2019_2_getting_started_with_results_tables_vid/index.html" );
List.fAddItem( "Plots Associated With Geometry", "videos/ft_2019_2_plots_assoc_with_geometry_vid/index.html" );
Entry.fAddList( List );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Command Center Videos" );
List = new List_Object( "nosort" );
List.fSetMaxSize( "16" )
List.fSetTitle( "View locally installed videos" );
List.fAddItem( "Input Variable Selection - Introduction", "videos/ft_12_0_cc_iv_select_1_intro_vid/index.html" );
List.fAddItem( "Input Variable Selection - Using the Drawing Board and Find", "videos/ft_12_0_cc_iv_select_2_db_and_find_vid/index.html" );
List.fAddItem( "Scenario Creation - Linear Sweep", "videos/ft_12_0_cc_scenarios_linear_sweep_vid/index.html" );
List.fAddItem( "Scenario Creation - Add Variables", "videos/ft_12_0_cc_scenarios_add_variables_vid/index.html" );
List.fAddItem( "Scenario Creation - Multiply Variables", "videos/ft_12_0_cc_scenarios_multiply_variables_vid/index.html" );
List.fAddItem( "Scenario Creation - Design Of Experiments", "videos/ft_12_0_cc_scenarios_doe_vid/index.html" );
List.fAddItem( "Scenario Creation - Superposition", "videos/ft_12_0_cc_scenarios_superposition_vid/index.html" );
List.fAddItem( "Using the Superposition Spreadsheet", "videos/ft_12_0_cc_superposition_spreadsheet_vid/index.html" );
List.fAddItem( "Solution Monitoring - Viewing Profile Plots", "videos/ft_12_0_cc_viewing_profile_plots_vid/index.html" );
Entry.fAddList( List );
IHTab_Training.fAddEntry( Entry );

Entry = new TabEntry_Object( "Videos and Training Courses" );
Entry.fAddLink( "View How-To and Tutorial videos on Support Center", "animations", "A list of videos relating to the products supported by this InfoHub scope." );
Entry.fAddLink( "View available training courses", "training" );
Entry.fAddLink( "Simcenter Flotherm Project Files from the Introductory Training Course Tutorials", "tutorials_flotherm_intro", "Example Simcenter Flotherm Project Files available for download." );
IHTab_Training.fAddEntry( Entry );

