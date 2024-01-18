<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'rohambob' );

/** Database password */
define( 'DB_PASSWORD', 'roham@hooman12' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '4s1Ph/A_/[wk<GUPWzQ@1U8q1S~eaq9{Q<Fy~Vc]3U;}{LsTzX>)QQgB2_x//nz6' );
define( 'SECURE_AUTH_KEY',  '6acbKMaQ<<Q`uOaN-rcjX)fk^Uf(*aB(k}S,v+xpQ$(*H;LJ/XOHyoB.&*LF$T}t' );
define( 'LOGGED_IN_KEY',    '1$IE8[*xSf+2!jhiAjhAaLpRIk|-N`hZ2=pk)c YGa)}uKJ2.{@nRNOv|?.(c|9z' );
define( 'NONCE_KEY',        'I0|fc/~g41SPTeRbKHM|[?+::_%/n*?J3?|}aQ,P)-`K~^XC*suKBq*TX[~A$LKI' );
define( 'AUTH_SALT',        'awJE!ZO5$2VLh[Rr}P4<`q]kW [pLP):A,07:Yf([||X($d0l0g/bg3E%5qMnK:w' );
define( 'SECURE_AUTH_SALT', 'HM_<.cr{w3NbFO$4hRY$3+`4/7aEDS PEo{VV~pq1)~AG>=]|YXkmwuHxFVUA(2{' );
define( 'LOGGED_IN_SALT',   'qslX6Hh?PdBmxR[EtHCdf@jix.2SRW1>Aws7:7fswL74 ,N#nfxq$dOSSs}V)Mo-' );
define( 'NONCE_SALT',       'ltPk7=8cxT6:GH`8j#}%Ush&W[<PxFR06,s_b J,~EY]PliPJ;nXyx/{;pK$XJbt' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
define('FTP_USER', 'root');
define('FTP_PASS', 'roham@hooman12');
define('FTP_HOST', '192.168.3.17');