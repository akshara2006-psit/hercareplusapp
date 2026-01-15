// import React, { useState } from "react";
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";

// export default function CommunityScreen() {
//   const [posts, setPosts] = useState([
//     { id: "1", user: "Aarohi 🌸", text: "Feeling anxious before my exams... any tips?", likes: 5 },
//     { id: "2", user: "Meera 💖", text: "PCOD symptoms improving after yoga & cutting sugar!", likes: 8 },
//     { id: "3", user: "Tina 🌼", text: "Anyone tried meditation for better sleep? Works wonders for me!", likes: 4 },
//   ]);

//   const [newPost, setNewPost] = useState("");

//   const addPost = () => {
//     if (newPost.trim() === "") return;
//     const newEntry = {
//       id: Date.now().toString(),
//       user: "You 💕",
//       text: newPost,
//       likes: 0,
//     };
//     setPosts([newEntry, ...posts]);
//     setNewPost("");
//   };

//   const likePost = (id) => {
//     setPosts(
//       posts.map((p) =>
//         p.id === id ? { ...p, likes: p.likes + 1 } : p
//       )
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>💬 Community Forum</Text>
//       <Text style={styles.subtitle}>Share experiences, support, and positivity 💖</Text>

//       {/* Create new post */}
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.input}
//           placeholder="Share your thoughts..."
//           value={newPost}
//           onChangeText={setNewPost}
//         />
//         <TouchableOpacity style={styles.postButton} onPress={addPost}>
//           <Text style={styles.postButtonText}>Post</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Community posts */}
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.postCard}>
//             <Text style={styles.userName}>{item.user}</Text>
//             <Text style={styles.postText}>{item.text}</Text>
//             <View style={styles.postFooter}>
//               <TouchableOpacity onPress={() => likePost(item.id)}>
//                 <Text style={styles.likeButton}>❤️ {item.likes}</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fef6f9",
//     padding: 16,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: "700",
//     color: "#d63384",
//     textAlign: "center",
//   },
//   subtitle: {
//     textAlign: "center",
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 15,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#fff",
//     borderRadius: 25,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     elevation: 2,
//   },
//   input: {
//     flex: 1,
//     paddingVertical: 8,
//   },
//   postButton: {
//     backgroundColor: "#d63384",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 25,
//   },
//   postButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   postCard: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     padding: 15,
//     marginBottom: 15,
//     elevation: 2,
//   },
//   userName: {
//     fontWeight: "bold",
//     color: "#b91c75",
//     marginBottom: 5,
//   },
//   postText: {
//     fontSize: 15,
//     color: "#333",
//     marginBottom: 10,
//   },
//   postFooter: {
//     flexDirection: "row",
//     justifyContent: "flex-end",
//   },
//   likeButton: {
//     color: "#e91e63",
//     fontWeight: "bold",
//   },
// });



import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CommunityScreen() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");
  const [likedPosts, setLikedPosts] = useState([]); // store IDs of liked posts

  // Load saved posts and likes on mount
  useEffect(() => {
    loadCommunityData();
  }, []);

  // Save data when posts or likes change
  useEffect(() => {
    saveCommunityData();
  }, [posts, likedPosts]);

  const loadCommunityData = async () => {
    try {
      const savedPosts = await AsyncStorage.getItem("communityPosts");
      const savedLikes = await AsyncStorage.getItem("likedPosts");

      if (savedPosts) {
        setPosts(JSON.parse(savedPosts));
      } else {
        // default sample posts
        const defaultPosts = [
          { id: "1", user: "Aarohi 🌸", text: "Feeling anxious before my exams... any tips?", likes: 5 },
          { id: "2", user: "Meera 💖", text: "PCOD symptoms improving after yoga & cutting sugar!", likes: 8 },
          { id: "3", user: "Tina 🌼", text: "Anyone tried meditation for better sleep? Works wonders for me!", likes: 4 },
        ];
        setPosts(defaultPosts);
      }

      if (savedLikes) setLikedPosts(JSON.parse(savedLikes));
    } catch (error) {
      console.log("Error loading community data:", error);
    }
  };

  const saveCommunityData = async () => {
    try {
      await AsyncStorage.setItem("communityPosts", JSON.stringify(posts));
      await AsyncStorage.setItem("likedPosts", JSON.stringify(likedPosts));
    } catch (error) {
      console.log("Error saving community data:", error);
    }
  };

  const addPost = () => {
    if (newPost.trim() === "") return;
    const newEntry = {
      id: Date.now().toString(),
      user: "You 💕",
      text: newPost,
      likes: 0,
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  const likePost = (id) => {
    let updatedPosts;
    let updatedLikes = [...likedPosts];

    if (likedPosts.includes(id)) {
      // unlike post
      updatedLikes = updatedLikes.filter((postId) => postId !== id);
      updatedPosts = posts.map((p) =>
        p.id === id ? { ...p, likes: Math.max(p.likes - 1, 0) } : p
      );
    } else {
      // like post
      updatedLikes.push(id);
      updatedPosts = posts.map((p) =>
        p.id === id ? { ...p, likes: p.likes + 1 } : p
      );
    }

    setPosts(updatedPosts);
    setLikedPosts(updatedLikes);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>💬 Community Forum</Text>
      <Text style={styles.subtitle}>Share experiences, support, and positivity 💖</Text>

      {/* Create new post */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Share your thoughts..."
          value={newPost}
          onChangeText={setNewPost}
        />
        <TouchableOpacity style={styles.postButton} onPress={addPost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>

      {/* Community posts */}
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isLiked = likedPosts.includes(item.id);
          return (
            <View style={styles.postCard}>
              <Text style={styles.userName}>{item.user}</Text>
              <Text style={styles.postText}>{item.text}</Text>
              <View style={styles.postFooter}>
                <TouchableOpacity onPress={() => likePost(item.id)}>
                  <Text style={[styles.likeButton, isLiked && styles.liked]}>
                    {isLiked ? "💖" : "🤍"} {item.likes}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fef6f9",
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#d63384",
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    elevation: 2,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
  },
  postButton: {
    backgroundColor: "#d63384",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 2,
  },
  userName: {
    fontWeight: "bold",
    color: "#b91c75",
    marginBottom: 5,
  },
  postText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  likeButton: {
    color: "#e91e63",
    fontWeight: "bold",
    fontSize: 15,
  },
  liked: {
    color: "#b91c75",
  },
});
