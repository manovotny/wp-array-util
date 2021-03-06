<?php

require_once 'vendor/autoload.php';

class WP_Array_Util_Test extends PHPUnit_Framework_TestCase {

    private $existing_array;
    private $items_to_add;
    private $wp_array_util;

    protected function setUp() {

        $this->existing_array = array(
            any_string(),
            any_string(),
            any_string()
        );

        $this->items_to_add = array(
            any_string(),
            any_string(),
            any_string()
        );

        $this->wp_array_util = WP_Array_Util::get_instance();

    }

    public function test_empty_existing_array_returns_items_to_add() {

        $result = $this->wp_array_util->add_items_at_index( null, $this->items_to_add );

        $this->assertEquals( $this->items_to_add, $result );

    }

    public function test_empty_items_to_add_returns_existing_array() {

        $result = $this->wp_array_util->add_items_at_index( $this->existing_array, null );

        $this->assertEquals( $this->existing_array, $result );

    }

    public function test_index_higher_than_existing_array_appends_items_to_add() {

        $expected = array_merge( $this->existing_array, $this->items_to_add );

        $result = $this->wp_array_util->add_items_at_index( $this->existing_array, $this->items_to_add, count( $this->existing_array ) + 10 );

        $this->assertEquals( $expected, $result );

    }

    public function test_items_to_add_are_inserted_at_the_specified_index() {

        $expected = array(
            $this->existing_array[0],
            $this->existing_array[1],
            $this->items_to_add[0],
            $this->items_to_add[1],
            $this->items_to_add[2],
            $this->existing_array[2],
        );

        $result = $this->wp_array_util->add_items_at_index( $this->existing_array, $this->items_to_add, 2 );

        $this->assertEquals( $expected, $result );

    }

}