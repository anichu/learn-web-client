import React from "react";

const Blog = () => {
	return (
		<div className="mx-10 my-5">
			<article className="py-5">
				<h1 className="text-3xl">what is cors?</h1>
				<p className="mt-2 text-xl">
					Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
					that allows a server to indicate any origins (domain, scheme, or port)
					other than its own from which a browser should permit loading
					resources. CORS also relies on a mechanism by which browsers make a
					"preflight" request to the server hosting the cross-origin resource,
					in order to check that the server will permit the actual request. In
					that preflight, the browser sends headers that indicate the HTTP
					method and headers that will be used in the actual request.
				</p>
			</article>
			<article className="py-5">
				<h1 className="text-3xl">How does the private route work?</h1>
				<p className="mt-2 text-xl">
					PrivateRoute component is the blueprint for all private routes in the
					application. If the user is logged in, go on and display the component
					in question; otherwise, redirect the user to sign-in page.
					Additionally, we can define the logic of isLogin utility function
					separately in utils folder.
				</p>
			</article>
			<article className="py-5">
				<h1 className="text-3xl">What is Node.JS?</h1>
				<p className="mt-2 text-xl">
					Node.js is an open source, cross-platform runtime environment and
					library that is used for running web applications outside the client’s
					browser. It is used for server-side programming, and primarily
					deployed for non-blocking, event-driven servers, such as traditional
					web sites and back-end API services, but was originally designed with
					real-time, push-based architectures in mind. Every browser has its own
					version of a JS engine, and node.js is built on Google Chrome’s V8
					JavaScript engine. Sounds a bit complicated, right?
				</p>
				<p className="mt-2 text-xl">
					In simple terms, what this means is that entire sites can be run using
					a unified ‘stack’, which makes development and maintenance quick and
					easy, allowing you to focus on meeting the business goals of the
					project. The fact that Node.js is open source means that it is free to
					use and constantly being tweaked and improved by a global community of
					developers. An important thing to understand about Node.js is that it
					is actually neither a framework or a library - as with traditional
					application software -, but a runtime environment.
				</p>
				<p className="mt-2 text-xl">
					A runtime environment (sometimes shortened to RTE) contains Web API’s
					that a developer can access to build a code, and a JavaScript engine
					that parses that code. This makes it lightweight, flexible and easy to
					deploy, all features that will help to optimize and speed up your
					application project.
				</p>
			</article>

			<article className="py-5">
				<h1 className="text-3xl">How does Node.JS work?</h1>
				<p className="mt-2 text-xl">
					Node.js accepts the request from the clients and sends the response,
					while working with the request node.js handles them with a single
					thread. To operate I/O operations or requests node.js use the concept
					of threads. Thread is a sequence of instructions that the server needs
					to perform. It runs parallel on the server to provide the information
					to multiple clients. Node.js is an event loop single-threaded
					language. It can handle concurrent requests with a single thread
					without blocking it for one request. Node.js basically works on two
					concept Asynchronous and Non-blocking I/O
				</p>
				<p className="mt-2 text-xl">
					<b>Non-blocking I/o:</b> Non-blocking i/o means working with multiple
					requests without blocking the thread for a single request. I/O
					basically interacts with external systems such as files, databases.
					Node.js is not used for CPU-intensive work means for calculations,
					video processing because a single thread cannot handle the CPU works.
					<br />
					<b>Asynchronous:</b> Asynchronous is executing a callback function.
					The moment we get the response from the other server or database it
					will execute a callback function. Callback functions are called as
					soon as some work is finished and this is because the node.js uses an
					event-driven architecture. The single thread doesn’t work with the
					request instead it sends the request to another system which resolves
					the request and it is accessible for another request.
				</p>
			</article>

			<article className="py-5">
				<h1 className="text-3xl">
					Why are you using firebase? What other options do you have to
					implement authentication?
				</h1>
				<p className="mt-2 text-xl">
					Google Firebase is an application development platform that allows
					developers to create iOS, Android, and Web apps. Here's why you should
					use it! Google Firebase offers many features that pitch it as the
					go-to backend development tool for web and mobile apps. It reduces
					development workload and time. And it's a perfect prototyping tool.
					Firebase is simple, lightweight, friendly, and industrially
					recognized.
				</p>
				<p className="mt-2 text-xl">
					Indeed, Firebase is a less technical and time-saving alternative to
					writing full-fledged backend code for dynamic apps. You might also
					want to consider leveraging this tool if you eventually wish to host
					and manage your app in the cloud. Being serverless, Firebase removes
					the need to worry about the technicalities of cloud server
					configuration. As a Google Cloud service, it also gives you access to
					other Google products and features, like Google Drive and Sheets. For
					instance, you can import dummy data from Google Sheets and use it
					temporarily to serve your app. With Firebase, it's pretty simple to
					connect and use built-in third-party authentication providers,
					including Google, Facebook, Twitter, among others. And if you want to
					use a pre-built authentication UI, you have it at your disposal as
					well.
				</p>
			</article>
		</div>
	);
};

export default Blog;
