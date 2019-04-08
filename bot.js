var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//add bot to discord https://discordapp.com/oauth2/authorize?client_id=552241750928916496&scope=bot&permissions=0
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Commands start with '!'
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
        cmd = cmd.toLowerCase();
        args = args.splice(1);
        switch(cmd) {
		case 'rules':
		bot.sendMessage({
			to: channelID,
			message: 'Rules Reminder:1. Keep the language and posting family-friendly. No offensive language, videos, pictures, etc…\n2. If you post a raid (include a screenshot of the egg/boss with a timer), let everyone know if you’re going attend or just sharing the information. If you are hosting the raid, post a time that most people can agree on. Allow for travel and organizing on-site, so 20-30 minutes is desirable. “Soldiers, hatches at 10:20, FYI” “Soldiers, Level 5, 10:30AM start time” or something similar.\n3. We only use public lobbies unless there is chance you have over 20 accounts at a raid.  Only use private codes when you have to split the group, or when you suspect a spoofer.\n4. Be clear about your comments.  If you commit to a raid, say which raid you are attending, and post your account level.  There may be multiple raids going on at once, and no one likes confusion.  “2 accounts for Soldiers, Lvls 29 34” or something similar.\n\n5. Keep the chat about raids during raid hours.  Limit brag posts while people are raiding.  Feel free to share after 7:30PM, on the Pokestop page, in the Nerd-ening(off-topic chat), or Discord.  Ask for links.\n6. Admins and Raid Commanders have priority at raids.  If organization is required, Admins and Raid Commanders can take control of a raid, if they see fit.  They can split the group, or change raid times to allow for everyone to play.\n7. We include EVERYONE who wants to raid.  Absolutely no one is excluded, even people who have been banned from the chat or raid page.  No one will be left out.\n8. Please do not change the chat color, title, or picture.  This affects the whole chat, not just you.'
		});
		//LOCATIONS START
		//DOWNTOWN LIST
		case 'downtown':
		bot.sendMessage({
			to: channelID,
			message: 'Downtown location commands list: \nbethlehem, cabeza, calvary, centro, clthurmond, deleon/plaza, gazebo, henderson, jjl, jmeredith, lallorona, levi, performingarts, robertandpauline/library, roundtop, salterchapel, soldiers, southernpacific, stp, westerner.'
		});
	break;
		// !levi
		case 'levi':
		bot.sendMessage({
			to: channelID,
			message: 'Levi is at 402 E Power Ave, https://goo.gl/maps/qCrTVkfp56k'
		});
	break;
		// !cabeza
		case 'cabeza':
		bot.sendMessage({
			to: channelID,
			message: 'Cabeza de Vaca and LaSalle Monument is by Power Avenue Warehouse at 402 E Power Ave, https://goo.gl/maps/AaRYkiKCsqS2'
		});
	break;
		// !robert and pauline
		// !library gym
		case 'robertpauline':
		case 'library':
		bot.sendMessage({
			to: channelID,
			message: 'Robert and Pauline Clark House is at 317 N Main, https://goo.gl/maps/rPXZChf494A2'
		});
	break;
		// !performingarts
		case 'performingarts':
		bot.sendMessage({
			to: channelID,
			message: 'Performing Arts is at 214 N Main, https://goo.gl/maps/BMgkj5xJQmP2'
		});
	break;
		// !deleon
		case 'deleon':
		case 'plaza':
		bot.sendMessage({
			to: channelID,
			message: ' DeLeon Plaza is at the Historical marker in De Leon Plaza on the Main street side, https://goo.gl/maps/1F8zh2Qr37v'
		});
	break;
		// !soldiers
		case 'soldier':
		case 'soldiers':
		bot.sendMessage({
			to: channelID,
			message: 'Soldiers is on the corner of Main and Constitution, https://goo.gl/maps/V9TyGLxHBZk'
		});
	break;
		// !gazebo
		case 'gazebo':
		bot.sendMessage({
			to: channelID,
			message: 'The Gazebo is in the middle of De Leon Plaza, https://goo.gl/maps/zjXuRMBJ5XE2'
		});
	break;
		// !roundtop
		case 'roundtop':
		bot.sendMessage({
			to: channelID,
			message: 'Round Top is on the corner of Main and Juan Linn, https://goo.gl/maps/V1R7kB1FZSv'
		});
	break;
		// !jjl
		case 'jjl':
		bot.sendMessage({
			to: channelID,
			message: 'John Joseph Linn is on the corner of Bridge and Juan Linn, https://goo.gl/maps/tWpUEtfZfAC2'
		});
	break;
		// !southernpacific
		case 'southpacific':
		case 'southernpacific':
		bot.sendMessage({
			to: channelID,
			message: 'Southern Pacific Railroad is at the end of Santa Rosa, the intersection of Santa Rosa and S Cameron, https://maps.app.goo.gl/8yeH2'
		});
	break;
		// !centro
		case 'centro':
		bot.sendMessage({
			to: channelID,
			message: 'Centro Cristiano is at 208 N Mantz, https://goo.gl/maps/iNz4RioD4Ax'
		});
	break;
		// !clthurmond
		case 'clthurmond':
		bot.sendMessage({
			to: channelID,
			message: 'CL Thurmond is at 905 S Bridge, https://goo.gl/maps/3gkkLskGWi22'
		});
	break;
		// !bethlehem
		case 'bethlehem':
		bot.sendMessage({
			to: channelID,
			message: 'Bethlehem Baptist is at 1206 S Depot, https://goo.gl/maps/ihviFydbLGx'
		});
	break;
		// !salterchapel
		case 'salterchapel':
		bot.sendMessage({
			to: channelID,
			message: 'Salter Chapel is at 610 South Cameron St., https://goo.gl/maps/zHdzpy9Gw6t'
		});
	break;
		// !calvary
		case 'calvary':
		bot.sendMessage({
			to: channelID,
			message: 'Mt. Calvary Baptist Church is near the corner of S Navarro and E Water, https://goo.gl/maps/oSw5GnHummx'
		});
	break;
		// !henderson
		case 'henderson':
		case 'hendersonhouse':
		bot.sendMessage({
			to: channelID,
			message: 'Henderson House is on W Power Ave and Moody (US-59T Buisness), https://goo.gl/maps/xVAqrHvydVC2'
		});
	break;
		// !jmeredith
		case 'jmeredith':
		case 'thehouse':
		bot.sendMessage({
			to: channelID,
			message: 'J Meredith Tatton House is on W North St., between the N Victoria St/W North and N Craig St./W North intersections, https://goo.gl/maps/gLwEVuSWcZS2'
		});
	break;
		// !lallorona
		case 'lallorona':
		bot.sendMessage({
			to: channelID,
			message: 'La Llorona is on E Guadalupe and N Main, https://goo.gl/maps/PfpLr9ZGpDu'
		});
	break;
		// !stp
		case 'stp':
		bot.sendMessage({
			to: channelID,
			message: 'STP is on the corner of US Business 77 and Wolfram St., https://goo.gl/maps/DVi3PGdgxj52'
		});
	break;
		// !westerner
		case 'westerner':
		bot.sendMessage({
			to: channelID,
			message: 'WARNING! RESTRICTED GYM. POLICE POSSIBLE FOR TRESSPASSING. DON\'T GO.'
		});
	break;
		//RIVERSIDE LIST
		case 'riverside':
		bot.sendMessage({
			to: channelID,
			message: 'bevs, broussard, childrenspark, elderfield, golfcourse, grovers, jameswilkins, jameslwilkins, memorialdrive, memorialvfw, pavillion, pumphouse, redriverside, riversideentrance, riversidestadium/ballpark, rvpark, tonkawa, zoo.'
		});
	break;
		// !pumphouse
		case 'pumphouse':
		bot.sendMessage({
			to: channelID,
			message: 'Pumphouse is at 100-146 Memorial Dr, Victoria, TX 77901, https://goo.gl/maps/YfcX5NB3BPn'
		});
	break;
		// !memorialvfw
		case 'memorialvfw':
		bot.sendMessage({
			to: channelID,
			message: 'Memorial VFW is at 180-198 Memorial Dr, Victoria, TX 77901, https://goo.gl/maps/Kot2gVCwZFu'
		});
	break;
		// !zoo
		case 'zoo':
		bot.sendMessage({
			to: channelID,
			message: 'Texas Zoo is at 110 Memorial Dr., https://goo.gl/maps/szSGdagkJ3w'
		});
	break;
		// !ballpark
		case 'riversidestadium':
		case 'ballpark':
		bot.sendMessage({
			to: channelID,
			message: 'Riverside Stadium is on Memorial Dr., near the intersection with W Red River, further in the parking lot, https://goo.gl/maps/PX6ebof9aR42'
		});
	break;
		// !memorialdrive
		case 'memorialdrive':
		bot.sendMessage({
			to: channelID,
			message: 'Memorial Drive is on Memorial Dr., near the intersection with W Red River, closer to the street side, https://goo.gl/maps/4B41bVgwDQ22'
		});
	break;
		// !redriverside
		case 'redriverside':
		bot.sendMessage({
			to: channelID,
			message: 'Riverside Park Sign is on Red River and Bluff, https://goo.gl/maps/uJZkwjpZ4Dq'
		});
	break;
		// !golfcourse
		case 'golfcourse':
		bot.sendMessage({
			to: channelID,
			message: 'Riverside Golf Course is at 302 Mc Cright Dr., https://goo.gl/maps/i2hDbifUKbL2'
		});
	break;
		// !grovers
		case 'grovers':
		bot.sendMessage({
			to: channelID,
			message: 'Grover\'s Bend is on Mc Cright and Lowry, https://goo.gl/maps/DZEsMbbDq8G2'
		});
	break;
		// !pavillion
		case 'pavillion':
		bot.sendMessage({
			to: channelID,
			message: 'Grover\s Bend Pavillion is past Grover\'s Nemd gym, on Lowry Dr., https://goo.gl/maps/ZyjeebisZBp'
		});
	break;
		// !tonkawa
		case 'tonkawa':
		bot.sendMessage({
			to: channelID,
			message: 'Tonkawa Bank Vista of Mission Espiritu Santo is on Mc Cright, coming in from the Vine St. Riverside Park Entrance, https://goo.gl/maps/s9hGMGnjiUK2'
		});
	break;
		// !childrenspark
		case 'childrenspark':
		bot.sendMessage({
			to: channelID,
			message: 'Children\'s Park is on Mc Cright, coming in from the Vine St. Riverside Park entrance, Children\'s Park, https://goo.gl/maps/APxfTKsacxH2'
		});
	break;
		// !elderfield
		case 'elderfield':
		bot.sendMessage({
			to: channelID,
			message: 'Elder Field is on Mc Cright, coming in from the Vine St. Riverside Park entrance, baseball field, https://goo.gl/maps/vX9LQ6hreLD2'
		});
	break;
		// !riversideentrance
		case 'riversideentrance':
		bot.sendMessage({
			to: channelID,
			message: 'Riverside Park (Children\'s Park side) is on Mc Cright and Vine, https://goo.gl/maps/6z2BMZZ9KRH2'
		});
	break;
		// !broussard
		case 'broussard':
		bot.sendMessage({
			to: channelID,
			message: 'Broussard Field is off of Vine, near the Vine and Mc Cright intersection, https://goo.gl/maps/VGMyTXoJW1p'
		});
	break;
		// !bevs
		case 'bevs':
		bot.sendMessage({
			to: channelID,
			message: 'Bev\'s Garden is off of Vine, close to the Vine and Independence Dr. intersection. It\'s out in the field and you will have to walk to it, https://goo.gl/maps/ZnZgQVgp4uu'
		});
	break;
		// !rvpark
		case 'rvpark':
		bot.sendMessage({
			to: channelID,
			message: 'RV Park is on Vine, https://goo.gl/maps/3qPQMYn71f92'
		});
	break;
		// !jameswilkins
		case 'jameswilkins':
		case 'jameslwilkins':
		bot.sendMessage({
			to: channelID,
			message: 'James L Wilkins is in the old cemetery on Vine St., between the Sabine/Vine and Trinity/Vine intersections, https://goo.gl/maps/Z4WsbU2YPvJ2'
		});
	break;
		//MIDTOWN LIST
		case 'midtown':
		bot.sendMessage({
			to:channelID,
			message: 'Midtown command list: \nbaptisttemple, cdm/childrensmuseum, celebration, dairytreet, finearts, firstpresby, fostercreek, fwc/familyworshipcenter, grace, guadalupe, healthdept/communitygarden, postoffice, pyramid, queencity, resurrection, sonrise, splashpad, stfrancis, uhv, unitarian/uu.'
		})
	break;
		//uhv
		case 'uhv':
		case 'uhvwest':
		bot.sendMessage({
			to: channelID,
			message: 'UHV is at 3007 N Ben Wilson, https://goo.gl/maps/qmRxQdnwzfT2'
		});
	break;
		// !pyramid
		case 'pyramid':
		case 'pyramid3':
		bot.sendMessage({
			to: channelID,
			message: 'Pyramid 3 is on 3007 N Ben Wilson, https://goo.gl/maps/egthnbnP2iE2'
		});
	break;
		// !guadalupe
		case 'guadalupe':
		bot.sendMessage({
			to: channelID,
			message: 'Guadalupe Baptist is on 2601 N Ben Jordan, https://goo.gl/maps/fgRZVj3eNFE2'
		});
	break;
		// !celebration
		case 'celebration':
		bot.sendMessage({
			to: channelID,
			message: 'WARNING! RESTRICTED GYM. DO NOT GO DURING SCHOOL HOURS. Celebration Church is at 3310 N Ben Jordan, https://goo.gl/maps/gjEPKLHaw7r'
		});
	break;
		// !grace
		case 'grace':
		bot.sendMessage({
			to: channelID,
			message: 'Grace Presbyterian Church is at 3604 N Ben Jordan St., https://goo.gl/maps/jqPzh1yYXQR2'
		});
	break;
		// !unitarian
		case 'unitarian':
		case 'uu':
		bot.sendMessage({
			to: channelID,
			message: 'Unitarian Universalist Church is at 1701 E Crestwood Dr., https://goo.gl/maps/1J8dKUTpSDr'
		});
	break;
		// !fwc
		case 'fwc':
		case 'familyworshipcenter':
		bot.sendMessage({
			to: channelID,
			message: 'Family Worship Center is at 501 Sam Houston Dr., https://goo.gl/maps/mbLbdysJxsA2'
		});
	break;
		// !finearts
		case 'finearts':
		bot.sendMessage({
			to: channelID,
			message: 'Fine Arts Center is at 1002 Sam Houston Dr., https://goo.gl/maps/seufnH73B882'
		});
	break;
		// !cdm
		case 'cdm':
		case 'childrensmuseum':
		bot.sendMessage({
			to: channelID,
			message: 'Children\'s Discovery Museum is at 1205 Sam Houston Dr., https://goo.gl/maps/6NGLP3VyqRw'
		});
	break;
		// !stfrancis
		case 'stfrancis':
		bot.sendMessage({
			to: channelID,
			message: 'St. Francis Episcopal Church is at 3002 Miori Ln., https://goo.gl/maps/UWweX7DwzmS2'
		});
	break;
		// !splashpad
		case 'splashpad':
		bot.sendMessage({
			to: channelID,
			message: 'Lone Tree Creek Splash Pad is off of Airline Rd., between Stadium Dr. and John Stockbauer, https://goo.gl/maps/nY8HRGHtYMn'
		});
	break;
		// !dairytreet
		case 'dairytreet':
		bot.sendMessage({
			to: channelID,
			message: 'Dairy Treet is at 3808 N Laurent, https://goo.gl/maps/VjtpJgJuLxu'
		});
	break;
		// !resurrection
		case 'resurrection':
		bot.sendMessage({
			to: channelID,
			message: 'Resurrection Cemetery is across the street from South Texas Eye Center, https://goo.gl/maps/Y8unmsKP6Q92'
		});
	break;
		// !postoffice
		case 'postoffice':
		bot.sendMessage({
			to: channelID,
			message: 'The Post Office on Sam Houston is at 2804 Sam Houston, https://goo.gl/maps/y5K6dCRZ9g92'
		});
	break;
		// !queencity
		case 'queencity':
		bot.sendMessage({
			to: channelID,
			message: 'Queen City Church of God in Christ is at 701 E Warren Ave., https://goo.gl/maps/jV5dNdo9yY32'
		});
	break;
		// !firstpresby
		case 'firstpresby':
		bot.sendMessage({
			to: channelID,
			message: 'First Presbyterian Church is at 2408 N Navarro, https://goo.gl/maps/sxqposTnFi42'
		});
	break;
		// !healthdept
		case 'healthdept':
		case 'communitygarden':
		bot.sendMessage({
			to: channelID,
			message: 'Victoria County Public Health Department Community Garden is on Navarro and Airline, Pattie Dodson Health Center, https://goo.gl/maps/VFDSRVZMsB12'
		});
	break;
		// !fostercreek
		case 'fostercreek':
		bot.sendMessage({
			to: channelID,
			message: 'WARNING! RESTRICTED GYM. DO NOT PLAY DURING BUSINESS HOURS. 504 E Crestwood, https://goo.gl/maps/FGpGPSxPBiS2'
		});
	break;
		// !sonrise
		case 'sonrise':
		bot.sendMessage({
			to: channelID,
			message: 'WARNING! RESTRICTED GYM. DO NOT PARK HERE. PARK NEAR, BUT DO NOT BLOCK ROADS OR ENTRANCES. 1101 E Nueces, https://goo.gl/maps/GEbPLPuLX7m'
		});
	break;
		// !baptisttemple
		case 'baptisttemple':
		bot.sendMessage({
			to: channelID,
			message: 'Baptist Temple Church is at 1804 N Laurent, https://goo.gl/maps/28SBm4ZF4y32'
		});
	break;
		//NORTH VICTORIA LIST
		case 'north':
		bot.sendMessage({
			to: channelID,
			message: 'North Victoria command list: \nethellee, ethelmonument, jesus, korean, northgate, tedbreed, watertower.'
		});
	break;
		// !watertower
		case 'watertower':
		bot.sendMessage({
			to: channelID,
			message: 'Victoria Water Tower is behind Verizon, near North Walmart on N Navarro, https://goo.gl/maps/3RvyFHansDz'
		});
	break;
		// !korean
		case 'korean':
		case 'kwvm':
		bot.sendMessage({
			to: channelID,
			message: 'Korean War Veterans Monument is on Harper\'s Ferry Crossing, in Green Belt Park, off of mockingbird, https://goo.gl/maps/wje4cqvdbm82'
		});
	break;
		// !tedbreed
		case 'tedbreed':
		bot.sendMessage({
			to: channelID,
			message: 'Ted B Reed is on Salem and Country Ln., https://goo.gl/maps/v3UVAhhXMs22'
		});
	break;
		// !ethellee
		case 'ethellee':
		bot.sendMessage({
			to: channelID,
			message: 'Ethel Lee Tracy Park is the entrance marker to the park. Take a right onto an unnamed road at the end of Larkspur, https://goo.gl/maps/dyYrcHmo8mv'
		});
	break;
		// !ethelmonument
		case 'ethelmonument':
		bot.sendMessage({
			to: channelID,
			message: 'Ethel Lee Tracy Monument is the covered area near the restrooms inside the park, https://goo.gl/maps/nA5QqvYQbjL2'
		});
	break;
		// !northgate
		case 'northgate':
		bot.sendMessage({
			to: channelID,
			message: 'Northgate Church of God is at 206 Broadmoor, https://goo.gl/maps/K7uPe2rTY842'
		});
	break;
		// !jesus
		case 'jesus':
		bot.sendMessage({
			to: channelID,
			message: 'Jesus statue is off of Mallet Dr., near Holy Family Catholic Church, https://goo.gl/maps/tNpS85hF5X82'
		});
	break;
		//SOUTH SIDE LIST
		case 'south':
		bot.sendMessage({
			to: channelID,
			message: 'South Victoria command list: \ncityharvest, communitycenter, legion, newman, sportscomplex, trinidad, vfw/vfwpost, zion.'
		});
	break;
		// !newman
		case 'newman':
		bot.sendMessage({
			to: channelID,
			message: 'One New Man Church is at 1603 Port Lavaca Dr., https://goo.gl/maps/UaqLsnzArhN2'
		});
	break;
		// !sportscomplex
		case 'sportscomplex':
		bot.sendMessage({
			to: channelID,
			message: 'Victoria Youth Sports Complex is the entrance sign off of Ben Wilson, https://goo.gl/maps/reufFGbrou82'
		});
	break;
		// !communitycenter
		case 'communitycenter':
		bot.sendMessage({
			to: channelID,
			message: 'Community Center is at 2905 E North St., https://goo.gl/maps/6RpzTotfG4v'
		});
	break;
		// !zion
		case 'zion':
		bot.sendMessage({
			to: channelID,
			message: 'Zion Tabernacle is at 602 N Ben Jordan St., https://goo.gl/maps/VXBgKQ2i9zN2'
		});
	break;
		// !cityharvest
		case 'cityharvest':
		bot.sendMessage({
			to: channelID,
			message: 'City Harvest Church is on Ben Wilson and Lone Tree, https://goo.gl/maps/ZEcFBFSszuT2'
		});
	break;
		// !vfwpost
		case 'vfwpost':
		case 'vfw':
		bot.sendMessage({
			to: channelID,
			message: 'VFW Post 4146 is at 2001 Lova Dr., https://goo.gl/maps/iqzFXwFT4U72'
		});
	break;
		// !legion
		case 'legion':
		bot.sendMessage({
			to: channelID,
			message: 'American Legion Post 166 is at 1402 E Santa Rosa St., https://goo.gl/maps/KjfbkU4LcXt'
		});
	break;
		// !trinidad
		case 'trinidad':
		case 'wheretheheckisthat':
		bot.sendMessage({
			to: channelID,
			message: 'Capilla De La Santisima Trinidad is at 2901 Pleasant Green Dr., https://goo.gl/maps/8tmq38kVVo12'
		});
	break;
		//LOCATIONS END
		//RAID COUNTERS START
		/*case '':
		bot.sendMessage({
			to: channelID,
			message: ''
		});
	break;*/
		/*/ !
		case '':
		bot.sendMessage({
			to: channelID,
			message: ''
		});
	break;
		// !
		case '':
		bot.sendMessage({
			to: channelID,
			message: ''
		});
	break;*/

	
         }
		 
     }
});
