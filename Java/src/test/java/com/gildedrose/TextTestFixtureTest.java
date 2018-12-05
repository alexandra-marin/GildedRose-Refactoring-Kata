package com.gildedrose;

import static org.assertj.core.api.Assertions.assertThat;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import org.junit.Test;

public class TextTestFixtureTest {
    @Test
    public void generatesOriginalOutput() throws Exception {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        PrintStream out = new PrintStream(byteArrayOutputStream);
        System.setOut(out);
        TextTestFixture.main(new String[]{});
        assertThat(byteArrayOutputStream.toString()).isEqualToIgnoringWhitespace("OMGHAI!\n" +
                "-------- day 0 --------\n" +
                "name, sellIn, quality\n" +
                "+5 Dexterity Vest, 10, 20\n" +
                "Aged Brie, 2, 0\n" +
                "Aged Brie, -1, 0\n" +
                "Aged Brie, -1, 50\n" +
                "Elixir of the Mongoose, 5, 7\n" +
                "Elixir of the Mongoose, 0, 7\n" +
                "Sulfuras, Hand of Ragnaros, 0, 80\n" +
                "Sulfuras, Hand of Ragnaros, -1, 80\n" +
                "Backstage passes to a TAFKAL80ETC concert, 15, 20\n" +
                "Backstage passes to a TAFKAL80ETC concert, 10, 49\n" +
                "Backstage passes to a TAFKAL80ETC concert, 5, 49\n" +
                "Backstage passes to a TAFKAL80ETC concert, 5, 40\n" +
                "Backstage passes to a TAFKAL80ETC concert, -1, 40\n" +
                "Conjured Mana Cake, 3, 6\n" +
                "Conjured Mana Cake, 3, 1\n" +
                "\n" +
                "-------- day 1 --------\n" +
                "name, sellIn, quality\n" +
                "+5 Dexterity Vest, 9, 19\n" +
                "Aged Brie, 1, 1\n" +
                "Aged Brie, -2, 2\n" +
                "Aged Brie, -2, 50\n" +
                "Elixir of the Mongoose, 4, 6\n" +
                "Elixir of the Mongoose, -1, 5\n" +
                "Sulfuras, Hand of Ragnaros, 0, 80\n" +
                "Sulfuras, Hand of Ragnaros, -1, 80\n" +
                "Backstage passes to a TAFKAL80ETC concert, 14, 21\n" +
                "Backstage passes to a TAFKAL80ETC concert, 9, 50\n" +
                "Backstage passes to a TAFKAL80ETC concert, 4, 50\n" +
                "Backstage passes to a TAFKAL80ETC concert, 4, 43\n" +
                "Backstage passes to a TAFKAL80ETC concert, -2, 0\n" +
                "Conjured Mana Cake, 2, 4\n" +
                "Conjured Mana Cake, 2, 0\n" +
                "\n");
    }
}
