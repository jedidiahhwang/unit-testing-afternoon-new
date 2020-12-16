import {shortenText} from "../utils/functions";
import {wordCount, attachUserName} from "../../server/utils";
import {shortText, longText, posts, users} from "./_data_/testData";

test("shortenText should shorten text over 100 characters and add 3 periods", () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe("...");
})

test("shortenText shouldn't shorten text under 100 characters", () => {
    expect(shortenText(shortText)).toHaveLength(29);
})

test("wordCount should count the number of words in a string", () => {
    expect(wordCount(posts)).toBe(233);
})

test("attachUserName should attach a username with a post", () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty("displayName");
})

test("attachUserName should remove a post with no matching user", () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
})