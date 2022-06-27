/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
var DO_NOT_EXPORT_CODEPAGE = true;
var DO_NOT_EXPORT_JSZIP = true;
(function (e) {
	if (
		"object" == typeof exports &&
		"undefined" != typeof module &&
		"undefined" == typeof DO_NOT_EXPORT_JSZIP
	)
		module.exports = e();
	else if (
		"function" == typeof define &&
		define.amd &&
		"undefined" == typeof DO_NOT_EXPORT_JSZIP
	) {
		JSZipSync = e();
		define([], e);
	} else {
		var r;
		"undefined" != typeof window
			? (r = window)
			: "undefined" != typeof global
			? (r = global)
			: "undefined" != typeof $ && $.global
			? (r = $.global)
			: "undefined" != typeof self && (r = self),
			(r.JSZipSync = e());
	}
})(function () {
	var e, r, t;
	return (function a(e, r, t) {
		function n(s, f) {
			if (!r[s]) {
				if (!e[s]) {
					var l = typeof require == "function" && require;
					if (!f && l) return l(s, !0);
					if (i) return i(s, !0);
					throw new Error("Cannot find module '" + s + "'");
				}
				var o = (r[s] = { exports: {} });
				e[s][0].call(
					o.exports,
					function (r) {
						var t = e[s][1][r];
						return n(t ? t : r);
					},
					o,
					o.exports,
					a,
					e,
					r,
					t
				);
			}
			return r[s].exports;
		}
		var i = typeof require == "function" && require;
		for (var s = 0; s < t.length; s++) n(t[s]);
		return n;
	})(
		{
			1: [
				function (e, r, t) {
					"use strict";
					var a =
						"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
					t.encode = function (e, r) {
						var t = "";
						var n, i, s, f, l, o, c;
						var u = 0;
						while (u < e.length) {
							n = e.charCodeAt(u++);
							i = e.charCodeAt(u++);
							s = e.charCodeAt(u++);
							f = n >> 2;
							l = ((n & 3) << 4) | (i >> 4);
							o = ((i & 15) << 2) | (s >> 6);
							c = s & 63;
							if (isNaN(i)) {
								o = c = 64;
							} else if (isNaN(s)) {
								c = 64;
							}
							t = t + a.charAt(f) + a.charAt(l) + a.charAt(o) + a.charAt(c);
						}
						return t;
					};
					t.decode = function (e, r) {
						var t = "";
						var n, i, s;
						var f, l, o, c;
						var u = 0;
						e = e.replace(/[^A-Za-z0-9\+\/\=]/g, "");
						while (u < e.length) {
							f = a.indexOf(e.charAt(u++));
							l = a.indexOf(e.charAt(u++));
							o = a.indexOf(e.charAt(u++));
							c = a.indexOf(e.charAt(u++));
							n = (f << 2) | (l >> 4);
							i = ((l & 15) << 4) | (o >> 2);
							s = ((o & 3) << 6) | c;
							t = t + String.fromCharCode(n);
							if (o != 64) {
								t = t + String.fromCharCode(i);
							}
							if (c != 64) {
								t = t + String.fromCharCode(s);
							}
						}
						return t;
					};
				},
				{},
			],
			2: [
				function (e, r, t) {
					"use strict";
					function a() {
						this.compressedSize = 0;
						this.uncompressedSize = 0;
						this.crc32 = 0;
						this.compressionMethod = null;
						this.compressedContent = null;
					}
					a.prototype = {
						getContent: function () {
							return null;
						},
						getCompressedContent: function () {
							return null;
						},
					};
					r.exports = a;
				},
				{},
			],
			3: [
				function (e, r, t) {
					"use strict";
					t.STORE = {
						magic: "\0\0",
						compress: function (e) {
							return e;
						},
						uncompress: function (e) {
							return e;
						},
						compressInputType: null,
						uncompressInputType: null,
					};
					t.DEFLATE = e("./flate");
				},
				{ "./flate": 8 },
			],
			4: [
				function (e, r, t) {
					"use strict";
					var a = e("./utils");
					var n = [
						0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615,
						3915621685, 2657392035, 249268274, 2044508324, 3772115230,
						2547177864, 162941995, 2125561021, 3887607047, 2428444049,
						498536548, 1789927666, 4089016648, 2227061214, 450548861,
						1843258603, 4107580753, 2211677639, 325883990, 1684777152,
						4251122042, 2321926636, 335633487, 1661365465, 4195302755,
						2366115317, 997073096, 1281953886, 3579855332, 2724688242,
						1006888145, 1258607687, 3524101629, 2768942443, 901097722,
						1119000684, 3686517206, 2898065728, 853044451, 1172266101,
						3705015759, 2882616665, 651767980, 1373503546, 3369554304,
						3218104598, 565507253, 1454621731, 3485111705, 3099436303,
						671266974, 1594198024, 3322730930, 2970347812, 795835527,
						1483230225, 3244367275, 3060149565, 1994146192, 31158534,
						2563907772, 4023717930, 1907459465, 112637215, 2680153253,
						3904427059, 2013776290, 251722036, 2517215374, 3775830040,
						2137656763, 141376813, 2439277719, 3865271297, 1802195444,
						476864866, 2238001368, 4066508878, 1812370925, 453092731,
						2181625025, 4111451223, 1706088902, 314042704, 2344532202,
						4240017532, 1658658271, 366619977, 2362670323, 4224994405,
						1303535960, 984961486, 2747007092, 3569037538, 1256170817,
						1037604311, 2765210733, 3554079995, 1131014506, 879679996,
						2909243462, 3663771856, 1141124467, 855842277, 2852801631,
						3708648649, 1342533948, 654459306, 3188396048, 3373015174,
						1466479909, 544179635, 3110523913, 3462522015, 1591671054,
						702138776, 2966460450, 3352799412, 1504918807, 783551873,
						3082640443, 3233442989, 3988292384, 2596254646, 62317068,
						1957810842, 3939845945, 2647816111, 81470997, 1943803523,
						3814918930, 2489596804, 225274430, 2053790376, 3826175755,
						2466906013, 167816743, 2097651377, 4027552580, 2265490386,
						503444072, 1762050814, 4150417245, 2154129355, 426522225,
						1852507879, 4275313526, 2312317920, 282753626, 1742555852,
						4189708143, 2394877945, 397917763, 1622183637, 3604390888,
						2714866558, 953729732, 1340076626, 3518719985, 2797360999,
						1068828381, 1219638859, 3624741850, 2936675148, 906185462,
						1090812512, 3747672003, 2825379669, 829329135, 1181335161,
						3412177804, 3160834842, 628085408, 1382605366, 3423369109,
						3138078467, 570562233, 1426400815, 3317316542, 2998733608,
						733239954, 1555261956, 3268935591, 3050360625, 752459403,
						1541320221, 2607071920, 3965973030, 1969922972, 40735498,
						2617837225, 3943577151, 1913087877, 83908371, 2512341634,
						3803740692, 2075208622, 213261112, 2463272603, 3855990285,
						2094854071, 198958881, 2262029012, 4057260610, 1759359992,
						534414190, 2176718541, 4139329115, 1873836001, 414664567,
						2282248934, 4279200368, 1711684554, 285281116, 2405801727,
						4167216745, 1634467795, 376229701, 2685067896, 3608007406,
						1308918612, 956543938, 2808555105, 3495958263, 1231636301,
						1047427035, 2932959818, 3654703836, 1088359270, 936918e3,
						2847714899, 3736837829, 1202900863, 817233897, 3183342108,
						3401237130, 1404277552, 615818150, 3134207493, 3453421203,
						1423857449, 601450431, 3009837614, 3294710456, 1567103746,
						711928724, 3020668471, 3272380065, 1510334235, 755167117,
					];
					r.exports = function i(e, r) {
						if (typeof e === "undefined" || !e.length) {
							return 0;
						}
						var t = a.getTypeOf(e) !== "string";
						if (typeof r == "undefined") {
							r = 0;
						}
						var i = 0;
						var s = 0;
						var f = 0;
						r = r ^ -1;
						for (var l = 0, o = e.length; l < o; l++) {
							f = t ? e[l] : e.charCodeAt(l);
							s = (r ^ f) & 255;
							i = n[s];
							r = (r >>> 8) ^ i;
						}
						return r ^ -1;
					};
				},
				{ "./utils": 21 },
			],
			5: [
				function (e, r, t) {
					"use strict";
					var a = e("./utils");
					function n(e) {
						this.data = null;
						this.length = 0;
						this.index = 0;
					}
					n.prototype = {
						checkOffset: function (e) {
							this.checkIndex(this.index + e);
						},
						checkIndex: function (e) {
							if (this.length < e || e < 0) {
								throw new Error(
									"End of data reached (data length = " +
										this.length +
										", asked index = " +
										e +
										"). Corrupted zip ?"
								);
							}
						},
						setIndex: function (e) {
							this.checkIndex(e);
							this.index = e;
						},
						skip: function (e) {
							this.setIndex(this.index + e);
						},
						byteAt: function (e) {},
						readInt: function (e) {
							var r = 0,
								t;
							this.checkOffset(e);
							for (t = this.index + e - 1; t >= this.index; t--) {
								r = (r << 8) + this.byteAt(t);
							}
							this.index += e;
							return r;
						},
						readString: function (e) {
							return a.transformTo("string", this.readData(e));
						},
						readData: function (e) {},
						lastIndexOfSignature: function (e) {},
						readDate: function () {
							var e = this.readInt(4);
							return new Date(
								((e >> 25) & 127) + 1980,
								((e >> 21) & 15) - 1,
								(e >> 16) & 31,
								(e >> 11) & 31,
								(e >> 5) & 63,
								(e & 31) << 1
							);
						},
					};
					r.exports = n;
				},
				{ "./utils": 21 },
			],
			6: [
				function (e, r, t) {
					"use strict";
					t.base64 = false;
					t.binary = false;
					t.dir = false;
					t.createFolders = false;
					t.date = null;
					t.compression = null;
					t.comment = null;
				},
				{},
			],
			7: [
				function (e, r, t) {
					"use strict";
					var a = e("./utils");
					t.string2binary = function (e) {
						return a.string2binary(e);
					};
					t.string2Uint8Array = function (e) {
						return a.transformTo("uint8array", e);
					};
					t.uint8Array2String = function (e) {
						return a.transformTo("string", e);
					};
					t.string2Blob = function (e) {
						var r = a.transformTo("arraybuffer", e);
						return a.arrayBuffer2Blob(r);
					};
					t.arrayBuffer2Blob = function (e) {
						return a.arrayBuffer2Blob(e);
					};
					t.transformTo = function (e, r) {
						return a.transformTo(e, r);
					};
					t.getTypeOf = function (e) {
						return a.getTypeOf(e);
					};
					t.checkSupport = function (e) {
						return a.checkSupport(e);
					};
					t.MAX_VALUE_16BITS = a.MAX_VALUE_16BITS;
					t.MAX_VALUE_32BITS = a.MAX_VALUE_32BITS;
					t.pretty = function (e) {
						return a.pretty(e);
					};
					t.findCompression = function (e) {
						return a.findCompression(e);
					};
					t.isRegExp = function (e) {
						return a.isRegExp(e);
					};
				},
				{ "./utils": 21 },
			],
			8: [
				function (e, r, t) {
					"use strict";
					var a =
						typeof Uint8Array !== "undefined" &&
						typeof Uint16Array !== "undefined" &&
						typeof Uint32Array !== "undefined";
					var n = e("pako");
					t.uncompressInputType = a ? "uint8array" : "array";
					t.compressInputType = a ? "uint8array" : "array";
					t.magic = "\b\0";
					t.compress = function (e) {
						return n.deflateRaw(e);
					};
					t.uncompress = function (e) {
						return n.inflateRaw(e);
					};
				},
				{ pako: 24 },
			],
			9: [
				function (e, r, t) {
					"use strict";
					var a = e("./base64");
					function n(e, r) {
						if (!(this instanceof n)) return new n(e, r);
						this.files = {};
						this.comment = null;
						this.root = "";
						if (e) {
							this.load(e, r);
						}
						this.clone = function () {
							var e = new n();
							for (var r in this) {
								if (typeof this[r] !== "function") {
									e[r] = this[r];
								}
							}
							return e;
						};
					}
					n.prototype = e("./object");
					n.prototype.load = e("./load");
					n.support = e("./support");
					n.defaults = e("./defaults");
					n.utils = e("./deprecatedPublicUtils");
					n.base64 = {
						encode: function (e) {
							return a.encode(e);
						},
						decode: function (e) {
							return a.decode(e);
						},
					};
					n.compressions = e("./compressions");
					r.exports = n;
				},
				{
					"./base64": 1,
					"./compressions": 3,
					"./defaults": 6,
					"./deprecatedPublicUtils": 7,
					"./load": 10,
					"./object": 13,
					"./support": 17,
				},
			],
			10: [
				function (e, r, t) {
					"use strict";
					var a = e("./base64");
					var n = e("./zipEntries");
					r.exports = function (e, r) {
						var t, i, s, f;
						r = r || {};
						if (r.base64) {
							e = a.decode(e);
						}
						i = new n(e, r);
						t = i.files;
						for (s = 0; s < t.length; s++) {
							f = t[s];
							this.file(f.fileName, f.decompressed, {
								binary: true,
								optimizedBinaryString: true,
								date: f.date,
								dir: f.dir,
								comment: f.fileComment.length ? f.fileComment : null,
								createFolders: r.createFolders,
							});
						}
						if (i.zipComment.length) {
							this.comment = i.zipComment;
						}
						return this;
					};
				},
				{ "./base64": 1, "./zipEntries": 22 },
			],
			11: [
				function (e, r, t) {
					(function (e) {
						"use strict";
						var t = function () {};
						if (typeof e !== "undefined") {
							var a = !e.from;
							if (!a)
								try {
									e.from("foo", "utf8");
								} catch (n) {
									a = true;
								}
							t = a
								? function (r, t) {
										return t ? new e(r, t) : new e(r);
								  }
								: e.from.bind(e);
							if (!e.alloc)
								e.alloc = function (r) {
									return new e(r);
								};
						}
						r.exports = function (r, a) {
							return typeof r == "number" ? e.alloc(r) : t(r, a);
						};
						r.exports.test = function (r) {
							return e.isBuffer(r);
						};
					}.call(this, typeof Buffer !== "undefined" ? Buffer : undefined));
				},
				{},
			],
			12: [
				function (e, r, t) {
					"use strict";
					var a = e("./uint8ArrayReader");
					function n(e) {
						this.data = e;
						this.length = this.data.length;
						this.index = 0;
					}
					n.prototype = new a();
					n.prototype.readData = function (e) {
						this.checkOffset(e);
						var r = this.data.slice(this.index, this.index + e);
						this.index += e;
						return r;
					};
					r.exports = n;
				},
				{ "./uint8ArrayReader": 18 },
			],
			13: [
				function (e, r, t) {
					"use strict";
					var a = e("./support");
					var n = e("./utils");
					var i = e("./crc32");
					var s = e("./signature");
					var f = e("./defaults");
					var l = e("./base64");
					var o = e("./compressions");
					var c = e("./compressedObject");
					var u = e("./nodeBuffer");
					var h = e("./utf8");
					var d = e("./stringWriter");
					var v = e("./uint8ArrayWriter");
					var p = function (e) {
						if (e._data instanceof c) {
							e._data = e._data.getContent();
							e.options.binary = true;
							e.options.base64 = false;
							if (n.getTypeOf(e._data) === "uint8array") {
								var r = e._data;
								e._data = new Uint8Array(r.length);
								if (r.length !== 0) {
									e._data.set(r, 0);
								}
							}
						}
						return e._data;
					};
					var m = function (e) {
						var r = p(e),
							t = n.getTypeOf(r);
						if (t === "string") {
							if (!e.options.binary) {
								if (a.nodebuffer) {
									return u(r, "utf-8");
								}
							}
							return e.asBinary();
						}
						return r;
					};
					var b = function (e) {
						var r = p(this);
						if (r === null || typeof r === "undefined") {
							return "";
						}
						if (this.options.base64) {
							r = l.decode(r);
						}
						if (e && this.options.binary) {
							r = x.utf8decode(r);
						} else {
							r = n.transformTo("string", r);
						}
						if (!e && !this.options.binary) {
							r = n.transformTo("string", x.utf8encode(r));
						}
						return r;
					};
					var g = function (e, r, t) {
						this.name = e;
						this.dir = t.dir;
						this.date = t.date;
						this.comment = t.comment;
						this._data = r;
						this.options = t;
						this._initialMetadata = { dir: t.dir, date: t.date };
					};
					g.prototype = {
						asText: function () {
							return b.call(this, true);
						},
						asBinary: function () {
							return b.call(this, false);
						},
						asNodeBuffer: function () {
							var e = m(this);
							return n.transformTo("nodebuffer", e);
						},
						asUint8Array: function () {
							var e = m(this);
							return n.transformTo("uint8array", e);
						},
						asArrayBuffer: function () {
							return this.asUint8Array().buffer;
						},
					};
					var w = function (e, r) {
						var t = "",
							a;
						for (a = 0; a < r; a++) {
							t += String.fromCharCode(e & 255);
							e = e >>> 8;
						}
						return t;
					};
					var E = function () {
						var e = {},
							r,
							t;
						for (r = 0; r < arguments.length; r++) {
							for (t in arguments[r]) {
								if (
									arguments[r].hasOwnProperty(t) &&
									typeof e[t] === "undefined"
								) {
									e[t] = arguments[r][t];
								}
							}
						}
						return e;
					};
					var k = function (e) {
						e = e || {};
						if (
							e.base64 === true &&
							(e.binary === null || e.binary === undefined)
						) {
							e.binary = true;
						}
						e = E(e, f);
						e.date = e.date || new Date();
						if (e.compression !== null)
							e.compression = e.compression.toUpperCase();
						return e;
					};
					var S = function (e, r, t) {
						var a = n.getTypeOf(r),
							i;
						t = k(t);
						if (t.createFolders && (i = _(e))) {
							C.call(this, i, true);
						}
						if (t.dir || r === null || typeof r === "undefined") {
							t.base64 = false;
							t.binary = false;
							r = null;
						} else if (a === "string") {
							if (t.binary && !t.base64) {
								if (t.optimizedBinaryString !== true) {
									r = n.string2binary(r);
								}
							}
						} else {
							t.base64 = false;
							t.binary = true;
							if (!a && !(r instanceof c)) {
								throw new Error(
									"The data of '" + e + "' is in an unsupported format !"
								);
							}
							if (a === "arraybuffer") {
								r = n.transformTo("uint8array", r);
							}
						}
						var s = new g(e, r, t);
						this.files[e] = s;
						return s;
					};
					var _ = function (e) {
						if (e.slice(-1) == "/") {
							e = e.substring(0, e.length - 1);
						}
						var r = e.lastIndexOf("/");
						return r > 0 ? e.substring(0, r) : "";
					};
					var C = function (e, r) {
						if (e.slice(-1) != "/") {
							e += "/";
						}
						r = typeof r !== "undefined" ? r : false;
						if (!this.files[e]) {
							S.call(this, e, null, { dir: true, createFolders: r });
						}
						return this.files[e];
					};
					var B = function (e, r) {
						var t = new c(),
							a;
						if (e._data instanceof c) {
							t.uncompressedSize = e._data.uncompressedSize;
							t.crc32 = e._data.crc32;
							if (t.uncompressedSize === 0 || e.dir) {
								r = o["STORE"];
								t.compressedContent = "";
								t.crc32 = 0;
							} else if (e._data.compressionMethod === r.magic) {
								t.compressedContent = e._data.getCompressedContent();
							} else {
								a = e._data.getContent();
								t.compressedContent = r.compress(
									n.transformTo(r.compressInputType, a)
								);
							}
						} else {
							a = m(e);
							if (!a || a.length === 0 || e.dir) {
								r = o["STORE"];
								a = "";
							}
							t.uncompressedSize = a.length;
							t.crc32 = i(a);
							t.compressedContent = r.compress(
								n.transformTo(r.compressInputType, a)
							);
						}
						t.compressedSize = t.compressedContent.length;
						t.compressionMethod = r.magic;
						return t;
					};
					var T = function (e, r, t, a) {
						var f = t.compressedContent,
							l = n.transformTo("string", h.utf8encode(r.name)),
							o = r.comment || "",
							c = n.transformTo("string", h.utf8encode(o)),
							u = l.length !== r.name.length,
							d = c.length !== o.length,
							v = r.options,
							p,
							m,
							b = "",
							g = "",
							E = "",
							k,
							S;
						if (r._initialMetadata.dir !== r.dir) {
							k = r.dir;
						} else {
							k = v.dir;
						}
						if (r._initialMetadata.date !== r.date) {
							S = r.date;
						} else {
							S = v.date;
						}
						p = S.getHours();
						p = p << 6;
						p = p | S.getMinutes();
						p = p << 5;
						p = p | (S.getSeconds() / 2);
						m = S.getFullYear() - 1980;
						m = m << 4;
						m = m | (S.getMonth() + 1);
						m = m << 5;
						m = m | S.getDate();
						if (u) {
							g = w(1, 1) + w(i(l), 4) + l;
							b += "up" + w(g.length, 2) + g;
						}
						if (d) {
							E = w(1, 1) + w(this.crc32(c), 4) + c;
							b += "uc" + w(E.length, 2) + E;
						}
						var _ = "";
						_ += "\n\0";
						_ += u || d ? "\0\b" : "\0\0";
						_ += t.compressionMethod;
						_ += w(p, 2);
						_ += w(m, 2);
						_ += w(t.crc32, 4);
						_ += w(t.compressedSize, 4);
						_ += w(t.uncompressedSize, 4);
						_ += w(l.length, 2);
						_ += w(b.length, 2);
						var C = s.LOCAL_FILE_HEADER + _ + l + b;
						var B =
							s.CENTRAL_FILE_HEADER +
							"\0" +
							_ +
							w(c.length, 2) +
							"\0\0" +
							"\0\0" +
							(k === true ? "\0\0\0" : "\0\0\0\0") +
							w(a, 4) +
							l +
							b +
							c;
						return { fileRecord: C, dirRecord: B, compressedObject: t };
					};
					var x = {
						load: function (e, r) {
							throw new Error(
								"Load method is not defined. Is the file jszip-load.js included ?"
							);
						},
						filter: function (e) {
							var r = [],
								t,
								a,
								n,
								i;
							for (t in this.files) {
								if (!this.files.hasOwnProperty(t)) {
									continue;
								}
								n = this.files[t];
								i = new g(n.name, n._data, E(n.options));
								a = t.slice(this.root.length, t.length);
								if (t.slice(0, this.root.length) === this.root && e(a, i)) {
									r.push(i);
								}
							}
							return r;
						},
						file: function (e, r, t) {
							if (arguments.length === 1) {
								if (n.isRegExp(e)) {
									var a = e;
									return this.filter(function (e, r) {
										return !r.dir && a.test(e);
									});
								} else {
									return (
										this.filter(function (r, t) {
											return !t.dir && r === e;
										})[0] || null
									);
								}
							} else {
								e = this.root + e;
								S.call(this, e, r, t);
							}
							return this;
						},
						folder: function (e) {
							if (!e) {
								return this;
							}
							if (n.isRegExp(e)) {
								return this.filter(function (r, t) {
									return t.dir && e.test(r);
								});
							}
							var r = this.root + e;
							var t = C.call(this, r);
							var a = this.clone();
							a.root = t.name;
							return a;
						},
						remove: function (e) {
							e = this.root + e;
							var r = this.files[e];
							if (!r) {
								if (e.slice(-1) != "/") {
									e += "/";
								}
								r = this.files[e];
							}
							if (r && !r.dir) {
								delete this.files[e];
							} else {
								var t = this.filter(function (r, t) {
									return t.name.slice(0, e.length) === e;
								});
								for (var a = 0; a < t.length; a++) {
									delete this.files[t[a].name];
								}
							}
							return this;
						},
						generate: function (e) {
							e = E(e || {}, {
								base64: true,
								compression: "STORE",
								type: "base64",
								comment: null,
							});
							n.checkSupport(e.type);
							var r = [],
								t = 0,
								a = 0,
								i,
								f,
								c = n.transformTo(
									"string",
									this.utf8encode(e.comment || this.comment || "")
								);
							for (var u in this.files) {
								if (!this.files.hasOwnProperty(u)) {
									continue;
								}
								var h = this.files[u];
								var p = h.options.compression || e.compression.toUpperCase();
								var m = o[p];
								if (!m) {
									throw new Error(p + " is not a valid compression method !");
								}
								var b = B.call(this, h, m);
								var g = T.call(this, u, h, b, t);
								t += g.fileRecord.length + b.compressedSize;
								a += g.dirRecord.length;
								r.push(g);
							}
							var k = "";
							k =
								s.CENTRAL_DIRECTORY_END +
								"\0\0" +
								"\0\0" +
								w(r.length, 2) +
								w(r.length, 2) +
								w(a, 4) +
								w(t, 4) +
								w(c.length, 2) +
								c;
							var S = e.type.toLowerCase();
							if (
								S === "uint8array" ||
								S === "arraybuffer" ||
								S === "blob" ||
								S === "nodebuffer"
							) {
								i = new v(t + a + k.length);
							} else {
								i = new d(t + a + k.length);
							}
							for (f = 0; f < r.length; f++) {
								i.append(r[f].fileRecord);
								i.append(r[f].compressedObject.compressedContent);
							}
							for (f = 0; f < r.length; f++) {
								i.append(r[f].dirRecord);
							}
							i.append(k);
							var _ = i.finalize();
							switch (e.type.toLowerCase()) {
								case "uint8array":
								case "arraybuffer":
								case "nodebuffer":
									return n.transformTo(e.type.toLowerCase(), _);
								case "blob":
									return n.arrayBuffer2Blob(n.transformTo("arraybuffer", _));
								case "base64":
									return e.base64 ? l.encode(_) : _;
								default:
									return _;
							}
						},
						crc32: function (e, r) {
							return i(e, r);
						},
						utf8encode: function (e) {
							return n.transformTo("string", h.utf8encode(e));
						},
						utf8decode: function (e) {
							return h.utf8decode(e);
						},
					};
					r.exports = x;
				},
				{
					"./base64": 1,
					"./compressedObject": 2,
					"./compressions": 3,
					"./crc32": 4,
					"./defaults": 6,
					"./nodeBuffer": 11,
					"./signature": 14,
					"./stringWriter": 16,
					"./support": 17,
					"./uint8ArrayWriter": 19,
					"./utf8": 20,
					"./utils": 21,
				},
			],
			14: [
				function (e, r, t) {
					"use strict";
					t.LOCAL_FILE_HEADER = "PK";
					t.CENTRAL_FILE_HEADER = "PK";
					t.CENTRAL_DIRECTORY_END = "PK";
					t.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK";
					t.ZIP64_CENTRAL_DIRECTORY_END = "PK";
					t.DATA_DESCRIPTOR = "PK\b";
				},
				{},
			],
			15: [
				function (e, r, t) {
					"use strict";
					var a = e("./dataReader");
					var n = e("./utils");
					function i(e, r) {
						this.data = e;
						if (!r) {
							this.data = n.string2binary(this.data);
						}
						this.length = this.data.length;
						this.index = 0;
					}
					i.prototype = new a();
					i.prototype.byteAt = function (e) {
						return this.data.charCodeAt(e);
					};
					i.prototype.lastIndexOfSignature = function (e) {
						return this.data.lastIndexOf(e);
					};
					i.prototype.readData = function (e) {
						this.checkOffset(e);
						var r = this.data.slice(this.index, this.index + e);
						this.index += e;
						return r;
					};
					r.exports = i;
				},
				{ "./dataReader": 5, "./utils": 21 },
			],
			16: [
				function (e, r, t) {
					"use strict";
					var a = e("./utils");
					var n = function () {
						this.data = [];
					};
					n.prototype = {
						append: function (e) {
							e = a.transformTo("string", e);
							this.data.push(e);
						},
						finalize: function () {
							return this.data.join("");
						},
					};
					r.exports = n;
				},
				{ "./utils": 21 },
			],
			17: [
				function (e, r, t) {
					(function (e) {
						"use strict";
						t.base64 = true;
						t.array = true;
						t.string = true;
						t.arraybuffer =
							typeof ArrayBuffer !== "undefined" &&
							typeof Uint8Array !== "undefined";
						t.nodebuffer = typeof e !== "undefined";
						t.uint8array = typeof Uint8Array !== "undefined";
						if (typeof ArrayBuffer === "undefined") {
							t.blob = false;
						} else {
							var r = new ArrayBuffer(0);
							try {
								t.blob = new Blob([r], { type: "application/zip" }).size === 0;
							} catch (a) {
								try {
									var n =
										window.BlobBuilder ||
										window.WebKitBlobBuilder ||
										window.MozBlobBuilder ||
										window.MSBlobBuilder;
									var i = new n();
									i.append(r);
									t.blob = i.getBlob("application/zip").size === 0;
								} catch (a) {
									t.blob = false;
								}
							}
						}
					}.call(this, typeof Buffer !== "undefined" ? Buffer : undefined));
				},
				{},
			],
			18: [
				function (e, r, t) {
					"use strict";
					var a = e("./dataReader");
					function n(e) {
						if (e) {
							this.data = e;
							this.length = this.data.length;
							this.index = 0;
						}
					}
					n.prototype = new a();
					n.prototype.byteAt = function (e) {
						return this.data[e];
					};
					n.prototype.lastIndexOfSignature = function (e) {
						var r = e.charCodeAt(0),
							t = e.charCodeAt(1),
							a = e.charCodeAt(2),
							n = e.charCodeAt(3);
						for (var i = this.length - 4; i >= 0; --i) {
							if (
								this.data[i] === r &&
								this.data[i + 1] === t &&
								this.data[i + 2] === a &&
								this.data[i + 3] === n
							) {
								return i;
							}
						}
						return -1;
					};
					n.prototype.readData = function (e) {
						this.checkOffset(e);
						if (e === 0) {
							return new Uint8Array(0);
						}
						var r = this.data.subarray(this.index, this.index + e);
						this.index += e;
						return r;
					};
					r.exports = n;
				},
				{ "./dataReader": 5 },
			],
			19: [
				function (e, r, t) {
					"use strict";
					var a = e("./utils");
					var n = function (e) {
						this.data = new Uint8Array(e);
						this.index = 0;
					};
					n.prototype = {
						append: function (e) {
							if (e.length !== 0) {
								e = a.transformTo("uint8array", e);
								this.data.set(e, this.index);
								this.index += e.length;
							}
						},
						finalize: function () {
							return this.data;
						},
					};
					r.exports = n;
				},
				{ "./utils": 21 },
			],
			20: [
				function (e, r, t) {
					"use strict";
					var a = e("./utils");
					var n = e("./support");
					var i = e("./nodeBuffer");
					var s = new Array(256);
					for (var f = 0; f < 256; f++) {
						s[f] =
							f >= 252
								? 6
								: f >= 248
								? 5
								: f >= 240
								? 4
								: f >= 224
								? 3
								: f >= 192
								? 2
								: 1;
					}
					s[254] = s[254] = 1;
					var l = function (e) {
						var r,
							t,
							a,
							i,
							s,
							f = e.length,
							l = 0;
						for (i = 0; i < f; i++) {
							t = e.charCodeAt(i);
							if ((t & 64512) === 55296 && i + 1 < f) {
								a = e.charCodeAt(i + 1);
								if ((a & 64512) === 56320) {
									t = 65536 + ((t - 55296) << 10) + (a - 56320);
									i++;
								}
							}
							l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
						}
						if (n.uint8array) {
							r = new Uint8Array(l);
						} else {
							r = new Array(l);
						}
						for (s = 0, i = 0; s < l; i++) {
							t = e.charCodeAt(i);
							if ((t & 64512) === 55296 && i + 1 < f) {
								a = e.charCodeAt(i + 1);
								if ((a & 64512) === 56320) {
									t = 65536 + ((t - 55296) << 10) + (a - 56320);
									i++;
								}
							}
							if (t < 128) {
								r[s++] = t;
							} else if (t < 2048) {
								r[s++] = 192 | (t >>> 6);
								r[s++] = 128 | (t & 63);
							} else if (t < 65536) {
								r[s++] = 224 | (t >>> 12);
								r[s++] = 128 | ((t >>> 6) & 63);
								r[s++] = 128 | (t & 63);
							} else {
								r[s++] = 240 | (t >>> 18);
								r[s++] = 128 | ((t >>> 12) & 63);
								r[s++] = 128 | ((t >>> 6) & 63);
								r[s++] = 128 | (t & 63);
							}
						}
						return r;
					};
					var o = function (e, r) {
						var t;
						r = r || e.length;
						if (r > e.length) {
							r = e.length;
						}
						t = r - 1;
						while (t >= 0 && (e[t] & 192) === 128) {
							t--;
						}
						if (t < 0) {
							return r;
						}
						if (t === 0) {
							return r;
						}
						return t + s[e[t]] > r ? t : r;
					};
					var c = function (e) {
						var r, t, n, i, f;
						var l = e.length;
						var o = new Array(l * 2);
						for (n = 0, t = 0; t < l; ) {
							i = e[t++];
							if (i < 128) {
								o[n++] = i;
								continue;
							}
							f = s[i];
							if (f > 4) {
								o[n++] = 65533;
								t += f - 1;
								continue;
							}
							i &= f === 2 ? 31 : f === 3 ? 15 : 7;
							while (f > 1 && t < l) {
								i = (i << 6) | (e[t++] & 63);
								f--;
							}
							if (f > 1) {
								o[n++] = 65533;
								continue;
							}
							if (i < 65536) {
								o[n++] = i;
							} else {
								i -= 65536;
								o[n++] = 55296 | ((i >> 10) & 1023);
								o[n++] = 56320 | (i & 1023);
							}
						}
						if (o.length !== n) {
							if (o.subarray) {
								o = o.subarray(0, n);
							} else {
								o.length = n;
							}
						}
						return a.applyFromCharCode(o);
					};
					t.utf8encode = function u(e) {
						if (n.nodebuffer) {
							return i(e, "utf-8");
						}
						return l(e);
					};
					t.utf8decode = function h(e) {
						if (n.nodebuffer) {
							return a.transformTo("nodebuffer", e).toString("utf-8");
						}
						e = a.transformTo(n.uint8array ? "uint8array" : "array", e);
						var r = [],
							t = 0,
							i = e.length,
							s = 65536;
						while (t < i) {
							var f = o(e, Math.min(t + s, i));
							if (n.uint8array) {
								r.push(c(e.subarray(t, f)));
							} else {
								r.push(c(e.slice(t, f)));
							}
							t = f;
						}
						return r.join("");
					};
				},
				{ "./nodeBuffer": 11, "./support": 17, "./utils": 21 },
			],
			21: [
				function (e, r, t) {
					"use strict";
					var a = e("./support");
					var n = e("./compressions");
					var i = e("./nodeBuffer");
					t.string2binary = function (e) {
						var r = "";
						for (var t = 0; t < e.length; t++) {
							r += String.fromCharCode(e.charCodeAt(t) & 255);
						}
						return r;
					};
					t.arrayBuffer2Blob = function (e) {
						t.checkSupport("blob");
						try {
							return new Blob([e], { type: "application/zip" });
						} catch (r) {
							try {
								var a =
									window.BlobBuilder ||
									window.WebKitBlobBuilder ||
									window.MozBlobBuilder ||
									window.MSBlobBuilder;
								var n = new a();
								n.append(e);
								return n.getBlob("application/zip");
							} catch (r) {
								throw new Error("Bug : can't construct the Blob.");
							}
						}
					};
					function s(e) {
						return e;
					}
					function f(e, r) {
						for (var t = 0; t < e.length; ++t) {
							r[t] = e.charCodeAt(t) & 255;
						}
						return r;
					}
					function l(e) {
						var r = 65536;
						var a = [],
							n = e.length,
							s = t.getTypeOf(e),
							f = 0,
							l = true;
						try {
							switch (s) {
								case "uint8array":
									String.fromCharCode.apply(null, new Uint8Array(0));
									break;
								case "nodebuffer":
									String.fromCharCode.apply(null, i(0));
									break;
							}
						} catch (o) {
							l = false;
						}
						if (!l) {
							var c = "";
							for (var u = 0; u < e.length; u++) {
								c += String.fromCharCode(e[u]);
							}
							return c;
						}
						while (f < n && r > 1) {
							try {
								if (s === "array" || s === "nodebuffer") {
									a.push(
										String.fromCharCode.apply(
											null,
											e.slice(f, Math.min(f + r, n))
										)
									);
								} else {
									a.push(
										String.fromCharCode.apply(
											null,
											e.subarray(f, Math.min(f + r, n))
										)
									);
								}
								f += r;
							} catch (o) {
								r = Math.floor(r / 2);
							}
						}
						return a.join("");
					}
					t.applyFromCharCode = l;
					function o(e, r) {
						for (var t = 0; t < e.length; t++) {
							r[t] = e[t];
						}
						return r;
					}
					var c = {};
					c["string"] = {
						string: s,
						array: function (e) {
							return f(e, new Array(e.length));
						},
						arraybuffer: function (e) {
							return c["string"]["uint8array"](e).buffer;
						},
						uint8array: function (e) {
							return f(e, new Uint8Array(e.length));
						},
						nodebuffer: function (e) {
							return f(e, i(e.length));
						},
					};
					c["array"] = {
						string: l,
						array: s,
						arraybuffer: function (e) {
							return new Uint8Array(e).buffer;
						},
						uint8array: function (e) {
							return new Uint8Array(e);
						},
						nodebuffer: function (e) {
							return i(e);
						},
					};
					c["arraybuffer"] = {
						string: function (e) {
							return l(new Uint8Array(e));
						},
						array: function (e) {
							return o(new Uint8Array(e), new Array(e.byteLength));
						},
						arraybuffer: s,
						uint8array: function (e) {
							return new Uint8Array(e);
						},
						nodebuffer: function (e) {
							return i(new Uint8Array(e));
						},
					};
					c["uint8array"] = {
						string: l,
						array: function (e) {
							return o(e, new Array(e.length));
						},
						arraybuffer: function (e) {
							return e.buffer;
						},
						uint8array: s,
						nodebuffer: function (e) {
							return i(e);
						},
					};
					c["nodebuffer"] = {
						string: l,
						array: function (e) {
							return o(e, new Array(e.length));
						},
						arraybuffer: function (e) {
							return c["nodebuffer"]["uint8array"](e).buffer;
						},
						uint8array: function (e) {
							return o(e, new Uint8Array(e.length));
						},
						nodebuffer: s,
					};
					t.transformTo = function (e, r) {
						if (!r) {
							r = "";
						}
						if (!e) {
							return r;
						}
						t.checkSupport(e);
						var a = t.getTypeOf(r);
						var n = c[a][e](r);
						return n;
					};
					t.getTypeOf = function (e) {
						if (typeof e === "string") {
							return "string";
						}
						if (Object.prototype.toString.call(e) === "[object Array]") {
							return "array";
						}
						if (a.nodebuffer && i.test(e)) {
							return "nodebuffer";
						}
						if (a.uint8array && e instanceof Uint8Array) {
							return "uint8array";
						}
						if (a.arraybuffer && e instanceof ArrayBuffer) {
							return "arraybuffer";
						}
					};
					t.checkSupport = function (e) {
						var r = a[e.toLowerCase()];
						if (!r) {
							throw new Error(e + " is not supported by this browser");
						}
					};
					t.MAX_VALUE_16BITS = 65535;
					t.MAX_VALUE_32BITS = -1;
					t.pretty = function (e) {
						var r = "",
							t,
							a;
						for (a = 0; a < (e || "").length; a++) {
							t = e.charCodeAt(a);
							r += "\\x" + (t < 16 ? "0" : "") + t.toString(16).toUpperCase();
						}
						return r;
					};
					t.findCompression = function (e) {
						for (var r in n) {
							if (!n.hasOwnProperty(r)) {
								continue;
							}
							if (n[r].magic === e) {
								return n[r];
							}
						}
						return null;
					};
					t.isRegExp = function (e) {
						return Object.prototype.toString.call(e) === "[object RegExp]";
					};
				},
				{ "./compressions": 3, "./nodeBuffer": 11, "./support": 17 },
			],
			22: [
				function (e, r, t) {
					"use strict";
					var a = e("./stringReader");
					var n = e("./nodeBufferReader");
					var i = e("./uint8ArrayReader");
					var s = e("./utils");
					var f = e("./signature");
					var l = e("./zipEntry");
					var o = e("./support");
					var c = e("./object");
					function u(e, r) {
						this.files = [];
						this.loadOptions = r;
						if (e) {
							this.load(e);
						}
					}
					u.prototype = {
						checkSignature: function (e) {
							var r = this.reader.readString(4);
							if (r !== e) {
								throw new Error(
									"Corrupted zip or bug : unexpected signature " +
										"(" +
										s.pretty(r) +
										", expected " +
										s.pretty(e) +
										")"
								);
							}
						},
						readBlockEndOfCentral: function () {
							this.diskNumber = this.reader.readInt(2);
							this.diskWithCentralDirStart = this.reader.readInt(2);
							this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
							this.centralDirRecords = this.reader.readInt(2);
							this.centralDirSize = this.reader.readInt(4);
							this.centralDirOffset = this.reader.readInt(4);
							this.zipCommentLength = this.reader.readInt(2);
							this.zipComment = this.reader.readString(this.zipCommentLength);
							this.zipComment = c.utf8decode(this.zipComment);
						},
						readBlockZip64EndOfCentral: function () {
							this.zip64EndOfCentralSize = this.reader.readInt(8);
							this.versionMadeBy = this.reader.readString(2);
							this.versionNeeded = this.reader.readInt(2);
							this.diskNumber = this.reader.readInt(4);
							this.diskWithCentralDirStart = this.reader.readInt(4);
							this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
							this.centralDirRecords = this.reader.readInt(8);
							this.centralDirSize = this.reader.readInt(8);
							this.centralDirOffset = this.reader.readInt(8);
							this.zip64ExtensibleData = {};
							var e = this.zip64EndOfCentralSize - 44,
								r = 0,
								t,
								a,
								n;
							while (r < e) {
								t = this.reader.readInt(2);
								a = this.reader.readInt(4);
								n = this.reader.readString(a);
								this.zip64ExtensibleData[t] = { id: t, length: a, value: n };
							}
						},
						readBlockZip64EndOfCentralLocator: function () {
							this.diskWithZip64CentralDirStart = this.reader.readInt(4);
							this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
							this.disksCount = this.reader.readInt(4);
							if (this.disksCount > 1) {
								throw new Error("Multi-volumes zip are not supported");
							}
						},
						readLocalFiles: function () {
							var e, r;
							for (e = 0; e < this.files.length; e++) {
								r = this.files[e];
								this.reader.setIndex(r.localHeaderOffset);
								this.checkSignature(f.LOCAL_FILE_HEADER);
								r.readLocalPart(this.reader);
								r.handleUTF8();
							}
						},
						readCentralDir: function () {
							var e;
							this.reader.setIndex(this.centralDirOffset);
							while (this.reader.readString(4) === f.CENTRAL_FILE_HEADER) {
								e = new l({ zip64: this.zip64 }, this.loadOptions);
								e.readCentralPart(this.reader);
								this.files.push(e);
							}
						},
						readEndOfCentral: function () {
							var e = this.reader.lastIndexOfSignature(f.CENTRAL_DIRECTORY_END);
							if (e === -1) {
								throw new Error(
									"Corrupted zip : can't find end of central directory"
								);
							}
							this.reader.setIndex(e);
							this.checkSignature(f.CENTRAL_DIRECTORY_END);
							this.readBlockEndOfCentral();
							if (
								this.diskNumber === s.MAX_VALUE_16BITS ||
								this.diskWithCentralDirStart === s.MAX_VALUE_16BITS ||
								this.centralDirRecordsOnThisDisk === s.MAX_VALUE_16BITS ||
								this.centralDirRecords === s.MAX_VALUE_16BITS ||
								this.centralDirSize === s.MAX_VALUE_32BITS ||
								this.centralDirOffset === s.MAX_VALUE_32BITS
							) {
								this.zip64 = true;
								e = this.reader.lastIndexOfSignature(
									f.ZIP64_CENTRAL_DIRECTORY_LOCATOR
								);
								if (e === -1) {
									throw new Error(
										"Corrupted zip : can't find the ZIP64 end of central directory locator"
									);
								}
								this.reader.setIndex(e);
								this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
								this.readBlockZip64EndOfCentralLocator();
								this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
								this.checkSignature(f.ZIP64_CENTRAL_DIRECTORY_END);
								this.readBlockZip64EndOfCentral();
							}
						},
						prepareReader: function (e) {
							var r = s.getTypeOf(e);
							if (r === "string" && !o.uint8array) {
								this.reader = new a(e, this.loadOptions.optimizedBinaryString);
							} else if (r === "nodebuffer") {
								this.reader = new n(e);
							} else {
								this.reader = new i(s.transformTo("uint8array", e));
							}
						},
						load: function (e) {
							this.prepareReader(e);
							this.readEndOfCentral();
							this.readCentralDir();
							this.readLocalFiles();
						},
					};
					r.exports = u;
				},
				{
					"./nodeBufferReader": 12,
					"./object": 13,
					"./signature": 14,
					"./stringReader": 15,
					"./support": 17,
					"./uint8ArrayReader": 18,
					"./utils": 21,
					"./zipEntry": 23,
				},
			],
			23: [
				function (e, r, t) {
					"use strict";
					var a = e("./stringReader");
					var n = e("./utils");
					var i = e("./compressedObject");
					var s = e("./object");
					function f(e, r) {
						this.options = e;
						this.loadOptions = r;
					}
					f.prototype = {
						isEncrypted: function () {
							return (this.bitFlag & 1) === 1;
						},
						useUTF8: function () {
							return (this.bitFlag & 2048) === 2048;
						},
						prepareCompressedContent: function (e, r, t) {
							return function () {
								var a = e.index;
								e.setIndex(r);
								var n = e.readData(t);
								e.setIndex(a);
								return n;
							};
						},
						prepareContent: function (e, r, t, a, i) {
							return function () {
								var e = n.transformTo(
									a.uncompressInputType,
									this.getCompressedContent()
								);
								var r = a.uncompress(e);
								if (r.length !== i) {
									throw new Error("Bug : uncompressed data size mismatch");
								}
								return r;
							};
						},
						readLocalPart: function (e) {
							var r, t;
							e.skip(22);
							this.fileNameLength = e.readInt(2);
							t = e.readInt(2);
							this.fileName = e.readString(this.fileNameLength);
							e.skip(t);
							if (this.compressedSize == -1 || this.uncompressedSize == -1) {
								throw new Error(
									"Bug or corrupted zip : didn't get enough informations from the central directory " +
										"(compressedSize == -1 || uncompressedSize == -1)"
								);
							}
							r = n.findCompression(this.compressionMethod);
							if (r === null) {
								throw new Error(
									"Corrupted zip : compression " +
										n.pretty(this.compressionMethod) +
										" unknown (inner file : " +
										this.fileName +
										")"
								);
							}
							this.decompressed = new i();
							this.decompressed.compressedSize = this.compressedSize;
							this.decompressed.uncompressedSize = this.uncompressedSize;
							this.decompressed.crc32 = this.crc32;
							this.decompressed.compressionMethod = this.compressionMethod;
							this.decompressed.getCompressedContent =
								this.prepareCompressedContent(
									e,
									e.index,
									this.compressedSize,
									r
								);
							this.decompressed.getContent = this.prepareContent(
								e,
								e.index,
								this.compressedSize,
								r,
								this.uncompressedSize
							);
							if (this.loadOptions.checkCRC32) {
								this.decompressed = n.transformTo(
									"string",
									this.decompressed.getContent()
								);
								if (s.crc32(this.decompressed) !== this.crc32) {
									throw new Error("Corrupted zip : CRC32 mismatch");
								}
							}
						},
						readCentralPart: function (e) {
							this.versionMadeBy = e.readString(2);
							this.versionNeeded = e.readInt(2);
							this.bitFlag = e.readInt(2);
							this.compressionMethod = e.readString(2);
							this.date = e.readDate();
							this.crc32 = e.readInt(4);
							this.compressedSize = e.readInt(4);
							this.uncompressedSize = e.readInt(4);
							this.fileNameLength = e.readInt(2);
							this.extraFieldsLength = e.readInt(2);
							this.fileCommentLength = e.readInt(2);
							this.diskNumberStart = e.readInt(2);
							this.internalFileAttributes = e.readInt(2);
							this.externalFileAttributes = e.readInt(4);
							this.localHeaderOffset = e.readInt(4);
							if (this.isEncrypted()) {
								throw new Error("Encrypted zip are not supported");
							}
							this.fileName = e.readString(this.fileNameLength);
							this.readExtraFields(e);
							this.parseZIP64ExtraField(e);
							this.fileComment = e.readString(this.fileCommentLength);
							this.dir = this.externalFileAttributes & 16 ? true : false;
						},
						parseZIP64ExtraField: function (e) {
							if (!this.extraFields[1]) {
								return;
							}
							var r = new a(this.extraFields[1].value);
							if (this.uncompressedSize === n.MAX_VALUE_32BITS) {
								this.uncompressedSize = r.readInt(8);
							}
							if (this.compressedSize === n.MAX_VALUE_32BITS) {
								this.compressedSize = r.readInt(8);
							}
							if (this.localHeaderOffset === n.MAX_VALUE_32BITS) {
								this.localHeaderOffset = r.readInt(8);
							}
							if (this.diskNumberStart === n.MAX_VALUE_32BITS) {
								this.diskNumberStart = r.readInt(4);
							}
						},
						readExtraFields: function (e) {
							var r = e.index,
								t,
								a,
								n;
							this.extraFields = this.extraFields || {};
							while (e.index < r + this.extraFieldsLength) {
								t = e.readInt(2);
								a = e.readInt(2);
								n = e.readString(a);
								this.extraFields[t] = { id: t, length: a, value: n };
							}
						},
						handleUTF8: function () {
							if (this.useUTF8()) {
								this.fileName = s.utf8decode(this.fileName);
								this.fileComment = s.utf8decode(this.fileComment);
							} else {
								var e = this.findExtraFieldUnicodePath();
								if (e !== null) {
									this.fileName = e;
								}
								var r = this.findExtraFieldUnicodeComment();
								if (r !== null) {
									this.fileComment = r;
								}
							}
						},
						findExtraFieldUnicodePath: function () {
							var e = this.extraFields[28789];
							if (e) {
								var r = new a(e.value);
								if (r.readInt(1) !== 1) {
									return null;
								}
								if (s.crc32(this.fileName) !== r.readInt(4)) {
									return null;
								}
								return s.utf8decode(r.readString(e.length - 5));
							}
							return null;
						},
						findExtraFieldUnicodeComment: function () {
							var e = this.extraFields[25461];
							if (e) {
								var r = new a(e.value);
								if (r.readInt(1) !== 1) {
									return null;
								}
								if (s.crc32(this.fileComment) !== r.readInt(4)) {
									return null;
								}
								return s.utf8decode(r.readString(e.length - 5));
							}
							return null;
						},
					};
					r.exports = f;
				},
				{
					"./compressedObject": 2,
					"./object": 13,
					"./stringReader": 15,
					"./utils": 21,
				},
			],
			24: [
				function (e, r, t) {
					"use strict";
					var a = e("./lib/utils/common").assign;
					var n = e("./lib/deflate");
					var i = e("./lib/inflate");
					var s = e("./lib/zlib/constants");
					var f = {};
					a(f, n, i, s);
					r.exports = f;
				},
				{
					"./lib/deflate": 25,
					"./lib/inflate": 26,
					"./lib/utils/common": 27,
					"./lib/zlib/constants": 30,
				},
			],
			25: [
				function (e, r, t) {
					"use strict";
					var a = e("./zlib/deflate.js");
					var n = e("./utils/common");
					var i = e("./utils/strings");
					var s = e("./zlib/messages");
					var f = e("./zlib/zstream");
					var l = 0;
					var o = 4;
					var c = 0;
					var u = 1;
					var h = -1;
					var d = 0;
					var v = 8;
					var p = function (e) {
						this.options = n.assign(
							{
								level: h,
								method: v,
								chunkSize: 16384,
								windowBits: 15,
								memLevel: 8,
								strategy: d,
								to: "",
							},
							e || {}
						);
						var r = this.options;
						if (r.raw && r.windowBits > 0) {
							r.windowBits = -r.windowBits;
						} else if (r.gzip && r.windowBits > 0 && r.windowBits < 16) {
							r.windowBits += 16;
						}
						this.err = 0;
						this.msg = "";
						this.ended = false;
						this.chunks = [];
						this.strm = new f();
						this.strm.avail_out = 0;
						var t = a.deflateInit2(
							this.strm,
							r.level,
							r.method,
							r.windowBits,
							r.memLevel,
							r.strategy
						);
						if (t !== c) {
							throw new Error(s[t]);
						}
						if (r.header) {
							a.deflateSetHeader(this.strm, r.header);
						}
					};
					p.prototype.push = function (e, r) {
						var t = this.strm;
						var s = this.options.chunkSize;
						var f, h;
						if (this.ended) {
							return false;
						}
						h = r === ~~r ? r : r === true ? o : l;
						if (typeof e === "string") {
							t.input = i.string2buf(e);
						} else {
							t.input = e;
						}
						t.next_in = 0;
						t.avail_in = t.input.length;
						do {
							if (t.avail_out === 0) {
								t.output = new n.Buf8(s);
								t.next_out = 0;
								t.avail_out = s;
							}
							f = a.deflate(t, h);
							if (f !== u && f !== c) {
								this.onEnd(f);
								this.ended = true;
								return false;
							}
							if (t.avail_out === 0 || (t.avail_in === 0 && h === o)) {
								if (this.options.to === "string") {
									this.onData(
										i.buf2binstring(n.shrinkBuf(t.output, t.next_out))
									);
								} else {
									this.onData(n.shrinkBuf(t.output, t.next_out));
								}
							}
						} while ((t.avail_in > 0 || t.avail_out === 0) && f !== u);
						if (h === o) {
							f = a.deflateEnd(this.strm);
							this.onEnd(f);
							this.ended = true;
							return f === c;
						}
						return true;
					};
					p.prototype.onData = function (e) {
						this.chunks.push(e);
					};
					p.prototype.onEnd = function (e) {
						if (e === c) {
							if (this.options.to === "string") {
								this.result = this.chunks.join("");
							} else {
								this.result = n.flattenChunks(this.chunks);
							}
						}
						this.chunks = [];
						this.err = e;
						this.msg = this.strm.msg;
					};
					function m(e, r) {
						var t = new p(r);
						t.push(e, true);
						if (t.err) {
							throw t.msg;
						}
						return t.result;
					}
					function b(e, r) {
						r = r || {};
						r.raw = true;
						return m(e, r);
					}
					function g(e, r) {
						r = r || {};
						r.gzip = true;
						return m(e, r);
					}
					t.Deflate = p;
					t.deflate = m;
					t.deflateRaw = b;
					t.gzip = g;
				},
				{
					"./utils/common": 27,
					"./utils/strings": 28,
					"./zlib/deflate.js": 32,
					"./zlib/messages": 37,
					"./zlib/zstream": 39,
				},
			],
			26: [
				function (e, r, t) {
					"use strict";
					var a = e("./zlib/inflate.js");
					var n = e("./utils/common");
					var i = e("./utils/strings");
					var s = e("./zlib/constants");
					var f = e("./zlib/messages");
					var l = e("./zlib/zstream");
					var o = e("./zlib/gzheader");
					var c = function (e) {
						this.options = n.assign(
							{ chunkSize: 16384, windowBits: 0, to: "" },
							e || {}
						);
						var r = this.options;
						if (r.raw && r.windowBits >= 0 && r.windowBits < 16) {
							r.windowBits = -r.windowBits;
							if (r.windowBits === 0) {
								r.windowBits = -15;
							}
						}
						if (
							r.windowBits >= 0 &&
							r.windowBits < 16 &&
							!(e && e.windowBits)
						) {
							r.windowBits += 32;
						}
						if (r.windowBits > 15 && r.windowBits < 48) {
							if ((r.windowBits & 15) === 0) {
								r.windowBits |= 15;
							}
						}
						this.err = 0;
						this.msg = "";
						this.ended = false;
						this.chunks = [];
						this.strm = new l();
						this.strm.avail_out = 0;
						var t = a.inflateInit2(this.strm, r.windowBits);
						if (t !== s.Z_OK) {
							throw new Error(f[t]);
						}
						this.header = new o();
						a.inflateGetHeader(this.strm, this.header);
					};
					c.prototype.push = function (e, r) {
						var t = this.strm;
						var f = this.options.chunkSize;
						var l, o;
						var c, u, h;
						if (this.ended) {
							return false;
						}
						o = r === ~~r ? r : r === true ? s.Z_FINISH : s.Z_NO_FLUSH;
						if (typeof e === "string") {
							t.input = i.binstring2buf(e);
						} else {
							t.input = e;
						}
						t.next_in = 0;
						t.avail_in = t.input.length;
						do {
							if (t.avail_out === 0) {
								t.output = new n.Buf8(f);
								t.next_out = 0;
								t.avail_out = f;
							}
							l = a.inflate(t, s.Z_NO_FLUSH);
							if (l !== s.Z_STREAM_END && l !== s.Z_OK) {
								this.onEnd(l);
								this.ended = true;
								return false;
							}
							if (t.next_out) {
								if (
									t.avail_out === 0 ||
									l === s.Z_STREAM_END ||
									(t.avail_in === 0 && o === s.Z_FINISH)
								) {
									if (this.options.to === "string") {
										c = i.utf8border(t.output, t.next_out);
										u = t.next_out - c;
										h = i.buf2string(t.output, c);
										t.next_out = u;
										t.avail_out = f - u;
										if (u) {
											n.arraySet(t.output, t.output, c, u, 0);
										}
										this.onData(h);
									} else {
										this.onData(n.shrinkBuf(t.output, t.next_out));
									}
								}
							}
						} while (t.avail_in > 0 && l !== s.Z_STREAM_END);
						if (l === s.Z_STREAM_END) {
							o = s.Z_FINISH;
						}
						if (o === s.Z_FINISH) {
							l = a.inflateEnd(this.strm);
							this.onEnd(l);
							this.ended = true;
							return l === s.Z_OK;
						}
						return true;
					};
					c.prototype.onData = function (e) {
						this.chunks.push(e);
					};
					c.prototype.onEnd = function (e) {
						if (e === s.Z_OK) {
							if (this.options.to === "string") {
								this.result = this.chunks.join("");
							} else {
								this.result = n.flattenChunks(this.chunks);
							}
						}
						this.chunks = [];
						this.err = e;
						this.msg = this.strm.msg;
					};
					function u(e, r) {
						var t = new c(r);
						t.push(e, true);
						if (t.err) {
							throw t.msg;
						}
						return t.result;
					}
					function h(e, r) {
						r = r || {};
						r.raw = true;
						return u(e, r);
					}
					t.Inflate = c;
					t.inflate = u;
					t.inflateRaw = h;
					t.ungzip = u;
				},
				{
					"./utils/common": 27,
					"./utils/strings": 28,
					"./zlib/constants": 30,
					"./zlib/gzheader": 33,
					"./zlib/inflate.js": 35,
					"./zlib/messages": 37,
					"./zlib/zstream": 39,
				},
			],
			27: [
				function (e, r, t) {
					"use strict";
					var a =
						typeof Uint8Array !== "undefined" &&
						typeof Uint16Array !== "undefined" &&
						typeof Int32Array !== "undefined";
					t.assign = function (e) {
						var r = Array.prototype.slice.call(arguments, 1);
						while (r.length) {
							var t = r.shift();
							if (!t) {
								continue;
							}
							if (typeof t !== "object") {
								throw new TypeError(t + "must be non-object");
							}
							for (var a in t) {
								if (t.hasOwnProperty(a)) {
									e[a] = t[a];
								}
							}
						}
						return e;
					};
					t.shrinkBuf = function (e, r) {
						if (e.length === r) {
							return e;
						}
						if (e.subarray) {
							return e.subarray(0, r);
						}
						e.length = r;
						return e;
					};
					var n = {
						arraySet: function (e, r, t, a, n) {
							if (r.subarray && e.subarray) {
								e.set(r.subarray(t, t + a), n);
								return;
							}
							for (var i = 0; i < a; i++) {
								e[n + i] = r[t + i];
							}
						},
						flattenChunks: function (e) {
							var r, t, a, n, i, s;
							a = 0;
							for (r = 0, t = e.length; r < t; r++) {
								a += e[r].length;
							}
							s = new Uint8Array(a);
							n = 0;
							for (r = 0, t = e.length; r < t; r++) {
								i = e[r];
								s.set(i, n);
								n += i.length;
							}
							return s;
						},
					};
					var i = {
						arraySet: function (e, r, t, a, n) {
							for (var i = 0; i < a; i++) {
								e[n + i] = r[t + i];
							}
						},
						flattenChunks: function (e) {
							return [].concat.apply([], e);
						},
					};
					t.setTyped = function (e) {
						if (e) {
							t.Buf8 = Uint8Array;
							t.Buf16 = Uint16Array;
							t.Buf32 = Int32Array;
							t.assign(t, n);
						} else {
							t.Buf8 = Array;
							t.Buf16 = Array;
							t.Buf32 = Array;
							t.assign(t, i);
						}
					};
					t.setTyped(a);
				},
				{},
			],
			28: [
				function (e, r, t) {
					"use strict";
					var a = e("./common");
					var n = true;
					var i = true;
					try {
						String.fromCharCode.apply(null, [0]);
					} catch (s) {
						n = false;
					}
					try {
						String.fromCharCode.apply(null, new Uint8Array(1));
					} catch (s) {
						i = false;
					}
					var f = new a.Buf8(256);
					for (var l = 0; l < 256; l++) {
						f[l] =
							l >= 252
								? 6
								: l >= 248
								? 5
								: l >= 240
								? 4
								: l >= 224
								? 3
								: l >= 192
								? 2
								: 1;
					}
					f[254] = f[254] = 1;
					t.string2buf = function (e) {
						var r,
							t,
							n,
							i,
							s,
							f = e.length,
							l = 0;
						for (i = 0; i < f; i++) {
							t = e.charCodeAt(i);
							if ((t & 64512) === 55296 && i + 1 < f) {
								n = e.charCodeAt(i + 1);
								if ((n & 64512) === 56320) {
									t = 65536 + ((t - 55296) << 10) + (n - 56320);
									i++;
								}
							}
							l += t < 128 ? 1 : t < 2048 ? 2 : t < 65536 ? 3 : 4;
						}
						r = new a.Buf8(l);
						for (s = 0, i = 0; s < l; i++) {
							t = e.charCodeAt(i);
							if ((t & 64512) === 55296 && i + 1 < f) {
								n = e.charCodeAt(i + 1);
								if ((n & 64512) === 56320) {
									t = 65536 + ((t - 55296) << 10) + (n - 56320);
									i++;
								}
							}
							if (t < 128) {
								r[s++] = t;
							} else if (t < 2048) {
								r[s++] = 192 | (t >>> 6);
								r[s++] = 128 | (t & 63);
							} else if (t < 65536) {
								r[s++] = 224 | (t >>> 12);
								r[s++] = 128 | ((t >>> 6) & 63);
								r[s++] = 128 | (t & 63);
							} else {
								r[s++] = 240 | (t >>> 18);
								r[s++] = 128 | ((t >>> 12) & 63);
								r[s++] = 128 | ((t >>> 6) & 63);
								r[s++] = 128 | (t & 63);
							}
						}
						return r;
					};
					function o(e, r) {
						if (r < 65537) {
							if ((e.subarray && i) || (!e.subarray && n)) {
								return String.fromCharCode.apply(null, a.shrinkBuf(e, r));
							}
						}
						var t = "";
						for (var s = 0; s < r; s++) {
							t += String.fromCharCode(e[s]);
						}
						return t;
					}
					t.buf2binstring = function (e) {
						return o(e, e.length);
					};
					t.binstring2buf = function (e) {
						var r = new a.Buf8(e.length);
						for (var t = 0, n = r.length; t < n; t++) {
							r[t] = e.charCodeAt(t);
						}
						return r;
					};
					t.buf2string = function (e, r) {
						var t, a, n, i;
						var s = r || e.length;
						var l = new Array(s * 2);
						for (a = 0, t = 0; t < s; ) {
							n = e[t++];
							if (n < 128) {
								l[a++] = n;
								continue;
							}
							i = f[n];
							if (i > 4) {
								l[a++] = 65533;
								t += i - 1;
								continue;
							}
							n &= i === 2 ? 31 : i === 3 ? 15 : 7;
							while (i > 1 && t < s) {
								n = (n << 6) | (e[t++] & 63);
								i--;
							}
							if (i > 1) {
								l[a++] = 65533;
								continue;
							}
							if (n < 65536) {
								l[a++] = n;
							} else {
								n -= 65536;
								l[a++] = 55296 | ((n >> 10) & 1023);
								l[a++] = 56320 | (n & 1023);
							}
						}
						return o(l, a);
					};
					t.utf8border = function (e, r) {
						var t;
						r = r || e.length;
						if (r > e.length) {
							r = e.length;
						}
						t = r - 1;
						while (t >= 0 && (e[t] & 192) === 128) {
							t--;
						}
						if (t < 0) {
							return r;
						}
						if (t === 0) {
							return r;
						}
						return t + f[e[t]] > r ? t : r;
					};
				},
				{ "./common": 27 },
			],
			29: [
				function (e, r, t) {
					"use strict";
					function a(e, r, t, a) {
						var n = (e & 65535) | 0,
							i = ((e >>> 16) & 65535) | 0,
							s = 0;
						while (t !== 0) {
							s = t > 2e3 ? 2e3 : t;
							t -= s;
							do {
								n = (n + r[a++]) | 0;
								i = (i + n) | 0;
							} while (--s);
							n %= 65521;
							i %= 65521;
						}
						return n | (i << 16) | 0;
					}
					r.exports = a;
				},
				{},
			],
			30: [
				function (e, r, t) {
					r.exports = {
						Z_NO_FLUSH: 0,
						Z_PARTIAL_FLUSH: 1,
						Z_SYNC_FLUSH: 2,
						Z_FULL_FLUSH: 3,
						Z_FINISH: 4,
						Z_BLOCK: 5,
						Z_TREES: 6,
						Z_OK: 0,
						Z_STREAM_END: 1,
						Z_NEED_DICT: 2,
						Z_ERRNO: -1,
						Z_STREAM_ERROR: -2,
						Z_DATA_ERROR: -3,
						Z_BUF_ERROR: -5,
						Z_NO_COMPRESSION: 0,
						Z_BEST_SPEED: 1,
						Z_BEST_COMPRESSION: 9,
						Z_DEFAULT_COMPRESSION: -1,
						Z_FILTERED: 1,
						Z_HUFFMAN_ONLY: 2,
						Z_RLE: 3,
						Z_FIXED: 4,
						Z_DEFAULT_STRATEGY: 0,
						Z_BINARY: 0,
						Z_TEXT: 1,
						Z_UNKNOWN: 2,
						Z_DEFLATED: 8,
					};
				},
				{},
			],
			31: [
				function (e, r, t) {
					"use strict";
					function a() {
						var e,
							r = [];
						for (var t = 0; t < 256; t++) {
							e = t;
							for (var a = 0; a < 8; a++) {
								e = e & 1 ? 3988292384 ^ (e >>> 1) : e >>> 1;
							}
							r[t] = e;
						}
						return r;
					}
					var n = a();
					function i(e, r, t, a) {
						var i = n,
							s = a + t;
						e = e ^ -1;
						for (var f = a; f < s; f++) {
							e = (e >>> 8) ^ i[(e ^ r[f]) & 255];
						}
						return e ^ -1;
					}
					r.exports = i;
				},
				{},
			],
			32: [
				function (e, r, t) {
					"use strict";
					var a = e("../utils/common");
					var n = e("./trees");
					var i = e("./adler32");
					var s = e("./crc32");
					var f = e("./messages");
					var l = 0;
					var o = 1;
					var c = 3;
					var u = 4;
					var h = 5;
					var d = 0;
					var v = 1;
					var p = -2;
					var m = -3;
					var b = -5;
					var g = -1;
					var w = 1;
					var E = 2;
					var k = 3;
					var S = 4;
					var _ = 0;
					var C = 2;
					var B = 8;
					var T = 9;
					var x = 15;
					var y = 8;
					var I = 29;
					var A = 256;
					var R = A + 1 + I;
					var D = 30;
					var O = 19;
					var F = 2 * R + 1;
					var P = 15;
					var N = 3;
					var L = 258;
					var M = L + N + 1;
					var U = 32;
					var H = 42;
					var W = 69;
					var V = 73;
					var z = 91;
					var X = 103;
					var G = 113;
					var j = 666;
					var K = 1;
					var Y = 2;
					var $ = 3;
					var Z = 4;
					var Q = 3;
					function J(e, r) {
						e.msg = f[r];
						return r;
					}
					function q(e) {
						return (e << 1) - (e > 4 ? 9 : 0);
					}
					function ee(e) {
						var r = e.length;
						while (--r >= 0) {
							e[r] = 0;
						}
					}
					function re(e) {
						var r = e.state;
						var t = r.pending;
						if (t > e.avail_out) {
							t = e.avail_out;
						}
						if (t === 0) {
							return;
						}
						a.arraySet(e.output, r.pending_buf, r.pending_out, t, e.next_out);
						e.next_out += t;
						r.pending_out += t;
						e.total_out += t;
						e.avail_out -= t;
						r.pending -= t;
						if (r.pending === 0) {
							r.pending_out = 0;
						}
					}
					function te(e, r) {
						n._tr_flush_block(
							e,
							e.block_start >= 0 ? e.block_start : -1,
							e.strstart - e.block_start,
							r
						);
						e.block_start = e.strstart;
						re(e.strm);
					}
					function ae(e, r) {
						e.pending_buf[e.pending++] = r;
					}
					function ne(e, r) {
						e.pending_buf[e.pending++] = (r >>> 8) & 255;
						e.pending_buf[e.pending++] = r & 255;
					}
					function ie(e, r, t, n) {
						var f = e.avail_in;
						if (f > n) {
							f = n;
						}
						if (f === 0) {
							return 0;
						}
						e.avail_in -= f;
						a.arraySet(r, e.input, e.next_in, f, t);
						if (e.state.wrap === 1) {
							e.adler = i(e.adler, r, f, t);
						} else if (e.state.wrap === 2) {
							e.adler = s(e.adler, r, f, t);
						}
						e.next_in += f;
						e.total_in += f;
						return f;
					}
					function se(e, r) {
						var t = e.max_chain_length;
						var a = e.strstart;
						var n;
						var i;
						var s = e.prev_length;
						var f = e.nice_match;
						var l = e.strstart > e.w_size - M ? e.strstart - (e.w_size - M) : 0;
						var o = e.window;
						var c = e.w_mask;
						var u = e.prev;
						var h = e.strstart + L;
						var d = o[a + s - 1];
						var v = o[a + s];
						if (e.prev_length >= e.good_match) {
							t >>= 2;
						}
						if (f > e.lookahead) {
							f = e.lookahead;
						}
						do {
							n = r;
							if (
								o[n + s] !== v ||
								o[n + s - 1] !== d ||
								o[n] !== o[a] ||
								o[++n] !== o[a + 1]
							) {
								continue;
							}
							a += 2;
							n++;
							do {} while (
								o[++a] === o[++n] &&
								o[++a] === o[++n] &&
								o[++a] === o[++n] &&
								o[++a] === o[++n] &&
								o[++a] === o[++n] &&
								o[++a] === o[++n] &&
								o[++a] === o[++n] &&
								o[++a] === o[++n] &&
								a < h
							);
							i = L - (h - a);
							a = h - L;
							if (i > s) {
								e.match_start = r;
								s = i;
								if (i >= f) {
									break;
								}
								d = o[a + s - 1];
								v = o[a + s];
							}
						} while ((r = u[r & c]) > l && --t !== 0);
						if (s <= e.lookahead) {
							return s;
						}
						return e.lookahead;
					}
					function fe(e) {
						var r = e.w_size;
						var t, n, i, s, f;
						do {
							s = e.window_size - e.lookahead - e.strstart;
							if (e.strstart >= r + (r - M)) {
								a.arraySet(e.window, e.window, r, r, 0);
								e.match_start -= r;
								e.strstart -= r;
								e.block_start -= r;
								n = e.hash_size;
								t = n;
								do {
									i = e.head[--t];
									e.head[t] = i >= r ? i - r : 0;
								} while (--n);
								n = r;
								t = n;
								do {
									i = e.prev[--t];
									e.prev[t] = i >= r ? i - r : 0;
								} while (--n);
								s += r;
							}
							if (e.strm.avail_in === 0) {
								break;
							}
							n = ie(e.strm, e.window, e.strstart + e.lookahead, s);
							e.lookahead += n;
							if (e.lookahead + e.insert >= N) {
								f = e.strstart - e.insert;
								e.ins_h = e.window[f];
								e.ins_h =
									((e.ins_h << e.hash_shift) ^ e.window[f + 1]) & e.hash_mask;
								while (e.insert) {
									e.ins_h =
										((e.ins_h << e.hash_shift) ^ e.window[f + N - 1]) &
										e.hash_mask;
									e.prev[f & e.w_mask] = e.head[e.ins_h];
									e.head[e.ins_h] = f;
									f++;
									e.insert--;
									if (e.lookahead + e.insert < N) {
										break;
									}
								}
							}
						} while (e.lookahead < M && e.strm.avail_in !== 0);
					}
					function le(e, r) {
						var t = 65535;
						if (t > e.pending_buf_size - 5) {
							t = e.pending_buf_size - 5;
						}
						for (;;) {
							if (e.lookahead <= 1) {
								fe(e);
								if (e.lookahead === 0 && r === l) {
									return K;
								}
								if (e.lookahead === 0) {
									break;
								}
							}
							e.strstart += e.lookahead;
							e.lookahead = 0;
							var a = e.block_start + t;
							if (e.strstart === 0 || e.strstart >= a) {
								e.lookahead = e.strstart - a;
								e.strstart = a;
								te(e, false);
								if (e.strm.avail_out === 0) {
									return K;
								}
							}
							if (e.strstart - e.block_start >= e.w_size - M) {
								te(e, false);
								if (e.strm.avail_out === 0) {
									return K;
								}
							}
						}
						e.insert = 0;
						if (r === u) {
							te(e, true);
							if (e.strm.avail_out === 0) {
								return $;
							}
							return Z;
						}
						if (e.strstart > e.block_start) {
							te(e, false);
							if (e.strm.avail_out === 0) {
								return K;
							}
						}
						return K;
					}
					function oe(e, r) {
						var t;
						var a;
						for (;;) {
							if (e.lookahead < M) {
								fe(e);
								if (e.lookahead < M && r === l) {
									return K;
								}
								if (e.lookahead === 0) {
									break;
								}
							}
							t = 0;
							if (e.lookahead >= N) {
								e.ins_h =
									((e.ins_h << e.hash_shift) ^ e.window[e.strstart + N - 1]) &
									e.hash_mask;
								t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
								e.head[e.ins_h] = e.strstart;
							}
							if (t !== 0 && e.strstart - t <= e.w_size - M) {
								e.match_length = se(e, t);
							}
							if (e.match_length >= N) {
								a = n._tr_tally(
									e,
									e.strstart - e.match_start,
									e.match_length - N
								);
								e.lookahead -= e.match_length;
								if (e.match_length <= e.max_lazy_match && e.lookahead >= N) {
									e.match_length--;
									do {
										e.strstart++;
										e.ins_h =
											((e.ins_h << e.hash_shift) ^
												e.window[e.strstart + N - 1]) &
											e.hash_mask;
										t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
										e.head[e.ins_h] = e.strstart;
									} while (--e.match_length !== 0);
									e.strstart++;
								} else {
									e.strstart += e.match_length;
									e.match_length = 0;
									e.ins_h = e.window[e.strstart];
									e.ins_h =
										((e.ins_h << e.hash_shift) ^ e.window[e.strstart + 1]) &
										e.hash_mask;
								}
							} else {
								a = n._tr_tally(e, 0, e.window[e.strstart]);
								e.lookahead--;
								e.strstart++;
							}
							if (a) {
								te(e, false);
								if (e.strm.avail_out === 0) {
									return K;
								}
							}
						}
						e.insert = e.strstart < N - 1 ? e.strstart : N - 1;
						if (r === u) {
							te(e, true);
							if (e.strm.avail_out === 0) {
								return $;
							}
							return Z;
						}
						if (e.last_lit) {
							te(e, false);
							if (e.strm.avail_out === 0) {
								return K;
							}
						}
						return Y;
					}
					function ce(e, r) {
						var t;
						var a;
						var i;
						for (;;) {
							if (e.lookahead < M) {
								fe(e);
								if (e.lookahead < M && r === l) {
									return K;
								}
								if (e.lookahead === 0) {
									break;
								}
							}
							t = 0;
							if (e.lookahead >= N) {
								e.ins_h =
									((e.ins_h << e.hash_shift) ^ e.window[e.strstart + N - 1]) &
									e.hash_mask;
								t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
								e.head[e.ins_h] = e.strstart;
							}
							e.prev_length = e.match_length;
							e.prev_match = e.match_start;
							e.match_length = N - 1;
							if (
								t !== 0 &&
								e.prev_length < e.max_lazy_match &&
								e.strstart - t <= e.w_size - M
							) {
								e.match_length = se(e, t);
								if (
									e.match_length <= 5 &&
									(e.strategy === w ||
										(e.match_length === N && e.strstart - e.match_start > 4096))
								) {
									e.match_length = N - 1;
								}
							}
							if (e.prev_length >= N && e.match_length <= e.prev_length) {
								i = e.strstart + e.lookahead - N;
								a = n._tr_tally(
									e,
									e.strstart - 1 - e.prev_match,
									e.prev_length - N
								);
								e.lookahead -= e.prev_length - 1;
								e.prev_length -= 2;
								do {
									if (++e.strstart <= i) {
										e.ins_h =
											((e.ins_h << e.hash_shift) ^
												e.window[e.strstart + N - 1]) &
											e.hash_mask;
										t = e.prev[e.strstart & e.w_mask] = e.head[e.ins_h];
										e.head[e.ins_h] = e.strstart;
									}
								} while (--e.prev_length !== 0);
								e.match_available = 0;
								e.match_length = N - 1;
								e.strstart++;
								if (a) {
									te(e, false);
									if (e.strm.avail_out === 0) {
										return K;
									}
								}
							} else if (e.match_available) {
								a = n._tr_tally(e, 0, e.window[e.strstart - 1]);
								if (a) {
									te(e, false);
								}
								e.strstart++;
								e.lookahead--;
								if (e.strm.avail_out === 0) {
									return K;
								}
							} else {
								e.match_available = 1;
								e.strstart++;
								e.lookahead--;
							}
						}
						if (e.match_available) {
							a = n._tr_tally(e, 0, e.window[e.strstart - 1]);
							e.match_available = 0;
						}
						e.insert = e.strstart < N - 1 ? e.strstart : N - 1;
						if (r === u) {
							te(e, true);
							if (e.strm.avail_out === 0) {
								return $;
							}
							return Z;
						}
						if (e.last_lit) {
							te(e, false);
							if (e.strm.avail_out === 0) {
								return K;
							}
						}
						return Y;
					}
					function ue(e, r) {
						var t;
						var a;
						var i, s;
						var f = e.window;
						for (;;) {
							if (e.lookahead <= L) {
								fe(e);
								if (e.lookahead <= L && r === l) {
									return K;
								}
								if (e.lookahead === 0) {
									break;
								}
							}
							e.match_length = 0;
							if (e.lookahead >= N && e.strstart > 0) {
								i = e.strstart - 1;
								a = f[i];
								if (a === f[++i] && a === f[++i] && a === f[++i]) {
									s = e.strstart + L;
									do {} while (
										a === f[++i] &&
										a === f[++i] &&
										a === f[++i] &&
										a === f[++i] &&
										a === f[++i] &&
										a === f[++i] &&
										a === f[++i] &&
										a === f[++i] &&
										i < s
									);
									e.match_length = L - (s - i);
									if (e.match_length > e.lookahead) {
										e.match_length = e.lookahead;
									}
								}
							}
							if (e.match_length >= N) {
								t = n._tr_tally(e, 1, e.match_length - N);
								e.lookahead -= e.match_length;
								e.strstart += e.match_length;
								e.match_length = 0;
							} else {
								t = n._tr_tally(e, 0, e.window[e.strstart]);
								e.lookahead--;
								e.strstart++;
							}
							if (t) {
								te(e, false);
								if (e.strm.avail_out === 0) {
									return K;
								}
							}
						}
						e.insert = 0;
						if (r === u) {
							te(e, true);
							if (e.strm.avail_out === 0) {
								return $;
							}
							return Z;
						}
						if (e.last_lit) {
							te(e, false);
							if (e.strm.avail_out === 0) {
								return K;
							}
						}
						return Y;
					}
					function he(e, r) {
						var t;
						for (;;) {
							if (e.lookahead === 0) {
								fe(e);
								if (e.lookahead === 0) {
									if (r === l) {
										return K;
									}
									break;
								}
							}
							e.match_length = 0;
							t = n._tr_tally(e, 0, e.window[e.strstart]);
							e.lookahead--;
							e.strstart++;
							if (t) {
								te(e, false);
								if (e.strm.avail_out === 0) {
									return K;
								}
							}
						}
						e.insert = 0;
						if (r === u) {
							te(e, true);
							if (e.strm.avail_out === 0) {
								return $;
							}
							return Z;
						}
						if (e.last_lit) {
							te(e, false);
							if (e.strm.avail_out === 0) {
								return K;
							}
						}
						return Y;
					}
					var de = function (e, r, t, a, n) {
						this.good_length = e;
						this.max_lazy = r;
						this.nice_length = t;
						this.max_chain = a;
						this.func = n;
					};
					var ve;
					ve = [
						new de(0, 0, 0, 0, le),
						new de(4, 4, 8, 4, oe),
						new de(4, 5, 16, 8, oe),
						new de(4, 6, 32, 32, oe),
						new de(4, 4, 16, 16, ce),
						new de(8, 16, 32, 32, ce),
						new de(8, 16, 128, 128, ce),
						new de(8, 32, 128, 256, ce),
						new de(32, 128, 258, 1024, ce),
						new de(32, 258, 258, 4096, ce),
					];
					function pe(e) {
						e.window_size = 2 * e.w_size;
						ee(e.head);
						e.max_lazy_match = ve[e.level].max_lazy;
						e.good_match = ve[e.level].good_length;
						e.nice_match = ve[e.level].nice_length;
						e.max_chain_length = ve[e.level].max_chain;
						e.strstart = 0;
						e.block_start = 0;
						e.lookahead = 0;
						e.insert = 0;
						e.match_length = e.prev_length = N - 1;
						e.match_available = 0;
						e.ins_h = 0;
					}
					function me() {
						this.strm = null;
						this.status = 0;
						this.pending_buf = null;
						this.pending_buf_size = 0;
						this.pending_out = 0;
						this.pending = 0;
						this.wrap = 0;
						this.gzhead = null;
						this.gzindex = 0;
						this.method = B;
						this.last_flush = -1;
						this.w_size = 0;
						this.w_bits = 0;
						this.w_mask = 0;
						this.window = null;
						this.window_size = 0;
						this.prev = null;
						this.head = null;
						this.ins_h = 0;
						this.hash_size = 0;
						this.hash_bits = 0;
						this.hash_mask = 0;
						this.hash_shift = 0;
						this.block_start = 0;
						this.match_length = 0;
						this.prev_match = 0;
						this.match_available = 0;
						this.strstart = 0;
						this.match_start = 0;
						this.lookahead = 0;
						this.prev_length = 0;
						this.max_chain_length = 0;
						this.max_lazy_match = 0;
						this.level = 0;
						this.strategy = 0;
						this.good_match = 0;
						this.nice_match = 0;
						this.dyn_ltree = new a.Buf16(F * 2);
						this.dyn_dtree = new a.Buf16((2 * D + 1) * 2);
						this.bl_tree = new a.Buf16((2 * O + 1) * 2);
						ee(this.dyn_ltree);
						ee(this.dyn_dtree);
						ee(this.bl_tree);
						this.l_desc = null;
						this.d_desc = null;
						this.bl_desc = null;
						this.bl_count = new a.Buf16(P + 1);
						this.heap = new a.Buf16(2 * R + 1);
						ee(this.heap);
						this.heap_len = 0;
						this.heap_max = 0;
						this.depth = new a.Buf16(2 * R + 1);
						ee(this.depth);
						this.l_buf = 0;
						this.lit_bufsize = 0;
						this.last_lit = 0;
						this.d_buf = 0;
						this.opt_len = 0;
						this.static_len = 0;
						this.matches = 0;
						this.insert = 0;
						this.bi_buf = 0;
						this.bi_valid = 0;
					}
					function be(e) {
						var r;
						if (!e || !e.state) {
							return J(e, p);
						}
						e.total_in = e.total_out = 0;
						e.data_type = C;
						r = e.state;
						r.pending = 0;
						r.pending_out = 0;
						if (r.wrap < 0) {
							r.wrap = -r.wrap;
						}
						r.status = r.wrap ? H : G;
						e.adler = r.wrap === 2 ? 0 : 1;
						r.last_flush = l;
						n._tr_init(r);
						return d;
					}
					function ge(e) {
						var r = be(e);
						if (r === d) {
							pe(e.state);
						}
						return r;
					}
					function we(e, r) {
						if (!e || !e.state) {
							return p;
						}
						if (e.state.wrap !== 2) {
							return p;
						}
						e.state.gzhead = r;
						return d;
					}
					function Ee(e, r, t, n, i, s) {
						if (!e) {
							return p;
						}
						var f = 1;
						if (r === g) {
							r = 6;
						}
						if (n < 0) {
							f = 0;
							n = -n;
						} else if (n > 15) {
							f = 2;
							n -= 16;
						}
						if (
							i < 1 ||
							i > T ||
							t !== B ||
							n < 8 ||
							n > 15 ||
							r < 0 ||
							r > 9 ||
							s < 0 ||
							s > S
						) {
							return J(e, p);
						}
						if (n === 8) {
							n = 9;
						}
						var l = new me();
						e.state = l;
						l.strm = e;
						l.wrap = f;
						l.gzhead = null;
						l.w_bits = n;
						l.w_size = 1 << l.w_bits;
						l.w_mask = l.w_size - 1;
						l.hash_bits = i + 7;
						l.hash_size = 1 << l.hash_bits;
						l.hash_mask = l.hash_size - 1;
						l.hash_shift = ~~((l.hash_bits + N - 1) / N);
						l.window = new a.Buf8(l.w_size * 2);
						l.head = new a.Buf16(l.hash_size);
						l.prev = new a.Buf16(l.w_size);
						l.lit_bufsize = 1 << (i + 6);
						l.pending_buf_size = l.lit_bufsize * 4;
						l.pending_buf = new a.Buf8(l.pending_buf_size);
						l.d_buf = l.lit_bufsize >> 1;
						l.l_buf = (1 + 2) * l.lit_bufsize;
						l.level = r;
						l.strategy = s;
						l.method = t;
						return ge(e);
					}
					function ke(e, r) {
						return Ee(e, r, B, x, y, _);
					}
					function Se(e, r) {
						var t, a;
						var i, f;
						if (!e || !e.state || r > h || r < 0) {
							return e ? J(e, p) : p;
						}
						a = e.state;
						if (
							!e.output ||
							(!e.input && e.avail_in !== 0) ||
							(a.status === j && r !== u)
						) {
							return J(e, e.avail_out === 0 ? b : p);
						}
						a.strm = e;
						t = a.last_flush;
						a.last_flush = r;
						if (a.status === H) {
							if (a.wrap === 2) {
								e.adler = 0;
								ae(a, 31);
								ae(a, 139);
								ae(a, 8);
								if (!a.gzhead) {
									ae(a, 0);
									ae(a, 0);
									ae(a, 0);
									ae(a, 0);
									ae(a, 0);
									ae(
										a,
										a.level === 9 ? 2 : a.strategy >= E || a.level < 2 ? 4 : 0
									);
									ae(a, Q);
									a.status = G;
								} else {
									ae(
										a,
										(a.gzhead.text ? 1 : 0) +
											(a.gzhead.hcrc ? 2 : 0) +
											(!a.gzhead.extra ? 0 : 4) +
											(!a.gzhead.name ? 0 : 8) +
											(!a.gzhead.comment ? 0 : 16)
									);
									ae(a, a.gzhead.time & 255);
									ae(a, (a.gzhead.time >> 8) & 255);
									ae(a, (a.gzhead.time >> 16) & 255);
									ae(a, (a.gzhead.time >> 24) & 255);
									ae(
										a,
										a.level === 9 ? 2 : a.strategy >= E || a.level < 2 ? 4 : 0
									);
									ae(a, a.gzhead.os & 255);
									if (a.gzhead.extra && a.gzhead.extra.length) {
										ae(a, a.gzhead.extra.length & 255);
										ae(a, (a.gzhead.extra.length >> 8) & 255);
									}
									if (a.gzhead.hcrc) {
										e.adler = s(e.adler, a.pending_buf, a.pending, 0);
									}
									a.gzindex = 0;
									a.status = W;
								}
							} else {
								var m = (B + ((a.w_bits - 8) << 4)) << 8;
								var g = -1;
								if (a.strategy >= E || a.level < 2) {
									g = 0;
								} else if (a.level < 6) {
									g = 1;
								} else if (a.level === 6) {
									g = 2;
								} else {
									g = 3;
								}
								m |= g << 6;
								if (a.strstart !== 0) {
									m |= U;
								}
								m += 31 - (m % 31);
								a.status = G;
								ne(a, m);
								if (a.strstart !== 0) {
									ne(a, e.adler >>> 16);
									ne(a, e.adler & 65535);
								}
								e.adler = 1;
							}
						}
						if (a.status === W) {
							if (a.gzhead.extra) {
								i = a.pending;
								while (a.gzindex < (a.gzhead.extra.length & 65535)) {
									if (a.pending === a.pending_buf_size) {
										if (a.gzhead.hcrc && a.pending > i) {
											e.adler = s(e.adler, a.pending_buf, a.pending - i, i);
										}
										re(e);
										i = a.pending;
										if (a.pending === a.pending_buf_size) {
											break;
										}
									}
									ae(a, a.gzhead.extra[a.gzindex] & 255);
									a.gzindex++;
								}
								if (a.gzhead.hcrc && a.pending > i) {
									e.adler = s(e.adler, a.pending_buf, a.pending - i, i);
								}
								if (a.gzindex === a.gzhead.extra.length) {
									a.gzindex = 0;
									a.status = V;
								}
							} else {
								a.status = V;
							}
						}
						if (a.status === V) {
							if (a.gzhead.name) {
								i = a.pending;
								do {
									if (a.pending === a.pending_buf_size) {
										if (a.gzhead.hcrc && a.pending > i) {
											e.adler = s(e.adler, a.pending_buf, a.pending - i, i);
										}
										re(e);
										i = a.pending;
										if (a.pending === a.pending_buf_size) {
											f = 1;
											break;
										}
									}
									if (a.gzindex < a.gzhead.name.length) {
										f = a.gzhead.name.charCodeAt(a.gzindex++) & 255;
									} else {
										f = 0;
									}
									ae(a, f);
								} while (f !== 0);
								if (a.gzhead.hcrc && a.pending > i) {
									e.adler = s(e.adler, a.pending_buf, a.pending - i, i);
								}
								if (f === 0) {
									a.gzindex = 0;
									a.status = z;
								}
							} else {
								a.status = z;
							}
						}
						if (a.status === z) {
							if (a.gzhead.comment) {
								i = a.pending;
								do {
									if (a.pending === a.pending_buf_size) {
										if (a.gzhead.hcrc && a.pending > i) {
											e.adler = s(e.adler, a.pending_buf, a.pending - i, i);
										}
										re(e);
										i = a.pending;
										if (a.pending === a.pending_buf_size) {
											f = 1;
											break;
										}
									}
									if (a.gzindex < a.gzhead.comment.length) {
										f = a.gzhead.comment.charCodeAt(a.gzindex++) & 255;
									} else {
										f = 0;
									}
									ae(a, f);
								} while (f !== 0);
								if (a.gzhead.hcrc && a.pending > i) {
									e.adler = s(e.adler, a.pending_buf, a.pending - i, i);
								}
								if (f === 0) {
									a.status = X;
								}
							} else {
								a.status = X;
							}
						}
						if (a.status === X) {
							if (a.gzhead.hcrc) {
								if (a.pending + 2 > a.pending_buf_size) {
									re(e);
								}
								if (a.pending + 2 <= a.pending_buf_size) {
									ae(a, e.adler & 255);
									ae(a, (e.adler >> 8) & 255);
									e.adler = 0;
									a.status = G;
								}
							} else {
								a.status = G;
							}
						}
						if (a.pending !== 0) {
							re(e);
							if (e.avail_out === 0) {
								a.last_flush = -1;
								return d;
							}
						} else if (e.avail_in === 0 && q(r) <= q(t) && r !== u) {
							return J(e, b);
						}
						if (a.status === j && e.avail_in !== 0) {
							return J(e, b);
						}
						if (
							e.avail_in !== 0 ||
							a.lookahead !== 0 ||
							(r !== l && a.status !== j)
						) {
							var w =
								a.strategy === E
									? he(a, r)
									: a.strategy === k
									? ue(a, r)
									: ve[a.level].func(a, r);
							if (w === $ || w === Z) {
								a.status = j;
							}
							if (w === K || w === $) {
								if (e.avail_out === 0) {
									a.last_flush = -1;
								}
								return d;
							}
							if (w === Y) {
								if (r === o) {
									n._tr_align(a);
								} else if (r !== h) {
									n._tr_stored_block(a, 0, 0, false);
									if (r === c) {
										ee(a.head);
										if (a.lookahead === 0) {
											a.strstart = 0;
											a.block_start = 0;
											a.insert = 0;
										}
									}
								}
								re(e);
								if (e.avail_out === 0) {
									a.last_flush = -1;
									return d;
								}
							}
						}
						if (r !== u) {
							return d;
						}
						if (a.wrap <= 0) {
							return v;
						}
						if (a.wrap === 2) {
							ae(a, e.adler & 255);
							ae(a, (e.adler >> 8) & 255);
							ae(a, (e.adler >> 16) & 255);
							ae(a, (e.adler >> 24) & 255);
							ae(a, e.total_in & 255);
							ae(a, (e.total_in >> 8) & 255);
							ae(a, (e.total_in >> 16) & 255);
							ae(a, (e.total_in >> 24) & 255);
						} else {
							ne(a, e.adler >>> 16);
							ne(a, e.adler & 65535);
						}
						re(e);
						if (a.wrap > 0) {
							a.wrap = -a.wrap;
						}
						return a.pending !== 0 ? d : v;
					}
					function _e(e) {
						var r;
						if (!e || !e.state) {
							return p;
						}
						r = e.state.status;
						if (
							r !== H &&
							r !== W &&
							r !== V &&
							r !== z &&
							r !== X &&
							r !== G &&
							r !== j
						) {
							return J(e, p);
						}
						e.state = null;
						return r === G ? J(e, m) : d;
					}
					t.deflateInit = ke;
					t.deflateInit2 = Ee;
					t.deflateReset = ge;
					t.deflateResetKeep = be;
					t.deflateSetHeader = we;
					t.deflate = Se;
					t.deflateEnd = _e;
					t.deflateInfo = "pako deflate (from Nodeca project)";
				},
				{
					"../utils/common": 27,
					"./adler32": 29,
					"./crc32": 31,
					"./messages": 37,
					"./trees": 38,
				},
			],
			33: [
				function (e, r, t) {
					"use strict";
					function a() {
						this.text = 0;
						this.time = 0;
						this.xflags = 0;
						this.os = 0;
						this.extra = null;
						this.extra_len = 0;
						this.name = "";
						this.comment = "";
						this.hcrc = 0;
						this.done = false;
					}
					r.exports = a;
				},
				{},
			],
			34: [
				function (e, r, t) {
					"use strict";
					var a = 30;
					var n = 12;
					r.exports = function i(e, r) {
						var t;
						var i;
						var s;
						var f;
						var l;
						var o;
						var c;
						var u;
						var h;
						var d;
						var v;
						var p;
						var m;
						var b;
						var g;
						var w;
						var E;
						var k;
						var S;
						var _;
						var C;
						var B;
						var T;
						var x, y;
						t = e.state;
						i = e.next_in;
						x = e.input;
						s = i + (e.avail_in - 5);
						f = e.next_out;
						y = e.output;
						l = f - (r - e.avail_out);
						o = f + (e.avail_out - 257);
						c = t.dmax;
						u = t.wsize;
						h = t.whave;
						d = t.wnext;
						v = t.window;
						p = t.hold;
						m = t.bits;
						b = t.lencode;
						g = t.distcode;
						w = (1 << t.lenbits) - 1;
						E = (1 << t.distbits) - 1;
						e: do {
							if (m < 15) {
								p += x[i++] << m;
								m += 8;
								p += x[i++] << m;
								m += 8;
							}
							k = b[p & w];
							r: for (;;) {
								S = k >>> 24;
								p >>>= S;
								m -= S;
								S = (k >>> 16) & 255;
								if (S === 0) {
									y[f++] = k & 65535;
								} else if (S & 16) {
									_ = k & 65535;
									S &= 15;
									if (S) {
										if (m < S) {
											p += x[i++] << m;
											m += 8;
										}
										_ += p & ((1 << S) - 1);
										p >>>= S;
										m -= S;
									}
									if (m < 15) {
										p += x[i++] << m;
										m += 8;
										p += x[i++] << m;
										m += 8;
									}
									k = g[p & E];
									t: for (;;) {
										S = k >>> 24;
										p >>>= S;
										m -= S;
										S = (k >>> 16) & 255;
										if (S & 16) {
											C = k & 65535;
											S &= 15;
											if (m < S) {
												p += x[i++] << m;
												m += 8;
												if (m < S) {
													p += x[i++] << m;
													m += 8;
												}
											}
											C += p & ((1 << S) - 1);
											if (C > c) {
												e.msg = "invalid distance too far back";
												t.mode = a;
												break e;
											}
											p >>>= S;
											m -= S;
											S = f - l;
											if (C > S) {
												S = C - S;
												if (S > h) {
													if (t.sane) {
														e.msg = "invalid distance too far back";
														t.mode = a;
														break e;
													}
												}
												B = 0;
												T = v;
												if (d === 0) {
													B += u - S;
													if (S < _) {
														_ -= S;
														do {
															y[f++] = v[B++];
														} while (--S);
														B = f - C;
														T = y;
													}
												} else if (d < S) {
													B += u + d - S;
													S -= d;
													if (S < _) {
														_ -= S;
														do {
															y[f++] = v[B++];
														} while (--S);
														B = 0;
														if (d < _) {
															S = d;
															_ -= S;
															do {
																y[f++] = v[B++];
															} while (--S);
															B = f - C;
															T = y;
														}
													}
												} else {
													B += d - S;
													if (S < _) {
														_ -= S;
														do {
															y[f++] = v[B++];
														} while (--S);
														B = f - C;
														T = y;
													}
												}
												while (_ > 2) {
													y[f++] = T[B++];
													y[f++] = T[B++];
													y[f++] = T[B++];
													_ -= 3;
												}
												if (_) {
													y[f++] = T[B++];
													if (_ > 1) {
														y[f++] = T[B++];
													}
												}
											} else {
												B = f - C;
												do {
													y[f++] = y[B++];
													y[f++] = y[B++];
													y[f++] = y[B++];
													_ -= 3;
												} while (_ > 2);
												if (_) {
													y[f++] = y[B++];
													if (_ > 1) {
														y[f++] = y[B++];
													}
												}
											}
										} else if ((S & 64) === 0) {
											k = g[(k & 65535) + (p & ((1 << S) - 1))];
											continue t;
										} else {
											e.msg = "invalid distance code";
											t.mode = a;
											break e;
										}
										break;
									}
								} else if ((S & 64) === 0) {
									k = b[(k & 65535) + (p & ((1 << S) - 1))];
									continue r;
								} else if (S & 32) {
									t.mode = n;
									break e;
								} else {
									e.msg = "invalid literal/length code";
									t.mode = a;
									break e;
								}
								break;
							}
						} while (i < s && f < o);
						_ = m >> 3;
						i -= _;
						m -= _ << 3;
						p &= (1 << m) - 1;
						e.next_in = i;
						e.next_out = f;
						e.avail_in = i < s ? 5 + (s - i) : 5 - (i - s);
						e.avail_out = f < o ? 257 + (o - f) : 257 - (f - o);
						t.hold = p;
						t.bits = m;
						return;
					};
				},
				{},
			],
			35: [
				function (e, r, t) {
					"use strict";
					var a = e("../utils/common");
					var n = e("./adler32");
					var i = e("./crc32");
					var s = e("./inffast");
					var f = e("./inftrees");
					var l = 0;
					var o = 1;
					var c = 2;
					var u = 4;
					var h = 5;
					var d = 6;
					var v = 0;
					var p = 1;
					var m = 2;
					var b = -2;
					var g = -3;
					var w = -4;
					var E = -5;
					var k = 8;
					var S = 1;
					var _ = 2;
					var C = 3;
					var B = 4;
					var T = 5;
					var x = 6;
					var y = 7;
					var I = 8;
					var A = 9;
					var R = 10;
					var D = 11;
					var O = 12;
					var F = 13;
					var P = 14;
					var N = 15;
					var L = 16;
					var M = 17;
					var U = 18;
					var H = 19;
					var W = 20;
					var V = 21;
					var z = 22;
					var X = 23;
					var G = 24;
					var j = 25;
					var K = 26;
					var Y = 27;
					var $ = 28;
					var Z = 29;
					var Q = 30;
					var J = 31;
					var q = 32;
					var ee = 852;
					var re = 592;
					var te = 15;
					var ae = te;
					function ne(e) {
						return (
							((e >>> 24) & 255) +
							((e >>> 8) & 65280) +
							((e & 65280) << 8) +
							((e & 255) << 24)
						);
					}
					function ie() {
						this.mode = 0;
						this.last = false;
						this.wrap = 0;
						this.havedict = false;
						this.flags = 0;
						this.dmax = 0;
						this.check = 0;
						this.total = 0;
						this.head = null;
						this.wbits = 0;
						this.wsize = 0;
						this.whave = 0;
						this.wnext = 0;
						this.window = null;
						this.hold = 0;
						this.bits = 0;
						this.length = 0;
						this.offset = 0;
						this.extra = 0;
						this.lencode = null;
						this.distcode = null;
						this.lenbits = 0;
						this.distbits = 0;
						this.ncode = 0;
						this.nlen = 0;
						this.ndist = 0;
						this.have = 0;
						this.next = null;
						this.lens = new a.Buf16(320);
						this.work = new a.Buf16(288);
						this.lendyn = null;
						this.distdyn = null;
						this.sane = 0;
						this.back = 0;
						this.was = 0;
					}
					function se(e) {
						var r;
						if (!e || !e.state) {
							return b;
						}
						r = e.state;
						e.total_in = e.total_out = r.total = 0;
						e.msg = "";
						if (r.wrap) {
							e.adler = r.wrap & 1;
						}
						r.mode = S;
						r.last = 0;
						r.havedict = 0;
						r.dmax = 32768;
						r.head = null;
						r.hold = 0;
						r.bits = 0;
						r.lencode = r.lendyn = new a.Buf32(ee);
						r.distcode = r.distdyn = new a.Buf32(re);
						r.sane = 1;
						r.back = -1;
						return v;
					}
					function fe(e) {
						var r;
						if (!e || !e.state) {
							return b;
						}
						r = e.state;
						r.wsize = 0;
						r.whave = 0;
						r.wnext = 0;
						return se(e);
					}
					function le(e, r) {
						var t;
						var a;
						if (!e || !e.state) {
							return b;
						}
						a = e.state;
						if (r < 0) {
							t = 0;
							r = -r;
						} else {
							t = (r >> 4) + 1;
							if (r < 48) {
								r &= 15;
							}
						}
						if (r && (r < 8 || r > 15)) {
							return b;
						}
						if (a.window !== null && a.wbits !== r) {
							a.window = null;
						}
						a.wrap = t;
						a.wbits = r;
						return fe(e);
					}
					function oe(e, r) {
						var t;
						var a;
						if (!e) {
							return b;
						}
						a = new ie();
						e.state = a;
						a.window = null;
						t = le(e, r);
						if (t !== v) {
							e.state = null;
						}
						return t;
					}
					function ce(e) {
						return oe(e, ae);
					}
					var ue = true;
					var he, de;
					function ve(e) {
						if (ue) {
							var r;
							he = new a.Buf32(512);
							de = new a.Buf32(32);
							r = 0;
							while (r < 144) {
								e.lens[r++] = 8;
							}
							while (r < 256) {
								e.lens[r++] = 9;
							}
							while (r < 280) {
								e.lens[r++] = 7;
							}
							while (r < 288) {
								e.lens[r++] = 8;
							}
							f(o, e.lens, 0, 288, he, 0, e.work, { bits: 9 });
							r = 0;
							while (r < 32) {
								e.lens[r++] = 5;
							}
							f(c, e.lens, 0, 32, de, 0, e.work, { bits: 5 });
							ue = false;
						}
						e.lencode = he;
						e.lenbits = 9;
						e.distcode = de;
						e.distbits = 5;
					}
					function pe(e, r, t, n) {
						var i;
						var s = e.state;
						if (s.window === null) {
							s.wsize = 1 << s.wbits;
							s.wnext = 0;
							s.whave = 0;
							s.window = new a.Buf8(s.wsize);
						}
						if (n >= s.wsize) {
							a.arraySet(s.window, r, t - s.wsize, s.wsize, 0);
							s.wnext = 0;
							s.whave = s.wsize;
						} else {
							i = s.wsize - s.wnext;
							if (i > n) {
								i = n;
							}
							a.arraySet(s.window, r, t - n, i, s.wnext);
							n -= i;
							if (n) {
								a.arraySet(s.window, r, t - n, n, 0);
								s.wnext = n;
								s.whave = s.wsize;
							} else {
								s.wnext += i;
								if (s.wnext === s.wsize) {
									s.wnext = 0;
								}
								if (s.whave < s.wsize) {
									s.whave += i;
								}
							}
						}
						return 0;
					}
					function me(e, r) {
						var t;
						var ee, re;
						var te;
						var ae;
						var ie, se;
						var fe;
						var le;
						var oe, ce;
						var ue;
						var he;
						var de;
						var me = 0;
						var be, ge, we;
						var Ee, ke, Se;
						var _e;
						var Ce;
						var Be = new a.Buf8(4);
						var Te;
						var xe;
						var ye = [
							16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
						];
						if (!e || !e.state || !e.output || (!e.input && e.avail_in !== 0)) {
							return b;
						}
						t = e.state;
						if (t.mode === O) {
							t.mode = F;
						}
						ae = e.next_out;
						re = e.output;
						se = e.avail_out;
						te = e.next_in;
						ee = e.input;
						ie = e.avail_in;
						fe = t.hold;
						le = t.bits;
						oe = ie;
						ce = se;
						Ce = v;
						e: for (;;) {
							switch (t.mode) {
								case S:
									if (t.wrap === 0) {
										t.mode = F;
										break;
									}
									while (le < 16) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									if (t.wrap & 2 && fe === 35615) {
										t.check = 0;
										Be[0] = fe & 255;
										Be[1] = (fe >>> 8) & 255;
										t.check = i(t.check, Be, 2, 0);
										fe = 0;
										le = 0;
										t.mode = _;
										break;
									}
									t.flags = 0;
									if (t.head) {
										t.head.done = false;
									}
									if (!(t.wrap & 1) || (((fe & 255) << 8) + (fe >> 8)) % 31) {
										e.msg = "incorrect header check";
										t.mode = Q;
										break;
									}
									if ((fe & 15) !== k) {
										e.msg = "unknown compression method";
										t.mode = Q;
										break;
									}
									fe >>>= 4;
									le -= 4;
									_e = (fe & 15) + 8;
									if (t.wbits === 0) {
										t.wbits = _e;
									} else if (_e > t.wbits) {
										e.msg = "invalid window size";
										t.mode = Q;
										break;
									}
									t.dmax = 1 << _e;
									e.adler = t.check = 1;
									t.mode = fe & 512 ? R : O;
									fe = 0;
									le = 0;
									break;
								case _:
									while (le < 16) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									t.flags = fe;
									if ((t.flags & 255) !== k) {
										e.msg = "unknown compression method";
										t.mode = Q;
										break;
									}
									if (t.flags & 57344) {
										e.msg = "unknown header flags set";
										t.mode = Q;
										break;
									}
									if (t.head) {
										t.head.text = (fe >> 8) & 1;
									}
									if (t.flags & 512) {
										Be[0] = fe & 255;
										Be[1] = (fe >>> 8) & 255;
										t.check = i(t.check, Be, 2, 0);
									}
									fe = 0;
									le = 0;
									t.mode = C;
								case C:
									while (le < 32) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									if (t.head) {
										t.head.time = fe;
									}
									if (t.flags & 512) {
										Be[0] = fe & 255;
										Be[1] = (fe >>> 8) & 255;
										Be[2] = (fe >>> 16) & 255;
										Be[3] = (fe >>> 24) & 255;
										t.check = i(t.check, Be, 4, 0);
									}
									fe = 0;
									le = 0;
									t.mode = B;
								case B:
									while (le < 16) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									if (t.head) {
										t.head.xflags = fe & 255;
										t.head.os = fe >> 8;
									}
									if (t.flags & 512) {
										Be[0] = fe & 255;
										Be[1] = (fe >>> 8) & 255;
										t.check = i(t.check, Be, 2, 0);
									}
									fe = 0;
									le = 0;
									t.mode = T;
								case T:
									if (t.flags & 1024) {
										while (le < 16) {
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										t.length = fe;
										if (t.head) {
											t.head.extra_len = fe;
										}
										if (t.flags & 512) {
											Be[0] = fe & 255;
											Be[1] = (fe >>> 8) & 255;
											t.check = i(t.check, Be, 2, 0);
										}
										fe = 0;
										le = 0;
									} else if (t.head) {
										t.head.extra = null;
									}
									t.mode = x;
								case x:
									if (t.flags & 1024) {
										ue = t.length;
										if (ue > ie) {
											ue = ie;
										}
										if (ue) {
											if (t.head) {
												_e = t.head.extra_len - t.length;
												if (!t.head.extra) {
													t.head.extra = new Array(t.head.extra_len);
												}
												a.arraySet(t.head.extra, ee, te, ue, _e);
											}
											if (t.flags & 512) {
												t.check = i(t.check, ee, ue, te);
											}
											ie -= ue;
											te += ue;
											t.length -= ue;
										}
										if (t.length) {
											break e;
										}
									}
									t.length = 0;
									t.mode = y;
								case y:
									if (t.flags & 2048) {
										if (ie === 0) {
											break e;
										}
										ue = 0;
										do {
											_e = ee[te + ue++];
											if (t.head && _e && t.length < 65536) {
												t.head.name += String.fromCharCode(_e);
											}
										} while (_e && ue < ie);
										if (t.flags & 512) {
											t.check = i(t.check, ee, ue, te);
										}
										ie -= ue;
										te += ue;
										if (_e) {
											break e;
										}
									} else if (t.head) {
										t.head.name = null;
									}
									t.length = 0;
									t.mode = I;
								case I:
									if (t.flags & 4096) {
										if (ie === 0) {
											break e;
										}
										ue = 0;
										do {
											_e = ee[te + ue++];
											if (t.head && _e && t.length < 65536) {
												t.head.comment += String.fromCharCode(_e);
											}
										} while (_e && ue < ie);
										if (t.flags & 512) {
											t.check = i(t.check, ee, ue, te);
										}
										ie -= ue;
										te += ue;
										if (_e) {
											break e;
										}
									} else if (t.head) {
										t.head.comment = null;
									}
									t.mode = A;
								case A:
									if (t.flags & 512) {
										while (le < 16) {
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										if (fe !== (t.check & 65535)) {
											e.msg = "header crc mismatch";
											t.mode = Q;
											break;
										}
										fe = 0;
										le = 0;
									}
									if (t.head) {
										t.head.hcrc = (t.flags >> 9) & 1;
										t.head.done = true;
									}
									e.adler = t.check = 0;
									t.mode = O;
									break;
								case R:
									while (le < 32) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									e.adler = t.check = ne(fe);
									fe = 0;
									le = 0;
									t.mode = D;
								case D:
									if (t.havedict === 0) {
										e.next_out = ae;
										e.avail_out = se;
										e.next_in = te;
										e.avail_in = ie;
										t.hold = fe;
										t.bits = le;
										return m;
									}
									e.adler = t.check = 1;
									t.mode = O;
								case O:
									if (r === h || r === d) {
										break e;
									}
								case F:
									if (t.last) {
										fe >>>= le & 7;
										le -= le & 7;
										t.mode = Y;
										break;
									}
									while (le < 3) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									t.last = fe & 1;
									fe >>>= 1;
									le -= 1;
									switch (fe & 3) {
										case 0:
											t.mode = P;
											break;
										case 1:
											ve(t);
											t.mode = W;
											if (r === d) {
												fe >>>= 2;
												le -= 2;
												break e;
											}
											break;
										case 2:
											t.mode = M;
											break;
										case 3:
											e.msg = "invalid block type";
											t.mode = Q;
									}
									fe >>>= 2;
									le -= 2;
									break;
								case P:
									fe >>>= le & 7;
									le -= le & 7;
									while (le < 32) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									if ((fe & 65535) !== ((fe >>> 16) ^ 65535)) {
										e.msg = "invalid stored block lengths";
										t.mode = Q;
										break;
									}
									t.length = fe & 65535;
									fe = 0;
									le = 0;
									t.mode = N;
									if (r === d) {
										break e;
									}
								case N:
									t.mode = L;
								case L:
									ue = t.length;
									if (ue) {
										if (ue > ie) {
											ue = ie;
										}
										if (ue > se) {
											ue = se;
										}
										if (ue === 0) {
											break e;
										}
										a.arraySet(re, ee, te, ue, ae);
										ie -= ue;
										te += ue;
										se -= ue;
										ae += ue;
										t.length -= ue;
										break;
									}
									t.mode = O;
									break;
								case M:
									while (le < 14) {
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									t.nlen = (fe & 31) + 257;
									fe >>>= 5;
									le -= 5;
									t.ndist = (fe & 31) + 1;
									fe >>>= 5;
									le -= 5;
									t.ncode = (fe & 15) + 4;
									fe >>>= 4;
									le -= 4;
									if (t.nlen > 286 || t.ndist > 30) {
										e.msg = "too many length or distance symbols";
										t.mode = Q;
										break;
									}
									t.have = 0;
									t.mode = U;
								case U:
									while (t.have < t.ncode) {
										while (le < 3) {
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										t.lens[ye[t.have++]] = fe & 7;
										fe >>>= 3;
										le -= 3;
									}
									while (t.have < 19) {
										t.lens[ye[t.have++]] = 0;
									}
									t.lencode = t.lendyn;
									t.lenbits = 7;
									Te = { bits: t.lenbits };
									Ce = f(l, t.lens, 0, 19, t.lencode, 0, t.work, Te);
									t.lenbits = Te.bits;
									if (Ce) {
										e.msg = "invalid code lengths set";
										t.mode = Q;
										break;
									}
									t.have = 0;
									t.mode = H;
								case H:
									while (t.have < t.nlen + t.ndist) {
										for (;;) {
											me = t.lencode[fe & ((1 << t.lenbits) - 1)];
											be = me >>> 24;
											ge = (me >>> 16) & 255;
											we = me & 65535;
											if (be <= le) {
												break;
											}
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										if (we < 16) {
											fe >>>= be;
											le -= be;
											t.lens[t.have++] = we;
										} else {
											if (we === 16) {
												xe = be + 2;
												while (le < xe) {
													if (ie === 0) {
														break e;
													}
													ie--;
													fe += ee[te++] << le;
													le += 8;
												}
												fe >>>= be;
												le -= be;
												if (t.have === 0) {
													e.msg = "invalid bit length repeat";
													t.mode = Q;
													break;
												}
												_e = t.lens[t.have - 1];
												ue = 3 + (fe & 3);
												fe >>>= 2;
												le -= 2;
											} else if (we === 17) {
												xe = be + 3;
												while (le < xe) {
													if (ie === 0) {
														break e;
													}
													ie--;
													fe += ee[te++] << le;
													le += 8;
												}
												fe >>>= be;
												le -= be;
												_e = 0;
												ue = 3 + (fe & 7);
												fe >>>= 3;
												le -= 3;
											} else {
												xe = be + 7;
												while (le < xe) {
													if (ie === 0) {
														break e;
													}
													ie--;
													fe += ee[te++] << le;
													le += 8;
												}
												fe >>>= be;
												le -= be;
												_e = 0;
												ue = 11 + (fe & 127);
												fe >>>= 7;
												le -= 7;
											}
											if (t.have + ue > t.nlen + t.ndist) {
												e.msg = "invalid bit length repeat";
												t.mode = Q;
												break;
											}
											while (ue--) {
												t.lens[t.have++] = _e;
											}
										}
									}
									if (t.mode === Q) {
										break;
									}
									if (t.lens[256] === 0) {
										e.msg = "invalid code -- missing end-of-block";
										t.mode = Q;
										break;
									}
									t.lenbits = 9;
									Te = { bits: t.lenbits };
									Ce = f(o, t.lens, 0, t.nlen, t.lencode, 0, t.work, Te);
									t.lenbits = Te.bits;
									if (Ce) {
										e.msg = "invalid literal/lengths set";
										t.mode = Q;
										break;
									}
									t.distbits = 6;
									t.distcode = t.distdyn;
									Te = { bits: t.distbits };
									Ce = f(c, t.lens, t.nlen, t.ndist, t.distcode, 0, t.work, Te);
									t.distbits = Te.bits;
									if (Ce) {
										e.msg = "invalid distances set";
										t.mode = Q;
										break;
									}
									t.mode = W;
									if (r === d) {
										break e;
									}
								case W:
									t.mode = V;
								case V:
									if (ie >= 6 && se >= 258) {
										e.next_out = ae;
										e.avail_out = se;
										e.next_in = te;
										e.avail_in = ie;
										t.hold = fe;
										t.bits = le;
										s(e, ce);
										ae = e.next_out;
										re = e.output;
										se = e.avail_out;
										te = e.next_in;
										ee = e.input;
										ie = e.avail_in;
										fe = t.hold;
										le = t.bits;
										if (t.mode === O) {
											t.back = -1;
										}
										break;
									}
									t.back = 0;
									for (;;) {
										me = t.lencode[fe & ((1 << t.lenbits) - 1)];
										be = me >>> 24;
										ge = (me >>> 16) & 255;
										we = me & 65535;
										if (be <= le) {
											break;
										}
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									if (ge && (ge & 240) === 0) {
										Ee = be;
										ke = ge;
										Se = we;
										for (;;) {
											me =
												t.lencode[Se + ((fe & ((1 << (Ee + ke)) - 1)) >> Ee)];
											be = me >>> 24;
											ge = (me >>> 16) & 255;
											we = me & 65535;
											if (Ee + be <= le) {
												break;
											}
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										fe >>>= Ee;
										le -= Ee;
										t.back += Ee;
									}
									fe >>>= be;
									le -= be;
									t.back += be;
									t.length = we;
									if (ge === 0) {
										t.mode = K;
										break;
									}
									if (ge & 32) {
										t.back = -1;
										t.mode = O;
										break;
									}
									if (ge & 64) {
										e.msg = "invalid literal/length code";
										t.mode = Q;
										break;
									}
									t.extra = ge & 15;
									t.mode = z;
								case z:
									if (t.extra) {
										xe = t.extra;
										while (le < xe) {
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										t.length += fe & ((1 << t.extra) - 1);
										fe >>>= t.extra;
										le -= t.extra;
										t.back += t.extra;
									}
									t.was = t.length;
									t.mode = X;
								case X:
									for (;;) {
										me = t.distcode[fe & ((1 << t.distbits) - 1)];
										be = me >>> 24;
										ge = (me >>> 16) & 255;
										we = me & 65535;
										if (be <= le) {
											break;
										}
										if (ie === 0) {
											break e;
										}
										ie--;
										fe += ee[te++] << le;
										le += 8;
									}
									if ((ge & 240) === 0) {
										Ee = be;
										ke = ge;
										Se = we;
										for (;;) {
											me =
												t.distcode[Se + ((fe & ((1 << (Ee + ke)) - 1)) >> Ee)];
											be = me >>> 24;
											ge = (me >>> 16) & 255;
											we = me & 65535;
											if (Ee + be <= le) {
												break;
											}
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										fe >>>= Ee;
										le -= Ee;
										t.back += Ee;
									}
									fe >>>= be;
									le -= be;
									t.back += be;
									if (ge & 64) {
										e.msg = "invalid distance code";
										t.mode = Q;
										break;
									}
									t.offset = we;
									t.extra = ge & 15;
									t.mode = G;
								case G:
									if (t.extra) {
										xe = t.extra;
										while (le < xe) {
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										t.offset += fe & ((1 << t.extra) - 1);
										fe >>>= t.extra;
										le -= t.extra;
										t.back += t.extra;
									}
									if (t.offset > t.dmax) {
										e.msg = "invalid distance too far back";
										t.mode = Q;
										break;
									}
									t.mode = j;
								case j:
									if (se === 0) {
										break e;
									}
									ue = ce - se;
									if (t.offset > ue) {
										ue = t.offset - ue;
										if (ue > t.whave) {
											if (t.sane) {
												e.msg = "invalid distance too far back";
												t.mode = Q;
												break;
											}
										}
										if (ue > t.wnext) {
											ue -= t.wnext;
											he = t.wsize - ue;
										} else {
											he = t.wnext - ue;
										}
										if (ue > t.length) {
											ue = t.length;
										}
										de = t.window;
									} else {
										de = re;
										he = ae - t.offset;
										ue = t.length;
									}
									if (ue > se) {
										ue = se;
									}
									se -= ue;
									t.length -= ue;
									do {
										re[ae++] = de[he++];
									} while (--ue);
									if (t.length === 0) {
										t.mode = V;
									}
									break;
								case K:
									if (se === 0) {
										break e;
									}
									re[ae++] = t.length;
									se--;
									t.mode = V;
									break;
								case Y:
									if (t.wrap) {
										while (le < 32) {
											if (ie === 0) {
												break e;
											}
											ie--;
											fe |= ee[te++] << le;
											le += 8;
										}
										ce -= se;
										e.total_out += ce;
										t.total += ce;
										if (ce) {
											e.adler = t.check = t.flags
												? i(t.check, re, ce, ae - ce)
												: n(t.check, re, ce, ae - ce);
										}
										ce = se;
										if ((t.flags ? fe : ne(fe)) !== t.check) {
											e.msg = "incorrect data check";
											t.mode = Q;
											break;
										}
										fe = 0;
										le = 0;
									}
									t.mode = $;
								case $:
									if (t.wrap && t.flags) {
										while (le < 32) {
											if (ie === 0) {
												break e;
											}
											ie--;
											fe += ee[te++] << le;
											le += 8;
										}
										if (fe !== (t.total & 4294967295)) {
											e.msg = "incorrect length check";
											t.mode = Q;
											break;
										}
										fe = 0;
										le = 0;
									}
									t.mode = Z;
								case Z:
									Ce = p;
									break e;
								case Q:
									Ce = g;
									break e;
								case J:
									return w;
								case q:
								default:
									return b;
							}
						}
						e.next_out = ae;
						e.avail_out = se;
						e.next_in = te;
						e.avail_in = ie;
						t.hold = fe;
						t.bits = le;
						if (
							t.wsize ||
							(ce !== e.avail_out && t.mode < Q && (t.mode < Y || r !== u))
						) {
							if (pe(e, e.output, e.next_out, ce - e.avail_out)) {
								t.mode = J;
								return w;
							}
						}
						oe -= e.avail_in;
						ce -= e.avail_out;
						e.total_in += oe;
						e.total_out += ce;
						t.total += ce;
						if (t.wrap && ce) {
							e.adler = t.check = t.flags
								? i(t.check, re, ce, e.next_out - ce)
								: n(t.check, re, ce, e.next_out - ce);
						}
						e.data_type =
							t.bits +
							(t.last ? 64 : 0) +
							(t.mode === O ? 128 : 0) +
							(t.mode === W || t.mode === N ? 256 : 0);
						if (((oe === 0 && ce === 0) || r === u) && Ce === v) {
							Ce = E;
						}
						return Ce;
					}
					function be(e) {
						if (!e || !e.state) {
							return b;
						}
						var r = e.state;
						if (r.window) {
							r.window = null;
						}
						e.state = null;
						return v;
					}
					function ge(e, r) {
						var t;
						if (!e || !e.state) {
							return b;
						}
						t = e.state;
						if ((t.wrap & 2) === 0) {
							return b;
						}
						t.head = r;
						r.done = false;
						return v;
					}
					t.inflateReset = fe;
					t.inflateReset2 = le;
					t.inflateResetKeep = se;
					t.inflateInit = ce;
					t.inflateInit2 = oe;
					t.inflate = me;
					t.inflateEnd = be;
					t.inflateGetHeader = ge;
					t.inflateInfo = "pako inflate (from Nodeca project)";
				},
				{
					"../utils/common": 27,
					"./adler32": 29,
					"./crc32": 31,
					"./inffast": 34,
					"./inftrees": 36,
				},
			],
			36: [
				function (e, r, t) {
					"use strict";
					var a = e("../utils/common");
					var n = 15;
					var i = 852;
					var s = 592;
					var f = 0;
					var l = 1;
					var o = 2;
					var c = [
						3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
						59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
					];
					var u = [
						16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
						19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
					];
					var h = [
						1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
						513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
						24577, 0, 0,
					];
					var d = [
						16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
						23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
					];
					r.exports = function v(e, r, t, p, m, b, g, w) {
						var E = w.bits;
						var k = 0;
						var S = 0;
						var _ = 0,
							C = 0;
						var B = 0;
						var T = 0;
						var x = 0;
						var y = 0;
						var I = 0;
						var A = 0;
						var R;
						var D;
						var O;
						var F;
						var P;
						var N = null;
						var L = 0;
						var M;
						var U = new a.Buf16(n + 1);
						var H = new a.Buf16(n + 1);
						var W = null;
						var V = 0;
						var z, X, G;
						for (k = 0; k <= n; k++) {
							U[k] = 0;
						}
						for (S = 0; S < p; S++) {
							U[r[t + S]]++;
						}
						B = E;
						for (C = n; C >= 1; C--) {
							if (U[C] !== 0) {
								break;
							}
						}
						if (B > C) {
							B = C;
						}
						if (C === 0) {
							m[b++] = (1 << 24) | (64 << 16) | 0;
							m[b++] = (1 << 24) | (64 << 16) | 0;
							w.bits = 1;
							return 0;
						}
						for (_ = 1; _ < C; _++) {
							if (U[_] !== 0) {
								break;
							}
						}
						if (B < _) {
							B = _;
						}
						y = 1;
						for (k = 1; k <= n; k++) {
							y <<= 1;
							y -= U[k];
							if (y < 0) {
								return -1;
							}
						}
						if (y > 0 && (e === f || C !== 1)) {
							return -1;
						}
						H[1] = 0;
						for (k = 1; k < n; k++) {
							H[k + 1] = H[k] + U[k];
						}
						for (S = 0; S < p; S++) {
							if (r[t + S] !== 0) {
								g[H[r[t + S]]++] = S;
							}
						}
						if (e === f) {
							N = W = g;
							M = 19;
						} else if (e === l) {
							N = c;
							L -= 257;
							W = u;
							V -= 257;
							M = 256;
						} else {
							N = h;
							W = d;
							M = -1;
						}
						A = 0;
						S = 0;
						k = _;
						P = b;
						T = B;
						x = 0;
						O = -1;
						I = 1 << B;
						F = I - 1;
						if ((e === l && I > i) || (e === o && I > s)) {
							return 1;
						}
						var j = 0;
						for (;;) {
							j++;
							z = k - x;
							if (g[S] < M) {
								X = 0;
								G = g[S];
							} else if (g[S] > M) {
								X = W[V + g[S]];
								G = N[L + g[S]];
							} else {
								X = 32 + 64;
								G = 0;
							}
							R = 1 << (k - x);
							D = 1 << T;
							_ = D;
							do {
								D -= R;
								m[P + (A >> x) + D] = (z << 24) | (X << 16) | G | 0;
							} while (D !== 0);
							R = 1 << (k - 1);
							while (A & R) {
								R >>= 1;
							}
							if (R !== 0) {
								A &= R - 1;
								A += R;
							} else {
								A = 0;
							}
							S++;
							if (--U[k] === 0) {
								if (k === C) {
									break;
								}
								k = r[t + g[S]];
							}
							if (k > B && (A & F) !== O) {
								if (x === 0) {
									x = B;
								}
								P += _;
								T = k - x;
								y = 1 << T;
								while (T + x < C) {
									y -= U[T + x];
									if (y <= 0) {
										break;
									}
									T++;
									y <<= 1;
								}
								I += 1 << T;
								if ((e === l && I > i) || (e === o && I > s)) {
									return 1;
								}
								O = A & F;
								m[O] = (B << 24) | (T << 16) | (P - b) | 0;
							}
						}
						if (A !== 0) {
							m[P + A] = ((k - x) << 24) | (64 << 16) | 0;
						}
						w.bits = B;
						return 0;
					};
				},
				{ "../utils/common": 27 },
			],
			37: [
				function (e, r, t) {
					"use strict";
					r.exports = {
						2: "need dictionary",
						1: "stream end",
						0: "",
						"-1": "file error",
						"-2": "stream error",
						"-3": "data error",
						"-4": "insufficient memory",
						"-5": "buffer error",
						"-6": "incompatible version",
					};
				},
				{},
			],
			38: [
				function (e, r, t) {
					"use strict";
					var a = e("../utils/common");
					var n = 4;
					var i = 0;
					var s = 1;
					var f = 2;
					function l(e) {
						var r = e.length;
						while (--r >= 0) {
							e[r] = 0;
						}
					}
					var o = 0;
					var c = 1;
					var u = 2;
					var h = 3;
					var d = 258;
					var v = 29;
					var p = 256;
					var m = p + 1 + v;
					var b = 30;
					var g = 19;
					var w = 2 * m + 1;
					var E = 15;
					var k = 16;
					var S = 7;
					var _ = 256;
					var C = 16;
					var B = 17;
					var T = 18;
					var x = [
						0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4,
						4, 5, 5, 5, 5, 0,
					];
					var y = [
						0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9,
						10, 10, 11, 11, 12, 12, 13, 13,
					];
					var I = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7];
					var A = [
						16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
					];
					var R = 512;
					var D = new Array((m + 2) * 2);
					l(D);
					var O = new Array(b * 2);
					l(O);
					var F = new Array(R);
					l(F);
					var P = new Array(d - h + 1);
					l(P);
					var N = new Array(v);
					l(N);
					var L = new Array(b);
					l(L);
					var M = function (e, r, t, a, n) {
						this.static_tree = e;
						this.extra_bits = r;
						this.extra_base = t;
						this.elems = a;
						this.max_length = n;
						this.has_stree = e && e.length;
					};
					var U;
					var H;
					var W;
					var V = function (e, r) {
						this.dyn_tree = e;
						this.max_code = 0;
						this.stat_desc = r;
					};
					function z(e) {
						return e < 256 ? F[e] : F[256 + (e >>> 7)];
					}
					function X(e, r) {
						e.pending_buf[e.pending++] = r & 255;
						e.pending_buf[e.pending++] = (r >>> 8) & 255;
					}
					function G(e, r, t) {
						if (e.bi_valid > k - t) {
							e.bi_buf |= (r << e.bi_valid) & 65535;
							X(e, e.bi_buf);
							e.bi_buf = r >> (k - e.bi_valid);
							e.bi_valid += t - k;
						} else {
							e.bi_buf |= (r << e.bi_valid) & 65535;
							e.bi_valid += t;
						}
					}
					function j(e, r, t) {
						G(e, t[r * 2], t[r * 2 + 1]);
					}
					function K(e, r) {
						var t = 0;
						do {
							t |= e & 1;
							e >>>= 1;
							t <<= 1;
						} while (--r > 0);
						return t >>> 1;
					}
					function Y(e) {
						if (e.bi_valid === 16) {
							X(e, e.bi_buf);
							e.bi_buf = 0;
							e.bi_valid = 0;
						} else if (e.bi_valid >= 8) {
							e.pending_buf[e.pending++] = e.bi_buf & 255;
							e.bi_buf >>= 8;
							e.bi_valid -= 8;
						}
					}
					function $(e, r) {
						var t = r.dyn_tree;
						var a = r.max_code;
						var n = r.stat_desc.static_tree;
						var i = r.stat_desc.has_stree;
						var s = r.stat_desc.extra_bits;
						var f = r.stat_desc.extra_base;
						var l = r.stat_desc.max_length;
						var o;
						var c, u;
						var h;
						var d;
						var v;
						var p = 0;
						for (h = 0; h <= E; h++) {
							e.bl_count[h] = 0;
						}
						t[e.heap[e.heap_max] * 2 + 1] = 0;
						for (o = e.heap_max + 1; o < w; o++) {
							c = e.heap[o];
							h = t[t[c * 2 + 1] * 2 + 1] + 1;
							if (h > l) {
								h = l;
								p++;
							}
							t[c * 2 + 1] = h;
							if (c > a) {
								continue;
							}
							e.bl_count[h]++;
							d = 0;
							if (c >= f) {
								d = s[c - f];
							}
							v = t[c * 2];
							e.opt_len += v * (h + d);
							if (i) {
								e.static_len += v * (n[c * 2 + 1] + d);
							}
						}
						if (p === 0) {
							return;
						}
						do {
							h = l - 1;
							while (e.bl_count[h] === 0) {
								h--;
							}
							e.bl_count[h]--;
							e.bl_count[h + 1] += 2;
							e.bl_count[l]--;
							p -= 2;
						} while (p > 0);
						for (h = l; h !== 0; h--) {
							c = e.bl_count[h];
							while (c !== 0) {
								u = e.heap[--o];
								if (u > a) {
									continue;
								}
								if (t[u * 2 + 1] !== h) {
									e.opt_len += (h - t[u * 2 + 1]) * t[u * 2];
									t[u * 2 + 1] = h;
								}
								c--;
							}
						}
					}
					function Z(e, r, t) {
						var a = new Array(E + 1);
						var n = 0;
						var i;
						var s;
						for (i = 1; i <= E; i++) {
							a[i] = n = (n + t[i - 1]) << 1;
						}
						for (s = 0; s <= r; s++) {
							var f = e[s * 2 + 1];
							if (f === 0) {
								continue;
							}
							e[s * 2] = K(a[f]++, f);
						}
					}
					function Q() {
						var e;
						var r;
						var t;
						var a;
						var n;
						var i = new Array(E + 1);
						t = 0;
						for (a = 0; a < v - 1; a++) {
							N[a] = t;
							for (e = 0; e < 1 << x[a]; e++) {
								P[t++] = a;
							}
						}
						P[t - 1] = a;
						n = 0;
						for (a = 0; a < 16; a++) {
							L[a] = n;
							for (e = 0; e < 1 << y[a]; e++) {
								F[n++] = a;
							}
						}
						n >>= 7;
						for (; a < b; a++) {
							L[a] = n << 7;
							for (e = 0; e < 1 << (y[a] - 7); e++) {
								F[256 + n++] = a;
							}
						}
						for (r = 0; r <= E; r++) {
							i[r] = 0;
						}
						e = 0;
						while (e <= 143) {
							D[e * 2 + 1] = 8;
							e++;
							i[8]++;
						}
						while (e <= 255) {
							D[e * 2 + 1] = 9;
							e++;
							i[9]++;
						}
						while (e <= 279) {
							D[e * 2 + 1] = 7;
							e++;
							i[7]++;
						}
						while (e <= 287) {
							D[e * 2 + 1] = 8;
							e++;
							i[8]++;
						}
						Z(D, m + 1, i);
						for (e = 0; e < b; e++) {
							O[e * 2 + 1] = 5;
							O[e * 2] = K(e, 5);
						}
						U = new M(D, x, p + 1, m, E);
						H = new M(O, y, 0, b, E);
						W = new M(new Array(0), I, 0, g, S);
					}
					function J(e) {
						var r;
						for (r = 0; r < m; r++) {
							e.dyn_ltree[r * 2] = 0;
						}
						for (r = 0; r < b; r++) {
							e.dyn_dtree[r * 2] = 0;
						}
						for (r = 0; r < g; r++) {
							e.bl_tree[r * 2] = 0;
						}
						e.dyn_ltree[_ * 2] = 1;
						e.opt_len = e.static_len = 0;
						e.last_lit = e.matches = 0;
					}
					function q(e) {
						if (e.bi_valid > 8) {
							X(e, e.bi_buf);
						} else if (e.bi_valid > 0) {
							e.pending_buf[e.pending++] = e.bi_buf;
						}
						e.bi_buf = 0;
						e.bi_valid = 0;
					}
					function ee(e, r, t, n) {
						q(e);
						if (n) {
							X(e, t);
							X(e, ~t);
						}
						a.arraySet(e.pending_buf, e.window, r, t, e.pending);
						e.pending += t;
					}
					function re(e, r, t, a) {
						var n = r * 2;
						var i = t * 2;
						return e[n] < e[i] || (e[n] === e[i] && a[r] <= a[t]);
					}
					function te(e, r, t) {
						var a = e.heap[t];
						var n = t << 1;
						while (n <= e.heap_len) {
							if (n < e.heap_len && re(r, e.heap[n + 1], e.heap[n], e.depth)) {
								n++;
							}
							if (re(r, a, e.heap[n], e.depth)) {
								break;
							}
							e.heap[t] = e.heap[n];
							t = n;
							n <<= 1;
						}
						e.heap[t] = a;
					}
					function ae(e, r, t) {
						var a;
						var n;
						var i = 0;
						var s;
						var f;
						if (e.last_lit !== 0) {
							do {
								a =
									(e.pending_buf[e.d_buf + i * 2] << 8) |
									e.pending_buf[e.d_buf + i * 2 + 1];
								n = e.pending_buf[e.l_buf + i];
								i++;
								if (a === 0) {
									j(e, n, r);
								} else {
									s = P[n];
									j(e, s + p + 1, r);
									f = x[s];
									if (f !== 0) {
										n -= N[s];
										G(e, n, f);
									}
									a--;
									s = z(a);
									j(e, s, t);
									f = y[s];
									if (f !== 0) {
										a -= L[s];
										G(e, a, f);
									}
								}
							} while (i < e.last_lit);
						}
						j(e, _, r);
					}
					function ne(e, r) {
						var t = r.dyn_tree;
						var a = r.stat_desc.static_tree;
						var n = r.stat_desc.has_stree;
						var i = r.stat_desc.elems;
						var s, f;
						var l = -1;
						var o;
						e.heap_len = 0;
						e.heap_max = w;
						for (s = 0; s < i; s++) {
							if (t[s * 2] !== 0) {
								e.heap[++e.heap_len] = l = s;
								e.depth[s] = 0;
							} else {
								t[s * 2 + 1] = 0;
							}
						}
						while (e.heap_len < 2) {
							o = e.heap[++e.heap_len] = l < 2 ? ++l : 0;
							t[o * 2] = 1;
							e.depth[o] = 0;
							e.opt_len--;
							if (n) {
								e.static_len -= a[o * 2 + 1];
							}
						}
						r.max_code = l;
						for (s = e.heap_len >> 1; s >= 1; s--) {
							te(e, t, s);
						}
						o = i;
						do {
							s = e.heap[1];
							e.heap[1] = e.heap[e.heap_len--];
							te(e, t, 1);
							f = e.heap[1];
							e.heap[--e.heap_max] = s;
							e.heap[--e.heap_max] = f;
							t[o * 2] = t[s * 2] + t[f * 2];
							e.depth[o] =
								(e.depth[s] >= e.depth[f] ? e.depth[s] : e.depth[f]) + 1;
							t[s * 2 + 1] = t[f * 2 + 1] = o;
							e.heap[1] = o++;
							te(e, t, 1);
						} while (e.heap_len >= 2);
						e.heap[--e.heap_max] = e.heap[1];
						$(e, r);
						Z(t, l, e.bl_count);
					}
					function ie(e, r, t) {
						var a;
						var n = -1;
						var i;
						var s = r[0 * 2 + 1];
						var f = 0;
						var l = 7;
						var o = 4;
						if (s === 0) {
							l = 138;
							o = 3;
						}
						r[(t + 1) * 2 + 1] = 65535;
						for (a = 0; a <= t; a++) {
							i = s;
							s = r[(a + 1) * 2 + 1];
							if (++f < l && i === s) {
								continue;
							} else if (f < o) {
								e.bl_tree[i * 2] += f;
							} else if (i !== 0) {
								if (i !== n) {
									e.bl_tree[i * 2]++;
								}
								e.bl_tree[C * 2]++;
							} else if (f <= 10) {
								e.bl_tree[B * 2]++;
							} else {
								e.bl_tree[T * 2]++;
							}
							f = 0;
							n = i;
							if (s === 0) {
								l = 138;
								o = 3;
							} else if (i === s) {
								l = 6;
								o = 3;
							} else {
								l = 7;
								o = 4;
							}
						}
					}
					function se(e, r, t) {
						var a;
						var n = -1;
						var i;
						var s = r[0 * 2 + 1];
						var f = 0;
						var l = 7;
						var o = 4;
						if (s === 0) {
							l = 138;
							o = 3;
						}
						for (a = 0; a <= t; a++) {
							i = s;
							s = r[(a + 1) * 2 + 1];
							if (++f < l && i === s) {
								continue;
							} else if (f < o) {
								do {
									j(e, i, e.bl_tree);
								} while (--f !== 0);
							} else if (i !== 0) {
								if (i !== n) {
									j(e, i, e.bl_tree);
									f--;
								}
								j(e, C, e.bl_tree);
								G(e, f - 3, 2);
							} else if (f <= 10) {
								j(e, B, e.bl_tree);
								G(e, f - 3, 3);
							} else {
								j(e, T, e.bl_tree);
								G(e, f - 11, 7);
							}
							f = 0;
							n = i;
							if (s === 0) {
								l = 138;
								o = 3;
							} else if (i === s) {
								l = 6;
								o = 3;
							} else {
								l = 7;
								o = 4;
							}
						}
					}
					function fe(e) {
						var r;
						ie(e, e.dyn_ltree, e.l_desc.max_code);
						ie(e, e.dyn_dtree, e.d_desc.max_code);
						ne(e, e.bl_desc);
						for (r = g - 1; r >= 3; r--) {
							if (e.bl_tree[A[r] * 2 + 1] !== 0) {
								break;
							}
						}
						e.opt_len += 3 * (r + 1) + 5 + 5 + 4;
						return r;
					}
					function le(e, r, t, a) {
						var n;
						G(e, r - 257, 5);
						G(e, t - 1, 5);
						G(e, a - 4, 4);
						for (n = 0; n < a; n++) {
							G(e, e.bl_tree[A[n] * 2 + 1], 3);
						}
						se(e, e.dyn_ltree, r - 1);
						se(e, e.dyn_dtree, t - 1);
					}
					function oe(e) {
						var r = 4093624447;
						var t;
						for (t = 0; t <= 31; t++, r >>>= 1) {
							if (r & 1 && e.dyn_ltree[t * 2] !== 0) {
								return i;
							}
						}
						if (
							e.dyn_ltree[9 * 2] !== 0 ||
							e.dyn_ltree[10 * 2] !== 0 ||
							e.dyn_ltree[13 * 2] !== 0
						) {
							return s;
						}
						for (t = 32; t < p; t++) {
							if (e.dyn_ltree[t * 2] !== 0) {
								return s;
							}
						}
						return i;
					}
					var ce = false;
					function ue(e) {
						if (!ce) {
							Q();
							ce = true;
						}
						e.l_desc = new V(e.dyn_ltree, U);
						e.d_desc = new V(e.dyn_dtree, H);
						e.bl_desc = new V(e.bl_tree, W);
						e.bi_buf = 0;
						e.bi_valid = 0;
						J(e);
					}
					function he(e, r, t, a) {
						G(e, (o << 1) + (a ? 1 : 0), 3);
						ee(e, r, t, true);
					}
					function de(e) {
						G(e, c << 1, 3);
						j(e, _, D);
						Y(e);
					}
					function ve(e, r, t, a) {
						var i, s;
						var l = 0;
						if (e.level > 0) {
							if (e.strm.data_type === f) {
								e.strm.data_type = oe(e);
							}
							ne(e, e.l_desc);
							ne(e, e.d_desc);
							l = fe(e);
							i = (e.opt_len + 3 + 7) >>> 3;
							s = (e.static_len + 3 + 7) >>> 3;
							if (s <= i) {
								i = s;
							}
						} else {
							i = s = t + 5;
						}
						if (t + 4 <= i && r !== -1) {
							he(e, r, t, a);
						} else if (e.strategy === n || s === i) {
							G(e, (c << 1) + (a ? 1 : 0), 3);
							ae(e, D, O);
						} else {
							G(e, (u << 1) + (a ? 1 : 0), 3);
							le(e, e.l_desc.max_code + 1, e.d_desc.max_code + 1, l + 1);
							ae(e, e.dyn_ltree, e.dyn_dtree);
						}
						J(e);
						if (a) {
							q(e);
						}
					}
					function pe(e, r, t) {
						e.pending_buf[e.d_buf + e.last_lit * 2] = (r >>> 8) & 255;
						e.pending_buf[e.d_buf + e.last_lit * 2 + 1] = r & 255;
						e.pending_buf[e.l_buf + e.last_lit] = t & 255;
						e.last_lit++;
						if (r === 0) {
							e.dyn_ltree[t * 2]++;
						} else {
							e.matches++;
							r--;
							e.dyn_ltree[(P[t] + p + 1) * 2]++;
							e.dyn_dtree[z(r) * 2]++;
						}
						return e.last_lit === e.lit_bufsize - 1;
					}
					t._tr_init = ue;
					t._tr_stored_block = he;
					t._tr_flush_block = ve;
					t._tr_tally = pe;
					t._tr_align = de;
				},
				{ "../utils/common": 27 },
			],
			39: [
				function (e, r, t) {
					"use strict";
					function a() {
						this.input = null;
						this.next_in = 0;
						this.avail_in = 0;
						this.total_in = 0;
						this.output = null;
						this.next_out = 0;
						this.avail_out = 0;
						this.total_out = 0;
						this.msg = "";
						this.state = null;
						this.data_type = 2;
						this.adler = 0;
					}
					r.exports = a;
				},
				{},
			],
		},
		{},
		[9]
	)(9);
});
var XLSX = {};
function make_xlsx_lib(e) {
	e.version = "0.13.4";
	var r = 1200,
		t = 1252;
	if (typeof module !== "undefined" && typeof require !== "undefined") {
		if (typeof cptable === "undefined") {
			if (typeof global !== "undefined") global.cptable = undefined;
			else if (typeof window !== "undefined") window.cptable = undefined;
		}
	}
	var a = [874, 932, 936, 949, 950];
	for (var n = 0; n <= 8; ++n) a.push(1250 + n);
	var i = {
		0: 1252,
		1: 65001,
		2: 65001,
		77: 1e4,
		128: 932,
		129: 949,
		130: 1361,
		134: 936,
		136: 950,
		161: 1253,
		162: 1254,
		163: 1258,
		177: 1255,
		178: 1256,
		186: 1257,
		204: 1251,
		222: 874,
		238: 1250,
		255: 1252,
		69: 6969,
	};
	var s = function (e) {
		if (a.indexOf(e) == -1) return;
		t = i[0] = e;
	};
	function f() {
		s(1252);
	}
	var l = function (e) {
		r = e;
		s(e);
	};
	function o() {
		l(1200);
		f();
	}
	function c(e) {
		var r = [];
		for (var t = 0, a = e.length; t < a; ++t) r[t] = e.charCodeAt(t);
		return r;
	}
	function u(e) {
		var r = [];
		for (var t = 0; t < e.length >> 1; ++t)
			r[t] = String.fromCharCode(
				e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8)
			);
		return r.join("");
	}
	function h(e) {
		var r = [];
		for (var t = 0; t < e.length >> 1; ++t)
			r[t] = String.fromCharCode(
				e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8)
			);
		return r.join("");
	}
	var d = function (e) {
		var r = e.charCodeAt(0),
			t = e.charCodeAt(1);
		if (r == 255 && t == 254) return u(e.slice(2));
		if (r == 254 && t == 255) return h(e.slice(2));
		if (r == 65279) return e.slice(1);
		return e;
	};
	var v = function Mm(e) {
		return String.fromCharCode(e);
	};
	if (typeof cptable !== "undefined") {
		l = function (e) {
			r = e;
		};
		d = function (e) {
			if (e.charCodeAt(0) === 255 && e.charCodeAt(1) === 254) {
				return cptable.utils.decode(1200, c(e.slice(2)));
			}
			return e;
		};
		v = function Um(e) {
			if (r === 1200) return String.fromCharCode(e);
			return cptable.utils.decode(r, [e & 255, e >> 8])[0];
		};
	}
	var p = null;
	var m = true;
	var b = (function Hm() {
		var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
		return {
			encode: function (r) {
				var t = "";
				var a = 0,
					n = 0,
					i = 0,
					s = 0,
					f = 0,
					l = 0,
					o = 0;
				for (var c = 0; c < r.length; ) {
					a = r.charCodeAt(c++);
					s = a >> 2;
					n = r.charCodeAt(c++);
					f = ((a & 3) << 4) | (n >> 4);
					i = r.charCodeAt(c++);
					l = ((n & 15) << 2) | (i >> 6);
					o = i & 63;
					if (isNaN(n)) {
						l = o = 64;
					} else if (isNaN(i)) {
						o = 64;
					}
					t += e.charAt(s) + e.charAt(f) + e.charAt(l) + e.charAt(o);
				}
				return t;
			},
			decode: function r(t) {
				var a = "";
				var n = 0,
					i = 0,
					s = 0,
					f = 0,
					l = 0,
					o = 0,
					c = 0;
				t = t.replace(/[^\w\+\/\=]/g, "");
				for (var u = 0; u < t.length; ) {
					f = e.indexOf(t.charAt(u++));
					l = e.indexOf(t.charAt(u++));
					n = (f << 2) | (l >> 4);
					a += String.fromCharCode(n);
					o = e.indexOf(t.charAt(u++));
					i = ((l & 15) << 4) | (o >> 2);
					if (o !== 64) {
						a += String.fromCharCode(i);
					}
					c = e.indexOf(t.charAt(u++));
					s = ((o & 3) << 6) | c;
					if (c !== 64) {
						a += String.fromCharCode(s);
					}
				}
				return a;
			},
		};
	})();
	var g =
		typeof Buffer !== "undefined" &&
		typeof process !== "undefined" &&
		typeof process.versions !== "undefined" &&
		process.versions.node;
	var w = function () {};
	if (typeof Buffer !== "undefined") {
		var E = !Buffer.from;
		if (!E)
			try {
				Buffer.from("foo", "utf8");
			} catch (k) {
				E = true;
			}
		w = E
			? function (e, r) {
					return r ? new Buffer(e, r) : new Buffer(e);
			  }
			: Buffer.from.bind(Buffer);
		if (!Buffer.alloc)
			Buffer.alloc = function (e) {
				return new Buffer(e);
			};
	}
	function S(e) {
		return g ? Buffer.alloc(e) : new Array(e);
	}
	var _ = function Wm(e) {
		if (g) return w(e, "binary");
		return e.split("").map(function (e) {
			return e.charCodeAt(0) & 255;
		});
	};
	function C(e) {
		if (typeof ArrayBuffer === "undefined") return _(e);
		var r = new ArrayBuffer(e.length),
			t = new Uint8Array(r);
		for (var a = 0; a != e.length; ++a) t[a] = e.charCodeAt(a) & 255;
		return r;
	}
	function B(e) {
		if (Array.isArray(e)) return e.map(xv).join("");
		var r = [];
		for (var t = 0; t < e.length; ++t) r[t] = xv(e[t]);
		return r.join("");
	}
	function T(e) {
		if (typeof Uint8Array === "undefined") throw new Error("Unsupported");
		return new Uint8Array(e);
	}
	function x(e) {
		if (typeof ArrayBuffer == "undefined") throw new Error("Unsupported");
		if (e instanceof ArrayBuffer) return x(new Uint8Array(e));
		var r = new Array(e.length);
		for (var t = 0; t < e.length; ++t) r[t] = e[t];
		return r;
	}
	var y = function (e) {
		return [].concat.apply([], e);
	};
	var I = /\u0000/g,
		A = /[\u0001-\u0006]/g;
	var R = {};
	var D = function Vm(e) {
		e.version = "0.10.2";
		function r(e) {
			var r = "",
				t = e.length - 1;
			while (t >= 0) r += e.charAt(t--);
			return r;
		}
		function t(e, r) {
			var t = "";
			while (t.length < r) t += e;
			return t;
		}
		function a(e, r) {
			var a = "" + e;
			return a.length >= r ? a : t("0", r - a.length) + a;
		}
		function n(e, r) {
			var a = "" + e;
			return a.length >= r ? a : t(" ", r - a.length) + a;
		}
		function i(e, r) {
			var a = "" + e;
			return a.length >= r ? a : a + t(" ", r - a.length);
		}
		function s(e, r) {
			var a = "" + Math.round(e);
			return a.length >= r ? a : t("0", r - a.length) + a;
		}
		function f(e, r) {
			var a = "" + e;
			return a.length >= r ? a : t("0", r - a.length) + a;
		}
		var l = Math.pow(2, 32);
		function o(e, r) {
			if (e > l || e < -l) return s(e, r);
			var t = Math.round(e);
			return f(t, r);
		}
		function c(e, r) {
			r = r || 0;
			return (
				e.length >= 7 + r &&
				(e.charCodeAt(r) | 32) === 103 &&
				(e.charCodeAt(r + 1) | 32) === 101 &&
				(e.charCodeAt(r + 2) | 32) === 110 &&
				(e.charCodeAt(r + 3) | 32) === 101 &&
				(e.charCodeAt(r + 4) | 32) === 114 &&
				(e.charCodeAt(r + 5) | 32) === 97 &&
				(e.charCodeAt(r + 6) | 32) === 108
			);
		}
		var u = [
			["Sun", "Sunday"],
			["Mon", "Monday"],
			["Tue", "Tuesday"],
			["Wed", "Wednesday"],
			["Thu", "Thursday"],
			["Fri", "Friday"],
			["Sat", "Saturday"],
		];
		var h = [
			["J", "Jan", "January"],
			["F", "Feb", "February"],
			["M", "Mar", "March"],
			["A", "Apr", "April"],
			["M", "May", "May"],
			["J", "Jun", "June"],
			["J", "Jul", "July"],
			["A", "Aug", "August"],
			["S", "Sep", "September"],
			["O", "Oct", "October"],
			["N", "Nov", "November"],
			["D", "Dec", "December"],
		];
		function d(e) {
			e[0] = "General";
			e[1] = "0";
			e[2] = "0.00";
			e[3] = "#,##0";
			e[4] = "#,##0.00";
			e[9] = "0%";
			e[10] = "0.00%";
			e[11] = "0.00E+00";
			e[12] = "# ?/?";
			e[13] = "# ??/??";
			e[14] = "m/d/yy";
			e[15] = "d-mmm-yy";
			e[16] = "d-mmm";
			e[17] = "mmm-yy";
			e[18] = "h:mm AM/PM";
			e[19] = "h:mm:ss AM/PM";
			e[20] = "h:mm";
			e[21] = "h:mm:ss";
			e[22] = "m/d/yy h:mm";
			e[37] = "#,##0 ;(#,##0)";
			e[38] = "#,##0 ;[Red](#,##0)";
			e[39] = "#,##0.00;(#,##0.00)";
			e[40] = "#,##0.00;[Red](#,##0.00)";
			e[45] = "mm:ss";
			e[46] = "[h]:mm:ss";
			e[47] = "mmss.0";
			e[48] = "##0.0E+0";
			e[49] = "@";
			e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "';
			e[65535] = "General";
		}
		var v = {};
		d(v);
		function p(e, r, t) {
			var a = e < 0 ? -1 : 1;
			var n = e * a;
			var i = 0,
				s = 1,
				f = 0;
			var l = 1,
				o = 0,
				c = 0;
			var u = Math.floor(n);
			while (o < r) {
				u = Math.floor(n);
				f = u * s + i;
				c = u * o + l;
				if (n - u < 5e-8) break;
				n = 1 / (n - u);
				i = s;
				s = f;
				l = o;
				o = c;
			}
			if (c > r) {
				if (o > r) {
					c = l;
					f = i;
				} else {
					c = o;
					f = s;
				}
			}
			if (!t) return [0, a * f, c];
			var h = Math.floor((a * f) / c);
			return [h, a * f - h * c, c];
		}
		function m(e, r, t) {
			if (e > 2958465 || e < 0) return null;
			var a = e | 0,
				n = Math.floor(86400 * (e - a)),
				i = 0;
			var s = [];
			var f = {
				D: a,
				T: n,
				u: 86400 * (e - a) - n,
				y: 0,
				m: 0,
				d: 0,
				H: 0,
				M: 0,
				S: 0,
				q: 0,
			};
			if (Math.abs(f.u) < 1e-6) f.u = 0;
			if (r && r.date1904) a += 1462;
			if (f.u > 0.9999) {
				f.u = 0;
				if (++n == 86400) {
					f.T = n = 0;
					++a;
					++f.D;
				}
			}
			if (a === 60) {
				s = t ? [1317, 10, 29] : [1900, 2, 29];
				i = 3;
			} else if (a === 0) {
				s = t ? [1317, 8, 29] : [1900, 1, 0];
				i = 6;
			} else {
				if (a > 60) --a;
				var l = new Date(1900, 0, 1);
				l.setDate(l.getDate() + a - 1);
				s = [l.getFullYear(), l.getMonth() + 1, l.getDate()];
				i = l.getDay();
				if (a < 60) i = (i + 6) % 7;
				if (t) i = C(l, s);
			}
			f.y = s[0];
			f.m = s[1];
			f.d = s[2];
			f.S = n % 60;
			n = Math.floor(n / 60);
			f.M = n % 60;
			n = Math.floor(n / 60);
			f.H = n;
			f.q = i;
			return f;
		}
		e.parse_date_code = m;
		var b = new Date(1899, 11, 31, 0, 0, 0);
		var g = b.getTime();
		var w = new Date(1900, 2, 1, 0, 0, 0);
		function E(e, r) {
			var t = e.getTime();
			if (r) t -= 1461 * 24 * 60 * 60 * 1e3;
			else if (e >= w) t += 24 * 60 * 60 * 1e3;
			return (
				(t - (g + (e.getTimezoneOffset() - b.getTimezoneOffset()) * 6e4)) /
				(24 * 60 * 60 * 1e3)
			);
		}
		function k(e) {
			return e.toString(10);
		}
		e._general_int = k;
		var S = (function M() {
			var e = /\.(\d*[1-9])0+$/,
				r = /\.0*$/,
				t = /\.(\d*[1-9])0+/,
				a = /\.0*[Ee]/,
				n = /(E[+-])(\d)$/;
			function i(e) {
				var r = e < 0 ? 12 : 11;
				var t = l(e.toFixed(12));
				if (t.length <= r) return t;
				t = e.toPrecision(10);
				if (t.length <= r) return t;
				return e.toExponential(5);
			}
			function s(r) {
				var t = r.toFixed(11).replace(e, ".$1");
				if (t.length > (r < 0 ? 12 : 11)) t = r.toPrecision(6);
				return t;
			}
			function f(e) {
				for (var r = 0; r != e.length; ++r)
					if ((e.charCodeAt(r) | 32) === 101)
						return e
							.replace(t, ".$1")
							.replace(a, "E")
							.replace("e", "E")
							.replace(n, "$10$2");
				return e;
			}
			function l(t) {
				return t.indexOf(".") > -1 ? t.replace(r, "").replace(e, ".$1") : t;
			}
			return function o(e) {
				var r = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
					t;
				if (r >= -4 && r <= -1) t = e.toPrecision(10 + r);
				else if (Math.abs(r) <= 9) t = i(e);
				else if (r === 10) t = e.toFixed(10).substr(0, 12);
				else t = s(e);
				return l(f(t));
			};
		})();
		e._general_num = S;
		function _(e, r) {
			switch (typeof e) {
				case "string":
					return e;
				case "boolean":
					return e ? "TRUE" : "FALSE";
				case "number":
					return (e | 0) === e ? k(e) : S(e);
				case "undefined":
					return "";
				case "object":
					if (e == null) return "";
					if (e instanceof Date) return N(14, E(e, r && r.date1904), r);
			}
			throw new Error("unsupported value in General format: " + e);
		}
		e._general = _;
		function C() {
			return 0;
		}
		function B(e, r, t, n) {
			var i = "",
				s = 0,
				f = 0,
				l = t.y,
				o,
				c = 0;
			switch (e) {
				case 98:
					l = t.y + 543;
				case 121:
					switch (r.length) {
						case 1:
						case 2:
							o = l % 100;
							c = 2;
							break;
						default:
							o = l % 1e4;
							c = 4;
							break;
					}
					break;
				case 109:
					switch (r.length) {
						case 1:
						case 2:
							o = t.m;
							c = r.length;
							break;
						case 3:
							return h[t.m - 1][1];
						case 5:
							return h[t.m - 1][0];
						default:
							return h[t.m - 1][2];
					}
					break;
				case 100:
					switch (r.length) {
						case 1:
						case 2:
							o = t.d;
							c = r.length;
							break;
						case 3:
							return u[t.q][0];
						default:
							return u[t.q][1];
					}
					break;
				case 104:
					switch (r.length) {
						case 1:
						case 2:
							o = 1 + ((t.H + 11) % 12);
							c = r.length;
							break;
						default:
							throw "bad hour format: " + r;
					}
					break;
				case 72:
					switch (r.length) {
						case 1:
						case 2:
							o = t.H;
							c = r.length;
							break;
						default:
							throw "bad hour format: " + r;
					}
					break;
				case 77:
					switch (r.length) {
						case 1:
						case 2:
							o = t.M;
							c = r.length;
							break;
						default:
							throw "bad minute format: " + r;
					}
					break;
				case 115:
					if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000")
						throw "bad second format: " + r;
					if (t.u === 0 && (r == "s" || r == "ss")) return a(t.S, r.length);
					if (n >= 2) f = n === 3 ? 1e3 : 100;
					else f = n === 1 ? 10 : 1;
					s = Math.round(f * (t.S + t.u));
					if (s >= 60 * f) s = 0;
					if (r === "s") return s === 0 ? "0" : "" + s / f;
					i = a(s, 2 + n);
					if (r === "ss") return i.substr(0, 2);
					return "." + i.substr(2, r.length - 1);
				case 90:
					switch (r) {
						case "[h]":
						case "[hh]":
							o = t.D * 24 + t.H;
							break;
						case "[m]":
						case "[mm]":
							o = (t.D * 24 + t.H) * 60 + t.M;
							break;
						case "[s]":
						case "[ss]":
							o = ((t.D * 24 + t.H) * 60 + t.M) * 60 + Math.round(t.S + t.u);
							break;
						default:
							throw "bad abstime format: " + r;
					}
					c = r.length === 3 ? 1 : 2;
					break;
				case 101:
					o = l;
					c = 1;
			}
			if (c > 0) return a(o, c);
			else return "";
		}
		function T(e) {
			var r = 3;
			if (e.length <= r) return e;
			var t = e.length % r,
				a = e.substr(0, t);
			for (; t != e.length; t += r)
				a += (a.length > 0 ? "," : "") + e.substr(t, r);
			return a;
		}
		var x = (function U() {
			var e = /%/g;
			function s(r, a, n) {
				var i = a.replace(e, ""),
					s = a.length - i.length;
				return x(r, i, n * Math.pow(10, 2 * s)) + t("%", s);
			}
			function f(e, r, t) {
				var a = r.length - 1;
				while (r.charCodeAt(a - 1) === 44) --a;
				return x(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
			}
			function l(e, r) {
				var t;
				var a = e.indexOf("E") - e.indexOf(".") - 1;
				if (e.match(/^#+0.0E\+0$/)) {
					if (r == 0) return "0.0E+0";
					else if (r < 0) return "-" + l(e, -r);
					var n = e.indexOf(".");
					if (n === -1) n = e.indexOf("E");
					var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
					if (i < 0) i += n;
					t = (r / Math.pow(10, i)).toPrecision(a + 1 + ((n + i) % n));
					if (t.indexOf("e") === -1) {
						var s = Math.floor(Math.log(r) * Math.LOG10E);
						if (t.indexOf(".") === -1)
							t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i);
						else t += "E+" + (s - i);
						while (t.substr(0, 2) === "0.") {
							t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n);
							t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
						}
						t = t.replace(/\+-/, "-");
					}
					t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, r, t, a) {
						return r + t + a.substr(0, (n + i) % n) + "." + a.substr(i) + "E";
					});
				} else t = r.toExponential(a);
				if (e.match(/E\+00$/) && t.match(/e[+-]\d$/))
					t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1);
				if (e.match(/E\-/) && t.match(/e\+/)) t = t.replace(/e\+/, "e");
				return t.replace("e", "E");
			}
			var c = /# (\?+)( ?)\/( ?)(\d+)/;
			function u(e, r, i) {
				var s = parseInt(e[4], 10),
					f = Math.round(r * s),
					l = Math.floor(f / s);
				var o = f - l * s,
					c = s;
				return (
					i +
					(l === 0 ? "" : "" + l) +
					" " +
					(o === 0
						? t(" ", e[1].length + 1 + e[4].length)
						: n(o, e[1].length) + e[2] + "/" + e[3] + a(c, e[4].length))
				);
			}
			function h(e, r, a) {
				return (
					a + (r === 0 ? "" : "" + r) + t(" ", e[1].length + 2 + e[4].length)
				);
			}
			var d = /^#*0*\.([0#]+)/;
			var v = /\).*[0#]/;
			var m = /\(###\) ###\\?-####/;
			function b(e) {
				var r = "",
					t;
				for (var a = 0; a != e.length; ++a)
					switch ((t = e.charCodeAt(a))) {
						case 35:
							break;
						case 63:
							r += " ";
							break;
						case 48:
							r += "0";
							break;
						default:
							r += String.fromCharCode(t);
					}
				return r;
			}
			function g(e, r) {
				var t = Math.pow(10, r);
				return "" + Math.round(e * t) / t;
			}
			function w(e, r) {
				if (
					r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length
				) {
					return 0;
				}
				return Math.round((e - Math.floor(e)) * Math.pow(10, r));
			}
			function E(e, r) {
				if (
					r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length
				) {
					return 1;
				}
				return 0;
			}
			function k(e) {
				if (e < 2147483647 && e > -2147483648)
					return "" + (e >= 0 ? e | 0 : (e - 1) | 0);
				return "" + Math.floor(e);
			}
			function S(e, h, _) {
				if (e.charCodeAt(0) === 40 && !h.match(v)) {
					var C = h.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
					if (_ >= 0) return S("n", C, _);
					return "(" + S("n", C, -_) + ")";
				}
				if (h.charCodeAt(h.length - 1) === 44) return f(e, h, _);
				if (h.indexOf("%") !== -1) return s(e, h, _);
				if (h.indexOf("E") !== -1) return l(h, _);
				if (h.charCodeAt(0) === 36)
					return "$" + S(e, h.substr(h.charAt(1) == " " ? 2 : 1), _);
				var B;
				var y,
					I,
					A,
					R = Math.abs(_),
					D = _ < 0 ? "-" : "";
				if (h.match(/^00+$/)) return D + o(R, h.length);
				if (h.match(/^[#?]+$/)) {
					B = o(_, 0);
					if (B === "0") B = "";
					return B.length > h.length
						? B
						: b(h.substr(0, h.length - B.length)) + B;
				}
				if ((y = h.match(c))) return u(y, R, D);
				if (h.match(/^#+0+$/)) return D + o(R, h.length - h.indexOf("0"));
				if ((y = h.match(d))) {
					B = g(_, y[1].length)
						.replace(/^([^\.]+)$/, "$1." + b(y[1]))
						.replace(/\.$/, "." + b(y[1]))
						.replace(/\.(\d*)$/, function (e, r) {
							return "." + r + t("0", b(y[1]).length - r.length);
						});
					return h.indexOf("0.") !== -1 ? B : B.replace(/^0\./, ".");
				}
				h = h.replace(/^#+([0.])/, "$1");
				if ((y = h.match(/^(0*)\.(#*)$/))) {
					return (
						D +
						g(R, y[2].length)
							.replace(/\.(\d*[1-9])0*$/, ".$1")
							.replace(/^(-?\d*)$/, "$1.")
							.replace(/^0\./, y[1].length ? "0." : ".")
					);
				}
				if ((y = h.match(/^#{1,3},##0(\.?)$/))) return D + T(o(R, 0));
				if ((y = h.match(/^#,##0\.([#0]*0)$/))) {
					return _ < 0
						? "-" + S(e, h, -_)
						: T("" + (Math.floor(_) + E(_, y[1].length))) +
								"." +
								a(w(_, y[1].length), y[1].length);
				}
				if ((y = h.match(/^#,#*,#0/))) return S(e, h.replace(/^#,#*,/, ""), _);
				if ((y = h.match(/^([0#]+)(\\?-([0#]+))+$/))) {
					B = r(S(e, h.replace(/[\\-]/g, ""), _));
					I = 0;
					return r(
						r(h.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
							return I < B.length ? B.charAt(I++) : e === "0" ? "0" : "";
						})
					);
				}
				if (h.match(m)) {
					B = S(e, "##########", _);
					return (
						"(" + B.substr(0, 3) + ") " + B.substr(3, 3) + "-" + B.substr(6)
					);
				}
				var O = "";
				if ((y = h.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) {
					I = Math.min(y[4].length, 7);
					A = p(R, Math.pow(10, I) - 1, false);
					B = "" + D;
					O = x("n", y[1], A[1]);
					if (O.charAt(O.length - 1) == " ")
						O = O.substr(0, O.length - 1) + "0";
					B += O + y[2] + "/" + y[3];
					O = i(A[2], I);
					if (O.length < y[4].length)
						O = b(y[4].substr(y[4].length - O.length)) + O;
					B += O;
					return B;
				}
				if ((y = h.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) {
					I = Math.min(Math.max(y[1].length, y[4].length), 7);
					A = p(R, Math.pow(10, I) - 1, true);
					return (
						D +
						(A[0] || (A[1] ? "" : "0")) +
						" " +
						(A[1]
							? n(A[1], I) + y[2] + "/" + y[3] + i(A[2], I)
							: t(" ", 2 * I + 1 + y[2].length + y[3].length))
					);
				}
				if ((y = h.match(/^[#0?]+$/))) {
					B = o(_, 0);
					if (h.length <= B.length) return B;
					return b(h.substr(0, h.length - B.length)) + B;
				}
				if ((y = h.match(/^([#0?]+)\.([#0]+)$/))) {
					B =
						"" +
						_.toFixed(Math.min(y[2].length, 10)).replace(/([^0])0+$/, "$1");
					I = B.indexOf(".");
					var F = h.indexOf(".") - I,
						P = h.length - B.length - F;
					return b(h.substr(0, F) + B + h.substr(h.length - P));
				}
				if ((y = h.match(/^00,000\.([#0]*0)$/))) {
					I = w(_, y[1].length);
					return _ < 0
						? "-" + S(e, h, -_)
						: T(k(_))
								.replace(/^\d,\d{3}$/, "0$&")
								.replace(/^\d*$/, function (e) {
									return "00," + (e.length < 3 ? a(0, 3 - e.length) : "") + e;
								}) +
								"." +
								a(I, y[1].length);
				}
				switch (h) {
					case "###,##0.00":
						return S(e, "#,##0.00", _);
					case "###,###":
					case "##,###":
					case "#,###":
						var N = T(o(R, 0));
						return N !== "0" ? D + N : "";
					case "###,###.00":
						return S(e, "###,##0.00", _).replace(/^0\./, ".");
					case "#,###.00":
						return S(e, "#,##0.00", _).replace(/^0\./, ".");
					default:
				}
				throw new Error("unsupported format |" + h + "|");
			}
			function _(e, r, t) {
				var a = r.length - 1;
				while (r.charCodeAt(a - 1) === 44) --a;
				return x(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
			}
			function C(r, a, n) {
				var i = a.replace(e, ""),
					s = a.length - i.length;
				return x(r, i, n * Math.pow(10, 2 * s)) + t("%", s);
			}
			function B(e, r) {
				var t;
				var a = e.indexOf("E") - e.indexOf(".") - 1;
				if (e.match(/^#+0.0E\+0$/)) {
					if (r == 0) return "0.0E+0";
					else if (r < 0) return "-" + B(e, -r);
					var n = e.indexOf(".");
					if (n === -1) n = e.indexOf("E");
					var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
					if (i < 0) i += n;
					t = (r / Math.pow(10, i)).toPrecision(a + 1 + ((n + i) % n));
					if (!t.match(/[Ee]/)) {
						var s = Math.floor(Math.log(r) * Math.LOG10E);
						if (t.indexOf(".") === -1)
							t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i);
						else t += "E+" + (s - i);
						t = t.replace(/\+-/, "-");
					}
					t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, r, t, a) {
						return r + t + a.substr(0, (n + i) % n) + "." + a.substr(i) + "E";
					});
				} else t = r.toExponential(a);
				if (e.match(/E\+00$/) && t.match(/e[+-]\d$/))
					t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1);
				if (e.match(/E\-/) && t.match(/e\+/)) t = t.replace(/e\+/, "e");
				return t.replace("e", "E");
			}
			function y(e, s, f) {
				if (e.charCodeAt(0) === 40 && !s.match(v)) {
					var l = s.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
					if (f >= 0) return y("n", l, f);
					return "(" + y("n", l, -f) + ")";
				}
				if (s.charCodeAt(s.length - 1) === 44) return _(e, s, f);
				if (s.indexOf("%") !== -1) return C(e, s, f);
				if (s.indexOf("E") !== -1) return B(s, f);
				if (s.charCodeAt(0) === 36)
					return "$" + y(e, s.substr(s.charAt(1) == " " ? 2 : 1), f);
				var o;
				var u,
					g,
					w,
					E = Math.abs(f),
					k = f < 0 ? "-" : "";
				if (s.match(/^00+$/)) return k + a(E, s.length);
				if (s.match(/^[#?]+$/)) {
					o = "" + f;
					if (f === 0) o = "";
					return o.length > s.length
						? o
						: b(s.substr(0, s.length - o.length)) + o;
				}
				if ((u = s.match(c))) return h(u, E, k);
				if (s.match(/^#+0+$/)) return k + a(E, s.length - s.indexOf("0"));
				if ((u = s.match(d))) {
					o = ("" + f)
						.replace(/^([^\.]+)$/, "$1." + b(u[1]))
						.replace(/\.$/, "." + b(u[1]));
					o = o.replace(/\.(\d*)$/, function (e, r) {
						return "." + r + t("0", b(u[1]).length - r.length);
					});
					return s.indexOf("0.") !== -1 ? o : o.replace(/^0\./, ".");
				}
				s = s.replace(/^#+([0.])/, "$1");
				if ((u = s.match(/^(0*)\.(#*)$/))) {
					return (
						k +
						("" + E)
							.replace(/\.(\d*[1-9])0*$/, ".$1")
							.replace(/^(-?\d*)$/, "$1.")
							.replace(/^0\./, u[1].length ? "0." : ".")
					);
				}
				if ((u = s.match(/^#{1,3},##0(\.?)$/))) return k + T("" + E);
				if ((u = s.match(/^#,##0\.([#0]*0)$/))) {
					return f < 0
						? "-" + y(e, s, -f)
						: T("" + f) + "." + t("0", u[1].length);
				}
				if ((u = s.match(/^#,#*,#0/))) return y(e, s.replace(/^#,#*,/, ""), f);
				if ((u = s.match(/^([0#]+)(\\?-([0#]+))+$/))) {
					o = r(y(e, s.replace(/[\\-]/g, ""), f));
					g = 0;
					return r(
						r(s.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
							return g < o.length ? o.charAt(g++) : e === "0" ? "0" : "";
						})
					);
				}
				if (s.match(m)) {
					o = y(e, "##########", f);
					return (
						"(" + o.substr(0, 3) + ") " + o.substr(3, 3) + "-" + o.substr(6)
					);
				}
				var S = "";
				if ((u = s.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))) {
					g = Math.min(u[4].length, 7);
					w = p(E, Math.pow(10, g) - 1, false);
					o = "" + k;
					S = x("n", u[1], w[1]);
					if (S.charAt(S.length - 1) == " ")
						S = S.substr(0, S.length - 1) + "0";
					o += S + u[2] + "/" + u[3];
					S = i(w[2], g);
					if (S.length < u[4].length)
						S = b(u[4].substr(u[4].length - S.length)) + S;
					o += S;
					return o;
				}
				if ((u = s.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))) {
					g = Math.min(Math.max(u[1].length, u[4].length), 7);
					w = p(E, Math.pow(10, g) - 1, true);
					return (
						k +
						(w[0] || (w[1] ? "" : "0")) +
						" " +
						(w[1]
							? n(w[1], g) + u[2] + "/" + u[3] + i(w[2], g)
							: t(" ", 2 * g + 1 + u[2].length + u[3].length))
					);
				}
				if ((u = s.match(/^[#0?]+$/))) {
					o = "" + f;
					if (s.length <= o.length) return o;
					return b(s.substr(0, s.length - o.length)) + o;
				}
				if ((u = s.match(/^([#0]+)\.([#0]+)$/))) {
					o =
						"" +
						f.toFixed(Math.min(u[2].length, 10)).replace(/([^0])0+$/, "$1");
					g = o.indexOf(".");
					var I = s.indexOf(".") - g,
						A = s.length - o.length - I;
					return b(s.substr(0, I) + o + s.substr(s.length - A));
				}
				if ((u = s.match(/^00,000\.([#0]*0)$/))) {
					return f < 0
						? "-" + y(e, s, -f)
						: T("" + f)
								.replace(/^\d,\d{3}$/, "0$&")
								.replace(/^\d*$/, function (e) {
									return "00," + (e.length < 3 ? a(0, 3 - e.length) : "") + e;
								}) +
								"." +
								a(0, u[1].length);
				}
				switch (s) {
					case "###,###":
					case "##,###":
					case "#,###":
						var R = T("" + E);
						return R !== "0" ? k + R : "";
					default:
						if (s.match(/\.[0#?]*$/))
							return (
								y(e, s.slice(0, s.lastIndexOf(".")), f) +
								b(s.slice(s.lastIndexOf(".")))
							);
				}
				throw new Error("unsupported format |" + s + "|");
			}
			return function I(e, r, t) {
				return (t | 0) === t ? y(e, r, t) : S(e, r, t);
			};
		})();
		function y(e) {
			var r = [];
			var t = false;
			for (var a = 0, n = 0; a < e.length; ++a)
				switch (e.charCodeAt(a)) {
					case 34:
						t = !t;
						break;
					case 95:
					case 42:
					case 92:
						++a;
						break;
					case 59:
						r[r.length] = e.substr(n, a - n);
						n = a + 1;
				}
			r[r.length] = e.substr(n);
			if (t === true)
				throw new Error("Format |" + e + "| unterminated string ");
			return r;
		}
		e._split = y;
		var I = /\[[HhMmSs]*\]/;
		function A(e) {
			var r = 0,
				t = "",
				a = "";
			while (r < e.length) {
				switch ((t = e.charAt(r))) {
					case "G":
						if (c(e, r)) r += 6;
						r++;
						break;
					case '"':
						for (; e.charCodeAt(++r) !== 34 && r < e.length; ) ++r;
						++r;
						break;
					case "\\":
						r += 2;
						break;
					case "_":
						r += 2;
						break;
					case "@":
						++r;
						break;
					case "B":
					case "b":
						if (e.charAt(r + 1) === "1" || e.charAt(r + 1) === "2") return true;
					case "M":
					case "D":
					case "Y":
					case "H":
					case "S":
					case "E":
					case "m":
					case "d":
					case "y":
					case "h":
					case "s":
					case "e":
					case "g":
						return true;
					case "A":
					case "a":
						if (e.substr(r, 3).toUpperCase() === "A/P") return true;
						if (e.substr(r, 5).toUpperCase() === "AM/PM") return true;
						++r;
						break;
					case "[":
						a = t;
						while (e.charAt(r++) !== "]" && r < e.length) a += e.charAt(r);
						if (a.match(I)) return true;
						break;
					case ".":
					case "0":
					case "#":
						while (
							r < e.length &&
							("0#?.,E+-%".indexOf((t = e.charAt(++r))) > -1 ||
								(t == "\\" &&
									e.charAt(r + 1) == "-" &&
									"0#".indexOf(e.charAt(r + 2)) > -1))
						) {}
						break;
					case "?":
						while (e.charAt(++r) === t) {}
						break;
					case "*":
						++r;
						if (e.charAt(r) == " " || e.charAt(r) == "*") ++r;
						break;
					case "(":
					case ")":
						++r;
						break;
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						while (r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1) {}
						break;
					case " ":
						++r;
						break;
					default:
						++r;
						break;
				}
			}
			return false;
		}
		e.is_date = A;
		function R(e, r, t, a) {
			var n = [],
				i = "",
				s = 0,
				f = "",
				l = "t",
				o,
				u,
				h;
			var d = "H";
			while (s < e.length) {
				switch ((f = e.charAt(s))) {
					case "G":
						if (!c(e, s))
							throw new Error("unrecognized character " + f + " in " + e);
						n[n.length] = { t: "G", v: "General" };
						s += 7;
						break;
					case '"':
						for (i = ""; (h = e.charCodeAt(++s)) !== 34 && s < e.length; )
							i += String.fromCharCode(h);
						n[n.length] = { t: "t", v: i };
						++s;
						break;
					case "\\":
						var v = e.charAt(++s),
							p = v === "(" || v === ")" ? v : "t";
						n[n.length] = { t: p, v: v };
						++s;
						break;
					case "_":
						n[n.length] = { t: "t", v: " " };
						s += 2;
						break;
					case "@":
						n[n.length] = { t: "T", v: r };
						++s;
						break;
					case "B":
					case "b":
						if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
							if (o == null) {
								o = m(r, t, e.charAt(s + 1) === "2");
								if (o == null) return "";
							}
							n[n.length] = { t: "X", v: e.substr(s, 2) };
							l = f;
							s += 2;
							break;
						}
					case "M":
					case "D":
					case "Y":
					case "H":
					case "S":
					case "E":
						f = f.toLowerCase();
					case "m":
					case "d":
					case "y":
					case "h":
					case "s":
					case "e":
					case "g":
						if (r < 0) return "";
						if (o == null) {
							o = m(r, t);
							if (o == null) return "";
						}
						i = f;
						while (++s < e.length && e.charAt(s).toLowerCase() === f) i += f;
						if (f === "m" && l.toLowerCase() === "h") f = "M";
						if (f === "h") f = d;
						n[n.length] = { t: f, v: i };
						l = f;
						break;
					case "A":
					case "a":
						var b = { t: f, v: f };
						if (o == null) o = m(r, t);
						if (e.substr(s, 3).toUpperCase() === "A/P") {
							if (o != null) b.v = o.H >= 12 ? "P" : "A";
							b.t = "T";
							d = "h";
							s += 3;
						} else if (e.substr(s, 5).toUpperCase() === "AM/PM") {
							if (o != null) b.v = o.H >= 12 ? "PM" : "AM";
							b.t = "T";
							s += 5;
							d = "h";
						} else {
							b.t = "t";
							++s;
						}
						if (o == null && b.t === "T") return "";
						n[n.length] = b;
						l = f;
						break;
					case "[":
						i = f;
						while (e.charAt(s++) !== "]" && s < e.length) i += e.charAt(s);
						if (i.slice(-1) !== "]")
							throw 'unterminated "[" block: |' + i + "|";
						if (i.match(I)) {
							if (o == null) {
								o = m(r, t);
								if (o == null) return "";
							}
							n[n.length] = { t: "Z", v: i.toLowerCase() };
							l = i.charAt(1);
						} else if (i.indexOf("$") > -1) {
							i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$";
							if (!A(e)) n[n.length] = { t: "t", v: i };
						}
						break;
					case ".":
						if (o != null) {
							i = f;
							while (++s < e.length && (f = e.charAt(s)) === "0") i += f;
							n[n.length] = { t: "s", v: i };
							break;
						}
					case "0":
					case "#":
						i = f;
						while (
							(++s < e.length && "0#?.,E+-%".indexOf((f = e.charAt(s))) > -1) ||
							(f == "\\" &&
								e.charAt(s + 1) == "-" &&
								s < e.length - 2 &&
								"0#".indexOf(e.charAt(s + 2)) > -1)
						)
							i += f;
						n[n.length] = { t: "n", v: i };
						break;
					case "?":
						i = f;
						while (e.charAt(++s) === f) i += f;
						n[n.length] = { t: f, v: i };
						l = f;
						break;
					case "*":
						++s;
						if (e.charAt(s) == " " || e.charAt(s) == "*") ++s;
						break;
					case "(":
					case ")":
						n[n.length] = { t: a === 1 ? "t" : f, v: f };
						++s;
						break;
					case "1":
					case "2":
					case "3":
					case "4":
					case "5":
					case "6":
					case "7":
					case "8":
					case "9":
						i = f;
						while (s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1)
							i += e.charAt(s);
						n[n.length] = { t: "D", v: i };
						break;
					case " ":
						n[n.length] = { t: f, v: f };
						++s;
						break;
					default:
						if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(f) === -1)
							throw new Error("unrecognized character " + f + " in " + e);
						n[n.length] = { t: "t", v: f };
						++s;
						break;
				}
			}
			var g = 0,
				w = 0,
				E;
			for (s = n.length - 1, l = "t"; s >= 0; --s) {
				switch (n[s].t) {
					case "h":
					case "H":
						n[s].t = d;
						l = "h";
						if (g < 1) g = 1;
						break;
					case "s":
						if ((E = n[s].v.match(/\.0+$/))) w = Math.max(w, E[0].length - 1);
						if (g < 3) g = 3;
					case "d":
					case "y":
					case "M":
					case "e":
						l = n[s].t;
						break;
					case "m":
						if (l === "s") {
							n[s].t = "M";
							if (g < 2) g = 2;
						}
						break;
					case "X":
						break;
					case "Z":
						if (g < 1 && n[s].v.match(/[Hh]/)) g = 1;
						if (g < 2 && n[s].v.match(/[Mm]/)) g = 2;
						if (g < 3 && n[s].v.match(/[Ss]/)) g = 3;
				}
			}
			switch (g) {
				case 0:
					break;
				case 1:
					if (o.u >= 0.5) {
						o.u = 0;
						++o.S;
					}
					if (o.S >= 60) {
						o.S = 0;
						++o.M;
					}
					if (o.M >= 60) {
						o.M = 0;
						++o.H;
					}
					break;
				case 2:
					if (o.u >= 0.5) {
						o.u = 0;
						++o.S;
					}
					if (o.S >= 60) {
						o.S = 0;
						++o.M;
					}
					break;
			}
			var k = "",
				S;
			for (s = 0; s < n.length; ++s) {
				switch (n[s].t) {
					case "t":
					case "T":
					case " ":
					case "D":
						break;
					case "X":
						n[s].v = "";
						n[s].t = ";";
						break;
					case "d":
					case "m":
					case "y":
					case "h":
					case "H":
					case "M":
					case "s":
					case "e":
					case "b":
					case "Z":
						n[s].v = B(n[s].t.charCodeAt(0), n[s].v, o, w);
						n[s].t = "t";
						break;
					case "n":
					case "(":
					case "?":
						S = s + 1;
						while (
							n[S] != null &&
							((f = n[S].t) === "?" ||
								f === "D" ||
								((f === " " || f === "t") &&
									n[S + 1] != null &&
									(n[S + 1].t === "?" ||
										(n[S + 1].t === "t" && n[S + 1].v === "/"))) ||
								(n[s].t === "(" && (f === " " || f === "n" || f === ")")) ||
								(f === "t" &&
									(n[S].v === "/" ||
										(n[S].v === " " && n[S + 1] != null && n[S + 1].t == "?"))))
						) {
							n[s].v += n[S].v;
							n[S] = { v: "", t: ";" };
							++S;
						}
						k += n[s].v;
						s = S - 1;
						break;
					case "G":
						n[s].t = "t";
						n[s].v = _(r, t);
						break;
				}
			}
			var C = "",
				T,
				y;
			if (k.length > 0) {
				if (k.charCodeAt(0) == 40) {
					T = r < 0 && k.charCodeAt(0) === 45 ? -r : r;
					y = x("(", k, T);
				} else {
					T = r < 0 && a > 1 ? -r : r;
					y = x("n", k, T);
					if (T < 0 && n[0] && n[0].t == "t") {
						y = y.substr(1);
						n[0].v = "-" + n[0].v;
					}
				}
				S = y.length - 1;
				var R = n.length;
				for (s = 0; s < n.length; ++s)
					if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
						R = s;
						break;
					}
				var D = n.length;
				if (R === n.length && y.indexOf("E") === -1) {
					for (s = n.length - 1; s >= 0; --s) {
						if (n[s] == null || "n?(".indexOf(n[s].t) === -1) continue;
						if (S >= n[s].v.length - 1) {
							S -= n[s].v.length;
							n[s].v = y.substr(S + 1, n[s].v.length);
						} else if (S < 0) n[s].v = "";
						else {
							n[s].v = y.substr(0, S + 1);
							S = -1;
						}
						n[s].t = "t";
						D = s;
					}
					if (S >= 0 && D < n.length) n[D].v = y.substr(0, S + 1) + n[D].v;
				} else if (R !== n.length && y.indexOf("E") === -1) {
					S = y.indexOf(".") - 1;
					for (s = R; s >= 0; --s) {
						if (n[s] == null || "n?(".indexOf(n[s].t) === -1) continue;
						u =
							n[s].v.indexOf(".") > -1 && s === R
								? n[s].v.indexOf(".") - 1
								: n[s].v.length - 1;
						C = n[s].v.substr(u + 1);
						for (; u >= 0; --u) {
							if (
								S >= 0 &&
								(n[s].v.charAt(u) === "0" || n[s].v.charAt(u) === "#")
							)
								C = y.charAt(S--) + C;
						}
						n[s].v = C;
						n[s].t = "t";
						D = s;
					}
					if (S >= 0 && D < n.length) n[D].v = y.substr(0, S + 1) + n[D].v;
					S = y.indexOf(".") + 1;
					for (s = R; s < n.length; ++s) {
						if (n[s] == null || ("n?(".indexOf(n[s].t) === -1 && s !== R))
							continue;
						u =
							n[s].v.indexOf(".") > -1 && s === R ? n[s].v.indexOf(".") + 1 : 0;
						C = n[s].v.substr(0, u);
						for (; u < n[s].v.length; ++u) {
							if (S < y.length) C += y.charAt(S++);
						}
						n[s].v = C;
						n[s].t = "t";
						D = s;
					}
				}
			}
			for (s = 0; s < n.length; ++s)
				if (n[s] != null && "n(?".indexOf(n[s].t) > -1) {
					T = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r;
					n[s].v = x(n[s].t, n[s].v, T);
					n[s].t = "t";
				}
			var O = "";
			for (s = 0; s !== n.length; ++s) if (n[s] != null) O += n[s].v;
			return O;
		}
		e._eval = R;
		var D = /\[[=<>]/;
		var O = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;
		function F(e, r) {
			if (r == null) return false;
			var t = parseFloat(r[2]);
			switch (r[1]) {
				case "=":
					if (e == t) return true;
					break;
				case ">":
					if (e > t) return true;
					break;
				case "<":
					if (e < t) return true;
					break;
				case "<>":
					if (e != t) return true;
					break;
				case ">=":
					if (e >= t) return true;
					break;
				case "<=":
					if (e <= t) return true;
					break;
			}
			return false;
		}
		function P(e, r) {
			var t = y(e);
			var a = t.length,
				n = t[a - 1].indexOf("@");
			if (a < 4 && n > -1) --a;
			if (t.length > 4)
				throw new Error("cannot find right format for |" + t.join("|") + "|");
			if (typeof r !== "number")
				return [4, t.length === 4 || n > -1 ? t[t.length - 1] : "@"];
			switch (t.length) {
				case 1:
					t =
						n > -1
							? ["General", "General", "General", t[0]]
							: [t[0], t[0], t[0], "@"];
					break;
				case 2:
					t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
					break;
				case 3:
					t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
					break;
				case 4:
					break;
			}
			var i = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
			if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1) return [a, i];
			if (t[0].match(D) != null || t[1].match(D) != null) {
				var s = t[0].match(O);
				var f = t[1].match(O);
				return F(r, s)
					? [a, t[0]]
					: F(r, f)
					? [a, t[1]]
					: [a, t[s != null && f != null ? 2 : 1]];
			}
			return [a, i];
		}
		function N(e, r, t) {
			if (t == null) t = {};
			var a = "";
			switch (typeof e) {
				case "string":
					if (e == "m/d/yy" && t.dateNF) a = t.dateNF;
					else a = e;
					break;
				case "number":
					if (e == 14 && t.dateNF) a = t.dateNF;
					else a = (t.table != null ? t.table : v)[e];
					break;
			}
			if (c(a, 0)) return _(r, t);
			if (r instanceof Date) r = E(r, t.date1904);
			var n = P(a, r);
			if (c(n[1])) return _(r, t);
			if (r === true) r = "TRUE";
			else if (r === false) r = "FALSE";
			else if (r === "" || r == null) return "";
			return R(n[1], r, t, n[0]);
		}
		function L(e, r) {
			if (typeof r != "number") {
				r = +r || -1;
				for (var t = 0; t < 392; ++t) {
					if (v[t] == undefined) {
						if (r < 0) r = t;
						continue;
					}
					if (v[t] == e) {
						r = t;
						break;
					}
				}
				if (r < 0) r = 391;
			}
			v[r] = e;
			return r;
		}
		e.load = L;
		e._table = v;
		e.get_table = function H() {
			return v;
		};
		e.load_table = function W(e) {
			for (var r = 0; r != 392; ++r) if (e[r] !== undefined) L(e[r], r);
		};
		e.init_table = d;
		e.format = N;
	};
	D(R);
	var O = {
		"General Number": "General",
		"General Date": R._table[22],
		"Long Date": "dddd, mmmm dd, yyyy",
		"Medium Date": R._table[15],
		"Short Date": R._table[14],
		"Long Time": R._table[19],
		"Medium Time": R._table[18],
		"Short Time": R._table[20],
		Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
		Fixed: R._table[2],
		Standard: R._table[4],
		Percent: R._table[10],
		Scientific: R._table[11],
		"Yes/No": '"Yes";"Yes";"No";@',
		"True/False": '"True";"True";"False";@',
		"On/Off": '"Yes";"Yes";"No";@',
	};
	var F = {
		5: '"$"#,##0_);\\("$"#,##0\\)',
		6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
		7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
		8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
		23: "General",
		24: "General",
		25: "General",
		26: "General",
		27: "m/d/yy",
		28: "m/d/yy",
		29: "m/d/yy",
		30: "m/d/yy",
		31: "m/d/yy",
		32: "h:mm:ss",
		33: "h:mm:ss",
		34: "h:mm:ss",
		35: "h:mm:ss",
		36: "m/d/yy",
		41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
		42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
		43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
		44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
		50: "m/d/yy",
		51: "m/d/yy",
		52: "m/d/yy",
		53: "m/d/yy",
		54: "m/d/yy",
		55: "m/d/yy",
		56: "m/d/yy",
		57: "m/d/yy",
		58: "m/d/yy",
		59: "0",
		60: "0.00",
		61: "#,##0",
		62: "#,##0.00",
		63: '"$"#,##0_);\\("$"#,##0\\)',
		64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
		65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
		66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
		67: "0%",
		68: "0.00%",
		69: "# ?/?",
		70: "# ??/??",
		71: "m/d/yy",
		72: "m/d/yy",
		73: "d-mmm-yy",
		74: "d-mmm",
		75: "mmm-yy",
		76: "h:mm",
		77: "h:mm:ss",
		78: "m/d/yy h:mm",
		79: "mm:ss",
		80: "[h]:mm:ss",
		81: "mmss.0",
	};
	var P = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;
	function N(e) {
		var r = typeof e == "number" ? R._table[e] : e;
		r = r.replace(P, "(\\d+)");
		return new RegExp("^" + r + "$");
	}
	function L(e, r, t) {
		var a = -1,
			n = -1,
			i = -1,
			s = -1,
			f = -1,
			l = -1;
		(r.match(P) || []).forEach(function (e, r) {
			var o = parseInt(t[r + 1], 10);
			switch (e.toLowerCase().charAt(0)) {
				case "y":
					a = o;
					break;
				case "d":
					i = o;
					break;
				case "h":
					s = o;
					break;
				case "s":
					l = o;
					break;
				case "m":
					if (s >= 0) f = o;
					else n = o;
					break;
			}
		});
		if (l >= 0 && f == -1 && n >= 0) {
			f = n;
			n = -1;
		}
		var o =
			("" + (a >= 0 ? a : new Date().getFullYear())).slice(-4) +
			"-" +
			("00" + (n >= 1 ? n : 1)).slice(-2) +
			"-" +
			("00" + (i >= 1 ? i : 1)).slice(-2);
		if (o.length == 7) o = "0" + o;
		if (o.length == 8) o = "20" + o;
		var c =
			("00" + (s >= 0 ? s : 0)).slice(-2) +
			":" +
			("00" + (f >= 0 ? f : 0)).slice(-2) +
			":" +
			("00" + (l >= 0 ? l : 0)).slice(-2);
		if (s == -1 && f == -1 && l == -1) return o;
		if (a == -1 && n == -1 && i == -1) return c;
		return o + "T" + c;
	}
	var M = true;
	var U = (function zm() {
		var e = {};
		e.version = "1.0.8";
		function r(e, r) {
			var t = e.split("/"),
				a = r.split("/");
			for (var n = 0, i = 0, s = Math.min(t.length, a.length); n < s; ++n) {
				if ((i = t[n].length - a[n].length)) return i;
				if (t[n] != a[n]) return t[n] < a[n] ? -1 : 1;
			}
			return t.length - a.length;
		}
		function t(e) {
			if (e.charAt(e.length - 1) == "/")
				return e.slice(0, -1).indexOf("/") === -1 ? e : t(e.slice(0, -1));
			var r = e.lastIndexOf("/");
			return r === -1 ? e : e.slice(0, r + 1);
		}
		function a(e) {
			if (e.charAt(e.length - 1) == "/") return a(e.slice(0, -1));
			var r = e.lastIndexOf("/");
			return r === -1 ? e : e.slice(r + 1);
		}
		var n;
		function i() {
			return n || (n = require("fs"));
		}
		function s(e, r) {
			if (e.length < 512)
				throw new Error("CFB file size " + e.length + " < 512");
			var t = 3;
			var a = 512;
			var n = 0;
			var i = 0;
			var s = 0;
			var u = 0;
			var d = 0;
			var m = [];
			var b = e.slice(0, 512);
			Wr(b, 0);
			var g = f(b);
			t = g[0];
			switch (t) {
				case 3:
					a = 512;
					break;
				case 4:
					a = 4096;
					break;
				default:
					throw new Error("Major Version: Expected 3 or 4 saw " + t);
			}
			if (a !== 512) {
				b = e.slice(0, a);
				Wr(b, 28);
			}
			var w = e.slice(0, a);
			l(b, t);
			var E = b._R(4, "i");
			if (t === 3 && E !== 0)
				throw new Error("# Directory Sectors: Expected 0 saw " + E);
			b.l += 4;
			s = b._R(4, "i");
			b.l += 4;
			b.chk("00100000", "Mini Stream Cutoff Size: ");
			u = b._R(4, "i");
			n = b._R(4, "i");
			d = b._R(4, "i");
			i = b._R(4, "i");
			for (var k = -1, S = 0; S < 109; ++S) {
				k = b._R(4, "i");
				if (k < 0) break;
				m[S] = k;
			}
			var _ = o(e, a);
			h(d, i, _, a, m);
			var C = v(_, s, m, a);
			C[s].name = "!Directory";
			if (n > 0 && u !== x) C[u].name = "!MiniFAT";
			C[m[0]].name = "!FAT";
			C.fat_addrs = m;
			C.ssz = a;
			var B = {},
				T = [],
				y = [],
				I = [];
			p(s, C, _, T, n, B, y, u);
			c(y, I, T);
			T.shift();
			var A = { FileIndex: y, FullPaths: I };
			if (r && r.raw) A.raw = { header: w, sectors: _ };
			return A;
		}
		function f(e) {
			e.chk(R, "Header Signature: ");
			e.chk(O, "CLSID: ");
			var r = e._R(2, "u");
			return [e._R(2, "u"), r];
		}
		function l(e, r) {
			var t = 9;
			e.l += 2;
			switch ((t = e._R(2))) {
				case 9:
					if (r != 3) throw new Error("Sector Shift: Expected 9 saw " + t);
					break;
				case 12:
					if (r != 4) throw new Error("Sector Shift: Expected 12 saw " + t);
					break;
				default:
					throw new Error("Sector Shift: Expected 9 or 12 saw " + t);
			}
			e.chk("0600", "Mini Sector Shift: ");
			e.chk("000000000000", "Reserved: ");
		}
		function o(e, r) {
			var t = Math.ceil(e.length / r) - 1;
			var a = [];
			for (var n = 1; n < t; ++n) a[n - 1] = e.slice(n * r, (n + 1) * r);
			a[t - 1] = e.slice(t * r);
			return a;
		}
		function c(e, r, t) {
			var a = 0,
				n = 0,
				i = 0,
				s = 0,
				f = 0,
				l = t.length;
			var o = [],
				c = [];
			for (; a < l; ++a) {
				o[a] = c[a] = a;
				r[a] = t[a];
			}
			for (; f < c.length; ++f) {
				a = c[f];
				n = e[a].L;
				i = e[a].R;
				s = e[a].C;
				if (o[a] === a) {
					if (n !== -1 && o[n] !== n) o[a] = o[n];
					if (i !== -1 && o[i] !== i) o[a] = o[i];
				}
				if (s !== -1) o[s] = a;
				if (n !== -1) {
					o[n] = o[a];
					if (c.lastIndexOf(n) < f) c.push(n);
				}
				if (i !== -1) {
					o[i] = o[a];
					if (c.lastIndexOf(i) < f) c.push(i);
				}
			}
			for (a = 1; a < l; ++a)
				if (o[a] === a) {
					if (i !== -1 && o[i] !== i) o[a] = o[i];
					else if (n !== -1 && o[n] !== n) o[a] = o[n];
				}
			for (a = 1; a < l; ++a) {
				if (e[a].type === 0) continue;
				f = o[a];
				if (f === 0) r[a] = r[0] + "/" + r[a];
				else
					while (f !== 0 && f !== o[f]) {
						r[a] = r[f] + "/" + r[a];
						f = o[f];
					}
				o[a] = 0;
			}
			r[0] += "/";
			for (a = 1; a < l; ++a) {
				if (e[a].type !== 2) r[a] += "/";
			}
		}
		function u(e, r, t) {
			var a = e.start,
				n = e.size;
			var i = [];
			var s = a;
			while (t && n > 0 && s >= 0) {
				i.push(r.slice(s * T, s * T + T));
				n -= T;
				s = Or(t, s * 4);
			}
			if (i.length === 0) return zr(0);
			return y(i).slice(0, e.size);
		}
		function h(e, r, t, a, n) {
			var i = x;
			if (e === x) {
				if (r !== 0) throw new Error("DIFAT chain shorter than expected");
			} else if (e !== -1) {
				var s = t[e],
					f = (a >>> 2) - 1;
				if (!s) return;
				for (var l = 0; l < f; ++l) {
					if ((i = Or(s, l * 4)) === x) break;
					n.push(i);
				}
				h(Or(s, a - 4), r - 1, t, a, n);
			}
		}
		function d(e, r, t, a, n) {
			var i = [],
				s = [];
			if (!n) n = [];
			var f = a - 1,
				l = 0,
				o = 0;
			for (l = r; l >= 0; ) {
				n[l] = true;
				i[i.length] = l;
				s.push(e[l]);
				var c = t[Math.floor((l * 4) / a)];
				o = (l * 4) & f;
				if (a < 4 + o)
					throw new Error("FAT boundary crossed: " + l + " 4 " + a);
				if (!e[c]) break;
				l = Or(e[c], o);
			}
			return { nodes: i, data: lr([s]) };
		}
		function v(e, r, t, a) {
			var n = e.length,
				i = [];
			var s = [],
				f = [],
				l = [];
			var o = a - 1,
				c = 0,
				u = 0,
				h = 0,
				d = 0;
			for (c = 0; c < n; ++c) {
				f = [];
				h = c + r;
				if (h >= n) h -= n;
				if (s[h]) continue;
				l = [];
				for (u = h; u >= 0; ) {
					s[u] = true;
					f[f.length] = u;
					l.push(e[u]);
					var v = t[Math.floor((u * 4) / a)];
					d = (u * 4) & o;
					if (a < 4 + d)
						throw new Error("FAT boundary crossed: " + u + " 4 " + a);
					if (!e[v]) break;
					u = Or(e[v], d);
				}
				i[h] = { nodes: f, data: lr([l]) };
			}
			return i;
		}
		function p(e, r, t, a, n, i, s, f) {
			var l = 0,
				o = a.length ? 2 : 0;
			var c = r[e].data;
			var h = 0,
				v = 0,
				p;
			for (; h < c.length; h += 128) {
				var b = c.slice(h, h + 128);
				Wr(b, 64);
				v = b._R(2);
				p = cr(b, 0, v - o);
				a.push(p);
				var g = {
					name: p,
					type: b._R(1),
					color: b._R(1),
					L: b._R(4, "i"),
					R: b._R(4, "i"),
					C: b._R(4, "i"),
					clsid: b._R(16),
					state: b._R(4, "i"),
					start: 0,
					size: 0,
				};
				var w = b._R(2) + b._R(2) + b._R(2) + b._R(2);
				if (w !== 0) g.ct = m(b, b.l - 8);
				var E = b._R(2) + b._R(2) + b._R(2) + b._R(2);
				if (E !== 0) g.mt = m(b, b.l - 8);
				g.start = b._R(4, "i");
				g.size = b._R(4, "i");
				if (g.size < 0 && g.start < 0) {
					g.size = g.type = 0;
					g.start = x;
					g.name = "";
				}
				if (g.type === 5) {
					l = g.start;
					if (n > 0 && l !== x) r[l].name = "!StreamData";
				} else if (g.size >= 4096) {
					g.storage = "fat";
					if (r[g.start] === undefined)
						r[g.start] = d(t, g.start, r.fat_addrs, r.ssz);
					r[g.start].name = g.name;
					g.content = r[g.start].data.slice(0, g.size);
				} else {
					g.storage = "minifat";
					if (g.size < 0) g.size = 0;
					else if (l !== x && g.start !== x && r[l]) {
						g.content = u(g, r[l].data, (r[f] || {}).data);
					}
				}
				if (g.content) Wr(g.content, 0);
				i[p] = g;
				s.push(g);
			}
		}
		function m(e, r) {
			return new Date(
				((Dr(e, r + 4) / 1e7) * Math.pow(2, 32) +
					Dr(e, r) / 1e7 -
					11644473600) *
					1e3
			);
		}
		function g(e, r) {
			i();
			return s(n.readFileSync(e), r);
		}
		function w(e, r) {
			switch ((r && r.type) || "base64") {
				case "file":
					return g(e, r);
				case "base64":
					return s(_(b.decode(e)), r);
				case "binary":
					return s(_(e), r);
			}
			return s(e, r);
		}
		function E(e, r) {
			var t = r || {},
				a = t.root || "Root Entry";
			if (!e.FullPaths) e.FullPaths = [];
			if (!e.FileIndex) e.FileIndex = [];
			if (e.FullPaths.length !== e.FileIndex.length)
				throw new Error("inconsistent CFB structure");
			if (e.FullPaths.length === 0) {
				e.FullPaths[0] = a + "/";
				e.FileIndex[0] = { name: a, type: 5 };
			}
			if (t.CLSID) e.FileIndex[0].clsid = t.CLSID;
			k(e);
		}
		function k(e) {
			var r = "Sh33tJ5";
			if (U.find(e, "/" + r)) return;
			var t = zr(4);
			t[0] = 55;
			t[1] = t[3] = 50;
			t[2] = 54;
			e.FileIndex.push({
				name: r,
				type: 2,
				content: t,
				size: 4,
				L: 69,
				R: 69,
				C: 69,
			});
			e.FullPaths.push(e.FullPaths[0] + r);
			S(e);
		}
		function S(e, n) {
			E(e);
			var i = false,
				s = false;
			for (var f = e.FullPaths.length - 1; f >= 0; --f) {
				var l = e.FileIndex[f];
				switch (l.type) {
					case 0:
						if (s) i = true;
						else {
							e.FileIndex.pop();
							e.FullPaths.pop();
						}
						break;
					case 1:
					case 2:
					case 5:
						s = true;
						if (isNaN(l.R * l.L * l.C)) i = true;
						if (l.R > -1 && l.L > -1 && l.R == l.L) i = true;
						break;
					default:
						i = true;
						break;
				}
			}
			if (!i && !n) return;
			var o = new Date(1987, 1, 19),
				c = 0;
			var u = [];
			for (f = 0; f < e.FullPaths.length; ++f) {
				if (e.FileIndex[f].type === 0) continue;
				u.push([e.FullPaths[f], e.FileIndex[f]]);
			}
			for (f = 0; f < u.length; ++f) {
				var h = t(u[f][0]);
				s = false;
				for (c = 0; c < u.length; ++c) if (u[c][0] === h) s = true;
				if (!s)
					u.push([
						h,
						{
							name: a(h).replace("/", ""),
							type: 1,
							clsid: O,
							ct: o,
							mt: o,
							content: null,
						},
					]);
			}
			u.sort(function (e, t) {
				return r(e[0], t[0]);
			});
			e.FullPaths = [];
			e.FileIndex = [];
			for (f = 0; f < u.length; ++f) {
				e.FullPaths[f] = u[f][0];
				e.FileIndex[f] = u[f][1];
			}
			for (f = 0; f < u.length; ++f) {
				var d = e.FileIndex[f];
				var v = e.FullPaths[f];
				d.name = a(v).replace("/", "");
				d.L = d.R = d.C = -(d.color = 1);
				d.size = d.content ? d.content.length : 0;
				d.start = 0;
				d.clsid = d.clsid || O;
				if (f === 0) {
					d.C = u.length > 1 ? 1 : -1;
					d.size = 0;
					d.type = 5;
				} else if (v.slice(-1) == "/") {
					for (c = f + 1; c < u.length; ++c) if (t(e.FullPaths[c]) == v) break;
					d.C = c >= u.length ? -1 : c;
					for (c = f + 1; c < u.length; ++c)
						if (t(e.FullPaths[c]) == t(v)) break;
					d.R = c >= u.length ? -1 : c;
					d.type = 1;
				} else {
					if (t(e.FullPaths[f + 1] || "") == t(v)) d.R = f + 1;
					d.type = 2;
				}
			}
		}
		function C(e, r) {
			var t = r || {};
			S(e);
			var a = (function (e) {
				var r = 0,
					t = 0;
				for (var a = 0; a < e.FileIndex.length; ++a) {
					var n = e.FileIndex[a];
					if (!n.content) continue;
					var i = n.content.length;
					if (i > 0) {
						if (i < 4096) r += (i + 63) >> 6;
						else t += (i + 511) >> 9;
					}
				}
				var s = (e.FullPaths.length + 3) >> 2;
				var f = (r + 7) >> 3;
				var l = (r + 127) >> 7;
				var o = f + t + s + l;
				var c = (o + 127) >> 7;
				var u = c <= 109 ? 0 : Math.ceil((c - 109) / 127);
				while ((o + c + u + 127) >> 7 > c)
					u = ++c <= 109 ? 0 : Math.ceil((c - 109) / 127);
				var h = [1, u, c, l, s, t, r, 0];
				e.FileIndex[0].size = r << 6;
				h[7] =
					(e.FileIndex[0].start = h[0] + h[1] + h[2] + h[3] + h[4] + h[5]) +
					((h[6] + 7) >> 3);
				return h;
			})(e);
			var n = zr(a[7] << 9);
			var i = 0,
				s = 0;
			{
				for (i = 0; i < 8; ++i) n._W(1, D[i]);
				for (i = 0; i < 8; ++i) n._W(2, 0);
				n._W(2, 62);
				n._W(2, 3);
				n._W(2, 65534);
				n._W(2, 9);
				n._W(2, 6);
				for (i = 0; i < 3; ++i) n._W(2, 0);
				n._W(4, 0);
				n._W(4, a[2]);
				n._W(4, a[0] + a[1] + a[2] + a[3] - 1);
				n._W(4, 0);
				n._W(4, 1 << 12);
				n._W(4, a[3] ? a[0] + a[1] + a[2] - 1 : x);
				n._W(4, a[3]);
				n._W(-4, a[1] ? a[0] - 1 : x);
				n._W(4, a[1]);
				for (i = 0; i < 109; ++i) n._W(-4, i < a[2] ? a[1] + i : -1);
			}
			if (a[1]) {
				for (s = 0; s < a[1]; ++s) {
					for (; i < 236 + s * 127; ++i) n._W(-4, i < a[2] ? a[1] + i : -1);
					n._W(-4, s === a[1] - 1 ? x : s + 1);
				}
			}
			var f = function (e) {
				for (s += e; i < s - 1; ++i) n._W(-4, i + 1);
				if (e) {
					++i;
					n._W(-4, x);
				}
			};
			s = i = 0;
			for (s += a[1]; i < s; ++i) n._W(-4, F.DIFSECT);
			for (s += a[2]; i < s; ++i) n._W(-4, F.FATSECT);
			f(a[3]);
			f(a[4]);
			var l = 0,
				o = 0;
			var c = e.FileIndex[0];
			for (; l < e.FileIndex.length; ++l) {
				c = e.FileIndex[l];
				if (!c.content) continue;
				o = c.content.length;
				if (o < 4096) continue;
				c.start = s;
				f((o + 511) >> 9);
			}
			f((a[6] + 7) >> 3);
			while (n.l & 511) n._W(-4, F.ENDOFCHAIN);
			s = i = 0;
			for (l = 0; l < e.FileIndex.length; ++l) {
				c = e.FileIndex[l];
				if (!c.content) continue;
				o = c.content.length;
				if (!o || o >= 4096) continue;
				c.start = s;
				f((o + 63) >> 6);
			}
			while (n.l & 511) n._W(-4, F.ENDOFCHAIN);
			for (i = 0; i < a[4] << 2; ++i) {
				var u = e.FullPaths[i];
				if (!u || u.length === 0) {
					for (l = 0; l < 17; ++l) n._W(4, 0);
					for (l = 0; l < 3; ++l) n._W(4, -1);
					for (l = 0; l < 12; ++l) n._W(4, 0);
					continue;
				}
				c = e.FileIndex[i];
				if (i === 0) c.start = c.size ? c.start - 1 : x;
				var h = (i === 0 && t.root) || c.name;
				o = 2 * (h.length + 1);
				n._W(64, h, "utf16le");
				n._W(2, o);
				n._W(1, c.type);
				n._W(1, c.color);
				n._W(-4, c.L);
				n._W(-4, c.R);
				n._W(-4, c.C);
				if (!c.clsid) for (l = 0; l < 4; ++l) n._W(4, 0);
				else n._W(16, c.clsid, "hex");
				n._W(4, c.state || 0);
				n._W(4, 0);
				n._W(4, 0);
				n._W(4, 0);
				n._W(4, 0);
				n._W(4, c.start);
				n._W(4, c.size);
				n._W(4, 0);
			}
			for (i = 1; i < e.FileIndex.length; ++i) {
				c = e.FileIndex[i];
				if (c.size >= 4096) {
					n.l = (c.start + 1) << 9;
					for (l = 0; l < c.size; ++l) n._W(1, c.content[l]);
					for (; l & 511; ++l) n._W(1, 0);
				}
			}
			for (i = 1; i < e.FileIndex.length; ++i) {
				c = e.FileIndex[i];
				if (c.size > 0 && c.size < 4096) {
					for (l = 0; l < c.size; ++l) n._W(1, c.content[l]);
					for (; l & 63; ++l) n._W(1, 0);
				}
			}
			while (n.l < n.length) n._W(1, 0);
			return n;
		}
		function B(e, r) {
			var t = e.FullPaths.map(function (e) {
				return e.toUpperCase();
			});
			var a = t.map(function (e) {
				var r = e.split("/");
				return r[r.length - (e.slice(-1) == "/" ? 2 : 1)];
			});
			var n = false;
			if (r.charCodeAt(0) === 47) {
				n = true;
				r = t[0].slice(0, -1) + r;
			} else n = r.indexOf("/") !== -1;
			var i = r.toUpperCase();
			var s = n === true ? t.indexOf(i) : a.indexOf(i);
			if (s !== -1) return e.FileIndex[s];
			var f = !i.match(A);
			i = i.replace(I, "");
			if (f) i = i.replace(A, "!");
			for (s = 0; s < t.length; ++s) {
				if ((f ? t[s].replace(A, "!") : t[s]).replace(I, "") == i)
					return e.FileIndex[s];
				if ((f ? a[s].replace(A, "!") : a[s]).replace(I, "") == i)
					return e.FileIndex[s];
			}
			return null;
		}
		var T = 64;
		var x = -2;
		var R = "d0cf11e0a1b11ae1";
		var D = [208, 207, 17, 224, 161, 177, 26, 225];
		var O = "00000000000000000000000000000000";
		var F = {
			MAXREGSECT: -6,
			DIFSECT: -4,
			FATSECT: -3,
			ENDOFCHAIN: x,
			FREESECT: -1,
			HEADER_SIGNATURE: R,
			HEADER_MINOR_VERSION: "3e00",
			MAXREGSID: -6,
			NOSTREAM: -1,
			HEADER_CLSID: O,
			EntryTypes: [
				"unknown",
				"storage",
				"stream",
				"lockbytes",
				"property",
				"root",
			],
		};
		function P(e, r, t) {
			i();
			var a = C(e, t);
			n.writeFileSync(r, a);
		}
		function N(e) {
			var r = new Array(e.length);
			for (var t = 0; t < e.length; ++t) r[t] = String.fromCharCode(e[t]);
			return r.join("");
		}
		function L(e, r) {
			var t = C(e, r);
			switch (r && r.type) {
				case "file":
					i();
					n.writeFileSync(r.filename, t);
					return t;
				case "binary":
					return N(t);
				case "base64":
					return b.encode(N(t));
			}
			return t;
		}
		function M(e) {
			var r = {};
			E(r, e);
			return r;
		}
		function H(e, r, t, n) {
			var i = n && n.unsafe;
			if (!i) E(e);
			var s = !i && U.find(e, r);
			if (!s) {
				var f = e.FullPaths[0];
				if (r.slice(0, f.length) == f) f = r;
				else {
					if (f.slice(-1) != "/") f += "/";
					f = (f + r).replace("//", "/");
				}
				s = { name: a(r), type: 2 };
				e.FileIndex.push(s);
				e.FullPaths.push(f);
				if (!i) U.utils.cfb_gc(e);
			}
			s.content = t;
			s.size = t ? t.length : 0;
			if (n) {
				if (n.CLSID) s.clsid = n.CLSID;
			}
			return s;
		}
		function W(e, r) {
			E(e);
			var t = U.find(e, r);
			if (t)
				for (var a = 0; a < e.FileIndex.length; ++a)
					if (e.FileIndex[a] == t) {
						e.FileIndex.splice(a, 1);
						e.FullPaths.splice(a, 1);
						return true;
					}
			return false;
		}
		function V(e, r, t) {
			E(e);
			var n = U.find(e, r);
			if (n)
				for (var i = 0; i < e.FileIndex.length; ++i)
					if (e.FileIndex[i] == n) {
						e.FileIndex[i].name = a(t);
						e.FullPaths[i] = t;
						return true;
					}
			return false;
		}
		function z(e) {
			S(e, true);
		}
		e.find = B;
		e.read = w;
		e.parse = s;
		e.write = L;
		e.writeFile = P;
		e.utils = {
			cfb_new: M,
			cfb_add: H,
			cfb_del: W,
			cfb_mov: V,
			cfb_gc: z,
			ReadShift: Pr,
			CheckField: Hr,
			prep_blob: Wr,
			bconcat: y,
			consts: F,
		};
		return e;
	})();
	if (
		typeof require !== "undefined" &&
		typeof module !== "undefined" &&
		typeof M === "undefined"
	) {
		module.exports = U;
	}
	var H;
	if (typeof require !== "undefined")
		try {
			H = require("fs");
		} catch (k) {}
	function W(e) {
		if (typeof e === "string") return C(e);
		if (Array.isArray(e)) return T(e);
		return e;
	}
	function V(e, r, t) {
		if (typeof H !== "undefined" && H.writeFileSync)
			return t ? H.writeFileSync(e, r, t) : H.writeFileSync(e, r);
		var a = t == "utf8" ? Ve(r) : r;
		if (typeof IE_SaveFile !== "undefined") return IE_SaveFile(a, e);
		if (typeof Blob !== "undefined") {
			var n = new Blob([W(a)], { type: "application/octet-stream" });
			if (typeof navigator !== "undefined" && navigator.msSaveBlob)
				return navigator.msSaveBlob(n, e);
			if (typeof saveAs !== "undefined") return saveAs(n, e);
			if (
				typeof URL !== "undefined" &&
				typeof document !== "undefined" &&
				document.createElement &&
				URL.createObjectURL
			) {
				var i = URL.createObjectURL(n);
				if (
					typeof chrome === "object" &&
					typeof (chrome.downloads || {}).download == "function"
				) {
					if (URL.revokeObjectURL && typeof setTimeout !== "undefined")
						setTimeout(function () {
							URL.revokeObjectURL(i);
						}, 6e4);
					return chrome.downloads.download({
						url: i,
						filename: e,
						saveAs: true,
					});
				}
				var s = document.createElement("a");
				if (s.download != null) {
					s.download = e;
					s.href = i;
					document.body.appendChild(s);
					s.click();
					document.body.removeChild(s);
					if (URL.revokeObjectURL && typeof setTimeout !== "undefined")
						setTimeout(function () {
							URL.revokeObjectURL(i);
						}, 6e4);
					return i;
				}
			}
		}
		if (
			typeof $ !== "undefined" &&
			typeof File !== "undefined" &&
			typeof Folder !== "undefined"
		)
			try {
				var f = File(e);
				f.open("w");
				f.encoding = "binary";
				if (Array.isArray(r)) r = B(r);
				f.write(r);
				f.close();
				return r;
			} catch (l) {
				if (!l.message || !l.message.match(/onstruct/)) throw l;
			}
		throw new Error("cannot save file " + e);
	}
	function z(e) {
		if (typeof H !== "undefined") return H.readFileSync(e);
		if (
			typeof $ !== "undefined" &&
			typeof File !== "undefined" &&
			typeof Folder !== "undefined"
		)
			try {
				var r = File(e);
				r.open("r");
				r.encoding = "binary";
				var t = r.read();
				r.close();
				return t;
			} catch (a) {
				if (!a.message || !a.message.match(/onstruct/)) throw a;
			}
		throw new Error("Cannot access file " + e);
	}
	function X(e) {
		var r = Object.keys(e),
			t = [];
		for (var a = 0; a < r.length; ++a) if (e.hasOwnProperty(r[a])) t.push(r[a]);
		return t;
	}
	function G(e, r) {
		var t = [],
			a = X(e);
		for (var n = 0; n !== a.length; ++n)
			if (t[e[a[n]][r]] == null) t[e[a[n]][r]] = a[n];
		return t;
	}
	function j(e) {
		var r = [],
			t = X(e);
		for (var a = 0; a !== t.length; ++a) r[e[t[a]]] = t[a];
		return r;
	}
	function K(e) {
		var r = [],
			t = X(e);
		for (var a = 0; a !== t.length; ++a) r[e[t[a]]] = parseInt(t[a], 10);
		return r;
	}
	function Y(e) {
		var r = [],
			t = X(e);
		for (var a = 0; a !== t.length; ++a) {
			if (r[e[t[a]]] == null) r[e[t[a]]] = [];
			r[e[t[a]]].push(t[a]);
		}
		return r;
	}
	var Z = new Date(1899, 11, 30, 0, 0, 0);
	var Q =
		Z.getTime() +
		(new Date().getTimezoneOffset() - Z.getTimezoneOffset()) * 6e4;
	function J(e, r) {
		var t = e.getTime();
		if (r) t -= 1462 * 24 * 60 * 60 * 1e3;
		return (t - Q) / (24 * 60 * 60 * 1e3);
	}
	function q(e) {
		var r = new Date();
		r.setTime(e * 24 * 60 * 60 * 1e3 + Q);
		return r;
	}
	function ee(e) {
		var r = 0,
			t = 0,
			a = false;
		var n = e.match(
			/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/
		);
		if (!n) throw new Error("|" + e + "| is not an ISO8601 Duration");
		for (var i = 1; i != n.length; ++i) {
			if (!n[i]) continue;
			t = 1;
			if (i > 3) a = true;
			switch (n[i].slice(n[i].length - 1)) {
				case "Y":
					throw new Error(
						"Unsupported ISO Duration Field: " + n[i].slice(n[i].length - 1)
					);
				case "D":
					t *= 24;
				case "H":
					t *= 60;
				case "M":
					if (!a) throw new Error("Unsupported ISO Duration Field: M");
					else t *= 60;
				case "S":
					break;
			}
			r += t * parseInt(n[i], 10);
		}
		return r;
	}
	var re = new Date("2017-02-19T19:06:09.000Z");
	if (isNaN(re.getFullYear())) re = new Date("2/19/17");
	var te = re.getFullYear() == 2017;
	function ae(e, r) {
		var t = new Date(e);
		if (te) {
			if (r > 0) t.setTime(t.getTime() + t.getTimezoneOffset() * 60 * 1e3);
			else if (r < 0) t.setTime(t.getTime() - t.getTimezoneOffset() * 60 * 1e3);
			return t;
		}
		if (e instanceof Date) return e;
		if (re.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
			var a = t.getFullYear();
			if (e.indexOf("" + a) > -1) return t;
			t.setFullYear(t.getFullYear() + 100);
			return t;
		}
		var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"];
		var i = new Date(
			+n[0],
			+n[1] - 1,
			+n[2],
			+n[3] || 0,
			+n[4] || 0,
			+n[5] || 0
		);
		if (e.indexOf("Z") > -1)
			i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3);
		return i;
	}
	function ne(e) {
		var r = "";
		for (var t = 0; t != e.length; ++t) r += String.fromCharCode(e[t]);
		return r;
	}
	function ie(e) {
		if (typeof JSON != "undefined" && !Array.isArray(e))
			return JSON.parse(JSON.stringify(e));
		if (typeof e != "object" || e == null) return e;
		if (e instanceof Date) return new Date(e.getTime());
		var r = {};
		for (var t in e) if (e.hasOwnProperty(t)) r[t] = ie(e[t]);
		return r;
	}
	function se(e, r) {
		var t = "";
		while (t.length < r) t += e;
		return t;
	}
	function fe(e) {
		var r = Number(e);
		if (!isNaN(r)) return r;
		var t = 1;
		var a = e
			.replace(/([\d]),([\d])/g, "$1$2")
			.replace(/[$]/g, "")
			.replace(/[%]/g, function () {
				t *= 100;
				return "";
			});
		if (!isNaN((r = Number(a)))) return r / t;
		a = a.replace(/[(](.*)[)]/, function (e, r) {
			t = -t;
			return r;
		});
		if (!isNaN((r = Number(a)))) return r / t;
		return r;
	}
	function le(e) {
		var r = new Date(e),
			t = new Date(NaN);
		var a = r.getYear(),
			n = r.getMonth(),
			i = r.getDate();
		if (isNaN(i)) return t;
		if (a < 0 || a > 8099) return t;
		if ((n > 0 || i > 1) && a != 101) return r;
		if (
			e.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)
		)
			return r;
		if (e.match(/[^-0-9:,\/\\]/)) return t;
		return r;
	}
	var oe = "abacaba".split(/(:?b)/i).length == 5;
	function ce(e, r, t) {
		if (oe || typeof r == "string") return e.split(r);
		var a = e.split(r),
			n = [a[0]];
		for (var i = 1; i < a.length; ++i) {
			n.push(t);
			n.push(a[i]);
		}
		return n;
	}
	function ue(e) {
		if (!e) return null;
		if (e.data) return d(e.data);
		if (e.asNodeBuffer && g) return d(e.asNodeBuffer().toString("binary"));
		if (e.asBinary) return d(e.asBinary());
		if (e._data && e._data.getContent)
			return d(ne(Array.prototype.slice.call(e._data.getContent(), 0)));
		return null;
	}
	function he(e) {
		if (!e) return null;
		if (e.data) return c(e.data);
		if (e.asNodeBuffer && g) return e.asNodeBuffer();
		if (e._data && e._data.getContent) {
			var r = e._data.getContent();
			if (typeof r == "string") return c(r);
			return Array.prototype.slice.call(r);
		}
		return null;
	}
	function de(e) {
		return e && e.name.slice(-4) === ".bin" ? he(e) : ue(e);
	}
	function ve(e, r) {
		var t = X(e.files);
		var a = r.toLowerCase(),
			n = a.replace(/\//g, "\\");
		for (var i = 0; i < t.length; ++i) {
			var s = t[i].toLowerCase();
			if (a == s || n == s) return e.files[t[i]];
		}
		return null;
	}
	function pe(e, r) {
		var t = ve(e, r);
		if (t == null) throw new Error("Cannot find file " + r + " in zip");
		return t;
	}
	function me(e, r, t) {
		if (!t) return de(pe(e, r));
		if (!r) return null;
		try {
			return me(e, r);
		} catch (a) {
			return null;
		}
	}
	function be(e, r, t) {
		if (!t) return ue(pe(e, r));
		if (!r) return null;
		try {
			return be(e, r);
		} catch (a) {
			return null;
		}
	}
	function ge(e) {
		var r = X(e.files),
			t = [];
		for (var a = 0; a < r.length; ++a) if (r[a].slice(-1) != "/") t.push(r[a]);
		return t.sort();
	}
	var we;
	if (typeof JSZipSync !== "undefined") we = JSZipSync;
	if (typeof exports !== "undefined") {
		if (typeof module !== "undefined" && module.exports) {
			if (typeof we === "undefined") we = undefined;
		}
	}
	function Ee(e, r) {
		var t = r.split("/");
		if (r.slice(-1) != "/") t.pop();
		var a = e.split("/");
		while (a.length !== 0) {
			var n = a.shift();
			if (n === "..") t.pop();
			else if (n !== ".") t.push(n);
		}
		return t.join("/");
	}
	var ke = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
	var Se =
		/([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
	var _e =
		/<[\/\?]?[a-zA-Z0-9:]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s?[\/\?]?>/g;
	if (!ke.match(_e)) _e = /<[^>]*>/g;
	var Ce = /<\w*:/,
		Be = /<(\/?)\w+:/;
	function Te(e, r) {
		var t = {};
		var a = 0,
			n = 0;
		for (; a !== e.length; ++a)
			if ((n = e.charCodeAt(a)) === 32 || n === 10 || n === 13) break;
		if (!r) t[0] = e.slice(0, a);
		if (a === e.length) return t;
		var i = e.match(Se),
			s = 0,
			f = "",
			l = 0,
			o = "",
			c = "",
			u = 1;
		if (i)
			for (l = 0; l != i.length; ++l) {
				c = i[l];
				for (n = 0; n != c.length; ++n) if (c.charCodeAt(n) === 61) break;
				o = c.slice(0, n).trim();
				while (c.charCodeAt(n + 1) == 32) ++n;
				u = (a = c.charCodeAt(n + 1)) == 34 || a == 39 ? 1 : 0;
				f = c.slice(n + 1 + u, c.length - u);
				for (s = 0; s != o.length; ++s) if (o.charCodeAt(s) === 58) break;
				if (s === o.length) {
					if (o.indexOf("_") > 0) o = o.slice(0, o.indexOf("_"));
					t[o] = f;
					t[o.toLowerCase()] = f;
				} else {
					var h =
						(s === 5 && o.slice(0, 5) === "xmlns" ? "xmlns" : "") +
						o.slice(s + 1);
					if (t[h] && o.slice(s - 3, s) == "ext") continue;
					t[h] = f;
					t[h.toLowerCase()] = f;
				}
			}
		return t;
	}
	function xe(e) {
		return e.replace(Be, "<$1");
	}
	var ye = {
		"&quot;": '"',
		"&apos;": "'",
		"&gt;": ">",
		"&lt;": "<",
		"&amp;": "&",
	};
	var Ie = j(ye);
	var Ae = (function () {
		var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/g,
			r = /_x([\da-fA-F]{4})_/g;
		return function t(a) {
			var n = a + "",
				i = n.indexOf("<![CDATA[");
			if (i == -1)
				return n
					.replace(e, function (e, r) {
						return (
							ye[e] ||
							String.fromCharCode(parseInt(r, e.indexOf("x") > -1 ? 16 : 10)) ||
							e
						);
					})
					.replace(r, function (e, r) {
						return String.fromCharCode(parseInt(r, 16));
					});
			var s = n.indexOf("]]>");
			return t(n.slice(0, i)) + n.slice(i + 9, s) + t(n.slice(s + 3));
		};
	})();
	var Re = /[&<>'"]/g,
		De = /[\u0000-\u0008\u000b-\u001f]/g;
	function Oe(e) {
		var r = e + "";
		return r
			.replace(Re, function (e) {
				return Ie[e];
			})
			.replace(De, function (e) {
				return "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_";
			});
	}
	function Fe(e) {
		return Oe(e).replace(/ /g, "_x0020_");
	}
	var Pe = /[\u0000-\u001f]/g;
	function Ne(e) {
		var r = e + "";
		return r
			.replace(Re, function (e) {
				return Ie[e];
			})
			.replace(Pe, function (e) {
				return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";";
			});
	}
	function Le(e) {
		var r = e + "";
		return r
			.replace(Re, function (e) {
				return Ie[e];
			})
			.replace(Pe, function (e) {
				return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";";
			});
	}
	var Me = (function () {
		var e = /&#(\d+);/g;
		function r(e, r) {
			return String.fromCharCode(parseInt(r, 10));
		}
		return function t(a) {
			return a.replace(e, r);
		};
	})();
	var Ue = (function () {
		return function e(r) {
			return r.replace(/(\r\n|[\r\n])/g, "&#10;");
		};
	})();
	function He(e) {
		switch (e) {
			case 1:
			case true:
			case "1":
			case "true":
			case "TRUE":
				return true;
			default:
				return false;
		}
	}
	var We = function Xm(e) {
		var r = "",
			t = 0,
			a = 0,
			n = 0,
			i = 0,
			s = 0,
			f = 0;
		while (t < e.length) {
			a = e.charCodeAt(t++);
			if (a < 128) {
				r += String.fromCharCode(a);
				continue;
			}
			n = e.charCodeAt(t++);
			if (a > 191 && a < 224) {
				s = (a & 31) << 6;
				s |= n & 63;
				r += String.fromCharCode(s);
				continue;
			}
			i = e.charCodeAt(t++);
			if (a < 240) {
				r += String.fromCharCode(((a & 15) << 12) | ((n & 63) << 6) | (i & 63));
				continue;
			}
			s = e.charCodeAt(t++);
			f =
				(((a & 7) << 18) | ((n & 63) << 12) | ((i & 63) << 6) | (s & 63)) -
				65536;
			r += String.fromCharCode(55296 + ((f >>> 10) & 1023));
			r += String.fromCharCode(56320 + (f & 1023));
		}
		return r;
	};
	var Ve = function (e) {
		var r = [],
			t = 0,
			a = 0,
			n = 0;
		while (t < e.length) {
			a = e.charCodeAt(t++);
			switch (true) {
				case a < 128:
					r.push(String.fromCharCode(a));
					break;
				case a < 2048:
					r.push(String.fromCharCode(192 + (a >> 6)));
					r.push(String.fromCharCode(128 + (a & 63)));
					break;
				case a >= 55296 && a < 57344:
					a -= 55296;
					n = e.charCodeAt(t++) - 56320 + (a << 10);
					r.push(String.fromCharCode(240 + ((n >> 18) & 7)));
					r.push(String.fromCharCode(144 + ((n >> 12) & 63)));
					r.push(String.fromCharCode(128 + ((n >> 6) & 63)));
					r.push(String.fromCharCode(128 + (n & 63)));
					break;
				default:
					r.push(String.fromCharCode(224 + (a >> 12)));
					r.push(String.fromCharCode(128 + ((a >> 6) & 63)));
					r.push(String.fromCharCode(128 + (a & 63)));
			}
		}
		return r.join("");
	};
	if (g) {
		var ze = function Gm(e) {
			var r = Buffer.alloc(2 * e.length),
				t,
				a,
				n = 1,
				i = 0,
				s = 0,
				f;
			for (a = 0; a < e.length; a += n) {
				n = 1;
				if ((f = e.charCodeAt(a)) < 128) t = f;
				else if (f < 224) {
					t = (f & 31) * 64 + (e.charCodeAt(a + 1) & 63);
					n = 2;
				} else if (f < 240) {
					t =
						(f & 15) * 4096 +
						(e.charCodeAt(a + 1) & 63) * 64 +
						(e.charCodeAt(a + 2) & 63);
					n = 3;
				} else {
					n = 4;
					t =
						(f & 7) * 262144 +
						(e.charCodeAt(a + 1) & 63) * 4096 +
						(e.charCodeAt(a + 2) & 63) * 64 +
						(e.charCodeAt(a + 3) & 63);
					t -= 65536;
					s = 55296 + ((t >>> 10) & 1023);
					t = 56320 + (t & 1023);
				}
				if (s !== 0) {
					r[i++] = s & 255;
					r[i++] = s >>> 8;
					s = 0;
				}
				r[i++] = t % 256;
				r[i++] = t >>> 8;
			}
			return r.slice(0, i).toString("ucs2");
		};
		var Xe = "foo bar bazâð£";
		if (We(Xe) == ze(Xe)) We = ze;
		var Ge = function jm(e) {
			return w(e, "binary").toString("utf8");
		};
		if (We(Xe) == Ge(Xe)) We = Ge;
		Ve = function (e) {
			return w(e, "utf8").toString("binary");
		};
	}
	var je = (function () {
		var e = {};
		return function r(t, a) {
			var n = t + "|" + (a || "");
			if (e[n]) return e[n];
			return (e[n] = new RegExp(
				"<(?:\\w+:)?" +
					t +
					'(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' +
					t +
					">",
				a || ""
			));
		};
	})();
	var Ke = (function () {
		var e = [
			["nbsp", " "],
			["middot", "·"],
			["quot", '"'],
			["apos", "'"],
			["gt", ">"],
			["lt", "<"],
			["amp", "&"],
		].map(function (e) {
			return [new RegExp("&" + e[0] + ";", "g"), e[1]];
		});
		return function r(t) {
			var a = t
				.replace(/^[\t\n\r ]+/, "")
				.replace(/[\t\n\r ]+$/, "")
				.replace(/[\t\n\r ]+/g, " ")
				.replace(/<\s*[bB][rR]\s*\/?>/g, "\n")
				.replace(/<[^>]*>/g, "");
			for (var n = 0; n < e.length; ++n) a = a.replace(e[n][0], e[n][1]);
			return a;
		};
	})();
	var Ye = (function () {
		var e = {};
		return function r(t) {
			if (e[t] !== undefined) return e[t];
			return (e[t] = new RegExp(
				"<(?:vt:)?" + t + ">([\\s\\S]*?)</(?:vt:)?" + t + ">",
				"g"
			));
		};
	})();
	var $e = /<\/?(?:vt:)?variant>/g,
		Ze = /<(?:vt:)([^>]*)>([\s\S]*)</;
	function Qe(e, r) {
		var t = Te(e);
		var a = e.match(Ye(t.baseType)) || [];
		var n = [];
		if (a.length != t.size) {
			if (r.WTF)
				throw new Error(
					"unexpected vector length " + a.length + " != " + t.size
				);
			return n;
		}
		a.forEach(function (e) {
			var r = e.replace($e, "").match(Ze);
			if (r) n.push({ v: We(r[2]), t: r[1] });
		});
		return n;
	}
	var Je = /(^\s|\s$|\n)/;
	function qe(e, r) {
		return (
			"<" +
			e +
			(r.match(Je) ? ' xml:space="preserve"' : "") +
			">" +
			r +
			"</" +
			e +
			">"
		);
	}
	function er(e) {
		return X(e)
			.map(function (r) {
				return " " + r + '="' + e[r] + '"';
			})
			.join("");
	}
	function rr(e, r, t) {
		return (
			"<" +
			e +
			(t != null ? er(t) : "") +
			(r != null
				? (r.match(Je) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e
				: "/") +
			">"
		);
	}
	function tr(e, r) {
		try {
			return e.toISOString().replace(/\.\d*/, "");
		} catch (t) {
			if (r) throw t;
		}
		return "";
	}
	function ar(e) {
		switch (typeof e) {
			case "string":
				return rr("vt:lpwstr", e);
			case "number":
				return rr((e | 0) == e ? "vt:i4" : "vt:r8", String(e));
			case "boolean":
				return rr("vt:bool", e ? "true" : "false");
		}
		if (e instanceof Date) return rr("vt:filetime", tr(e));
		throw new Error("Unable to serialize " + e);
	}
	var nr = {
		dc: "http://purl.org/dc/elements/1.1/",
		dcterms: "http://purl.org/dc/terms/",
		dcmitype: "http://purl.org/dc/dcmitype/",
		mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
		r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
		sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
		vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
		xsi: "http://www.w3.org/2001/XMLSchema-instance",
		xsd: "http://www.w3.org/2001/XMLSchema",
	};
	nr.main = [
		"http://schemas.openxmlformats.org/spreadsheetml/2006/main",
		"http://purl.oclc.org/ooxml/spreadsheetml/main",
		"http://schemas.microsoft.com/office/excel/2006/main",
		"http://schemas.microsoft.com/office/excel/2006/2",
	];
	var ir = {
		o: "urn:schemas-microsoft-com:office:office",
		x: "urn:schemas-microsoft-com:office:excel",
		ss: "urn:schemas-microsoft-com:office:spreadsheet",
		dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
		mv: "http://macVmlSchemaUri",
		v: "urn:schemas-microsoft-com:vml",
		html: "http://www.w3.org/TR/REC-html40",
	};
	function sr(e, r) {
		var t = 1 - 2 * (e[r + 7] >>> 7);
		var a = ((e[r + 7] & 127) << 4) + ((e[r + 6] >>> 4) & 15);
		var n = e[r + 6] & 15;
		for (var i = 5; i >= 0; --i) n = n * 256 + e[r + i];
		if (a == 2047) return n == 0 ? t * Infinity : NaN;
		if (a == 0) a = -1022;
		else {
			a -= 1023;
			n += Math.pow(2, 52);
		}
		return t * Math.pow(2, a - 52) * n;
	}
	function fr(e, r, t) {
		var a = (r < 0 || 1 / r == -Infinity ? 1 : 0) << 7,
			n = 0,
			i = 0;
		var s = a ? -r : r;
		if (!isFinite(s)) {
			n = 2047;
			i = isNaN(r) ? 26985 : 0;
		} else if (s == 0) n = i = 0;
		else {
			n = Math.floor(Math.log(s) / Math.LN2);
			i = s * Math.pow(2, 52 - n);
			if (n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52))) {
				n = -1022;
			} else {
				i -= Math.pow(2, 52);
				n += 1023;
			}
		}
		for (var f = 0; f <= 5; ++f, i /= 256) e[t + f] = i & 255;
		e[t + 6] = ((n & 15) << 4) | (i & 15);
		e[t + 7] = (n >> 4) | a;
	}
	var lr = function (e) {
		var r = [],
			t = 10240;
		for (var a = 0; a < e[0].length; ++a)
			if (e[0][a])
				for (var n = 0, i = e[0][a].length; n < i; n += t)
					r.push.apply(r, e[0][a].slice(n, n + t));
		return r;
	};
	var or = lr;
	var cr = function (e, r, t) {
		var a = [];
		for (var n = r; n < t; n += 2) a.push(String.fromCharCode(Ar(e, n)));
		return a.join("").replace(I, "");
	};
	var ur = cr;
	var hr = function (e, r, t) {
		var a = [];
		for (var n = r; n < r + t; ++n) a.push(("0" + e[n].toString(16)).slice(-2));
		return a.join("");
	};
	var dr = hr;
	var vr = function (e, r, t) {
		var a = [];
		for (var n = r; n < t; n++) a.push(String.fromCharCode(Ir(e, n)));
		return a.join("");
	};
	var pr = vr;
	var mr = function (e, r) {
		var t = Dr(e, r);
		return t > 0 ? vr(e, r + 4, r + 4 + t - 1) : "";
	};
	var br = mr;
	var gr = function (e, r) {
		var t = Dr(e, r);
		return t > 0 ? vr(e, r + 4, r + 4 + t - 1) : "";
	};
	var wr = gr;
	var Er = function (e, r) {
		var t = 2 * Dr(e, r);
		return t > 0 ? vr(e, r + 4, r + 4 + t - 1) : "";
	};
	var kr = Er;
	var Sr, _r;
	Sr = _r = function Km(e, r) {
		var t = Dr(e, r);
		return t > 0 ? cr(e, r + 4, r + 4 + t) : "";
	};
	var Cr = function (e, r) {
		var t = Dr(e, r);
		return t > 0 ? vr(e, r + 4, r + 4 + t) : "";
	};
	var Br = Cr;
	var Tr, xr;
	Tr = xr = function (e, r) {
		return sr(e, r);
	};
	var yr = function Ym(e) {
		return Array.isArray(e);
	};
	if (g) {
		cr = function (e, r, t) {
			if (!Buffer.isBuffer(e)) return ur(e, r, t);
			return e.toString("utf16le", r, t).replace(I, "");
		};
		hr = function (e, r, t) {
			return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : dr(e, r, t);
		};
		mr = function $m(e, r) {
			if (!Buffer.isBuffer(e)) return br(e, r);
			var t = e.readUInt32LE(r);
			return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
		};
		gr = function Zm(e, r) {
			if (!Buffer.isBuffer(e)) return wr(e, r);
			var t = e.readUInt32LE(r);
			return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
		};
		Er = function Qm(e, r) {
			if (!Buffer.isBuffer(e)) return kr(e, r);
			var t = 2 * e.readUInt32LE(r);
			return e.toString("utf16le", r + 4, r + 4 + t - 1);
		};
		Sr = function Jm(e, r) {
			if (!Buffer.isBuffer(e)) return _r(e, r);
			var t = e.readUInt32LE(r);
			return e.toString("utf16le", r + 4, r + 4 + t);
		};
		Cr = function qm(e, r) {
			if (!Buffer.isBuffer(e)) return Br(e, r);
			var t = e.readUInt32LE(r);
			return e.toString("utf8", r + 4, r + 4 + t);
		};
		vr = function eb(e, r, t) {
			return Buffer.isBuffer(e) ? e.toString("utf8", r, t) : pr(e, r, t);
		};
		lr = function (e) {
			return e[0].length > 0 && Buffer.isBuffer(e[0][0])
				? Buffer.concat(e[0])
				: or(e);
		};
		y = function (e) {
			return Buffer.isBuffer(e[0]) ? Buffer.concat(e) : [].concat.apply([], e);
		};
		Tr = function rb(e, r) {
			if (Buffer.isBuffer(e)) return e.readDoubleLE(r);
			return xr(e, r);
		};
		yr = function tb(e) {
			return Buffer.isBuffer(e) || Array.isArray(e);
		};
	}
	if (typeof cptable !== "undefined") {
		cr = function (e, r, t) {
			return cptable.utils.decode(1200, e.slice(r, t)).replace(I, "");
		};
		vr = function (e, r, t) {
			return cptable.utils.decode(65001, e.slice(r, t));
		};
		mr = function (e, r) {
			var a = Dr(e, r);
			return a > 0
				? cptable.utils.decode(t, e.slice(r + 4, r + 4 + a - 1))
				: "";
		};
		gr = function (e, t) {
			var a = Dr(e, t);
			return a > 0
				? cptable.utils.decode(r, e.slice(t + 4, t + 4 + a - 1))
				: "";
		};
		Er = function (e, r) {
			var t = 2 * Dr(e, r);
			return t > 0
				? cptable.utils.decode(1200, e.slice(r + 4, r + 4 + t - 1))
				: "";
		};
		Sr = function (e, r) {
			var t = Dr(e, r);
			return t > 0 ? cptable.utils.decode(1200, e.slice(r + 4, r + 4 + t)) : "";
		};
		Cr = function (e, r) {
			var t = Dr(e, r);
			return t > 0
				? cptable.utils.decode(65001, e.slice(r + 4, r + 4 + t))
				: "";
		};
	}
	var Ir = function (e, r) {
		return e[r];
	};
	var Ar = function (e, r) {
		return e[r + 1] * (1 << 8) + e[r];
	};
	var Rr = function (e, r) {
		var t = e[r + 1] * (1 << 8) + e[r];
		return t < 32768 ? t : (65535 - t + 1) * -1;
	};
	var Dr = function (e, r) {
		return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
	};
	var Or = function (e, r) {
		return (e[r + 3] << 24) | (e[r + 2] << 16) | (e[r + 1] << 8) | e[r];
	};
	var Fr = function (e, r) {
		return (e[r] << 24) | (e[r + 1] << 16) | (e[r + 2] << 8) | e[r + 3];
	};
	function Pr(e, t) {
		var a = "",
			n,
			i,
			s = [],
			f,
			l,
			o,
			c;
		switch (t) {
			case "dbcs":
				c = this.l;
				if (g && Buffer.isBuffer(this))
					a = this.slice(this.l, this.l + 2 * e).toString("utf16le");
				else
					for (o = 0; o < e; ++o) {
						a += String.fromCharCode(Ar(this, c));
						c += 2;
					}
				e *= 2;
				break;
			case "utf8":
				a = vr(this, this.l, this.l + e);
				break;
			case "utf16le":
				e *= 2;
				a = cr(this, this.l, this.l + e);
				break;
			case "wstr":
				if (typeof cptable !== "undefined")
					a = cptable.utils.decode(r, this.slice(this.l, this.l + 2 * e));
				else return Pr.call(this, e, "dbcs");
				e = 2 * e;
				break;
			case "lpstr-ansi":
				a = mr(this, this.l);
				e = 4 + Dr(this, this.l);
				break;
			case "lpstr-cp":
				a = gr(this, this.l);
				e = 4 + Dr(this, this.l);
				break;
			case "lpwstr":
				a = Er(this, this.l);
				e = 4 + 2 * Dr(this, this.l);
				break;
			case "lpp4":
				e = 4 + Dr(this, this.l);
				a = Sr(this, this.l);
				if (e & 2) e += 2;
				break;
			case "8lpp4":
				e = 4 + Dr(this, this.l);
				a = Cr(this, this.l);
				if (e & 3) e += 4 - (e & 3);
				break;
			case "cstr":
				e = 0;
				a = "";
				while ((f = Ir(this, this.l + e++)) !== 0) s.push(v(f));
				a = s.join("");
				break;
			case "_wstr":
				e = 0;
				a = "";
				while ((f = Ar(this, this.l + e)) !== 0) {
					s.push(v(f));
					e += 2;
				}
				e += 2;
				a = s.join("");
				break;
			case "dbcs-cont":
				a = "";
				c = this.l;
				for (o = 0; o < e; ++o) {
					if (this.lens && this.lens.indexOf(c) !== -1) {
						f = Ir(this, c);
						this.l = c + 1;
						l = Pr.call(this, e - o, f ? "dbcs-cont" : "sbcs-cont");
						return s.join("") + l;
					}
					s.push(v(Ar(this, c)));
					c += 2;
				}
				a = s.join("");
				e *= 2;
				break;
			case "cpstr":
				if (typeof cptable !== "undefined") {
					a = cptable.utils.decode(r, this.slice(this.l, this.l + e));
					break;
				}
			case "sbcs-cont":
				a = "";
				c = this.l;
				for (o = 0; o != e; ++o) {
					if (this.lens && this.lens.indexOf(c) !== -1) {
						f = Ir(this, c);
						this.l = c + 1;
						l = Pr.call(this, e - o, f ? "dbcs-cont" : "sbcs-cont");
						return s.join("") + l;
					}
					s.push(v(Ir(this, c)));
					c += 1;
				}
				a = s.join("");
				break;
			default:
				switch (e) {
					case 1:
						n = Ir(this, this.l);
						this.l++;
						return n;
					case 2:
						n = (t === "i" ? Rr : Ar)(this, this.l);
						this.l += 2;
						return n;
					case 4:
					case -4:
						if (t === "i" || (this[this.l + 3] & 128) === 0) {
							n = (e > 0 ? Or : Fr)(this, this.l);
							this.l += 4;
							return n;
						} else {
							i = Dr(this, this.l);
							this.l += 4;
						}
						return i;
					case 8:
					case -8:
						if (t === "f") {
							if (e == 8) i = Tr(this, this.l);
							else
								i = Tr(
									[
										this[this.l + 7],
										this[this.l + 6],
										this[this.l + 5],
										this[this.l + 4],
										this[this.l + 3],
										this[this.l + 2],
										this[this.l + 1],
										this[this.l + 0],
									],
									0
								);
							this.l += 8;
							return i;
						} else e = 8;
					case 16:
						a = hr(this, this.l, e);
						break;
				}
		}
		this.l += e;
		return a;
	}
	var Nr = function (e, r, t) {
		e[t] = r & 255;
		e[t + 1] = (r >>> 8) & 255;
		e[t + 2] = (r >>> 16) & 255;
		e[t + 3] = (r >>> 24) & 255;
	};
	var Lr = function (e, r, t) {
		e[t] = r & 255;
		e[t + 1] = (r >> 8) & 255;
		e[t + 2] = (r >> 16) & 255;
		e[t + 3] = (r >> 24) & 255;
	};
	var Mr = function (e, r, t) {
		e[t] = r & 255;
		e[t + 1] = (r >>> 8) & 255;
	};
	function Ur(e, r, t) {
		var a = 0,
			n = 0;
		if (t === "dbcs") {
			for (n = 0; n != r.length; ++n) Mr(this, r.charCodeAt(n), this.l + 2 * n);
			a = 2 * r.length;
		} else if (t === "sbcs") {
			r = r.replace(/[^\x00-\x7F]/g, "_");
			for (n = 0; n != r.length; ++n) this[this.l + n] = r.charCodeAt(n) & 255;
			a = r.length;
		} else if (t === "hex") {
			for (; n < e; ++n) {
				this[this.l++] = parseInt(r.slice(2 * n, 2 * n + 2), 16) || 0;
			}
			return this;
		} else if (t === "utf16le") {
			var i = Math.min(this.l + e, this.length);
			for (n = 0; n < Math.min(r.length, e); ++n) {
				var s = r.charCodeAt(n);
				this[this.l++] = s & 255;
				this[this.l++] = s >> 8;
			}
			while (this.l < i) this[this.l++] = 0;
			return this;
		} else
			switch (e) {
				case 1:
					a = 1;
					this[this.l] = r & 255;
					break;
				case 2:
					a = 2;
					this[this.l] = r & 255;
					r >>>= 8;
					this[this.l + 1] = r & 255;
					break;
				case 3:
					a = 3;
					this[this.l] = r & 255;
					r >>>= 8;
					this[this.l + 1] = r & 255;
					r >>>= 8;
					this[this.l + 2] = r & 255;
					break;
				case 4:
					a = 4;
					Nr(this, r, this.l);
					break;
				case 8:
					a = 8;
					if (t === "f") {
						fr(this, r, this.l);
						break;
					}
				case 16:
					break;
				case -4:
					a = 4;
					Lr(this, r, this.l);
					break;
			}
		this.l += a;
		return this;
	}
	function Hr(e, r) {
		var t = hr(this, this.l, e.length >> 1);
		if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
		this.l += e.length >> 1;
	}
	function Wr(e, r) {
		e.l = r;
		e._R = Pr;
		e.chk = Hr;
		e._W = Ur;
	}
	function Vr(e, r) {
		e.l += r;
	}
	function zr(e) {
		var r = S(e);
		Wr(r, 0);
		return r;
	}
	function Xr(e, r, t) {
		if (!e) return;
		var a, n, i;
		Wr(e, e.l || 0);
		var s = e.length,
			f = 0,
			l = 0;
		while (e.l < s) {
			f = e._R(1);
			if (f & 128) f = (f & 127) + ((e._R(1) & 127) << 7);
			var o = op[f] || op[65535];
			a = e._R(1);
			i = a & 127;
			for (n = 1; n < 4 && a & 128; ++n) i += ((a = e._R(1)) & 127) << (7 * n);
			l = e.l + i;
			var c = (o.f || Vr)(e, i, t);
			e.l = l;
			if (r(c, o.n, f)) return;
		}
	}
	function Gr() {
		var e = [],
			r = g ? 256 : 2048;
		var t = function l(e) {
			var r = zr(e);
			Wr(r, 0);
			return r;
		};
		var a = t(r);
		var n = function o() {
			if (!a) return;
			if (a.length > a.l) {
				a = a.slice(0, a.l);
				a.l = a.length;
			}
			if (a.length > 0) e.push(a);
			a = null;
		};
		var i = function c(e) {
			if (a && e < a.length - a.l) return a;
			n();
			return (a = t(Math.max(e + 1, r)));
		};
		var s = function u() {
			n();
			return lr([e]);
		};
		var f = function h(e) {
			n();
			a = e;
			if (a.l == null) a.l = a.length;
			i(r);
		};
		return { next: i, push: f, end: s, _bufs: e };
	}
	function jr(e, r, t, a) {
		var n = +cp[r],
			i;
		if (isNaN(n)) return;
		if (!a) a = op[n].p || (t || []).length || 0;
		i = 1 + (n >= 128 ? 1 : 0) + 1;
		if (a >= 128) ++i;
		if (a >= 16384) ++i;
		if (a >= 2097152) ++i;
		var s = e.next(i);
		if (n <= 127) s._W(1, n);
		else {
			s._W(1, (n & 127) + 128);
			s._W(1, n >> 7);
		}
		for (var f = 0; f != 4; ++f) {
			if (a >= 128) {
				s._W(1, (a & 127) + 128);
				a >>= 7;
			} else {
				s._W(1, a);
				break;
			}
		}
		if (a > 0 && yr(t)) e.push(t);
	}
	function Kr(e, r, t) {
		var a = ie(e);
		if (r.s) {
			if (a.cRel) a.c += r.s.c;
			if (a.rRel) a.r += r.s.r;
		} else {
			if (a.cRel) a.c += r.c;
			if (a.rRel) a.r += r.r;
		}
		if (!t || t.biff < 12) {
			while (a.c >= 256) a.c -= 256;
			while (a.r >= 65536) a.r -= 65536;
		}
		return a;
	}
	function Yr(e, r, t) {
		var a = ie(e);
		a.s = Kr(a.s, r.s, t);
		a.e = Kr(a.e, r.s, t);
		return a;
	}
	function $r(e, r) {
		if (e.cRel && e.c < 0) {
			e = ie(e);
			e.c += r > 8 ? 16384 : 256;
		}
		if (e.rRel && e.r < 0) {
			e = ie(e);
			e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
		}
		var t = ot(e);
		if (e.cRel === 0) t = it(t);
		if (e.rRel === 0) t = rt(t);
		return t;
	}
	function Zr(e, r) {
		if (e.s.r == 0 && !e.s.rRel) {
			if (
				e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) &&
				!e.e.rRel
			) {
				return (
					(e.s.cRel ? "" : "$") +
					nt(e.s.c) +
					":" +
					(e.e.cRel ? "" : "$") +
					nt(e.e.c)
				);
			}
		}
		if (e.s.c == 0 && !e.s.cRel) {
			if (e.e.c == (r.biff >= 12 ? 65535 : 255) && !e.e.cRel) {
				return (
					(e.s.rRel ? "" : "$") +
					et(e.s.r) +
					":" +
					(e.e.rRel ? "" : "$") +
					et(e.e.r)
				);
			}
		}
		return $r(e.s, r.biff) + ":" + $r(e.e, r.biff);
	}
	var Qr = {};
	var Jr = function (e, r) {
		var t;
		if (typeof r !== "undefined") t = r;
		else if (typeof require !== "undefined") {
			try {
				t = undefined;
			} catch (a) {
				t = null;
			}
		}
		e.rc4 = function (e, r) {
			var t = new Array(256);
			var a = 0,
				n = 0,
				i = 0,
				s = 0;
			for (n = 0; n != 256; ++n) t[n] = n;
			for (n = 0; n != 256; ++n) {
				i = (i + t[n] + e[n % e.length].charCodeAt(0)) & 255;
				s = t[n];
				t[n] = t[i];
				t[i] = s;
			}
			n = i = 0;
			var f = Buffer(r.length);
			for (a = 0; a != r.length; ++a) {
				n = (n + 1) & 255;
				i = (i + t[n]) % 256;
				s = t[n];
				t[n] = t[i];
				t[i] = s;
				f[a] = r[a] ^ t[(t[n] + t[i]) & 255];
			}
			return f;
		};
		e.md5 = function (e) {
			if (!t) throw new Error("Unsupported crypto");
			return t.createHash("md5").update(e).digest("hex");
		};
	};
	Jr(Qr, typeof crypto !== "undefined" ? crypto : undefined);
	function qr(e) {
		return parseInt(tt(e), 10) - 1;
	}
	function et(e) {
		return "" + (e + 1);
	}
	function rt(e) {
		return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
	}
	function tt(e) {
		return e.replace(/\$(\d+)$/, "$1");
	}
	function at(e) {
		var r = st(e),
			t = 0,
			a = 0;
		for (; a !== r.length; ++a) t = 26 * t + r.charCodeAt(a) - 64;
		return t - 1;
	}
	function nt(e) {
		var r = "";
		for (++e; e; e = Math.floor((e - 1) / 26))
			r = String.fromCharCode(((e - 1) % 26) + 65) + r;
		return r;
	}
	function it(e) {
		return e.replace(/^([A-Z])/, "$$$1");
	}
	function st(e) {
		return e.replace(/^\$([A-Z])/, "$1");
	}
	function ft(e) {
		return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
	}
	function lt(e) {
		var r = ft(e);
		return { c: at(r[0]), r: qr(r[1]) };
	}
	function ot(e) {
		return nt(e.c) + et(e.r);
	}
	function ct(e) {
		var r = e.split(":").map(lt);
		return { s: r[0], e: r[r.length - 1] };
	}
	function ut(e, r) {
		if (typeof r === "undefined" || typeof r === "number") {
			return ut(e.s, e.e);
		}
		if (typeof e !== "string") e = ot(e);
		if (typeof r !== "string") r = ot(r);
		return e == r ? e : e + ":" + r;
	}
	function ht(e) {
		var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
		var t = 0,
			a = 0,
			n = 0;
		var i = e.length;
		for (t = 0; a < i; ++a) {
			if ((n = e.charCodeAt(a) - 64) < 1 || n > 26) break;
			t = 26 * t + n;
		}
		r.s.c = --t;
		for (t = 0; a < i; ++a) {
			if ((n = e.charCodeAt(a) - 48) < 0 || n > 9) break;
			t = 10 * t + n;
		}
		r.s.r = --t;
		if (a === i || e.charCodeAt(++a) === 58) {
			r.e.c = r.s.c;
			r.e.r = r.s.r;
			return r;
		}
		for (t = 0; a != i; ++a) {
			if ((n = e.charCodeAt(a) - 64) < 1 || n > 26) break;
			t = 26 * t + n;
		}
		r.e.c = --t;
		for (t = 0; a != i; ++a) {
			if ((n = e.charCodeAt(a) - 48) < 0 || n > 9) break;
			t = 10 * t + n;
		}
		r.e.r = --t;
		return r;
	}
	function dt(e, r) {
		var t = e.t == "d" && r instanceof Date;
		if (e.z != null)
			try {
				return (e.w = R.format(e.z, t ? J(r) : r));
			} catch (a) {}
		try {
			return (e.w = R.format(
				(e.XF || {}).numFmtId || (t ? 14 : 0),
				t ? J(r) : r
			));
		} catch (a) {
			return "" + r;
		}
	}
	function vt(e, r, t) {
		if (e == null || e.t == null || e.t == "z") return "";
		if (e.w !== undefined) return e.w;
		if (e.t == "d" && !e.z && t && t.dateNF) e.z = t.dateNF;
		if (r == undefined) return dt(e, e.v);
		return dt(e, r);
	}
	function pt(e, r) {
		var t = r && r.sheet ? r.sheet : "Sheet1";
		var a = {};
		a[t] = e;
		return { SheetNames: [t], Sheets: a };
	}
	function mt(e, r, t) {
		var a = t || {};
		var n = e ? Array.isArray(e) : a.dense;
		if (p != null && n == null) n = p;
		var i = e || (n ? [] : {});
		var s = 0,
			f = 0;
		if (i && a.origin != null) {
			if (typeof a.origin == "number") s = a.origin;
			else {
				var l = typeof a.origin == "string" ? lt(a.origin) : a.origin;
				s = l.r;
				f = l.c;
			}
		}
		var o = { s: { c: 1e7, r: 1e7 }, e: { c: 0, r: 0 } };
		if (i["!ref"]) {
			var c = ht(i["!ref"]);
			o.s.c = c.s.c;
			o.s.r = c.s.r;
			o.e.c = Math.max(o.e.c, c.e.c);
			o.e.r = Math.max(o.e.r, c.e.r);
			if (s == -1) o.e.r = s = c.e.r + 1;
		}
		for (var u = 0; u != r.length; ++u) {
			if (!r[u]) continue;
			if (!Array.isArray(r[u]))
				throw new Error("aoa_to_sheet expects an array of arrays");
			for (var h = 0; h != r[u].length; ++h) {
				if (typeof r[u][h] === "undefined") continue;
				var d = { v: r[u][h] };
				if (Array.isArray(d.v)) {
					d.f = r[u][h][1];
					d.v = d.v[0];
				}
				var v = s + u,
					m = f + h;
				if (o.s.r > v) o.s.r = v;
				if (o.s.c > m) o.s.c = m;
				if (o.e.r < v) o.e.r = v;
				if (o.e.c < m) o.e.c = m;
				if (d.v === null) {
					if (d.f) d.t = "n";
					else if (!a.cellStubs) continue;
					else d.t = "z";
				} else if (typeof d.v === "number") d.t = "n";
				else if (typeof d.v === "boolean") d.t = "b";
				else if (d.v instanceof Date) {
					d.z = a.dateNF || R._table[14];
					if (a.cellDates) {
						d.t = "d";
						d.w = R.format(d.z, J(d.v));
					} else {
						d.t = "n";
						d.v = J(d.v);
						d.w = R.format(d.z, d.v);
					}
				} else d.t = "s";
				if (n) {
					if (!i[v]) i[v] = [];
					i[v][m] = d;
				} else {
					var b = ot({ c: m, r: v });
					i[b] = d;
				}
			}
		}
		if (o.s.c < 1e7) i["!ref"] = ut(o);
		return i;
	}
	function bt(e, r) {
		return mt(null, e, r);
	}
	function gt(e, r) {
		if (!r) r = zr(4);
		r._W(4, e);
		return r;
	}
	function wt(e) {
		var r = e._R(4);
		return r === 0 ? "" : e._R(r, "dbcs");
	}
	function Et(e, r) {
		var t = false;
		if (r == null) {
			t = true;
			r = zr(4 + 2 * e.length);
		}
		r._W(4, e.length);
		if (e.length > 0) r._W(0, e, "dbcs");
		return t ? r.slice(0, r.l) : r;
	}
	function kt(e) {
		return { ich: e._R(2), ifnt: e._R(2) };
	}
	function St(e, r) {
		if (!r) r = zr(4);
		r._W(2, e.ich || 0);
		r._W(2, e.ifnt || 0);
		return r;
	}
	function _t(e, r) {
		var t = e.l;
		var a = e._R(1);
		var n = wt(e);
		var i = [];
		var s = { t: n, h: n };
		if ((a & 1) !== 0) {
			var f = e._R(4);
			for (var l = 0; l != f; ++l) i.push(kt(e));
			s.r = i;
		} else s.r = [{ ich: 0, ifnt: 0 }];
		e.l = t + r;
		return s;
	}
	function Ct(e, r) {
		var t = false;
		if (r == null) {
			t = true;
			r = zr(15 + 4 * e.t.length);
		}
		r._W(1, 0);
		Et(e.t, r);
		return t ? r.slice(0, r.l) : r;
	}
	var Bt = _t;
	function Tt(e, r) {
		var t = false;
		if (r == null) {
			t = true;
			r = zr(23 + 4 * e.t.length);
		}
		r._W(1, 1);
		Et(e.t, r);
		r._W(4, 1);
		St({ ich: 0, ifnt: 0 }, r);
		return t ? r.slice(0, r.l) : r;
	}
	function xt(e) {
		var r = e._R(4);
		var t = e._R(2);
		t += e._R(1) << 16;
		e.l++;
		return { c: r, iStyleRef: t };
	}
	function yt(e, r) {
		if (r == null) r = zr(8);
		r._W(-4, e.c);
		r._W(3, e.iStyleRef || e.s);
		r._W(1, 0);
		return r;
	}
	var It = wt;
	var At = Et;
	function Rt(e) {
		var r = e._R(4);
		return r === 0 || r === 4294967295 ? "" : e._R(r, "dbcs");
	}
	function Dt(e, r) {
		var t = false;
		if (r == null) {
			t = true;
			r = zr(127);
		}
		r._W(4, e.length > 0 ? e.length : 4294967295);
		if (e.length > 0) r._W(0, e, "dbcs");
		return t ? r.slice(0, r.l) : r;
	}
	var Ot = wt;
	var Ft = Rt;
	var Pt = Dt;
	function Nt(e) {
		var r = e.slice(e.l, e.l + 4);
		var t = r[0] & 1,
			a = r[0] & 2;
		e.l += 4;
		r[0] &= 252;
		var n =
			a === 0 ? Tr([0, 0, 0, 0, r[0], r[1], r[2], r[3]], 0) : Or(r, 0) >> 2;
		return t ? n / 100 : n;
	}
	function Lt(e, r) {
		if (r == null) r = zr(4);
		var t = 0,
			a = 0,
			n = e * 100;
		if (e == (e | 0) && e >= -(1 << 29) && e < 1 << 29) {
			a = 1;
		} else if (n == (n | 0) && n >= -(1 << 29) && n < 1 << 29) {
			a = 1;
			t = 1;
		}
		if (a) r._W(-4, ((t ? n : e) << 2) + (t + 2));
		else throw new Error("unsupported RkNumber " + e);
	}
	function Mt(e) {
		var r = { s: {}, e: {} };
		r.s.r = e._R(4);
		r.e.r = e._R(4);
		r.s.c = e._R(4);
		r.e.c = e._R(4);
		return r;
	}
	function Ut(e, r) {
		if (!r) r = zr(16);
		r._W(4, e.s.r);
		r._W(4, e.e.r);
		r._W(4, e.s.c);
		r._W(4, e.e.c);
		return r;
	}
	var Ht = Mt;
	var Wt = Ut;
	function Vt(e) {
		return e._R(8, "f");
	}
	function zt(e, r) {
		return (r || zr(8))._W(8, e, "f");
	}
	var Xt = {
		0: "#NULL!",
		7: "#DIV/0!",
		15: "#VALUE!",
		23: "#REF!",
		29: "#NAME?",
		36: "#NUM!",
		42: "#N/A",
		43: "#GETTING_DATA",
		255: "#WTF?",
	};
	var Gt = K(Xt);
	function jt(e) {
		var r = {};
		var t = e._R(1);
		var a = t >>> 1;
		var n = e._R(1);
		var i = e._R(2, "i");
		var s = e._R(1);
		var f = e._R(1);
		var l = e._R(1);
		e.l++;
		switch (a) {
			case 0:
				r.auto = 1;
				break;
			case 1:
				r.index = n;
				var o = Ea[n];
				if (o) r.rgb = jf(o);
				break;
			case 2:
				r.rgb = jf([s, f, l]);
				break;
			case 3:
				r.theme = n;
				break;
		}
		if (i != 0) r.tint = i > 0 ? i / 32767 : i / 32768;
		return r;
	}
	function Kt(e, r) {
		if (!r) r = zr(8);
		if (!e || e.auto) {
			r._W(4, 0);
			r._W(4, 0);
			return r;
		}
		if (e.index) {
			r._W(1, 2);
			r._W(1, e.index);
		} else if (e.theme) {
			r._W(1, 6);
			r._W(1, e.theme);
		} else {
			r._W(1, 5);
			r._W(1, 0);
		}
		var t = e.tint || 0;
		if (t > 0) t *= 32767;
		else if (t < 0) t *= 32768;
		r._W(2, t);
		if (!e.rgb) {
			r._W(2, 0);
			r._W(1, 0);
			r._W(1, 0);
		} else {
			var a = e.rgb || "FFFFFF";
			r._W(1, parseInt(a.slice(0, 2), 16));
			r._W(1, parseInt(a.slice(2, 4), 16));
			r._W(1, parseInt(a.slice(4, 6), 16));
			r._W(1, 255);
		}
		return r;
	}
	function Yt(e) {
		var r = e._R(1);
		e.l++;
		var t = {
			fItalic: r & 2,
			fStrikeout: r & 8,
			fOutline: r & 16,
			fShadow: r & 32,
			fCondense: r & 64,
			fExtend: r & 128,
		};
		return t;
	}
	function $t(e, r) {
		if (!r) r = zr(2);
		var t =
			(e.italic ? 2 : 0) |
			(e.strike ? 8 : 0) |
			(e.outline ? 16 : 0) |
			(e.shadow ? 32 : 0) |
			(e.condense ? 64 : 0) |
			(e.extend ? 128 : 0);
		r._W(1, t);
		r._W(1, 0);
		return r;
	}
	function Zt(e, r) {
		var t = { 2: "BITMAP", 3: "METAFILEPICT", 8: "DIB", 14: "ENHMETAFILE" };
		var a = e._R(4);
		switch (a) {
			case 0:
				return "";
			case 4294967295:
			case 4294967294:
				return t[e._R(4)] || "";
		}
		if (a > 400) throw new Error("Unsupported Clipboard: " + a.toString(16));
		e.l -= 4;
		return e._R(0, r == 1 ? "lpstr" : "lpwstr");
	}
	function Qt(e) {
		return Zt(e, 1);
	}
	function Jt(e) {
		return Zt(e, 2);
	}
	var qt = 2;
	var ea = 3;
	var ra = 11;
	var ta = 12;
	var aa = 19;
	var na = 30;
	var ia = 64;
	var sa = 65;
	var fa = 71;
	var la = 4096;
	var oa = 80;
	var ca = 81;
	var ua = [oa, ca];
	var ha = {
		1: { n: "CodePage", t: qt },
		2: { n: "Category", t: oa },
		3: { n: "PresentationFormat", t: oa },
		4: { n: "ByteCount", t: ea },
		5: { n: "LineCount", t: ea },
		6: { n: "ParagraphCount", t: ea },
		7: { n: "SlideCount", t: ea },
		8: { n: "NoteCount", t: ea },
		9: { n: "HiddenCount", t: ea },
		10: { n: "MultimediaClipCount", t: ea },
		11: { n: "ScaleCrop", t: ra },
		12: { n: "HeadingPairs", t: la | ta },
		13: { n: "TitlesOfParts", t: la | na },
		14: { n: "Manager", t: oa },
		15: { n: "Company", t: oa },
		16: { n: "LinksUpToDate", t: ra },
		17: { n: "CharacterCount", t: ea },
		19: { n: "SharedDoc", t: ra },
		22: { n: "HyperlinksChanged", t: ra },
		23: { n: "AppVersion", t: ea, p: "version" },
		24: { n: "DigSig", t: sa },
		26: { n: "ContentType", t: oa },
		27: { n: "ContentStatus", t: oa },
		28: { n: "Language", t: oa },
		29: { n: "Version", t: oa },
		255: {},
	};
	var da = {
		1: { n: "CodePage", t: qt },
		2: { n: "Title", t: oa },
		3: { n: "Subject", t: oa },
		4: { n: "Author", t: oa },
		5: { n: "Keywords", t: oa },
		6: { n: "Comments", t: oa },
		7: { n: "Template", t: oa },
		8: { n: "LastAuthor", t: oa },
		9: { n: "RevNumber", t: oa },
		10: { n: "EditTime", t: ia },
		11: { n: "LastPrinted", t: ia },
		12: { n: "CreatedDate", t: ia },
		13: { n: "ModifiedDate", t: ia },
		14: { n: "PageCount", t: ea },
		15: { n: "WordCount", t: ea },
		16: { n: "CharCount", t: ea },
		17: { n: "Thumbnail", t: fa },
		18: { n: "Application", t: oa },
		19: { n: "DocSecurity", t: ea },
		255: {},
	};
	var va = {
		2147483648: { n: "Locale", t: aa },
		2147483651: { n: "Behavior", t: aa },
		1919054434: {},
	};
	(function () {
		for (var e in va) if (va.hasOwnProperty(e)) ha[e] = da[e] = va[e];
	})();
	var pa = G(ha, "n");
	var ma = G(da, "n");
	var ba = {
		1: "US",
		2: "CA",
		3: "",
		7: "RU",
		20: "EG",
		30: "GR",
		31: "NL",
		32: "BE",
		33: "FR",
		34: "ES",
		36: "HU",
		39: "IT",
		41: "CH",
		43: "AT",
		44: "GB",
		45: "DK",
		46: "SE",
		47: "NO",
		48: "PL",
		49: "DE",
		52: "MX",
		55: "BR",
		61: "AU",
		64: "NZ",
		66: "TH",
		81: "JP",
		82: "KR",
		84: "VN",
		86: "CN",
		90: "TR",
		105: "JS",
		213: "DZ",
		216: "MA",
		218: "LY",
		351: "PT",
		354: "IS",
		358: "FI",
		420: "CZ",
		886: "TW",
		961: "LB",
		962: "JO",
		963: "SY",
		964: "IQ",
		965: "KW",
		966: "SA",
		971: "AE",
		972: "IL",
		974: "QA",
		981: "IR",
		65535: "US",
	};
	var ga = [
		null,
		"solid",
		"mediumGray",
		"darkGray",
		"lightGray",
		"darkHorizontal",
		"darkVertical",
		"darkDown",
		"darkUp",
		"darkGrid",
		"darkTrellis",
		"lightHorizontal",
		"lightVertical",
		"lightDown",
		"lightUp",
		"lightGrid",
		"lightTrellis",
		"gray125",
		"gray0625",
	];
	function wa(e) {
		return e.map(function (e) {
			return [(e >> 16) & 255, (e >> 8) & 255, e & 255];
		});
	}
	var Ea = wa([
		0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215,
		16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128,
		8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164,
		13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960,
		65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113,
		10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232,
		16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056,
		3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0,
		0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	]);
	var ka = {
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":
			"workbooks",
		"application/vnd.ms-excel.binIndexWs": "TODO",
		"application/vnd.ms-excel.intlmacrosheet": "TODO",
		"application/vnd.ms-excel.binIndexMs": "TODO",
		"application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
		"application/vnd.openxmlformats-officedocument.custom-properties+xml":
			"custprops",
		"application/vnd.openxmlformats-officedocument.extended-properties+xml":
			"extprops",
		"application/vnd.openxmlformats-officedocument.customXmlProperties+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty":
			"TODO",
		"application/vnd.ms-excel.pivotTable": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml":
			"TODO",
		"application/vnd.ms-office.chartcolorstyle+xml": "TODO",
		"application/vnd.ms-office.chartstyle+xml": "TODO",
		"application/vnd.ms-excel.calcChain": "calcchains",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml":
			"calcchains",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings":
			"TODO",
		"application/vnd.ms-office.activeX": "TODO",
		"application/vnd.ms-office.activeX+xml": "TODO",
		"application/vnd.ms-excel.attachedToolbars": "TODO",
		"application/vnd.ms-excel.connections": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":
			"TODO",
		"application/vnd.ms-excel.externalLink": "links",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml":
			"links",
		"application/vnd.ms-excel.sheetMetadata": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml":
			"TODO",
		"application/vnd.ms-excel.pivotCacheDefinition": "TODO",
		"application/vnd.ms-excel.pivotCacheRecords": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml":
			"TODO",
		"application/vnd.ms-excel.queryTable": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml":
			"TODO",
		"application/vnd.ms-excel.userNames": "TODO",
		"application/vnd.ms-excel.revisionHeaders": "TODO",
		"application/vnd.ms-excel.revisionLog": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml":
			"TODO",
		"application/vnd.ms-excel.tableSingleCells": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml":
			"TODO",
		"application/vnd.ms-excel.slicer": "TODO",
		"application/vnd.ms-excel.slicerCache": "TODO",
		"application/vnd.ms-excel.slicer+xml": "TODO",
		"application/vnd.ms-excel.slicerCache+xml": "TODO",
		"application/vnd.ms-excel.wsSortMap": "TODO",
		"application/vnd.ms-excel.table": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.theme+xml": "themes",
		"application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
		"application/vnd.ms-excel.Timeline+xml": "TODO",
		"application/vnd.ms-excel.TimelineCache+xml": "TODO",
		"application/vnd.ms-office.vbaProject": "vba",
		"application/vnd.ms-office.vbaProjectSignature": "vba",
		"application/vnd.ms-office.volatileDependencies": "TODO",
		"application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml":
			"TODO",
		"application/vnd.ms-excel.controlproperties+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.model+data": "TODO",
		"application/vnd.ms-excel.Survey+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
		"application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml":
			"TODO",
		"application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
		"application/vnd.openxmlformats-package.relationships+xml": "rels",
		"application/vnd.openxmlformats-officedocument.oleObject": "TODO",
		"image/png": "TODO",
		sheet: "js",
	};
	var Sa = (function () {
		var e = {
			workbooks: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
				xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
				xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
				xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
				xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml",
			},
			strs: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
				xlsb: "application/vnd.ms-excel.sharedStrings",
			},
			comments: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
				xlsb: "application/vnd.ms-excel.comments",
			},
			sheets: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
				xlsb: "application/vnd.ms-excel.worksheet",
			},
			charts: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
				xlsb: "application/vnd.ms-excel.chartsheet",
			},
			dialogs: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
				xlsb: "application/vnd.ms-excel.dialogsheet",
			},
			macros: {
				xlsx: "application/vnd.ms-excel.macrosheet+xml",
				xlsb: "application/vnd.ms-excel.macrosheet",
			},
			styles: {
				xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
				xlsb: "application/vnd.ms-excel.styles",
			},
		};
		X(e).forEach(function (r) {
			["xlsm", "xlam"].forEach(function (t) {
				if (!e[r][t]) e[r][t] = e[r].xlsx;
			});
		});
		X(e).forEach(function (r) {
			X(e[r]).forEach(function (t) {
				ka[e[r][t]] = r;
			});
		});
		return e;
	})();
	var _a = Y(ka);
	nr.CT = "http://schemas.openxmlformats.org/package/2006/content-types";
	function Ca() {
		return {
			workbooks: [],
			sheets: [],
			charts: [],
			dialogs: [],
			macros: [],
			rels: [],
			strs: [],
			comments: [],
			links: [],
			coreprops: [],
			extprops: [],
			custprops: [],
			themes: [],
			styles: [],
			calcchains: [],
			vba: [],
			drawings: [],
			TODO: [],
			xmlns: "",
		};
	}
	function Ba(e) {
		var r = Ca();
		if (!e || !e.match) return r;
		var t = {};
		(e.match(_e) || []).forEach(function (e) {
			var a = Te(e);
			switch (a[0].replace(Ce, "<")) {
				case "<?xml":
					break;
				case "<Types":
					r.xmlns = a["xmlns" + (a[0].match(/<(\w+):/) || ["", ""])[1]];
					break;
				case "<Default":
					t[a.Extension] = a.ContentType;
					break;
				case "<Override":
					if (r[ka[a.ContentType]] !== undefined)
						r[ka[a.ContentType]].push(a.PartName);
					break;
			}
		});
		if (r.xmlns !== nr.CT) throw new Error("Unknown Namespace: " + r.xmlns);
		r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "";
		r.sst = r.strs.length > 0 ? r.strs[0] : "";
		r.style = r.styles.length > 0 ? r.styles[0] : "";
		r.defaults = t;
		delete r.calcchains;
		return r;
	}
	var Ta = rr("Types", null, {
		xmlns: nr.CT,
		"xmlns:xsd": nr.xsd,
		"xmlns:xsi": nr.xsi,
	});
	var xa = [
		["xml", "application/xml"],
		["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"],
		["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"],
		["bmp", "image/bmp"],
		["png", "image/png"],
		["gif", "image/gif"],
		["emf", "image/x-emf"],
		["wmf", "image/x-wmf"],
		["jpg", "image/jpeg"],
		["jpeg", "image/jpeg"],
		["tif", "image/tiff"],
		["tiff", "image/tiff"],
		["pdf", "application/pdf"],
		["rels", _a.rels[0]],
	].map(function (e) {
		return rr("Default", null, { Extension: e[0], ContentType: e[1] });
	});
	function ya(e, r) {
		var t = [],
			a;
		t[t.length] = ke;
		t[t.length] = Ta;
		t = t.concat(xa);
		var n = function (n) {
			if (e[n] && e[n].length > 0) {
				a = e[n][0];
				t[t.length] = rr("Override", null, {
					PartName: (a[0] == "/" ? "" : "/") + a,
					ContentType: Sa[n][r.bookType || "xlsx"],
				});
			}
		};
		var i = function (a) {
			(e[a] || []).forEach(function (e) {
				t[t.length] = rr("Override", null, {
					PartName: (e[0] == "/" ? "" : "/") + e,
					ContentType: Sa[a][r.bookType || "xlsx"],
				});
			});
		};
		var s = function (r) {
			(e[r] || []).forEach(function (e) {
				t[t.length] = rr("Override", null, {
					PartName: (e[0] == "/" ? "" : "/") + e,
					ContentType: _a[r][0],
				});
			});
		};
		n("workbooks");
		i("sheets");
		i("charts");
		s("themes");
		["strs", "styles"].forEach(n);
		["coreprops", "extprops", "custprops"].forEach(s);
		s("vba");
		s("comments");
		s("drawings");
		if (t.length > 2) {
			t[t.length] = "</Types>";
			t[1] = t[1].replace("/>", ">");
		}
		return t.join("");
	}
	var Ia = {
		WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
		SHEET:
			"http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
		HLINK:
			"http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
		VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
		VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject",
	};
	function Aa(e) {
		var r = e.lastIndexOf("/");
		return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
	}
	function Ra(e, r) {
		if (!e) return e;
		if (r.charAt(0) !== "/") {
			r = "/" + r;
		}
		var t = {};
		var a = {};
		(e.match(_e) || []).forEach(function (e) {
			var n = Te(e);
			if (n[0] === "<Relationship") {
				var i = {};
				i.Type = n.Type;
				i.Target = n.Target;
				i.Id = n.Id;
				i.TargetMode = n.TargetMode;
				var s = n.TargetMode === "External" ? n.Target : Ee(n.Target, r);
				t[s] = i;
				a[n.Id] = i;
			}
		});
		t["!id"] = a;
		return t;
	}
	nr.RELS = "http://schemas.openxmlformats.org/package/2006/relationships";
	var Da = rr("Relationships", null, { xmlns: nr.RELS });
	function Oa(e) {
		var r = [ke, Da];
		X(e["!id"]).forEach(function (t) {
			r[r.length] = rr("Relationship", null, e["!id"][t]);
		});
		if (r.length > 2) {
			r[r.length] = "</Relationships>";
			r[1] = r[1].replace("/>", ">");
		}
		return r.join("");
	}
	function Fa(e, r, t, a, n) {
		if (!n) n = {};
		if (!e["!id"]) e["!id"] = {};
		if (r < 0) for (r = 1; e["!id"]["rId" + r]; ++r) {}
		n.Id = "rId" + r;
		n.Type = a;
		n.Target = t;
		if (n.Type == Ia.HLINK) n.TargetMode = "External";
		if (e["!id"][n.Id]) throw new Error("Cannot rewrite rId " + r);
		e["!id"][n.Id] = n;
		e[("/" + n.Target).replace("//", "/")] = n;
		return r;
	}
	var Pa = "application/vnd.oasis.opendocument.spreadsheet";
	function Na(e, r) {
		var t = Nv(e);
		var a;
		var n;
		while ((a = Lv.exec(t)))
			switch (a[3]) {
				case "manifest":
					break;
				case "file-entry":
					n = Te(a[0], false);
					if (n.path == "/" && n.type !== Pa)
						throw new Error("This OpenDocument is not a spreadsheet");
					break;
				case "encryption-data":
				case "algorithm":
				case "start-key-generation":
				case "key-derivation":
					throw new Error("Unsupported ODS Encryption");
				default:
					if (r && r.WTF) throw a;
			}
	}
	function La(e) {
		var r = [ke];
		r.push(
			'<manifest:manifest xmlns:manifest="urn:oasis:names:tc:opendocument:xmlns:manifest:1.0" manifest:version="1.2">\n'
		);
		r.push(
			'  <manifest:file-entry manifest:full-path="/" manifest:version="1.2" manifest:media-type="application/vnd.oasis.opendocument.spreadsheet"/>\n'
		);
		for (var t = 0; t < e.length; ++t)
			r.push(
				'  <manifest:file-entry manifest:full-path="' +
					e[t][0] +
					'" manifest:media-type="' +
					e[t][1] +
					'"/>\n'
			);
		r.push("</manifest:manifest>");
		return r.join("");
	}
	function Ma(e, r, t) {
		return [
			'  <rdf:Description rdf:about="' + e + '">\n',
			'    <rdf:type rdf:resource="http://docs.oasis-open.org/ns/office/1.2/meta/' +
				(t || "odf") +
				"#" +
				r +
				'"/>\n',
			"  </rdf:Description>\n",
		].join("");
	}
	function Ua(e, r) {
		return [
			'  <rdf:Description rdf:about="' + e + '">\n',
			'    <ns0:hasPart xmlns:ns0="http://docs.oasis-open.org/ns/office/1.2/meta/pkg#" rdf:resource="' +
				r +
				'"/>\n',
			"  </rdf:Description>\n",
		].join("");
	}
	function Ha(e) {
		var r = [ke];
		r.push(
			'<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">\n'
		);
		for (var t = 0; t != e.length; ++t) {
			r.push(Ma(e[t][0], e[t][1]));
			r.push(Ua("", e[t][0]));
		}
		r.push(Ma("", "Document", "pkg"));
		r.push("</rdf:RDF>");
		return r.join("");
	}
	var Wa = (function () {
		var r =
			'<?xml version="1.0" encoding="UTF-8" standalone="yes"?><office:document-meta xmlns:office="urn:oasis:names:tc:opendocument:xmlns:office:1.0" xmlns:meta="urn:oasis:names:tc:opendocument:xmlns:meta:1.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xlink="http://www.w3.org/1999/xlink" office:version="1.2"><office:meta><meta:generator>Sheet' +
			"JS " +
			e.version +
			"</meta:generator></office:meta></office:document-meta>";
		return function t() {
			return r;
		};
	})();
	var Va = [
		["cp:category", "Category"],
		["cp:contentStatus", "ContentStatus"],
		["cp:keywords", "Keywords"],
		["cp:lastModifiedBy", "LastAuthor"],
		["cp:lastPrinted", "LastPrinted"],
		["cp:revision", "RevNumber"],
		["cp:version", "Version"],
		["dc:creator", "Author"],
		["dc:description", "Comments"],
		["dc:identifier", "Identifier"],
		["dc:language", "Language"],
		["dc:subject", "Subject"],
		["dc:title", "Title"],
		["dcterms:created", "CreatedDate", "date"],
		["dcterms:modified", "ModifiedDate", "date"],
	];
	nr.CORE_PROPS =
		"http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
	Ia.CORE_PROPS =
		"http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";
	var za = (function () {
		var e = new Array(Va.length);
		for (var r = 0; r < Va.length; ++r) {
			var t = Va[r];
			var a =
				"(?:" +
				t[0].slice(0, t[0].indexOf(":")) +
				":)" +
				t[0].slice(t[0].indexOf(":") + 1);
			e[r] = new RegExp("<" + a + "[^>]*>([\\s\\S]*?)</" + a + ">");
		}
		return e;
	})();
	function Xa(e) {
		var r = {};
		e = We(e);
		for (var t = 0; t < Va.length; ++t) {
			var a = Va[t],
				n = e.match(za[t]);
			if (n != null && n.length > 0) r[a[1]] = n[1];
			if (a[2] === "date" && r[a[1]]) r[a[1]] = ae(r[a[1]]);
		}
		return r;
	}
	var Ga = rr("cp:coreProperties", null, {
		"xmlns:cp": nr.CORE_PROPS,
		"xmlns:dc": nr.dc,
		"xmlns:dcterms": nr.dcterms,
		"xmlns:dcmitype": nr.dcmitype,
		"xmlns:xsi": nr.xsi,
	});
	function ja(e, r, t, a, n) {
		if (n[e] != null || r == null || r === "") return;
		n[e] = r;
		a[a.length] = t ? rr(e, r, t) : qe(e, r);
	}
	function Ka(e, r) {
		var t = r || {};
		var a = [ke, Ga],
			n = {};
		if (!e && !t.Props) return a.join("");
		if (e) {
			if (e.CreatedDate != null)
				ja(
					"dcterms:created",
					typeof e.CreatedDate === "string"
						? e.CreatedDate
						: tr(e.CreatedDate, t.WTF),
					{ "xsi:type": "dcterms:W3CDTF" },
					a,
					n
				);
			if (e.ModifiedDate != null)
				ja(
					"dcterms:modified",
					typeof e.ModifiedDate === "string"
						? e.ModifiedDate
						: tr(e.ModifiedDate, t.WTF),
					{ "xsi:type": "dcterms:W3CDTF" },
					a,
					n
				);
		}
		for (var i = 0; i != Va.length; ++i) {
			var s = Va[i];
			var f =
				t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
			if (f === true) f = "1";
			else if (f === false) f = "0";
			else if (typeof f == "number") f = String(f);
			if (f != null) ja(s[0], f, null, a, n);
		}
		if (a.length > 2) {
			a[a.length] = "</cp:coreProperties>";
			a[1] = a[1].replace("/>", ">");
		}
		return a.join("");
	}
	var Ya = [
		["Application", "Application", "string"],
		["AppVersion", "AppVersion", "string"],
		["Company", "Company", "string"],
		["DocSecurity", "DocSecurity", "string"],
		["Manager", "Manager", "string"],
		["HyperlinksChanged", "HyperlinksChanged", "bool"],
		["SharedDoc", "SharedDoc", "bool"],
		["LinksUpToDate", "LinksUpToDate", "bool"],
		["ScaleCrop", "ScaleCrop", "bool"],
		["HeadingPairs", "HeadingPairs", "raw"],
		["TitlesOfParts", "TitlesOfParts", "raw"],
	];
	nr.EXT_PROPS =
		"http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
	Ia.EXT_PROPS =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
	var $a = [
		"Worksheets",
		"SheetNames",
		"NamedRanges",
		"DefinedNames",
		"Chartsheets",
		"ChartNames",
	];
	function Za(e, r, t, a) {
		var n = [];
		if (typeof e == "string") n = Qe(e, a);
		else
			for (var i = 0; i < e.length; ++i)
				n = n.concat(
					e[i].map(function (e) {
						return { v: e };
					})
				);
		var s =
			typeof r == "string"
				? Qe(r, a).map(function (e) {
						return e.v;
				  })
				: r;
		var f = 0,
			l = 0;
		if (s.length > 0)
			for (var o = 0; o !== n.length; o += 2) {
				l = +n[o + 1].v;
				switch (n[o].v) {
					case "Worksheets":
					case "工作表":
					case "Листы":
					case "أوراق العمل":
					case "ワークシート":
					case "גליונות עבודה":
					case "Arbeitsblätter":
					case "Çalışma Sayfaları":
					case "Feuilles de calcul":
					case "Fogli di lavoro":
					case "Folhas de cálculo":
					case "Planilhas":
					case "Regneark":
					case "Werkbladen":
						t.Worksheets = l;
						t.SheetNames = s.slice(f, f + l);
						break;
					case "Named Ranges":
					case "名前付き一覧":
					case "Benannte Bereiche":
					case "Navngivne områder":
						t.NamedRanges = l;
						t.DefinedNames = s.slice(f, f + l);
						break;
					case "Charts":
					case "Diagramme":
						t.Chartsheets = l;
						t.ChartNames = s.slice(f, f + l);
						break;
				}
				f += l;
			}
	}
	function Qa(e, r, t) {
		var a = {};
		if (!r) r = {};
		e = We(e);
		Ya.forEach(function (t) {
			switch (t[2]) {
				case "string":
					r[t[1]] = (e.match(je(t[0])) || [])[1];
					break;
				case "bool":
					r[t[1]] = (e.match(je(t[0])) || [])[1] === "true";
					break;
				case "raw":
					var n = e.match(
						new RegExp("<" + t[0] + "[^>]*>([\\s\\S]*?)</" + t[0] + ">")
					);
					if (n && n.length > 0) a[t[1]] = n[1];
					break;
			}
		});
		if (a.HeadingPairs && a.TitlesOfParts)
			Za(a.HeadingPairs, a.TitlesOfParts, r, t);
		return r;
	}
	var Ja = rr("Properties", null, { xmlns: nr.EXT_PROPS, "xmlns:vt": nr.vt });
	function qa(e) {
		var r = [],
			t = rr;
		if (!e) e = {};
		e.Application = "SheetJS";
		r[r.length] = ke;
		r[r.length] = Ja;
		Ya.forEach(function (a) {
			if (e[a[1]] === undefined) return;
			var n;
			switch (a[2]) {
				case "string":
					n = String(e[a[1]]);
					break;
				case "bool":
					n = e[a[1]] ? "true" : "false";
					break;
			}
			if (n !== undefined) r[r.length] = t(a[0], n);
		});
		r[r.length] = t(
			"HeadingPairs",
			t(
				"vt:vector",
				t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") +
					t("vt:variant", t("vt:i4", String(e.Worksheets))),
				{ size: 2, baseType: "variant" }
			)
		);
		r[r.length] = t(
			"TitlesOfParts",
			t(
				"vt:vector",
				e.SheetNames.map(function (e) {
					return "<vt:lpstr>" + Oe(e) + "</vt:lpstr>";
				}).join(""),
				{ size: e.Worksheets, baseType: "lpstr" }
			)
		);
		if (r.length > 2) {
			r[r.length] = "</Properties>";
			r[1] = r[1].replace("/>", ">");
		}
		return r.join("");
	}
	nr.CUST_PROPS =
		"http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
	Ia.CUST_PROPS =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
	var en = /<[^>]+>[^<]*/g;
	function rn(e, r) {
		var t = {},
			a = "";
		var n = e.match(en);
		if (n)
			for (var i = 0; i != n.length; ++i) {
				var s = n[i],
					f = Te(s);
				switch (f[0]) {
					case "<?xml":
						break;
					case "<Properties":
						break;
					case "<property":
						a = f.name;
						break;
					case "</property>":
						a = null;
						break;
					default:
						if (s.indexOf("<vt:") === 0) {
							var l = s.split(">");
							var o = l[0].slice(4),
								c = l[1];
							switch (o) {
								case "lpstr":
								case "bstr":
								case "lpwstr":
									t[a] = Ae(c);
									break;
								case "bool":
									t[a] = He(c);
									break;
								case "i1":
								case "i2":
								case "i4":
								case "i8":
								case "int":
								case "uint":
									t[a] = parseInt(c, 10);
									break;
								case "r4":
								case "r8":
								case "decimal":
									t[a] = parseFloat(c);
									break;
								case "filetime":
								case "date":
									t[a] = ae(c);
									break;
								case "cy":
								case "error":
									t[a] = Ae(c);
									break;
								default:
									if (o.slice(-1) == "/") break;
									if (r.WTF && typeof console !== "undefined")
										console.warn("Unexpected", s, o, l);
							}
						} else if (s.slice(0, 2) === "</") {
						} else if (r.WTF) throw new Error(s);
				}
			}
		return t;
	}
	var tn = rr("Properties", null, { xmlns: nr.CUST_PROPS, "xmlns:vt": nr.vt });
	function an(e) {
		var r = [ke, tn];
		if (!e) return r.join("");
		var t = 1;
		X(e).forEach(function a(n) {
			++t;
			r[r.length] = rr("property", ar(e[n]), {
				fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
				pid: t,
				name: n,
			});
		});
		if (r.length > 2) {
			r[r.length] = "</Properties>";
			r[1] = r[1].replace("/>", ">");
		}
		return r.join("");
	}
	var nn = {
		Title: "Title",
		Subject: "Subject",
		Author: "Author",
		Keywords: "Keywords",
		Comments: "Description",
		LastAuthor: "LastAuthor",
		RevNumber: "Revision",
		Application: "AppName",
		LastPrinted: "LastPrinted",
		CreatedDate: "Created",
		ModifiedDate: "LastSaved",
		Category: "Category",
		Manager: "Manager",
		Company: "Company",
		AppVersion: "Version",
		ContentStatus: "ContentStatus",
		Identifier: "Identifier",
		Language: "Language",
	};
	var sn = j(nn);
	function fn(e, r, t) {
		r = sn[r] || r;
		e[r] = t;
	}
	function ln(e, r) {
		var t = [];
		X(nn)
			.map(function (e) {
				for (var r = 0; r < Va.length; ++r) if (Va[r][1] == e) return Va[r];
				for (r = 0; r < Ya.length; ++r) if (Ya[r][1] == e) return Ya[r];
				throw e;
			})
			.forEach(function (a) {
				if (e[a[1]] == null) return;
				var n = r && r.Props && r.Props[a[1]] != null ? r.Props[a[1]] : e[a[1]];
				switch (a[2]) {
					case "date":
						n = new Date(n).toISOString().replace(/\.\d*Z/, "Z");
						break;
				}
				if (typeof n == "number") n = String(n);
				else if (n === true || n === false) {
					n = n ? "1" : "0";
				} else if (n instanceof Date)
					n = new Date(n).toISOString().replace(/\.\d*Z/, "");
				t.push(qe(nn[a[1]] || a[1], n));
			});
		return rr("DocumentProperties", t.join(""), { xmlns: ir.o });
	}
	function on(e, r) {
		var t = ["Worksheets", "SheetNames"];
		var a = "CustomDocumentProperties";
		var n = [];
		if (e)
			X(e).forEach(function (r) {
				if (!e.hasOwnProperty(r)) return;
				for (var a = 0; a < Va.length; ++a) if (r == Va[a][1]) return;
				for (a = 0; a < Ya.length; ++a) if (r == Ya[a][1]) return;
				for (a = 0; a < t.length; ++a) if (r == t[a]) return;
				var i = e[r];
				var s = "string";
				if (typeof i == "number") {
					s = "float";
					i = String(i);
				} else if (i === true || i === false) {
					s = "boolean";
					i = i ? "1" : "0";
				} else i = String(i);
				n.push(rr(Fe(r), i, { "dt:dt": s }));
			});
		if (r)
			X(r).forEach(function (t) {
				if (!r.hasOwnProperty(t)) return;
				if (e && e.hasOwnProperty(t)) return;
				var a = r[t];
				var i = "string";
				if (typeof a == "number") {
					i = "float";
					a = String(a);
				} else if (a === true || a === false) {
					i = "boolean";
					a = a ? "1" : "0";
				} else if (a instanceof Date) {
					i = "dateTime.tz";
					a = a.toISOString();
				} else a = String(a);
				n.push(rr(Fe(t), a, { "dt:dt": i }));
			});
		return "<" + a + ' xmlns="' + ir.o + '">' + n.join("") + "</" + a + ">";
	}
	function cn(e) {
		var r = e._R(4),
			t = e._R(4);
		return new Date(((t / 1e7) * Math.pow(2, 32) + r / 1e7 - 11644473600) * 1e3)
			.toISOString()
			.replace(/\.000/, "");
	}
	function un(e) {
		var r = typeof e == "string" ? new Date(Date.parse(e)) : e;
		var t = r.getTime() / 1e3 + 11644473600;
		var a = t % Math.pow(2, 32),
			n = (t - a) / Math.pow(2, 32);
		a *= 1e7;
		n *= 1e7;
		var i = (a / Math.pow(2, 32)) | 0;
		if (i > 0) {
			a = a % Math.pow(2, 32);
			n += i;
		}
		var s = zr(8);
		s._W(4, a);
		s._W(4, n);
		return s;
	}
	function hn(e, r, t) {
		var a = e.l;
		var n = e._R(0, "lpstr-cp");
		if (t) while ((e.l - a) & 3) ++e.l;
		return n;
	}
	function dn(e, r, t) {
		var a = e._R(0, "lpwstr");
		if (t) e.l += (4 - ((a.length + 1) & 3)) & 3;
		return a;
	}
	function vn(e, r, t) {
		if (r === 31) return dn(e);
		return hn(e, r, t);
	}
	function pn(e, r, t) {
		return vn(e, r, t === false ? 0 : 4);
	}
	function mn(e, r) {
		if (!r) throw new Error("VtUnalignedString must have positive length");
		return vn(e, r, 0);
	}
	function bn(e) {
		var r = e._R(4);
		var t = [];
		for (var a = 0; a != r; ++a) t[a] = e._R(0, "lpstr-cp").replace(I, "");
		return t;
	}
	function gn(e) {
		return bn(e);
	}
	function wn(e) {
		var r = Bn(e, ca);
		var t = Bn(e, ea);
		return [r, t];
	}
	function En(e) {
		var r = e._R(4);
		var t = [];
		for (var a = 0; a != r / 2; ++a) t.push(wn(e));
		return t;
	}
	function kn(e) {
		return En(e);
	}
	function Sn(e, r) {
		var t = e._R(4);
		var a = {};
		for (var n = 0; n != t; ++n) {
			var i = e._R(4);
			var s = e._R(4);
			a[i] = e
				._R(s, r === 1200 ? "utf16le" : "utf8")
				.replace(I, "")
				.replace(A, "!");
			if (r === 1200 && s % 2) e.l += 2;
		}
		if (e.l & 3) e.l = (e.l >> (2 + 1)) << 2;
		return a;
	}
	function _n(e) {
		var r = e._R(4);
		var t = e.slice(e.l, e.l + r);
		e.l += r;
		if ((r & 3) > 0) e.l += (4 - (r & 3)) & 3;
		return t;
	}
	function Cn(e) {
		var r = {};
		r.Size = e._R(4);
		e.l += r.Size + 3 - ((r.Size - 1) % 4);
		return r;
	}
	function Bn(e, r, t) {
		var a = e._R(2),
			n,
			i = t || {};
		e.l += 2;
		if (r !== ta)
			if (a !== r && ua.indexOf(r) === -1)
				throw new Error("Expected type " + r + " saw " + a);
		switch (r === ta ? a : r) {
			case 2:
				n = e._R(2, "i");
				if (!i.raw) e.l += 2;
				return n;
			case 3:
				n = e._R(4, "i");
				return n;
			case 11:
				return e._R(4) !== 0;
			case 19:
				n = e._R(4);
				return n;
			case 30:
				return hn(e, a, 4).replace(I, "");
			case 31:
				return dn(e);
			case 64:
				return cn(e);
			case 65:
				return _n(e);
			case 71:
				return Cn(e);
			case 80:
				return pn(e, a, !i.raw).replace(I, "");
			case 81:
				return mn(e, a).replace(I, "");
			case 4108:
				return kn(e);
			case 4126:
				return gn(e);
			default:
				throw new Error("TypedPropertyValue unrecognized type " + r + " " + a);
		}
	}
	function Tn(e, r) {
		var t = zr(4),
			a = zr(4);
		t._W(4, e == 80 ? 31 : e);
		switch (e) {
			case 3:
				a._W(-4, r);
				break;
			case 5:
				a = zr(8);
				a._W(8, r, "f");
				break;
			case 11:
				a._W(4, r ? 1 : 0);
				break;
			case 64:
				a = un(r);
				break;
			case 31:
			case 80:
				a = zr(4 + 2 * (r.length + 1) + (r.length % 2 ? 0 : 2));
				a._W(4, r.length + 1);
				a._W(0, r, "dbcs");
				while (a.l != a.length) a._W(1, 0);
				break;
			default:
				throw new Error("TypedPropertyValue unrecognized type " + e + " " + r);
		}
		return y([t, a]);
	}
	function xn(e, r) {
		var t = e.l;
		var a = e._R(4);
		var n = e._R(4);
		var i = [],
			s = 0;
		var f = 0;
		var o = -1,
			c = {};
		for (s = 0; s != n; ++s) {
			var u = e._R(4);
			var h = e._R(4);
			i[s] = [u, h + t];
		}
		i.sort(function (e, r) {
			return e[1] - r[1];
		});
		var d = {};
		for (s = 0; s != n; ++s) {
			if (e.l !== i[s][1]) {
				var v = true;
				if (s > 0 && r)
					switch (r[i[s - 1][0]].t) {
						case 2:
							if (e.l + 2 === i[s][1]) {
								e.l += 2;
								v = false;
							}
							break;
						case 80:
							if (e.l <= i[s][1]) {
								e.l = i[s][1];
								v = false;
							}
							break;
						case 4108:
							if (e.l <= i[s][1]) {
								e.l = i[s][1];
								v = false;
							}
							break;
					}
				if ((!r || s == 0) && e.l <= i[s][1]) {
					v = false;
					e.l = i[s][1];
				}
				if (v)
					throw new Error(
						"Read Error: Expected address " + i[s][1] + " at " + e.l + " :" + s
					);
			}
			if (r) {
				var p = r[i[s][0]];
				d[p.n] = Bn(e, p.t, { raw: true });
				if (p.p === "version")
					d[p.n] =
						String(d[p.n] >> 16) +
						"." +
						("0000" + String(d[p.n] & 65535)).slice(-4);
				if (p.n == "CodePage")
					switch (d[p.n]) {
						case 0:
							d[p.n] = 1252;
						case 874:
						case 932:
						case 936:
						case 949:
						case 950:
						case 1250:
						case 1251:
						case 1253:
						case 1254:
						case 1255:
						case 1256:
						case 1257:
						case 1258:
						case 1e4:
						case 1200:
						case 1201:
						case 1252:
						case 65e3:
						case -536:
						case 65001:
						case -535:
							l((f = (d[p.n] >>> 0) & 65535));
							break;
						default:
							throw new Error("Unsupported CodePage: " + d[p.n]);
					}
			} else {
				if (i[s][0] === 1) {
					f = d.CodePage = Bn(e, qt);
					l(f);
					if (o !== -1) {
						var m = e.l;
						e.l = i[o][1];
						c = Sn(e, f);
						e.l = m;
					}
				} else if (i[s][0] === 0) {
					if (f === 0) {
						o = s;
						e.l = i[s + 1][1];
						continue;
					}
					c = Sn(e, f);
				} else {
					var b = c[i[s][0]];
					var g;
					switch (e[e.l]) {
						case 65:
							e.l += 4;
							g = _n(e);
							break;
						case 30:
							e.l += 4;
							g = pn(e, e[e.l - 4]).replace(/\u0000+$/, "");
							break;
						case 31:
							e.l += 4;
							g = pn(e, e[e.l - 4]).replace(/\u0000+$/, "");
							break;
						case 3:
							e.l += 4;
							g = e._R(4, "i");
							break;
						case 19:
							e.l += 4;
							g = e._R(4);
							break;
						case 5:
							e.l += 4;
							g = e._R(8, "f");
							break;
						case 11:
							e.l += 4;
							g = Nn(e, 4);
							break;
						case 64:
							e.l += 4;
							g = ae(cn(e));
							break;
						default:
							throw new Error("unparsed value: " + e[e.l]);
					}
					d[b] = g;
				}
			}
		}
		e.l = t + a;
		return d;
	}
	var yn = [
		"CodePage",
		"Thumbnail",
		"_PID_LINKBASE",
		"_PID_HLINKS",
		"SystemIdentifier",
		"FMTID",
	].concat($a);
	function In(e) {
		switch (typeof e) {
			case "boolean":
				return 11;
			case "number":
				return (e | 0) == e ? 3 : 5;
			case "string":
				return 31;
			case "object":
				if (e instanceof Date) return 64;
				break;
		}
		return -1;
	}
	function An(e, r, t) {
		var a = zr(8),
			n = [],
			i = [];
		var s = 8,
			f = 0;
		var l = zr(8),
			o = zr(8);
		l._W(4, 2);
		l._W(4, 1200);
		o._W(4, 1);
		i.push(l);
		n.push(o);
		s += 8 + l.length;
		if (!r) {
			o = zr(8);
			o._W(4, 0);
			n.unshift(o);
			var c = [zr(4)];
			c[0]._W(4, e.length);
			for (f = 0; f < e.length; ++f) {
				var u = e[f][0];
				l = zr(4 + 4 + 2 * (u.length + 1) + (u.length % 2 ? 0 : 2));
				l._W(4, f + 2);
				l._W(4, u.length + 1);
				l._W(0, u, "dbcs");
				while (l.l != l.length) l._W(1, 0);
				c.push(l);
			}
			l = y(c);
			i.unshift(l);
			s += 8 + l.length;
		}
		for (f = 0; f < e.length; ++f) {
			if (r && !r[e[f][0]]) continue;
			if (yn.indexOf(e[f][0]) > -1) continue;
			if (e[f][1] == null) continue;
			var h = e[f][1],
				d = 0;
			if (r) {
				d = +r[e[f][0]];
				var v = t[d];
				if (v.p == "version" && typeof h == "string") {
					var p = h.split(".");
					h = (+p[0] << 16) + (+p[1] || 0);
				}
				l = Tn(v.t, h);
			} else {
				var m = In(h);
				if (m == -1) {
					m = 31;
					h = String(h);
				}
				l = Tn(m, h);
			}
			i.push(l);
			o = zr(8);
			o._W(4, !r ? 2 + f : d);
			n.push(o);
			s += 8 + l.length;
		}
		var b = 8 * (i.length + 1);
		for (f = 0; f < i.length; ++f) {
			n[f]._W(4, b);
			b += i[f].length;
		}
		a._W(4, s);
		a._W(4, i.length);
		return y([a].concat(n).concat(i));
	}
	function Rn(e, r, t) {
		var a = e.content;
		if (!a) return {};
		Wr(a, 0);
		var n,
			i,
			s,
			f,
			l = 0;
		a.chk("feff", "Byte Order: ");
		a._R(2);
		var o = a._R(4);
		var c = a._R(16);
		if (c !== U.utils.consts.HEADER_CLSID && c !== t)
			throw new Error("Bad PropertySet CLSID " + c);
		n = a._R(4);
		if (n !== 1 && n !== 2) throw new Error("Unrecognized #Sets: " + n);
		i = a._R(16);
		f = a._R(4);
		if (n === 1 && f !== a.l)
			throw new Error("Length mismatch: " + f + " !== " + a.l);
		else if (n === 2) {
			s = a._R(16);
			l = a._R(4);
		}
		var u = xn(a, r);
		var h = { SystemIdentifier: o };
		for (var d in u) h[d] = u[d];
		h.FMTID = i;
		if (n === 1) return h;
		if (l - a.l == 2) a.l += 2;
		if (a.l !== l) throw new Error("Length mismatch 2: " + a.l + " !== " + l);
		var v;
		try {
			v = xn(a, null);
		} catch (p) {}
		for (d in v) h[d] = v[d];
		h.FMTID = [i, s];
		return h;
	}
	function Dn(e, r, t, a, n, i) {
		var s = zr(n ? 68 : 48);
		var f = [s];
		s._W(2, 65534);
		s._W(2, 0);
		s._W(4, 842412599);
		s._W(16, U.utils.consts.HEADER_CLSID, "hex");
		s._W(4, n ? 2 : 1);
		s._W(16, r, "hex");
		s._W(4, n ? 68 : 48);
		var l = An(e, t, a);
		f.push(l);
		if (n) {
			var o = An(n, null, null);
			s._W(16, i, "hex");
			s._W(4, 68 + l.length);
			f.push(o);
		}
		return y(f);
	}
	function On(e, r) {
		e._R(r);
		return null;
	}
	function Fn(e, r) {
		if (!r) r = zr(e);
		for (var t = 0; t < e; ++t) r._W(1, 0);
		return r;
	}
	function Pn(e, r, t) {
		var a = [],
			n = e.l + r;
		while (e.l < n) a.push(t(e, n - e.l));
		if (n !== e.l) throw new Error("Slurp error");
		return a;
	}
	function Nn(e, r) {
		return e._R(r) === 1;
	}
	function Ln(e, r) {
		if (!r) r = zr(2);
		r._W(2, +!!e);
		return r;
	}
	function Mn(e) {
		return e._R(2, "u");
	}
	function Un(e, r) {
		if (!r) r = zr(2);
		r._W(2, e);
		return r;
	}
	function Hn(e, r) {
		return Pn(e, r, Mn);
	}
	function Wn(e) {
		var r = e._R(1),
			t = e._R(1);
		return t === 1 ? r : r === 1;
	}
	function Vn(e, r, t) {
		if (!t) t = zr(2);
		t._W(1, +e);
		t._W(1, r == "e" ? 1 : 0);
		return t;
	}
	function zn(e, t, a) {
		var n = e._R(a && a.biff >= 12 ? 2 : 1);
		var i = "sbcs-cont";
		var s = r;
		if (a && a.biff >= 8) r = 1200;
		if (!a || a.biff == 8) {
			var f = e._R(1);
			if (f) {
				i = "dbcs-cont";
			}
		} else if (a.biff == 12) {
			i = "wstr";
		}
		if (a.biff >= 2 && a.biff <= 5) i = "cpstr";
		var l = n ? e._R(n, i) : "";
		r = s;
		return l;
	}
	function Xn(e) {
		var t = r;
		r = 1200;
		var a = e._R(2),
			n = e._R(1);
		var i = n & 4,
			s = n & 8;
		var f = 1 + (n & 1);
		var l = 0,
			o;
		var c = {};
		if (s) l = e._R(2);
		if (i) o = e._R(4);
		var u = f == 2 ? "dbcs-cont" : "sbcs-cont";
		var h = a === 0 ? "" : e._R(a, u);
		if (s) e.l += 4 * l;
		if (i) e.l += o;
		c.t = h;
		if (!s) {
			c.raw = "<t>" + c.t + "</t>";
			c.r = c.t;
		}
		r = t;
		return c;
	}
	function Gn(e, r, t) {
		var a;
		if (t) {
			if (t.biff >= 2 && t.biff <= 5) return e._R(r, "cpstr");
			if (t.biff >= 12) return e._R(r, "dbcs-cont");
		}
		var n = e._R(1);
		if (n === 0) {
			a = e._R(r, "sbcs-cont");
		} else {
			a = e._R(r, "dbcs-cont");
		}
		return a;
	}
	function jn(e, r, t) {
		var a = e._R(t && t.biff == 2 ? 1 : 2);
		if (a === 0) {
			e.l++;
			return "";
		}
		return Gn(e, a, t);
	}
	function Kn(e, r, t) {
		if (t.biff > 5) return jn(e, r, t);
		var a = e._R(1);
		if (a === 0) {
			e.l++;
			return "";
		}
		return e._R(a, t.biff <= 4 || !e.lens ? "cpstr" : "sbcs-cont");
	}
	function Yn(e, r, t) {
		if (!t) t = zr(3 + 2 * e.length);
		t._W(2, e.length);
		t._W(1, 1);
		t._W(31, e, "utf16le");
		return t;
	}
	function $n(e) {
		var r = e._R(1);
		e.l++;
		var t = e._R(2);
		e.l += 2;
		return [r, t];
	}
	function Zn(e) {
		var r = e._R(4),
			t = e.l;
		var a = false;
		if (r > 24) {
			e.l += r - 24;
			if (e._R(16) === "795881f43b1d7f48af2c825dc4852763") a = true;
			e.l = t;
		}
		var n = e._R((a ? r - 24 : r) >> 1, "utf16le").replace(I, "");
		if (a) e.l += 24;
		return n;
	}
	function Qn(e) {
		e.l += 2;
		var r = e._R(0, "lpstr-ansi");
		e.l += 2;
		if (e._R(2) != 57005) throw new Error("Bad FileMoniker");
		var t = e._R(4);
		if (t === 0) return r.replace(/\\/g, "/");
		var a = e._R(4);
		if (e._R(2) != 3) throw new Error("Bad FileMoniker");
		var n = e._R(a >> 1, "utf16le").replace(I, "");
		return n;
	}
	function Jn(e, r) {
		var t = e._R(16);
		r -= 16;
		switch (t) {
			case "e0c9ea79f9bace118c8200aa004ba90b":
				return Zn(e, r);
			case "0303000000000000c000000000000046":
				return Qn(e, r);
			default:
				throw new Error("Unsupported Moniker " + t);
		}
	}
	function qn(e) {
		var r = e._R(4);
		var t = r > 0 ? e._R(r, "utf16le").replace(I, "") : "";
		return t;
	}
	function ei(e, r) {
		var t = e.l + r;
		var a = e._R(4);
		if (a !== 2) throw new Error("Unrecognized streamVersion: " + a);
		var n = e._R(2);
		e.l += 2;
		var i,
			s,
			f,
			l,
			o = "",
			c,
			u;
		if (n & 16) i = qn(e, t - e.l);
		if (n & 128) s = qn(e, t - e.l);
		if ((n & 257) === 257) f = qn(e, t - e.l);
		if ((n & 257) === 1) l = Jn(e, t - e.l);
		if (n & 8) o = qn(e, t - e.l);
		if (n & 32) c = e._R(16);
		if (n & 64) u = cn(e);
		e.l = t;
		var h = s || f || l || "";
		if (h && o) h += "#" + o;
		if (!h) h = "#" + o;
		var d = { Target: h };
		if (c) d.guid = c;
		if (u) d.time = u;
		if (i) d.Tooltip = i;
		return d;
	}
	function ri(e) {
		var r = zr(512),
			t = 0;
		var a = e.Target;
		var n = a.indexOf("#") > -1 ? 31 : 23;
		switch (a.charAt(0)) {
			case "#":
				n = 28;
				break;
			case ".":
				n &= ~2;
				break;
		}
		r._W(4, 2);
		r._W(4, n);
		var i = [8, 6815827, 6619237, 4849780, 83];
		for (t = 0; t < i.length; ++t) r._W(4, i[t]);
		if (n == 28) {
			a = a.slice(1);
			r._W(4, a.length + 1);
			for (t = 0; t < a.length; ++t) r._W(2, a.charCodeAt(t));
			r._W(2, 0);
		} else if (n & 2) {
			i = "e0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
			for (t = 0; t < i.length; ++t) r._W(1, parseInt(i[t], 16));
			r._W(4, 2 * (a.length + 1));
			for (t = 0; t < a.length; ++t) r._W(2, a.charCodeAt(t));
			r._W(2, 0);
		} else {
			i = "03 03 00 00 00 00 00 00 c0 00 00 00 00 00 00 46".split(" ");
			for (t = 0; t < i.length; ++t) r._W(1, parseInt(i[t], 16));
			var s = 0;
			while (
				a.slice(s * 3, s * 3 + 3) == "../" ||
				a.slice(s * 3, s * 3 + 3) == "..\\"
			)
				++s;
			r._W(2, s);
			r._W(4, a.length + 1);
			for (t = 0; t < a.length; ++t) r._W(1, a.charCodeAt(t) & 255);
			r._W(1, 0);
			r._W(2, 65535);
			r._W(2, 57005);
			for (t = 0; t < 6; ++t) r._W(4, 0);
		}
		return r.slice(0, r.l);
	}
	function ti(e) {
		var r = e._R(1),
			t = e._R(1),
			a = e._R(1),
			n = e._R(1);
		return [r, t, a, n];
	}
	function ai(e, r) {
		var t = ti(e, r);
		t[3] = 0;
		return t;
	}
	function ni(e) {
		var r = e._R(2);
		var t = e._R(2);
		var a = e._R(2);
		return { r: r, c: t, ixfe: a };
	}
	function ii(e, r, t, a) {
		if (!a) a = zr(6);
		a._W(2, e);
		a._W(2, r);
		a._W(2, t || 0);
		return a;
	}
	function si(e) {
		var r = e._R(2);
		var t = e._R(2);
		e.l += 8;
		return { type: r, flags: t };
	}
	function fi(e, r, t) {
		return r === 0 ? "" : Kn(e, r, t);
	}
	function li(e, r, t) {
		var a = t.biff > 8 ? 4 : 2;
		var n = e._R(a),
			i = e._R(a, "i"),
			s = e._R(a, "i");
		return [n, i, s];
	}
	function oi(e) {
		var r = e._R(2);
		var t = Nt(e);
		return [r, t];
	}
	function ci(e, r, t) {
		e.l += 4;
		r -= 4;
		var a = e.l + r;
		var n = zn(e, r, t);
		var i = e._R(2);
		a -= e.l;
		if (i !== a)
			throw new Error("Malformed AddinUdf: padding = " + a + " != " + i);
		e.l += i;
		return n;
	}
	function ui(e) {
		var r = e._R(2);
		var t = e._R(2);
		var a = e._R(2);
		var n = e._R(2);
		return { s: { c: a, r: r }, e: { c: n, r: t } };
	}
	function hi(e, r) {
		if (!r) r = zr(8);
		r._W(2, e.s.r);
		r._W(2, e.e.r);
		r._W(2, e.s.c);
		r._W(2, e.e.c);
		return r;
	}
	function di(e) {
		var r = e._R(2);
		var t = e._R(2);
		var a = e._R(1);
		var n = e._R(1);
		return { s: { c: a, r: r }, e: { c: n, r: t } };
	}
	var vi = di;
	function pi(e) {
		e.l += 4;
		var r = e._R(2);
		var t = e._R(2);
		var a = e._R(2);
		e.l += 12;
		return [t, r, a];
	}
	function mi(e) {
		var r = {};
		e.l += 4;
		e.l += 16;
		r.fSharedNote = e._R(2);
		e.l += 4;
		return r;
	}
	function bi(e) {
		var r = {};
		e.l += 4;
		e.cf = e._R(2);
		return r;
	}
	function gi(e) {
		e.l += 2;
		e.l += e._R(2);
	}
	var wi = {
		0: gi,
		4: gi,
		5: gi,
		6: gi,
		7: bi,
		8: gi,
		9: gi,
		10: gi,
		11: gi,
		12: gi,
		13: mi,
		14: gi,
		15: gi,
		16: gi,
		17: gi,
		18: gi,
		19: gi,
		20: gi,
		21: pi,
	};
	function Ei(e, r) {
		var t = e.l + r;
		var a = [];
		while (e.l < t) {
			var n = e._R(2);
			e.l -= 2;
			try {
				a.push(wi[n](e, t - e.l));
			} catch (i) {
				e.l = t;
				return a;
			}
		}
		if (e.l != t) e.l = t;
		return a;
	}
	function ki(e, r) {
		var t = { BIFFVer: 0, dt: 0 };
		t.BIFFVer = e._R(2);
		r -= 2;
		if (r >= 2) {
			t.dt = e._R(2);
			e.l -= 2;
		}
		switch (t.BIFFVer) {
			case 1536:
			case 1280:
			case 1024:
			case 768:
			case 512:
			case 2:
			case 7:
				break;
			default:
				if (r > 6) throw new Error("Unexpected BIFF Ver " + t.BIFFVer);
		}
		e._R(r);
		return t;
	}
	function Si(e, r, t) {
		var a = 1536,
			n = 16;
		switch (t.bookType) {
			case "biff8":
				break;
			case "biff5":
				a = 1280;
				n = 8;
				break;
			case "biff4":
				a = 4;
				n = 6;
				break;
			case "biff3":
				a = 3;
				n = 6;
				break;
			case "biff2":
				a = 2;
				n = 4;
				break;
			case "xla":
				break;
			default:
				throw new Error("unsupported BIFF version");
		}
		var i = zr(n);
		i._W(2, a);
		i._W(2, r);
		if (n > 4) i._W(2, 29282);
		if (n > 6) i._W(2, 1997);
		if (n > 8) {
			i._W(2, 49161);
			i._W(2, 1);
			i._W(2, 1798);
			i._W(2, 0);
		}
		return i;
	}
	function _i(e, r) {
		if (r === 0) return 1200;
		if (e._R(2) !== 1200) {
		}
		return 1200;
	}
	function Ci(e, r, t) {
		if (t.enc) {
			e.l += r;
			return "";
		}
		var a = e.l;
		var n = Kn(e, 0, t);
		e._R(r + a - e.l);
		return n;
	}
	function Bi(e, r) {
		var t = !r || r.biff == 8;
		var a = zr(t ? 112 : 54);
		a._W(r.biff == 8 ? 2 : 1, 7);
		if (t) a._W(1, 0);
		a._W(4, 859007059);
		a._W(4, 5458548 | (t ? 0 : 536870912));
		while (a.l < a.length) a._W(1, t ? 0 : 32);
		return a;
	}
	function Ti(e, r, t) {
		var a = (t && t.biff == 8) || r == 2 ? e._R(2) : ((e.l += r), 0);
		return { fDialog: a & 16 };
	}
	function xi(e, r, t) {
		var a = e._R(4);
		var n = e._R(1) & 3;
		var i = e._R(1);
		switch (i) {
			case 0:
				i = "Worksheet";
				break;
			case 1:
				i = "Macrosheet";
				break;
			case 2:
				i = "Chartsheet";
				break;
			case 6:
				i = "VBAModule";
				break;
		}
		var s = zn(e, 0, t);
		if (s.length === 0) s = "Sheet1";
		return { pos: a, hs: n, dt: i, name: s };
	}
	function yi(e, r) {
		var t = !r || r.biff >= 8 ? 2 : 1;
		var a = zr(8 + t * e.name.length);
		a._W(4, e.pos);
		a._W(1, e.hs || 0);
		a._W(1, e.dt);
		a._W(1, e.name.length);
		if (r.biff >= 8) a._W(1, 1);
		a._W(t * e.name.length, e.name, r.biff < 8 ? "sbcs" : "utf16le");
		var n = a.slice(0, a.l);
		n.l = a.l;
		return n;
	}
	function Ii(e, r) {
		var t = e.l + r;
		var a = e._R(4);
		var n = e._R(4);
		var i = [];
		for (var s = 0; s != n && e.l < t; ++s) {
			i.push(Xn(e));
		}
		i.Count = a;
		i.Unique = n;
		return i;
	}
	function Ai(e, r) {
		var t = {};
		t.dsst = e._R(2);
		e.l += r - 2;
		return t;
	}
	function Ri(e) {
		var r = {};
		r.r = e._R(2);
		r.c = e._R(2);
		r.cnt = e._R(2) - r.c;
		var t = e._R(2);
		e.l += 4;
		var a = e._R(1);
		e.l += 3;
		if (a & 7) r.level = a & 7;
		if (a & 32) r.hidden = true;
		if (a & 64) r.hpt = t / 20;
		return r;
	}
	function Di(e) {
		var r = si(e);
		if (r.type != 2211) throw new Error("Invalid Future Record " + r.type);
		var t = e._R(4);
		return t !== 0;
	}
	function Oi(e) {
		e._R(2);
		return e._R(4);
	}
	function Fi(e, r, t) {
		var a = 0;
		if (!(t && t.biff == 2)) {
			a = e._R(2);
		}
		var n = e._R(2);
		if (t && t.biff == 2) {
			a = 1 - (n >> 15);
			n &= 32767;
		}
		var i = {
			Unsynced: a & 1,
			DyZero: (a & 2) >> 1,
			ExAsc: (a & 4) >> 2,
			ExDsc: (a & 8) >> 3,
		};
		return [i, n];
	}
	function Pi(e) {
		var r = e._R(2),
			t = e._R(2),
			a = e._R(2),
			n = e._R(2);
		var i = e._R(2),
			s = e._R(2),
			f = e._R(2);
		var l = e._R(2),
			o = e._R(2);
		return {
			Pos: [r, t],
			Dim: [a, n],
			Flags: i,
			CurTab: s,
			FirstTab: f,
			Selected: l,
			TabRatio: o,
		};
	}
	function Ni() {
		var e = zr(18);
		e._W(2, 0);
		e._W(2, 0);
		e._W(2, 29280);
		e._W(2, 17600);
		e._W(2, 56);
		e._W(2, 0);
		e._W(2, 0);
		e._W(2, 1);
		e._W(2, 500);
		return e;
	}
	function Li(e, r, t) {
		if (t && t.biff >= 2 && t.biff < 8) return {};
		var a = e._R(2);
		return { RTL: a & 64 };
	}
	function Mi(e) {
		var r = zr(18),
			t = 1718;
		if (e && e.RTL) t |= 64;
		r._W(2, t);
		r._W(4, 0);
		r._W(4, 64);
		r._W(4, 0);
		r._W(4, 0);
		return r;
	}
	function Ui(e, r, t) {
		var a = { dyHeight: e._R(2), fl: e._R(2) };
		switch ((t && t.biff) || 8) {
			case 2:
				break;
			case 3:
			case 4:
				e.l += 2;
				break;
			default:
				e.l += 10;
				break;
		}
		a.name = zn(e, 0, t);
		return a;
	}
	function Hi(e, r) {
		var t = e.name || "Arial";
		var a = r && r.biff == 5,
			n = a ? 15 + t.length : 16 + 2 * t.length;
		var i = zr(n);
		i._W(2, (e.sz || 12) * 20);
		i._W(4, 0);
		i._W(2, 400);
		i._W(4, 0);
		i._W(2, 0);
		i._W(1, t.length);
		if (!a) i._W(1, 1);
		i._W((a ? 1 : 2) * t.length, t, a ? "sbcs" : "utf16le");
		return i;
	}
	function Wi(e) {
		var r = ni(e);
		r.isst = e._R(4);
		return r;
	}
	function Vi(e, r, t) {
		var a = e.l + r;
		var n = ni(e, 6);
		if (t.biff == 2) e.l++;
		var i = jn(e, a - e.l, t);
		n.val = i;
		return n;
	}
	function zi(e, r, t, a, n) {
		var i = !n || n.biff == 8;
		var s = zr(6 + 2 + +i + (1 + i) * t.length);
		ii(e, r, a, s);
		s._W(2, t.length);
		if (i) s._W(1, 1);
		s._W((1 + i) * t.length, t, i ? "utf16le" : "sbcs");
		return s;
	}
	function Xi(e, r, t) {
		var a = e._R(2);
		var n = Kn(e, 0, t);
		return [a, n];
	}
	function Gi(e, r, t, a) {
		var n = t && t.biff == 5;
		if (!a) a = zr(n ? 3 + r.length : 5 + 2 * r.length);
		a._W(2, e);
		a._W(n ? 1 : 2, r.length);
		if (!n) a._W(1, 1);
		a._W((n ? 1 : 2) * r.length, r, n ? "sbcs" : "utf16le");
		var i = a.length > a.l ? a.slice(0, a.l) : a;
		if (i.l == null) i.l = i.length;
		return i;
	}
	var ji = Kn;
	function Ki(e, r, t) {
		var a = e.l + r;
		var n = t.biff == 8 || !t.biff ? 4 : 2;
		var i = e._R(n),
			s = e._R(n);
		var f = e._R(2),
			l = e._R(2);
		e.l = a;
		return { s: { r: i, c: f }, e: { r: s, c: l } };
	}
	function Yi(e, r) {
		var t = r.biff == 8 || !r.biff ? 4 : 2;
		var a = zr(2 * t + 6);
		a._W(t, e.s.r);
		a._W(t, e.e.r + 1);
		a._W(2, e.s.c);
		a._W(2, e.e.c + 1);
		a._W(2, 0);
		return a;
	}
	function $i(e) {
		var r = e._R(2),
			t = e._R(2);
		var a = oi(e);
		return { r: r, c: t, ixfe: a[0], rknum: a[1] };
	}
	function Zi(e, r) {
		var t = e.l + r - 2;
		var a = e._R(2),
			n = e._R(2);
		var i = [];
		while (e.l < t) i.push(oi(e));
		if (e.l !== t) throw new Error("MulRK read error");
		var s = e._R(2);
		if (i.length != s - n + 1) throw new Error("MulRK length mismatch");
		return { r: a, c: n, C: s, rkrec: i };
	}
	function Qi(e, r) {
		var t = e.l + r - 2;
		var a = e._R(2),
			n = e._R(2);
		var i = [];
		while (e.l < t) i.push(e._R(2));
		if (e.l !== t) throw new Error("MulBlank read error");
		var s = e._R(2);
		if (i.length != s - n + 1) throw new Error("MulBlank length mismatch");
		return { r: a, c: n, C: s, ixfe: i };
	}
	function Ji(e, r, t, a) {
		var n = {};
		var i = e._R(4),
			s = e._R(4);
		var f = e._R(4),
			l = e._R(2);
		n.patternType = ga[f >> 26];
		if (!a.cellStyles) return n;
		n.alc = i & 7;
		n.fWrap = (i >> 3) & 1;
		n.alcV = (i >> 4) & 7;
		n.fJustLast = (i >> 7) & 1;
		n.trot = (i >> 8) & 255;
		n.cIndent = (i >> 16) & 15;
		n.fShrinkToFit = (i >> 20) & 1;
		n.iReadOrder = (i >> 22) & 2;
		n.fAtrNum = (i >> 26) & 1;
		n.fAtrFnt = (i >> 27) & 1;
		n.fAtrAlc = (i >> 28) & 1;
		n.fAtrBdr = (i >> 29) & 1;
		n.fAtrPat = (i >> 30) & 1;
		n.fAtrProt = (i >> 31) & 1;
		n.dgLeft = s & 15;
		n.dgRight = (s >> 4) & 15;
		n.dgTop = (s >> 8) & 15;
		n.dgBottom = (s >> 12) & 15;
		n.icvLeft = (s >> 16) & 127;
		n.icvRight = (s >> 23) & 127;
		n.grbitDiag = (s >> 30) & 3;
		n.icvTop = f & 127;
		n.icvBottom = (f >> 7) & 127;
		n.icvDiag = (f >> 14) & 127;
		n.dgDiag = (f >> 21) & 15;
		n.icvFore = l & 127;
		n.icvBack = (l >> 7) & 127;
		n.fsxButton = (l >> 14) & 1;
		return n;
	}
	function qi(e, r, t) {
		var a = {};
		a.ifnt = e._R(2);
		a.numFmtId = e._R(2);
		a.flags = e._R(2);
		a.fStyle = (a.flags >> 2) & 1;
		r -= 6;
		a.data = Ji(e, r, a.fStyle, t);
		return a;
	}
	function es(e, r, t, a) {
		var n = t && t.biff == 5;
		if (!a) a = zr(n ? 16 : 20);
		a._W(2, 0);
		if (e.style) {
			a._W(2, e.numFmtId || 0);
			a._W(2, 65524);
		} else {
			a._W(2, e.numFmtId || 0);
			a._W(2, r << 4);
		}
		a._W(4, 0);
		a._W(4, 0);
		if (!n) a._W(4, 0);
		a._W(2, 0);
		return a;
	}
	function rs(e) {
		e.l += 4;
		var r = [e._R(2), e._R(2)];
		if (r[0] !== 0) r[0]--;
		if (r[1] !== 0) r[1]--;
		if (r[0] > 7 || r[1] > 7) throw new Error("Bad Gutters: " + r.join("|"));
		return r;
	}
	function ts(e) {
		var r = zr(8);
		r._W(4, 0);
		r._W(2, e[0] ? e[0] + 1 : 0);
		r._W(2, e[1] ? e[1] + 1 : 0);
		return r;
	}
	function as(e, r, t) {
		var a = ni(e, 6);
		if (t.biff == 2) ++e.l;
		var n = Wn(e, 2);
		a.val = n;
		a.t = n === true || n === false ? "b" : "e";
		return a;
	}
	function ns(e, r, t, a, n, i) {
		var s = zr(8);
		ii(e, r, a, s);
		Vn(t, i, s);
		return s;
	}
	function is(e) {
		var r = ni(e, 6);
		var t = Vt(e, 8);
		r.val = t;
		return r;
	}
	function ss(e, r, t, a) {
		var n = zr(14);
		ii(e, r, a, n);
		zt(t, n);
		return n;
	}
	var fs = fi;
	function ls(e, r, t) {
		var a = e.l + r;
		var n = e._R(2);
		var i = e._R(2);
		t.sbcch = i;
		if (i == 1025 || i == 14849) return [i, n];
		if (i < 1 || i > 255) throw new Error("Unexpected SupBook type: " + i);
		var s = Gn(e, i);
		var f = [];
		while (a > e.l) f.push(jn(e));
		return [i, n, s, f];
	}
	function os(e, r, t) {
		var a = e._R(2);
		var n;
		var i = {
			fBuiltIn: a & 1,
			fWantAdvise: (a >>> 1) & 1,
			fWantPict: (a >>> 2) & 1,
			fOle: (a >>> 3) & 1,
			fOleLink: (a >>> 4) & 1,
			cf: (a >>> 5) & 1023,
			fIcon: (a >>> 15) & 1,
		};
		if (t.sbcch === 14849) n = ci(e, r - 2, t);
		i.body = n || e._R(r - 2);
		if (typeof n === "string") i.Name = n;
		return i;
	}
	var cs = [
		"_xlnm.Consolidate_Area",
		"_xlnm.Auto_Open",
		"_xlnm.Auto_Close",
		"_xlnm.Extract",
		"_xlnm.Database",
		"_xlnm.Criteria",
		"_xlnm.Print_Area",
		"_xlnm.Print_Titles",
		"_xlnm.Recorder",
		"_xlnm.Data_Form",
		"_xlnm.Auto_Activate",
		"_xlnm.Auto_Deactivate",
		"_xlnm.Sheet_Title",
		"_xlnm._FilterDatabase",
	];
	function us(e, r, t) {
		var a = e.l + r;
		var n = e._R(2);
		var i = e._R(1);
		var s = e._R(1);
		var f = e._R(t && t.biff == 2 ? 1 : 2);
		var l = 0;
		if (!t || t.biff >= 5) {
			if (t.biff != 5) e.l += 2;
			l = e._R(2);
			if (t.biff == 5) e.l += 2;
			e.l += 4;
		}
		var o = Gn(e, s, t);
		if (n & 32) o = cs[o.charCodeAt(0)];
		var c = a - e.l;
		if (t && t.biff == 2) --c;
		var u = a == e.l || f === 0 ? [] : Tu(e, c, t, f);
		return { chKey: i, Name: o, itab: l, rgce: u };
	}
	function hs(e, r, t) {
		if (t.biff < 8) return ds(e, r, t);
		var a = [],
			n = e.l + r,
			i = e._R(t.biff > 8 ? 4 : 2);
		while (i-- !== 0) a.push(li(e, t.biff > 8 ? 12 : 6, t));
		if (e.l != n) throw new Error("Bad ExternSheet: " + e.l + " != " + n);
		return a;
	}
	function ds(e, r, t) {
		if (e[e.l + 1] == 3) e[e.l]++;
		var a = zn(e, r, t);
		return a.charCodeAt(0) == 3 ? a.slice(1) : a;
	}
	function vs(e, r, t) {
		if (t.biff < 8) {
			e.l += r;
			return;
		}
		var a = e._R(2);
		var n = e._R(2);
		var i = Gn(e, a, t);
		var s = Gn(e, n, t);
		return [i, s];
	}
	function ps(e, r, t) {
		var a = di(e, 6);
		e.l++;
		var n = e._R(1);
		r -= 8;
		return [xu(e, r, t), n, a];
	}
	function ms(e, r, t) {
		var a = vi(e, 6);
		switch (t.biff) {
			case 2:
				e.l++;
				r -= 7;
				break;
			case 3:
			case 4:
				e.l += 2;
				r -= 8;
				break;
			default:
				e.l += 6;
				r -= 12;
		}
		return [a, Cu(e, r, t, a)];
	}
	function bs(e) {
		var r = e._R(4) !== 0;
		var t = e._R(4) !== 0;
		var a = e._R(4);
		return [r, t, a];
	}
	function gs(e, r, t) {
		if (t.biff < 8) return;
		var a = e._R(2),
			n = e._R(2);
		var i = e._R(2),
			s = e._R(2);
		var f = Kn(e, 0, t);
		if (t.biff < 8) e._R(1);
		return [{ r: a, c: n }, f, s, i];
	}
	function ws(e, r, t) {
		return gs(e, r, t);
	}
	function Es(e, r) {
		var t = [];
		var a = e._R(2);
		while (a--) t.push(ui(e, r));
		return t;
	}
	function ks(e) {
		var r = zr(2 + e.length * 8);
		r._W(2, e.length);
		for (var t = 0; t < e.length; ++t) hi(e[t], r);
		return r;
	}
	function Ss(e, r, t) {
		if (t && t.biff < 8) return Cs(e, r, t);
		var a = pi(e, 22);
		var n = Ei(e, r - 22, a[1]);
		return { cmo: a, ft: n };
	}
	var _s = [];
	_s[8] = function (e, r) {
		var t = e.l + r;
		e.l += 10;
		var a = e._R(2);
		e.l += 4;
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 4;
		var n = e._R(1);
		e.l += n;
		e.l = t;
		return { fmt: a };
	};
	function Cs(e, r, t) {
		e.l += 4;
		var a = e._R(2);
		var n = e._R(2);
		var i = e._R(2);
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 2;
		e.l += 6;
		r -= 36;
		var s = [];
		s.push((_s[a] || Vr)(e, r, t));
		return { cmo: [n, a, i], ft: s };
	}
	function Bs(e, r, t) {
		var a = e.l;
		var n = "";
		try {
			e.l += 4;
			var i = (t.lastobj || { cmo: [0, 0] }).cmo[1];
			var s;
			if ([0, 5, 7, 11, 12, 14].indexOf(i) == -1) e.l += 6;
			else s = $n(e, 6, t);
			var f = e._R(2);
			e._R(2);
			Mn(e, 2);
			var l = e._R(2);
			e.l += l;
			for (var o = 1; o < e.lens.length - 1; ++o) {
				if (e.l - a != e.lens[o]) throw new Error("TxO: bad continue record");
				var c = e[e.l];
				var u = Gn(e, e.lens[o + 1] - e.lens[o] - 1);
				n += u;
				if (n.length >= (c ? f : 2 * f)) break;
			}
			if (n.length !== f && n.length !== f * 2) {
				throw new Error("cchText: " + f + " != " + n.length);
			}
			e.l = a + r;
			return { t: n };
		} catch (h) {
			e.l = a + r;
			return { t: n };
		}
	}
	function Ts(e, r) {
		var t = ui(e, 8);
		e.l += 16;
		var a = ei(e, r - 24);
		return [t, a];
	}
	function xs(e) {
		var r = zr(24);
		var t = lt(e[0]);
		r._W(2, t.r);
		r._W(2, t.r);
		r._W(2, t.c);
		r._W(2, t.c);
		var a = "d0 c9 ea 79 f9 ba ce 11 8c 82 00 aa 00 4b a9 0b".split(" ");
		for (var n = 0; n < 16; ++n) r._W(1, parseInt(a[n], 16));
		return y([r, ri(e[1])]);
	}
	function ys(e, r) {
		e._R(2);
		var t = ui(e, 8);
		var a = e._R((r - 10) / 2, "dbcs-cont");
		a = a.replace(I, "");
		return [t, a];
	}
	function Is(e) {
		var r = e[1].Tooltip;
		var t = zr(10 + 2 * (r.length + 1));
		t._W(2, 2048);
		var a = lt(e[0]);
		t._W(2, a.r);
		t._W(2, a.r);
		t._W(2, a.c);
		t._W(2, a.c);
		for (var n = 0; n < r.length; ++n) t._W(2, r.charCodeAt(n));
		t._W(2, 0);
		return t;
	}
	function As(e) {
		var r = [0, 0],
			t;
		t = e._R(2);
		r[0] = ba[t] || t;
		t = e._R(2);
		r[1] = ba[t] || t;
		return r;
	}
	function Rs(e) {
		if (!e) e = zr(4);
		e._W(2, 1);
		e._W(2, 1);
		return e;
	}
	function Ds(e) {
		var r = e._R(2);
		var t = [];
		while (r-- > 0) t.push(ai(e, 8));
		return t;
	}
	function Os(e) {
		var r = e._R(2);
		var t = [];
		while (r-- > 0) t.push(ai(e, 8));
		return t;
	}
	function Fs(e) {
		e.l += 2;
		var r = { cxfs: 0, crc: 0 };
		r.cxfs = e._R(2);
		r.crc = e._R(4);
		return r;
	}
	function Ps(e, r, t) {
		if (!t.cellStyles) return Vr(e, r);
		var a = t && t.biff >= 12 ? 4 : 2;
		var n = e._R(a);
		var i = e._R(a);
		var s = e._R(a);
		var f = e._R(a);
		var l = e._R(2);
		if (a == 2) e.l += 2;
		return { s: n, e: i, w: s, ixfe: f, flags: l };
	}
	function Ns(e, r) {
		var t = {};
		if (r < 32) return t;
		e.l += 16;
		t.header = Vt(e, 8);
		t.footer = Vt(e, 8);
		e.l += 2;
		return t;
	}
	function Ls(e, r, t) {
		var a = { area: false };
		if (t.biff != 5) {
			e.l += r;
			return a;
		}
		var n = e._R(1);
		e.l += 3;
		if (n & 16) a.area = true;
		return a;
	}
	function Ms(e) {
		var r = zr(2 * e);
		for (var t = 0; t < e; ++t) r._W(2, t + 1);
		return r;
	}
	var Us = ni;
	var Hs = Hn;
	var Ws = jn;
	function Vs(e) {
		var r = e._R(2);
		var t = e._R(2);
		var a = e._R(4);
		var n = { fmt: r, env: t, len: a, data: e.slice(e.l, e.l + a) };
		e.l += a;
		return n;
	}
	function zs(e, r, t) {
		var a = ni(e, 6);
		++e.l;
		var n = Kn(e, r - 7, t);
		a.t = "str";
		a.val = n;
		return a;
	}
	function Xs(e) {
		var r = ni(e, 6);
		++e.l;
		var t = Vt(e, 8);
		r.t = "n";
		r.val = t;
		return r;
	}
	function Gs(e, r, t) {
		var a = zr(15);
		vp(a, e, r);
		a._W(8, t, "f");
		return a;
	}
	function js(e) {
		var r = ni(e, 6);
		++e.l;
		var t = e._R(2);
		r.t = "n";
		r.val = t;
		return r;
	}
	function Ks(e, r, t) {
		var a = zr(9);
		vp(a, e, r);
		a._W(2, t);
		return a;
	}
	function Ys(e) {
		var r = e._R(1);
		if (r === 0) {
			e.l++;
			return "";
		}
		return e._R(r, "sbcs-cont");
	}
	function $s(e, r) {
		e.l += 6;
		e.l += 2;
		e.l += 1;
		e.l += 3;
		e.l += 1;
		e.l += r - 13;
	}
	function Zs(e, r, t) {
		var a = e.l + r;
		var n = ni(e, 6);
		var i = e._R(2);
		var s = Gn(e, i, t);
		e.l = a;
		n.t = "str";
		n.val = s;
		return n;
	}
	var Qs = (function () {
		var e = {
			1: 437,
			2: 850,
			3: 1252,
			4: 1e4,
			100: 852,
			101: 866,
			102: 865,
			103: 861,
			104: 895,
			105: 620,
			106: 737,
			107: 857,
			120: 950,
			121: 949,
			122: 936,
			123: 932,
			124: 874,
			125: 1255,
			126: 1256,
			150: 10007,
			151: 10029,
			152: 10006,
			200: 1250,
			201: 1251,
			202: 1254,
			203: 1253,
			0: 20127,
			8: 865,
			9: 437,
			10: 850,
			11: 437,
			13: 437,
			14: 850,
			15: 437,
			16: 850,
			17: 437,
			18: 850,
			19: 932,
			20: 850,
			21: 437,
			22: 850,
			23: 865,
			24: 437,
			25: 437,
			26: 850,
			27: 437,
			28: 863,
			29: 850,
			31: 852,
			34: 852,
			35: 852,
			36: 860,
			37: 850,
			38: 866,
			55: 850,
			64: 852,
			77: 936,
			78: 949,
			79: 950,
			80: 874,
			87: 1252,
			88: 1252,
			89: 1252,
			255: 16969,
		};
		function r(r, t) {
			var a = [];
			var n = S(1);
			switch (t.type) {
				case "base64":
					n = _(b.decode(r));
					break;
				case "binary":
					n = _(r);
					break;
				case "buffer":
				case "array":
					n = r;
					break;
			}
			Wr(n, 0);
			var i = n._R(1);
			var s = false;
			var f = false,
				l = false;
			switch (i) {
				case 2:
				case 3:
					break;
				case 48:
					f = true;
					s = true;
					break;
				case 49:
					f = true;
					break;
				case 131:
					s = true;
					break;
				case 139:
					s = true;
					break;
				case 140:
					s = true;
					l = true;
					break;
				case 245:
					s = true;
					break;
				default:
					throw new Error("DBF Unsupported Version: " + i.toString(16));
			}
			var o = 0,
				c = 0;
			if (i == 2) o = n._R(2);
			n.l += 3;
			if (i != 2) o = n._R(4);
			if (i != 2) c = n._R(2);
			var u = n._R(2);
			var h = 1252;
			if (i != 2) {
				n.l += 16;
				n._R(1);
				if (n[n.l] !== 0) h = e[n[n.l]];
				n.l += 1;
				n.l += 2;
			}
			if (l) n.l += 36;
			var d = [],
				v = {};
			var p = c - 10 - (f ? 264 : 0),
				m = l ? 32 : 11;
			while (i == 2 ? n.l < n.length && n[n.l] != 13 : n.l < p) {
				v = {};
				v.name = cptable.utils
					.decode(h, n.slice(n.l, n.l + m))
					.replace(/[\u0000\r\n].*$/g, "");
				n.l += m;
				v.type = String.fromCharCode(n._R(1));
				if (i != 2 && !l) v.offset = n._R(4);
				v.len = n._R(1);
				if (i == 2) v.offset = n._R(2);
				v.dec = n._R(1);
				if (v.name.length) d.push(v);
				if (i != 2) n.l += l ? 13 : 14;
				switch (v.type) {
					case "B":
						if ((!f || v.len != 8) && t.WTF)
							console.log("Skipping " + v.name + ":" + v.type);
						break;
					case "G":
					case "P":
						if (t.WTF) console.log("Skipping " + v.name + ":" + v.type);
						break;
					case "C":
					case "D":
					case "F":
					case "I":
					case "L":
					case "M":
					case "N":
					case "O":
					case "T":
					case "Y":
					case "0":
					case "@":
					case "+":
						break;
					default:
						throw new Error("Unknown Field Type: " + v.type);
				}
			}
			if (n[n.l] !== 13) n.l = c - 1;
			else if (i == 2) n.l = 521;
			if (i != 2) {
				if (n._R(1) !== 13)
					throw new Error("DBF Terminator not found " + n.l + " " + n[n.l]);
				n.l = c;
			}
			var g = 0,
				w = 0;
			a[0] = [];
			for (w = 0; w != d.length; ++w) a[0][w] = d[w].name;
			while (o-- > 0) {
				if (n[n.l] === 42) {
					n.l += u;
					continue;
				}
				++n.l;
				a[++g] = [];
				w = 0;
				for (w = 0; w != d.length; ++w) {
					var E = n.slice(n.l, n.l + d[w].len);
					n.l += d[w].len;
					Wr(E, 0);
					var k = cptable.utils.decode(h, E);
					switch (d[w].type) {
						case "C":
							a[g][w] = cptable.utils.decode(h, E);
							a[g][w] = a[g][w].trim();
							break;
						case "D":
							if (k.length === 8)
								a[g][w] = new Date(
									+k.slice(0, 4),
									+k.slice(4, 6) - 1,
									+k.slice(6, 8)
								);
							else a[g][w] = k;
							break;
						case "F":
							a[g][w] = parseFloat(k.trim());
							break;
						case "+":
						case "I":
							a[g][w] = l ? E._R(-4, "i") ^ 2147483648 : E._R(4, "i");
							break;
						case "L":
							switch (k.toUpperCase()) {
								case "Y":
								case "T":
									a[g][w] = true;
									break;
								case "N":
								case "F":
									a[g][w] = false;
									break;
								case " ":
								case "?":
									a[g][w] = false;
									break;
								default:
									throw new Error("DBF Unrecognized L:|" + k + "|");
							}
							break;
						case "M":
							if (!s)
								throw new Error(
									"DBF Unexpected MEMO for type " + i.toString(16)
								);
							a[g][w] = "##MEMO##" + (l ? parseInt(k.trim(), 10) : E._R(4));
							break;
						case "N":
							a[g][w] = +k.replace(/\u0000/g, "").trim();
							break;
						case "@":
							a[g][w] = new Date(E._R(-8, "f") - 621356832e5);
							break;
						case "T":
							a[g][w] = new Date((E._R(4) - 2440588) * 864e5 + E._R(4));
							break;
						case "Y":
							a[g][w] = E._R(4, "i") / 1e4;
							break;
						case "O":
							a[g][w] = -E._R(-8, "f");
							break;
						case "B":
							if (f && d[w].len == 8) {
								a[g][w] = E._R(8, "f");
								break;
							}
						case "G":
						case "P":
							E.l += d[w].len;
							break;
						case "0":
							if (d[w].name === "_NullFlags") break;
						default:
							throw new Error("DBF Unsupported data type " + d[w].type);
					}
				}
			}
			if (i != 2)
				if (n.l < n.length && n[n.l++] != 26)
					throw new Error(
						"DBF EOF Marker missing " +
							(n.l - 1) +
							" of " +
							n.length +
							" " +
							n[n.l - 1].toString(16)
					);
			if (t && t.sheetRows) a = a.slice(0, t.sheetRows);
			return a;
		}
		function t(e, t) {
			var a = t || {};
			if (!a.dateNF) a.dateNF = "yyyymmdd";
			return bt(r(e, a), a);
		}
		function a(e, r) {
			try {
				return pt(t(e, r), r);
			} catch (a) {
				if (r && r.WTF) throw a;
			}
			return { SheetNames: [], Sheets: {} };
		}
		var n = { B: 8, C: 250, L: 1, D: 8, "?": 0, "": 0 };
		function i(e, r) {
			var t = r || {};
			if (t.type == "string") throw new Error("Cannot write DBF to JS string");
			var a = Gr();
			var i = Im(e, { header: 1, raw: true, cellDates: true });
			var s = i[0],
				f = i.slice(1);
			var l = 0,
				o = 0,
				c = 0,
				u = 1;
			for (l = 0; l < s.length; ++l) {
				if (l == null) continue;
				++c;
				if (typeof s[l] === "number") s[l] = s[l].toString(10);
				if (typeof s[l] !== "string")
					throw new Error(
						"DBF Invalid column name " + s[l] + " |" + typeof s[l] + "|"
					);
				if (s.indexOf(s[l]) !== l)
					for (o = 0; o < 1024; ++o)
						if (s.indexOf(s[l] + "_" + o) == -1) {
							s[l] += "_" + o;
							break;
						}
			}
			var h = ht(e["!ref"]);
			var d = [];
			for (l = 0; l <= h.e.c - h.s.c; ++l) {
				var v = [];
				for (o = 0; o < f.length; ++o) {
					if (f[o][l] != null) v.push(f[o][l]);
				}
				if (v.length == 0 || s[l] == null) {
					d[l] = "?";
					continue;
				}
				var p = "",
					m = "";
				for (o = 0; o < v.length; ++o) {
					switch (typeof v[o]) {
						case "number":
							m = "B";
							break;
						case "string":
							m = "C";
							break;
						case "boolean":
							m = "L";
							break;
						case "object":
							m = v[o] instanceof Date ? "D" : "C";
							break;
						default:
							m = "C";
					}
					p = p && p != m ? "C" : m;
					if (p == "C") break;
				}
				u += n[p] || 0;
				d[l] = p;
			}
			var b = a.next(32);
			b._W(4, 318902576);
			b._W(4, f.length);
			b._W(2, 296 + 32 * c);
			b._W(2, u);
			for (l = 0; l < 4; ++l) b._W(4, 0);
			b._W(4, 768);
			for (l = 0, o = 0; l < s.length; ++l) {
				if (s[l] == null) continue;
				var g = a.next(32);
				var w = (s[l].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);
				g._W(1, w, "sbcs");
				g._W(1, d[l] == "?" ? "C" : d[l], "sbcs");
				g._W(4, o);
				g._W(1, n[d[l]] || 0);
				g._W(1, 0);
				g._W(1, 2);
				g._W(4, 0);
				g._W(1, 0);
				g._W(4, 0);
				g._W(4, 0);
				o += n[d[l]] || 0;
			}
			var E = a.next(264);
			E._W(4, 13);
			for (l = 0; l < 65; ++l) E._W(4, 0);
			for (l = 0; l < f.length; ++l) {
				var k = a.next(u);
				k._W(1, 0);
				for (o = 0; o < s.length; ++o) {
					if (s[o] == null) continue;
					switch (d[o]) {
						case "L":
							k._W(1, f[l][o] == null ? 63 : f[l][o] ? 84 : 70);
							break;
						case "B":
							k._W(8, f[l][o] || 0, "f");
							break;
						case "D":
							if (!f[l][o]) k._W(8, "00000000", "sbcs");
							else {
								k._W(4, ("0000" + f[l][o].getFullYear()).slice(-4), "sbcs");
								k._W(2, ("00" + (f[l][o].getMonth() + 1)).slice(-2), "sbcs");
								k._W(2, ("00" + f[l][o].getDate()).slice(-2), "sbcs");
							}
							break;
						case "C":
							var S = String(f[l][o] || "");
							k._W(1, S, "sbcs");
							for (c = 0; c < 250 - S.length; ++c) k._W(1, 32);
							break;
					}
				}
			}
			a.next(1)._W(1, 26);
			return a.end();
		}
		return { to_workbook: a, to_sheet: t, from_sheet: i };
	})();
	var Js = (function () {
		function e(e, t) {
			switch (t.type) {
				case "base64":
					return r(b.decode(e), t);
				case "binary":
					return r(e, t);
				case "buffer":
					return r(e.toString("binary"), t);
				case "array":
					return r(ne(e), t);
			}
			throw new Error("Unrecognized type " + t.type);
		}
		function r(e, r) {
			var t = e.split(/[\n\r]+/),
				a = -1,
				n = -1,
				i = 0,
				s = 0,
				f = [];
			var l = [];
			var o = null;
			var c = {},
				u = [],
				h = [],
				d = [];
			var v = 0,
				p;
			for (; i !== t.length; ++i) {
				v = 0;
				var m = t[i].trim();
				var b = m
					.replace(/;;/g, "")
					.split(";")
					.map(function (e) {
						return e.replace(/\u0001/g, ";");
					});
				var g = b[0],
					w;
				if (m.length > 0)
					switch (g) {
						case "ID":
							break;
						case "E":
							break;
						case "B":
							break;
						case "O":
							break;
						case "P":
							if (b[1].charAt(0) == "P") l.push(m.slice(3).replace(/;;/g, ";"));
							break;
						case "C":
							var E = false,
								k = false;
							for (s = 1; s < b.length; ++s)
								switch (b[s].charAt(0)) {
									case "X":
										n = parseInt(b[s].slice(1)) - 1;
										k = true;
										break;
									case "Y":
										a = parseInt(b[s].slice(1)) - 1;
										if (!k) n = 0;
										for (p = f.length; p <= a; ++p) f[p] = [];
										break;
									case "K":
										w = b[s].slice(1);
										if (w.charAt(0) === '"') w = w.slice(1, w.length - 1);
										else if (w === "TRUE") w = true;
										else if (w === "FALSE") w = false;
										else if (!isNaN(fe(w))) {
											w = fe(w);
											if (o !== null && R.is_date(o)) w = q(w);
										} else if (!isNaN(le(w).getDate())) {
											w = ae(w);
										}
										if (
											typeof cptable !== "undefined" &&
											typeof w == "string" &&
											(r || {}).type != "string" &&
											(r || {}).codepage
										)
											w = cptable.utils.decode(r.codepage, w);
										E = true;
										break;
									case "E":
										var S = Vo(b[s].slice(1), { r: a, c: n });
										f[a][n] = [f[a][n], S];
										break;
									default:
										if (r && r.WTF) throw new Error("SYLK bad record " + m);
								}
							if (E) {
								f[a][n] = w;
								o = null;
							}
							break;
						case "F":
							var _ = 0;
							for (s = 1; s < b.length; ++s)
								switch (b[s].charAt(0)) {
									case "X":
										n = parseInt(b[s].slice(1)) - 1;
										++_;
										break;
									case "Y":
										a = parseInt(b[s].slice(1)) - 1;
										for (p = f.length; p <= a; ++p) f[p] = [];
										break;
									case "M":
										v = parseInt(b[s].slice(1)) / 20;
										break;
									case "F":
										break;
									case "G":
										break;
									case "P":
										o = l[parseInt(b[s].slice(1))];
										break;
									case "S":
										break;
									case "D":
										break;
									case "N":
										break;
									case "W":
										d = b[s].slice(1).split(" ");
										for (p = parseInt(d[0], 10); p <= parseInt(d[1], 10); ++p) {
											v = parseInt(d[2], 10);
											h[p - 1] = v === 0 ? { hidden: true } : { wch: v };
											il(h[p - 1]);
										}
										break;
									case "C":
										n = parseInt(b[s].slice(1)) - 1;
										if (!h[n]) h[n] = {};
										break;
									case "R":
										a = parseInt(b[s].slice(1)) - 1;
										if (!u[a]) u[a] = {};
										if (v > 0) {
											u[a].hpt = v;
											u[a].hpx = ol(v);
										} else if (v === 0) u[a].hidden = true;
										break;
									default:
										if (r && r.WTF) throw new Error("SYLK bad record " + m);
								}
							if (_ < 1) o = null;
							break;
						default:
							if (r && r.WTF) throw new Error("SYLK bad record " + m);
					}
			}
			if (u.length > 0) c["!rows"] = u;
			if (h.length > 0) c["!cols"] = h;
			if (r && r.sheetRows) f = f.slice(0, r.sheetRows);
			return [f, c];
		}
		function t(r, t) {
			var a = e(r, t);
			var n = a[0],
				i = a[1];
			var s = bt(n, t);
			X(i).forEach(function (e) {
				s[e] = i[e];
			});
			return s;
		}
		function a(e, r) {
			return pt(t(e, r), r);
		}
		function n(e, r, t, a) {
			var n = "C;Y" + (t + 1) + ";X" + (a + 1) + ";K";
			switch (e.t) {
				case "n":
					n += e.v || 0;
					if (e.f && !e.F) n += ";E" + Xo(e.f, { r: t, c: a });
					break;
				case "b":
					n += e.v ? "TRUE" : "FALSE";
					break;
				case "e":
					n += e.w || e.v;
					break;
				case "d":
					n += '"' + (e.w || e.v) + '"';
					break;
				case "s":
					n += '"' + e.v.replace(/"/g, "") + '"';
					break;
			}
			return n;
		}
		function i(e, r) {
			r.forEach(function (r, t) {
				var a = "F;W" + (t + 1) + " " + (t + 1) + " ";
				if (r.hidden) a += "0";
				else {
					if (typeof r.width == "number") r.wpx = el(r.width);
					if (typeof r.wpx == "number") r.wch = rl(r.wpx);
					if (typeof r.wch == "number") a += Math.round(r.wch);
				}
				if (a.charAt(a.length - 1) != " ") e.push(a);
			});
		}
		function s(e, r) {
			r.forEach(function (r, t) {
				var a = "F;";
				if (r.hidden) a += "M0;";
				else if (r.hpt) a += "M" + 20 * r.hpt + ";";
				else if (r.hpx) a += "M" + 20 * ll(r.hpx) + ";";
				if (a.length > 2) e.push(a + "R" + (t + 1));
			});
		}
		function f(e, r) {
			var t = ["ID;PWXL;N;E"],
				a = [];
			var f = ht(e["!ref"]),
				l;
			var o = Array.isArray(e);
			var c = "\r\n";
			t.push("P;PGeneral");
			t.push("F;P0;DG0G8;M255");
			if (e["!cols"]) i(t, e["!cols"]);
			if (e["!rows"]) s(t, e["!rows"]);
			t.push(
				"B;Y" +
					(f.e.r - f.s.r + 1) +
					";X" +
					(f.e.c - f.s.c + 1) +
					";D" +
					[f.s.c, f.s.r, f.e.c, f.e.r].join(" ")
			);
			for (var u = f.s.r; u <= f.e.r; ++u) {
				for (var h = f.s.c; h <= f.e.c; ++h) {
					var d = ot({ r: u, c: h });
					l = o ? (e[u] || [])[h] : e[d];
					if (!l || (l.v == null && (!l.f || l.F))) continue;
					a.push(n(l, e, u, h, r));
				}
			}
			return t.join(c) + c + a.join(c) + c + "E" + c;
		}
		return { to_workbook: a, to_sheet: t, from_sheet: f };
	})();
	var qs = (function () {
		function e(e, t) {
			switch (t.type) {
				case "base64":
					return r(b.decode(e), t);
				case "binary":
					return r(e, t);
				case "buffer":
					return r(e.toString("binary"), t);
				case "array":
					return r(ne(e), t);
			}
			throw new Error("Unrecognized type " + t.type);
		}
		function r(e, r) {
			var t = e.split("\n"),
				a = -1,
				n = -1,
				i = 0,
				s = [];
			for (; i !== t.length; ++i) {
				if (t[i].trim() === "BOT") {
					s[++a] = [];
					n = 0;
					continue;
				}
				if (a < 0) continue;
				var f = t[i].trim().split(",");
				var l = f[0],
					o = f[1];
				++i;
				var c = t[i].trim();
				switch (+l) {
					case -1:
						if (c === "BOT") {
							s[++a] = [];
							n = 0;
							continue;
						} else if (c !== "EOD")
							throw new Error("Unrecognized DIF special command " + c);
						break;
					case 0:
						if (c === "TRUE") s[a][n] = true;
						else if (c === "FALSE") s[a][n] = false;
						else if (!isNaN(fe(o))) s[a][n] = fe(o);
						else if (!isNaN(le(o).getDate())) s[a][n] = ae(o);
						else s[a][n] = o;
						++n;
						break;
					case 1:
						c = c.slice(1, c.length - 1);
						s[a][n++] = c !== "" ? c : null;
						break;
				}
				if (c === "EOD") break;
			}
			if (r && r.sheetRows) s = s.slice(0, r.sheetRows);
			return s;
		}
		function t(r, t) {
			return bt(e(r, t), t);
		}
		function a(e, r) {
			return pt(t(e, r), r);
		}
		var n = (function () {
			var e = function t(e, r, a, n, i) {
				e.push(r);
				e.push(a + "," + n);
				e.push('"' + i.replace(/"/g, '""') + '"');
			};
			var r = function a(e, r, t, n) {
				e.push(r + "," + t);
				e.push(r == 1 ? '"' + n.replace(/"/g, '""') + '"' : n);
			};
			return function n(t) {
				var a = [];
				var n = ht(t["!ref"]),
					i;
				var s = Array.isArray(t);
				e(a, "TABLE", 0, 1, "sheetjs");
				e(a, "VECTORS", 0, n.e.r - n.s.r + 1, "");
				e(a, "TUPLES", 0, n.e.c - n.s.c + 1, "");
				e(a, "DATA", 0, 0, "");
				for (var f = n.s.r; f <= n.e.r; ++f) {
					r(a, -1, 0, "BOT");
					for (var l = n.s.c; l <= n.e.c; ++l) {
						var o = ot({ r: f, c: l });
						i = s ? (t[f] || [])[l] : t[o];
						if (!i) {
							r(a, 1, 0, "");
							continue;
						}
						switch (i.t) {
							case "n":
								var c = m ? i.w : i.v;
								if (!c && i.v != null) c = i.v;
								if (c == null) {
									if (m && i.f && !i.F) r(a, 1, 0, "=" + i.f);
									else r(a, 1, 0, "");
								} else r(a, 0, c, "V");
								break;
							case "b":
								r(a, 0, i.v ? 1 : 0, i.v ? "TRUE" : "FALSE");
								break;
							case "s":
								r(a, 1, 0, !m || isNaN(i.v) ? i.v : '="' + i.v + '"');
								break;
							case "d":
								if (!i.w) i.w = R.format(i.z || R._table[14], J(ae(i.v)));
								if (m) r(a, 0, i.w, "V");
								else r(a, 1, 0, i.w);
								break;
							default:
								r(a, 1, 0, "");
						}
					}
				}
				r(a, -1, 0, "EOD");
				var u = "\r\n";
				var h = a.join(u);
				return h;
			};
		})();
		return { to_workbook: a, to_sheet: t, from_sheet: n };
	})();
	var ef = (function () {
		function e(e) {
			return e.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
		}
		function r(e) {
			return e.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
		}
		function t(r, t) {
			var a = r.split("\n"),
				n = -1,
				i = -1,
				s = 0,
				f = [];
			for (; s !== a.length; ++s) {
				var l = a[s].trim().split(":");
				if (l[0] !== "cell") continue;
				var o = lt(l[1]);
				if (f.length <= o.r)
					for (n = f.length; n <= o.r; ++n) if (!f[n]) f[n] = [];
				n = o.r;
				i = o.c;
				switch (l[2]) {
					case "t":
						f[n][i] = e(l[3]);
						break;
					case "v":
						f[n][i] = +l[3];
						break;
					case "vtf":
						var c = l[l.length - 1];
					case "vtc":
						switch (l[3]) {
							case "nl":
								f[n][i] = +l[4] ? true : false;
								break;
							default:
								f[n][i] = +l[4];
								break;
						}
						if (l[2] == "vtf") f[n][i] = [f[n][i], c];
				}
			}
			if (t && t.sheetRows) f = f.slice(0, t.sheetRows);
			return f;
		}
		function a(e, r) {
			return bt(t(e, r), r);
		}
		function n(e, r) {
			return pt(a(e, r), r);
		}
		var i = [
			"socialcalc:version:1.5",
			"MIME-Version: 1.0",
			"Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave",
		].join("\n");
		var s =
			[
				"--SocialCalcSpreadsheetControlSave",
				"Content-type: text/plain; charset=UTF-8",
			].join("\n") + "\n";
		var f = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n");
		var l = "--SocialCalcSpreadsheetControlSave--";
		function o(e) {
			if (!e || !e["!ref"]) return "";
			var t = [],
				a = [],
				n,
				i = "";
			var s = ct(e["!ref"]);
			var f = Array.isArray(e);
			for (var l = s.s.r; l <= s.e.r; ++l) {
				for (var o = s.s.c; o <= s.e.c; ++o) {
					i = ot({ r: l, c: o });
					n = f ? (e[l] || [])[o] : e[i];
					if (!n || n.v == null || n.t === "z") continue;
					a = ["cell", i, "t"];
					switch (n.t) {
						case "s":
						case "str":
							a.push(r(n.v));
							break;
						case "n":
							if (!n.f) {
								a[2] = "v";
								a[3] = n.v;
							} else {
								a[2] = "vtf";
								a[3] = "n";
								a[4] = n.v;
								a[5] = r(n.f);
							}
							break;
						case "b":
							a[2] = "vt" + (n.f ? "f" : "c");
							a[3] = "nl";
							a[4] = n.v ? "1" : "0";
							a[5] = r(n.f || (n.v ? "TRUE" : "FALSE"));
							break;
						case "d":
							var c = J(ae(n.v));
							a[2] = "vtc";
							a[3] = "nd";
							a[4] = "" + c;
							a[5] = n.w || R.format(n.z || R._table[14], c);
							break;
						case "e":
							continue;
					}
					t.push(a.join(":"));
				}
			}
			t.push(
				"sheet:c:" +
					(s.e.c - s.s.c + 1) +
					":r:" +
					(s.e.r - s.s.r + 1) +
					":tvf:1"
			);
			t.push("valueformat:1:text-wiki");
			return t.join("\n");
		}
		function c(e) {
			return [i, s, f, s, o(e), l].join("\n");
		}
		return { to_workbook: n, to_sheet: a, from_sheet: c };
	})();
	var rf = (function () {
		function e(e, r, t, a, n) {
			if (n.raw) r[t][a] = e;
			else if (e === "TRUE") r[t][a] = true;
			else if (e === "FALSE") r[t][a] = false;
			else if (e === "") {
			} else if (!isNaN(fe(e))) r[t][a] = fe(e);
			else if (!isNaN(le(e).getDate())) r[t][a] = ae(e);
			else r[t][a] = e;
		}
		function r(r, t) {
			var a = t || {};
			var n = [];
			if (!r || r.length === 0) return n;
			var i = r.split(/[\r\n]/);
			var s = i.length - 1;
			while (s >= 0 && i[s].length === 0) --s;
			var f = 10,
				l = 0;
			var o = 0;
			for (; o <= s; ++o) {
				l = i[o].indexOf(" ");
				if (l == -1) l = i[o].length;
				else l++;
				f = Math.max(f, l);
			}
			for (o = 0; o <= s; ++o) {
				n[o] = [];
				var c = 0;
				e(i[o].slice(0, f).trim(), n, o, c, a);
				for (c = 1; c <= (i[o].length - f) / 10 + 1; ++c)
					e(i[o].slice(f + (c - 1) * 10, f + c * 10).trim(), n, o, c, a);
			}
			if (a.sheetRows) n = n.slice(0, a.sheetRows);
			return n;
		}
		var t = { 44: ",", 9: "\t", 59: ";" };
		var a = { 44: 3, 9: 2, 59: 1 };
		function n(e) {
			var r = {},
				n = false,
				i = 0,
				s = 0;
			for (; i < e.length; ++i) {
				if ((s = e.charCodeAt(i)) == 34) n = !n;
				else if (!n && s in t) r[s] = (r[s] || 0) + 1;
			}
			s = [];
			for (i in r)
				if (r.hasOwnProperty(i)) {
					s.push([r[i], i]);
				}
			if (!s.length) {
				r = a;
				for (i in r)
					if (r.hasOwnProperty(i)) {
						s.push([r[i], i]);
					}
			}
			s.sort(function (e, r) {
				return e[0] - r[0] || a[e[1]] - a[r[1]];
			});
			return t[s.pop()[1]];
		}
		function i(e, r) {
			var t = r || {};
			var a = "";
			if (p != null && t.dense == null) t.dense = p;
			var i = t.dense ? [] : {};
			var s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
			if (e.slice(0, 4) == "sep=" && e.charCodeAt(5) == 10) {
				a = e.charAt(4);
				e = e.slice(6);
			} else a = n(e.slice(0, 1024));
			var f = 0,
				l = 0,
				o = 0;
			var c = 0,
				u = 0,
				h = a.charCodeAt(0),
				d = false,
				v = 0;
			e = e.replace(/\r\n/gm, "\n");
			var m = t.dateNF != null ? N(t.dateNF) : null;
			function b() {
				var r = e.slice(c, u);
				var a = {};
				if (r.charAt(0) == '"' && r.charAt(r.length - 1) == '"')
					r = r.slice(1, -1).replace(/""/g, '"');
				if (r.length === 0) a.t = "z";
				else if (t.raw) {
					a.t = "s";
					a.v = r;
				} else if (r.trim().length === 0) {
					a.t = "s";
					a.v = r;
				} else if (r.charCodeAt(0) == 61) {
					if (r.charCodeAt(1) == 34 && r.charCodeAt(r.length - 1) == 34) {
						a.t = "s";
						a.v = r.slice(2, -1).replace(/""/g, '"');
					} else if (Ko(r)) {
						a.t = "n";
						a.f = r.slice(1);
					} else {
						a.t = "s";
						a.v = r;
					}
				} else if (r == "TRUE") {
					a.t = "b";
					a.v = true;
				} else if (r == "FALSE") {
					a.t = "b";
					a.v = false;
				} else if (!isNaN((o = fe(r)))) {
					a.t = "n";
					if (t.cellText !== false) a.w = r;
					a.v = o;
				} else if (!isNaN(le(r).getDate()) || (m && r.match(m))) {
					a.z = t.dateNF || R._table[14];
					var n = 0;
					if (m && r.match(m)) {
						r = L(r, t.dateNF, r.match(m) || []);
						n = 1;
					}
					if (t.cellDates) {
						a.t = "d";
						a.v = ae(r, n);
					} else {
						a.t = "n";
						a.v = J(ae(r, n));
					}
					if (t.cellText !== false)
						a.w = R.format(a.z, a.v instanceof Date ? J(a.v) : a.v);
					if (!t.cellNF) delete a.z;
				} else {
					a.t = "s";
					a.v = r;
				}
				if (a.t == "z") {
				} else if (t.dense) {
					if (!i[f]) i[f] = [];
					i[f][l] = a;
				} else i[ot({ c: l, r: f })] = a;
				c = u + 1;
				if (s.e.c < l) s.e.c = l;
				if (s.e.r < f) s.e.r = f;
				if (v == h) ++l;
				else {
					l = 0;
					++f;
					if (t.sheetRows && t.sheetRows <= f) return true;
				}
			}
			e: for (; u < e.length; ++u)
				switch ((v = e.charCodeAt(u))) {
					case 34:
						d = !d;
						break;
					case h:
					case 10:
					case 13:
						if (!d && b()) break e;
						break;
					default:
						break;
				}
			if (u - c > 0) b();
			i["!ref"] = ut(s);
			return i;
		}
		function s(e, t) {
			if (e.slice(0, 4) == "sep=") return i(e, t);
			if (e.indexOf("\t") >= 0 || e.indexOf(",") >= 0 || e.indexOf(";") >= 0)
				return i(e, t);
			return bt(r(e, t), t);
		}
		function f(e, r) {
			var t = "",
				a = r.type == "string" ? [0, 0, 0, 0] : lm(e, r);
			switch (r.type) {
				case "base64":
					t = b.decode(e);
					break;
				case "binary":
					t = e;
					break;
				case "buffer":
					if (r.codepage == 65001) t = e.toString("utf8");
					else if (r.codepage && typeof cptable !== "undefined")
						t = cptable.utils.decode(r.codepage, e);
					else t = e.toString("binary");
					break;
				case "array":
					t = ne(e);
					break;
				case "string":
					t = e;
					break;
				default:
					throw new Error("Unrecognized type " + r.type);
			}
			if (a[0] == 239 && a[1] == 187 && a[2] == 191) t = We(t.slice(3));
			else if (
				r.type == "binary" &&
				typeof cptable !== "undefined" &&
				r.codepage
			)
				t = cptable.utils.decode(r.codepage, cptable.utils.encode(1252, t));
			if (t.slice(0, 19) == "socialcalc:version:")
				return ef.to_sheet(r.type == "string" ? t : We(t), r);
			return s(t, r);
		}
		function l(e, r) {
			return pt(f(e, r), r);
		}
		function o(e) {
			var r = [];
			var t = ht(e["!ref"]),
				a;
			var n = Array.isArray(e);
			for (var i = t.s.r; i <= t.e.r; ++i) {
				var s = [];
				for (var f = t.s.c; f <= t.e.c; ++f) {
					var l = ot({ r: i, c: f });
					a = n ? (e[i] || [])[f] : e[l];
					if (!a || a.v == null) {
						s.push("          ");
						continue;
					}
					var o = (a.w || (vt(a), a.w) || "").slice(0, 10);
					while (o.length < 10) o += " ";
					s.push(o + (f === 0 ? " " : ""));
				}
				r.push(s.join(""));
			}
			return r.join("\n");
		}
		return { to_workbook: l, to_sheet: f, from_sheet: o };
	})();
	function tf(e, r) {
		var t = r || {},
			a = !!t.WTF;
		t.WTF = true;
		try {
			var n = Js.to_workbook(e, t);
			t.WTF = a;
			return n;
		} catch (i) {
			t.WTF = a;
			if (!i.message.match(/SYLK bad record ID/) && a) throw i;
			return rf.to_workbook(e, r);
		}
	}
	var af = (function () {
		function e(e, r, t) {
			if (!e) return;
			Wr(e, e.l || 0);
			var a = t.Enum || w;
			while (e.l < e.length) {
				var n = e._R(2);
				var i = a[n] || a[255];
				var s = e._R(2);
				var f = e.l + s;
				var l = (i.f || Vr)(e, s, t);
				e.l = f;
				if (r(l, i.n, n)) return;
			}
		}
		function r(e, r) {
			switch (r.type) {
				case "base64":
					return t(_(b.decode(e)), r);
				case "binary":
					return t(_(e), r);
				case "buffer":
				case "array":
					return t(e, r);
			}
			throw "Unsupported type " + r.type;
		}
		function t(r, t) {
			if (!r) return r;
			var a = t || {};
			if (p != null && a.dense == null) a.dense = p;
			var n = a.dense ? [] : {},
				i = "Sheet1",
				s = 0;
			var f = {},
				l = [i];
			var o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
			var c = a.sheetRows || 0;
			if (r[2] == 2) a.Enum = w;
			else if (r[2] == 26) a.Enum = E;
			else if (r[2] == 14) {
				a.Enum = E;
				a.qpro = true;
				r.l = 0;
			} else throw new Error("Unrecognized LOTUS BOF " + r[2]);
			e(
				r,
				function (e, t, u) {
					if (r[2] == 2)
						switch (u) {
							case 0:
								a.vers = e;
								if (e >= 4096) a.qpro = true;
								break;
							case 6:
								o = e;
								break;
							case 15:
								if (!a.qpro) e[1].v = e[1].v.slice(1);
							case 13:
							case 14:
							case 16:
							case 51:
								if (
									u == 14 &&
									(e[2] & 112) == 112 &&
									(e[2] & 15) > 1 &&
									(e[2] & 15) < 15
								) {
									e[1].z = a.dateNF || R._table[14];
									if (a.cellDates) {
										e[1].t = "d";
										e[1].v = q(e[1].v);
									}
								}
								if (a.dense) {
									if (!n[e[0].r]) n[e[0].r] = [];
									n[e[0].r][e[0].c] = e[1];
								} else n[ot(e[0])] = e[1];
								break;
						}
					else
						switch (u) {
							case 22:
								e[1].v = e[1].v.slice(1);
							case 23:
							case 24:
							case 25:
							case 37:
							case 39:
							case 40:
								if (e[3] > s) {
									n["!ref"] = ut(o);
									f[i] = n;
									n = a.dense ? [] : {};
									o = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
									s = e[3];
									i = "Sheet" + (s + 1);
									l.push(i);
								}
								if (c > 0 && e[0].r >= c) break;
								if (a.dense) {
									if (!n[e[0].r]) n[e[0].r] = [];
									n[e[0].r][e[0].c] = e[1];
								} else n[ot(e[0])] = e[1];
								if (o.e.c < e[0].c) o.e.c = e[0].c;
								if (o.e.r < e[0].r) o.e.r = e[0].r;
								break;
							default:
								break;
						}
				},
				a
			);
			n["!ref"] = ut(o);
			f[i] = n;
			return { SheetNames: l, Sheets: f };
		}
		function a(e) {
			var r = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
			r.s.c = e._R(2);
			r.s.r = e._R(2);
			r.e.c = e._R(2);
			r.e.r = e._R(2);
			if (r.s.c == 65535) r.s.c = r.e.c = r.s.r = r.e.r = 0;
			return r;
		}
		function n(e, r, t) {
			var a = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
			if (t.qpro && t.vers != 20768) {
				a[0].c = e._R(1);
				e.l++;
				a[0].r = e._R(2);
				e.l += 2;
			} else {
				a[2] = e._R(1);
				a[0].c = e._R(2);
				a[0].r = e._R(2);
			}
			return a;
		}
		function i(e, r, t) {
			var a = e.l + r;
			var i = n(e, r, t);
			i[1].t = "s";
			if (t.vers == 20768) {
				e.l++;
				var s = e._R(1);
				i[1].v = e._R(s, "utf8");
				return i;
			}
			if (t.qpro) e.l++;
			i[1].v = e._R(a - e.l, "cstr");
			return i;
		}
		function s(e, r, t) {
			var a = n(e, r, t);
			a[1].v = e._R(2, "i");
			return a;
		}
		function f(e, r, t) {
			var a = n(e, r, t);
			a[1].v = e._R(8, "f");
			return a;
		}
		function l(e, r, t) {
			var a = e.l + r;
			var i = n(e, r, t);
			i[1].v = e._R(8, "f");
			if (t.qpro) e.l = a;
			else {
				var s = e._R(2);
				e.l += s;
			}
			return i;
		}
		function o(e) {
			var r = [{ c: 0, r: 0 }, { t: "n", v: 0 }, 0];
			r[0].r = e._R(2);
			r[3] = e[e.l++];
			r[0].c = e[e.l++];
			return r;
		}
		function c(e, r) {
			var t = o(e, r);
			t[1].t = "s";
			t[1].v = e._R(r - 4, "cstr");
			return t;
		}
		function u(e, r) {
			var t = o(e, r);
			t[1].v = e._R(2);
			var a = t[1].v >> 1;
			if (t[1].v & 1) {
				switch (a & 7) {
					case 1:
						a = (a >> 3) * 500;
						break;
					case 2:
						a = (a >> 3) / 20;
						break;
					case 4:
						a = (a >> 3) / 2e3;
						break;
					case 6:
						a = (a >> 3) / 16;
						break;
					case 7:
						a = (a >> 3) / 64;
						break;
					default:
						throw "unknown NUMBER_18 encoding " + (a & 7);
				}
			}
			t[1].v = a;
			return t;
		}
		function h(e, r) {
			var t = o(e, r);
			var a = e._R(4);
			var n = e._R(4);
			var i = e._R(2);
			if (i == 65535) {
				t[1].v = 0;
				return t;
			}
			var s = i & 32768;
			i = (i & 32767) - 16446;
			t[1].v =
				(s * 2 - 1) *
				((i > 0 ? n << i : n >>> -i) +
					(i > -32 ? a << (i + 32) : a >>> -(i + 32)));
			return t;
		}
		function d(e, r) {
			var t = h(e, 14);
			e.l += r - 14;
			return t;
		}
		function v(e, r) {
			var t = o(e, r);
			var a = e._R(4);
			t[1].v = a >> 6;
			return t;
		}
		function m(e, r) {
			var t = o(e, r);
			var a = e._R(8, "f");
			t[1].v = a;
			return t;
		}
		function g(e, r) {
			var t = m(e, 14);
			e.l += r - 10;
			return t;
		}
		var w = {
			0: { n: "BOF", f: Mn },
			1: { n: "EOF" },
			2: { n: "CALCMODE" },
			3: { n: "CALCORDER" },
			4: { n: "SPLIT" },
			5: { n: "SYNC" },
			6: { n: "RANGE", f: a },
			7: { n: "WINDOW1" },
			8: { n: "COLW1" },
			9: { n: "WINTWO" },
			10: { n: "COLW2" },
			11: { n: "NAME" },
			12: { n: "BLANK" },
			13: { n: "INTEGER", f: s },
			14: { n: "NUMBER", f: f },
			15: { n: "LABEL", f: i },
			16: { n: "FORMULA", f: l },
			24: { n: "TABLE" },
			25: { n: "ORANGE" },
			26: { n: "PRANGE" },
			27: { n: "SRANGE" },
			28: { n: "FRANGE" },
			29: { n: "KRANGE1" },
			32: { n: "HRANGE" },
			35: { n: "KRANGE2" },
			36: { n: "PROTEC" },
			37: { n: "FOOTER" },
			38: { n: "HEADER" },
			39: { n: "SETUP" },
			40: { n: "MARGINS" },
			41: { n: "LABELFMT" },
			42: { n: "TITLES" },
			43: { n: "SHEETJS" },
			45: { n: "GRAPH" },
			46: { n: "NGRAPH" },
			47: { n: "CALCCOUNT" },
			48: { n: "UNFORMATTED" },
			49: { n: "CURSORW12" },
			50: { n: "WINDOW" },
			51: { n: "STRING", f: i },
			55: { n: "PASSWORD" },
			56: { n: "LOCKED" },
			60: { n: "QUERY" },
			61: { n: "QUERYNAME" },
			62: { n: "PRINT" },
			63: { n: "PRINTNAME" },
			64: { n: "GRAPH2" },
			65: { n: "GRAPHNAME" },
			66: { n: "ZOOM" },
			67: { n: "SYMSPLIT" },
			68: { n: "NSROWS" },
			69: { n: "NSCOLS" },
			70: { n: "RULER" },
			71: { n: "NNAME" },
			72: { n: "ACOMM" },
			73: { n: "AMACRO" },
			74: { n: "PARSE" },
			255: { n: "", f: Vr },
		};
		var E = {
			0: { n: "BOF" },
			1: { n: "EOF" },
			3: { n: "??" },
			4: { n: "??" },
			5: { n: "??" },
			6: { n: "??" },
			7: { n: "??" },
			9: { n: "??" },
			10: { n: "??" },
			11: { n: "??" },
			12: { n: "??" },
			14: { n: "??" },
			15: { n: "??" },
			16: { n: "??" },
			17: { n: "??" },
			18: { n: "??" },
			19: { n: "??" },
			21: { n: "??" },
			22: { n: "LABEL16", f: c },
			23: { n: "NUMBER17", f: h },
			24: { n: "NUMBER18", f: u },
			25: { n: "FORMULA19", f: d },
			26: { n: "??" },
			27: { n: "??" },
			28: { n: "??" },
			29: { n: "??" },
			30: { n: "??" },
			31: { n: "??" },
			33: { n: "??" },
			37: { n: "NUMBER25", f: v },
			39: { n: "NUMBER27", f: m },
			40: { n: "FORMULA28", f: g },
			255: { n: "", f: Vr },
		};
		return { to_workbook: r };
	})();
	var nf = (function ab() {
		var e = je("t"),
			r = je("rPr"),
			t = /<(?:\w+:)?r>/g,
			a = /<\/(?:\w+:)?r>/,
			n = /\r\n/g;
		var s = function l(e, r, t) {
			var a = {},
				n = 65001,
				s = "";
			var f = false;
			var l = e.match(_e),
				o = 0;
			if (l)
				for (; o != l.length; ++o) {
					var c = Te(l[o]);
					switch (c[0].replace(/\w*:/g, "")) {
						case "<condense":
							break;
						case "<extend":
							break;
						case "<shadow":
							if (!c.val) break;
						case "<shadow>":
						case "<shadow/>":
							a.shadow = 1;
							break;
						case "</shadow>":
							break;
						case "<charset":
							if (c.val == "1") break;
							n = i[parseInt(c.val, 10)];
							break;
						case "<outline":
							if (!c.val) break;
						case "<outline>":
						case "<outline/>":
							a.outline = 1;
							break;
						case "</outline>":
							break;
						case "<rFont":
							a.name = c.val;
							break;
						case "<sz":
							a.sz = c.val;
							break;
						case "<strike":
							if (!c.val) break;
						case "<strike>":
						case "<strike/>":
							a.strike = 1;
							break;
						case "</strike>":
							break;
						case "<u":
							if (!c.val) break;
							switch (c.val) {
								case "double":
									a.uval = "double";
									break;
								case "singleAccounting":
									a.uval = "single-accounting";
									break;
								case "doubleAccounting":
									a.uval = "double-accounting";
									break;
							}
						case "<u>":
						case "<u/>":
							a.u = 1;
							break;
						case "</u>":
							break;
						case "<b":
							if (c.val == "0") break;
						case "<b>":
						case "<b/>":
							a.b = 1;
							break;
						case "</b>":
							break;
						case "<i":
							if (c.val == "0") break;
						case "<i>":
						case "<i/>":
							a.i = 1;
							break;
						case "</i>":
							break;
						case "<color":
							if (c.rgb) a.color = c.rgb.slice(2, 8);
							break;
						case "<family":
							a.family = c.val;
							break;
						case "<vertAlign":
							s = c.val;
							break;
						case "<scheme":
							break;
						case "<extLst":
						case "<extLst>":
						case "</extLst>":
							break;
						case "<ext":
							f = true;
							break;
						case "</ext>":
							f = false;
							break;
						default:
							if (c[0].charCodeAt(1) !== 47 && !f)
								throw new Error("Unrecognized rich format " + c[0]);
					}
				}
			var u = [];
			if (a.u) u.push("text-decoration: underline;");
			if (a.uval) u.push("text-underline-style:" + a.uval + ";");
			if (a.sz) u.push("font-size:" + a.sz + "pt;");
			if (a.outline) u.push("text-effect: outline;");
			if (a.shadow) u.push("text-shadow: auto;");
			r.push('<span style="' + u.join("") + '">');
			if (a.b) {
				r.push("<b>");
				t.push("</b>");
			}
			if (a.i) {
				r.push("<i>");
				t.push("</i>");
			}
			if (a.strike) {
				r.push("<s>");
				t.push("</s>");
			}
			if (s == "superscript") s = "sup";
			else if (s == "subscript") s = "sub";
			if (s != "") {
				r.push("<" + s + ">");
				t.push("</" + s + ">");
			}
			t.push("</span>");
			return n;
		};
		function f(t) {
			var a = [[], "", []];
			var i = t.match(e);
			if (!i) return "";
			a[1] = i[1];
			var f = t.match(r);
			if (f) s(f[1], a[0], a[2]);
			return a[0].join("") + a[1].replace(n, "<br/>") + a[2].join("");
		}
		return function o(e) {
			return e.replace(t, "").split(a).map(f).join("");
		};
	})();
	var sf = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
		ff = /<(?:\w+:)?r>/;
	var lf = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;
	function of(e, r) {
		var t = r ? r.cellHTML : true;
		var a = {};
		if (!e) return null;
		if (e.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
			a.t = Ae(
				We(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || "")
			);
			a.r = We(e);
			if (t) a.h = Ne(a.t);
		} else if (e.match(ff)) {
			a.r = We(e);
			a.t = Ae(
				We((e.replace(lf, "").match(sf) || []).join("").replace(_e, ""))
			);
			if (t) a.h = nf(a.r);
		}
		return a;
	}
	var cf = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
	var uf = /<(?:\w+:)?(?:si|sstItem)>/g;
	var hf = /<\/(?:\w+:)?(?:si|sstItem)>/;
	function df(e, r) {
		var t = [],
			a = "";
		if (!e) return t;
		var n = e.match(cf);
		if (n) {
			a = n[2].replace(uf, "").split(hf);
			for (var i = 0; i != a.length; ++i) {
				var s = of(a[i].trim(), r);
				if (s != null) t[t.length] = s;
			}
			n = Te(n[1]);
			t.Count = n.count;
			t.Unique = n.uniqueCount;
		}
		return t;
	}
	Ia.SST =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
	var vf = /^\s|\s$|[\t\n\r]/;
	function pf(e, r) {
		if (!r.bookSST) return "";
		var t = [ke];
		t[t.length] = rr("sst", null, {
			xmlns: nr.main[0],
			count: e.Count,
			uniqueCount: e.Unique,
		});
		for (var a = 0; a != e.length; ++a) {
			if (e[a] == null) continue;
			var n = e[a];
			var i = "<si>";
			if (n.r) i += n.r;
			else {
				i += "<t";
				if (!n.t) n.t = "";
				if (n.t.match(vf)) i += ' xml:space="preserve"';
				i += ">" + Oe(n.t) + "</t>";
			}
			i += "</si>";
			t[t.length] = i;
		}
		if (t.length > 2) {
			t[t.length] = "</sst>";
			t[1] = t[1].replace("/>", ">");
		}
		return t.join("");
	}
	function mf(e) {
		return [e._R(4), e._R(4)];
	}
	function bf(e, r) {
		var t = [];
		var a = false;
		Xr(e, function n(e, i, s) {
			switch (s) {
				case 159:
					t.Count = e[0];
					t.Unique = e[1];
					break;
				case 19:
					t.push(e);
					break;
				case 160:
					return true;
				case 35:
					a = true;
					break;
				case 36:
					a = false;
					break;
				default:
					if (i.indexOf("Begin") > 0) {
					} else if (i.indexOf("End") > 0) {
					}
					if (!a || r.WTF) throw new Error("Unexpected record " + s + " " + i);
			}
		});
		return t;
	}
	function gf(e, r) {
		if (!r) r = zr(8);
		r._W(4, e.Count);
		r._W(4, e.Unique);
		return r;
	}
	var wf = Ct;
	function Ef(e) {
		var r = Gr();
		jr(r, "BrtBeginSst", gf(e));
		for (var t = 0; t < e.length; ++t) jr(r, "BrtSSTItem", wf(e[t]));
		jr(r, "BrtEndSst");
		return r.end();
	}
	function kf(e) {
		if (typeof cptable !== "undefined") return cptable.utils.encode(t, e);
		var r = [],
			a = e.split("");
		for (var n = 0; n < a.length; ++n) r[n] = a[n].charCodeAt(0);
		return r;
	}
	function Sf(e, r) {
		var t = {};
		t.Major = e._R(2);
		t.Minor = e._R(2);
		if (r >= 4) e.l += r - 4;
		return t;
	}
	function _f(e) {
		var r = {};
		r.id = e._R(0, "lpp4");
		r.R = Sf(e, 4);
		r.U = Sf(e, 4);
		r.W = Sf(e, 4);
		return r;
	}
	function Cf(e) {
		var r = e._R(4);
		var t = e.l + r - 4;
		var a = {};
		var n = e._R(4);
		var i = [];
		while (n-- > 0) i.push({ t: e._R(4), v: e._R(0, "lpp4") });
		a.name = e._R(0, "lpp4");
		a.comps = i;
		if (e.l != t) throw new Error("Bad DataSpaceMapEntry: " + e.l + " != " + t);
		return a;
	}
	function Bf(e) {
		var r = [];
		e.l += 4;
		var t = e._R(4);
		while (t-- > 0) r.push(Cf(e));
		return r;
	}
	function Tf(e) {
		var r = [];
		e.l += 4;
		var t = e._R(4);
		while (t-- > 0) r.push(e._R(0, "lpp4"));
		return r;
	}
	function xf(e) {
		var r = {};
		e._R(4);
		e.l += 4;
		r.id = e._R(0, "lpp4");
		r.name = e._R(0, "lpp4");
		r.R = Sf(e, 4);
		r.U = Sf(e, 4);
		r.W = Sf(e, 4);
		return r;
	}
	function yf(e) {
		var r = xf(e);
		r.ename = e._R(0, "8lpp4");
		r.blksz = e._R(4);
		r.cmode = e._R(4);
		if (e._R(4) != 4) throw new Error("Bad !Primary record");
		return r;
	}
	function If(e, r) {
		var t = e.l + r;
		var a = {};
		a.Flags = e._R(4) & 63;
		e.l += 4;
		a.AlgID = e._R(4);
		var n = false;
		switch (a.AlgID) {
			case 26126:
			case 26127:
			case 26128:
				n = a.Flags == 36;
				break;
			case 26625:
				n = a.Flags == 4;
				break;
			case 0:
				n = a.Flags == 16 || a.Flags == 4 || a.Flags == 36;
				break;
			default:
				throw "Unrecognized encryption algorithm: " + a.AlgID;
		}
		if (!n) throw new Error("Encryption Flags/AlgID mismatch");
		a.AlgIDHash = e._R(4);
		a.KeySize = e._R(4);
		a.ProviderType = e._R(4);
		e.l += 8;
		a.CSPName = e._R((t - e.l) >> 1, "utf16le");
		e.l = t;
		return a;
	}
	function Af(e, r) {
		var t = {},
			a = e.l + r;
		e.l += 4;
		t.Salt = e.slice(e.l, e.l + 16);
		e.l += 16;
		t.Verifier = e.slice(e.l, e.l + 16);
		e.l += 16;
		e._R(4);
		t.VerifierHash = e.slice(e.l, a);
		e.l = a;
		return t;
	}
	function Rf(e) {
		var r = Sf(e);
		switch (r.Minor) {
			case 2:
				return [r.Minor, Df(e, r)];
			case 3:
				return [r.Minor, Of(e, r)];
			case 4:
				return [r.Minor, Ff(e, r)];
		}
		throw new Error("ECMA-376 Encrypted file unrecognized Version: " + r.Minor);
	}
	function Df(e) {
		var r = e._R(4);
		if ((r & 63) != 36) throw new Error("EncryptionInfo mismatch");
		var t = e._R(4);
		var a = If(e, t);
		var n = Af(e, e.length - e.l);
		return { t: "Std", h: a, v: n };
	}
	function Of() {
		throw new Error("File is password-protected: ECMA-376 Extensible");
	}
	function Ff(e) {
		var r = [
			"saltSize",
			"blockSize",
			"keyBits",
			"hashSize",
			"cipherAlgorithm",
			"cipherChaining",
			"hashAlgorithm",
			"saltValue",
		];
		e.l += 4;
		var t = e._R(e.length - e.l, "utf8");
		var a = {};
		t.replace(_e, function n(e) {
			var t = Te(e);
			switch (xe(t[0])) {
				case "<?xml":
					break;
				case "<encryption":
				case "</encryption>":
					break;
				case "<keyData":
					r.forEach(function (e) {
						a[e] = t[e];
					});
					break;
				case "<dataIntegrity":
					a.encryptedHmacKey = t.encryptedHmacKey;
					a.encryptedHmacValue = t.encryptedHmacValue;
					break;
				case "<keyEncryptors>":
				case "<keyEncryptors":
					a.encs = [];
					break;
				case "</keyEncryptors>":
					break;
				case "<keyEncryptor":
					a.uri = t.uri;
					break;
				case "</keyEncryptor>":
					break;
				case "<encryptedKey":
					a.encs.push(t);
					break;
				default:
					throw t[0];
			}
		});
		return a;
	}
	function Pf(e, r) {
		var t = {};
		var a = (t.EncryptionVersionInfo = Sf(e, 4));
		r -= 4;
		if (a.Minor != 2)
			throw new Error("unrecognized minor version code: " + a.Minor);
		if (a.Major > 4 || a.Major < 2)
			throw new Error("unrecognized major version code: " + a.Major);
		t.Flags = e._R(4);
		r -= 4;
		var n = e._R(4);
		r -= 4;
		t.EncryptionHeader = If(e, n);
		r -= n;
		t.EncryptionVerifier = Af(e, r);
		return t;
	}
	function Nf(e) {
		var r = {};
		var t = (r.EncryptionVersionInfo = Sf(e, 4));
		if (t.Major != 1 || t.Minor != 1)
			throw "unrecognized version code " + t.Major + " : " + t.Minor;
		r.Salt = e._R(16);
		r.EncryptedVerifier = e._R(16);
		r.EncryptedVerifierHash = e._R(16);
		return r;
	}
	function Lf(e) {
		var r = 0,
			t;
		var a = kf(e);
		var n = a.length + 1,
			i,
			s;
		var f, l, o;
		t = S(n);
		t[0] = a.length;
		for (i = 1; i != n; ++i) t[i] = a[i - 1];
		for (i = n - 1; i >= 0; --i) {
			s = t[i];
			f = (r & 16384) === 0 ? 0 : 1;
			l = (r << 1) & 32767;
			o = f | l;
			r = o ^ s;
		}
		return r ^ 52811;
	}
	var Mf = (function () {
		var e = [187, 255, 255, 186, 255, 255, 185, 128, 0, 190, 15, 0, 191, 15, 0];
		var r = [
			57840, 7439, 52380, 33984, 4364, 3600, 61902, 12606, 6258, 57657, 54287,
			34041, 10252, 43370, 20163,
		];
		var t = [
			44796, 19929, 39858, 10053, 20106, 40212, 10761, 31585, 63170, 64933,
			60267, 50935, 40399, 11199, 17763, 35526, 1453, 2906, 5812, 11624, 23248,
			885, 1770, 3540, 7080, 14160, 28320, 56640, 55369, 41139, 20807, 41614,
			21821, 43642, 17621, 28485, 56970, 44341, 19019, 38038, 14605, 29210,
			60195, 50791, 40175, 10751, 21502, 43004, 24537, 18387, 36774, 3949, 7898,
			15796, 31592, 63184, 47201, 24803, 49606, 37805, 14203, 28406, 56812,
			17824, 35648, 1697, 3394, 6788, 13576, 27152, 43601, 17539, 35078, 557,
			1114, 2228, 4456, 30388, 60776, 51953, 34243, 7079, 14158, 28316, 14128,
			28256, 56512, 43425, 17251, 34502, 7597, 13105, 26210, 52420, 35241, 883,
			1766, 3532, 4129, 8258, 16516, 33032, 4657, 9314, 18628,
		];
		var a = function (e) {
			return ((e / 2) | (e * 128)) & 255;
		};
		var n = function (e, r) {
			return a(e ^ r);
		};
		var i = function (e) {
			var a = r[e.length - 1];
			var n = 104;
			for (var i = e.length - 1; i >= 0; --i) {
				var s = e[i];
				for (var f = 0; f != 7; ++f) {
					if (s & 64) a ^= t[n];
					s *= 2;
					--n;
				}
			}
			return a;
		};
		return function (r) {
			var t = kf(r);
			var a = i(t);
			var s = t.length;
			var f = S(16);
			for (var l = 0; l != 16; ++l) f[l] = 0;
			var o, c, u;
			if ((s & 1) === 1) {
				o = a >> 8;
				f[s] = n(e[0], o);
				--s;
				o = a & 255;
				c = t[t.length - 1];
				f[s] = n(c, o);
			}
			while (s > 0) {
				--s;
				o = a >> 8;
				f[s] = n(t[s], o);
				--s;
				o = a & 255;
				f[s] = n(t[s], o);
			}
			s = 15;
			u = 15 - t.length;
			while (u > 0) {
				o = a >> 8;
				f[s] = n(e[u], o);
				--s;
				--u;
				o = a & 255;
				f[s] = n(t[s], o);
				--s;
				--u;
			}
			return f;
		};
	})();
	var Uf = function (e, r, t, a, n) {
		if (!n) n = r;
		if (!a) a = Mf(e);
		var i, s;
		for (i = 0; i != r.length; ++i) {
			s = r[i];
			s ^= a[t];
			s = ((s >> 5) | (s << 3)) & 255;
			n[i] = s;
			++t;
		}
		return [n, t, a];
	};
	var Hf = function (e) {
		var r = 0,
			t = Mf(e);
		return function (e) {
			var a = Uf("", e, r, t);
			r = a[1];
			return a[0];
		};
	};
	function Wf(e, r, t, a) {
		var n = { key: Mn(e), verificationBytes: Mn(e) };
		if (t.password) n.verifier = Lf(t.password);
		a.valid = n.verificationBytes === n.verifier;
		if (a.valid) a.insitu = Hf(t.password);
		return n;
	}
	function Vf(e, r, t) {
		var a = t || {};
		a.Info = e._R(2);
		e.l -= 2;
		if (a.Info === 1) a.Data = Nf(e, r);
		else a.Data = Pf(e, r);
		return a;
	}
	function zf(e, r, t) {
		var a = { Type: t.biff >= 8 ? e._R(2) : 0 };
		if (a.Type) Vf(e, r - 2, a);
		else Wf(e, t.biff >= 8 ? r : r - 2, t, a);
		return a;
	}
	var Xf = (function () {
		function e(e, t) {
			switch (t.type) {
				case "base64":
					return r(b.decode(e), t);
				case "binary":
					return r(e, t);
				case "buffer":
					return r(e.toString("binary"), t);
				case "array":
					return r(ne(e), t);
			}
			throw new Error("Unrecognized type " + t.type);
		}
		function r(e, r) {
			var t = r || {};
			var a = t.dense ? [] : {};
			var n = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
			if (!e.match(/\\trowd/)) throw new Error("RTF missing table");
			a["!ref"] = ut(n);
			return a;
		}
		function t(r, t) {
			return pt(e(r, t), t);
		}
		function a(e) {
			var r = ["{\\rtf1\\ansi"];
			var t = ht(e["!ref"]),
				a;
			var n = Array.isArray(e);
			for (var i = t.s.r; i <= t.e.r; ++i) {
				r.push("\\trowd\\trautofit1");
				for (var s = t.s.c; s <= t.e.c; ++s) r.push("\\cellx" + (s + 1));
				r.push("\\pard\\intbl");
				for (s = t.s.c; s <= t.e.c; ++s) {
					var f = ot({ r: i, c: s });
					a = n ? (e[i] || [])[s] : e[f];
					if (!a || (a.v == null && (!a.f || a.F))) continue;
					r.push(" " + (a.w || (vt(a), a.w)));
					r.push("\\cell");
				}
				r.push("\\pard\\intbl\\row");
			}
			return r.join("") + "}";
		}
		return { to_workbook: t, to_sheet: e, from_sheet: a };
	})();
	function Gf(e) {
		var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
		return [
			parseInt(r.slice(0, 2), 16),
			parseInt(r.slice(2, 4), 16),
			parseInt(r.slice(4, 6), 16),
		];
	}
	function jf(e) {
		for (var r = 0, t = 1; r != 3; ++r)
			t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
		return t.toString(16).toUpperCase().slice(1);
	}
	function Kf(e) {
		var r = e[0] / 255,
			t = e[1] / 255,
			a = e[2] / 255;
		var n = Math.max(r, t, a),
			i = Math.min(r, t, a),
			s = n - i;
		if (s === 0) return [0, 0, r];
		var f = 0,
			l = 0,
			o = n + i;
		l = s / (o > 1 ? 2 - o : o);
		switch (n) {
			case r:
				f = ((t - a) / s + 6) % 6;
				break;
			case t:
				f = (a - r) / s + 2;
				break;
			case a:
				f = (r - t) / s + 4;
				break;
		}
		return [f / 6, l, o / 2];
	}
	function Yf(e) {
		var r = e[0],
			t = e[1],
			a = e[2];
		var n = t * 2 * (a < 0.5 ? a : 1 - a),
			i = a - n / 2;
		var s = [i, i, i],
			f = 6 * r;
		var l;
		if (t !== 0)
			switch (f | 0) {
				case 0:
				case 6:
					l = n * f;
					s[0] += n;
					s[1] += l;
					break;
				case 1:
					l = n * (2 - f);
					s[0] += l;
					s[1] += n;
					break;
				case 2:
					l = n * (f - 2);
					s[1] += n;
					s[2] += l;
					break;
				case 3:
					l = n * (4 - f);
					s[1] += l;
					s[2] += n;
					break;
				case 4:
					l = n * (f - 4);
					s[2] += n;
					s[0] += l;
					break;
				case 5:
					l = n * (6 - f);
					s[2] += l;
					s[0] += n;
					break;
			}
		for (var o = 0; o != 3; ++o) s[o] = Math.round(s[o] * 255);
		return s;
	}
	function $f(e, r) {
		if (r === 0) return e;
		var t = Kf(Gf(e));
		if (r < 0) t[2] = t[2] * (1 + r);
		else t[2] = 1 - (1 - t[2]) * (1 - r);
		return jf(Yf(t));
	}
	var Zf = 6,
		Qf = 15,
		Jf = 1,
		qf = Zf;
	function el(e) {
		return Math.floor((e + Math.round(128 / qf) / 256) * qf);
	}
	function rl(e) {
		return Math.floor(((e - 5) / qf) * 100 + 0.5) / 100;
	}
	function tl(e) {
		return Math.round(((e * qf + 5) / qf) * 256) / 256;
	}
	function al(e) {
		return tl(rl(el(e)));
	}
	function nl(e) {
		var r = Math.abs(e - al(e)),
			t = qf;
		if (r > 0.005)
			for (qf = Jf; qf < Qf; ++qf)
				if (Math.abs(e - al(e)) <= r) {
					r = Math.abs(e - al(e));
					t = qf;
				}
		qf = t;
	}
	function il(e) {
		if (e.width) {
			e.wpx = el(e.width);
			e.wch = rl(e.wpx);
			e.MDW = qf;
		} else if (e.wpx) {
			e.wch = rl(e.wpx);
			e.width = tl(e.wch);
			e.MDW = qf;
		} else if (typeof e.wch == "number") {
			e.width = tl(e.wch);
			e.wpx = el(e.width);
			e.MDW = qf;
		}
		if (e.customWidth) delete e.customWidth;
	}
	var sl = 96,
		fl = sl;
	function ll(e) {
		return (e * 96) / fl;
	}
	function ol(e) {
		return (e * fl) / 96;
	}
	var cl = {
		None: "none",
		Solid: "solid",
		Gray50: "mediumGray",
		Gray75: "darkGray",
		Gray25: "lightGray",
		HorzStripe: "darkHorizontal",
		VertStripe: "darkVertical",
		ReverseDiagStripe: "darkDown",
		DiagStripe: "darkUp",
		DiagCross: "darkGrid",
		ThickDiagCross: "darkTrellis",
		ThinHorzStripe: "lightHorizontal",
		ThinVertStripe: "lightVertical",
		ThinReverseDiagStripe: "lightDown",
		ThinHorzCross: "lightGrid",
	};
	function ul(e, r, t, a) {
		r.Borders = [];
		var n = {};
		var i = false;
		e[0].match(_e).forEach(function (e) {
			var t = Te(e);
			switch (xe(t[0])) {
				case "<borders":
				case "<borders>":
				case "</borders>":
					break;
				case "<border":
				case "<border>":
				case "<border/>":
					n = {};
					if (t.diagonalUp) {
						n.diagonalUp = t.diagonalUp;
					}
					if (t.diagonalDown) {
						n.diagonalDown = t.diagonalDown;
					}
					r.Borders.push(n);
					break;
				case "</border>":
					break;
				case "<left/>":
					break;
				case "<left":
				case "<left>":
					break;
				case "</left>":
					break;
				case "<right/>":
					break;
				case "<right":
				case "<right>":
					break;
				case "</right>":
					break;
				case "<top/>":
					break;
				case "<top":
				case "<top>":
					break;
				case "</top>":
					break;
				case "<bottom/>":
					break;
				case "<bottom":
				case "<bottom>":
					break;
				case "</bottom>":
					break;
				case "<diagonal":
				case "<diagonal>":
				case "<diagonal/>":
					break;
				case "</diagonal>":
					break;
				case "<horizontal":
				case "<horizontal>":
				case "<horizontal/>":
					break;
				case "</horizontal>":
					break;
				case "<vertical":
				case "<vertical>":
				case "<vertical/>":
					break;
				case "</vertical>":
					break;
				case "<start":
				case "<start>":
				case "<start/>":
					break;
				case "</start>":
					break;
				case "<end":
				case "<end>":
				case "<end/>":
					break;
				case "</end>":
					break;
				case "<color":
				case "<color>":
					break;
				case "<color/>":
				case "</color>":
					break;
				case "<extLst":
				case "<extLst>":
				case "</extLst>":
					break;
				case "<ext":
					i = true;
					break;
				case "</ext>":
					i = false;
					break;
				default:
					if (a && a.WTF) {
						if (!i) throw new Error("unrecognized " + t[0] + " in borders");
					}
			}
		});
	}
	function hl(e, r, t, a) {
		r.Fills = [];
		var n = {};
		var i = false;
		e[0].match(_e).forEach(function (e) {
			var t = Te(e);
			switch (xe(t[0])) {
				case "<fills":
				case "<fills>":
				case "</fills>":
					break;
				case "<fill>":
				case "<fill":
				case "<fill/>":
					n = {};
					r.Fills.push(n);
					break;
				case "</fill>":
					break;
				case "<gradientFill>":
					break;
				case "<gradientFill":
				case "</gradientFill>":
					r.Fills.push(n);
					n = {};
					break;
				case "<patternFill":
				case "<patternFill>":
					if (t.patternType) n.patternType = t.patternType;
					break;
				case "<patternFill/>":
				case "</patternFill>":
					break;
				case "<bgColor":
					if (!n.bgColor) n.bgColor = {};
					if (t.indexed) n.bgColor.indexed = parseInt(t.indexed, 10);
					if (t.theme) n.bgColor.theme = parseInt(t.theme, 10);
					if (t.tint) n.bgColor.tint = parseFloat(t.tint);
					if (t.rgb) n.bgColor.rgb = t.rgb.slice(-6);
					break;
				case "<bgColor/>":
				case "</bgColor>":
					break;
				case "<fgColor":
					if (!n.fgColor) n.fgColor = {};
					if (t.theme) n.fgColor.theme = parseInt(t.theme, 10);
					if (t.tint) n.fgColor.tint = parseFloat(t.tint);
					if (t.rgb) n.fgColor.rgb = t.rgb.slice(-6);
					break;
				case "<fgColor/>":
				case "</fgColor>":
					break;
				case "<stop":
				case "<stop/>":
					break;
				case "</stop>":
					break;
				case "<color":
				case "<color/>":
					break;
				case "</color>":
					break;
				case "<extLst":
				case "<extLst>":
				case "</extLst>":
					break;
				case "<ext":
					i = true;
					break;
				case "</ext>":
					i = false;
					break;
				default:
					if (a && a.WTF) {
						if (!i) throw new Error("unrecognized " + t[0] + " in fills");
					}
			}
		});
	}
	function dl(e, r, t, a) {
		r.Fonts = [];
		var n = {};
		var s = false;
		e[0].match(_e).forEach(function (e) {
			var f = Te(e);
			switch (xe(f[0])) {
				case "<fonts":
				case "<fonts>":
				case "</fonts>":
					break;
				case "<font":
				case "<font>":
					break;
				case "</font>":
				case "<font/>":
					r.Fonts.push(n);
					n = {};
					break;
				case "<name":
					if (f.val) n.name = f.val;
					break;
				case "<name/>":
				case "</name>":
					break;
				case "<b":
					n.bold = f.val ? He(f.val) : 1;
					break;
				case "<b/>":
					n.bold = 1;
					break;
				case "<i":
					n.italic = f.val ? He(f.val) : 1;
					break;
				case "<i/>":
					n.italic = 1;
					break;
				case "<u":
					switch (f.val) {
						case "none":
							n.underline = 0;
							break;
						case "single":
							n.underline = 1;
							break;
						case "double":
							n.underline = 2;
							break;
						case "singleAccounting":
							n.underline = 33;
							break;
						case "doubleAccounting":
							n.underline = 34;
							break;
					}
					break;
				case "<u/>":
					n.underline = 1;
					break;
				case "<strike":
					n.strike = f.val ? He(f.val) : 1;
					break;
				case "<strike/>":
					n.strike = 1;
					break;
				case "<outline":
					n.outline = f.val ? He(f.val) : 1;
					break;
				case "<outline/>":
					n.outline = 1;
					break;
				case "<shadow":
					n.shadow = f.val ? He(f.val) : 1;
					break;
				case "<shadow/>":
					n.shadow = 1;
					break;
				case "<condense":
					n.condense = f.val ? He(f.val) : 1;
					break;
				case "<condense/>":
					n.condense = 1;
					break;
				case "<extend":
					n.extend = f.val ? He(f.val) : 1;
					break;
				case "<extend/>":
					n.extend = 1;
					break;
				case "<sz":
					if (f.val) n.sz = +f.val;
					break;
				case "<sz/>":
				case "</sz>":
					break;
				case "<vertAlign":
					if (f.val) n.vertAlign = f.val;
					break;
				case "<vertAlign/>":
				case "</vertAlign>":
					break;
				case "<family":
					if (f.val) n.family = parseInt(f.val, 10);
					break;
				case "<family/>":
				case "</family>":
					break;
				case "<scheme":
					if (f.val) n.scheme = f.val;
					break;
				case "<scheme/>":
				case "</scheme>":
					break;
				case "<charset":
					if (f.val == "1") break;
					f.codepage = i[parseInt(f.val, 10)];
					break;
				case "<color":
					if (!n.color) n.color = {};
					if (f.auto) n.color.auto = He(f.auto);
					if (f.rgb) n.color.rgb = f.rgb.slice(-6);
					else if (f.indexed) {
						n.color.index = parseInt(f.indexed, 10);
						var l = Ea[n.color.index];
						if (n.color.index == 81) l = Ea[1];
						if (!l) throw new Error(e);
						n.color.rgb =
							l[0].toString(16) + l[1].toString(16) + l[2].toString(16);
					} else if (f.theme) {
						n.color.theme = parseInt(f.theme, 10);
						if (f.tint) n.color.tint = parseFloat(f.tint);
						if (f.theme && t.themeElements && t.themeElements.clrScheme) {
							n.color.rgb = $f(
								t.themeElements.clrScheme[n.color.theme].rgb,
								n.color.tint || 0
							);
						}
					}
					break;
				case "<color/>":
				case "</color>":
					break;
				case "<extLst":
				case "<extLst>":
				case "</extLst>":
					break;
				case "<ext":
					s = true;
					break;
				case "</ext>":
					s = false;
					break;
				default:
					if (a && a.WTF) {
						if (!s) throw new Error("unrecognized " + f[0] + " in fonts");
					}
			}
		});
	}
	function vl(e, r, t) {
		r.NumberFmt = [];
		var a = X(R._table);
		for (var n = 0; n < a.length; ++n) r.NumberFmt[a[n]] = R._table[a[n]];
		var i = e[0].match(_e);
		if (!i) return;
		for (n = 0; n < i.length; ++n) {
			var s = Te(i[n]);
			switch (xe(s[0])) {
				case "<numFmts":
				case "</numFmts>":
				case "<numFmts/>":
				case "<numFmts>":
					break;
				case "<numFmt":
					{
						var f = Ae(We(s.formatCode)),
							l = parseInt(s.numFmtId, 10);
						r.NumberFmt[l] = f;
						if (l > 0) {
							if (l > 392) {
								for (l = 392; l > 60; --l) if (r.NumberFmt[l] == null) break;
								r.NumberFmt[l] = f;
							}
							R.load(f, l);
						}
					}
					break;
				case "</numFmt>":
					break;
				default:
					if (t.WTF) throw new Error("unrecognized " + s[0] + " in numFmts");
			}
		}
	}
	function pl(e) {
		var r = ["<numFmts>"];
		[
			[5, 8],
			[23, 26],
			[41, 44],
			[50, 392],
		].forEach(function (t) {
			for (var a = t[0]; a <= t[1]; ++a)
				if (e[a] != null)
					r[r.length] = rr("numFmt", null, {
						numFmtId: a,
						formatCode: Oe(e[a]),
					});
		});
		if (r.length === 1) return "";
		r[r.length] = "</numFmts>";
		r[0] = rr("numFmts", null, { count: r.length - 2 }).replace("/>", ">");
		return r.join("");
	}
	var ml = ["numFmtId", "fillId", "fontId", "borderId", "xfId"];
	var bl = [
		"applyAlignment",
		"applyBorder",
		"applyFill",
		"applyFont",
		"applyNumberFormat",
		"applyProtection",
		"pivotButton",
		"quotePrefix",
	];
	function gl(e, r, t) {
		r.CellXf = [];
		var a;
		var n = false;
		e[0].match(_e).forEach(function (e) {
			var i = Te(e),
				s = 0;
			switch (xe(i[0])) {
				case "<cellXfs":
				case "<cellXfs>":
				case "<cellXfs/>":
				case "</cellXfs>":
					break;
				case "<xf":
				case "<xf/>":
					a = i;
					delete a[0];
					for (s = 0; s < ml.length; ++s)
						if (a[ml[s]]) a[ml[s]] = parseInt(a[ml[s]], 10);
					for (s = 0; s < bl.length; ++s) if (a[bl[s]]) a[bl[s]] = He(a[bl[s]]);
					if (a.numFmtId > 392) {
						for (s = 392; s > 60; --s)
							if (r.NumberFmt[a.numFmtId] == r.NumberFmt[s]) {
								a.numFmtId = s;
								break;
							}
					}
					r.CellXf.push(a);
					break;
				case "</xf>":
					break;
				case "<alignment":
				case "<alignment/>":
					var f = {};
					if (i.vertical) f.vertical = i.vertical;
					if (i.horizontal) f.horizontal = i.horizontal;
					if (i.textRotation != null) f.textRotation = i.textRotation;
					if (i.indent) f.indent = i.indent;
					if (i.wrapText) f.wrapText = i.wrapText;
					a.alignment = f;
					break;
				case "</alignment>":
					break;
				case "<protection":
				case "</protection>":
				case "<protection/>":
					break;
				case "<extLst":
				case "<extLst>":
				case "</extLst>":
					break;
				case "<ext":
					n = true;
					break;
				case "</ext>":
					n = false;
					break;
				default:
					if (t && t.WTF) {
						if (!n) throw new Error("unrecognized " + i[0] + " in cellXfs");
					}
			}
		});
	}
	function wl(e) {
		var r = [];
		r[r.length] = rr("cellXfs", null);
		e.forEach(function (e) {
			r[r.length] = rr("xf", null, e);
		});
		r[r.length] = "</cellXfs>";
		if (r.length === 2) return "";
		r[0] = rr("cellXfs", null, { count: r.length - 2 }).replace("/>", ">");
		return r.join("");
	}
	var El = (function nb() {
		var e = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
		var r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
		var t = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
		var a = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
		var n = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
		return function i(s, f, l) {
			var o = {};
			if (!s) return o;
			s = s
				.replace(/<!--([\s\S]*?)-->/gm, "")
				.replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
			var c;
			if ((c = s.match(e))) vl(c, o, l);
			if ((c = s.match(a))) dl(c, o, f, l);
			if ((c = s.match(t))) hl(c, o, f, l);
			if ((c = s.match(n))) ul(c, o, f, l);
			if ((c = s.match(r))) gl(c, o, l);
			return o;
		};
	})();
	var kl = rr("styleSheet", null, { xmlns: nr.main[0], "xmlns:vt": nr.vt });
	Ia.STY =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";
	function Sl(e, r) {
		var t = [ke, kl],
			a;
		if (e.SSF && (a = pl(e.SSF)) != null) t[t.length] = a;
		t[t.length] =
			'<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';
		t[t.length] =
			'<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';
		t[t.length] =
			'<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';
		t[t.length] =
			'<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
		if ((a = wl(r.cellXfs))) t[t.length] = a;
		t[t.length] =
			'<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
		t[t.length] = '<dxfs count="0"/>';
		t[t.length] =
			'<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';
		if (t.length > 2) {
			t[t.length] = "</styleSheet>";
			t[1] = t[1].replace("/>", ">");
		}
		return t.join("");
	}
	function _l(e, r) {
		var t = e._R(2);
		var a = wt(e, r - 2);
		return [t, a];
	}
	function Cl(e, r, t) {
		if (!t) t = zr(6 + 4 * r.length);
		t._W(2, e);
		Et(r, t);
		var a = t.length > t.l ? t.slice(0, t.l) : t;
		if (t.l == null) t.l = t.length;
		return a;
	}
	function Bl(e, r, t) {
		var a = {};
		a.sz = e._R(2) / 20;
		var n = Yt(e, 2, t);
		if (n.fCondense) a.condense = 1;
		if (n.fExtend) a.extend = 1;
		if (n.fShadow) a.shadow = 1;
		if (n.fOutline) a.outline = 1;
		if (n.fStrikeout) a.strike = 1;
		if (n.fItalic) a.italic = 1;
		var i = e._R(2);
		if (i === 700) a.bold = 1;
		switch (e._R(2)) {
			case 1:
				a.vertAlign = "superscript";
				break;
			case 2:
				a.vertAlign = "subscript";
				break;
		}
		var s = e._R(1);
		if (s != 0) a.underline = s;
		var f = e._R(1);
		if (f > 0) a.family = f;
		var l = e._R(1);
		if (l > 0) a.charset = l;
		e.l++;
		a.color = jt(e, 8);
		switch (e._R(1)) {
			case 1:
				a.scheme = "major";
				break;
			case 2:
				a.scheme = "minor";
				break;
		}
		a.name = wt(e, r - 21);
		return a;
	}
	function Tl(e, r) {
		if (!r) r = zr(25 + 4 * 32);
		r._W(2, e.sz * 20);
		$t(e, r);
		r._W(2, e.bold ? 700 : 400);
		var t = 0;
		if (e.vertAlign == "superscript") t = 1;
		else if (e.vertAlign == "subscript") t = 2;
		r._W(2, t);
		r._W(1, e.underline || 0);
		r._W(1, e.family || 0);
		r._W(1, e.charset || 0);
		r._W(1, 0);
		Kt(e.color, r);
		var a = 0;
		if (e.scheme == "major") a = 1;
		if (e.scheme == "minor") a = 2;
		r._W(1, a);
		Et(e.name, r);
		return r.length > r.l ? r.slice(0, r.l) : r;
	}
	var xl = [
		"none",
		"solid",
		"mediumGray",
		"darkGray",
		"lightGray",
		"darkHorizontal",
		"darkVertical",
		"darkDown",
		"darkUp",
		"darkGrid",
		"darkTrellis",
		"lightHorizontal",
		"lightVertical",
		"lightDown",
		"lightUp",
		"lightGrid",
		"lightTrellis",
		"gray125",
		"gray0625",
	];
	var yl = j(xl);
	var Il = Vr;
	function Al(e, r) {
		if (!r) r = zr(4 * 3 + 8 * 7 + 16 * 1);
		var t = yl[e.patternType];
		if (t == null) t = 40;
		r._W(4, t);
		var a = 0;
		if (t != 40) {
			Kt({ auto: 1 }, r);
			Kt({ auto: 1 }, r);
			for (; a < 12; ++a) r._W(4, 0);
		} else {
			for (; a < 4; ++a) r._W(4, 0);
			for (; a < 12; ++a) r._W(4, 0);
		}
		return r.length > r.l ? r.slice(0, r.l) : r;
	}
	function Rl(e, r) {
		var t = e.l + r;
		var a = e._R(2);
		var n = e._R(2);
		e.l = t;
		return { ixfe: a, numFmtId: n };
	}
	function Dl(e, r, t) {
		if (!t) t = zr(16);
		t._W(2, r || 0);
		t._W(2, e.numFmtId || 0);
		t._W(2, 0);
		t._W(2, 0);
		t._W(2, 0);
		t._W(1, 0);
		t._W(1, 0);
		t._W(1, 0);
		t._W(1, 0);
		t._W(1, 0);
		t._W(1, 0);
		return t;
	}
	function Ol(e, r) {
		if (!r) r = zr(10);
		r._W(1, 0);
		r._W(1, 0);
		r._W(4, 0);
		r._W(4, 0);
		return r;
	}
	var Fl = Vr;
	function Pl(e, r) {
		if (!r) r = zr(51);
		r._W(1, 0);
		Ol(null, r);
		Ol(null, r);
		Ol(null, r);
		Ol(null, r);
		Ol(null, r);
		return r.length > r.l ? r.slice(0, r.l) : r;
	}
	function Nl(e, r) {
		if (!r) r = zr(12 + 4 * 10);
		r._W(4, e.xfId);
		r._W(2, 1);
		r._W(1, +e.builtinId);
		r._W(1, 0);
		Dt(e.name || "", r);
		return r.length > r.l ? r.slice(0, r.l) : r;
	}
	function Ll(e, r, t) {
		var a = zr(4 + 256 * 2 * 4);
		a._W(4, e);
		Dt(r, a);
		Dt(t, a);
		return a.length > a.l ? a.slice(0, a.l) : a;
	}
	function Ml(e, r, t) {
		var a = {};
		a.NumberFmt = [];
		for (var n in R._table) a.NumberFmt[n] = R._table[n];
		a.CellXf = [];
		a.Fonts = [];
		var i = [];
		var s = false;
		Xr(e, function f(e, n, l) {
			switch (l) {
				case 44:
					a.NumberFmt[e[0]] = e[1];
					R.load(e[1], e[0]);
					break;
				case 43:
					a.Fonts.push(e);
					if (
						e.color.theme != null &&
						r &&
						r.themeElements &&
						r.themeElements.clrScheme
					) {
						e.color.rgb = $f(
							r.themeElements.clrScheme[e.color.theme].rgb,
							e.color.tint || 0
						);
					}
					break;
				case 1025:
					break;
				case 45:
					break;
				case 46:
					break;
				case 47:
					if (i[i.length - 1] == "BrtBeginCellXFs") {
						a.CellXf.push(e);
					}
					break;
				case 48:
				case 507:
				case 572:
				case 475:
					break;
				case 1171:
				case 2102:
				case 1130:
				case 512:
				case 2095:
				case 3072:
					break;
				case 35:
					s = true;
					break;
				case 36:
					s = false;
					break;
				case 37:
					i.push(n);
					break;
				case 38:
					i.pop();
					break;
				default:
					if ((n || "").indexOf("Begin") > 0) i.push(n);
					else if ((n || "").indexOf("End") > 0) i.pop();
					else if (!s || t.WTF)
						throw new Error("Unexpected record " + l + " " + n);
			}
		});
		return a;
	}
	function Ul(e, r) {
		if (!r) return;
		var t = 0;
		[
			[5, 8],
			[23, 26],
			[41, 44],
			[50, 392],
		].forEach(function (e) {
			for (var a = e[0]; a <= e[1]; ++a) if (r[a] != null) ++t;
		});
		if (t == 0) return;
		jr(e, "BrtBeginFmts", gt(t));
		[
			[5, 8],
			[23, 26],
			[41, 44],
			[50, 392],
		].forEach(function (t) {
			for (var a = t[0]; a <= t[1]; ++a)
				if (r[a] != null) jr(e, "BrtFmt", Cl(a, r[a]));
		});
		jr(e, "BrtEndFmts");
	}
	function Hl(e) {
		var r = 1;
		if (r == 0) return;
		jr(e, "BrtBeginFonts", gt(r));
		jr(
			e,
			"BrtFont",
			Tl({
				sz: 12,
				color: { theme: 1 },
				name: "Calibri",
				family: 2,
				scheme: "minor",
			})
		);
		jr(e, "BrtEndFonts");
	}
	function Wl(e) {
		var r = 2;
		if (r == 0) return;
		jr(e, "BrtBeginFills", gt(r));
		jr(e, "BrtFill", Al({ patternType: "none" }));
		jr(e, "BrtFill", Al({ patternType: "gray125" }));
		jr(e, "BrtEndFills");
	}
	function Vl(e) {
		var r = 1;
		if (r == 0) return;
		jr(e, "BrtBeginBorders", gt(r));
		jr(e, "BrtBorder", Pl({}));
		jr(e, "BrtEndBorders");
	}
	function zl(e) {
		var r = 1;
		jr(e, "BrtBeginCellStyleXFs", gt(r));
		jr(
			e,
			"BrtXF",
			Dl({ numFmtId: 0, fontId: 0, fillId: 0, borderId: 0 }, 65535)
		);
		jr(e, "BrtEndCellStyleXFs");
	}
	function Xl(e, r) {
		jr(e, "BrtBeginCellXFs", gt(r.length));
		r.forEach(function (r) {
			jr(e, "BrtXF", Dl(r, 0));
		});
		jr(e, "BrtEndCellXFs");
	}
	function Gl(e) {
		var r = 1;
		jr(e, "BrtBeginStyles", gt(r));
		jr(e, "BrtStyle", Nl({ xfId: 0, builtinId: 0, name: "Normal" }));
		jr(e, "BrtEndStyles");
	}
	function jl(e) {
		var r = 0;
		jr(e, "BrtBeginDXFs", gt(r));
		jr(e, "BrtEndDXFs");
	}
	function Kl(e) {
		var r = 0;
		jr(
			e,
			"BrtBeginTableStyles",
			Ll(r, "TableStyleMedium9", "PivotStyleMedium4")
		);
		jr(e, "BrtEndTableStyles");
	}
	function Yl() {
		return;
	}
	function $l(e, r) {
		var t = Gr();
		jr(t, "BrtBeginStyleSheet");
		Ul(t, e.SSF);
		Hl(t, e);
		Wl(t, e);
		Vl(t, e);
		zl(t, e);
		Xl(t, r.cellXfs);
		Gl(t, e);
		jl(t, e);
		Kl(t, e);
		Yl(t, e);
		jr(t, "BrtEndStyleSheet");
		return t.end();
	}
	Ia.THEME =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
	function Zl(e, r, t) {
		r.themeElements.clrScheme = [];
		var a = {};
		(e[0].match(_e) || []).forEach(function (e) {
			var n = Te(e);
			switch (n[0]) {
				case "<a:clrScheme":
				case "</a:clrScheme>":
					break;
				case "<a:srgbClr":
					a.rgb = n.val;
					break;
				case "<a:sysClr":
					a.rgb = n.lastClr;
					break;
				case "<a:dk1>":
				case "</a:dk1>":
				case "<a:lt1>":
				case "</a:lt1>":
				case "<a:dk2>":
				case "</a:dk2>":
				case "<a:lt2>":
				case "</a:lt2>":
				case "<a:accent1>":
				case "</a:accent1>":
				case "<a:accent2>":
				case "</a:accent2>":
				case "<a:accent3>":
				case "</a:accent3>":
				case "<a:accent4>":
				case "</a:accent4>":
				case "<a:accent5>":
				case "</a:accent5>":
				case "<a:accent6>":
				case "</a:accent6>":
				case "<a:hlink>":
				case "</a:hlink>":
				case "<a:folHlink>":
				case "</a:folHlink>":
					if (n[0].charAt(1) === "/") {
						r.themeElements.clrScheme.push(a);
						a = {};
					} else {
						a.name = n[0].slice(3, n[0].length - 1);
					}
					break;
				default:
					if (t && t.WTF)
						throw new Error("Unrecognized " + n[0] + " in clrScheme");
			}
		});
	}
	function Ql() {}
	function Jl() {}
	var ql = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;
	var eo = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;
	var ro = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;
	function to(e, r, t) {
		r.themeElements = {};
		var a;
		[
			["clrScheme", ql, Zl],
			["fontScheme", eo, Ql],
			["fmtScheme", ro, Jl],
		].forEach(function (n) {
			if (!(a = e.match(n[1])))
				throw new Error(n[0] + " not found in themeElements");
			n[2](a, r, t);
		});
	}
	var ao = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;
	function no(e, r) {
		if (!e || e.length === 0) return no(io());
		var t;
		var a = {};
		if (!(t = e.match(ao))) throw new Error("themeElements not found in theme");
		to(t[0], a, r);
		return a;
	}
	function io(e, r) {
		if (r && r.themeXLSX) return r.themeXLSX;
		var t = [ke];
		t[t.length] =
			'<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
		t[t.length] = "<a:themeElements>";
		t[t.length] = '<a:clrScheme name="Office">';
		t[t.length] =
			'<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
		t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
		t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
		t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
		t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
		t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
		t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
		t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
		t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
		t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
		t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
		t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
		t[t.length] = "</a:clrScheme>";
		t[t.length] = '<a:fontScheme name="Office">';
		t[t.length] = "<a:majorFont>";
		t[t.length] = '<a:latin typeface="Cambria"/>';
		t[t.length] = '<a:ea typeface=""/>';
		t[t.length] = '<a:cs typeface=""/>';
		t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
		t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
		t[t.length] = '<a:font script="Hans" typeface="宋体"/>';
		t[t.length] = '<a:font script="Hant" typeface="新細明體"/>';
		t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
		t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
		t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>';
		t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>';
		t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>';
		t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>';
		t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
		t[t.length] = '<a:font script="Knda" typeface="Tunga"/>';
		t[t.length] = '<a:font script="Guru" typeface="Raavi"/>';
		t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>';
		t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
		t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
		t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
		t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
		t[t.length] = '<a:font script="Deva" typeface="Mangal"/>';
		t[t.length] = '<a:font script="Telu" typeface="Gautami"/>';
		t[t.length] = '<a:font script="Taml" typeface="Latha"/>';
		t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
		t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>';
		t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>';
		t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
		t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
		t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
		t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
		t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
		t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
		t[t.length] = "</a:majorFont>";
		t[t.length] = "<a:minorFont>";
		t[t.length] = '<a:latin typeface="Calibri"/>';
		t[t.length] = '<a:ea typeface=""/>';
		t[t.length] = '<a:cs typeface=""/>';
		t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
		t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
		t[t.length] = '<a:font script="Hans" typeface="宋体"/>';
		t[t.length] = '<a:font script="Hant" typeface="新細明體"/>';
		t[t.length] = '<a:font script="Arab" typeface="Arial"/>';
		t[t.length] = '<a:font script="Hebr" typeface="Arial"/>';
		t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>';
		t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>';
		t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>';
		t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>';
		t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
		t[t.length] = '<a:font script="Knda" typeface="Tunga"/>';
		t[t.length] = '<a:font script="Guru" typeface="Raavi"/>';
		t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>';
		t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
		t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
		t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
		t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
		t[t.length] = '<a:font script="Deva" typeface="Mangal"/>';
		t[t.length] = '<a:font script="Telu" typeface="Gautami"/>';
		t[t.length] = '<a:font script="Taml" typeface="Latha"/>';
		t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
		t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>';
		t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>';
		t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
		t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
		t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
		t[t.length] = '<a:font script="Viet" typeface="Arial"/>';
		t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
		t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
		t[t.length] = "</a:minorFont>";
		t[t.length] = "</a:fontScheme>";
		t[t.length] = '<a:fmtScheme name="Office">';
		t[t.length] = "<a:fillStyleLst>";
		t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
		t[t.length] = '<a:gradFill rotWithShape="1">';
		t[t.length] = "<a:gsLst>";
		t[t.length] =
			'<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
		t[t.length] =
			'<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
		t[t.length] =
			'<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		t[t.length] = "</a:gsLst>";
		t[t.length] = '<a:lin ang="16200000" scaled="1"/>';
		t[t.length] = "</a:gradFill>";
		t[t.length] = '<a:gradFill rotWithShape="1">';
		t[t.length] = "<a:gsLst>";
		t[t.length] =
			'<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
		t[t.length] =
			'<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		t[t.length] = "</a:gsLst>";
		t[t.length] = '<a:lin ang="16200000" scaled="0"/>';
		t[t.length] = "</a:gradFill>";
		t[t.length] = "</a:fillStyleLst>";
		t[t.length] = "<a:lnStyleLst>";
		t[t.length] =
			'<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
		t[t.length] =
			'<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
		t[t.length] =
			'<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
		t[t.length] = "</a:lnStyleLst>";
		t[t.length] = "<a:effectStyleLst>";
		t[t.length] = "<a:effectStyle>";
		t[t.length] = "<a:effectLst>";
		t[t.length] =
			'<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
		t[t.length] = "</a:effectLst>";
		t[t.length] = "</a:effectStyle>";
		t[t.length] = "<a:effectStyle>";
		t[t.length] = "<a:effectLst>";
		t[t.length] =
			'<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
		t[t.length] = "</a:effectLst>";
		t[t.length] = "</a:effectStyle>";
		t[t.length] = "<a:effectStyle>";
		t[t.length] = "<a:effectLst>";
		t[t.length] =
			'<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
		t[t.length] = "</a:effectLst>";
		t[t.length] =
			'<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
		t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
		t[t.length] = "</a:effectStyle>";
		t[t.length] = "</a:effectStyleLst>";
		t[t.length] = "<a:bgFillStyleLst>";
		t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
		t[t.length] = '<a:gradFill rotWithShape="1">';
		t[t.length] = "<a:gsLst>";
		t[t.length] =
			'<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		t[t.length] =
			'<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
		t[t.length] =
			'<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
		t[t.length] = "</a:gsLst>";
		t[t.length] =
			'<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
		t[t.length] = "</a:gradFill>";
		t[t.length] = '<a:gradFill rotWithShape="1">';
		t[t.length] = "<a:gsLst>";
		t[t.length] =
			'<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
		t[t.length] =
			'<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
		t[t.length] = "</a:gsLst>";
		t[t.length] =
			'<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
		t[t.length] = "</a:gradFill>";
		t[t.length] = "</a:bgFillStyleLst>";
		t[t.length] = "</a:fmtScheme>";
		t[t.length] = "</a:themeElements>";
		t[t.length] = "<a:objectDefaults>";
		t[t.length] = "<a:spDef>";
		t[t.length] =
			'<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
		t[t.length] = "</a:spDef>";
		t[t.length] = "<a:lnDef>";
		t[t.length] =
			'<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
		t[t.length] = "</a:lnDef>";
		t[t.length] = "</a:objectDefaults>";
		t[t.length] = "<a:extraClrSchemeLst/>";
		t[t.length] = "</a:theme>";
		return t.join("");
	}
	function so(e, r, t) {
		var a = e.l + r;
		var n = e._R(4);
		if (n === 124226) return;
		if (!t.cellStyles || !we) {
			e.l = a;
			return;
		}
		var i = e.slice(e.l);
		e.l = a;
		var s;
		try {
			s = new we(i);
		} catch (f) {
			return;
		}
		var l = be(s, "theme/theme/theme1.xml", true);
		if (!l) return;
		return no(l, t);
	}
	function fo(e) {
		return e._R(4);
	}
	function lo(e) {
		var r = {};
		r.xclrType = e._R(2);
		r.nTintShade = e._R(2);
		switch (r.xclrType) {
			case 0:
				e.l += 4;
				break;
			case 1:
				r.xclrValue = oo(e, 4);
				break;
			case 2:
				r.xclrValue = ti(e, 4);
				break;
			case 3:
				r.xclrValue = fo(e, 4);
				break;
			case 4:
				e.l += 4;
				break;
		}
		e.l += 8;
		return r;
	}
	function oo(e, r) {
		return Vr(e, r);
	}
	function co(e, r) {
		return Vr(e, r);
	}
	function uo(e) {
		var r = e._R(2);
		var t = e._R(2) - 4;
		var a = [r];
		switch (r) {
			case 4:
			case 5:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 13:
				a[1] = lo(e, t);
				break;
			case 6:
				a[1] = co(e, t);
				break;
			case 14:
			case 15:
				a[1] = e._R(t === 1 ? 1 : 2);
				break;
			default:
				throw new Error("Unrecognized ExtProp type: " + r + " " + t);
		}
		return a;
	}
	function ho(e, r) {
		var t = e.l + r;
		e.l += 2;
		var a = e._R(2);
		e.l += 2;
		var n = e._R(2);
		var i = [];
		while (n-- > 0) i.push(uo(e, t - e.l));
		return { ixfe: a, ext: i };
	}
	function vo(e, r) {
		r.forEach(function (e) {
			switch (e[0]) {
				case 4:
					break;
				case 5:
					break;
				case 6:
					break;
				case 7:
					break;
				case 8:
					break;
				case 9:
					break;
				case 10:
					break;
				case 11:
					break;
				case 13:
					break;
				case 14:
					break;
				case 15:
					break;
			}
		});
	}
	function po(e) {
		var r = [];
		if (!e) return r;
		var t = 1;
		(e.match(_e) || []).forEach(function (e) {
			var a = Te(e);
			switch (a[0]) {
				case "<?xml":
					break;
				case "<calcChain":
				case "<calcChain>":
				case "</calcChain>":
					break;
				case "<c":
					delete a[0];
					if (a.i) t = a.i;
					else a.i = t;
					r.push(a);
					break;
			}
		});
		return r;
	}
	function mo(e) {
		var r = {};
		r.i = e._R(4);
		var t = {};
		t.r = e._R(4);
		t.c = e._R(4);
		r.r = ot(t);
		var a = e._R(1);
		if (a & 2) r.l = "1";
		if (a & 8) r.a = "1";
		return r;
	}
	function bo(e, r, t) {
		var a = [];
		var n = false;
		Xr(e, function i(e, r, s) {
			switch (s) {
				case 63:
					a.push(e);
					break;
				default:
					if ((r || "").indexOf("Begin") > 0) {
					} else if ((r || "").indexOf("End") > 0) {
					} else if (!n || t.WTF)
						throw new Error("Unexpected record " + s + " " + r);
			}
		});
		return a;
	}
	function go() {}
	function wo(e, r, t) {
		if (!e) return e;
		var a = t || {};
		var n = false,
			i = false;
		Xr(
			e,
			function s(e, r, t) {
				if (i) return;
				switch (t) {
					case 359:
					case 363:
					case 364:
					case 366:
					case 367:
					case 368:
					case 369:
					case 370:
					case 371:
					case 472:
					case 577:
					case 578:
					case 579:
					case 580:
					case 581:
					case 582:
					case 583:
					case 584:
					case 585:
					case 586:
					case 587:
						break;
					case 35:
						n = true;
						break;
					case 36:
						n = false;
						break;
					default:
						if ((r || "").indexOf("Begin") > 0) {
						} else if ((r || "").indexOf("End") > 0) {
						} else if (!n || a.WTF)
							throw new Error("Unexpected record " + t.toString(16) + " " + r);
				}
			},
			a
		);
	}
	Ia.IMG =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
	Ia.DRAW =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";
	function Eo(e, r) {
		if (!e) return "??";
		var t = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
		return r["!id"][t].Target;
	}
	var ko = 1024;
	function So(e, r) {
		var t = [21600, 21600];
		var a = ["m0,0l0", t[1], t[0], t[1], t[0], "0xe"].join(",");
		var n = [
			rr("xml", null, {
				"xmlns:v": ir.v,
				"xmlns:o": ir.o,
				"xmlns:x": ir.x,
				"xmlns:mv": ir.mv,
			}).replace(/\/>/, ">"),
			rr("o:shapelayout", rr("o:idmap", null, { "v:ext": "edit", data: e }), {
				"v:ext": "edit",
			}),
			rr(
				"v:shapetype",
				[
					rr("v:stroke", null, { joinstyle: "miter" }),
					rr("v:path", null, { gradientshapeok: "t", "o:connecttype": "rect" }),
				].join(""),
				{ id: "_x0000_t202", "o:spt": 202, coordsize: t.join(","), path: a }
			),
		];
		while (ko < e * 1e3) ko += 1e3;
		r.forEach(function (e) {
			var r = lt(e[0]);
			n = n.concat([
				"<v:shape" +
					er({
						id: "_x0000_s" + ++ko,
						type: "#_x0000_t202",
						style:
							"position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" +
							(e[1].hidden ? ";visibility:hidden" : ""),
						fillcolor: "#ECFAD4",
						strokecolor: "#edeaa1",
					}) +
					">",
				rr(
					"v:fill",
					rr("o:fill", null, { type: "gradientUnscaled", "v:ext": "view" }),
					{ color2: "#BEFF82", angle: "-180", type: "gradient" }
				),
				rr("v:shadow", null, { on: "t", obscured: "t" }),
				rr("v:path", null, { "o:connecttype": "none" }),
				'<v:textbox><div style="text-align:left"></div></v:textbox>',
				'<x:ClientData ObjectType="Note">',
				"<x:MoveWithCells/>",
				"<x:SizeWithCells/>",
				qe("x:Anchor", [r.c, 0, r.r, 0, r.c + 3, 100, r.r + 5, 100].join(",")),
				qe("x:AutoFill", "False"),
				qe("x:Row", String(r.r)),
				qe("x:Column", String(r.c)),
				e[1].hidden ? "" : "<x:Visible/>",
				"</x:ClientData>",
				"</v:shape>",
			]);
		});
		n.push("</xml>");
		return n.join("");
	}
	Ia.CMNT =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";
	function _o(e, r, t, a, n) {
		for (var i = 0; i != r.length; ++i) {
			var s = r[i];
			var f = mv(me(e, s.replace(/^\//, ""), true), s, n);
			if (!f || !f.length) continue;
			var l = X(t);
			for (var o = 0; o != l.length; ++o) {
				var c = l[o];
				var u = a[c];
				if (u) {
					var h = u[s];
					if (h) Co(c, t[c], f);
				}
			}
		}
	}
	function Co(e, r, t) {
		var a = Array.isArray(r);
		var n, i;
		t.forEach(function (e) {
			if (a) {
				i = lt(e.ref);
				if (!r[i.r]) r[i.r] = [];
				n = r[i.r][i.c];
			} else n = r[e.ref];
			if (!n) {
				n = {};
				if (a) r[i.r][i.c] = n;
				else r[e.ref] = n;
				var t = ht(r["!ref"] || "BDWGO1000001:A1");
				var s = lt(e.ref);
				if (t.s.r > s.r) t.s.r = s.r;
				if (t.e.r < s.r) t.e.r = s.r;
				if (t.s.c > s.c) t.s.c = s.c;
				if (t.e.c < s.c) t.e.c = s.c;
				var f = ut(t);
				if (f !== r["!ref"]) r["!ref"] = f;
			}
			if (!n.c) n.c = [];
			var l = { a: e.author, t: e.t, r: e.r };
			if (e.h) l.h = e.h;
			n.c.push(l);
		});
	}
	function Bo(e, r) {
		if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
		var t = [];
		var a = [];
		var n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
		if (n && n[1])
			n[1].split(/<\/\w*:?author>/).forEach(function (e) {
				if (e === "" || e.trim() === "") return;
				var r = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
				if (r) t.push(r[1]);
			});
		var i = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
		if (i && i[1])
			i[1].split(/<\/\w*:?comment>/).forEach(function (e) {
				if (e === "" || e.trim() === "") return;
				var n = e.match(/<(?:\w+:)?comment[^>]*>/);
				if (!n) return;
				var i = Te(n[0]);
				var s = {
					author: (i.authorId && t[i.authorId]) || "sheetjsghost",
					ref: i.ref,
					guid: i.guid,
				};
				var f = lt(i.ref);
				if (r.sheetRows && r.sheetRows <= f.r) return;
				var l = e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);
				var o = (!!l && !!l[1] && of(l[1])) || { r: "", t: "", h: "" };
				s.r = o.r;
				if (o.r == "<t></t>") o.t = o.h = "";
				s.t = o.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
				if (r.cellHTML) s.h = o.h;
				a.push(s);
			});
		return a;
	}
	var To = rr("comments", null, { xmlns: nr.main[0] });
	function xo(e) {
		var r = [ke, To];
		var t = [];
		r.push("<authors>");
		e.forEach(function (e) {
			e[1].forEach(function (e) {
				var a = Oe(e.a);
				if (t.indexOf(a) > -1) return;
				t.push(a);
				r.push("<author>" + a + "</author>");
			});
		});
		r.push("</authors>");
		r.push("<commentList>");
		e.forEach(function (e) {
			e[1].forEach(function (a) {
				r.push(
					'<comment ref="' +
						e[0] +
						'" authorId="' +
						t.indexOf(Oe(a.a)) +
						'"><text>'
				);
				r.push(qe("t", a.t == null ? "" : a.t));
				r.push("</text></comment>");
			});
		});
		r.push("</commentList>");
		if (r.length > 2) {
			r[r.length] = "</comments>";
			r[1] = r[1].replace("/>", ">");
		}
		return r.join("");
	}
	function yo(e) {
		var r = {};
		r.iauthor = e._R(4);
		var t = Ht(e, 16);
		r.rfx = t.s;
		r.ref = ot(t.s);
		e.l += 16;
		return r;
	}
	function Io(e, r) {
		if (r == null) r = zr(36);
		r._W(4, e[1].iauthor);
		Wt(e[0], r);
		r._W(4, 0);
		r._W(4, 0);
		r._W(4, 0);
		r._W(4, 0);
		return r;
	}
	var Ao = wt;
	function Ro(e) {
		return Et(e.slice(0, 54));
	}
	function Do(e, r) {
		var t = [];
		var a = [];
		var n = {};
		var i = false;
		Xr(e, function s(e, f, l) {
			switch (l) {
				case 632:
					a.push(e);
					break;
				case 635:
					n = e;
					break;
				case 637:
					n.t = e.t;
					n.h = e.h;
					n.r = e.r;
					break;
				case 636:
					n.author = a[n.iauthor];
					delete n.iauthor;
					if (r.sheetRows && r.sheetRows <= n.rfx.r) break;
					if (!n.t) n.t = "";
					delete n.rfx;
					t.push(n);
					break;
				case 3072:
					break;
				case 35:
					i = true;
					break;
				case 36:
					i = false;
					break;
				case 37:
					break;
				case 38:
					break;
				default:
					if ((f || "").indexOf("Begin") > 0) {
					} else if ((f || "").indexOf("End") > 0) {
					} else if (!i || r.WTF)
						throw new Error("Unexpected record " + l + " " + f);
			}
		});
		return t;
	}
	function Oo(e) {
		var r = Gr();
		var t = [];
		jr(r, "BrtBeginComments");
		jr(r, "BrtBeginCommentAuthors");
		e.forEach(function (e) {
			e[1].forEach(function (e) {
				if (t.indexOf(e.a) > -1) return;
				t.push(e.a.slice(0, 54));
				jr(r, "BrtCommentAuthor", Ro(e.a));
			});
		});
		jr(r, "BrtEndCommentAuthors");
		jr(r, "BrtBeginCommentList");
		e.forEach(function (e) {
			e[1].forEach(function (a) {
				a.iauthor = t.indexOf(a.a);
				var n = { s: lt(e[0]), e: lt(e[0]) };
				jr(r, "BrtBeginComment", Io([n, a]));
				if (a.t && a.t.length > 0) jr(r, "BrtCommentText", Tt(a));
				jr(r, "BrtEndComment");
				delete a.iauthor;
			});
		});
		jr(r, "BrtEndCommentList");
		jr(r, "BrtEndComments");
		return r.end();
	}
	var Fo = "application/vnd.ms-office.vbaProject";
	function Po(e) {
		var r = U.utils.cfb_new({ root: "R" });
		e.FullPaths.forEach(function (t, a) {
			if (t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/)) return;
			var n = t
				.replace(/^[^\/]*/, "R")
				.replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
			U.utils.cfb_add(r, n, e.FileIndex[a].content);
		});
		return U.write(r);
	}
	function No(e, r) {
		r.FullPaths.forEach(function (t, a) {
			if (a == 0) return;
			var n = t.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
			if (n.slice(-1) !== "/") U.utils.cfb_add(e, n, r.FileIndex[a].content);
		});
	}
	var Lo = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
	Ia.DS =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet";
	Ia.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";
	function Mo() {
		return { "!type": "dialog" };
	}
	function Uo() {
		return { "!type": "dialog" };
	}
	function Ho() {
		return { "!type": "macro" };
	}
	function Wo() {
		return { "!type": "macro" };
	}
	var Vo = (function () {
		var e = /(^|[^A-Za-z])R(\[?)(-?\d+|)\]?C(\[?)(-?\d+|)\]?/g;
		var r = { r: 0, c: 0 };
		function t(e, t, a, n, i, s) {
			var f = n.length > 0 ? parseInt(n, 10) | 0 : 0,
				l = s.length > 0 ? parseInt(s, 10) | 0 : 0;
			if (l < 0 && i.length === 0) l = 0;
			var o = false,
				c = false;
			if (i.length > 0 || s.length == 0) o = true;
			if (o) l += r.c;
			else --l;
			if (a.length > 0 || n.length == 0) c = true;
			if (c) f += r.r;
			else --f;
			return t + (o ? "" : "$") + nt(l) + (c ? "" : "$") + et(f);
		}
		return function a(n, i) {
			r = i;
			return n.replace(e, t);
		};
	})();
	var zo =
		/(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)([1-9]\d{0,5}|10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6])(?![_.\(A-Za-z0-9])/g;
	var Xo = (function () {
		return function e(r, t) {
			return r.replace(zo, function (e, r, a, n, i, s) {
				var f = at(n) - (a ? 0 : t.c);
				var l = qr(s) - (i ? 0 : t.r);
				var o = l == 0 ? "" : !i ? "[" + l + "]" : l + 1;
				var c = f == 0 ? "" : !a ? "[" + f + "]" : f + 1;
				return r + "R" + o + "C" + c;
			});
		};
	})();
	function Go(e, r) {
		return e.replace(zo, function (e, t, a, n, i, s) {
			return (
				t +
				(a == "$" ? a + n : nt(at(n) + r.c)) +
				(i == "$" ? i + s : et(qr(s) + r.r))
			);
		});
	}
	function jo(e, r, t) {
		var a = ct(r),
			n = a.s,
			i = lt(t);
		var s = { r: i.r - n.r, c: i.c - n.c };
		return Go(e, s);
	}
	function Ko(e) {
		if (e.length == 1) return false;
		return true;
	}
	function Yo(e) {
		return e.replace(/_xlfn\./g, "");
	}
	function $o(e) {
		e.l += 1;
		return;
	}
	function Zo(e, r) {
		var t = e._R(r == 1 ? 1 : 2);
		return [t & 16383, (t >> 14) & 1, (t >> 15) & 1];
	}
	function Qo(e, r, t) {
		var a = 2;
		if (t) {
			if (t.biff >= 2 && t.biff <= 5) return Jo(e, r, t);
			else if (t.biff == 12) a = 4;
		}
		var n = e._R(a),
			i = e._R(a);
		var s = Zo(e, 2);
		var f = Zo(e, 2);
		return {
			s: { r: n, c: s[0], cRel: s[1], rRel: s[2] },
			e: { r: i, c: f[0], cRel: f[1], rRel: f[2] },
		};
	}
	function Jo(e) {
		var r = Zo(e, 2),
			t = Zo(e, 2);
		var a = e._R(1);
		var n = e._R(1);
		return {
			s: { r: r[0], c: a, cRel: r[1], rRel: r[2] },
			e: { r: t[0], c: n, cRel: t[1], rRel: t[2] },
		};
	}
	function qo(e, r, t) {
		if (t.biff < 8) return Jo(e, r, t);
		var a = e._R(t.biff == 12 ? 4 : 2),
			n = e._R(t.biff == 12 ? 4 : 2);
		var i = Zo(e, 2);
		var s = Zo(e, 2);
		return {
			s: { r: a, c: i[0], cRel: i[1], rRel: i[2] },
			e: { r: n, c: s[0], cRel: s[1], rRel: s[2] },
		};
	}
	function ec(e, r, t) {
		if (t && t.biff >= 2 && t.biff <= 5) return rc(e, r, t);
		var a = e._R(t && t.biff == 12 ? 4 : 2);
		var n = Zo(e, 2);
		return { r: a, c: n[0], cRel: n[1], rRel: n[2] };
	}
	function rc(e) {
		var r = Zo(e, 2);
		var t = e._R(1);
		return { r: r[0], c: t, cRel: r[1], rRel: r[2] };
	}
	function tc(e) {
		var r = e._R(2);
		var t = e._R(2);
		return {
			r: r,
			c: t & 255,
			fQuoted: !!(t & 16384),
			cRel: t >> 15,
			rRel: t >> 15,
		};
	}
	function ac(e, r, t) {
		var a = t && t.biff ? t.biff : 8;
		if (a >= 2 && a <= 5) return nc(e, r, t);
		var n = e._R(a >= 12 ? 4 : 2);
		var i = e._R(2);
		var s = (i & 16384) >> 14,
			f = (i & 32768) >> 15;
		i &= 16383;
		if (f == 1) while (n > 524287) n -= 1048576;
		if (s == 1) while (i > 8191) i = i - 16384;
		return { r: n, c: i, cRel: s, rRel: f };
	}
	function nc(e) {
		var r = e._R(2);
		var t = e._R(1);
		var a = (r & 32768) >> 15,
			n = (r & 16384) >> 14;
		r &= 16383;
		if (a == 1 && r >= 8192) r = r - 16384;
		if (n == 1 && t >= 128) t = t - 256;
		return { r: r, c: t, cRel: n, rRel: a };
	}
	function ic(e, r, t) {
		var a = (e[e.l++] & 96) >> 5;
		var n = Qo(e, t.biff >= 2 && t.biff <= 5 ? 6 : 8, t);
		return [a, n];
	}
	function sc(e, r, t) {
		var a = (e[e.l++] & 96) >> 5;
		var n = e._R(2, "i");
		var i = 8;
		if (t)
			switch (t.biff) {
				case 5:
					e.l += 12;
					i = 6;
					break;
				case 12:
					i = 12;
					break;
			}
		var s = Qo(e, i, t);
		return [a, n, s];
	}
	function fc(e, r, t) {
		var a = (e[e.l++] & 96) >> 5;
		e.l += t && t.biff > 8 ? 12 : t.biff < 8 ? 6 : 8;
		return [a];
	}
	function lc(e, r, t) {
		var a = (e[e.l++] & 96) >> 5;
		var n = e._R(2);
		var i = 8;
		if (t)
			switch (t.biff) {
				case 5:
					e.l += 12;
					i = 6;
					break;
				case 12:
					i = 12;
					break;
			}
		e.l += i;
		return [a, n];
	}
	function oc(e, r, t) {
		var a = (e[e.l++] & 96) >> 5;
		var n = qo(e, r - 1, t);
		return [a, n];
	}
	function cc(e, r, t) {
		var a = (e[e.l++] & 96) >> 5;
		e.l += t.biff == 2 ? 6 : t.biff == 12 ? 14 : 7;
		return [a];
	}
	function uc(e) {
		var r = e[e.l + 1] & 1;
		var t = 1;
		e.l += 4;
		return [r, t];
	}
	function hc(e, r, t) {
		e.l += 2;
		var a = e._R(t && t.biff == 2 ? 1 : 2);
		var n = [];
		for (var i = 0; i <= a; ++i) n.push(e._R(t && t.biff == 2 ? 1 : 2));
		return n;
	}
	function dc(e, r, t) {
		var a = e[e.l + 1] & 255 ? 1 : 0;
		e.l += 2;
		return [a, e._R(t && t.biff == 2 ? 1 : 2)];
	}
	function vc(e, r, t) {
		var a = e[e.l + 1] & 255 ? 1 : 0;
		e.l += 2;
		return [a, e._R(t && t.biff == 2 ? 1 : 2)];
	}
	function pc(e) {
		var r = e[e.l + 1] & 255 ? 1 : 0;
		e.l += 2;
		return [r, e._R(2)];
	}
	function mc(e, r, t) {
		var a = e[e.l + 1] & 255 ? 1 : 0;
		e.l += t && t.biff == 2 ? 3 : 4;
		return [a];
	}
	function bc(e) {
		var r = e._R(1),
			t = e._R(1);
		return [r, t];
	}
	function gc(e) {
		e._R(2);
		return bc(e, 2);
	}
	function wc(e) {
		e._R(2);
		return bc(e, 2);
	}
	function Ec(e, r, t) {
		var a = (e[e.l] & 96) >> 5;
		e.l += 1;
		var n = ec(e, 0, t);
		return [a, n];
	}
	function kc(e, r, t) {
		var a = (e[e.l] & 96) >> 5;
		e.l += 1;
		var n = ac(e, 0, t);
		return [a, n];
	}
	function Sc(e, r, t) {
		var a = (e[e.l] & 96) >> 5;
		e.l += 1;
		var n = e._R(2);
		if (t && t.biff == 5) e.l += 12;
		var i = ec(e, 0, t);
		return [a, n, i];
	}
	function _c(e, r, t) {
		var a = (e[e.l] & 96) >> 5;
		e.l += 1;
		var n = e._R(t && t.biff <= 3 ? 1 : 2);
		return [Lu[n], Nu[n], a];
	}
	function Cc(e, r, t) {
		var a = e[e.l++];
		var n = e._R(1),
			i = t && t.biff <= 3 ? [a == 88 ? -1 : 0, e._R(1)] : Bc(e);
		return [n, (i[0] === 0 ? Nu : Pu)[i[1]]];
	}
	function Bc(e) {
		return [e[e.l + 1] >> 7, e._R(2) & 32767];
	}
	function Tc(e, r, t) {
		e.l += t && t.biff == 2 ? 3 : 4;
		return;
	}
	function xc(e, r, t) {
		e.l++;
		if (t && t.biff == 12) return [e._R(4, "i"), 0];
		var a = e._R(2);
		var n = e._R(t && t.biff == 2 ? 1 : 2);
		return [a, n];
	}
	function yc(e) {
		e.l++;
		return Xt[e._R(1)];
	}
	function Ic(e) {
		e.l++;
		return e._R(2);
	}
	function Ac(e) {
		e.l++;
		return e._R(1) !== 0;
	}
	function Rc(e) {
		e.l++;
		return Vt(e, 8);
	}
	function Dc(e, r, t) {
		e.l++;
		return zn(e, r - 1, t);
	}
	function Oc(e, r) {
		var t = [e._R(1)];
		if (r == 12)
			switch (t[0]) {
				case 2:
					t[0] = 4;
					break;
				case 4:
					t[0] = 16;
					break;
				case 0:
					t[0] = 1;
					break;
				case 1:
					t[0] = 2;
					break;
			}
		switch (t[0]) {
			case 4:
				t[1] = Nn(e, 1) ? "TRUE" : "FALSE";
				if (r != 12) e.l += 7;
				break;
			case 37:
			case 16:
				t[1] = Xt[e[e.l]];
				e.l += r == 12 ? 4 : 8;
				break;
			case 0:
				e.l += 8;
				break;
			case 1:
				t[1] = Vt(e, 8);
				break;
			case 2:
				t[1] = Kn(e, 0, { biff: r > 0 && r < 8 ? 2 : r });
				break;
			default:
				throw new Error("Bad SerAr: " + t[0]);
		}
		return t;
	}
	function Fc(e, r, t) {
		var a = e._R(t.biff == 12 ? 4 : 2);
		var n = [];
		for (var i = 0; i != a; ++i) n.push((t.biff == 12 ? Ht : ui)(e, 8));
		return n;
	}
	function Pc(e, r, t) {
		var a = 0,
			n = 0;
		if (t.biff == 12) {
			a = e._R(4);
			n = e._R(4);
		} else {
			n = 1 + e._R(1);
			a = 1 + e._R(2);
		}
		if (t.biff >= 2 && t.biff < 8) {
			--a;
			if (--n == 0) n = 256;
		}
		for (var i = 0, s = []; i != a && (s[i] = []); ++i)
			for (var f = 0; f != n; ++f) s[i][f] = Oc(e, t.biff);
		return s;
	}
	function Nc(e, r, t) {
		var a = (e._R(1) >>> 5) & 3;
		var n = !t || t.biff >= 8 ? 4 : 2;
		var i = e._R(n);
		switch (t.biff) {
			case 2:
				e.l += 5;
				break;
			case 3:
			case 4:
				e.l += 8;
				break;
			case 5:
				e.l += 12;
				break;
		}
		return [a, 0, i];
	}
	function Lc(e, r, t) {
		if (t.biff == 5) return Mc(e, r, t);
		var a = (e._R(1) >>> 5) & 3;
		var n = e._R(2);
		var i = e._R(4);
		return [a, n, i];
	}
	function Mc(e) {
		var r = (e._R(1) >>> 5) & 3;
		var t = e._R(2, "i");
		e.l += 8;
		var a = e._R(2);
		e.l += 12;
		return [r, t, a];
	}
	function Uc(e, r, t) {
		var a = (e._R(1) >>> 5) & 3;
		e.l += t && t.biff == 2 ? 3 : 4;
		var n = e._R(t && t.biff == 2 ? 1 : 2);
		return [a, n];
	}
	function Hc(e, r, t) {
		var a = (e._R(1) >>> 5) & 3;
		var n = e._R(t && t.biff == 2 ? 1 : 2);
		return [a, n];
	}
	function Wc(e, r, t) {
		var a = (e._R(1) >>> 5) & 3;
		e.l += 4;
		if (t.biff < 8) e.l--;
		if (t.biff == 12) e.l += 2;
		return [a];
	}
	function Vc(e, r, t) {
		var a = (e[e.l++] & 96) >> 5;
		var n = e._R(2);
		var i = 4;
		if (t)
			switch (t.biff) {
				case 5:
					i = 15;
					break;
				case 12:
					i = 6;
					break;
			}
		e.l += i;
		return [a, n];
	}
	var zc = Vr;
	var Xc = Vr;
	var Gc = Vr;
	function jc(e, r, t) {
		e.l += 2;
		return [tc(e, 4, t)];
	}
	function Kc(e) {
		e.l += 6;
		return [];
	}
	var Yc = jc;
	var $c = Kc;
	var Zc = Kc;
	var Qc = jc;
	function Jc(e) {
		e.l += 2;
		return [Mn(e), e._R(2) & 1];
	}
	var qc = jc;
	var eu = Jc;
	var ru = Kc;
	var tu = jc;
	var au = jc;
	var nu = [
		"Data",
		"All",
		"Headers",
		"??",
		"?Data2",
		"??",
		"?DataHeaders",
		"??",
		"Totals",
		"??",
		"??",
		"??",
		"?DataTotals",
		"??",
		"??",
		"??",
		"?Current",
	];
	function iu(e) {
		e.l += 2;
		var r = e._R(2);
		var t = e._R(2);
		var a = e._R(4);
		var n = e._R(2);
		var i = e._R(2);
		var s = nu[(t >> 2) & 31];
		return { ixti: r, coltype: t & 3, rt: s, idx: a, c: n, C: i };
	}
	function su(e) {
		e.l += 2;
		return [e._R(4)];
	}
	function fu(e, r, t) {
		e.l += 5;
		e.l += 2;
		e.l += t.biff == 2 ? 1 : 4;
		return ["PTGSHEET"];
	}
	function lu(e, r, t) {
		e.l += t.biff == 2 ? 4 : 5;
		return ["PTGENDSHEET"];
	}
	function ou(e) {
		var r = (e._R(1) >>> 5) & 3;
		var t = e._R(2);
		return [r, t];
	}
	function cu(e) {
		var r = (e._R(1) >>> 5) & 3;
		var t = e._R(2);
		return [r, t];
	}
	function uu(e) {
		e.l += 4;
		return [0, 0];
	}
	var hu = {
		1: { n: "PtgExp", f: xc },
		2: { n: "PtgTbl", f: Gc },
		3: { n: "PtgAdd", f: $o },
		4: { n: "PtgSub", f: $o },
		5: { n: "PtgMul", f: $o },
		6: { n: "PtgDiv", f: $o },
		7: { n: "PtgPower", f: $o },
		8: { n: "PtgConcat", f: $o },
		9: { n: "PtgLt", f: $o },
		10: { n: "PtgLe", f: $o },
		11: { n: "PtgEq", f: $o },
		12: { n: "PtgGe", f: $o },
		13: { n: "PtgGt", f: $o },
		14: { n: "PtgNe", f: $o },
		15: { n: "PtgIsect", f: $o },
		16: { n: "PtgUnion", f: $o },
		17: { n: "PtgRange", f: $o },
		18: { n: "PtgUplus", f: $o },
		19: { n: "PtgUminus", f: $o },
		20: { n: "PtgPercent", f: $o },
		21: { n: "PtgParen", f: $o },
		22: { n: "PtgMissArg", f: $o },
		23: { n: "PtgStr", f: Dc },
		26: { n: "PtgSheet", f: fu },
		27: { n: "PtgEndSheet", f: lu },
		28: { n: "PtgErr", f: yc },
		29: { n: "PtgBool", f: Ac },
		30: { n: "PtgInt", f: Ic },
		31: { n: "PtgNum", f: Rc },
		32: { n: "PtgArray", f: cc },
		33: { n: "PtgFunc", f: _c },
		34: { n: "PtgFuncVar", f: Cc },
		35: { n: "PtgName", f: Nc },
		36: { n: "PtgRef", f: Ec },
		37: { n: "PtgArea", f: ic },
		38: { n: "PtgMemArea", f: Uc },
		39: { n: "PtgMemErr", f: zc },
		40: { n: "PtgMemNoMem", f: Xc },
		41: { n: "PtgMemFunc", f: Hc },
		42: { n: "PtgRefErr", f: Wc },
		43: { n: "PtgAreaErr", f: fc },
		44: { n: "PtgRefN", f: kc },
		45: { n: "PtgAreaN", f: oc },
		46: { n: "PtgMemAreaN", f: ou },
		47: { n: "PtgMemNoMemN", f: cu },
		57: { n: "PtgNameX", f: Lc },
		58: { n: "PtgRef3d", f: Sc },
		59: { n: "PtgArea3d", f: sc },
		60: { n: "PtgRefErr3d", f: Vc },
		61: { n: "PtgAreaErr3d", f: lc },
		255: {},
	};
	var du = {
		64: 32,
		96: 32,
		65: 33,
		97: 33,
		66: 34,
		98: 34,
		67: 35,
		99: 35,
		68: 36,
		100: 36,
		69: 37,
		101: 37,
		70: 38,
		102: 38,
		71: 39,
		103: 39,
		72: 40,
		104: 40,
		73: 41,
		105: 41,
		74: 42,
		106: 42,
		75: 43,
		107: 43,
		76: 44,
		108: 44,
		77: 45,
		109: 45,
		78: 46,
		110: 46,
		79: 47,
		111: 47,
		88: 34,
		120: 34,
		89: 57,
		121: 57,
		90: 58,
		122: 58,
		91: 59,
		123: 59,
		92: 60,
		124: 60,
		93: 61,
		125: 61,
	};
	(function () {
		for (var e in du) hu[e] = hu[du[e]];
	})();
	var vu = {
		1: { n: "PtgElfLel", f: Jc },
		2: { n: "PtgElfRw", f: tu },
		3: { n: "PtgElfCol", f: Yc },
		6: { n: "PtgElfRwV", f: au },
		7: { n: "PtgElfColV", f: Qc },
		10: { n: "PtgElfRadical", f: qc },
		11: { n: "PtgElfRadicalS", f: ru },
		13: { n: "PtgElfColS", f: $c },
		15: { n: "PtgElfColSV", f: Zc },
		16: { n: "PtgElfRadicalLel", f: eu },
		25: { n: "PtgList", f: iu },
		29: { n: "PtgSxName", f: su },
		255: {},
	};
	var pu = {
		0: { n: "PtgAttrNoop", f: uu },
		1: { n: "PtgAttrSemi", f: mc },
		2: { n: "PtgAttrIf", f: vc },
		4: { n: "PtgAttrChoose", f: hc },
		8: { n: "PtgAttrGoto", f: dc },
		16: { n: "PtgAttrSum", f: Tc },
		32: { n: "PtgAttrBaxcel", f: uc },
		64: { n: "PtgAttrSpace", f: gc },
		65: { n: "PtgAttrSpaceSemi", f: wc },
		128: { n: "PtgAttrIfError", f: pc },
		255: {},
	};
	pu[33] = pu[32];
	function mu(e, r, t, a) {
		if (a.biff < 8) return Vr(e, r);
		var n = e.l + r;
		var i = [];
		for (var s = 0; s !== t.length; ++s) {
			switch (t[s][0]) {
				case "PtgArray":
					t[s][1] = Pc(e, 0, a);
					i.push(t[s][1]);
					break;
				case "PtgMemArea":
					t[s][2] = Fc(e, t[s][1], a);
					i.push(t[s][2]);
					break;
				case "PtgExp":
					if (a && a.biff == 12) {
						t[s][1][1] = e._R(4);
						i.push(t[s][1]);
					}
					break;
				case "PtgList":
				case "PtgElfRadicalS":
				case "PtgElfColS":
				case "PtgElfColSV":
					throw "Unsupported " + t[s][0];
				default:
					break;
			}
		}
		r = n - e.l;
		if (r !== 0) i.push(Vr(e, r));
		return i;
	}
	function bu(e, r, t) {
		var a = e.l + r;
		var n,
			i,
			s = [];
		while (a != e.l) {
			r = a - e.l;
			i = e[e.l];
			n = hu[i];
			if (i === 24 || i === 25) n = (i === 24 ? vu : pu)[e[e.l + 1]];
			if (!n || !n.f) {
				Vr(e, r);
			} else {
				s.push([n.n, n.f(e, r, t)]);
			}
		}
		return s;
	}
	function gu(e) {
		var r = [];
		for (var t = 0; t < e.length; ++t) {
			var a = e[t],
				n = [];
			for (var i = 0; i < a.length; ++i) {
				var s = a[i];
				if (s)
					switch (s[0]) {
						case 2:
							n.push('"' + s[1].replace(/"/g, '""') + '"');
							break;
						default:
							n.push(s[1]);
					}
				else n.push("");
			}
			r.push(n.join(","));
		}
		return r.join(";");
	}
	var wu = {
		PtgAdd: "+",
		PtgConcat: "&",
		PtgDiv: "/",
		PtgEq: "=",
		PtgGe: ">=",
		PtgGt: ">",
		PtgLe: "<=",
		PtgLt: "<",
		PtgMul: "*",
		PtgNe: "<>",
		PtgPower: "^",
		PtgSub: "-",
	};
	function Eu(e, r) {
		if (!e && !(r && r.biff <= 5 && r.biff >= 2))
			throw new Error("empty sheet name");
		if (e.indexOf(" ") > -1) return "'" + e + "'";
		return e;
	}
	function ku(e, r, t) {
		if (!e) return "SH33TJSERR0";
		if (!e.XTI) return "SH33TJSERR6";
		var a = e.XTI[r];
		if (t.biff > 8 && !e.XTI[r]) return e.SheetNames[r];
		if (t.biff < 8) {
			if (r > 1e4) r -= 65536;
			if (r < 0) r = -r;
			return r == 0 ? "" : e.XTI[r - 1];
		}
		if (!a) return "SH33TJSERR1";
		var n = "";
		if (t.biff > 8)
			switch (e[a[0]][0]) {
				case 357:
					n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]];
					return a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
				case 358:
					if (t.SID != null) return e.SheetNames[t.SID];
					return "SH33TJSSAME" + e[a[0]][0];
				case 355:
				default:
					return "SH33TJSSRC" + e[a[0]][0];
			}
		switch (e[a[0]][0][0]) {
			case 1025:
				n = a[1] == -1 ? "#REF" : e.SheetNames[a[1]] || "SH33TJSERR3";
				return a[1] == a[2] ? n : n + ":" + e.SheetNames[a[2]];
			case 14849:
				return "SH33TJSERR8";
			default:
				if (!e[a[0]][0][3]) return "SH33TJSERR2";
				n = a[1] == -1 ? "#REF" : e[a[0]][0][3][a[1]] || "SH33TJSERR4";
				return a[1] == a[2] ? n : n + ":" + e[a[0]][0][3][a[2]];
		}
	}
	function Su(e, r, t) {
		return Eu(ku(e, r, t), t);
	}
	function _u(e, r, t, a, n) {
		var i = (n && n.biff) || 8;
		var s = { s: { c: 0, r: 0 }, e: { c: 0, r: 0 } };
		var f = [],
			l,
			o,
			c,
			u = 0,
			h = 0,
			d,
			v = "";
		if (!e[0] || !e[0][0]) return "";
		var p = -1,
			m = "";
		for (var b = 0, g = e[0].length; b < g; ++b) {
			var w = e[0][b];
			switch (w[0]) {
				case "PtgUminus":
					f.push("-" + f.pop());
					break;
				case "PtgUplus":
					f.push("+" + f.pop());
					break;
				case "PtgPercent":
					f.push(f.pop() + "%");
					break;
				case "PtgAdd":
				case "PtgConcat":
				case "PtgDiv":
				case "PtgEq":
				case "PtgGe":
				case "PtgGt":
				case "PtgLe":
				case "PtgLt":
				case "PtgMul":
				case "PtgNe":
				case "PtgPower":
				case "PtgSub":
					l = f.pop();
					o = f.pop();
					if (p >= 0) {
						switch (e[0][p][1][0]) {
							case 0:
								m = se(" ", e[0][p][1][1]);
								break;
							case 1:
								m = se("\r", e[0][p][1][1]);
								break;
							default:
								m = "";
								if (n.WTF)
									throw new Error(
										"Unexpected PtgAttrSpaceType " + e[0][p][1][0]
									);
						}
						o = o + m;
						p = -1;
					}
					f.push(o + wu[w[0]] + l);
					break;
				case "PtgIsect":
					l = f.pop();
					o = f.pop();
					f.push(o + " " + l);
					break;
				case "PtgUnion":
					l = f.pop();
					o = f.pop();
					f.push(o + "," + l);
					break;
				case "PtgRange":
					l = f.pop();
					o = f.pop();
					f.push(o + ":" + l);
					break;
				case "PtgAttrChoose":
					break;
				case "PtgAttrGoto":
					break;
				case "PtgAttrIf":
					break;
				case "PtgAttrIfError":
					break;
				case "PtgRef":
					c = Kr(w[1][1], s, n);
					f.push($r(c, i));
					break;
				case "PtgRefN":
					c = t ? Kr(w[1][1], t, n) : w[1][1];
					f.push($r(c, i));
					break;
				case "PtgRef3d":
					u = w[1][1];
					c = Kr(w[1][2], s, n);
					v = Su(a, u, n);
					var E = v;
					f.push(v + "!" + $r(c, i));
					break;
				case "PtgFunc":
				case "PtgFuncVar":
					var k = w[1][0],
						S = w[1][1];
					if (!k) k = 0;
					k &= 127;
					var _ = k == 0 ? [] : f.slice(-k);
					f.length -= k;
					if (S === "User") S = _.shift();
					f.push(S + "(" + _.join(",") + ")");
					break;
				case "PtgBool":
					f.push(w[1] ? "TRUE" : "FALSE");
					break;
				case "PtgInt":
					f.push(w[1]);
					break;
				case "PtgNum":
					f.push(String(w[1]));
					break;
				case "PtgStr":
					f.push('"' + w[1] + '"');
					break;
				case "PtgErr":
					f.push(w[1]);
					break;
				case "PtgAreaN":
					d = Yr(w[1][1], t ? { s: t } : s, n);
					f.push(Zr(d, n));
					break;
				case "PtgArea":
					d = Yr(w[1][1], s, n);
					f.push(Zr(d, n));
					break;
				case "PtgArea3d":
					u = w[1][1];
					d = w[1][2];
					v = Su(a, u, n);
					f.push(v + "!" + Zr(d, n));
					break;
				case "PtgAttrSum":
					f.push("SUM(" + f.pop() + ")");
					break;
				case "PtgAttrBaxcel":
				case "PtgAttrSemi":
					break;
				case "PtgName":
					h = w[1][2];
					var C = (a.names || [])[h - 1] || (a[0] || [])[h];
					var B = C ? C.Name : "SH33TJSNAME" + String(h);
					if (B in Mu) B = Mu[B];
					f.push(B);
					break;
				case "PtgNameX":
					var T = w[1][1];
					h = w[1][2];
					var x;
					if (n.biff <= 5) {
						if (T < 0) T = -T;
						if (a[T]) x = a[T][h];
					} else {
						var y = "";
						if (((a[T] || [])[0] || [])[0] == 14849) {
						} else if (((a[T] || [])[0] || [])[0] == 1025) {
							if (a[T][h] && a[T][h].itab > 0) {
								y = a.SheetNames[a[T][h].itab - 1] + "!";
							}
						} else y = a.SheetNames[h - 1] + "!";
						if (a[T] && a[T][h]) y += a[T][h].Name;
						else if (a[0] && a[0][h]) y += a[0][h].Name;
						else y += "SH33TJSERRX";
						f.push(y);
						break;
					}
					if (!x) x = { Name: "SH33TJSERRY" };
					f.push(x.Name);
					break;
				case "PtgParen":
					var I = "(",
						A = ")";
					if (p >= 0) {
						m = "";
						switch (e[0][p][1][0]) {
							case 2:
								I = se(" ", e[0][p][1][1]) + I;
								break;
							case 3:
								I = se("\r", e[0][p][1][1]) + I;
								break;
							case 4:
								A = se(" ", e[0][p][1][1]) + A;
								break;
							case 5:
								A = se("\r", e[0][p][1][1]) + A;
								break;
							default:
								if (n.WTF)
									throw new Error(
										"Unexpected PtgAttrSpaceType " + e[0][p][1][0]
									);
						}
						p = -1;
					}
					f.push(I + f.pop() + A);
					break;
				case "PtgRefErr":
					f.push("#REF!");
					break;
				case "PtgRefErr3d":
					f.push("#REF!");
					break;
				case "PtgExp":
					c = { c: w[1][1], r: w[1][0] };
					var R = { c: t.c, r: t.r };
					if (a.sharedf[ot(c)]) {
						var D = a.sharedf[ot(c)];
						f.push(_u(D, s, R, a, n));
					} else {
						var O = false;
						for (l = 0; l != a.arrayf.length; ++l) {
							o = a.arrayf[l];
							if (c.c < o[0].s.c || c.c > o[0].e.c) continue;
							if (c.r < o[0].s.r || c.r > o[0].e.r) continue;
							f.push(_u(o[1], s, R, a, n));
							O = true;
							break;
						}
						if (!O) f.push(w[1]);
					}
					break;
				case "PtgArray":
					f.push("{" + gu(w[1]) + "}");
					break;
				case "PtgMemArea":
					break;
				case "PtgAttrSpace":
				case "PtgAttrSpaceSemi":
					p = b;
					break;
				case "PtgTbl":
					break;
				case "PtgMemErr":
					break;
				case "PtgMissArg":
					f.push("");
					break;
				case "PtgAreaErr":
					f.push("#REF!");
					break;
				case "PtgAreaErr3d":
					f.push("#REF!");
					break;
				case "PtgList":
					f.push("Table" + w[1].idx + "[#" + w[1].rt + "]");
					break;
				case "PtgMemAreaN":
				case "PtgMemNoMemN":
				case "PtgAttrNoop":
				case "PtgSheet":
				case "PtgEndSheet":
					break;
				case "PtgMemFunc":
					break;
				case "PtgMemNoMem":
					break;
				case "PtgElfCol":
				case "PtgElfColS":
				case "PtgElfColSV":
				case "PtgElfColV":
				case "PtgElfLel":
				case "PtgElfRadical":
				case "PtgElfRadicalLel":
				case "PtgElfRadicalS":
				case "PtgElfRw":
				case "PtgElfRwV":
					throw new Error("Unsupported ELFs");
				case "PtgSxName":
					throw new Error("Unrecognized Formula Token: " + String(w));
				default:
					throw new Error("Unrecognized Formula Token: " + String(w));
			}
			var F = ["PtgAttrSpace", "PtgAttrSpaceSemi", "PtgAttrGoto"];
			if (n.biff != 3)
				if (p >= 0 && F.indexOf(e[0][b][0]) == -1) {
					w = e[0][p];
					var P = true;
					switch (w[1][0]) {
						case 4:
							P = false;
						case 0:
							m = se(" ", w[1][1]);
							break;
						case 5:
							P = false;
						case 1:
							m = se("\r", w[1][1]);
							break;
						default:
							m = "";
							if (n.WTF)
								throw new Error("Unexpected PtgAttrSpaceType " + w[1][0]);
					}
					f.push((P ? m : "") + f.pop() + (P ? "" : m));
					p = -1;
				}
		}
		if (f.length > 1 && n.WTF) throw new Error("bad formula stack");
		return f[0];
	}
	function Cu(e, r, t) {
		var a = e.l + r,
			n = t.biff == 2 ? 1 : 2;
		var i,
			s = e._R(n);
		if (s == 65535) return [[], Vr(e, r - 2)];
		var f = bu(e, s, t);
		if (r !== s + n) i = mu(e, r - s - n, f, t);
		e.l = a;
		return [f, i];
	}
	function Bu(e, r, t) {
		var a = e.l + r,
			n = t.biff == 2 ? 1 : 2;
		var i,
			s = e._R(n);
		if (s == 65535) return [[], Vr(e, r - 2)];
		var f = bu(e, s, t);
		if (r !== s + n) i = mu(e, r - s - n, f, t);
		e.l = a;
		return [f, i];
	}
	function Tu(e, r, t, a) {
		var n = e.l + r;
		var i = bu(e, a, t);
		var s;
		if (n !== e.l) s = mu(e, n - e.l, i, t);
		return [i, s];
	}
	function xu(e, r, t) {
		var a = e.l + r;
		var n,
			i = e._R(2);
		var s = bu(e, i, t);
		if (i == 65535) return [[], Vr(e, r - 2)];
		if (r !== i + 2) n = mu(e, a - i - 2, s, t);
		return [s, n];
	}
	function yu(e) {
		var r;
		if (Ar(e, e.l + 6) !== 65535) return [Vt(e), "n"];
		switch (e[e.l]) {
			case 0:
				e.l += 8;
				return ["String", "s"];
			case 1:
				r = e[e.l + 2] === 1;
				e.l += 8;
				return [r, "b"];
			case 2:
				r = e[e.l + 2];
				e.l += 8;
				return [r, "e"];
			case 3:
				e.l += 8;
				return ["", "s"];
		}
		return [];
	}
	function Iu(e, r, t) {
		var a = e.l + r;
		var n = ni(e, 6);
		if (t.biff == 2) ++e.l;
		var i = yu(e, 8);
		var s = e._R(1);
		if (t.biff != 2) {
			e._R(1);
			if (t.biff >= 5) {
				e._R(4);
			}
		}
		var f = Bu(e, a - e.l, t);
		return { cell: n, val: i[0], formula: f, shared: (s >> 3) & 1, tt: i[1] };
	}
	function Au(e, r, t) {
		var a = e._R(4);
		var n = bu(e, a, t);
		var i = e._R(4);
		var s = i > 0 ? mu(e, i, n, t) : null;
		return [n, s];
	}
	var Ru = Au;
	var Du = Au;
	var Ou = Au;
	var Fu = Au;
	var Pu = {
		0: "BEEP",
		1: "OPEN",
		2: "OPEN.LINKS",
		3: "CLOSE.ALL",
		4: "SAVE",
		5: "SAVE.AS",
		6: "FILE.DELETE",
		7: "PAGE.SETUP",
		8: "PRINT",
		9: "PRINTER.SETUP",
		10: "QUIT",
		11: "NEW.WINDOW",
		12: "ARRANGE.ALL",
		13: "WINDOW.SIZE",
		14: "WINDOW.MOVE",
		15: "FULL",
		16: "CLOSE",
		17: "RUN",
		22: "SET.PRINT.AREA",
		23: "SET.PRINT.TITLES",
		24: "SET.PAGE.BREAK",
		25: "REMOVE.PAGE.BREAK",
		26: "FONT",
		27: "DISPLAY",
		28: "PROTECT.DOCUMENT",
		29: "PRECISION",
		30: "A1.R1C1",
		31: "CALCULATE.NOW",
		32: "CALCULATION",
		34: "DATA.FIND",
		35: "EXTRACT",
		36: "DATA.DELETE",
		37: "SET.DATABASE",
		38: "SET.CRITERIA",
		39: "SORT",
		40: "DATA.SERIES",
		41: "TABLE",
		42: "FORMAT.NUMBER",
		43: "ALIGNMENT",
		44: "STYLE",
		45: "BORDER",
		46: "CELL.PROTECTION",
		47: "COLUMN.WIDTH",
		48: "UNDO",
		49: "CUT",
		50: "COPY",
		51: "PASTE",
		52: "CLEAR",
		53: "PASTE.SPECIAL",
		54: "EDIT.DELETE",
		55: "INSERT",
		56: "FILL.RIGHT",
		57: "FILL.DOWN",
		61: "DEFINE.NAME",
		62: "CREATE.NAMES",
		63: "FORMULA.GOTO",
		64: "FORMULA.FIND",
		65: "SELECT.LAST.CELL",
		66: "SHOW.ACTIVE.CELL",
		67: "GALLERY.AREA",
		68: "GALLERY.BAR",
		69: "GALLERY.COLUMN",
		70: "GALLERY.LINE",
		71: "GALLERY.PIE",
		72: "GALLERY.SCATTER",
		73: "COMBINATION",
		74: "PREFERRED",
		75: "ADD.OVERLAY",
		76: "GRIDLINES",
		77: "SET.PREFERRED",
		78: "AXES",
		79: "LEGEND",
		80: "ATTACH.TEXT",
		81: "ADD.ARROW",
		82: "SELECT.CHART",
		83: "SELECT.PLOT.AREA",
		84: "PATTERNS",
		85: "MAIN.CHART",
		86: "OVERLAY",
		87: "SCALE",
		88: "FORMAT.LEGEND",
		89: "FORMAT.TEXT",
		90: "EDIT.REPEAT",
		91: "PARSE",
		92: "JUSTIFY",
		93: "HIDE",
		94: "UNHIDE",
		95: "WORKSPACE",
		96: "FORMULA",
		97: "FORMULA.FILL",
		98: "FORMULA.ARRAY",
		99: "DATA.FIND.NEXT",
		100: "DATA.FIND.PREV",
		101: "FORMULA.FIND.NEXT",
		102: "FORMULA.FIND.PREV",
		103: "ACTIVATE",
		104: "ACTIVATE.NEXT",
		105: "ACTIVATE.PREV",
		106: "UNLOCKED.NEXT",
		107: "UNLOCKED.PREV",
		108: "COPY.PICTURE",
		109: "SELECT",
		110: "DELETE.NAME",
		111: "DELETE.FORMAT",
		112: "VLINE",
		113: "HLINE",
		114: "VPAGE",
		115: "HPAGE",
		116: "VSCROLL",
		117: "HSCROLL",
		118: "ALERT",
		119: "NEW",
		120: "CANCEL.COPY",
		121: "SHOW.CLIPBOARD",
		122: "MESSAGE",
		124: "PASTE.LINK",
		125: "APP.ACTIVATE",
		126: "DELETE.ARROW",
		127: "ROW.HEIGHT",
		128: "FORMAT.MOVE",
		129: "FORMAT.SIZE",
		130: "FORMULA.REPLACE",
		131: "SEND.KEYS",
		132: "SELECT.SPECIAL",
		133: "APPLY.NAMES",
		134: "REPLACE.FONT",
		135: "FREEZE.PANES",
		136: "SHOW.INFO",
		137: "SPLIT",
		138: "ON.WINDOW",
		139: "ON.DATA",
		140: "DISABLE.INPUT",
		142: "OUTLINE",
		143: "LIST.NAMES",
		144: "FILE.CLOSE",
		145: "SAVE.WORKBOOK",
		146: "DATA.FORM",
		147: "COPY.CHART",
		148: "ON.TIME",
		149: "WAIT",
		150: "FORMAT.FONT",
		151: "FILL.UP",
		152: "FILL.LEFT",
		153: "DELETE.OVERLAY",
		155: "SHORT.MENUS",
		159: "SET.UPDATE.STATUS",
		161: "COLOR.PALETTE",
		162: "DELETE.STYLE",
		163: "WINDOW.RESTORE",
		164: "WINDOW.MAXIMIZE",
		166: "CHANGE.LINK",
		167: "CALCULATE.DOCUMENT",
		168: "ON.KEY",
		169: "APP.RESTORE",
		170: "APP.MOVE",
		171: "APP.SIZE",
		172: "APP.MINIMIZE",
		173: "APP.MAXIMIZE",
		174: "BRING.TO.FRONT",
		175: "SEND.TO.BACK",
		185: "MAIN.CHART.TYPE",
		186: "OVERLAY.CHART.TYPE",
		187: "SELECT.END",
		188: "OPEN.MAIL",
		189: "SEND.MAIL",
		190: "STANDARD.FONT",
		191: "CONSOLIDATE",
		192: "SORT.SPECIAL",
		193: "GALLERY.3D.AREA",
		194: "GALLERY.3D.COLUMN",
		195: "GALLERY.3D.LINE",
		196: "GALLERY.3D.PIE",
		197: "VIEW.3D",
		198: "GOAL.SEEK",
		199: "WORKGROUP",
		200: "FILL.GROUP",
		201: "UPDATE.LINK",
		202: "PROMOTE",
		203: "DEMOTE",
		204: "SHOW.DETAIL",
		206: "UNGROUP",
		207: "OBJECT.PROPERTIES",
		208: "SAVE.NEW.OBJECT",
		209: "SHARE",
		210: "SHARE.NAME",
		211: "DUPLICATE",
		212: "APPLY.STYLE",
		213: "ASSIGN.TO.OBJECT",
		214: "OBJECT.PROTECTION",
		215: "HIDE.OBJECT",
		216: "SET.EXTRACT",
		217: "CREATE.PUBLISHER",
		218: "SUBSCRIBE.TO",
		219: "ATTRIBUTES",
		220: "SHOW.TOOLBAR",
		222: "PRINT.PREVIEW",
		223: "EDIT.COLOR",
		224: "SHOW.LEVELS",
		225: "FORMAT.MAIN",
		226: "FORMAT.OVERLAY",
		227: "ON.RECALC",
		228: "EDIT.SERIES",
		229: "DEFINE.STYLE",
		240: "LINE.PRINT",
		243: "ENTER.DATA",
		249: "GALLERY.RADAR",
		250: "MERGE.STYLES",
		251: "EDITION.OPTIONS",
		252: "PASTE.PICTURE",
		253: "PASTE.PICTURE.LINK",
		254: "SPELLING",
		256: "ZOOM",
		259: "INSERT.OBJECT",
		260: "WINDOW.MINIMIZE",
		265: "SOUND.NOTE",
		266: "SOUND.PLAY",
		267: "FORMAT.SHAPE",
		268: "EXTEND.POLYGON",
		269: "FORMAT.AUTO",
		272: "GALLERY.3D.BAR",
		273: "GALLERY.3D.SURFACE",
		274: "FILL.AUTO",
		276: "CUSTOMIZE.TOOLBAR",
		277: "ADD.TOOL",
		278: "EDIT.OBJECT",
		279: "ON.DOUBLECLICK",
		280: "ON.ENTRY",
		281: "WORKBOOK.ADD",
		282: "WORKBOOK.MOVE",
		283: "WORKBOOK.COPY",
		284: "WORKBOOK.OPTIONS",
		285: "SAVE.WORKSPACE",
		288: "CHART.WIZARD",
		289: "DELETE.TOOL",
		290: "MOVE.TOOL",
		291: "WORKBOOK.SELECT",
		292: "WORKBOOK.ACTIVATE",
		293: "ASSIGN.TO.TOOL",
		295: "COPY.TOOL",
		296: "RESET.TOOL",
		297: "CONSTRAIN.NUMERIC",
		298: "PASTE.TOOL",
		302: "WORKBOOK.NEW",
		305: "SCENARIO.CELLS",
		306: "SCENARIO.DELETE",
		307: "SCENARIO.ADD",
		308: "SCENARIO.EDIT",
		309: "SCENARIO.SHOW",
		310: "SCENARIO.SHOW.NEXT",
		311: "SCENARIO.SUMMARY",
		312: "PIVOT.TABLE.WIZARD",
		313: "PIVOT.FIELD.PROPERTIES",
		314: "PIVOT.FIELD",
		315: "PIVOT.ITEM",
		316: "PIVOT.ADD.FIELDS",
		318: "OPTIONS.CALCULATION",
		319: "OPTIONS.EDIT",
		320: "OPTIONS.VIEW",
		321: "ADDIN.MANAGER",
		322: "MENU.EDITOR",
		323: "ATTACH.TOOLBARS",
		324: "VBAActivate",
		325: "OPTIONS.CHART",
		328: "VBA.INSERT.FILE",
		330: "VBA.PROCEDURE.DEFINITION",
		336: "ROUTING.SLIP",
		338: "ROUTE.DOCUMENT",
		339: "MAIL.LOGON",
		342: "INSERT.PICTURE",
		343: "EDIT.TOOL",
		344: "GALLERY.DOUGHNUT",
		350: "CHART.TREND",
		352: "PIVOT.ITEM.PROPERTIES",
		354: "WORKBOOK.INSERT",
		355: "OPTIONS.TRANSITION",
		356: "OPTIONS.GENERAL",
		370: "FILTER.ADVANCED",
		373: "MAIL.ADD.MAILER",
		374: "MAIL.DELETE.MAILER",
		375: "MAIL.REPLY",
		376: "MAIL.REPLY.ALL",
		377: "MAIL.FORWARD",
		378: "MAIL.NEXT.LETTER",
		379: "DATA.LABEL",
		380: "INSERT.TITLE",
		381: "FONT.PROPERTIES",
		382: "MACRO.OPTIONS",
		383: "WORKBOOK.HIDE",
		384: "WORKBOOK.UNHIDE",
		385: "WORKBOOK.DELETE",
		386: "WORKBOOK.NAME",
		388: "GALLERY.CUSTOM",
		390: "ADD.CHART.AUTOFORMAT",
		391: "DELETE.CHART.AUTOFORMAT",
		392: "CHART.ADD.DATA",
		393: "AUTO.OUTLINE",
		394: "TAB.ORDER",
		395: "SHOW.DIALOG",
		396: "SELECT.ALL",
		397: "UNGROUP.SHEETS",
		398: "SUBTOTAL.CREATE",
		399: "SUBTOTAL.REMOVE",
		400: "RENAME.OBJECT",
		412: "WORKBOOK.SCROLL",
		413: "WORKBOOK.NEXT",
		414: "WORKBOOK.PREV",
		415: "WORKBOOK.TAB.SPLIT",
		416: "FULL.SCREEN",
		417: "WORKBOOK.PROTECT",
		420: "SCROLLBAR.PROPERTIES",
		421: "PIVOT.SHOW.PAGES",
		422: "TEXT.TO.COLUMNS",
		423: "FORMAT.CHARTTYPE",
		424: "LINK.FORMAT",
		425: "TRACER.DISPLAY",
		430: "TRACER.NAVIGATE",
		431: "TRACER.CLEAR",
		432: "TRACER.ERROR",
		433: "PIVOT.FIELD.GROUP",
		434: "PIVOT.FIELD.UNGROUP",
		435: "CHECKBOX.PROPERTIES",
		436: "LABEL.PROPERTIES",
		437: "LISTBOX.PROPERTIES",
		438: "EDITBOX.PROPERTIES",
		439: "PIVOT.REFRESH",
		440: "LINK.COMBO",
		441: "OPEN.TEXT",
		442: "HIDE.DIALOG",
		443: "SET.DIALOG.FOCUS",
		444: "ENABLE.OBJECT",
		445: "PUSHBUTTON.PROPERTIES",
		446: "SET.DIALOG.DEFAULT",
		447: "FILTER",
		448: "FILTER.SHOW.ALL",
		449: "CLEAR.OUTLINE",
		450: "FUNCTION.WIZARD",
		451: "ADD.LIST.ITEM",
		452: "SET.LIST.ITEM",
		453: "REMOVE.LIST.ITEM",
		454: "SELECT.LIST.ITEM",
		455: "SET.CONTROL.VALUE",
		456: "SAVE.COPY.AS",
		458: "OPTIONS.LISTS.ADD",
		459: "OPTIONS.LISTS.DELETE",
		460: "SERIES.AXES",
		461: "SERIES.X",
		462: "SERIES.Y",
		463: "ERRORBAR.X",
		464: "ERRORBAR.Y",
		465: "FORMAT.CHART",
		466: "SERIES.ORDER",
		467: "MAIL.LOGOFF",
		468: "CLEAR.ROUTING.SLIP",
		469: "APP.ACTIVATE.MICROSOFT",
		470: "MAIL.EDIT.MAILER",
		471: "ON.SHEET",
		472: "STANDARD.WIDTH",
		473: "SCENARIO.MERGE",
		474: "SUMMARY.INFO",
		475: "FIND.FILE",
		476: "ACTIVE.CELL.FONT",
		477: "ENABLE.TIPWIZARD",
		478: "VBA.MAKE.ADDIN",
		480: "INSERTDATATABLE",
		481: "WORKGROUP.OPTIONS",
		482: "MAIL.SEND.MAILER",
		485: "AUTOCORRECT",
		489: "POST.DOCUMENT",
		491: "PICKLIST",
		493: "VIEW.SHOW",
		494: "VIEW.DEFINE",
		495: "VIEW.DELETE",
		509: "SHEET.BACKGROUND",
		510: "INSERT.MAP.OBJECT",
		511: "OPTIONS.MENONO",
		517: "MSOCHECKS",
		518: "NORMAL",
		519: "LAYOUT",
		520: "RM.PRINT.AREA",
		521: "CLEAR.PRINT.AREA",
		522: "ADD.PRINT.AREA",
		523: "MOVE.BRK",
		545: "HIDECURR.NOTE",
		546: "HIDEALL.NOTES",
		547: "DELETE.NOTE",
		548: "TRAVERSE.NOTES",
		549: "ACTIVATE.NOTES",
		620: "PROTECT.REVISIONS",
		621: "UNPROTECT.REVISIONS",
		647: "OPTIONS.ME",
		653: "WEB.PUBLISH",
		667: "NEWWEBQUERY",
		673: "PIVOT.TABLE.CHART",
		753: "OPTIONS.SAVE",
		755: "OPTIONS.SPELL",
		808: "HIDEALL.INKANNOTS",
	};
	var Nu = {
		0: "COUNT",
		1: "IF",
		2: "ISNA",
		3: "ISERROR",
		4: "SUM",
		5: "AVERAGE",
		6: "MIN",
		7: "MAX",
		8: "ROW",
		9: "COLUMN",
		10: "NA",
		11: "NPV",
		12: "STDEV",
		13: "DOLLAR",
		14: "FIXED",
		15: "SIN",
		16: "COS",
		17: "TAN",
		18: "ATAN",
		19: "PI",
		20: "SQRT",
		21: "EXP",
		22: "LN",
		23: "LOG10",
		24: "ABS",
		25: "INT",
		26: "SIGN",
		27: "ROUND",
		28: "LOOKUP",
		29: "INDEX",
		30: "REPT",
		31: "MID",
		32: "LEN",
		33: "VALUE",
		34: "TRUE",
		35: "FALSE",
		36: "AND",
		37: "OR",
		38: "NOT",
		39: "MOD",
		40: "DCOUNT",
		41: "DSUM",
		42: "DAVERAGE",
		43: "DMIN",
		44: "DMAX",
		45: "DSTDEV",
		46: "VAR",
		47: "DVAR",
		48: "TEXT",
		49: "LINEST",
		50: "TREND",
		51: "LOGEST",
		52: "GROWTH",
		53: "GOTO",
		54: "HALT",
		55: "RETURN",
		56: "PV",
		57: "FV",
		58: "NPER",
		59: "PMT",
		60: "RATE",
		61: "MIRR",
		62: "IRR",
		63: "RAND",
		64: "MATCH",
		65: "DATE",
		66: "TIME",
		67: "DAY",
		68: "MONTH",
		69: "YEAR",
		70: "WEEKDAY",
		71: "HOUR",
		72: "MINUTE",
		73: "SECOND",
		74: "NOW",
		75: "AREAS",
		76: "ROWS",
		77: "COLUMNS",
		78: "OFFSET",
		79: "ABSREF",
		80: "RELREF",
		81: "ARGUMENT",
		82: "SEARCH",
		83: "TRANSPOSE",
		84: "ERROR",
		85: "STEP",
		86: "TYPE",
		87: "ECHO",
		88: "SET.NAME",
		89: "CALLER",
		90: "DEREF",
		91: "WINDOWS",
		92: "SERIES",
		93: "DOCUMENTS",
		94: "ACTIVE.CELL",
		95: "SELECTION",
		96: "RESULT",
		97: "ATAN2",
		98: "ASIN",
		99: "ACOS",
		100: "CHOOSE",
		101: "HLOOKUP",
		102: "VLOOKUP",
		103: "LINKS",
		104: "INPUT",
		105: "ISREF",
		106: "GET.FORMULA",
		107: "GET.NAME",
		108: "SET.VALUE",
		109: "LOG",
		110: "EXEC",
		111: "CHAR",
		112: "LOWER",
		113: "UPPER",
		114: "PROPER",
		115: "LEFT",
		116: "RIGHT",
		117: "EXACT",
		118: "TRIM",
		119: "REPLACE",
		120: "SUBSTITUTE",
		121: "CODE",
		122: "NAMES",
		123: "DIRECTORY",
		124: "FIND",
		125: "CELL",
		126: "ISERR",
		127: "ISTEXT",
		128: "ISNUMBER",
		129: "ISBLANK",
		130: "T",
		131: "N",
		132: "FOPEN",
		133: "FCLOSE",
		134: "FSIZE",
		135: "FREADLN",
		136: "FREAD",
		137: "FWRITELN",
		138: "FWRITE",
		139: "FPOS",
		140: "DATEVALUE",
		141: "TIMEVALUE",
		142: "SLN",
		143: "SYD",
		144: "DDB",
		145: "GET.DEF",
		146: "REFTEXT",
		147: "TEXTREF",
		148: "INDIRECT",
		149: "REGISTER",
		150: "CALL",
		151: "ADD.BAR",
		152: "ADD.MENU",
		153: "ADD.COMMAND",
		154: "ENABLE.COMMAND",
		155: "CHECK.COMMAND",
		156: "RENAME.COMMAND",
		157: "SHOW.BAR",
		158: "DELETE.MENU",
		159: "DELETE.COMMAND",
		160: "GET.CHART.ITEM",
		161: "DIALOG.BOX",
		162: "CLEAN",
		163: "MDETERM",
		164: "MINVERSE",
		165: "MMULT",
		166: "FILES",
		167: "IPMT",
		168: "PPMT",
		169: "COUNTA",
		170: "CANCEL.KEY",
		171: "FOR",
		172: "WHILE",
		173: "BREAK",
		174: "NEXT",
		175: "INITIATE",
		176: "REQUEST",
		177: "POKE",
		178: "EXECUTE",
		179: "TERMINATE",
		180: "RESTART",
		181: "HELP",
		182: "GET.BAR",
		183: "PRODUCT",
		184: "FACT",
		185: "GET.CELL",
		186: "GET.WORKSPACE",
		187: "GET.WINDOW",
		188: "GET.DOCUMENT",
		189: "DPRODUCT",
		190: "ISNONTEXT",
		191: "GET.NOTE",
		192: "NOTE",
		193: "STDEVP",
		194: "VARP",
		195: "DSTDEVP",
		196: "DVARP",
		197: "TRUNC",
		198: "ISLOGICAL",
		199: "DCOUNTA",
		200: "DELETE.BAR",
		201: "UNREGISTER",
		204: "USDOLLAR",
		205: "FINDB",
		206: "SEARCHB",
		207: "REPLACEB",
		208: "LEFTB",
		209: "RIGHTB",
		210: "MIDB",
		211: "LENB",
		212: "ROUNDUP",
		213: "ROUNDDOWN",
		214: "ASC",
		215: "DBCS",
		216: "RANK",
		219: "ADDRESS",
		220: "DAYS360",
		221: "TODAY",
		222: "VDB",
		223: "ELSE",
		224: "ELSE.IF",
		225: "END.IF",
		226: "FOR.CELL",
		227: "MEDIAN",
		228: "SUMPRODUCT",
		229: "SINH",
		230: "COSH",
		231: "TANH",
		232: "ASINH",
		233: "ACOSH",
		234: "ATANH",
		235: "DGET",
		236: "CREATE.OBJECT",
		237: "VOLATILE",
		238: "LAST.ERROR",
		239: "CUSTOM.UNDO",
		240: "CUSTOM.REPEAT",
		241: "FORMULA.CONVERT",
		242: "GET.LINK.INFO",
		243: "TEXT.BOX",
		244: "INFO",
		245: "GROUP",
		246: "GET.OBJECT",
		247: "DB",
		248: "PAUSE",
		251: "RESUME",
		252: "FREQUENCY",
		253: "ADD.TOOLBAR",
		254: "DELETE.TOOLBAR",
		255: "User",
		256: "RESET.TOOLBAR",
		257: "EVALUATE",
		258: "GET.TOOLBAR",
		259: "GET.TOOL",
		260: "SPELLING.CHECK",
		261: "ERROR.TYPE",
		262: "APP.TITLE",
		263: "WINDOW.TITLE",
		264: "SAVE.TOOLBAR",
		265: "ENABLE.TOOL",
		266: "PRESS.TOOL",
		267: "REGISTER.ID",
		268: "GET.WORKBOOK",
		269: "AVEDEV",
		270: "BETADIST",
		271: "GAMMALN",
		272: "BETAINV",
		273: "BINOMDIST",
		274: "CHIDIST",
		275: "CHIINV",
		276: "COMBIN",
		277: "CONFIDENCE",
		278: "CRITBINOM",
		279: "EVEN",
		280: "EXPONDIST",
		281: "FDIST",
		282: "FINV",
		283: "FISHER",
		284: "FISHERINV",
		285: "FLOOR",
		286: "GAMMADIST",
		287: "GAMMAINV",
		288: "CEILING",
		289: "HYPGEOMDIST",
		290: "LOGNORMDIST",
		291: "LOGINV",
		292: "NEGBINOMDIST",
		293: "NORMDIST",
		294: "NORMSDIST",
		295: "NORMINV",
		296: "NORMSINV",
		297: "STANDARDIZE",
		298: "ODD",
		299: "PERMUT",
		300: "POISSON",
		301: "TDIST",
		302: "WEIBULL",
		303: "SUMXMY2",
		304: "SUMX2MY2",
		305: "SUMX2PY2",
		306: "CHITEST",
		307: "CORREL",
		308: "COVAR",
		309: "FORECAST",
		310: "FTEST",
		311: "INTERCEPT",
		312: "PEARSON",
		313: "RSQ",
		314: "STEYX",
		315: "SLOPE",
		316: "TTEST",
		317: "PROB",
		318: "DEVSQ",
		319: "GEOMEAN",
		320: "HARMEAN",
		321: "SUMSQ",
		322: "KURT",
		323: "SKEW",
		324: "ZTEST",
		325: "LARGE",
		326: "SMALL",
		327: "QUARTILE",
		328: "PERCENTILE",
		329: "PERCENTRANK",
		330: "MODE",
		331: "TRIMMEAN",
		332: "TINV",
		334: "MOVIE.COMMAND",
		335: "GET.MOVIE",
		336: "CONCATENATE",
		337: "POWER",
		338: "PIVOT.ADD.DATA",
		339: "GET.PIVOT.TABLE",
		340: "GET.PIVOT.FIELD",
		341: "GET.PIVOT.ITEM",
		342: "RADIANS",
		343: "DEGREES",
		344: "SUBTOTAL",
		345: "SUMIF",
		346: "COUNTIF",
		347: "COUNTBLANK",
		348: "SCENARIO.GET",
		349: "OPTIONS.LISTS.GET",
		350: "ISPMT",
		351: "DATEDIF",
		352: "DATESTRING",
		353: "NUMBERSTRING",
		354: "ROMAN",
		355: "OPEN.DIALOG",
		356: "SAVE.DIALOG",
		357: "VIEW.GET",
		358: "GETPIVOTDATA",
		359: "HYPERLINK",
		360: "PHONETIC",
		361: "AVERAGEA",
		362: "MAXA",
		363: "MINA",
		364: "STDEVPA",
		365: "VARPA",
		366: "STDEVA",
		367: "VARA",
		368: "BAHTTEXT",
		369: "THAIDAYOFWEEK",
		370: "THAIDIGIT",
		371: "THAIMONTHOFYEAR",
		372: "THAINUMSOUND",
		373: "THAINUMSTRING",
		374: "THAISTRINGLENGTH",
		375: "ISTHAIDIGIT",
		376: "ROUNDBAHTDOWN",
		377: "ROUNDBAHTUP",
		378: "THAIYEAR",
		379: "RTD",
		380: "CUBEVALUE",
		381: "CUBEMEMBER",
		382: "CUBEMEMBERPROPERTY",
		383: "CUBERANKEDMEMBER",
		384: "HEX2BIN",
		385: "HEX2DEC",
		386: "HEX2OCT",
		387: "DEC2BIN",
		388: "DEC2HEX",
		389: "DEC2OCT",
		390: "OCT2BIN",
		391: "OCT2HEX",
		392: "OCT2DEC",
		393: "BIN2DEC",
		394: "BIN2OCT",
		395: "BIN2HEX",
		396: "IMSUB",
		397: "IMDIV",
		398: "IMPOWER",
		399: "IMABS",
		400: "IMSQRT",
		401: "IMLN",
		402: "IMLOG2",
		403: "IMLOG10",
		404: "IMSIN",
		405: "IMCOS",
		406: "IMEXP",
		407: "IMARGUMENT",
		408: "IMCONJUGATE",
		409: "IMAGINARY",
		410: "IMREAL",
		411: "COMPLEX",
		412: "IMSUM",
		413: "IMPRODUCT",
		414: "SERIESSUM",
		415: "FACTDOUBLE",
		416: "SQRTPI",
		417: "QUOTIENT",
		418: "DELTA",
		419: "GESTEP",
		420: "ISEVEN",
		421: "ISODD",
		422: "MROUND",
		423: "ERF",
		424: "ERFC",
		425: "BESSELJ",
		426: "BESSELK",
		427: "BESSELY",
		428: "BESSELI",
		429: "XIRR",
		430: "XNPV",
		431: "PRICEMAT",
		432: "YIELDMAT",
		433: "INTRATE",
		434: "RECEIVED",
		435: "DISC",
		436: "PRICEDISC",
		437: "YIELDDISC",
		438: "TBILLEQ",
		439: "TBILLPRICE",
		440: "TBILLYIELD",
		441: "PRICE",
		442: "YIELD",
		443: "DOLLARDE",
		444: "DOLLARFR",
		445: "NOMINAL",
		446: "EFFECT",
		447: "CUMPRINC",
		448: "CUMIPMT",
		449: "EDATE",
		450: "EOMONTH",
		451: "YEARFRAC",
		452: "COUPDAYBS",
		453: "COUPDAYS",
		454: "COUPDAYSNC",
		455: "COUPNCD",
		456: "COUPNUM",
		457: "COUPPCD",
		458: "DURATION",
		459: "MDURATION",
		460: "ODDLPRICE",
		461: "ODDLYIELD",
		462: "ODDFPRICE",
		463: "ODDFYIELD",
		464: "RANDBETWEEN",
		465: "WEEKNUM",
		466: "AMORDEGRC",
		467: "AMORLINC",
		468: "CONVERT",
		724: "SHEETJS",
		469: "ACCRINT",
		470: "ACCRINTM",
		471: "WORKDAY",
		472: "NETWORKDAYS",
		473: "GCD",
		474: "MULTINOMIAL",
		475: "LCM",
		476: "FVSCHEDULE",
		477: "CUBEKPIMEMBER",
		478: "CUBESET",
		479: "CUBESETCOUNT",
		480: "IFERROR",
		481: "COUNTIFS",
		482: "SUMIFS",
		483: "AVERAGEIF",
		484: "AVERAGEIFS",
	};
	var Lu = {
		2: 1,
		3: 1,
		10: 0,
		15: 1,
		16: 1,
		17: 1,
		18: 1,
		19: 0,
		20: 1,
		21: 1,
		22: 1,
		23: 1,
		24: 1,
		25: 1,
		26: 1,
		27: 2,
		30: 2,
		31: 3,
		32: 1,
		33: 1,
		34: 0,
		35: 0,
		38: 1,
		39: 2,
		40: 3,
		41: 3,
		42: 3,
		43: 3,
		44: 3,
		45: 3,
		47: 3,
		48: 2,
		53: 1,
		61: 3,
		63: 0,
		65: 3,
		66: 3,
		67: 1,
		68: 1,
		69: 1,
		70: 1,
		71: 1,
		72: 1,
		73: 1,
		74: 0,
		75: 1,
		76: 1,
		77: 1,
		79: 2,
		80: 2,
		83: 1,
		85: 0,
		86: 1,
		89: 0,
		90: 1,
		94: 0,
		95: 0,
		97: 2,
		98: 1,
		99: 1,
		101: 3,
		102: 3,
		105: 1,
		106: 1,
		108: 2,
		111: 1,
		112: 1,
		113: 1,
		114: 1,
		117: 2,
		118: 1,
		119: 4,
		121: 1,
		126: 1,
		127: 1,
		128: 1,
		129: 1,
		130: 1,
		131: 1,
		133: 1,
		134: 1,
		135: 1,
		136: 2,
		137: 2,
		138: 2,
		140: 1,
		141: 1,
		142: 3,
		143: 4,
		144: 4,
		161: 1,
		162: 1,
		163: 1,
		164: 1,
		165: 2,
		172: 1,
		175: 2,
		176: 2,
		177: 3,
		178: 2,
		179: 1,
		184: 1,
		186: 1,
		189: 3,
		190: 1,
		195: 3,
		196: 3,
		197: 1,
		198: 1,
		199: 3,
		201: 1,
		207: 4,
		210: 3,
		211: 1,
		212: 2,
		213: 2,
		214: 1,
		215: 1,
		225: 0,
		229: 1,
		230: 1,
		231: 1,
		232: 1,
		233: 1,
		234: 1,
		235: 3,
		244: 1,
		247: 4,
		252: 2,
		257: 1,
		261: 1,
		271: 1,
		273: 4,
		274: 2,
		275: 2,
		276: 2,
		277: 3,
		278: 3,
		279: 1,
		280: 3,
		281: 3,
		282: 3,
		283: 1,
		284: 1,
		285: 2,
		286: 4,
		287: 3,
		288: 2,
		289: 4,
		290: 3,
		291: 3,
		292: 3,
		293: 4,
		294: 1,
		295: 3,
		296: 1,
		297: 3,
		298: 1,
		299: 2,
		300: 3,
		301: 3,
		302: 4,
		303: 2,
		304: 2,
		305: 2,
		306: 2,
		307: 2,
		308: 2,
		309: 3,
		310: 2,
		311: 2,
		312: 2,
		313: 2,
		314: 2,
		315: 2,
		316: 4,
		325: 2,
		326: 2,
		327: 2,
		328: 2,
		331: 2,
		332: 2,
		337: 2,
		342: 1,
		343: 1,
		346: 2,
		347: 1,
		350: 4,
		351: 3,
		352: 1,
		353: 2,
		360: 1,
		368: 1,
		369: 1,
		370: 1,
		371: 1,
		372: 1,
		373: 1,
		374: 1,
		375: 1,
		376: 1,
		377: 1,
		378: 1,
		382: 3,
		385: 1,
		392: 1,
		393: 1,
		396: 2,
		397: 2,
		398: 2,
		399: 1,
		400: 1,
		401: 1,
		402: 1,
		403: 1,
		404: 1,
		405: 1,
		406: 1,
		407: 1,
		408: 1,
		409: 1,
		410: 1,
		414: 4,
		415: 1,
		416: 1,
		417: 2,
		420: 1,
		421: 1,
		422: 2,
		424: 1,
		425: 2,
		426: 2,
		427: 2,
		428: 2,
		430: 3,
		438: 3,
		439: 3,
		440: 3,
		443: 2,
		444: 2,
		445: 2,
		446: 2,
		447: 6,
		448: 6,
		449: 2,
		450: 2,
		464: 2,
		468: 3,
		476: 2,
		479: 1,
		480: 2,
		65535: 0,
	};
	var Mu = {
		"_xlfn.ACOT": "ACOT",
		"_xlfn.ACOTH": "ACOTH",
		"_xlfn.AGGREGATE": "AGGREGATE",
		"_xlfn.ARABIC": "ARABIC",
		"_xlfn.AVERAGEIF": "AVERAGEIF",
		"_xlfn.AVERAGEIFS": "AVERAGEIFS",
		"_xlfn.BASE": "BASE",
		"_xlfn.BETA.DIST": "BETA.DIST",
		"_xlfn.BETA.INV": "BETA.INV",
		"_xlfn.BINOM.DIST": "BINOM.DIST",
		"_xlfn.BINOM.DIST.RANGE": "BINOM.DIST.RANGE",
		"_xlfn.BINOM.INV": "BINOM.INV",
		"_xlfn.BITAND": "BITAND",
		"_xlfn.BITLSHIFT": "BITLSHIFT",
		"_xlfn.BITOR": "BITOR",
		"_xlfn.BITRSHIFT": "BITRSHIFT",
		"_xlfn.BITXOR": "BITXOR",
		"_xlfn.CEILING.MATH": "CEILING.MATH",
		"_xlfn.CEILING.PRECISE": "CEILING.PRECISE",
		"_xlfn.CHISQ.DIST": "CHISQ.DIST",
		"_xlfn.CHISQ.DIST.RT": "CHISQ.DIST.RT",
		"_xlfn.CHISQ.INV": "CHISQ.INV",
		"_xlfn.CHISQ.INV.RT": "CHISQ.INV.RT",
		"_xlfn.CHISQ.TEST": "CHISQ.TEST",
		"_xlfn.COMBINA": "COMBINA",
		"_xlfn.CONCAT": "CONCAT",
		"_xlfn.CONFIDENCE.NORM": "CONFIDENCE.NORM",
		"_xlfn.CONFIDENCE.T": "CONFIDENCE.T",
		"_xlfn.COT": "COT",
		"_xlfn.COTH": "COTH",
		"_xlfn.COUNTIFS": "COUNTIFS",
		"_xlfn.COVARIANCE.P": "COVARIANCE.P",
		"_xlfn.COVARIANCE.S": "COVARIANCE.S",
		"_xlfn.CSC": "CSC",
		"_xlfn.CSCH": "CSCH",
		"_xlfn.DAYS": "DAYS",
		"_xlfn.DECIMAL": "DECIMAL",
		"_xlfn.ECMA.CEILING": "ECMA.CEILING",
		"_xlfn.ERF.PRECISE": "ERF.PRECISE",
		"_xlfn.ERFC.PRECISE": "ERFC.PRECISE",
		"_xlfn.EXPON.DIST": "EXPON.DIST",
		"_xlfn.F.DIST": "F.DIST",
		"_xlfn.F.DIST.RT": "F.DIST.RT",
		"_xlfn.F.INV": "F.INV",
		"_xlfn.F.INV.RT": "F.INV.RT",
		"_xlfn.F.TEST": "F.TEST",
		"_xlfn.FILTERXML": "FILTERXML",
		"_xlfn.FLOOR.MATH": "FLOOR.MATH",
		"_xlfn.FLOOR.PRECISE": "FLOOR.PRECISE",
		"_xlfn.FORECAST.ETS": "FORECAST.ETS",
		"_xlfn.FORECAST.ETS.CONFINT": "FORECAST.ETS.CONFINT",
		"_xlfn.FORECAST.ETS.SEASONALITY": "FORECAST.ETS.SEASONALITY",
		"_xlfn.FORECAST.ETS.STAT": "FORECAST.ETS.STAT",
		"_xlfn.FORECAST.LINEAR": "FORECAST.LINEAR",
		"_xlfn.FORMULATEXT": "FORMULATEXT",
		"_xlfn.GAMMA": "GAMMA",
		"_xlfn.GAMMA.DIST": "GAMMA.DIST",
		"_xlfn.GAMMA.INV": "GAMMA.INV",
		"_xlfn.GAMMALN.PRECISE": "GAMMALN.PRECISE",
		"_xlfn.GAUSS": "GAUSS",
		"_xlfn.HYPGEOM.DIST": "HYPGEOM.DIST",
		"_xlfn.IFERROR": "IFERROR",
		"_xlfn.IFNA": "IFNA",
		"_xlfn.IFS": "IFS",
		"_xlfn.IMCOSH": "IMCOSH",
		"_xlfn.IMCOT": "IMCOT",
		"_xlfn.IMCSC": "IMCSC",
		"_xlfn.IMCSCH": "IMCSCH",
		"_xlfn.IMSEC": "IMSEC",
		"_xlfn.IMSECH": "IMSECH",
		"_xlfn.IMSINH": "IMSINH",
		"_xlfn.IMTAN": "IMTAN",
		"_xlfn.ISFORMULA": "ISFORMULA",
		"_xlfn.ISO.CEILING": "ISO.CEILING",
		"_xlfn.ISOWEEKNUM": "ISOWEEKNUM",
		"_xlfn.LOGNORM.DIST": "LOGNORM.DIST",
		"_xlfn.LOGNORM.INV": "LOGNORM.INV",
		"_xlfn.MAXIFS": "MAXIFS",
		"_xlfn.MINIFS": "MINIFS",
		"_xlfn.MODE.MULT": "MODE.MULT",
		"_xlfn.MODE.SNGL": "MODE.SNGL",
		"_xlfn.MUNIT": "MUNIT",
		"_xlfn.NEGBINOM.DIST": "NEGBINOM.DIST",
		"_xlfn.NETWORKDAYS.INTL": "NETWORKDAYS.INTL",
		"_xlfn.NIGBINOM": "NIGBINOM",
		"_xlfn.NORM.DIST": "NORM.DIST",
		"_xlfn.NORM.INV": "NORM.INV",
		"_xlfn.NORM.S.DIST": "NORM.S.DIST",
		"_xlfn.NORM.S.INV": "NORM.S.INV",
		"_xlfn.NUMBERVALUE": "NUMBERVALUE",
		"_xlfn.PDURATION": "PDURATION",
		"_xlfn.PERCENTILE.EXC": "PERCENTILE.EXC",
		"_xlfn.PERCENTILE.INC": "PERCENTILE.INC",
		"_xlfn.PERCENTRANK.EXC": "PERCENTRANK.EXC",
		"_xlfn.PERCENTRANK.INC": "PERCENTRANK.INC",
		"_xlfn.PERMUTATIONA": "PERMUTATIONA",
		"_xlfn.PHI": "PHI",
		"_xlfn.POISSON.DIST": "POISSON.DIST",
		"_xlfn.QUARTILE.EXC": "QUARTILE.EXC",
		"_xlfn.QUARTILE.INC": "QUARTILE.INC",
		"_xlfn.QUERYSTRING": "QUERYSTRING",
		"_xlfn.RANK.AVG": "RANK.AVG",
		"_xlfn.RANK.EQ": "RANK.EQ",
		"_xlfn.RRI": "RRI",
		"_xlfn.SEC": "SEC",
		"_xlfn.SECH": "SECH",
		"_xlfn.SHEET": "SHEET",
		"_xlfn.SHEETS": "SHEETS",
		"_xlfn.SKEW.P": "SKEW.P",
		"_xlfn.STDEV.P": "STDEV.P",
		"_xlfn.STDEV.S": "STDEV.S",
		"_xlfn.SUMIFS": "SUMIFS",
		"_xlfn.SWITCH": "SWITCH",
		"_xlfn.T.DIST": "T.DIST",
		"_xlfn.T.DIST.2T": "T.DIST.2T",
		"_xlfn.T.DIST.RT": "T.DIST.RT",
		"_xlfn.T.INV": "T.INV",
		"_xlfn.T.INV.2T": "T.INV.2T",
		"_xlfn.T.TEST": "T.TEST",
		"_xlfn.TEXTJOIN": "TEXTJOIN",
		"_xlfn.UNICHAR": "UNICHAR",
		"_xlfn.UNICODE": "UNICODE",
		"_xlfn.VAR.P": "VAR.P",
		"_xlfn.VAR.S": "VAR.S",
		"_xlfn.WEBSERVICE": "WEBSERVICE",
		"_xlfn.WEIBULL.DIST": "WEIBULL.DIST",
		"_xlfn.WORKDAY.INTL": "WORKDAY.INTL",
		"_xlfn.XOR": "XOR",
		"_xlfn.Z.TEST": "Z.TEST",
	};
	function Uu(e) {
		if (e.slice(0, 3) == "of:") e = e.slice(3);
		if (e.charCodeAt(0) == 61) {
			e = e.slice(1);
			if (e.charCodeAt(0) == 61) e = e.slice(1);
		}
		e = e.replace(/COM\.MICROSOFT\./g, "");
		e = e.replace(
			/\[((?:\.[A-Z]+[0-9]+)(?::\.[A-Z]+[0-9]+)?)\]/g,
			function (e, r) {
				return r.replace(/\./g, "");
			}
		);
		e = e.replace(/\[.(#[A-Z]*[?!])\]/g, "$1");
		return e.replace(/[;~]/g, ",").replace(/\|/g, ";");
	}
	function Hu(e) {
		var r = "of:=" + e.replace(zo, "$1[.$2$3$4$5]").replace(/\]:\[/g, ":");
		return r.replace(/;/g, "|").replace(/,/g, ";");
	}
	function Wu(e) {
		var r = e.split(":");
		var t = r[0].split(".")[0];
		return [
			t,
			r[0].split(".")[1] +
				(r.length > 1 ? ":" + (r[1].split(".")[1] || r[1].split(".")[0]) : ""),
		];
	}
	function Vu(e) {
		return e.replace(/\./, "!");
	}
	var zu = {};
	var Xu = {};
	Ia.WS = [
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet",
		"http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet",
	];
	var Gu = typeof Map !== "undefined";
	function ju(e, r, t) {
		var a = 0,
			n = e.length;
		if (t) {
			if (Gu ? t.has(r) : t.hasOwnProperty(r)) {
				var i = Gu ? t.get(r) : t[r];
				for (; a < i.length; ++a) {
					if (e[i[a]].t === r) {
						e.Count++;
						return i[a];
					}
				}
			}
		} else
			for (; a < n; ++a) {
				if (e[a].t === r) {
					e.Count++;
					return a;
				}
			}
		e[n] = { t: r };
		e.Count++;
		e.Unique++;
		if (t) {
			if (Gu) {
				if (!t.has(r)) t.set(r, []);
				t.get(r).push(n);
			} else {
				if (!t.hasOwnProperty(r)) t[r] = [];
				t[r].push(n);
			}
		}
		return n;
	}
	function Ku(e, r) {
		var t = { min: e + 1, max: e + 1 };
		var a = -1;
		if (r.MDW) qf = r.MDW;
		if (r.width != null) t.customWidth = 1;
		else if (r.wpx != null) a = rl(r.wpx);
		else if (r.wch != null) a = r.wch;
		if (a > -1) {
			t.width = tl(a);
			t.customWidth = 1;
		} else if (r.width != null) t.width = r.width;
		if (r.hidden) t.hidden = true;
		return t;
	}
	function Yu(e, r) {
		if (!e) return;
		var t = [0.7, 0.7, 0.75, 0.75, 0.3, 0.3];
		if (r == "xlml") t = [1, 1, 1, 1, 0.5, 0.5];
		if (e.left == null) e.left = t[0];
		if (e.right == null) e.right = t[1];
		if (e.top == null) e.top = t[2];
		if (e.bottom == null) e.bottom = t[3];
		if (e.header == null) e.header = t[4];
		if (e.footer == null) e.footer = t[5];
	}
	function $u(e, r, t) {
		var a = t.revssf[r.z != null ? r.z : "General"];
		var n = 60,
			i = e.length;
		if (a == null && t.ssf) {
			for (; n < 392; ++n)
				if (t.ssf[n] == null) {
					R.load(r.z, n);
					t.ssf[n] = r.z;
					t.revssf[r.z] = a = n;
					break;
				}
		}
		for (n = 0; n != i; ++n) if (e[n].numFmtId === a) return n;
		e[i] = {
			numFmtId: a,
			fontId: 0,
			fillId: 0,
			borderId: 0,
			xfId: 0,
			applyNumberFormat: 1,
		};
		return i;
	}
	function Zu(e, r, t, a, n, i) {
		if (e.t === "z") return;
		if (e.t === "d" && typeof e.v === "string") e.v = ae(e.v);
		try {
			if (a.cellNF) e.z = R._table[r];
		} catch (s) {
			if (a.WTF) throw s;
		}
		if (!a || a.cellText !== false)
			try {
				if (R._table[r] == null) R.load(F[r] || "General", r);
				if (e.t === "e") e.w = e.w || Xt[e.v];
				else if (r === 0) {
					if (e.t === "n") {
						if ((e.v | 0) === e.v) e.w = R._general_int(e.v);
						else e.w = R._general_num(e.v);
					} else if (e.t === "d") {
						var f = J(e.v);
						if ((f | 0) === f) e.w = R._general_int(f);
						else e.w = R._general_num(f);
					} else if (e.v === undefined) return "";
					else e.w = R._general(e.v, Xu);
				} else if (e.t === "d") e.w = R.format(r, J(e.v), Xu);
				else e.w = R.format(r, e.v, Xu);
			} catch (s) {
				if (a.WTF) throw s;
			}
		if (!a.cellStyles) return;
		if (t != null)
			try {
				e.s = i.Fills[t];
				if (e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb) {
					e.s.fgColor.rgb = $f(
						n.themeElements.clrScheme[e.s.fgColor.theme].rgb,
						e.s.fgColor.tint || 0
					);
					if (a.WTF)
						e.s.fgColor.raw_rgb =
							n.themeElements.clrScheme[e.s.fgColor.theme].rgb;
				}
				if (e.s.bgColor && e.s.bgColor.theme) {
					e.s.bgColor.rgb = $f(
						n.themeElements.clrScheme[e.s.bgColor.theme].rgb,
						e.s.bgColor.tint || 0
					);
					if (a.WTF)
						e.s.bgColor.raw_rgb =
							n.themeElements.clrScheme[e.s.bgColor.theme].rgb;
				}
			} catch (s) {
				if (a.WTF && i.Fills) throw s;
			}
	}
	function Qu(e, r, t) {
		if (e && e["!ref"]) {
			var a = ht(e["!ref"]);
			if (a.e.c < a.s.c || a.e.r < a.s.r)
				throw new Error("Bad range (" + t + "): " + e["!ref"]);
		}
	}
	function Ju(e, r) {
		var t = ht(r);
		if (t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0)
			e["!ref"] = ut(t);
	}
	var qu = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;
	var eh = /<(?:\w+:)?sheetData>([\s\S]*)<\/(?:\w+:)?sheetData>/;
	var rh = /<(?:\w:)?hyperlink [^>]*>/gm;
	var th = /"(\w*:\w*)"/;
	var ah = /<(?:\w:)?col[^>]*[\/]?>/g;
	var nh = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;
	var ih = /<(?:\w:)?pageMargins[^>]*\/>/g;
	var sh = /<(?:\w:)?sheetPr(?:[^>a-z][^>]*)?\/>/;
	var fh = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;
	function lh(e, r, t, a, n, i, s) {
		if (!e) return e;
		if (p != null && r.dense == null) r.dense = p;
		var f = r.dense ? [] : {};
		var l = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
		var o = "",
			c = "";
		var u = e.match(eh);
		if (u) {
			o = e.slice(0, u.index);
			c = e.slice(u.index + u[0].length);
		} else o = c = e;
		var h = o.match(sh);
		if (h) ch(h[0], f, n, t);
		var d = (o.match(/<(?:\w*:)?dimension/) || { index: -1 }).index;
		if (d > 0) {
			var v = o.slice(d, d + 50).match(th);
			if (v) Ju(f, v[1]);
		}
		var m = o.match(fh);
		if (m && m[1]) Eh(m[1], n);
		var b = [];
		if (r.cellStyles) {
			var g = o.match(ah);
			if (g) ph(b, g);
		}
		if (u) _h(u[1], f, r, l, i, s);
		var w = c.match(nh);
		if (w) f["!autofilter"] = bh(w[0]);
		var E = [];
		var k = c.match(qu);
		if (k)
			for (d = 0; d != k.length; ++d)
				E[d] = ht(k[d].slice(k[d].indexOf('"') + 1));
		var S = c.match(rh);
		if (S) hh(f, S, a);
		var _ = c.match(ih);
		if (_) f["!margins"] = dh(Te(_[0]));
		if (!f["!ref"] && l.e.c >= l.s.c && l.e.r >= l.s.r) f["!ref"] = ut(l);
		if (r.sheetRows > 0 && f["!ref"]) {
			var C = ht(f["!ref"]);
			if (r.sheetRows <= +C.e.r) {
				C.e.r = r.sheetRows - 1;
				if (C.e.r > l.e.r) C.e.r = l.e.r;
				if (C.e.r < C.s.r) C.s.r = C.e.r;
				if (C.e.c > l.e.c) C.e.c = l.e.c;
				if (C.e.c < C.s.c) C.s.c = C.e.c;
				f["!fullref"] = f["!ref"];
				f["!ref"] = ut(C);
			}
		}
		if (b.length > 0) f["!cols"] = b;
		if (E.length > 0) f["!merges"] = E;
		return f;
	}
	function oh(e) {
		if (e.length === 0) return "";
		var r = '<mergeCells count="' + e.length + '">';
		for (var t = 0; t != e.length; ++t)
			r += '<mergeCell ref="' + ut(e[t]) + '"/>';
		return r + "</mergeCells>";
	}
	function ch(e, r, t, a) {
		var n = Te(e);
		if (!t.Sheets[a]) t.Sheets[a] = {};
		if (n.codeName) t.Sheets[a].CodeName = n.codeName;
	}
	function uh(e) {
		var r = { sheet: 1 };
		var t = [
			"objects",
			"scenarios",
			"selectLockedCells",
			"selectUnlockedCells",
		];
		var a = [
			"formatColumns",
			"formatRows",
			"formatCells",
			"insertColumns",
			"insertRows",
			"insertHyperlinks",
			"deleteColumns",
			"deleteRows",
			"sort",
			"autoFilter",
			"pivotTables",
		];
		t.forEach(function (t) {
			if (e[t] != null && e[t]) r[t] = "1";
		});
		a.forEach(function (t) {
			if (e[t] != null && !e[t]) r[t] = "0";
		});
		if (e.password) r.password = Lf(e.password).toString(16).toUpperCase();
		return rr("sheetProtection", null, r);
	}
	function hh(e, r, t) {
		var a = Array.isArray(e);
		for (var n = 0; n != r.length; ++n) {
			var i = Te(We(r[n]), true);
			if (!i.ref) return;
			var s = ((t || {})["!id"] || [])[i.id];
			if (s) {
				i.Target = s.Target;
				if (i.location) i.Target += "#" + i.location;
			} else {
				i.Target = "#" + i.location;
				s = { Target: i.Target, TargetMode: "Internal" };
			}
			i.Rel = s;
			if (i.tooltip) {
				i.Tooltip = i.tooltip;
				delete i.tooltip;
			}
			var f = ht(i.ref);
			for (var l = f.s.r; l <= f.e.r; ++l)
				for (var o = f.s.c; o <= f.e.c; ++o) {
					var c = ot({ c: o, r: l });
					if (a) {
						if (!e[l]) e[l] = [];
						if (!e[l][o]) e[l][o] = { t: "z", v: undefined };
						e[l][o].l = i;
					} else {
						if (!e[c]) e[c] = { t: "z", v: undefined };
						e[c].l = i;
					}
				}
		}
	}
	function dh(e) {
		var r = {};
		["left", "right", "top", "bottom", "header", "footer"].forEach(function (
			t
		) {
			if (e[t]) r[t] = parseFloat(e[t]);
		});
		return r;
	}
	function vh(e) {
		Yu(e);
		return rr("pageMargins", null, e);
	}
	function ph(e, r) {
		var t = false;
		for (var a = 0; a != r.length; ++a) {
			var n = Te(r[a], true);
			if (n.hidden) n.hidden = He(n.hidden);
			var i = parseInt(n.min, 10) - 1,
				s = parseInt(n.max, 10) - 1;
			delete n.min;
			delete n.max;
			n.width = +n.width;
			if (!t && n.width) {
				t = true;
				nl(n.width);
			}
			il(n);
			while (i <= s) e[i++] = ie(n);
		}
	}
	function mh(e, r) {
		var t = ["<cols>"],
			a;
		for (var n = 0; n != r.length; ++n) {
			if (!(a = r[n])) continue;
			t[t.length] = rr("col", null, Ku(n, a));
		}
		t[t.length] = "</cols>";
		return t.join("");
	}
	function bh(e) {
		var r = { ref: (e.match(/ref="([^"]*)"/) || [])[1] };
		return r;
	}
	function gh(e) {
		return rr("autoFilter", null, { ref: e.ref });
	}
	var wh = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/>/;
	function Eh(e, r) {
		(e.match(wh) || []).forEach(function (e) {
			var t = Te(e);
			if (He(t.rightToLeft)) {
				if (!r.Views) r.Views = [{}];
				if (!r.Views[0]) r.Views[0] = {};
				r.Views[0].RTL = true;
			}
		});
	}
	function kh(e, r, t, a) {
		var n = { workbookViewId: "0" };
		if ((((a || {}).Workbook || {}).Views || [])[0])
			n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0";
		return rr("sheetViews", rr("sheetView", null, n), {});
	}
	function Sh(e, r, t, a) {
		if ((e.v === undefined && e.f === undefined) || e.t === "z") return "";
		var n = "";
		var i = e.t,
			s = e.v;
		switch (e.t) {
			case "b":
				n = e.v ? "1" : "0";
				break;
			case "n":
				n = "" + e.v;
				break;
			case "e":
				n = Xt[e.v];
				break;
			case "d":
				if (a.cellDates) n = ae(e.v, -1).toISOString();
				else {
					e = ie(e);
					e.t = "n";
					n = "" + (e.v = J(ae(e.v)));
				}
				if (typeof e.z === "undefined") e.z = R._table[14];
				break;
			default:
				n = e.v;
				break;
		}
		var f = qe("v", Oe(n)),
			l = { r: r };
		var o = $u(a.cellXfs, e, a);
		if (o !== 0) l.s = o;
		switch (e.t) {
			case "n":
				break;
			case "d":
				l.t = "d";
				break;
			case "b":
				l.t = "b";
				break;
			case "e":
				l.t = "e";
				break;
			default:
				if (e.v == null) {
					delete e.t;
					break;
				}
				if (a.bookSST) {
					f = qe("v", "" + ju(a.Strings, e.v, a.revStrings));
					l.t = "s";
					break;
				}
				l.t = "str";
				break;
		}
		if (e.t != i) {
			e.t = i;
			e.v = s;
		}
		if (e.f) {
			var c =
				e.F && e.F.slice(0, r.length) == r ? { t: "array", ref: e.F } : null;
			f = rr("f", Oe(e.f), c) + (e.v != null ? f : "");
		}
		if (e.l) t["!links"].push([r, e.l]);
		if (e.c) t["!comments"].push([r, e.c]);
		return rr("c", f, l);
	}
	var _h = (function () {
		var e = /<(?:\w+:)?c[ >]/,
			r = /<\/(?:\w+:)?row>/;
		var t = /r=["']([^"']*)["']/,
			a = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
		var n = /ref=["']([^"']*)["']/;
		var i = je("v"),
			s = je("f");
		return function f(l, o, c, u, h, d) {
			var v = 0,
				p = "",
				m = [],
				b = [],
				g = 0,
				w = 0,
				E = 0,
				k = "",
				S;
			var _,
				C = 0,
				B = 0;
			var T, x;
			var y = 0,
				I = 0;
			var A = Array.isArray(d.CellXf),
				D;
			var O = [];
			var F = [];
			var P = Array.isArray(o);
			var N = [],
				L = {},
				M = false;
			for (var U = l.split(r), H = 0, W = U.length; H != W; ++H) {
				p = U[H].trim();
				var V = p.length;
				if (V === 0) continue;
				for (v = 0; v < V; ++v) if (p.charCodeAt(v) === 62) break;
				++v;
				_ = Te(p.slice(0, v), true);
				C = _.r != null ? parseInt(_.r, 10) : C + 1;
				B = -1;
				if (c.sheetRows && c.sheetRows < C) continue;
				if (u.s.r > C - 1) u.s.r = C - 1;
				if (u.e.r < C - 1) u.e.r = C - 1;
				if (c && c.cellStyles) {
					L = {};
					M = false;
					if (_.ht) {
						M = true;
						L.hpt = parseFloat(_.ht);
						L.hpx = ol(L.hpt);
					}
					if (_.hidden == "1") {
						M = true;
						L.hidden = true;
					}
					if (_.outlineLevel != null) {
						M = true;
						L.level = +_.outlineLevel;
					}
					if (M) N[C - 1] = L;
				}
				m = p.slice(v).split(e);
				for (v = 0; v != m.length; ++v) {
					p = m[v].trim();
					if (p.length === 0) continue;
					b = p.match(t);
					g = v;
					w = 0;
					E = 0;
					p = "<c " + (p.slice(0, 1) == "<" ? ">" : "") + p;
					if (b != null && b.length === 2) {
						g = 0;
						k = b[1];
						for (w = 0; w != k.length; ++w) {
							if ((E = k.charCodeAt(w) - 64) < 1 || E > 26) break;
							g = 26 * g + E;
						}
						--g;
						B = g;
					} else ++B;
					for (w = 0; w != p.length; ++w) if (p.charCodeAt(w) === 62) break;
					++w;
					_ = Te(p.slice(0, w), true);
					if (!_.r) _.r = ot({ r: C - 1, c: B });
					k = p.slice(w);
					S = { t: "" };
					if ((b = k.match(i)) != null && b[1] !== "") S.v = Ae(b[1]);
					if (c.cellFormula) {
						if ((b = k.match(s)) != null && b[1] !== "") {
							S.f = Yo(Ae(We(b[1])));
							if (b[0].indexOf('t="array"') > -1) {
								S.F = (k.match(n) || [])[1];
								if (S.F.indexOf(":") > -1) O.push([ht(S.F), S.F]);
							} else if (b[0].indexOf('t="shared"') > -1) {
								x = Te(b[0]);
								F[parseInt(x.si, 10)] = [x, Yo(Ae(We(b[1])))];
							}
						} else if ((b = k.match(/<f[^>]*\/>/))) {
							x = Te(b[0]);
							if (F[x.si]) S.f = jo(F[x.si][1], F[x.si][0].ref, _.r);
						}
						var z = lt(_.r);
						for (w = 0; w < O.length; ++w)
							if (z.r >= O[w][0].s.r && z.r <= O[w][0].e.r)
								if (z.c >= O[w][0].s.c && z.c <= O[w][0].e.c) S.F = O[w][1];
					}
					if (_.t == null && S.v === undefined) {
						if (S.f || S.F) {
							S.v = 0;
							S.t = "n";
						} else if (!c.sheetStubs) continue;
						else S.t = "z";
					} else S.t = _.t || "n";
					if (u.s.c > B) u.s.c = B;
					if (u.e.c < B) u.e.c = B;
					switch (S.t) {
						case "n":
							if (S.v == "" || S.v == null) {
								if (!c.sheetStubs) continue;
								S.t = "z";
							} else S.v = parseFloat(S.v);
							break;
						case "s":
							if (typeof S.v == "undefined") {
								if (!c.sheetStubs) continue;
								S.t = "z";
							} else {
								T = zu[parseInt(S.v, 10)];
								S.v = T.t;
								S.r = T.r;
								if (c.cellHTML) S.h = T.h;
							}
							break;
						case "str":
							S.t = "s";
							S.v = S.v != null ? We(S.v) : "";
							if (c.cellHTML) S.h = Ne(S.v);
							break;
						case "inlineStr":
							b = k.match(a);
							S.t = "s";
							if (b != null && (T = of(b[1]))) S.v = T.t;
							else S.v = "";
							break;
						case "b":
							S.v = He(S.v);
							break;
						case "d":
							if (c.cellDates) S.v = ae(S.v, 1);
							else {
								S.v = J(ae(S.v, 1));
								S.t = "n";
							}
							break;
						case "e":
							if (!c || c.cellText !== false) S.w = S.v;
							S.v = Gt[S.v];
							break;
					}
					y = I = 0;
					if (A && _.s !== undefined) {
						D = d.CellXf[_.s];
						if (D != null) {
							if (D.numFmtId != null) y = D.numFmtId;
							if (c.cellStyles) {
								if (D.fillId != null) I = D.fillId;
							}
						}
					}
					Zu(S, y, I, c, h, d);
					if (c.cellDates && A && S.t == "n" && R.is_date(R._table[y])) {
						S.t = "d";
						S.v = q(S.v);
					}
					if (P) {
						var X = lt(_.r);
						if (!o[X.r]) o[X.r] = [];
						o[X.r][X.c] = S;
					} else o[_.r] = S;
				}
			}
			if (N.length > 0) o["!rows"] = N;
		};
	})();
	function Ch(e, r, t, a) {
		var n = [],
			i = [],
			s = ht(e["!ref"]),
			f = "",
			l,
			o = "",
			c = [],
			u = 0,
			h = 0,
			d = e["!rows"];
		var v = Array.isArray(e);
		var p = { r: o },
			m,
			b = -1;
		for (h = s.s.c; h <= s.e.c; ++h) c[h] = nt(h);
		for (u = s.s.r; u <= s.e.r; ++u) {
			i = [];
			o = et(u);
			for (h = s.s.c; h <= s.e.c; ++h) {
				l = c[h] + o;
				var g = v ? (e[u] || [])[h] : e[l];
				if (g === undefined) continue;
				if ((f = Sh(g, l, e, r, t, a)) != null) i.push(f);
			}
			if (i.length > 0 || (d && d[u])) {
				p = { r: o };
				if (d && d[u]) {
					m = d[u];
					if (m.hidden) p.hidden = 1;
					b = -1;
					if (m.hpx) b = ll(m.hpx);
					else if (m.hpt) b = m.hpt;
					if (b > -1) {
						p.ht = b;
						p.customHeight = 1;
					}
					if (m.level) {
						p.outlineLevel = m.level;
					}
				}
				n[n.length] = rr("row", i.join(""), p);
			}
		}
		if (d)
			for (; u < d.length; ++u) {
				if (d && d[u]) {
					p = { r: u + 1 };
					m = d[u];
					if (m.hidden) p.hidden = 1;
					b = -1;
					if (m.hpx) b = ll(m.hpx);
					else if (m.hpt) b = m.hpt;
					if (b > -1) {
						p.ht = b;
						p.customHeight = 1;
					}
					if (m.level) {
						p.outlineLevel = m.level;
					}
					n[n.length] = rr("row", "", p);
				}
			}
		return n.join("");
	}
	var Bh = rr("worksheet", null, { xmlns: nr.main[0], "xmlns:r": nr.r });
	function Th(e, r, t, a) {
		var n = [ke, Bh];
		var i = t.SheetNames[e],
			s = 0,
			f = "";
		var l = t.Sheets[i];
		if (l == null) l = {};
		var o = l["!ref"] || "A1";
		var c = ht(o);
		if (c.e.c > 16383 || c.e.r > 1048575) {
			if (r.WTF)
				throw new Error("Range " + o + " exceeds format limit A1:XFD1048576");
			c.e.c = Math.min(c.e.c, 16383);
			c.e.r = Math.min(c.e.c, 1048575);
			o = ut(c);
		}
		if (!a) a = {};
		l["!comments"] = [];
		l["!drawing"] = [];
		if (r.bookType !== "xlsx" && t.vbaraw) {
			var u = t.SheetNames[e];
			try {
				if (t.Workbook) u = t.Workbook.Sheets[e].CodeName || u;
			} catch (h) {}
			n[n.length] = rr("sheetPr", null, { codeName: Oe(u) });
		}
		n[n.length] = rr("dimension", null, { ref: o });
		n[n.length] = kh(l, r, e, t);
		if (r.sheetFormat)
			n[n.length] = rr("sheetFormatPr", null, {
				defaultRowHeight: r.sheetFormat.defaultRowHeight || "16",
				baseColWidth: r.sheetFormat.baseColWidth || "10",
				outlineLevelRow: r.sheetFormat.outlineLevelRow || "7",
			});
		if (l["!cols"] != null && l["!cols"].length > 0)
			n[n.length] = mh(l, l["!cols"]);
		n[(s = n.length)] = "<sheetData/>";
		l["!links"] = [];
		if (l["!ref"] != null) {
			f = Ch(l, r, e, t, a);
			if (f.length > 0) n[n.length] = f;
		}
		if (n.length > s + 1) {
			n[n.length] = "</sheetData>";
			n[s] = n[s].replace("/>", ">");
		}
		if (l["!protect"] != null) n[n.length] = uh(l["!protect"]);
		if (l["!autofilter"] != null) n[n.length] = gh(l["!autofilter"]);
		if (l["!merges"] != null && l["!merges"].length > 0)
			n[n.length] = oh(l["!merges"]);
		var d = -1,
			v,
			p = -1;
		if (l["!links"].length > 0) {
			n[n.length] = "<hyperlinks>";
			l["!links"].forEach(function (e) {
				if (!e[1].Target) return;
				v = { ref: e[0] };
				if (e[1].Target.charAt(0) != "#") {
					p = Fa(a, -1, Oe(e[1].Target).replace(/#.*$/, ""), Ia.HLINK);
					v["r:id"] = "rId" + p;
				}
				if ((d = e[1].Target.indexOf("#")) > -1)
					v.location = Oe(e[1].Target.slice(d + 1));
				if (e[1].Tooltip) v.tooltip = Oe(e[1].Tooltip);
				n[n.length] = rr("hyperlink", null, v);
			});
			n[n.length] = "</hyperlinks>";
		}
		delete l["!links"];
		if (l["!margins"] != null) n[n.length] = vh(l["!margins"]);
		n[n.length] = "";
		if (!r || r.ignoreEC || r.ignoreEC == void 0)
			n[n.length] = qe(
				"ignoredErrors",
				rr("ignoredError", null, { numberStoredAsText: 1, sqref: o })
			);
		if (l["!drawing"].length > 0) {
			p = Fa(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Ia.DRAW);
			n[n.length] = rr("drawing", null, { "r:id": "rId" + p });
		} else delete l["!drawing"];
		if (l["!comments"].length > 0) {
			p = Fa(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", Ia.VML);
			n[n.length] = rr("legacyDrawing", null, { "r:id": "rId" + p });
			l["!legacy"] = p;
		}
		if (n.length > 2) {
			n[n.length] = "</worksheet>";
			n[1] = n[1].replace("/>", ">");
		}
		return n.join("");
	}
	function xh(e, r) {
		var t = {};
		var a = e.l + r;
		t.r = e._R(4);
		e.l += 4;
		var n = e._R(2);
		e.l += 1;
		var i = e._R(1);
		e.l = a;
		if (i & 7) t.level = i & 7;
		if (i & 16) t.hidden = true;
		if (i & 32) t.hpt = n / 20;
		return t;
	}
	function yh(e, r, t) {
		var a = zr(17 + 8 * 16);
		var n = (t["!rows"] || [])[e] || {};
		a._W(4, e);
		a._W(4, 0);
		var i = 320;
		if (n.hpx) i = ll(n.hpx) * 20;
		else if (n.hpt) i = n.hpt * 20;
		a._W(2, i);
		a._W(1, 0);
		var s = 0;
		if (n.level) s |= n.level;
		if (n.hidden) s |= 16;
		if (n.hpx || n.hpt) s |= 32;
		a._W(1, s);
		a._W(1, 0);
		var f = 0,
			l = a.l;
		a.l += 4;
		var o = { r: e, c: 0 };
		for (var c = 0; c < 16; ++c) {
			if (r.s.c > (c + 1) << 10 || r.e.c < c << 10) continue;
			var u = -1,
				h = -1;
			for (var d = c << 10; d < (c + 1) << 10; ++d) {
				o.c = d;
				var v = Array.isArray(t) ? (t[o.r] || [])[o.c] : t[ot(o)];
				if (v) {
					if (u < 0) u = d;
					h = d;
				}
			}
			if (u < 0) continue;
			++f;
			a._W(4, u);
			a._W(4, h);
		}
		var p = a.l;
		a.l = l;
		a._W(4, f);
		a.l = p;
		return a.length > a.l ? a.slice(0, a.l) : a;
	}
	function Ih(e, r, t, a) {
		var n = yh(a, t, r);
		if (n.length > 17 || (r["!rows"] || [])[a]) jr(e, "BrtRowHdr", n);
	}
	var Ah = Ht;
	var Rh = Wt;
	function Dh() {}
	function Oh(e, r) {
		var t = {};
		e.l += 19;
		t.name = It(e, r - 19);
		return t;
	}
	function Fh(e, r) {
		if (r == null) r = zr(84 + 4 * e.length);
		for (var t = 0; t < 3; ++t) r._W(1, 0);
		Kt({ auto: 1 }, r);
		r._W(-4, -1);
		r._W(-4, -1);
		At(e, r);
		return r.slice(0, r.l);
	}
	function Ph(e) {
		var r = xt(e);
		return [r];
	}
	function Nh(e, r, t) {
		if (t == null) t = zr(8);
		return yt(r, t);
	}
	function Lh(e) {
		var r = xt(e);
		var t = e._R(1);
		return [r, t, "b"];
	}
	function Mh(e, r, t) {
		if (t == null) t = zr(9);
		yt(r, t);
		t._W(1, e.v ? 1 : 0);
		return t;
	}
	function Uh(e) {
		var r = xt(e);
		var t = e._R(1);
		return [r, t, "e"];
	}
	function Hh(e) {
		var r = xt(e);
		var t = e._R(4);
		return [r, t, "s"];
	}
	function Wh(e, r, t) {
		if (t == null) t = zr(12);
		yt(r, t);
		t._W(4, r.v);
		return t;
	}
	function Vh(e) {
		var r = xt(e);
		var t = Vt(e);
		return [r, t, "n"];
	}
	function zh(e, r, t) {
		if (t == null) t = zr(16);
		yt(r, t);
		zt(e.v, t);
		return t;
	}
	function Xh(e) {
		var r = xt(e);
		var t = Nt(e);
		return [r, t, "n"];
	}
	function Gh(e, r, t) {
		if (t == null) t = zr(12);
		yt(r, t);
		Lt(e.v, t);
		return t;
	}
	function jh(e) {
		var r = xt(e);
		var t = wt(e);
		return [r, t, "str"];
	}
	function Kh(e, r, t) {
		if (t == null) t = zr(12 + 4 * e.v.length);
		yt(r, t);
		Et(e.v, t);
		return t.length > t.l ? t.slice(0, t.l) : t;
	}
	function Yh(e, r, t) {
		var a = e.l + r;
		var n = xt(e);
		n.r = t["!row"];
		var i = e._R(1);
		var s = [n, i, "b"];
		if (t.cellFormula) {
			e.l += 2;
			var f = Du(e, a - e.l, t);
			s[3] = _u(f, null, n, t.supbooks, t);
		} else e.l = a;
		return s;
	}
	function $h(e, r, t) {
		var a = e.l + r;
		var n = xt(e);
		n.r = t["!row"];
		var i = e._R(1);
		var s = [n, i, "e"];
		if (t.cellFormula) {
			e.l += 2;
			var f = Du(e, a - e.l, t);
			s[3] = _u(f, null, n, t.supbooks, t);
		} else e.l = a;
		return s;
	}
	function Zh(e, r, t) {
		var a = e.l + r;
		var n = xt(e);
		n.r = t["!row"];
		var i = Vt(e);
		var s = [n, i, "n"];
		if (t.cellFormula) {
			e.l += 2;
			var f = Du(e, a - e.l, t);
			s[3] = _u(f, null, n, t.supbooks, t);
		} else e.l = a;
		return s;
	}
	function Qh(e, r, t) {
		var a = e.l + r;
		var n = xt(e);
		n.r = t["!row"];
		var i = wt(e);
		var s = [n, i, "str"];
		if (t.cellFormula) {
			e.l += 2;
			var f = Du(e, a - e.l, t);
			s[3] = _u(f, null, n, t.supbooks, t);
		} else e.l = a;
		return s;
	}
	var Jh = Ht;
	var qh = Wt;
	function ed(e, r) {
		if (r == null) r = zr(4);
		r._W(4, e);
		return r;
	}
	function rd(e, r) {
		var t = e.l + r;
		var a = Ht(e, 16);
		var n = Rt(e);
		var i = wt(e);
		var s = wt(e);
		var f = wt(e);
		e.l = t;
		var l = { rfx: a, relId: n, loc: i, display: f };
		if (s) l.Tooltip = s;
		return l;
	}
	function td(e, r) {
		var t = zr(50 + 4 * (e[1].Target.length + (e[1].Tooltip || "").length));
		Wt({ s: lt(e[0]), e: lt(e[0]) }, t);
		Pt("rId" + r, t);
		var a = e[1].Target.indexOf("#");
		var n = a == -1 ? "" : e[1].Target.slice(a + 1);
		Et(n || "", t);
		Et(e[1].Tooltip || "", t);
		Et("", t);
		return t.slice(0, t.l);
	}
	function ad(e, r, t) {
		var a = e.l + r;
		var n = Mt(e, 16);
		var i = e._R(1);
		var s = [n];
		s[2] = i;
		if (t.cellFormula) {
			var f = Ru(e, a - e.l, t);
			s[1] = f;
		} else e.l = a;
		return s;
	}
	function nd(e, r, t) {
		var a = e.l + r;
		var n = Ht(e, 16);
		var i = [n];
		if (t.cellFormula) {
			var s = Fu(e, a - e.l, t);
			i[1] = s;
			e.l = a;
		} else e.l = a;
		return i;
	}
	function id(e, r, t) {
		if (t == null) t = zr(18);
		var a = Ku(e, r);
		t._W(-4, e);
		t._W(-4, e);
		t._W(4, (a.width || 10) * 256);
		t._W(4, 0);
		var n = 0;
		if (r.hidden) n |= 1;
		if (typeof a.width == "number") n |= 2;
		t._W(1, n);
		t._W(1, 0);
		return t;
	}
	var sd = ["left", "right", "top", "bottom", "header", "footer"];
	function fd(e) {
		var r = {};
		sd.forEach(function (t) {
			r[t] = Vt(e, 8);
		});
		return r;
	}
	function ld(e, r) {
		if (r == null) r = zr(6 * 8);
		Yu(e);
		sd.forEach(function (t) {
			zt(e[t], r);
		});
		return r;
	}
	function od(e) {
		var r = e._R(2);
		e.l += 28;
		return { RTL: r & 32 };
	}
	function cd(e, r, t) {
		if (t == null) t = zr(30);
		var a = 924;
		if ((((r || {}).Views || [])[0] || {}).RTL) a |= 32;
		t._W(2, a);
		t._W(4, 0);
		t._W(4, 0);
		t._W(4, 0);
		t._W(1, 0);
		t._W(1, 0);
		t._W(2, 0);
		t._W(2, 100);
		t._W(2, 0);
		t._W(2, 0);
		t._W(2, 0);
		t._W(4, 0);
		return t;
	}
	function ud(e) {
		var r = zr(24);
		r._W(4, 4);
		r._W(4, 1);
		Wt(e, r);
		return r;
	}
	function hd(e, r) {
		if (r == null) r = zr(16 * 4 + 2);
		r._W(2, e.password ? Lf(e.password) : 0);
		r._W(4, 1);
		[
			["objects", false],
			["scenarios", false],
			["formatCells", true],
			["formatColumns", true],
			["formatRows", true],
			["insertColumns", true],
			["insertRows", true],
			["insertHyperlinks", true],
			["deleteColumns", true],
			["deleteRows", true],
			["selectLockedCells", false],
			["sort", true],
			["autoFilter", true],
			["pivotTables", true],
			["selectUnlockedCells", false],
		].forEach(function (t) {
			if (t[1]) r._W(4, e[t[0]] != null && !e[t[0]] ? 1 : 0);
			else r._W(4, e[t[0]] != null && e[t[0]] ? 0 : 1);
		});
		return r;
	}
	function dd(e, r, t, a, n, i, s) {
		if (!e) return e;
		var f = r || {};
		if (!a) a = { "!id": {} };
		if (p != null && f.dense == null) f.dense = p;
		var l = f.dense ? [] : {};
		var o;
		var c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
		var u = false,
			h = false;
		var d, v, m, b, g, w, E, k, S;
		var _ = [];
		f.biff = 12;
		f["!row"] = 0;
		var C = 0,
			B = false;
		var T = [];
		var x = {};
		var y = f.supbooks || [[]];
		y.sharedf = x;
		y.arrayf = T;
		y.SheetNames =
			n.SheetNames ||
			n.Sheets.map(function (e) {
				return e.name;
			});
		if (!f.supbooks) {
			f.supbooks = y;
			if (n.Names)
				for (var I = 0; I < n.Names.length; ++I) y[0][I + 1] = n.Names[I];
		}
		var A = [],
			D = [];
		var O = false;
		Xr(
			e,
			function P(e, r, p) {
				if (h) return;
				switch (p) {
					case 148:
						o = e;
						break;
					case 0:
						d = e;
						if (f.sheetRows && f.sheetRows <= d.r) h = true;
						k = et((b = d.r));
						f["!row"] = d.r;
						if (e.hidden || e.hpt || e.level != null) {
							if (e.hpt) e.hpx = ol(e.hpt);
							D[e.r] = e;
						}
						break;
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
					case 8:
					case 9:
					case 10:
					case 11:
						v = { t: e[2] };
						switch (e[2]) {
							case "n":
								v.v = e[1];
								break;
							case "s":
								E = zu[e[1]];
								v.v = E.t;
								v.r = E.r;
								break;
							case "b":
								v.v = e[1] ? true : false;
								break;
							case "e":
								v.v = e[1];
								if (f.cellText !== false) v.w = Xt[v.v];
								break;
							case "str":
								v.t = "s";
								v.v = e[1];
								break;
						}
						if ((m = s.CellXf[e[0].iStyleRef]))
							Zu(v, m.numFmtId, null, f, i, s);
						g = e[0].c;
						if (f.dense) {
							if (!l[b]) l[b] = [];
							l[b][g] = v;
						} else l[nt(g) + k] = v;
						if (f.cellFormula) {
							B = false;
							for (C = 0; C < T.length; ++C) {
								var I = T[C];
								if (d.r >= I[0].s.r && d.r <= I[0].e.r)
									if (g >= I[0].s.c && g <= I[0].e.c) {
										v.F = ut(I[0]);
										B = true;
									}
							}
							if (!B && e.length > 3) v.f = e[3];
						}
						if (c.s.r > d.r) c.s.r = d.r;
						if (c.s.c > g) c.s.c = g;
						if (c.e.r < d.r) c.e.r = d.r;
						if (c.e.c < g) c.e.c = g;
						if (
							f.cellDates &&
							m &&
							v.t == "n" &&
							R.is_date(R._table[m.numFmtId])
						) {
							var F = R.parse_date_code(v.v);
							if (F) {
								v.t = "d";
								v.v = new Date(F.y, F.m - 1, F.d, F.H, F.M, F.S, F.u);
							}
						}
						break;
					case 1:
						if (!f.sheetStubs || u) break;
						v = { t: "z", v: undefined };
						g = e[0].c;
						if (f.dense) {
							if (!l[b]) l[b] = [];
							l[b][g] = v;
						} else l[nt(g) + k] = v;
						if (c.s.r > d.r) c.s.r = d.r;
						if (c.s.c > g) c.s.c = g;
						if (c.e.r < d.r) c.e.r = d.r;
						if (c.e.c < g) c.e.c = g;
						break;
					case 176:
						_.push(e);
						break;
					case 494:
						var P = a["!id"][e.relId];
						if (P) {
							e.Target = P.Target;
							if (e.loc) e.Target += "#" + e.loc;
							e.Rel = P;
						} else if (e.relId == "") {
							e.Target = "#" + e.loc;
						}
						for (b = e.rfx.s.r; b <= e.rfx.e.r; ++b)
							for (g = e.rfx.s.c; g <= e.rfx.e.c; ++g) {
								if (f.dense) {
									if (!l[b]) l[b] = [];
									if (!l[b][g]) l[b][g] = { t: "z", v: undefined };
									l[b][g].l = e;
								} else {
									w = ot({ c: g, r: b });
									if (!l[w]) l[w] = { t: "z", v: undefined };
									l[w].l = e;
								}
							}
						break;
					case 426:
						if (!f.cellFormula) break;
						T.push(e);
						S = f.dense ? l[b][g] : l[nt(g) + k];
						S.f = _u(e[1], c, { r: d.r, c: g }, y, f);
						S.F = ut(e[0]);
						break;
					case 427:
						if (!f.cellFormula) break;
						x[ot(e[0].s)] = e[1];
						S = f.dense ? l[b][g] : l[nt(g) + k];
						S.f = _u(e[1], c, { r: d.r, c: g }, y, f);
						break;
					case 60:
						if (!f.cellStyles) break;
						while (e.e >= e.s) {
							A[e.e--] = { width: e.w / 256, hidden: !!(e.flags & 1) };
							if (!O) {
								O = true;
								nl(e.w / 256);
							}
							il(A[e.e + 1]);
						}
						break;
					case 161:
						l["!autofilter"] = { ref: ut(e) };
						break;
					case 476:
						l["!margins"] = e;
						break;
					case 147:
						if (!n.Sheets[t]) n.Sheets[t] = {};
						if (e.name) n.Sheets[t].CodeName = e.name;
						break;
					case 137:
						if (!n.Views) n.Views = [{}];
						if (!n.Views[0]) n.Views[0] = {};
						if (e.RTL) n.Views[0].RTL = true;
						break;
					case 485:
						break;
					case 175:
					case 644:
					case 625:
					case 562:
					case 396:
					case 1112:
					case 1146:
					case 471:
					case 1050:
					case 649:
					case 1105:
					case 49:
					case 589:
					case 607:
					case 564:
					case 1055:
					case 168:
					case 174:
					case 1180:
					case 499:
					case 64:
					case 1053:
					case 550:
					case 171:
					case 167:
					case 1177:
					case 169:
					case 1181:
					case 551:
					case 552:
					case 661:
					case 639:
					case 478:
					case 151:
					case 537:
					case 477:
					case 536:
					case 1103:
					case 680:
					case 1104:
					case 1024:
					case 152:
					case 663:
					case 535:
					case 678:
					case 504:
					case 1043:
					case 428:
					case 170:
					case 3072:
					case 50:
					case 2070:
					case 1045:
						break;
					case 35:
						u = true;
						break;
					case 36:
						u = false;
						break;
					case 37:
						break;
					case 38:
						break;
					default:
						if ((r || "").indexOf("Begin") > 0) {
						} else if ((r || "").indexOf("End") > 0) {
						} else if (!u || f.WTF)
							throw new Error("Unexpected record " + p + " " + r);
				}
			},
			f
		);
		delete f.supbooks;
		delete f["!row"];
		if (
			!l["!ref"] &&
			(c.s.r < 2e6 || (o && (o.e.r > 0 || o.e.c > 0 || o.s.r > 0 || o.s.c > 0)))
		)
			l["!ref"] = ut(o || c);
		if (f.sheetRows && l["!ref"]) {
			var F = ht(l["!ref"]);
			if (f.sheetRows <= +F.e.r) {
				F.e.r = f.sheetRows - 1;
				if (F.e.r > c.e.r) F.e.r = c.e.r;
				if (F.e.r < F.s.r) F.s.r = F.e.r;
				if (F.e.c > c.e.c) F.e.c = c.e.c;
				if (F.e.c < F.s.c) F.s.c = F.e.c;
				l["!fullref"] = l["!ref"];
				l["!ref"] = ut(F);
			}
		}
		if (_.length > 0) l["!merges"] = _;
		if (A.length > 0) l["!cols"] = A;
		if (D.length > 0) l["!rows"] = D;
		return l;
	}
	function vd(e, r, t, a, n, i) {
		if (r.v === undefined) return "";
		var s = "";
		switch (r.t) {
			case "b":
				s = r.v ? "1" : "0";
				break;
			case "d":
				r = ie(r);
				r.z = r.z || R._table[14];
				r.v = J(ae(r.v));
				r.t = "n";
				break;
			case "n":
			case "e":
				s = "" + r.v;
				break;
			default:
				s = r.v;
				break;
		}
		var f = { r: t, c: a };
		f.s = $u(n.cellXfs, r, n);
		if (r.l) i["!links"].push([ot(f), r.l]);
		if (r.c) i["!comments"].push([ot(f), r.c]);
		switch (r.t) {
			case "s":
			case "str":
				if (n.bookSST) {
					s = ju(n.Strings, r.v, n.revStrings);
					f.t = "s";
					f.v = s;
					jr(e, "BrtCellIsst", Wh(r, f));
				} else {
					f.t = "str";
					jr(e, "BrtCellSt", Kh(r, f));
				}
				return;
			case "n":
				if (r.v == (r.v | 0) && r.v > -1e3 && r.v < 1e3)
					jr(e, "BrtCellRk", Gh(r, f));
				else jr(e, "BrtCellReal", zh(r, f));
				return;
			case "b":
				f.t = "b";
				jr(e, "BrtCellBool", Mh(r, f));
				return;
			case "e":
				f.t = "e";
				break;
		}
		jr(e, "BrtCellBlank", Nh(r, f));
	}
	function pd(e, r, t, a) {
		var n = ht(r["!ref"] || "A1"),
			i,
			s = "",
			f = [];
		jr(e, "BrtBeginSheetData");
		var l = Array.isArray(r);
		var o = n.e.r;
		if (r["!rows"]) o = Math.max(n.e.r, r["!rows"].length - 1);
		for (var c = n.s.r; c <= o; ++c) {
			s = et(c);
			Ih(e, r, n, c);
			if (c <= n.e.r)
				for (var u = n.s.c; u <= n.e.c; ++u) {
					if (c === n.s.r) f[u] = nt(u);
					i = f[u] + s;
					var h = l ? (r[c] || [])[u] : r[i];
					if (!h) continue;
					vd(e, h, c, u, a, r);
				}
		}
		jr(e, "BrtEndSheetData");
	}
	function md(e, r) {
		if (!r || !r["!merges"]) return;
		jr(e, "BrtBeginMergeCells", ed(r["!merges"].length));
		r["!merges"].forEach(function (r) {
			jr(e, "BrtMergeCell", qh(r));
		});
		jr(e, "BrtEndMergeCells");
	}
	function bd(e, r) {
		if (!r || !r["!cols"]) return;
		jr(e, "BrtBeginColInfos");
		r["!cols"].forEach(function (r, t) {
			if (r) jr(e, "BrtColInfo", id(t, r));
		});
		jr(e, "BrtEndColInfos");
	}
	function gd(e, r) {
		if (!r || !r["!ref"]) return;
		jr(e, "BrtBeginCellIgnoreECs");
		jr(e, "BrtCellIgnoreEC", ud(ht(r["!ref"])));
		jr(e, "BrtEndCellIgnoreECs");
	}
	function wd(e, r, t) {
		r["!links"].forEach(function (r) {
			if (!r[1].Target) return;
			var a = Fa(t, -1, r[1].Target.replace(/#.*$/, ""), Ia.HLINK);
			jr(e, "BrtHLink", td(r, a));
		});
		delete r["!links"];
	}
	function Ed(e, r, t, a) {
		if (r["!comments"].length > 0) {
			var n = Fa(a, -1, "../drawings/vmlDrawing" + (t + 1) + ".vml", Ia.VML);
			jr(e, "BrtLegacyDrawing", Pt("rId" + n));
			r["!legacy"] = n;
		}
	}
	function kd(e, r) {
		if (!r["!autofilter"]) return;
		jr(e, "BrtBeginAFilter", Wt(ht(r["!autofilter"].ref)));
		jr(e, "BrtEndAFilter");
	}
	function Sd(e, r, t) {
		jr(e, "BrtBeginWsViews");
		{
			jr(e, "BrtBeginWsView", cd(r, t));
			jr(e, "BrtEndWsView");
		}
		jr(e, "BrtEndWsViews");
	}
	function _d() {}
	function Cd(e, r) {
		if (!r["!protect"]) return;
		jr(e, "BrtSheetProtection", hd(r["!protect"]));
	}
	function Bd(e, r, t, a) {
		var n = Gr();
		var i = t.SheetNames[e],
			s = t.Sheets[i] || {};
		var f = i;
		try {
			if (t && t.Workbook) f = t.Workbook.Sheets[e].CodeName || f;
		} catch (l) {}
		var o = ht(s["!ref"] || "A1");
		if (o.e.c > 16383 || o.e.r > 1048575) {
			if (r.WTF)
				throw new Error(
					"Range " + (s["!ref"] || "A1") + " exceeds format limit A1:XFD1048576"
				);
			o.e.c = Math.min(o.e.c, 16383);
			o.e.r = Math.min(o.e.c, 1048575);
		}
		s["!links"] = [];
		s["!comments"] = [];
		jr(n, "BrtBeginSheet");
		if (t.vbaraw) jr(n, "BrtWsProp", Fh(f));
		jr(n, "BrtWsDim", Rh(o));
		Sd(n, s, t.Workbook);
		_d(n, s);
		bd(n, s, e, r, t);
		pd(n, s, e, r, t);
		Cd(n, s);
		kd(n, s);
		md(n, s);
		wd(n, s, a);
		if (s["!margins"]) jr(n, "BrtMargins", ld(s["!margins"]));
		if (!r || r.ignoreEC || r.ignoreEC == void 0) gd(n, s);
		Ed(n, s, e, a);
		jr(n, "BrtEndSheet");
		return n.end();
	}
	function Td(e) {
		var r = [];
		(e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (e) {
			var t = e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
			if (!t) return;
			r[+t[1]] = +t[2];
		});
		var t = Ae(
			(e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || [
				"",
				"General",
			])[1]
		);
		return [r, t];
	}
	function xd(e, r, t, a, n, i) {
		var s = i || { "!type": "chart" };
		if (!e) return i;
		var f = 0,
			l = 0,
			o = "A";
		var c = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
		(e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (
			e
		) {
			var r = Td(e);
			c.s.r = c.s.c = 0;
			c.e.c = f;
			o = nt(f);
			r[0].forEach(function (e, t) {
				s[o + et(t)] = { t: "n", v: e, z: r[1] };
				l = t;
			});
			if (c.e.r < l) c.e.r = l;
			++f;
		});
		if (f > 0) s["!ref"] = ut(c);
		return s;
	}
	Ia.CS =
		"http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
	var yd = rr("chartsheet", null, { xmlns: nr.main[0], "xmlns:r": nr.r });
	function Id(e, r, t, a, n) {
		if (!e) return e;
		if (!a) a = { "!id": {} };
		var i = { "!type": "chart", "!chart": null, "!rel": "" };
		var s;
		var f = e.match(sh);
		if (f) ch(f[0], i, n, t);
		if ((s = e.match(/drawing r:id="(.*?)"/))) i["!rel"] = s[1];
		if (a["!id"][i["!rel"]]) i["!chart"] = a["!id"][i["!rel"]];
		return i;
	}
	function Ad(e, r, t, a) {
		var n = [ke, yd];
		n[n.length] = rr("drawing", null, { "r:id": "rId1" });
		Fa(a, -1, "../drawings/drawing" + (e + 1) + ".xml", Ia.DRAW);
		if (n.length > 2) {
			n[n.length] = "</chartsheet>";
			n[1] = n[1].replace("/>", ">");
		}
		return n.join("");
	}
	function Rd(e, r) {
		e.l += 10;
		var t = wt(e, r - 10);
		return { name: t };
	}
	function Dd(e, r, t, a, n) {
		if (!e) return e;
		if (!a) a = { "!id": {} };
		var i = { "!type": "chart", "!chart": null, "!rel": "" };
		var s = [];
		var f = false;
		Xr(
			e,
			function l(e, a, o) {
				switch (o) {
					case 550:
						i["!rel"] = e;
						break;
					case 651:
						if (!n.Sheets[t]) n.Sheets[t] = {};
						if (e.name) n.Sheets[t].CodeName = e.name;
						break;
					case 562:
					case 652:
					case 669:
					case 679:
					case 551:
					case 552:
					case 476:
					case 3072:
						break;
					case 35:
						f = true;
						break;
					case 36:
						f = false;
						break;
					case 37:
						s.push(a);
						break;
					case 38:
						s.pop();
						break;
					default:
						if ((a || "").indexOf("Begin") > 0) s.push(a);
						else if ((a || "").indexOf("End") > 0) s.pop();
						else if (!f || r.WTF)
							throw new Error("Unexpected record " + o + " " + a);
				}
			},
			r
		);
		if (a["!id"][i["!rel"]]) i["!chart"] = a["!id"][i["!rel"]];
		return i;
	}
	function Od() {
		var e = Gr();
		jr(e, "BrtBeginSheet");
		jr(e, "BrtEndSheet");
		return e.end();
	}
	var Fd = [
		["allowRefreshQuery", false, "bool"],
		["autoCompressPictures", true, "bool"],
		["backupFile", false, "bool"],
		["checkCompatibility", false, "bool"],
		["CodeName", ""],
		["date1904", false, "bool"],
		["defaultThemeVersion", 0, "int"],
		["filterPrivacy", false, "bool"],
		["hidePivotFieldList", false, "bool"],
		["promptedSolutions", false, "bool"],
		["publishItems", false, "bool"],
		["refreshAllConnections", false, "bool"],
		["saveExternalLinkValues", true, "bool"],
		["showBorderUnselectedTables", true, "bool"],
		["showInkAnnotation", true, "bool"],
		["showObjects", "all"],
		["showPivotChartFilter", false, "bool"],
		["updateLinks", "userSet"],
	];
	var Pd = [
		["activeTab", 0, "int"],
		["autoFilterDateGrouping", true, "bool"],
		["firstSheet", 0, "int"],
		["minimized", false, "bool"],
		["showHorizontalScroll", true, "bool"],
		["showSheetTabs", true, "bool"],
		["showVerticalScroll", true, "bool"],
		["tabRatio", 600, "int"],
		["visibility", "visible"],
	];
	var Nd = [];
	var Ld = [
		["calcCompleted", "true"],
		["calcMode", "auto"],
		["calcOnSave", "true"],
		["concurrentCalc", "true"],
		["fullCalcOnLoad", "false"],
		["fullPrecision", "true"],
		["iterate", "false"],
		["iterateCount", "100"],
		["iterateDelta", "0.001"],
		["refMode", "A1"],
	];
	function Md(e, r) {
		for (var t = 0; t != e.length; ++t) {
			var a = e[t];
			for (var n = 0; n != r.length; ++n) {
				var i = r[n];
				if (a[i[0]] == null) a[i[0]] = i[1];
				else
					switch (i[2]) {
						case "bool":
							if (typeof a[i[0]] == "string") a[i[0]] = He(a[i[0]]);
							break;
						case "int":
							if (typeof a[i[0]] == "string") a[i[0]] = parseInt(a[i[0]], 10);
							break;
					}
			}
		}
	}
	function Ud(e, r) {
		for (var t = 0; t != r.length; ++t) {
			var a = r[t];
			if (e[a[0]] == null) e[a[0]] = a[1];
			else
				switch (a[2]) {
					case "bool":
						if (typeof e[a[0]] == "string") e[a[0]] = He(e[a[0]]);
						break;
					case "int":
						if (typeof e[a[0]] == "string") e[a[0]] = parseInt(e[a[0]], 10);
						break;
				}
		}
	}
	function Hd(e) {
		Ud(e.WBProps, Fd);
		Ud(e.CalcPr, Ld);
		Md(e.WBView, Pd);
		Md(e.Sheets, Nd);
		Xu.date1904 = He(e.WBProps.date1904);
	}
	function Wd(e) {
		if (!e.Workbook) return "false";
		if (!e.Workbook.WBProps) return "false";
		return He(e.Workbook.WBProps.date1904) ? "true" : "false";
	}
	var Vd = "][*?/\\".split("");
	function zd(e, r) {
		if (e.length > 31) {
			if (r) return false;
			throw new Error("Sheet names cannot exceed 31 chars");
		}
		var t = true;
		Vd.forEach(function (a) {
			if (e.indexOf(a) == -1) return;
			if (!r) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
			t = false;
		});
		return t;
	}
	function Xd(e, r, t) {
		e.forEach(function (a, n) {
			zd(a);
			for (var i = 0; i < n; ++i)
				if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
			if (t) {
				var s = (r && r[n] && r[n].CodeName) || a;
				if (s.charCodeAt(0) == 95 && s.length > 22)
					throw new Error("Bad Code Name: Worksheet" + s);
			}
		});
	}
	function Gd(e) {
		if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
		if (!e.SheetNames.length) throw new Error("Workbook is empty");
		var r = (e.Workbook && e.Workbook.Sheets) || [];
		Xd(e.SheetNames, r, !!e.vbaraw);
		for (var t = 0; t < e.SheetNames.length; ++t)
			Qu(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
	}
	var jd = /<\w+:workbook/;
	function Kd(e, r) {
		if (!e) throw new Error("Could not find file");
		var t = {
			AppVersion: {},
			WBProps: {},
			WBView: [],
			Sheets: [],
			CalcPr: {},
			Names: [],
			xmlns: "",
		};
		var a = false,
			n = "xmlns";
		var i = {},
			s = 0;
		e.replace(_e, function f(l, o) {
			var c = Te(l);
			switch (xe(c[0])) {
				case "<?xml":
					break;
				case "<workbook":
					if (l.match(jd)) n = "xmlns" + l.match(/<(\w+):/)[1];
					t.xmlns = c[n];
					break;
				case "</workbook>":
					break;
				case "<fileVersion":
					delete c[0];
					t.AppVersion = c;
					break;
				case "<fileVersion/>":
				case "</fileVersion>":
					break;
				case "<fileSharing":
				case "<fileSharing/>":
					break;
				case "<workbookPr":
				case "<workbookPr/>":
					Fd.forEach(function (e) {
						if (c[e[0]] == null) return;
						switch (e[2]) {
							case "bool":
								t.WBProps[e[0]] = He(c[e[0]]);
								break;
							case "int":
								t.WBProps[e[0]] = parseInt(c[e[0]], 10);
								break;
							default:
								t.WBProps[e[0]] = c[e[0]];
						}
					});
					if (c.codeName) t.WBProps.CodeName = c.codeName;
					break;
				case "</workbookPr>":
					break;
				case "<workbookProtection":
					break;
				case "<workbookProtection/>":
					break;
				case "<bookViews":
				case "<bookViews>":
				case "</bookViews>":
					break;
				case "<workbookView":
				case "<workbookView/>":
					delete c[0];
					t.WBView.push(c);
					break;
				case "</workbookView>":
					break;
				case "<sheets":
				case "<sheets>":
				case "</sheets>":
					break;
				case "<sheet":
					switch (c.state) {
						case "hidden":
							c.Hidden = 1;
							break;
						case "veryHidden":
							c.Hidden = 2;
							break;
						default:
							c.Hidden = 0;
					}
					delete c.state;
					c.name = Ae(We(c.name));
					delete c[0];
					t.Sheets.push(c);
					break;
				case "</sheet>":
					break;
				case "<functionGroups":
				case "<functionGroups/>":
					break;
				case "<functionGroup":
					break;
				case "<externalReferences":
				case "</externalReferences>":
				case "<externalReferences>":
					break;
				case "<externalReference":
					break;
				case "<definedNames/>":
					break;
				case "<definedNames>":
				case "<definedNames":
					a = true;
					break;
				case "</definedNames>":
					a = false;
					break;
				case "<definedName":
					{
						i = {};
						i.Name = c.name;
						if (c.comment) i.Comment = c.comment;
						if (c.localSheetId) i.Sheet = +c.localSheetId;
						s = o + l.length;
					}
					break;
				case "</definedName>":
					{
						i.Ref = e.slice(s, o);
						t.Names.push(i);
					}
					break;
				case "<definedName/>":
					break;
				case "<calcPr":
					delete c[0];
					t.CalcPr = c;
					break;
				case "<calcPr/>":
					delete c[0];
					t.CalcPr = c;
					break;
				case "</calcPr>":
					break;
				case "<oleSize":
					break;
				case "<customWorkbookViews>":
				case "</customWorkbookViews>":
				case "<customWorkbookViews":
					break;
				case "<customWorkbookView":
				case "</customWorkbookView>":
					break;
				case "<pivotCaches>":
				case "</pivotCaches>":
				case "<pivotCaches":
					break;
				case "<pivotCache":
					break;
				case "<smartTagPr":
				case "<smartTagPr/>":
					break;
				case "<smartTagTypes":
				case "<smartTagTypes>":
				case "</smartTagTypes>":
					break;
				case "<smartTagType":
					break;
				case "<webPublishing":
				case "<webPublishing/>":
					break;
				case "<fileRecoveryPr":
				case "<fileRecoveryPr/>":
					break;
				case "<webPublishObjects>":
				case "<webPublishObjects":
				case "</webPublishObjects>":
					break;
				case "<webPublishObject":
					break;
				case "<extLst":
				case "<extLst>":
				case "</extLst>":
				case "<extLst/>":
					break;
				case "<ext":
					a = true;
					break;
				case "</ext>":
					a = false;
					break;
				case "<ArchID":
					break;
				case "<AlternateContent":
				case "<AlternateContent>":
					a = true;
					break;
				case "</AlternateContent>":
					a = false;
					break;
				case "<revisionPtr":
					break;
				default:
					if (!a && r.WTF)
						throw new Error("unrecognized " + c[0] + " in workbook");
			}
			return l;
		});
		if (nr.main.indexOf(t.xmlns) === -1)
			throw new Error("Unknown Namespace: " + t.xmlns);
		Hd(t);
		return t;
	}
	var Yd = rr("workbook", null, { xmlns: nr.main[0], "xmlns:r": nr.r });
	function $d(e) {
		var r = [ke];
		r[r.length] = Yd;
		var t = e.Workbook && (e.Workbook.Names || []).length > 0;
		var a = { codeName: "ThisWorkbook" };
		if (e.Workbook && e.Workbook.WBProps) {
			Fd.forEach(function (r) {
				if (e.Workbook.WBProps[r[0]] == null) return;
				if (e.Workbook.WBProps[r[0]] == r[1]) return;
				a[r[0]] = e.Workbook.WBProps[r[0]];
			});
			if (e.Workbook.WBProps.CodeName) {
				a.codeName = e.Workbook.WBProps.CodeName;
				delete a.CodeName;
			}
		}
		r[r.length] = rr("workbookPr", null, a);
		r[r.length] = "<sheets>";
		var n = (e.Workbook && e.Workbook.Sheets) || [];
		for (var i = 0; i != e.SheetNames.length; ++i) {
			var s = { name: Oe(e.SheetNames[i].slice(0, 31)) };
			s.sheetId = "" + (i + 1);
			s["r:id"] = "rId" + (i + 1);
			if (n[i])
				switch (n[i].Hidden) {
					case 1:
						s.state = "hidden";
						break;
					case 2:
						s.state = "veryHidden";
						break;
				}
			r[r.length] = rr("sheet", null, s);
		}
		r[r.length] = "</sheets>";
		if (t) {
			r[r.length] = "<definedNames>";
			if (e.Workbook && e.Workbook.Names)
				e.Workbook.Names.forEach(function (e) {
					var t = { name: e.Name };
					if (e.Comment) t.comment = e.Comment;
					if (e.Sheet != null) t.localSheetId = "" + e.Sheet;
					if (!e.Ref) return;
					r[r.length] = rr("definedName", String(e.Ref), t);
				});
			r[r.length] = "</definedNames>";
		}
		if (r.length > 2) {
			r[r.length] = "</workbook>";
			r[1] = r[1].replace("/>", ">");
		}
		return r.join("");
	}
	function Zd(e, r) {
		var t = {};
		t.Hidden = e._R(4);
		t.iTabID = e._R(4);
		t.strRelID = Ft(e, r - 8);
		t.name = wt(e);
		return t;
	}
	function Qd(e, r) {
		if (!r) r = zr(127);
		r._W(4, e.Hidden);
		r._W(4, e.iTabID);
		Pt(e.strRelID, r);
		Et(e.name.slice(0, 31), r);
		return r.length > r.l ? r.slice(0, r.l) : r;
	}
	function Jd(e, r) {
		var t = {};
		var a = e._R(4);
		t.defaultThemeVersion = e._R(4);
		var n = r > 8 ? wt(e) : "";
		if (n.length > 0) t.CodeName = n;
		t.autoCompressPictures = !!(a & 65536);
		t.backupFile = !!(a & 64);
		t.checkCompatibility = !!(a & 4096);
		t.date1904 = !!(a & 1);
		t.filterPrivacy = !!(a & 8);
		t.hidePivotFieldList = !!(a & 1024);
		t.promptedSolutions = !!(a & 16);
		t.publishItems = !!(a & 2048);
		t.refreshAllConnections = !!(a & 262144);
		t.saveExternalLinkValues = !!(a & 128);
		t.showBorderUnselectedTables = !!(a & 4);
		t.showInkAnnotation = !!(a & 32);
		t.showObjects = ["all", "placeholders", "none"][(a >> 13) & 3];
		t.showPivotChartFilter = !!(a & 32768);
		t.updateLinks = ["userSet", "never", "always"][(a >> 8) & 3];
		return t;
	}
	function qd(e, r) {
		if (!r) r = zr(72);
		var t = 0;
		if (e) {
			if (e.filterPrivacy) t |= 8;
		}
		r._W(4, t);
		r._W(4, 0);
		At((e && e.CodeName) || "ThisWorkbook", r);
		return r.slice(0, r.l);
	}
	function ev(e, r) {
		var t = {};
		e._R(4);
		t.ArchID = e._R(4);
		e.l += r - 8;
		return t;
	}
	function rv(e, r, t) {
		var a = e.l + r;
		e.l += 4;
		e.l += 1;
		var n = e._R(4);
		var i = Ot(e);
		var s = Ou(e, 0, t);
		var f = Rt(e);
		e.l = a;
		var l = { Name: i, Ptg: s };
		if (n < 268435455) l.Sheet = n;
		if (f) l.Comment = f;
		return l;
	}
	function tv(e, r) {
		var t = {
			AppVersion: {},
			WBProps: {},
			WBView: [],
			Sheets: [],
			CalcPr: {},
			xmlns: "",
		};
		var a = false;
		if (!r) r = {};
		r.biff = 12;
		var n = [];
		var i = [[]];
		i.SheetNames = [];
		i.XTI = [];
		Xr(
			e,
			function s(e, f, l) {
				switch (l) {
					case 156:
						i.SheetNames.push(e.name);
						t.Sheets.push(e);
						break;
					case 153:
						t.WBProps = e;
						break;
					case 39:
						if (e.Sheet != null) r.SID = e.Sheet;
						e.Ref = _u(e.Ptg, null, null, i, r);
						delete r.SID;
						delete e.Ptg;
						n.push(e);
						break;
					case 1036:
						break;
					case 357:
					case 358:
					case 355:
					case 667:
						if (!i[0].length) i[0] = [l, e];
						else i.push([l, e]);
						i[i.length - 1].XTI = [];
						break;
					case 362:
						if (i.length === 0) {
							i[0] = [];
							i[0].XTI = [];
						}
						i[i.length - 1].XTI = i[i.length - 1].XTI.concat(e);
						i.XTI = i.XTI.concat(e);
						break;
					case 361:
						break;
					case 3072:
					case 3073:
					case 2071:
					case 534:
					case 677:
					case 158:
					case 157:
					case 610:
					case 2050:
					case 155:
					case 548:
					case 676:
					case 128:
					case 665:
					case 2128:
					case 2125:
					case 549:
					case 2053:
					case 596:
					case 2076:
					case 2075:
					case 2082:
					case 397:
					case 154:
					case 1117:
					case 553:
					case 2091:
						break;
					case 35:
						a = true;
						break;
					case 36:
						a = false;
						break;
					case 37:
						break;
					case 38:
						break;
					case 16:
						break;
					default:
						if ((f || "").indexOf("Begin") > 0) {
						} else if ((f || "").indexOf("End") > 0) {
						} else if (!a || r.WTF)
							throw new Error("Unexpected record " + l + " " + f);
				}
			},
			r
		);
		Hd(t);
		t.Names = n;
		t.supbooks = i;
		return t;
	}
	function av(e, r) {
		jr(e, "BrtBeginBundleShs");
		for (var t = 0; t != r.SheetNames.length; ++t) {
			var a =
				(r.Workbook &&
					r.Workbook.Sheets &&
					r.Workbook.Sheets[t] &&
					r.Workbook.Sheets[t].Hidden) ||
				0;
			var n = {
				Hidden: a,
				iTabID: t + 1,
				strRelID: "rId" + (t + 1),
				name: r.SheetNames[t],
			};
			jr(e, "BrtBundleSh", Qd(n));
		}
		jr(e, "BrtEndBundleShs");
	}
	function nv(r, t) {
		if (!t) t = zr(127);
		for (var a = 0; a != 4; ++a) t._W(4, 0);
		Et("SheetJS", t);
		Et(e.version, t);
		Et(e.version, t);
		Et("7262", t);
		t.length = t.l;
		return t.length > t.l ? t.slice(0, t.l) : t;
	}
	function iv(e, r) {
		if (!r) r = zr(29);
		r._W(-4, 0);
		r._W(-4, 460);
		r._W(4, 28800);
		r._W(4, 17600);
		r._W(4, 500);
		r._W(4, e);
		r._W(4, e);
		var t = 120;
		r._W(1, t);
		return r.length > r.l ? r.slice(0, r.l) : r;
	}
	function sv(e, r) {
		if (!r.Workbook || !r.Workbook.Sheets) return;
		var t = r.Workbook.Sheets;
		var a = 0,
			n = -1,
			i = -1;
		for (; a < t.length; ++a) {
			if (!t[a] || (!t[a].Hidden && n == -1)) n = a;
			else if (t[a].Hidden == 1 && i == -1) i = a;
		}
		if (i > n) return;
		jr(e, "BrtBeginBookViews");
		jr(e, "BrtBookView", iv(n));
		jr(e, "BrtEndBookViews");
	}
	function fv(e, r) {
		var t = Gr();
		jr(t, "BrtBeginBook");
		jr(t, "BrtFileVersion", nv());
		jr(t, "BrtWbProp", qd((e.Workbook && e.Workbook.WBProps) || null));
		sv(t, e, r);
		av(t, e, r);
		jr(t, "BrtEndBook");
		return t.end();
	}
	function lv(e, r, t) {
		if (r.slice(-4) === ".bin") return tv(e, t);
		return Kd(e, t);
	}
	function ov(e, r, t, a, n, i, s, f) {
		if (r.slice(-4) === ".bin") return dd(e, a, t, n, i, s, f);
		return lh(e, a, t, n, i, s, f);
	}
	function cv(e, r, t, a, n, i, s, f) {
		if (r.slice(-4) === ".bin") return Dd(e, a, t, n, i, s, f);
		return Id(e, a, t, n, i, s, f);
	}
	function uv(e, r, t, a, n, i, s, f) {
		if (r.slice(-4) === ".bin") return Ho(e, a, t, n, i, s, f);
		return Wo(e, a, t, n, i, s, f);
	}
	function hv(e, r, t, a, n, i, s, f) {
		if (r.slice(-4) === ".bin") return Mo(e, a, t, n, i, s, f);
		return Uo(e, a, t, n, i, s, f);
	}
	function dv(e, r, t, a) {
		if (r.slice(-4) === ".bin") return Ml(e, t, a);
		return El(e, t, a);
	}
	function vv(e, r, t) {
		return no(e, t);
	}
	function pv(e, r, t) {
		if (r.slice(-4) === ".bin") return bf(e, t);
		return df(e, t);
	}
	function mv(e, r, t) {
		if (r.slice(-4) === ".bin") return Do(e, t);
		return Bo(e, t);
	}
	function bv(e, r, t) {
		if (r.slice(-4) === ".bin") return bo(e, r, t);
		return po(e, r, t);
	}
	function gv(e, r, t) {
		if (r.slice(-4) === ".bin") return wo(e, r, t);
		return go(e, r, t);
	}
	function wv(e, r, t) {
		return (r.slice(-4) === ".bin" ? fv : $d)(e, t);
	}
	function Ev(e, r, t, a, n) {
		return (r.slice(-4) === ".bin" ? Bd : Th)(e, t, a, n);
	}
	function kv(e, r, t, a, n) {
		return (r.slice(-4) === ".bin" ? Od : Ad)(e, t, a, n);
	}
	function Sv(e, r, t) {
		return (r.slice(-4) === ".bin" ? $l : Sl)(e, t);
	}
	function _v(e, r, t) {
		return (r.slice(-4) === ".bin" ? Ef : pf)(e, t);
	}
	function Cv(e, r, t) {
		return (r.slice(-4) === ".bin" ? Oo : xo)(e, t);
	}
	var Bv = /([\w:]+)=((?:")([^"]*)(?:")|(?:')([^']*)(?:'))/g;
	var Tv = /([\w:]+)=((?:")(?:[^"]*)(?:")|(?:')(?:[^']*)(?:'))/;
	var xv = function (e) {
		return String.fromCharCode(e);
	};
	function yv(e, r) {
		var t = e.split(/\s+/);
		var a = [];
		if (!r) a[0] = t[0];
		if (t.length === 1) return a;
		var n = e.match(Bv),
			i,
			s,
			f,
			l;
		if (n)
			for (l = 0; l != n.length; ++l) {
				i = n[l].match(Tv);
				if ((s = i[1].indexOf(":")) === -1)
					a[i[1]] = i[2].slice(1, i[2].length - 1);
				else {
					if (i[1].slice(0, 6) === "xmlns:") f = "xmlns" + i[1].slice(6);
					else f = i[1].slice(s + 1);
					a[f] = i[2].slice(1, i[2].length - 1);
				}
			}
		return a;
	}
	function Iv(e) {
		var r = e.split(/\s+/);
		var t = {};
		if (r.length === 1) return t;
		var a = e.match(Bv),
			n,
			i,
			s,
			f;
		if (a)
			for (f = 0; f != a.length; ++f) {
				n = a[f].match(Tv);
				if ((i = n[1].indexOf(":")) === -1)
					t[n[1]] = n[2].slice(1, n[2].length - 1);
				else {
					if (n[1].slice(0, 6) === "xmlns:") s = "xmlns" + n[1].slice(6);
					else s = n[1].slice(i + 1);
					t[s] = n[2].slice(1, n[2].length - 1);
				}
			}
		return t;
	}
	function Av(e, r) {
		var t = O[e] || Ae(e);
		if (t === "General") return R._general(r);
		return R.format(t, r);
	}
	function Rv(e, r, t, a) {
		var n = a;
		switch ((t[0].match(/dt:dt="([\w.]+)"/) || ["", ""])[1]) {
			case "boolean":
				n = He(a);
				break;
			case "i2":
			case "int":
				n = parseInt(a, 10);
				break;
			case "r4":
			case "float":
				n = parseFloat(a);
				break;
			case "date":
			case "dateTime.tz":
				n = ae(a);
				break;
			case "i8":
			case "string":
			case "fixed":
			case "uuid":
			case "bin.base64":
				break;
			default:
				throw new Error("bad custprop:" + t[0]);
		}
		e[Ae(r)] = n;
	}
	function Dv(e, r, t) {
		if (e.t === "z") return;
		if (!t || t.cellText !== false)
			try {
				if (e.t === "e") {
					e.w = e.w || Xt[e.v];
				} else if (r === "General") {
					if (e.t === "n") {
						if ((e.v | 0) === e.v) e.w = R._general_int(e.v);
						else e.w = R._general_num(e.v);
					} else e.w = R._general(e.v);
				} else e.w = Av(r || "General", e.v);
			} catch (a) {
				if (t.WTF) throw a;
			}
		try {
			var n = O[r] || r || "General";
			if (t.cellNF) e.z = n;
			if (t.cellDates && e.t == "n" && R.is_date(n)) {
				var i = R.parse_date_code(e.v);
				if (i) {
					e.t = "d";
					e.v = new Date(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u);
				}
			}
		} catch (a) {
			if (t.WTF) throw a;
		}
	}
	function Ov(e, r, t) {
		if (t.cellStyles) {
			if (r.Interior) {
				var a = r.Interior;
				if (a.Pattern) a.patternType = cl[a.Pattern] || a.Pattern;
			}
		}
		e[r.ID] = r;
	}
	function Fv(e, r, t, a, n, i, s, f, l, o) {
		var c = "General",
			u = a.StyleID,
			h = {};
		o = o || {};
		var d = [];
		var v = 0;
		if (u === undefined && f) u = f.StyleID;
		if (u === undefined && s) u = s.StyleID;
		while (i[u] !== undefined) {
			if (i[u].nf) c = i[u].nf;
			if (i[u].Interior) d.push(i[u].Interior);
			if (!i[u].Parent) break;
			u = i[u].Parent;
		}
		switch (t.Type) {
			case "Boolean":
				a.t = "b";
				a.v = He(e);
				break;
			case "String":
				a.t = "s";
				a.r = Me(Ae(e));
				a.v = e.indexOf("<") > -1 ? Ae(r) : a.r;
				break;
			case "DateTime":
				if (e.slice(-1) != "Z") e += "Z";
				a.v = (ae(e) - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1e3);
				if (a.v !== a.v) a.v = Ae(e);
				else if (a.v < 60) a.v = a.v - 1;
				if (!c || c == "General") c = "yyyy-mm-dd";
			case "Number":
				if (a.v === undefined) a.v = +e;
				if (!a.t) a.t = "n";
				break;
			case "Error":
				a.t = "e";
				a.v = Gt[e];
				if (o.cellText !== false) a.w = e;
				break;
			default:
				a.t = "s";
				a.v = Me(r || e);
				break;
		}
		Dv(a, c, o);
		if (o.cellFormula !== false) {
			if (a.Formula) {
				var p = Ae(a.Formula);
				if (p.charCodeAt(0) == 61) p = p.slice(1);
				a.f = Vo(p, n);
				delete a.Formula;
				if (a.ArrayRange == "RC") a.F = Vo("RC:RC", n);
				else if (a.ArrayRange) {
					a.F = Vo(a.ArrayRange, n);
					l.push([ht(a.F), a.F]);
				}
			} else {
				for (v = 0; v < l.length; ++v)
					if (n.r >= l[v][0].s.r && n.r <= l[v][0].e.r)
						if (n.c >= l[v][0].s.c && n.c <= l[v][0].e.c) a.F = l[v][1];
			}
		}
		if (o.cellStyles) {
			d.forEach(function (e) {
				if (!h.patternType && e.patternType) h.patternType = e.patternType;
			});
			a.s = h;
		}
		if (a.StyleID !== undefined) a.ixfe = a.StyleID;
	}
	function Pv(e) {
		e.t = e.v || "";
		e.t = e.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
		e.v = e.w = e.ixfe = undefined;
	}
	function Nv(e) {
		if (g && Buffer.isBuffer(e)) return e.toString("utf8");
		if (typeof e === "string") return e;
		if (typeof Uint8Array !== "undefined" && e instanceof Uint8Array)
			return We(B(x(e)));
		throw new Error("Bad input format: expected Buffer or string");
	}
	var Lv = /<(\/?)([^\s?>!\/:]*:|)([^\s?>:\/]+)[^>]*>/gm;
	function Mv(e, r) {
		var t = r || {};
		D(R);
		var a = d(Nv(e));
		if (t.type == "binary" || t.type == "array" || t.type == "base64") {
			if (typeof cptable !== "undefined") a = cptable.utils.decode(65001, c(a));
			else a = We(a);
		}
		var n = a.slice(0, 1024).toLowerCase(),
			i = false;
		if (n.indexOf("<?xml") == -1)
			["html", "table", "head", "meta", "script", "style", "div"].forEach(
				function (e) {
					if (n.indexOf("<" + e) >= 0) i = true;
				}
			);
		if (i) return Ap.to_workbook(a, t);
		var s;
		var f = [],
			l;
		if (p != null && t.dense == null) t.dense = p;
		var o = {},
			u = [],
			h = t.dense ? [] : {},
			v = "";
		var m = {},
			b = {},
			g = {};
		var w = yv('<Data ss:Type="String">'),
			E = 0;
		var k = 0,
			S = 0;
		var _ = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
		var C = {},
			B = {};
		var T = "",
			x = 0;
		var y = [];
		var I = {},
			A = {},
			F = 0,
			P = [];
		var N = [],
			L = {};
		var M = [],
			U,
			H = false;
		var W = [];
		var V = [],
			z = {},
			X = 0,
			G = 0;
		var j = { Sheets: [], WBProps: { date1904: false } },
			K = {};
		Lv.lastIndex = 0;
		a = a.replace(/<!--([\s\S]*?)-->/gm, "");
		while ((s = Lv.exec(a)))
			switch (s[3]) {
				case "Data":
					if (f[f.length - 1][1]) break;
					if (s[1] === "/")
						Fv(
							a.slice(E, s.index),
							T,
							w,
							f[f.length - 1][0] == "Comment" ? L : b,
							{ c: k, r: S },
							C,
							M[k],
							g,
							W,
							t
						);
					else {
						T = "";
						w = yv(s[0]);
						E = s.index + s[0].length;
					}
					break;
				case "Cell":
					if (s[1] === "/") {
						if (N.length > 0) b.c = N;
						if ((!t.sheetRows || t.sheetRows > S) && b.v !== undefined) {
							if (t.dense) {
								if (!h[S]) h[S] = [];
								h[S][k] = b;
							} else h[nt(k) + et(S)] = b;
						}
						if (b.HRef) {
							b.l = { Target: b.HRef };
							if (b.HRefScreenTip) b.l.Tooltip = b.HRefScreenTip;
							delete b.HRef;
							delete b.HRefScreenTip;
						}
						if (b.MergeAcross || b.MergeDown) {
							X = k + (parseInt(b.MergeAcross, 10) | 0);
							G = S + (parseInt(b.MergeDown, 10) | 0);
							y.push({ s: { c: k, r: S }, e: { c: X, r: G } });
						}
						if (!t.sheetStubs) {
							if (b.MergeAcross) k = X + 1;
							else ++k;
						} else if (b.MergeAcross || b.MergeDown) {
							for (var Y = k; Y <= X; ++Y) {
								for (var $ = S; $ <= G; ++$) {
									if (Y > k || $ > S) {
										if (t.dense) {
											if (!h[$]) h[$] = [];
											h[$][Y] = { t: "z" };
										} else h[nt(Y) + et($)] = { t: "z" };
									}
								}
							}
							k = X + 1;
						} else ++k;
					} else {
						b = Iv(s[0]);
						if (b.Index) k = +b.Index - 1;
						if (k < _.s.c) _.s.c = k;
						if (k > _.e.c) _.e.c = k;
						if (s[0].slice(-2) === "/>") ++k;
						N = [];
					}
					break;
				case "Row":
					if (s[1] === "/" || s[0].slice(-2) === "/>") {
						if (S < _.s.r) _.s.r = S;
						if (S > _.e.r) _.e.r = S;
						if (s[0].slice(-2) === "/>") {
							g = yv(s[0]);
							if (g.Index) S = +g.Index - 1;
						}
						k = 0;
						++S;
					} else {
						g = yv(s[0]);
						if (g.Index) S = +g.Index - 1;
						z = {};
						if (g.AutoFitHeight == "0" || g.Height) {
							z.hpx = parseInt(g.Height, 10);
							z.hpt = ll(z.hpx);
							V[S] = z;
						}
						if (g.Hidden == "1") {
							z.hidden = true;
							V[S] = z;
						}
					}
					break;
				case "Worksheet":
					if (s[1] === "/") {
						if ((l = f.pop())[0] !== s[3])
							throw new Error("Bad state: " + l.join("|"));
						u.push(v);
						if (_.s.r <= _.e.r && _.s.c <= _.e.c) {
							h["!ref"] = ut(_);
							if (t.sheetRows && t.sheetRows <= _.e.r) {
								h["!fullref"] = h["!ref"];
								_.e.r = t.sheetRows - 1;
								h["!ref"] = ut(_);
							}
						}
						if (y.length) h["!merges"] = y;
						if (M.length > 0) h["!cols"] = M;
						if (V.length > 0) h["!rows"] = V;
						o[v] = h;
					} else {
						_ = { s: { r: 2e6, c: 2e6 }, e: { r: 0, c: 0 } };
						S = k = 0;
						f.push([s[3], false]);
						l = yv(s[0]);
						v = Ae(l.Name);
						h = t.dense ? [] : {};
						y = [];
						W = [];
						V = [];
						K = { name: v, Hidden: 0 };
						j.Sheets.push(K);
					}
					break;
				case "Table":
					if (s[1] === "/") {
						if ((l = f.pop())[0] !== s[3])
							throw new Error("Bad state: " + l.join("|"));
					} else if (s[0].slice(-2) == "/>") break;
					else {
						m = yv(s[0]);
						f.push([s[3], false]);
						M = [];
						H = false;
					}
					break;
				case "Style":
					if (s[1] === "/") Ov(C, B, t);
					else B = yv(s[0]);
					break;
				case "NumberFormat":
					B.nf = Ae(yv(s[0]).Format || "General");
					if (O[B.nf]) B.nf = O[B.nf];
					for (var Z = 0; Z != 392; ++Z) if (R._table[Z] == B.nf) break;
					if (Z == 392)
						for (Z = 57; Z != 392; ++Z)
							if (R._table[Z] == null) {
								R.load(B.nf, Z);
								break;
							}
					break;
				case "Column":
					if (f[f.length - 1][0] !== "Table") break;
					U = yv(s[0]);
					if (U.Hidden) {
						U.hidden = true;
						delete U.Hidden;
					}
					if (U.Width) U.wpx = parseInt(U.Width, 10);
					if (!H && U.wpx > 10) {
						H = true;
						qf = Zf;
						for (var Q = 0; Q < M.length; ++Q) if (M[Q]) il(M[Q]);
					}
					if (H) il(U);
					M[U.Index - 1 || M.length] = U;
					for (var J = 0; J < +U.Span; ++J) M[M.length] = ie(U);
					break;
				case "NamedRange":
					if (!j.Names) j.Names = [];
					var q = Te(s[0]);
					var ee = {
						Name: q.Name,
						Ref: Vo(q.RefersTo.slice(1), { r: 0, c: 0 }),
					};
					if (j.Sheets.length > 0) ee.Sheet = j.Sheets.length - 1;
					j.Names.push(ee);
					break;
				case "NamedCell":
					break;
				case "B":
					break;
				case "I":
					break;
				case "U":
					break;
				case "S":
					break;
				case "Sub":
					break;
				case "Sup":
					break;
				case "Span":
					break;
				case "Border":
					break;
				case "Alignment":
					break;
				case "Borders":
					break;
				case "Font":
					if (s[0].slice(-2) === "/>") break;
					else if (s[1] === "/") T += a.slice(x, s.index);
					else x = s.index + s[0].length;
					break;
				case "Interior":
					if (!t.cellStyles) break;
					B.Interior = yv(s[0]);
					break;
				case "Protection":
					break;
				case "Author":
				case "Title":
				case "Description":
				case "Created":
				case "Keywords":
				case "Subject":
				case "Category":
				case "Company":
				case "LastAuthor":
				case "LastSaved":
				case "LastPrinted":
				case "Version":
				case "Revision":
				case "TotalTime":
				case "HyperlinkBase":
				case "Manager":
				case "ContentStatus":
				case "Identifier":
				case "Language":
				case "AppName":
					if (s[0].slice(-2) === "/>") break;
					else if (s[1] === "/") fn(I, s[3], a.slice(F, s.index));
					else F = s.index + s[0].length;
					break;
				case "Paragraphs":
					break;
				case "Styles":
				case "Workbook":
					if (s[1] === "/") {
						if ((l = f.pop())[0] !== s[3])
							throw new Error("Bad state: " + l.join("|"));
					} else f.push([s[3], false]);
					break;
				case "Comment":
					if (s[1] === "/") {
						if ((l = f.pop())[0] !== s[3])
							throw new Error("Bad state: " + l.join("|"));
						Pv(L);
						N.push(L);
					} else {
						f.push([s[3], false]);
						l = yv(s[0]);
						L = { a: l.Author };
					}
					break;
				case "AutoFilter":
					if (s[1] === "/") {
						if ((l = f.pop())[0] !== s[3])
							throw new Error("Bad state: " + l.join("|"));
					} else if (s[0].charAt(s[0].length - 2) !== "/") {
						var re = yv(s[0]);
						h["!autofilter"] = { ref: Vo(re.Range).replace(/\$/g, "") };
						f.push([s[3], true]);
					}
					break;
				case "Name":
					break;
				case "ComponentOptions":
				case "DocumentProperties":
				case "CustomDocumentProperties":
				case "OfficeDocumentSettings":
				case "PivotTable":
				case "PivotCache":
				case "Names":
				case "MapInfo":
				case "PageBreaks":
				case "QueryTable":
				case "DataValidation":
				case "Sorting":
				case "Schema":
				case "data":
				case "ConditionalFormatting":
				case "SmartTagType":
				case "SmartTags":
				case "ExcelWorkbook":
				case "WorkbookOptions":
				case "WorksheetOptions":
					if (s[1] === "/") {
						if ((l = f.pop())[0] !== s[3])
							throw new Error("Bad state: " + l.join("|"));
					} else if (s[0].charAt(s[0].length - 2) !== "/") f.push([s[3], true]);
					break;
				default:
					if (f.length == 0 && s[3] == "document") return Lp(a, t);
					if (f.length == 0 && s[3] == "UOF") return Lp(a, t);
					var te = true;
					switch (f[f.length - 1][0]) {
						case "OfficeDocumentSettings":
							switch (s[3]) {
								case "AllowPNG":
									break;
								case "RemovePersonalInformation":
									break;
								case "DownloadComponents":
									break;
								case "LocationOfComponents":
									break;
								case "Colors":
									break;
								case "Color":
									break;
								case "Index":
									break;
								case "RGB":
									break;
								case "PixelsPerInch":
									break;
								case "TargetScreenSize":
									break;
								case "ReadOnlyRecommended":
									break;
								default:
									te = false;
							}
							break;
						case "ComponentOptions":
							switch (s[3]) {
								case "Toolbar":
									break;
								case "HideOfficeLogo":
									break;
								case "SpreadsheetAutoFit":
									break;
								case "Label":
									break;
								case "Caption":
									break;
								case "MaxHeight":
									break;
								case "MaxWidth":
									break;
								case "NextSheetNumber":
									break;
								default:
									te = false;
							}
							break;
						case "ExcelWorkbook":
							switch (s[3]) {
								case "Date1904":
									j.WBProps.date1904 = true;
									break;
								case "WindowHeight":
									break;
								case "WindowWidth":
									break;
								case "WindowTopX":
									break;
								case "WindowTopY":
									break;
								case "TabRatio":
									break;
								case "ProtectStructure":
									break;
								case "ProtectWindows":
									break;
								case "ActiveSheet":
									break;
								case "DisplayInkNotes":
									break;
								case "FirstVisibleSheet":
									break;
								case "SupBook":
									break;
								case "SheetName":
									break;
								case "SheetIndex":
									break;
								case "SheetIndexFirst":
									break;
								case "SheetIndexLast":
									break;
								case "Dll":
									break;
								case "AcceptLabelsInFormulas":
									break;
								case "DoNotSaveLinkValues":
									break;
								case "Iteration":
									break;
								case "MaxIterations":
									break;
								case "MaxChange":
									break;
								case "Path":
									break;
								case "Xct":
									break;
								case "Count":
									break;
								case "SelectedSheets":
									break;
								case "Calculation":
									break;
								case "Uncalced":
									break;
								case "StartupPrompt":
									break;
								case "Crn":
									break;
								case "ExternName":
									break;
								case "Formula":
									break;
								case "ColFirst":
									break;
								case "ColLast":
									break;
								case "WantAdvise":
									break;
								case "Boolean":
									break;
								case "Error":
									break;
								case "Text":
									break;
								case "OLE":
									break;
								case "NoAutoRecover":
									break;
								case "PublishObjects":
									break;
								case "DoNotCalculateBeforeSave":
									break;
								case "Number":
									break;
								case "RefModeR1C1":
									break;
								case "EmbedSaveSmartTags":
									break;
								default:
									te = false;
							}
							break;
						case "WorkbookOptions":
							switch (s[3]) {
								case "OWCVersion":
									break;
								case "Height":
									break;
								case "Width":
									break;
								default:
									te = false;
							}
							break;
						case "WorksheetOptions":
							switch (s[3]) {
								case "Visible":
									if (s[0].slice(-2) === "/>") {
									} else if (s[1] === "/")
										switch (a.slice(F, s.index)) {
											case "SheetHidden":
												K.Hidden = 1;
												break;
											case "SheetVeryHidden":
												K.Hidden = 2;
												break;
										}
									else F = s.index + s[0].length;
									break;
								case "Header":
									if (!h["!margins"]) Yu((h["!margins"] = {}), "xlml");
									h["!margins"].header = Te(s[0]).Margin;
									break;
								case "Footer":
									if (!h["!margins"]) Yu((h["!margins"] = {}), "xlml");
									h["!margins"].footer = Te(s[0]).Margin;
									break;
								case "PageMargins":
									var ae = Te(s[0]);
									if (!h["!margins"]) Yu((h["!margins"] = {}), "xlml");
									if (ae.Top) h["!margins"].top = ae.Top;
									if (ae.Left) h["!margins"].left = ae.Left;
									if (ae.Right) h["!margins"].right = ae.Right;
									if (ae.Bottom) h["!margins"].bottom = ae.Bottom;
									break;
								case "DisplayRightToLeft":
									if (!j.Views) j.Views = [];
									if (!j.Views[0]) j.Views[0] = {};
									j.Views[0].RTL = true;
									break;
								case "Unsynced":
									break;
								case "Print":
									break;
								case "Panes":
									break;
								case "Scale":
									break;
								case "Pane":
									break;
								case "Number":
									break;
								case "Layout":
									break;
								case "PageSetup":
									break;
								case "Selected":
									break;
								case "ProtectObjects":
									break;
								case "EnableSelection":
									break;
								case "ProtectScenarios":
									break;
								case "ValidPrinterInfo":
									break;
								case "HorizontalResolution":
									break;
								case "VerticalResolution":
									break;
								case "NumberofCopies":
									break;
								case "ActiveRow":
									break;
								case "ActiveCol":
									break;
								case "ActivePane":
									break;
								case "TopRowVisible":
									break;
								case "TopRowBottomPane":
									break;
								case "LeftColumnVisible":
									break;
								case "LeftColumnRightPane":
									break;
								case "FitToPage":
									break;
								case "RangeSelection":
									break;
								case "PaperSizeIndex":
									break;
								case "PageLayoutZoom":
									break;
								case "PageBreakZoom":
									break;
								case "FilterOn":
									break;
								case "DoNotDisplayGridlines":
									break;
								case "SplitHorizontal":
									break;
								case "SplitVertical":
									break;
								case "FreezePanes":
									break;
								case "FrozenNoSplit":
									break;
								case "FitWidth":
									break;
								case "FitHeight":
									break;
								case "CommentsLayout":
									break;
								case "Zoom":
									break;
								case "LeftToRight":
									break;
								case "Gridlines":
									break;
								case "AllowSort":
									break;
								case "AllowFilter":
									break;
								case "AllowInsertRows":
									break;
								case "AllowDeleteRows":
									break;
								case "AllowInsertCols":
									break;
								case "AllowDeleteCols":
									break;
								case "AllowInsertHyperlinks":
									break;
								case "AllowFormatCells":
									break;
								case "AllowSizeCols":
									break;
								case "AllowSizeRows":
									break;
								case "NoSummaryRowsBelowDetail":
									break;
								case "TabColorIndex":
									break;
								case "DoNotDisplayHeadings":
									break;
								case "ShowPageLayoutZoom":
									break;
								case "NoSummaryColumnsRightDetail":
									break;
								case "BlackAndWhite":
									break;
								case "DoNotDisplayZeros":
									break;
								case "DisplayPageBreak":
									break;
								case "RowColHeadings":
									break;
								case "DoNotDisplayOutline":
									break;
								case "NoOrientation":
									break;
								case "AllowUsePivotTables":
									break;
								case "ZeroHeight":
									break;
								case "ViewableRange":
									break;
								case "Selection":
									break;
								case "ProtectContents":
									break;
								default:
									te = false;
							}
							break;
						case "PivotTable":
						case "PivotCache":
							switch (s[3]) {
								case "ImmediateItemsOnDrop":
									break;
								case "ShowPageMultipleItemLabel":
									break;
								case "CompactRowIndent":
									break;
								case "Location":
									break;
								case "PivotField":
									break;
								case "Orientation":
									break;
								case "LayoutForm":
									break;
								case "LayoutSubtotalLocation":
									break;
								case "LayoutCompactRow":
									break;
								case "Position":
									break;
								case "PivotItem":
									break;
								case "DataType":
									break;
								case "DataField":
									break;
								case "SourceName":
									break;
								case "ParentField":
									break;
								case "PTLineItems":
									break;
								case "PTLineItem":
									break;
								case "CountOfSameItems":
									break;
								case "Item":
									break;
								case "ItemType":
									break;
								case "PTSource":
									break;
								case "CacheIndex":
									break;
								case "ConsolidationReference":
									break;
								case "FileName":
									break;
								case "Reference":
									break;
								case "NoColumnGrand":
									break;
								case "NoRowGrand":
									break;
								case "BlankLineAfterItems":
									break;
								case "Hidden":
									break;
								case "Subtotal":
									break;
								case "BaseField":
									break;
								case "MapChildItems":
									break;
								case "Function":
									break;
								case "RefreshOnFileOpen":
									break;
								case "PrintSetTitles":
									break;
								case "MergeLabels":
									break;
								case "DefaultVersion":
									break;
								case "RefreshName":
									break;
								case "RefreshDate":
									break;
								case "RefreshDateCopy":
									break;
								case "VersionLastRefresh":
									break;
								case "VersionLastUpdate":
									break;
								case "VersionUpdateableMin":
									break;
								case "VersionRefreshableMin":
									break;
								case "Calculation":
									break;
								default:
									te = false;
							}
							break;
						case "PageBreaks":
							switch (s[3]) {
								case "ColBreaks":
									break;
								case "ColBreak":
									break;
								case "RowBreaks":
									break;
								case "RowBreak":
									break;
								case "ColStart":
									break;
								case "ColEnd":
									break;
								case "RowEnd":
									break;
								default:
									te = false;
							}
							break;
						case "AutoFilter":
							switch (s[3]) {
								case "AutoFilterColumn":
									break;
								case "AutoFilterCondition":
									break;
								case "AutoFilterAnd":
									break;
								case "AutoFilterOr":
									break;
								default:
									te = false;
							}
							break;
						case "QueryTable":
							switch (s[3]) {
								case "Id":
									break;
								case "AutoFormatFont":
									break;
								case "AutoFormatPattern":
									break;
								case "QuerySource":
									break;
								case "QueryType":
									break;
								case "EnableRedirections":
									break;
								case "RefreshedInXl9":
									break;
								case "URLString":
									break;
								case "HTMLTables":
									break;
								case "Connection":
									break;
								case "CommandText":
									break;
								case "RefreshInfo":
									break;
								case "NoTitles":
									break;
								case "NextId":
									break;
								case "ColumnInfo":
									break;
								case "OverwriteCells":
									break;
								case "DoNotPromptForFile":
									break;
								case "TextWizardSettings":
									break;
								case "Source":
									break;
								case "Number":
									break;
								case "Decimal":
									break;
								case "ThousandSeparator":
									break;
								case "TrailingMinusNumbers":
									break;
								case "FormatSettings":
									break;
								case "FieldType":
									break;
								case "Delimiters":
									break;
								case "Tab":
									break;
								case "Comma":
									break;
								case "AutoFormatName":
									break;
								case "VersionLastEdit":
									break;
								case "VersionLastRefresh":
									break;
								default:
									te = false;
							}
							break;
						case "Sorting":
						case "ConditionalFormatting":
						case "DataValidation":
							switch (s[3]) {
								case "Range":
									break;
								case "Type":
									break;
								case "Min":
									break;
								case "Max":
									break;
								case "Sort":
									break;
								case "Descending":
									break;
								case "Order":
									break;
								case "CaseSensitive":
									break;
								case "Value":
									break;
								case "ErrorStyle":
									break;
								case "ErrorMessage":
									break;
								case "ErrorTitle":
									break;
								case "CellRangeList":
									break;
								case "InputMessage":
									break;
								case "InputTitle":
									break;
								case "ComboHide":
									break;
								case "InputHide":
									break;
								case "Condition":
									break;
								case "Qualifier":
									break;
								case "UseBlank":
									break;
								case "Value1":
									break;
								case "Value2":
									break;
								case "Format":
									break;
								default:
									te = false;
							}
							break;
						case "MapInfo":
						case "Schema":
						case "data":
							switch (s[3]) {
								case "Map":
									break;
								case "Entry":
									break;
								case "Range":
									break;
								case "XPath":
									break;
								case "Field":
									break;
								case "XSDType":
									break;
								case "FilterOn":
									break;
								case "Aggregate":
									break;
								case "ElementType":
									break;
								case "AttributeType":
									break;
								case "schema":
								case "element":
								case "complexType":
								case "datatype":
								case "all":
								case "attribute":
								case "extends":
									break;
								case "row":
									break;
								default:
									te = false;
							}
							break;
						case "SmartTags":
							break;
						default:
							te = false;
							break;
					}
					if (te) break;
					if (!f[f.length - 1][1])
						throw "Unrecognized tag: " + s[3] + "|" + f.join("|");
					if (f[f.length - 1][0] === "CustomDocumentProperties") {
						if (s[0].slice(-2) === "/>") break;
						else if (s[1] === "/") Rv(A, s[3], P, a.slice(F, s.index));
						else {
							P = s;
							F = s.index + s[0].length;
						}
						break;
					}
					if (t.WTF) throw "Unrecognized tag: " + s[3] + "|" + f.join("|");
			}
		var ne = {};
		if (!t.bookSheets && !t.bookProps) ne.Sheets = o;
		ne.SheetNames = u;
		ne.Workbook = j;
		ne.SSF = R.get_table();
		ne.Props = I;
		ne.Custprops = A;
		return ne;
	}
	function Uv(e, r) {
		qp((r = r || {}));
		switch (r.type || "base64") {
			case "base64":
				return Mv(b.decode(e), r);
			case "binary":
			case "buffer":
			case "file":
				return Mv(e, r);
			case "array":
				return Mv(B(e), r);
		}
	}
	function Hv(e, r) {
		var t = [];
		if (e.Props) t.push(ln(e.Props, r));
		if (e.Custprops) t.push(on(e.Props, e.Custprops, r));
		return t.join("");
	}
	function Wv() {
		return "";
	}
	function Vv(e, r) {
		var t = ['<Style ss:ID="Default" ss:Name="Normal"><NumberFormat/></Style>'];
		r.cellXfs.forEach(function (e, r) {
			var a = [];
			a.push(
				rr("NumberFormat", null, { "ss:Format": Oe(R._table[e.numFmtId]) })
			);
			t.push(rr("Style", a.join(""), { "ss:ID": "s" + (21 + r) }));
		});
		return rr("Styles", t.join(""));
	}
	function zv(e) {
		return rr("NamedRange", null, {
			"ss:Name": e.Name,
			"ss:RefersTo": "=" + Xo(e.Ref, { r: 0, c: 0 }),
		});
	}
	function Xv(e) {
		if (!((e || {}).Workbook || {}).Names) return "";
		var r = e.Workbook.Names;
		var t = [];
		for (var a = 0; a < r.length; ++a) {
			var n = r[a];
			if (n.Sheet != null) continue;
			if (n.Name.match(/^_xlfn\./)) continue;
			t.push(zv(n));
		}
		return rr("Names", t.join(""));
	}
	function Gv(e, r, t, a) {
		if (!e) return "";
		if (!((a || {}).Workbook || {}).Names) return "";
		var n = a.Workbook.Names;
		var i = [];
		e: for (var s = 0; s < n.length; ++s) {
			var f = n[s];
			if (f.Sheet != t) continue;
			if (f.Name.match(/^_xlfn\./)) continue;
			i.push(zv(f));
		}
		return i.join("");
	}
	function jv(e, r, t, a) {
		if (!e) return "";
		var n = [];
		if (e["!margins"]) {
			n.push("<PageSetup>");
			if (e["!margins"].header)
				n.push(rr("Header", null, { "x:Margin": e["!margins"].header }));
			if (e["!margins"].footer)
				n.push(rr("Footer", null, { "x:Margin": e["!margins"].footer }));
			n.push(
				rr("PageMargins", null, {
					"x:Bottom": e["!margins"].bottom || "0.75",
					"x:Left": e["!margins"].left || "0.7",
					"x:Right": e["!margins"].right || "0.7",
					"x:Top": e["!margins"].top || "0.75",
				})
			);
			n.push("</PageSetup>");
		}
		if (a && a.Workbook && a.Workbook.Sheets && a.Workbook.Sheets[t]) {
			if (a.Workbook.Sheets[t].Hidden)
				n.push(
					rr(
						"Visible",
						a.Workbook.Sheets[t].Hidden == 1
							? "SheetHidden"
							: "SheetVeryHidden",
						{}
					)
				);
			else {
				for (var i = 0; i < t; ++i)
					if (a.Workbook.Sheets[i] && !a.Workbook.Sheets[i].Hidden) break;
				if (i == t) n.push("<Selected/>");
			}
		}
		if (((((a || {}).Workbook || {}).Views || [])[0] || {}).RTL)
			n.push("<DisplayRightToLeft/>");
		if (e["!protect"]) {
			n.push(qe("ProtectContents", "True"));
			if (e["!protect"].objects) n.push(qe("ProtectObjects", "True"));
			if (e["!protect"].scenarios) n.push(qe("ProtectScenarios", "True"));
			if (
				e["!protect"].selectLockedCells != null &&
				!e["!protect"].selectLockedCells
			)
				n.push(qe("EnableSelection", "NoSelection"));
			else if (
				e["!protect"].selectUnlockedCells != null &&
				!e["!protect"].selectUnlockedCells
			)
				n.push(qe("EnableSelection", "UnlockedCells"));
			[
				["formatCells", "AllowFormatCells"],
				["formatColumns", "AllowSizeCols"],
				["formatRows", "AllowSizeRows"],
				["insertColumns", "AllowInsertCols"],
				["insertRows", "AllowInsertRows"],
				["insertHyperlinks", "AllowInsertHyperlinks"],
				["deleteColumns", "AllowDeleteCols"],
				["deleteRows", "AllowDeleteRows"],
				["sort", "AllowSort"],
				["autoFilter", "AllowFilter"],
				["pivotTables", "AllowUsePivotTables"],
			].forEach(function (r) {
				if (e["!protect"][r[0]]) n.push("<" + r[1] + "/>");
			});
		}
		if (n.length == 0) return "";
		return rr("WorksheetOptions", n.join(""), { xmlns: ir.x });
	}
	function Kv(e) {
		return e
			.map(function (e) {
				var r = Ue(e.t || "");
				var t = rr("ss:Data", r, { xmlns: "http://www.w3.org/TR/REC-html40" });
				return rr("Comment", t, { "ss:Author": e.a });
			})
			.join("");
	}
	function Yv(e, r, t, a, n, i, s) {
		if (!e || (e.v == undefined && e.f == undefined)) return "";
		var f = {};
		if (e.f) f["ss:Formula"] = "=" + Oe(Xo(e.f, s));
		if (e.F && e.F.slice(0, r.length) == r) {
			var l = lt(e.F.slice(r.length + 1));
			f["ss:ArrayRange"] =
				"RC:R" +
				(l.r == s.r ? "" : "[" + (l.r - s.r) + "]") +
				"C" +
				(l.c == s.c ? "" : "[" + (l.c - s.c) + "]");
		}
		if (e.l && e.l.Target) {
			f["ss:HRef"] = Oe(e.l.Target);
			if (e.l.Tooltip) f["x:HRefScreenTip"] = Oe(e.l.Tooltip);
		}
		if (t["!merges"]) {
			var o = t["!merges"];
			for (var c = 0; c != o.length; ++c) {
				if (o[c].s.c != s.c || o[c].s.r != s.r) continue;
				if (o[c].e.c > o[c].s.c) f["ss:MergeAcross"] = o[c].e.c - o[c].s.c;
				if (o[c].e.r > o[c].s.r) f["ss:MergeDown"] = o[c].e.r - o[c].s.r;
			}
		}
		var u = "",
			h = "";
		switch (e.t) {
			case "z":
				return "";
			case "n":
				u = "Number";
				h = String(e.v);
				break;
			case "b":
				u = "Boolean";
				h = e.v ? "1" : "0";
				break;
			case "e":
				u = "Error";
				h = Xt[e.v];
				break;
			case "d":
				u = "DateTime";
				h = new Date(e.v).toISOString();
				if (e.z == null) e.z = e.z || R._table[14];
				break;
			case "s":
				u = "String";
				h = Le(e.v || "");
				break;
		}
		var d = $u(a.cellXfs, e, a);
		f["ss:StyleID"] = "s" + (21 + d);
		f["ss:Index"] = s.c + 1;
		var v = e.v != null ? h : "";
		var p = '<Data ss:Type="' + u + '">' + v + "</Data>";
		if ((e.c || []).length > 0) p += Kv(e.c);
		return rr("Cell", p, f);
	}
	function $v(e, r) {
		var t = '<Row ss:Index="' + (e + 1) + '"';
		if (r) {
			if (r.hpt && !r.hpx) r.hpx = ol(r.hpt);
			if (r.hpx) t += ' ss:AutoFitHeight="0" ss:Height="' + r.hpx + '"';
			if (r.hidden) t += ' ss:Hidden="1"';
		}
		return t + ">";
	}
	function Zv(e, r, t, a) {
		if (!e["!ref"]) return "";
		var n = ht(e["!ref"]);
		var i = e["!merges"] || [],
			s = 0;
		var f = [];
		if (e["!cols"])
			e["!cols"].forEach(function (e, r) {
				il(e);
				var t = !!e.width;
				var a = Ku(r, e);
				var n = { "ss:Index": r + 1 };
				if (t) n["ss:Width"] = el(a.width);
				if (e.hidden) n["ss:Hidden"] = "1";
				f.push(rr("Column", null, n));
			});
		var l = Array.isArray(e);
		for (var o = n.s.r; o <= n.e.r; ++o) {
			var c = [$v(o, (e["!rows"] || [])[o])];
			for (var u = n.s.c; u <= n.e.c; ++u) {
				var h = false;
				for (s = 0; s != i.length; ++s) {
					if (i[s].s.c > u) continue;
					if (i[s].s.r > o) continue;
					if (i[s].e.c < u) continue;
					if (i[s].e.r < o) continue;
					if (i[s].s.c != u || i[s].s.r != o) h = true;
					break;
				}
				if (h) continue;
				var d = { r: o, c: u };
				var v = ot(d),
					p = l ? (e[o] || [])[u] : e[v];
				c.push(Yv(p, v, e, r, t, a, d));
			}
			c.push("</Row>");
			if (c.length > 2) f.push(c.join(""));
		}
		return f.join("");
	}
	function Qv(e, r, t) {
		var a = [];
		var n = t.SheetNames[e];
		var i = t.Sheets[n];
		var s = i ? Gv(i, r, e, t) : "";
		if (s.length > 0) a.push("<Names>" + s + "</Names>");
		s = i ? Zv(i, r, e, t) : "";
		if (s.length > 0) a.push("<Table>" + s + "</Table>");
		a.push(jv(i, r, e, t));
		return a.join("");
	}
	function Jv(e, r) {
		if (!r) r = {};
		if (!e.SSF) e.SSF = R.get_table();
		if (e.SSF) {
			D(R);
			R.load_table(e.SSF);
			r.revssf = K(e.SSF);
			r.revssf[e.SSF[65535]] = 0;
			r.ssf = e.SSF;
			r.cellXfs = [];
			$u(r.cellXfs, {}, { revssf: { General: 0 } });
		}
		var t = [];
		t.push(Hv(e, r));
		t.push(Wv(e, r));
		t.push("");
		t.push("");
		for (var a = 0; a < e.SheetNames.length; ++a)
			t.push(rr("Worksheet", Qv(a, r, e), { "ss:Name": Oe(e.SheetNames[a]) }));
		t[2] = Vv(e, r);
		t[3] = Xv(e, r);
		return (
			ke +
			rr("Workbook", t.join(""), {
				xmlns: ir.ss,
				"xmlns:o": ir.o,
				"xmlns:x": ir.x,
				"xmlns:ss": ir.ss,
				"xmlns:dt": ir.dt,
				"xmlns:html": ir.html,
			})
		);
	}
	function qv(e) {
		var r = {};
		var t = e.content;
		t.l = 28;
		r.AnsiUserType = t._R(0, "lpstr-ansi");
		r.AnsiClipboardFormat = Qt(t);
		if (t.length - t.l <= 4) return r;
		var a = t._R(4);
		if (a == 0 || a > 40) return r;
		t.l -= 4;
		r.Reserved1 = t._R(0, "lpstr-ansi");
		if (t.length - t.l <= 4) return r;
		a = t._R(4);
		if (a !== 1907505652) return r;
		r.UnicodeClipboardFormat = Jt(t);
		a = t._R(4);
		if (a == 0 || a > 40) return r;
		t.l -= 4;
		r.Reserved2 = t._R(0, "lpwstr");
	}
	function ep(e, r, t, a) {
		var n = t;
		var i = [];
		var s = r.slice(r.l, r.l + n);
		if (a && a.enc && a.enc.insitu)
			switch (e.n) {
				case "BOF":
				case "FilePass":
				case "FileLock":
				case "InterfaceHdr":
				case "RRDInfo":
				case "RRDHead":
				case "UsrExcl":
					break;
				default:
					if (s.length === 0) break;
					a.enc.insitu(s);
			}
		i.push(s);
		r.l += n;
		var f = up[Ar(r, r.l)];
		var l = 0;
		while (f != null && f.n.slice(0, 8) === "Continue") {
			n = Ar(r, r.l + 2);
			l = r.l + 4;
			if (f.n == "ContinueFrt") l += 4;
			else if (f.n.slice(0, 11) == "ContinueFrt") l += 12;
			i.push(r.slice(l, r.l + 4 + n));
			r.l += 4 + n;
			f = up[Ar(r, r.l)];
		}
		var o = y(i);
		Wr(o, 0);
		var c = 0;
		o.lens = [];
		for (var u = 0; u < i.length; ++u) {
			o.lens.push(c);
			c += i[u].length;
		}
		return e.f(o, o.length, a);
	}
	function rp(e, r, t) {
		if (e.t === "z") return;
		if (!e.XF) return;
		var a = 0;
		try {
			a = e.z || e.XF.numFmtId || 0;
			if (r.cellNF) e.z = R._table[a];
		} catch (n) {
			if (r.WTF) throw n;
		}
		if (!r || r.cellText !== false)
			try {
				if (e.t === "e") {
					e.w = e.w || Xt[e.v];
				} else if (a === 0 || a == "General") {
					if (e.t === "n") {
						if ((e.v | 0) === e.v) e.w = R._general_int(e.v);
						else e.w = R._general_num(e.v);
					} else e.w = R._general(e.v);
				} else e.w = R.format(a, e.v, { date1904: !!t });
			} catch (n) {
				if (r.WTF) throw n;
			}
		if (r.cellDates && a && e.t == "n" && R.is_date(R._table[a] || String(a))) {
			var i = R.parse_date_code(e.v);
			if (i) {
				e.t = "d";
				e.v = new Date(i.y, i.m - 1, i.d, i.H, i.M, i.S, i.u);
			}
		}
	}
	function tp(e, r, t) {
		return { v: e, ixfe: r, t: t };
	}
	function ap(e, r) {
		var t = { opts: {} };
		var a = {};
		if (p != null && r.dense == null) r.dense = p;
		var n = r.dense ? [] : {};
		var i = {};
		var s = {};
		var f = null;
		var o = [];
		var c = "";
		var u = {};
		var h,
			d = "",
			v,
			m,
			b,
			g;
		var w = {};
		var E = [];
		var k;
		var S;
		var _ = true;
		var C = [];
		var B = [];
		var T = { Sheets: [], WBProps: { date1904: false }, Views: [{}] },
			x = {};
		var y = function ge(e) {
			if (e < 8) return Ea[e];
			if (e < 64) return B[e - 8] || Ea[e];
			return Ea[e];
		};
		var I = function we(e, r, t) {
			var a = r.XF.data;
			if (!a || !a.patternType || !t || !t.cellStyles) return;
			r.s = {};
			r.s.patternType = a.patternType;
			var n;
			if ((n = jf(y(a.icvFore)))) {
				r.s.fgColor = { rgb: n };
			}
			if ((n = jf(y(a.icvBack)))) {
				r.s.bgColor = { rgb: n };
			}
		};
		var A = function Ee(e, r, t) {
			if (z > 1) return;
			if (t.sheetRows && e.r >= t.sheetRows) _ = false;
			if (!_) return;
			if (t.cellStyles && r.XF && r.XF.data) I(e, r, t);
			delete r.ixfe;
			delete r.XF;
			h = e;
			d = ot(e);
			if (s.s) {
				if (e.r < s.s.r) s.s.r = e.r;
				if (e.c < s.s.c) s.s.c = e.c;
			}
			if (s.e) {
				if (e.r + 1 > s.e.r) s.e.r = e.r + 1;
				if (e.c + 1 > s.e.c) s.e.c = e.c + 1;
			}
			if (t.cellFormula && r.f) {
				for (var a = 0; a < E.length; ++a) {
					if (E[a][0].s.c > e.c || E[a][0].s.r > e.r) continue;
					if (E[a][0].e.c < e.c || E[a][0].e.r < e.r) continue;
					r.F = ut(E[a][0]);
					if (E[a][0].s.c != e.c || E[a][0].s.r != e.r) delete r.f;
					if (r.f) r.f = "" + _u(E[a][1], s, e, W, D);
					break;
				}
			}
			{
				if (t.dense) {
					if (!n[e.r]) n[e.r] = [];
					n[e.r][e.c] = r;
				} else n[d] = r;
			}
		};
		var D = {
			enc: false,
			sbcch: 0,
			snames: [],
			sharedf: w,
			arrayf: E,
			rrtabid: [],
			lastuser: "",
			biff: 8,
			codepage: 0,
			winlocked: 0,
			cellStyles: !!r && !!r.cellStyles,
			WTF: !!r && !!r.wtf,
		};
		if (r.password) D.password = r.password;
		var O;
		var F = [];
		var P = [];
		var N = [],
			L = [];
		var M = 0,
			U = 0;
		var H = false;
		var W = [];
		W.SheetNames = D.snames;
		W.sharedf = D.sharedf;
		W.arrayf = D.arrayf;
		W.names = [];
		W.XTI = [];
		var V = "";
		var z = 0;
		var G = 0,
			j = [];
		var K = [];
		var Y;
		D.codepage = 1200;
		l(1200);
		var $ = false;
		while (e.l < e.length - 1) {
			var Z = e.l;
			var Q = e._R(2);
			if (Q === 0 && V === "EOF") break;
			var J = e.l === e.length ? 0 : e._R(2);
			var q = up[Q];
			if (q && q.f) {
				if (r.bookSheets) {
					if (V === "BoundSheet8" && q.n !== "BoundSheet8") break;
				}
				V = q.n;
				if (q.r === 2 || q.r == 12) {
					var ee = e._R(2);
					J -= 2;
					if (!D.enc && ee !== Q && (((ee & 255) << 8) | (ee >> 8)) !== Q)
						throw new Error("rt mismatch: " + ee + "!=" + Q);
					if (q.r == 12) {
						e.l += 10;
						J -= 10;
					}
				}
				var re;
				if (q.n === "EOF") re = q.f(e, J, D);
				else re = ep(q, e, J, D);
				var te = q.n;
				if (z == 0 && te != "BOF") continue;
				switch (te) {
					case "Date1904":
						t.opts.Date1904 = T.WBProps.date1904 = re;
						break;
					case "WriteProtect":
						t.opts.WriteProtect = true;
						break;
					case "FilePass":
						if (!D.enc) e.l = 0;
						D.enc = re;
						if (!r.password) throw new Error("File is password-protected");
						if (re.valid == null)
							throw new Error("Encryption scheme unsupported");
						if (!re.valid) throw new Error("Password is incorrect");
						break;
					case "WriteAccess":
						D.lastuser = re;
						break;
					case "FileSharing":
						break;
					case "CodePage":
						switch (re) {
							case 21010:
								re = 1200;
								break;
							case 32768:
								re = 1e4;
								break;
							case 32769:
								re = 1252;
								break;
						}
						l((D.codepage = re));
						$ = true;
						break;
					case "RRTabId":
						D.rrtabid = re;
						break;
					case "WinProtect":
						D.winlocked = re;
						break;
					case "Template":
						break;
					case "BookBool":
						break;
					case "UsesELFs":
						break;
					case "MTRSettings":
						break;
					case "RefreshAll":
					case "CalcCount":
					case "CalcDelta":
					case "CalcIter":
					case "CalcMode":
					case "CalcPrecision":
					case "CalcSaveRecalc":
						t.opts[te] = re;
						break;
					case "CalcRefMode":
						D.CalcRefMode = re;
						break;
					case "Uncalced":
						break;
					case "ForceFullCalculation":
						t.opts.FullCalc = re;
						break;
					case "WsBool":
						if (re.fDialog) n["!type"] = "dialog";
						break;
					case "XF":
						C.push(re);
						break;
					case "ExtSST":
						break;
					case "BookExt":
						break;
					case "RichTextStream":
						break;
					case "BkHim":
						break;
					case "SupBook":
						W.push([re]);
						W[W.length - 1].XTI = [];
						break;
					case "ExternName":
						W[W.length - 1].push(re);
						break;
					case "Index":
						break;
					case "Lbl":
						Y = { Name: re.Name, Ref: _u(re.rgce, s, null, W, D) };
						if (re.itab > 0) Y.Sheet = re.itab - 1;
						W.names.push(Y);
						if (!W[0]) {
							W[0] = [];
							W[0].XTI = [];
						}
						W[W.length - 1].push(re);
						if (re.Name == "_xlnm._FilterDatabase" && re.itab > 0)
							if (
								re.rgce &&
								re.rgce[0] &&
								re.rgce[0][0] &&
								re.rgce[0][0][0] == "PtgArea3d"
							)
								K[re.itab - 1] = { ref: ut(re.rgce[0][0][1][2]) };
						break;
					case "ExternCount":
						D.ExternCount = re;
						break;
					case "ExternSheet":
						if (W.length == 0) {
							W[0] = [];
							W[0].XTI = [];
						}
						W[W.length - 1].XTI = W[W.length - 1].XTI.concat(re);
						W.XTI = W.XTI.concat(re);
						break;
					case "NameCmt":
						if (D.biff < 8) break;
						if (Y != null) Y.Comment = re[1];
						break;
					case "Protect":
						n["!protect"] = re;
						break;
					case "Password":
						if (re !== 0 && D.WTF) console.error("Password verifier: " + re);
						break;
					case "Prot4Rev":
					case "Prot4RevPass":
						break;
					case "BoundSheet8":
						{
							i[re.pos] = re;
							D.snames.push(re.name);
						}
						break;
					case "EOF":
						{
							if (--z) break;
							if (s.e) {
								if (s.e.r > 0 && s.e.c > 0) {
									s.e.r--;
									s.e.c--;
									n["!ref"] = ut(s);
									if (r.sheetRows && r.sheetRows <= s.e.r) {
										var ae = s.e.r;
										s.e.r = r.sheetRows - 1;
										n["!fullref"] = n["!ref"];
										n["!ref"] = ut(s);
										s.e.r = ae;
									}
									s.e.r++;
									s.e.c++;
								}
								if (F.length > 0) n["!merges"] = F;
								if (P.length > 0) n["!objects"] = P;
								if (N.length > 0) n["!cols"] = N;
								if (L.length > 0) n["!rows"] = L;
								T.Sheets.push(x);
							}
							if (c === "") u = n;
							else a[c] = n;
							n = r.dense ? [] : {};
						}
						break;
					case "BOF":
						{
							if (D.biff === 8)
								D.biff =
									{ 9: 2, 521: 3, 1033: 4 }[Q] ||
									{ 512: 2, 768: 3, 1024: 4, 1280: 5, 1536: 8, 2: 2, 7: 2 }[
										re.BIFFVer
									] ||
									8;
							if (D.biff == 8 && re.BIFFVer == 0 && re.dt == 16) D.biff = 2;
							if (z++) break;
							_ = true;
							n = r.dense ? [] : {};
							if (D.biff < 8 && !$) {
								$ = true;
								l((D.codepage = r.codepage || 1252));
							}
							if (D.biff < 5) {
								if (c === "") c = "Sheet1";
								s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
								var ne = { pos: e.l - J, name: c };
								i[ne.pos] = ne;
								D.snames.push(c);
							} else c = (i[Z] || { name: "" }).name;
							if (re.dt == 32) n["!type"] = "chart";
							if (re.dt == 64) n["!type"] = "macro";
							F = [];
							P = [];
							D.arrayf = E = [];
							N = [];
							L = [];
							M = U = 0;
							H = false;
							x = { Hidden: (i[Z] || { hs: 0 }).hs, name: c };
						}
						break;
					case "Number":
					case "BIFF2NUM":
					case "BIFF2INT":
						{
							if (n["!type"] == "chart")
								if (
									r.dense ? (n[re.r] || [])[re.c] : n[ot({ c: re.c, r: re.r })]
								)
									++re.c;
							k = { ixfe: re.ixfe, XF: C[re.ixfe] || {}, v: re.val, t: "n" };
							if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
							rp(k, r, t.opts.Date1904);
							A({ c: re.c, r: re.r }, k, r);
						}
						break;
					case "BoolErr":
						{
							k = { ixfe: re.ixfe, XF: C[re.ixfe], v: re.val, t: re.t };
							if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
							rp(k, r, t.opts.Date1904);
							A({ c: re.c, r: re.r }, k, r);
						}
						break;
					case "RK":
						{
							k = { ixfe: re.ixfe, XF: C[re.ixfe], v: re.rknum, t: "n" };
							if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
							rp(k, r, t.opts.Date1904);
							A({ c: re.c, r: re.r }, k, r);
						}
						break;
					case "MulRk":
						{
							for (var ie = re.c; ie <= re.C; ++ie) {
								var se = re.rkrec[ie - re.c][0];
								k = { ixfe: se, XF: C[se], v: re.rkrec[ie - re.c][1], t: "n" };
								if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
								rp(k, r, t.opts.Date1904);
								A({ c: ie, r: re.r }, k, r);
							}
						}
						break;
					case "Formula":
						{
							if (re.val == "String") {
								f = re;
								break;
							}
							k = tp(re.val, re.cell.ixfe, re.tt);
							k.XF = C[k.ixfe];
							if (r.cellFormula) {
								var fe = re.formula;
								if (fe && fe[0] && fe[0][0] && fe[0][0][0] == "PtgExp") {
									var le = fe[0][0][1][0],
										oe = fe[0][0][1][1];
									var ce = ot({ r: le, c: oe });
									if (w[ce]) k.f = "" + _u(re.formula, s, re.cell, W, D);
									else k.F = ((r.dense ? (n[le] || [])[oe] : n[ce]) || {}).F;
								} else k.f = "" + _u(re.formula, s, re.cell, W, D);
							}
							if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
							rp(k, r, t.opts.Date1904);
							A(re.cell, k, r);
							f = re;
						}
						break;
					case "String":
						{
							if (f) {
								f.val = re;
								k = tp(re, f.cell.ixfe, "s");
								k.XF = C[k.ixfe];
								if (r.cellFormula) {
									k.f = "" + _u(f.formula, s, f.cell, W, D);
								}
								if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
								rp(k, r, t.opts.Date1904);
								A(f.cell, k, r);
								f = null;
							} else throw new Error("String record expects Formula");
						}
						break;
					case "Array":
						{
							E.push(re);
							var ue = ot(re[0].s);
							v = r.dense ? (n[re[0].s.r] || [])[re[0].s.c] : n[ue];
							if (r.cellFormula && v) {
								if (!f) break;
								if (!ue || !v) break;
								v.f = "" + _u(re[1], s, re[0], W, D);
								v.F = ut(re[0]);
							}
						}
						break;
					case "ShrFmla":
						{
							if (!_) break;
							if (!r.cellFormula) break;
							if (d) {
								if (!f) break;
								w[ot(f.cell)] = re[0];
								v = r.dense ? (n[f.cell.r] || [])[f.cell.c] : n[ot(f.cell)];
								(v || {}).f = "" + _u(re[0], s, h, W, D);
							}
						}
						break;
					case "LabelSst":
						k = tp(o[re.isst].t, re.ixfe, "s");
						k.XF = C[k.ixfe];
						if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
						rp(k, r, t.opts.Date1904);
						A({ c: re.c, r: re.r }, k, r);
						break;
					case "Blank":
						if (r.sheetStubs) {
							k = { ixfe: re.ixfe, XF: C[re.ixfe], t: "z" };
							if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
							rp(k, r, t.opts.Date1904);
							A({ c: re.c, r: re.r }, k, r);
						}
						break;
					case "MulBlank":
						if (r.sheetStubs) {
							for (var he = re.c; he <= re.C; ++he) {
								var de = re.ixfe[he - re.c];
								k = { ixfe: de, XF: C[de], t: "z" };
								if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
								rp(k, r, t.opts.Date1904);
								A({ c: he, r: re.r }, k, r);
							}
						}
						break;
					case "RString":
					case "Label":
					case "BIFF2STR":
						k = tp(re.val, re.ixfe, "s");
						k.XF = C[k.ixfe];
						if (G > 0) k.z = j[(k.ixfe >> 8) & 31];
						rp(k, r, t.opts.Date1904);
						A({ c: re.c, r: re.r }, k, r);
						break;
					case "Dimensions":
						{
							if (z === 1) s = re;
						}
						break;
					case "SST":
						{
							o = re;
						}
						break;
					case "Format":
						{
							if (D.biff == 4) {
								j[G++] = re[1];
								for (var ve = 0; ve < G + 163; ++ve)
									if (R._table[ve] == re[1]) break;
								if (ve >= 163) R.load(re[1], G + 163);
							} else R.load(re[1], re[0]);
						}
						break;
					case "BIFF2FORMAT":
						{
							j[G++] = re;
							for (var pe = 0; pe < G + 163; ++pe)
								if (R._table[pe] == re) break;
							if (pe >= 163) R.load(re, G + 163);
						}
						break;
					case "MergeCells":
						F = F.concat(re);
						break;
					case "Obj":
						P[re.cmo[0]] = D.lastobj = re;
						break;
					case "TxO":
						D.lastobj.TxO = re;
						break;
					case "ImData":
						D.lastobj.ImData = re;
						break;
					case "HLink":
						{
							for (g = re[0].s.r; g <= re[0].e.r; ++g)
								for (b = re[0].s.c; b <= re[0].e.c; ++b) {
									v = r.dense ? (n[g] || [])[b] : n[ot({ c: b, r: g })];
									if (v) v.l = re[1];
								}
						}
						break;
					case "HLinkTooltip":
						{
							for (g = re[0].s.r; g <= re[0].e.r; ++g)
								for (b = re[0].s.c; b <= re[0].e.c; ++b) {
									v = r.dense ? (n[g] || [])[b] : n[ot({ c: b, r: g })];
									if (v && v.l) v.l.Tooltip = re[1];
								}
						}
						break;
					case "Note":
						{
							if (D.biff <= 5 && D.biff >= 2) break;
							v = r.dense ? (n[re[0].r] || [])[re[0].c] : n[ot(re[0])];
							var me = P[re[2]];
							if (!v) break;
							if (!v.c) v.c = [];
							m = { a: re[1], t: me.TxO.t };
							v.c.push(m);
						}
						break;
					default:
						switch (q.n) {
							case "ClrtClient":
								break;
							case "XFExt":
								vo(C[re.ixfe], re.ext);
								break;
							case "DefColWidth":
								M = re;
								break;
							case "DefaultRowHeight":
								U = re[1];
								break;
							case "ColInfo":
								{
									if (!D.cellStyles) break;
									while (re.e >= re.s) {
										N[re.e--] = { width: re.w / 256 };
										if (!H) {
											H = true;
											nl(re.w / 256);
										}
										il(N[re.e + 1]);
									}
								}
								break;
							case "Row":
								{
									var be = {};
									if (re.level != null) {
										L[re.r] = be;
										be.level = re.level;
									}
									if (re.hidden) {
										L[re.r] = be;
										be.hidden = true;
									}
									if (re.hpt) {
										L[re.r] = be;
										be.hpt = re.hpt;
										be.hpx = ol(re.hpt);
									}
								}
								break;
							case "LeftMargin":
							case "RightMargin":
							case "TopMargin":
							case "BottomMargin":
								if (!n["!margins"]) Yu((n["!margins"] = {}));
								n["!margins"][te.slice(0, -6).toLowerCase()] = re;
								break;
							case "Setup":
								if (!n["!margins"]) Yu((n["!margins"] = {}));
								n["!margins"].header = re.header;
								n["!margins"].footer = re.footer;
								break;
							case "Window2":
								if (re.RTL) T.Views[0].RTL = true;
								break;
							case "Header":
								break;
							case "Footer":
								break;
							case "HCenter":
								break;
							case "VCenter":
								break;
							case "Pls":
								break;
							case "GCW":
								break;
							case "LHRecord":
								break;
							case "DBCell":
								break;
							case "EntExU2":
								break;
							case "SxView":
								break;
							case "Sxvd":
								break;
							case "SXVI":
								break;
							case "SXVDEx":
								break;
							case "SxIvd":
								break;
							case "SXString":
								break;
							case "Sync":
								break;
							case "Addin":
								break;
							case "SXDI":
								break;
							case "SXLI":
								break;
							case "SXEx":
								break;
							case "QsiSXTag":
								break;
							case "Selection":
								break;
							case "Feat":
								break;
							case "FeatHdr":
							case "FeatHdr11":
								break;
							case "Feature11":
							case "Feature12":
							case "List12":
								break;
							case "Country":
								S = re;
								break;
							case "RecalcId":
								break;
							case "DxGCol":
								break;
							case "Fbi":
							case "Fbi2":
							case "GelFrame":
								break;
							case "Font":
								break;
							case "XFCRC":
								break;
							case "Style":
								break;
							case "StyleExt":
								break;
							case "Palette":
								B = re;
								break;
							case "Theme":
								O = re;
								break;
							case "ScenarioProtect":
								break;
							case "ObjProtect":
								break;
							case "CondFmt12":
								break;
							case "Table":
								break;
							case "TableStyles":
								break;
							case "TableStyle":
								break;
							case "TableStyleElement":
								break;
							case "SXStreamID":
								break;
							case "SXVS":
								break;
							case "DConRef":
								break;
							case "SXAddl":
								break;
							case "DConBin":
								break;
							case "DConName":
								break;
							case "SXPI":
								break;
							case "SxFormat":
								break;
							case "SxSelect":
								break;
							case "SxRule":
								break;
							case "SxFilt":
								break;
							case "SxItm":
								break;
							case "SxDXF":
								break;
							case "ScenMan":
								break;
							case "DCon":
								break;
							case "CellWatch":
								break;
							case "PrintRowCol":
								break;
							case "PrintGrid":
								break;
							case "PrintSize":
								break;
							case "XCT":
								break;
							case "CRN":
								break;
							case "Scl":
								{
								}
								break;
							case "SheetExt":
								{
								}
								break;
							case "SheetExtOptional":
								{
								}
								break;
							case "ObNoMacros":
								{
								}
								break;
							case "ObProj":
								{
								}
								break;
							case "CodeName":
								{
									if (!c) T.WBProps.CodeName = re || "ThisWorkbook";
									else x.CodeName = re || x.name;
								}
								break;
							case "GUIDTypeLib":
								{
								}
								break;
							case "WOpt":
								break;
							case "PhoneticInfo":
								break;
							case "OleObjectSize":
								break;
							case "DXF":
							case "DXFN":
							case "DXFN12":
							case "DXFN12List":
							case "DXFN12NoCB":
								break;
							case "Dv":
							case "DVal":
								break;
							case "BRAI":
							case "Series":
							case "SeriesText":
								break;
							case "DConn":
								break;
							case "DbOrParamQry":
								break;
							case "DBQueryExt":
								break;
							case "OleDbConn":
								break;
							case "ExtString":
								break;
							case "IFmtRecord":
								break;
							case "CondFmt":
							case "CF":
							case "CF12":
							case "CFEx":
								break;
							case "Excel9File":
								break;
							case "Units":
								break;
							case "InterfaceHdr":
							case "Mms":
							case "InterfaceEnd":
							case "DSF":
								break;
							case "BuiltInFnGroupCount":
								break;
							case "Window1":
							case "HideObj":
							case "GridSet":
							case "Guts":
							case "UserBView":
							case "UserSViewBegin":
							case "UserSViewEnd":
							case "Pane":
								break;
							default:
								switch (q.n) {
									case "Dat":
									case "Begin":
									case "End":
									case "StartBlock":
									case "EndBlock":
									case "Frame":
									case "Area":
									case "Axis":
									case "AxisLine":
									case "Tick":
										break;
									case "AxesUsed":
									case "CrtLayout12":
									case "CrtLayout12A":
									case "CrtLink":
									case "CrtLine":
									case "CrtMlFrt":
									case "CrtMlFrtContinue":
										break;
									case "LineFormat":
									case "AreaFormat":
									case "Chart":
									case "Chart3d":
									case "Chart3DBarShape":
									case "ChartFormat":
									case "ChartFrtInfo":
										break;
									case "PlotArea":
									case "PlotGrowth":
										break;
									case "SeriesList":
									case "SerParent":
									case "SerAuxTrend":
										break;
									case "DataFormat":
									case "SerToCrt":
									case "FontX":
										break;
									case "CatSerRange":
									case "AxcExt":
									case "SerFmt":
										break;
									case "ShtProps":
										break;
									case "DefaultText":
									case "Text":
									case "CatLab":
										break;
									case "DataLabExtContents":
										break;
									case "Legend":
									case "LegendException":
										break;
									case "Pie":
									case "Scatter":
										break;
									case "PieFormat":
									case "MarkerFormat":
										break;
									case "StartObject":
									case "EndObject":
										break;
									case "AlRuns":
									case "ObjectLink":
										break;
									case "SIIndex":
										break;
									case "AttachedLabel":
									case "YMult":
										break;
									case "Line":
									case "Bar":
										break;
									case "Surf":
										break;
									case "AxisParent":
										break;
									case "Pos":
										break;
									case "ValueRange":
										break;
									case "SXViewEx9":
										break;
									case "SXViewLink":
										break;
									case "PivotChartBits":
										break;
									case "SBaseRef":
										break;
									case "TextPropsStream":
										break;
									case "LnExt":
										break;
									case "MkrExt":
										break;
									case "CrtCoopt":
										break;
									case "Qsi":
									case "Qsif":
									case "Qsir":
									case "QsiSXTag":
										break;
									case "TxtQry":
										break;
									case "FilterMode":
										break;
									case "AutoFilter":
									case "AutoFilterInfo":
										break;
									case "AutoFilter12":
										break;
									case "DropDownObjIds":
										break;
									case "Sort":
										break;
									case "SortData":
										break;
									case "ShapePropsStream":
										break;
									case "MsoDrawing":
									case "MsoDrawingGroup":
									case "MsoDrawingSelection":
										break;
									case "WebPub":
									case "AutoWebPub":
										break;
									case "HeaderFooter":
									case "HFPicture":
									case "PLV":
									case "HorizontalPageBreaks":
									case "VerticalPageBreaks":
										break;
									case "Backup":
									case "CompressPictures":
									case "Compat12":
										break;
									case "Continue":
									case "ContinueFrt12":
										break;
									case "FrtFontList":
									case "FrtWrapper":
										break;
									default:
										switch (q.n) {
											case "TabIdConf":
											case "Radar":
											case "RadarArea":
											case "DropBar":
											case "Intl":
											case "CoordList":
											case "SerAuxErrBar":
												break;
											case "BIFF2FONTCLR":
											case "BIFF2FMTCNT":
											case "BIFF2FONTXTRA":
												break;
											case "BIFF2XF":
											case "BIFF3XF":
											case "BIFF4XF":
												break;
											case "BIFF4FMTCNT":
											case "BIFF2ROW":
											case "BIFF2WINDOW2":
												break;
											case "SCENARIO":
											case "DConBin":
											case "PicF":
											case "DataLabExt":
											case "Lel":
											case "BopPop":
											case "BopPopCustom":
											case "RealTimeData":
											case "Name":
												break;
											case "LHNGraph":
											case "FnGroupName":
											case "AddMenu":
											case "LPr":
												break;
											case "ListObj":
											case "ListField":
												break;
											case "RRSort":
												break;
											case "BigName":
												break;
											case "ToolbarHdr":
											case "ToolbarEnd":
												break;
											case "DDEObjName":
												break;
											case "FRTArchId$":
												break;
											default:
												if (r.WTF) throw "Unrecognized Record " + q.n;
										}
								}
						}
				}
			} else e.l += J;
		}
		t.SheetNames = X(i)
			.sort(function (e, r) {
				return Number(e) - Number(r);
			})
			.map(function (e) {
				return i[e].name;
			});
		if (!r.bookSheets) t.Sheets = a;
		if (t.Sheets)
			K.forEach(function (e, r) {
				t.Sheets[t.SheetNames[r]]["!autofilter"] = e;
			});
		t.Preamble = u;
		t.Strings = o;
		t.SSF = R.get_table();
		if (D.enc) t.Encryption = D.enc;
		if (O) t.Themes = O;
		t.Metadata = {};
		if (S !== undefined) t.Metadata.Country = S;
		if (W.names.length > 0) T.Names = W.names;
		t.Workbook = T;
		return t;
	}
	var np = {
		SI: "e0859ff2f94f6810ab9108002b27b3d9",
		DSI: "02d5cdd59c2e1b10939708002b2cf9ae",
		UDI: "05d5cdd59c2e1b10939708002b2cf9ae",
	};
	function ip(e, r, t) {
		var a = U.find(e, "!DocumentSummaryInformation");
		if (a && a.size > 0)
			try {
				var n = Rn(a, ha, np.DSI);
				for (var i in n) r[i] = n[i];
			} catch (s) {
				if (t.WTF) throw s;
			}
		var f = U.find(e, "!SummaryInformation");
		if (f && f.size > 0)
			try {
				var l = Rn(f, da, np.SI);
				for (var o in l) if (r[o] == null) r[o] = l[o];
			} catch (s) {
				if (t.WTF) throw s;
			}
		if (r.HeadingPairs && r.TitlesOfParts) {
			Za(r.HeadingPairs, r.TitlesOfParts, r, t);
			delete r.HeadingPairs;
			delete r.TitlesOfParts;
		}
	}
	function sp(e, r) {
		var t = [],
			a = [],
			n = [];
		var i = 0,
			s;
		if (e.Props) {
			s = X(e.Props);
			for (i = 0; i < s.length; ++i)
				(pa.hasOwnProperty(s[i]) ? t : ma.hasOwnProperty(s[i]) ? a : n).push([
					s[i],
					e.Props[s[i]],
				]);
		}
		if (e.Custprops) {
			s = X(e.Custprops);
			for (i = 0; i < s.length; ++i)
				if (!(e.Props || {}).hasOwnProperty(s[i]))
					(pa.hasOwnProperty(s[i]) ? t : ma.hasOwnProperty(s[i]) ? a : n).push([
						s[i],
						e.Custprops[s[i]],
					]);
		}
		var f = [];
		for (i = 0; i < n.length; ++i) {
			if (yn.indexOf(n[i][0]) > -1) continue;
			if (n[i][1] == null) continue;
			f.push(n[i]);
		}
		if (a.length)
			U.utils.cfb_add(r, "/SummaryInformation", Dn(a, np.SI, ma, da));
		if (t.length || f.length)
			U.utils.cfb_add(
				r,
				"/DocumentSummaryInformation",
				Dn(t, np.DSI, pa, ha, f.length ? f : null, np.UDI)
			);
	}
	function fp(e, r) {
		if (!r) r = {};
		qp(r);
		o();
		if (r.codepage) s(r.codepage);
		var t, a;
		if (e.FullPaths) {
			if (U.find(e, "/encryption"))
				throw new Error("File is password-protected");
			t = U.find(e, "!CompObj");
			a = U.find(e, "/Workbook") || U.find(e, "/Book");
		} else {
			switch (r.type) {
				case "base64":
					e = _(b.decode(e));
					break;
				case "binary":
					e = _(e);
					break;
				case "buffer":
					break;
				case "array":
					if (!Array.isArray(e)) e = Array.prototype.slice.call(e);
					break;
			}
			Wr(e, 0);
			a = { content: e };
		}
		var n;
		var i;
		if (t) qv(t);
		if (r.bookProps && !r.bookSheets) n = {};
		else {
			var f = g ? "buffer" : "array";
			if (a && a.content) n = ap(a.content, r);
			else if ((i = U.find(e, "PerfectOffice_MAIN")) && i.content)
				n = af.to_workbook(i.content, ((r.type = f), r));
			else if ((i = U.find(e, "NativeContent_MAIN")) && i.content)
				n = af.to_workbook(i.content, ((r.type = f), r));
			else throw new Error("Cannot find Workbook stream");
			if (r.bookVBA && e.FullPaths && U.find(e, "/_VBA_PROJECT_CUR/VBA/dir"))
				n.vbaraw = Po(e);
		}
		var l = {};
		if (e.FullPaths) ip(e, l, r);
		n.Props = n.Custprops = l;
		if (r.bookFiles) n.cfb = e;
		return n;
	}
	function lp(e, r) {
		var t = r || {};
		var a = U.utils.cfb_new({ root: "R" });
		var n = "/Workbook";
		switch (t.bookType || "xls") {
			case "xls":
				t.bookType = "biff8";
			case "xla":
				if (!t.bookType) t.bookType = "xla";
			case "biff8":
				n = "/Workbook";
				t.biff = 8;
				break;
			case "biff5":
				n = "/Book";
				t.biff = 5;
				break;
			default:
				throw new Error("invalid type " + t.bookType + " for XLS CFB");
		}
		U.utils.cfb_add(a, n, Ip(e, t));
		if (t.biff == 8 && (e.Props || e.Custprops)) sp(e, a);
		if (t.biff == 8 && e.vbaraw)
			No(
				a,
				U.read(e.vbaraw, {
					type: typeof e.vbaraw == "string" ? "binary" : "buffer",
				})
			);
		return a;
	}
	var op = {
		0: { n: "BrtRowHdr", f: xh },
		1: { n: "BrtCellBlank", f: Ph },
		2: { n: "BrtCellRk", f: Xh },
		3: { n: "BrtCellError", f: Uh },
		4: { n: "BrtCellBool", f: Lh },
		5: { n: "BrtCellReal", f: Vh },
		6: { n: "BrtCellSt", f: jh },
		7: { n: "BrtCellIsst", f: Hh },
		8: { n: "BrtFmlaString", f: Qh },
		9: { n: "BrtFmlaNum", f: Zh },
		10: { n: "BrtFmlaBool", f: Yh },
		11: { n: "BrtFmlaError", f: $h },
		16: { n: "BrtFRTArchID$", f: ev },
		19: { n: "BrtSSTItem", f: _t },
		20: { n: "BrtPCDIMissing" },
		21: { n: "BrtPCDINumber" },
		22: { n: "BrtPCDIBoolean" },
		23: { n: "BrtPCDIError" },
		24: { n: "BrtPCDIString" },
		25: { n: "BrtPCDIDatetime" },
		26: { n: "BrtPCDIIndex" },
		27: { n: "BrtPCDIAMissing" },
		28: { n: "BrtPCDIANumber" },
		29: { n: "BrtPCDIABoolean" },
		30: { n: "BrtPCDIAError" },
		31: { n: "BrtPCDIAString" },
		32: { n: "BrtPCDIADatetime" },
		33: { n: "BrtPCRRecord" },
		34: { n: "BrtPCRRecordDt" },
		35: { n: "BrtFRTBegin" },
		36: { n: "BrtFRTEnd" },
		37: { n: "BrtACBegin" },
		38: { n: "BrtACEnd" },
		39: { n: "BrtName", f: rv },
		40: { n: "BrtIndexRowBlock" },
		42: { n: "BrtIndexBlock" },
		43: { n: "BrtFont", f: Bl },
		44: { n: "BrtFmt", f: _l },
		45: { n: "BrtFill", f: Il },
		46: { n: "BrtBorder", f: Fl },
		47: { n: "BrtXF", f: Rl },
		48: { n: "BrtStyle" },
		49: { n: "BrtCellMeta" },
		50: { n: "BrtValueMeta" },
		51: { n: "BrtMdb" },
		52: { n: "BrtBeginFmd" },
		53: { n: "BrtEndFmd" },
		54: { n: "BrtBeginMdx" },
		55: { n: "BrtEndMdx" },
		56: { n: "BrtBeginMdxTuple" },
		57: { n: "BrtEndMdxTuple" },
		58: { n: "BrtMdxMbrIstr" },
		59: { n: "BrtStr" },
		60: { n: "BrtColInfo", f: Ps },
		62: { n: "BrtCellRString" },
		63: { n: "BrtCalcChainItem$", f: mo },
		64: { n: "BrtDVal" },
		65: { n: "BrtSxvcellNum" },
		66: { n: "BrtSxvcellStr" },
		67: { n: "BrtSxvcellBool" },
		68: { n: "BrtSxvcellErr" },
		69: { n: "BrtSxvcellDate" },
		70: { n: "BrtSxvcellNil" },
		128: { n: "BrtFileVersion" },
		129: { n: "BrtBeginSheet" },
		130: { n: "BrtEndSheet" },
		131: { n: "BrtBeginBook", f: Vr, p: 0 },
		132: { n: "BrtEndBook" },
		133: { n: "BrtBeginWsViews" },
		134: { n: "BrtEndWsViews" },
		135: { n: "BrtBeginBookViews" },
		136: { n: "BrtEndBookViews" },
		137: { n: "BrtBeginWsView", f: od },
		138: { n: "BrtEndWsView" },
		139: { n: "BrtBeginCsViews" },
		140: { n: "BrtEndCsViews" },
		141: { n: "BrtBeginCsView" },
		142: { n: "BrtEndCsView" },
		143: { n: "BrtBeginBundleShs" },
		144: { n: "BrtEndBundleShs" },
		145: { n: "BrtBeginSheetData" },
		146: { n: "BrtEndSheetData" },
		147: { n: "BrtWsProp", f: Oh },
		148: { n: "BrtWsDim", f: Ah, p: 16 },
		151: { n: "BrtPane" },
		152: { n: "BrtSel" },
		153: { n: "BrtWbProp", f: Jd },
		154: { n: "BrtWbFactoid" },
		155: { n: "BrtFileRecover" },
		156: { n: "BrtBundleSh", f: Zd },
		157: { n: "BrtCalcProp" },
		158: { n: "BrtBookView" },
		159: { n: "BrtBeginSst", f: mf },
		160: { n: "BrtEndSst" },
		161: { n: "BrtBeginAFilter", f: Ht },
		162: { n: "BrtEndAFilter" },
		163: { n: "BrtBeginFilterColumn" },
		164: { n: "BrtEndFilterColumn" },
		165: { n: "BrtBeginFilters" },
		166: { n: "BrtEndFilters" },
		167: { n: "BrtFilter" },
		168: { n: "BrtColorFilter" },
		169: { n: "BrtIconFilter" },
		170: { n: "BrtTop10Filter" },
		171: { n: "BrtDynamicFilter" },
		172: { n: "BrtBeginCustomFilters" },
		173: { n: "BrtEndCustomFilters" },
		174: { n: "BrtCustomFilter" },
		175: { n: "BrtAFilterDateGroupItem" },
		176: { n: "BrtMergeCell", f: Jh },
		177: { n: "BrtBeginMergeCells" },
		178: { n: "BrtEndMergeCells" },
		179: { n: "BrtBeginPivotCacheDef" },
		180: { n: "BrtEndPivotCacheDef" },
		181: { n: "BrtBeginPCDFields" },
		182: { n: "BrtEndPCDFields" },
		183: { n: "BrtBeginPCDField" },
		184: { n: "BrtEndPCDField" },
		185: { n: "BrtBeginPCDSource" },
		186: { n: "BrtEndPCDSource" },
		187: { n: "BrtBeginPCDSRange" },
		188: { n: "BrtEndPCDSRange" },
		189: { n: "BrtBeginPCDFAtbl" },
		190: { n: "BrtEndPCDFAtbl" },
		191: { n: "BrtBeginPCDIRun" },
		192: { n: "BrtEndPCDIRun" },
		193: { n: "BrtBeginPivotCacheRecords" },
		194: { n: "BrtEndPivotCacheRecords" },
		195: { n: "BrtBeginPCDHierarchies" },
		196: { n: "BrtEndPCDHierarchies" },
		197: { n: "BrtBeginPCDHierarchy" },
		198: { n: "BrtEndPCDHierarchy" },
		199: { n: "BrtBeginPCDHFieldsUsage" },
		200: { n: "BrtEndPCDHFieldsUsage" },
		201: { n: "BrtBeginExtConnection" },
		202: { n: "BrtEndExtConnection" },
		203: { n: "BrtBeginECDbProps" },
		204: { n: "BrtEndECDbProps" },
		205: { n: "BrtBeginECOlapProps" },
		206: { n: "BrtEndECOlapProps" },
		207: { n: "BrtBeginPCDSConsol" },
		208: { n: "BrtEndPCDSConsol" },
		209: { n: "BrtBeginPCDSCPages" },
		210: { n: "BrtEndPCDSCPages" },
		211: { n: "BrtBeginPCDSCPage" },
		212: { n: "BrtEndPCDSCPage" },
		213: { n: "BrtBeginPCDSCPItem" },
		214: { n: "BrtEndPCDSCPItem" },
		215: { n: "BrtBeginPCDSCSets" },
		216: { n: "BrtEndPCDSCSets" },
		217: { n: "BrtBeginPCDSCSet" },
		218: { n: "BrtEndPCDSCSet" },
		219: { n: "BrtBeginPCDFGroup" },
		220: { n: "BrtEndPCDFGroup" },
		221: { n: "BrtBeginPCDFGItems" },
		222: { n: "BrtEndPCDFGItems" },
		223: { n: "BrtBeginPCDFGRange" },
		224: { n: "BrtEndPCDFGRange" },
		225: { n: "BrtBeginPCDFGDiscrete" },
		226: { n: "BrtEndPCDFGDiscrete" },
		227: { n: "BrtBeginPCDSDTupleCache" },
		228: { n: "BrtEndPCDSDTupleCache" },
		229: { n: "BrtBeginPCDSDTCEntries" },
		230: { n: "BrtEndPCDSDTCEntries" },
		231: { n: "BrtBeginPCDSDTCEMembers" },
		232: { n: "BrtEndPCDSDTCEMembers" },
		233: { n: "BrtBeginPCDSDTCEMember" },
		234: { n: "BrtEndPCDSDTCEMember" },
		235: { n: "BrtBeginPCDSDTCQueries" },
		236: { n: "BrtEndPCDSDTCQueries" },
		237: { n: "BrtBeginPCDSDTCQuery" },
		238: { n: "BrtEndPCDSDTCQuery" },
		239: { n: "BrtBeginPCDSDTCSets" },
		240: { n: "BrtEndPCDSDTCSets" },
		241: { n: "BrtBeginPCDSDTCSet" },
		242: { n: "BrtEndPCDSDTCSet" },
		243: { n: "BrtBeginPCDCalcItems" },
		244: { n: "BrtEndPCDCalcItems" },
		245: { n: "BrtBeginPCDCalcItem" },
		246: { n: "BrtEndPCDCalcItem" },
		247: { n: "BrtBeginPRule" },
		248: { n: "BrtEndPRule" },
		249: { n: "BrtBeginPRFilters" },
		250: { n: "BrtEndPRFilters" },
		251: { n: "BrtBeginPRFilter" },
		252: { n: "BrtEndPRFilter" },
		253: { n: "BrtBeginPNames" },
		254: { n: "BrtEndPNames" },
		255: { n: "BrtBeginPName" },
		256: { n: "BrtEndPName" },
		257: { n: "BrtBeginPNPairs" },
		258: { n: "BrtEndPNPairs" },
		259: { n: "BrtBeginPNPair" },
		260: { n: "BrtEndPNPair" },
		261: { n: "BrtBeginECWebProps" },
		262: { n: "BrtEndECWebProps" },
		263: { n: "BrtBeginEcWpTables" },
		264: { n: "BrtEndECWPTables" },
		265: { n: "BrtBeginECParams" },
		266: { n: "BrtEndECParams" },
		267: { n: "BrtBeginECParam" },
		268: { n: "BrtEndECParam" },
		269: { n: "BrtBeginPCDKPIs" },
		270: { n: "BrtEndPCDKPIs" },
		271: { n: "BrtBeginPCDKPI" },
		272: { n: "BrtEndPCDKPI" },
		273: { n: "BrtBeginDims" },
		274: { n: "BrtEndDims" },
		275: { n: "BrtBeginDim" },
		276: { n: "BrtEndDim" },
		277: { n: "BrtIndexPartEnd" },
		278: { n: "BrtBeginStyleSheet" },
		279: { n: "BrtEndStyleSheet" },
		280: { n: "BrtBeginSXView" },
		281: { n: "BrtEndSXVI" },
		282: { n: "BrtBeginSXVI" },
		283: { n: "BrtBeginSXVIs" },
		284: { n: "BrtEndSXVIs" },
		285: { n: "BrtBeginSXVD" },
		286: { n: "BrtEndSXVD" },
		287: { n: "BrtBeginSXVDs" },
		288: { n: "BrtEndSXVDs" },
		289: { n: "BrtBeginSXPI" },
		290: { n: "BrtEndSXPI" },
		291: { n: "BrtBeginSXPIs" },
		292: { n: "BrtEndSXPIs" },
		293: { n: "BrtBeginSXDI" },
		294: { n: "BrtEndSXDI" },
		295: { n: "BrtBeginSXDIs" },
		296: { n: "BrtEndSXDIs" },
		297: { n: "BrtBeginSXLI" },
		298: { n: "BrtEndSXLI" },
		299: { n: "BrtBeginSXLIRws" },
		300: { n: "BrtEndSXLIRws" },
		301: { n: "BrtBeginSXLICols" },
		302: { n: "BrtEndSXLICols" },
		303: { n: "BrtBeginSXFormat" },
		304: { n: "BrtEndSXFormat" },
		305: { n: "BrtBeginSXFormats" },
		306: { n: "BrtEndSxFormats" },
		307: { n: "BrtBeginSxSelect" },
		308: { n: "BrtEndSxSelect" },
		309: { n: "BrtBeginISXVDRws" },
		310: { n: "BrtEndISXVDRws" },
		311: { n: "BrtBeginISXVDCols" },
		312: { n: "BrtEndISXVDCols" },
		313: { n: "BrtEndSXLocation" },
		314: { n: "BrtBeginSXLocation" },
		315: { n: "BrtEndSXView" },
		316: { n: "BrtBeginSXTHs" },
		317: { n: "BrtEndSXTHs" },
		318: { n: "BrtBeginSXTH" },
		319: { n: "BrtEndSXTH" },
		320: { n: "BrtBeginISXTHRws" },
		321: { n: "BrtEndISXTHRws" },
		322: { n: "BrtBeginISXTHCols" },
		323: { n: "BrtEndISXTHCols" },
		324: { n: "BrtBeginSXTDMPS" },
		325: { n: "BrtEndSXTDMPs" },
		326: { n: "BrtBeginSXTDMP" },
		327: { n: "BrtEndSXTDMP" },
		328: { n: "BrtBeginSXTHItems" },
		329: { n: "BrtEndSXTHItems" },
		330: { n: "BrtBeginSXTHItem" },
		331: { n: "BrtEndSXTHItem" },
		332: { n: "BrtBeginMetadata" },
		333: { n: "BrtEndMetadata" },
		334: { n: "BrtBeginEsmdtinfo" },
		335: { n: "BrtMdtinfo" },
		336: { n: "BrtEndEsmdtinfo" },
		337: { n: "BrtBeginEsmdb" },
		338: { n: "BrtEndEsmdb" },
		339: { n: "BrtBeginEsfmd" },
		340: { n: "BrtEndEsfmd" },
		341: { n: "BrtBeginSingleCells" },
		342: { n: "BrtEndSingleCells" },
		343: { n: "BrtBeginList" },
		344: { n: "BrtEndList" },
		345: { n: "BrtBeginListCols" },
		346: { n: "BrtEndListCols" },
		347: { n: "BrtBeginListCol" },
		348: { n: "BrtEndListCol" },
		349: { n: "BrtBeginListXmlCPr" },
		350: { n: "BrtEndListXmlCPr" },
		351: { n: "BrtListCCFmla" },
		352: { n: "BrtListTrFmla" },
		353: { n: "BrtBeginExternals" },
		354: { n: "BrtEndExternals" },
		355: { n: "BrtSupBookSrc", f: Ft },
		357: { n: "BrtSupSelf" },
		358: { n: "BrtSupSame" },
		359: { n: "BrtSupTabs" },
		360: { n: "BrtBeginSupBook" },
		361: { n: "BrtPlaceholderName" },
		362: { n: "BrtExternSheet", f: hs },
		363: { n: "BrtExternTableStart" },
		364: { n: "BrtExternTableEnd" },
		366: { n: "BrtExternRowHdr" },
		367: { n: "BrtExternCellBlank" },
		368: { n: "BrtExternCellReal" },
		369: { n: "BrtExternCellBool" },
		370: { n: "BrtExternCellError" },
		371: { n: "BrtExternCellString" },
		372: { n: "BrtBeginEsmdx" },
		373: { n: "BrtEndEsmdx" },
		374: { n: "BrtBeginMdxSet" },
		375: { n: "BrtEndMdxSet" },
		376: { n: "BrtBeginMdxMbrProp" },
		377: { n: "BrtEndMdxMbrProp" },
		378: { n: "BrtBeginMdxKPI" },
		379: { n: "BrtEndMdxKPI" },
		380: { n: "BrtBeginEsstr" },
		381: { n: "BrtEndEsstr" },
		382: { n: "BrtBeginPRFItem" },
		383: { n: "BrtEndPRFItem" },
		384: { n: "BrtBeginPivotCacheIDs" },
		385: { n: "BrtEndPivotCacheIDs" },
		386: { n: "BrtBeginPivotCacheID" },
		387: { n: "BrtEndPivotCacheID" },
		388: { n: "BrtBeginISXVIs" },
		389: { n: "BrtEndISXVIs" },
		390: { n: "BrtBeginColInfos" },
		391: { n: "BrtEndColInfos" },
		392: { n: "BrtBeginRwBrk" },
		393: { n: "BrtEndRwBrk" },
		394: { n: "BrtBeginColBrk" },
		395: { n: "BrtEndColBrk" },
		396: { n: "BrtBrk" },
		397: { n: "BrtUserBookView" },
		398: { n: "BrtInfo" },
		399: { n: "BrtCUsr" },
		400: { n: "BrtUsr" },
		401: { n: "BrtBeginUsers" },
		403: { n: "BrtEOF" },
		404: { n: "BrtUCR" },
		405: { n: "BrtRRInsDel" },
		406: { n: "BrtRREndInsDel" },
		407: { n: "BrtRRMove" },
		408: { n: "BrtRREndMove" },
		409: { n: "BrtRRChgCell" },
		410: { n: "BrtRREndChgCell" },
		411: { n: "BrtRRHeader" },
		412: { n: "BrtRRUserView" },
		413: { n: "BrtRRRenSheet" },
		414: { n: "BrtRRInsertSh" },
		415: { n: "BrtRRDefName" },
		416: { n: "BrtRRNote" },
		417: { n: "BrtRRConflict" },
		418: { n: "BrtRRTQSIF" },
		419: { n: "BrtRRFormat" },
		420: { n: "BrtRREndFormat" },
		421: { n: "BrtRRAutoFmt" },
		422: { n: "BrtBeginUserShViews" },
		423: { n: "BrtBeginUserShView" },
		424: { n: "BrtEndUserShView" },
		425: { n: "BrtEndUserShViews" },
		426: { n: "BrtArrFmla", f: ad },
		427: { n: "BrtShrFmla", f: nd },
		428: { n: "BrtTable" },
		429: { n: "BrtBeginExtConnections" },
		430: { n: "BrtEndExtConnections" },
		431: { n: "BrtBeginPCDCalcMems" },
		432: { n: "BrtEndPCDCalcMems" },
		433: { n: "BrtBeginPCDCalcMem" },
		434: { n: "BrtEndPCDCalcMem" },
		435: { n: "BrtBeginPCDHGLevels" },
		436: { n: "BrtEndPCDHGLevels" },
		437: { n: "BrtBeginPCDHGLevel" },
		438: { n: "BrtEndPCDHGLevel" },
		439: { n: "BrtBeginPCDHGLGroups" },
		440: { n: "BrtEndPCDHGLGroups" },
		441: { n: "BrtBeginPCDHGLGroup" },
		442: { n: "BrtEndPCDHGLGroup" },
		443: { n: "BrtBeginPCDHGLGMembers" },
		444: { n: "BrtEndPCDHGLGMembers" },
		445: { n: "BrtBeginPCDHGLGMember" },
		446: { n: "BrtEndPCDHGLGMember" },
		447: { n: "BrtBeginQSI" },
		448: { n: "BrtEndQSI" },
		449: { n: "BrtBeginQSIR" },
		450: { n: "BrtEndQSIR" },
		451: { n: "BrtBeginDeletedNames" },
		452: { n: "BrtEndDeletedNames" },
		453: { n: "BrtBeginDeletedName" },
		454: { n: "BrtEndDeletedName" },
		455: { n: "BrtBeginQSIFs" },
		456: { n: "BrtEndQSIFs" },
		457: { n: "BrtBeginQSIF" },
		458: { n: "BrtEndQSIF" },
		459: { n: "BrtBeginAutoSortScope" },
		460: { n: "BrtEndAutoSortScope" },
		461: { n: "BrtBeginConditionalFormatting" },
		462: { n: "BrtEndConditionalFormatting" },
		463: { n: "BrtBeginCFRule" },
		464: { n: "BrtEndCFRule" },
		465: { n: "BrtBeginIconSet" },
		466: { n: "BrtEndIconSet" },
		467: { n: "BrtBeginDatabar" },
		468: { n: "BrtEndDatabar" },
		469: { n: "BrtBeginColorScale" },
		470: { n: "BrtEndColorScale" },
		471: { n: "BrtCFVO" },
		472: { n: "BrtExternValueMeta" },
		473: { n: "BrtBeginColorPalette" },
		474: { n: "BrtEndColorPalette" },
		475: { n: "BrtIndexedColor" },
		476: { n: "BrtMargins", f: fd },
		477: { n: "BrtPrintOptions" },
		478: { n: "BrtPageSetup" },
		479: { n: "BrtBeginHeaderFooter" },
		480: { n: "BrtEndHeaderFooter" },
		481: { n: "BrtBeginSXCrtFormat" },
		482: { n: "BrtEndSXCrtFormat" },
		483: { n: "BrtBeginSXCrtFormats" },
		484: { n: "BrtEndSXCrtFormats" },
		485: { n: "BrtWsFmtInfo", f: Dh },
		486: { n: "BrtBeginMgs" },
		487: { n: "BrtEndMGs" },
		488: { n: "BrtBeginMGMaps" },
		489: { n: "BrtEndMGMaps" },
		490: { n: "BrtBeginMG" },
		491: { n: "BrtEndMG" },
		492: { n: "BrtBeginMap" },
		493: { n: "BrtEndMap" },
		494: { n: "BrtHLink", f: rd },
		495: { n: "BrtBeginDCon" },
		496: { n: "BrtEndDCon" },
		497: { n: "BrtBeginDRefs" },
		498: { n: "BrtEndDRefs" },
		499: { n: "BrtDRef" },
		500: { n: "BrtBeginScenMan" },
		501: { n: "BrtEndScenMan" },
		502: { n: "BrtBeginSct" },
		503: { n: "BrtEndSct" },
		504: { n: "BrtSlc" },
		505: { n: "BrtBeginDXFs" },
		506: { n: "BrtEndDXFs" },
		507: { n: "BrtDXF" },
		508: { n: "BrtBeginTableStyles" },
		509: { n: "BrtEndTableStyles" },
		510: { n: "BrtBeginTableStyle" },
		511: { n: "BrtEndTableStyle" },
		512: { n: "BrtTableStyleElement" },
		513: { n: "BrtTableStyleClient" },
		514: { n: "BrtBeginVolDeps" },
		515: { n: "BrtEndVolDeps" },
		516: { n: "BrtBeginVolType" },
		517: { n: "BrtEndVolType" },
		518: { n: "BrtBeginVolMain" },
		519: { n: "BrtEndVolMain" },
		520: { n: "BrtBeginVolTopic" },
		521: { n: "BrtEndVolTopic" },
		522: { n: "BrtVolSubtopic" },
		523: { n: "BrtVolRef" },
		524: { n: "BrtVolNum" },
		525: { n: "BrtVolErr" },
		526: { n: "BrtVolStr" },
		527: { n: "BrtVolBool" },
		528: { n: "BrtBeginCalcChain$" },
		529: { n: "BrtEndCalcChain$" },
		530: { n: "BrtBeginSortState" },
		531: { n: "BrtEndSortState" },
		532: { n: "BrtBeginSortCond" },
		533: { n: "BrtEndSortCond" },
		534: { n: "BrtBookProtection" },
		535: { n: "BrtSheetProtection" },
		536: { n: "BrtRangeProtection" },
		537: { n: "BrtPhoneticInfo" },
		538: { n: "BrtBeginECTxtWiz" },
		539: { n: "BrtEndECTxtWiz" },
		540: { n: "BrtBeginECTWFldInfoLst" },
		541: { n: "BrtEndECTWFldInfoLst" },
		542: { n: "BrtBeginECTwFldInfo" },
		548: { n: "BrtFileSharing" },
		549: { n: "BrtOleSize" },
		550: { n: "BrtDrawing", f: Ft },
		551: { n: "BrtLegacyDrawing" },
		552: { n: "BrtLegacyDrawingHF" },
		553: { n: "BrtWebOpt" },
		554: { n: "BrtBeginWebPubItems" },
		555: { n: "BrtEndWebPubItems" },
		556: { n: "BrtBeginWebPubItem" },
		557: { n: "BrtEndWebPubItem" },
		558: { n: "BrtBeginSXCondFmt" },
		559: { n: "BrtEndSXCondFmt" },
		560: { n: "BrtBeginSXCondFmts" },
		561: { n: "BrtEndSXCondFmts" },
		562: { n: "BrtBkHim" },
		564: { n: "BrtColor" },
		565: { n: "BrtBeginIndexedColors" },
		566: { n: "BrtEndIndexedColors" },
		569: { n: "BrtBeginMRUColors" },
		570: { n: "BrtEndMRUColors" },
		572: { n: "BrtMRUColor" },
		573: { n: "BrtBeginDVals" },
		574: { n: "BrtEndDVals" },
		577: { n: "BrtSupNameStart" },
		578: { n: "BrtSupNameValueStart" },
		579: { n: "BrtSupNameValueEnd" },
		580: { n: "BrtSupNameNum" },
		581: { n: "BrtSupNameErr" },
		582: { n: "BrtSupNameSt" },
		583: { n: "BrtSupNameNil" },
		584: { n: "BrtSupNameBool" },
		585: { n: "BrtSupNameFmla" },
		586: { n: "BrtSupNameBits" },
		587: { n: "BrtSupNameEnd" },
		588: { n: "BrtEndSupBook" },
		589: { n: "BrtCellSmartTagProperty" },
		590: { n: "BrtBeginCellSmartTag" },
		591: { n: "BrtEndCellSmartTag" },
		592: { n: "BrtBeginCellSmartTags" },
		593: { n: "BrtEndCellSmartTags" },
		594: { n: "BrtBeginSmartTags" },
		595: { n: "BrtEndSmartTags" },
		596: { n: "BrtSmartTagType" },
		597: { n: "BrtBeginSmartTagTypes" },
		598: { n: "BrtEndSmartTagTypes" },
		599: { n: "BrtBeginSXFilters" },
		600: { n: "BrtEndSXFilters" },
		601: { n: "BrtBeginSXFILTER" },
		602: { n: "BrtEndSXFilter" },
		603: { n: "BrtBeginFills" },
		604: { n: "BrtEndFills" },
		605: { n: "BrtBeginCellWatches" },
		606: { n: "BrtEndCellWatches" },
		607: { n: "BrtCellWatch" },
		608: { n: "BrtBeginCRErrs" },
		609: { n: "BrtEndCRErrs" },
		610: { n: "BrtCrashRecErr" },
		611: { n: "BrtBeginFonts" },
		612: { n: "BrtEndFonts" },
		613: { n: "BrtBeginBorders" },
		614: { n: "BrtEndBorders" },
		615: { n: "BrtBeginFmts" },
		616: { n: "BrtEndFmts" },
		617: { n: "BrtBeginCellXFs" },
		618: { n: "BrtEndCellXFs" },
		619: { n: "BrtBeginStyles" },
		620: { n: "BrtEndStyles" },
		625: { n: "BrtBigName" },
		626: { n: "BrtBeginCellStyleXFs" },
		627: { n: "BrtEndCellStyleXFs" },
		628: { n: "BrtBeginComments" },
		629: { n: "BrtEndComments" },
		630: { n: "BrtBeginCommentAuthors" },
		631: { n: "BrtEndCommentAuthors" },
		632: { n: "BrtCommentAuthor", f: Ao },
		633: { n: "BrtBeginCommentList" },
		634: { n: "BrtEndCommentList" },
		635: { n: "BrtBeginComment", f: yo },
		636: { n: "BrtEndComment" },
		637: { n: "BrtCommentText", f: Bt },
		638: { n: "BrtBeginOleObjects" },
		639: { n: "BrtOleObject" },
		640: { n: "BrtEndOleObjects" },
		641: { n: "BrtBeginSxrules" },
		642: { n: "BrtEndSxRules" },
		643: { n: "BrtBeginActiveXControls" },
		644: { n: "BrtActiveX" },
		645: { n: "BrtEndActiveXControls" },
		646: { n: "BrtBeginPCDSDTCEMembersSortBy" },
		648: { n: "BrtBeginCellIgnoreECs" },
		649: { n: "BrtCellIgnoreEC" },
		650: { n: "BrtEndCellIgnoreECs" },
		651: { n: "BrtCsProp", f: Rd },
		652: { n: "BrtCsPageSetup" },
		653: { n: "BrtBeginUserCsViews" },
		654: { n: "BrtEndUserCsViews" },
		655: { n: "BrtBeginUserCsView" },
		656: { n: "BrtEndUserCsView" },
		657: { n: "BrtBeginPcdSFCIEntries" },
		658: { n: "BrtEndPCDSFCIEntries" },
		659: { n: "BrtPCDSFCIEntry" },
		660: { n: "BrtBeginListParts" },
		661: { n: "BrtListPart" },
		662: { n: "BrtEndListParts" },
		663: { n: "BrtSheetCalcProp" },
		664: { n: "BrtBeginFnGroup" },
		665: { n: "BrtFnGroup" },
		666: { n: "BrtEndFnGroup" },
		667: { n: "BrtSupAddin" },
		668: { n: "BrtSXTDMPOrder" },
		669: { n: "BrtCsProtection" },
		671: { n: "BrtBeginWsSortMap" },
		672: { n: "BrtEndWsSortMap" },
		673: { n: "BrtBeginRRSort" },
		674: { n: "BrtEndRRSort" },
		675: { n: "BrtRRSortItem" },
		676: { n: "BrtFileSharingIso" },
		677: { n: "BrtBookProtectionIso" },
		678: { n: "BrtSheetProtectionIso" },
		679: { n: "BrtCsProtectionIso" },
		680: { n: "BrtRangeProtectionIso" },
		1024: { n: "BrtRwDescent" },
		1025: { n: "BrtKnownFonts" },
		1026: { n: "BrtBeginSXTupleSet" },
		1027: { n: "BrtEndSXTupleSet" },
		1028: { n: "BrtBeginSXTupleSetHeader" },
		1029: { n: "BrtEndSXTupleSetHeader" },
		1030: { n: "BrtSXTupleSetHeaderItem" },
		1031: { n: "BrtBeginSXTupleSetData" },
		1032: { n: "BrtEndSXTupleSetData" },
		1033: { n: "BrtBeginSXTupleSetRow" },
		1034: { n: "BrtEndSXTupleSetRow" },
		1035: { n: "BrtSXTupleSetRowItem" },
		1036: { n: "BrtNameExt" },
		1037: { n: "BrtPCDH14" },
		1038: { n: "BrtBeginPCDCalcMem14" },
		1039: { n: "BrtEndPCDCalcMem14" },
		1040: { n: "BrtSXTH14" },
		1041: { n: "BrtBeginSparklineGroup" },
		1042: { n: "BrtEndSparklineGroup" },
		1043: { n: "BrtSparkline" },
		1044: { n: "BrtSXDI14" },
		1045: { n: "BrtWsFmtInfoEx14" },
		1046: { n: "BrtBeginConditionalFormatting14" },
		1047: { n: "BrtEndConditionalFormatting14" },
		1048: { n: "BrtBeginCFRule14" },
		1049: { n: "BrtEndCFRule14" },
		1050: { n: "BrtCFVO14" },
		1051: { n: "BrtBeginDatabar14" },
		1052: { n: "BrtBeginIconSet14" },
		1053: { n: "BrtDVal14" },
		1054: { n: "BrtBeginDVals14" },
		1055: { n: "BrtColor14" },
		1056: { n: "BrtBeginSparklines" },
		1057: { n: "BrtEndSparklines" },
		1058: { n: "BrtBeginSparklineGroups" },
		1059: { n: "BrtEndSparklineGroups" },
		1061: { n: "BrtSXVD14" },
		1062: { n: "BrtBeginSXView14" },
		1063: { n: "BrtEndSXView14" },
		1064: { n: "BrtBeginSXView16" },
		1065: { n: "BrtEndSXView16" },
		1066: { n: "BrtBeginPCD14" },
		1067: { n: "BrtEndPCD14" },
		1068: { n: "BrtBeginExtConn14" },
		1069: { n: "BrtEndExtConn14" },
		1070: { n: "BrtBeginSlicerCacheIDs" },
		1071: { n: "BrtEndSlicerCacheIDs" },
		1072: { n: "BrtBeginSlicerCacheID" },
		1073: { n: "BrtEndSlicerCacheID" },
		1075: { n: "BrtBeginSlicerCache" },
		1076: { n: "BrtEndSlicerCache" },
		1077: { n: "BrtBeginSlicerCacheDef" },
		1078: { n: "BrtEndSlicerCacheDef" },
		1079: { n: "BrtBeginSlicersEx" },
		1080: { n: "BrtEndSlicersEx" },
		1081: { n: "BrtBeginSlicerEx" },
		1082: { n: "BrtEndSlicerEx" },
		1083: { n: "BrtBeginSlicer" },
		1084: { n: "BrtEndSlicer" },
		1085: { n: "BrtSlicerCachePivotTables" },
		1086: { n: "BrtBeginSlicerCacheOlapImpl" },
		1087: { n: "BrtEndSlicerCacheOlapImpl" },
		1088: { n: "BrtBeginSlicerCacheLevelsData" },
		1089: { n: "BrtEndSlicerCacheLevelsData" },
		1090: { n: "BrtBeginSlicerCacheLevelData" },
		1091: { n: "BrtEndSlicerCacheLevelData" },
		1092: { n: "BrtBeginSlicerCacheSiRanges" },
		1093: { n: "BrtEndSlicerCacheSiRanges" },
		1094: { n: "BrtBeginSlicerCacheSiRange" },
		1095: { n: "BrtEndSlicerCacheSiRange" },
		1096: { n: "BrtSlicerCacheOlapItem" },
		1097: { n: "BrtBeginSlicerCacheSelections" },
		1098: { n: "BrtSlicerCacheSelection" },
		1099: { n: "BrtEndSlicerCacheSelections" },
		1100: { n: "BrtBeginSlicerCacheNative" },
		1101: { n: "BrtEndSlicerCacheNative" },
		1102: { n: "BrtSlicerCacheNativeItem" },
		1103: { n: "BrtRangeProtection14" },
		1104: { n: "BrtRangeProtectionIso14" },
		1105: { n: "BrtCellIgnoreEC14" },
		1111: { n: "BrtList14" },
		1112: { n: "BrtCFIcon" },
		1113: { n: "BrtBeginSlicerCachesPivotCacheIDs" },
		1114: { n: "BrtEndSlicerCachesPivotCacheIDs" },
		1115: { n: "BrtBeginSlicers" },
		1116: { n: "BrtEndSlicers" },
		1117: { n: "BrtWbProp14" },
		1118: { n: "BrtBeginSXEdit" },
		1119: { n: "BrtEndSXEdit" },
		1120: { n: "BrtBeginSXEdits" },
		1121: { n: "BrtEndSXEdits" },
		1122: { n: "BrtBeginSXChange" },
		1123: { n: "BrtEndSXChange" },
		1124: { n: "BrtBeginSXChanges" },
		1125: { n: "BrtEndSXChanges" },
		1126: { n: "BrtSXTupleItems" },
		1128: { n: "BrtBeginSlicerStyle" },
		1129: { n: "BrtEndSlicerStyle" },
		1130: { n: "BrtSlicerStyleElement" },
		1131: { n: "BrtBeginStyleSheetExt14" },
		1132: { n: "BrtEndStyleSheetExt14" },
		1133: { n: "BrtBeginSlicerCachesPivotCacheID" },
		1134: { n: "BrtEndSlicerCachesPivotCacheID" },
		1135: { n: "BrtBeginConditionalFormattings" },
		1136: { n: "BrtEndConditionalFormattings" },
		1137: { n: "BrtBeginPCDCalcMemExt" },
		1138: { n: "BrtEndPCDCalcMemExt" },
		1139: { n: "BrtBeginPCDCalcMemsExt" },
		1140: { n: "BrtEndPCDCalcMemsExt" },
		1141: { n: "BrtPCDField14" },
		1142: { n: "BrtBeginSlicerStyles" },
		1143: { n: "BrtEndSlicerStyles" },
		1144: { n: "BrtBeginSlicerStyleElements" },
		1145: { n: "BrtEndSlicerStyleElements" },
		1146: { n: "BrtCFRuleExt" },
		1147: { n: "BrtBeginSXCondFmt14" },
		1148: { n: "BrtEndSXCondFmt14" },
		1149: { n: "BrtBeginSXCondFmts14" },
		1150: { n: "BrtEndSXCondFmts14" },
		1152: { n: "BrtBeginSortCond14" },
		1153: { n: "BrtEndSortCond14" },
		1154: { n: "BrtEndDVals14" },
		1155: { n: "BrtEndIconSet14" },
		1156: { n: "BrtEndDatabar14" },
		1157: { n: "BrtBeginColorScale14" },
		1158: { n: "BrtEndColorScale14" },
		1159: { n: "BrtBeginSxrules14" },
		1160: { n: "BrtEndSxrules14" },
		1161: { n: "BrtBeginPRule14" },
		1162: { n: "BrtEndPRule14" },
		1163: { n: "BrtBeginPRFilters14" },
		1164: { n: "BrtEndPRFilters14" },
		1165: { n: "BrtBeginPRFilter14" },
		1166: { n: "BrtEndPRFilter14" },
		1167: { n: "BrtBeginPRFItem14" },
		1168: { n: "BrtEndPRFItem14" },
		1169: { n: "BrtBeginCellIgnoreECs14" },
		1170: { n: "BrtEndCellIgnoreECs14" },
		1171: { n: "BrtDxf14" },
		1172: { n: "BrtBeginDxF14s" },
		1173: { n: "BrtEndDxf14s" },
		1177: { n: "BrtFilter14" },
		1178: { n: "BrtBeginCustomFilters14" },
		1180: { n: "BrtCustomFilter14" },
		1181: { n: "BrtIconFilter14" },
		1182: { n: "BrtPivotCacheConnectionName" },
		2048: { n: "BrtBeginDecoupledPivotCacheIDs" },
		2049: { n: "BrtEndDecoupledPivotCacheIDs" },
		2050: { n: "BrtDecoupledPivotCacheID" },
		2051: { n: "BrtBeginPivotTableRefs" },
		2052: { n: "BrtEndPivotTableRefs" },
		2053: { n: "BrtPivotTableRef" },
		2054: { n: "BrtSlicerCacheBookPivotTables" },
		2055: { n: "BrtBeginSxvcells" },
		2056: { n: "BrtEndSxvcells" },
		2057: { n: "BrtBeginSxRow" },
		2058: { n: "BrtEndSxRow" },
		2060: { n: "BrtPcdCalcMem15" },
		2067: { n: "BrtQsi15" },
		2068: { n: "BrtBeginWebExtensions" },
		2069: { n: "BrtEndWebExtensions" },
		2070: { n: "BrtWebExtension" },
		2071: { n: "BrtAbsPath15" },
		2072: { n: "BrtBeginPivotTableUISettings" },
		2073: { n: "BrtEndPivotTableUISettings" },
		2075: { n: "BrtTableSlicerCacheIDs" },
		2076: { n: "BrtTableSlicerCacheID" },
		2077: { n: "BrtBeginTableSlicerCache" },
		2078: { n: "BrtEndTableSlicerCache" },
		2079: { n: "BrtSxFilter15" },
		2080: { n: "BrtBeginTimelineCachePivotCacheIDs" },
		2081: { n: "BrtEndTimelineCachePivotCacheIDs" },
		2082: { n: "BrtTimelineCachePivotCacheID" },
		2083: { n: "BrtBeginTimelineCacheIDs" },
		2084: { n: "BrtEndTimelineCacheIDs" },
		2085: { n: "BrtBeginTimelineCacheID" },
		2086: { n: "BrtEndTimelineCacheID" },
		2087: { n: "BrtBeginTimelinesEx" },
		2088: { n: "BrtEndTimelinesEx" },
		2089: { n: "BrtBeginTimelineEx" },
		2090: { n: "BrtEndTimelineEx" },
		2091: { n: "BrtWorkBookPr15" },
		2092: { n: "BrtPCDH15" },
		2093: { n: "BrtBeginTimelineStyle" },
		2094: { n: "BrtEndTimelineStyle" },
		2095: { n: "BrtTimelineStyleElement" },
		2096: { n: "BrtBeginTimelineStylesheetExt15" },
		2097: { n: "BrtEndTimelineStylesheetExt15" },
		2098: { n: "BrtBeginTimelineStyles" },
		2099: { n: "BrtEndTimelineStyles" },
		2100: { n: "BrtBeginTimelineStyleElements" },
		2101: { n: "BrtEndTimelineStyleElements" },
		2102: { n: "BrtDxf15" },
		2103: { n: "BrtBeginDxfs15" },
		2104: { n: "brtEndDxfs15" },
		2105: { n: "BrtSlicerCacheHideItemsWithNoData" },
		2106: { n: "BrtBeginItemUniqueNames" },
		2107: { n: "BrtEndItemUniqueNames" },
		2108: { n: "BrtItemUniqueName" },
		2109: { n: "BrtBeginExtConn15" },
		2110: { n: "BrtEndExtConn15" },
		2111: { n: "BrtBeginOledbPr15" },
		2112: { n: "BrtEndOledbPr15" },
		2113: { n: "BrtBeginDataFeedPr15" },
		2114: { n: "BrtEndDataFeedPr15" },
		2115: { n: "BrtTextPr15" },
		2116: { n: "BrtRangePr15" },
		2117: { n: "BrtDbCommand15" },
		2118: { n: "BrtBeginDbTables15" },
		2119: { n: "BrtEndDbTables15" },
		2120: { n: "BrtDbTable15" },
		2121: { n: "BrtBeginDataModel" },
		2122: { n: "BrtEndDataModel" },
		2123: { n: "BrtBeginModelTables" },
		2124: { n: "BrtEndModelTables" },
		2125: { n: "BrtModelTable" },
		2126: { n: "BrtBeginModelRelationships" },
		2127: { n: "BrtEndModelRelationships" },
		2128: { n: "BrtModelRelationship" },
		2129: { n: "BrtBeginECTxtWiz15" },
		2130: { n: "BrtEndECTxtWiz15" },
		2131: { n: "BrtBeginECTWFldInfoLst15" },
		2132: { n: "BrtEndECTWFldInfoLst15" },
		2133: { n: "BrtBeginECTWFldInfo15" },
		2134: { n: "BrtFieldListActiveItem" },
		2135: { n: "BrtPivotCacheIdVersion" },
		2136: { n: "BrtSXDI15" },
		2137: { n: "BrtBeginModelTimeGroupings" },
		2138: { n: "BrtEndModelTimeGroupings" },
		2139: { n: "BrtBeginModelTimeGrouping" },
		2140: { n: "BrtEndModelTimeGrouping" },
		2141: { n: "BrtModelTimeGroupingCalcCol" },
		3072: { n: "BrtUid" },
		3073: { n: "BrtRevisionPtr" },
		65535: { n: "" },
	};
	var cp = G(op, "n");
	var up = {
		3: { n: "BIFF2NUM", f: Xs },
		4: { n: "BIFF2STR", f: zs },
		6: { n: "Formula", f: Iu },
		9: { n: "BOF", f: ki },
		10: { n: "EOF", f: On },
		12: { n: "CalcCount", f: Mn },
		13: { n: "CalcMode", f: Mn },
		14: { n: "CalcPrecision", f: Nn },
		15: { n: "CalcRefMode", f: Nn },
		16: { n: "CalcDelta", f: Vt },
		17: { n: "CalcIter", f: Nn },
		18: { n: "Protect", f: Nn },
		19: { n: "Password", f: Mn },
		20: { n: "Header", f: fs },
		21: { n: "Footer", f: fs },
		23: { n: "ExternSheet", f: hs },
		24: { n: "Lbl", f: us },
		25: { n: "WinProtect", f: Nn },
		26: { n: "VerticalPageBreaks" },
		27: { n: "HorizontalPageBreaks" },
		28: { n: "Note", f: ws },
		29: { n: "Selection" },
		34: { n: "Date1904", f: Nn },
		35: { n: "ExternName", f: os },
		38: { n: "LeftMargin", f: Vt },
		39: { n: "RightMargin", f: Vt },
		40: { n: "TopMargin", f: Vt },
		41: { n: "BottomMargin", f: Vt },
		42: { n: "PrintRowCol", f: Nn },
		43: { n: "PrintGrid", f: Nn },
		47: { n: "FilePass", f: zf },
		49: { n: "Font", f: Ui },
		51: { n: "PrintSize", f: Mn },
		60: { n: "Continue" },
		61: { n: "Window1", f: Pi },
		64: { n: "Backup", f: Nn },
		65: { n: "Pane" },
		66: { n: "CodePage", f: Mn },
		77: { n: "Pls" },
		80: { n: "DCon" },
		81: { n: "DConRef" },
		82: { n: "DConName" },
		85: { n: "DefColWidth", f: Mn },
		89: { n: "XCT" },
		90: { n: "CRN" },
		91: { n: "FileSharing" },
		92: { n: "WriteAccess", f: Ci },
		93: { n: "Obj", f: Ss },
		94: { n: "Uncalced" },
		95: { n: "CalcSaveRecalc", f: Nn },
		96: { n: "Template" },
		97: { n: "Intl" },
		99: { n: "ObjProtect", f: Nn },
		125: { n: "ColInfo", f: Ps },
		128: { n: "Guts", f: rs },
		129: { n: "WsBool", f: Ti },
		130: { n: "GridSet", f: Mn },
		131: { n: "HCenter", f: Nn },
		132: { n: "VCenter", f: Nn },
		133: { n: "BoundSheet8", f: xi },
		134: { n: "WriteProtect" },
		140: { n: "Country", f: As },
		141: { n: "HideObj", f: Mn },
		144: { n: "Sort" },
		146: { n: "Palette", f: Os },
		151: { n: "Sync" },
		152: { n: "LPr" },
		153: { n: "DxGCol" },
		154: { n: "FnGroupName" },
		155: { n: "FilterMode" },
		156: { n: "BuiltInFnGroupCount", f: Mn },
		157: { n: "AutoFilterInfo" },
		158: { n: "AutoFilter" },
		160: { n: "Scl", f: Hs },
		161: { n: "Setup", f: Ns },
		174: { n: "ScenMan" },
		175: { n: "SCENARIO" },
		176: { n: "SxView" },
		177: { n: "Sxvd" },
		178: { n: "SXVI" },
		180: { n: "SxIvd" },
		181: { n: "SXLI" },
		182: { n: "SXPI" },
		184: { n: "DocRoute" },
		185: { n: "RecipName" },
		189: { n: "MulRk", f: Zi },
		190: { n: "MulBlank", f: Qi },
		193: { n: "Mms", f: On },
		197: { n: "SXDI" },
		198: { n: "SXDB" },
		199: { n: "SXFDB" },
		200: { n: "SXDBB" },
		201: { n: "SXNum" },
		202: { n: "SxBool", f: Nn },
		203: { n: "SxErr" },
		204: { n: "SXInt" },
		205: { n: "SXString" },
		206: { n: "SXDtr" },
		207: { n: "SxNil" },
		208: { n: "SXTbl" },
		209: { n: "SXTBRGIITM" },
		210: { n: "SxTbpg" },
		211: { n: "ObProj" },
		213: { n: "SXStreamID" },
		215: { n: "DBCell" },
		216: { n: "SXRng" },
		217: { n: "SxIsxoper" },
		218: { n: "BookBool", f: Mn },
		220: { n: "DbOrParamQry" },
		221: { n: "ScenarioProtect", f: Nn },
		222: { n: "OleObjectSize" },
		224: { n: "XF", f: qi },
		225: { n: "InterfaceHdr", f: _i },
		226: { n: "InterfaceEnd", f: On },
		227: { n: "SXVS" },
		229: { n: "MergeCells", f: Es },
		233: { n: "BkHim" },
		235: { n: "MsoDrawingGroup" },
		236: { n: "MsoDrawing" },
		237: { n: "MsoDrawingSelection" },
		239: { n: "PhoneticInfo" },
		240: { n: "SxRule" },
		241: { n: "SXEx" },
		242: { n: "SxFilt" },
		244: { n: "SxDXF" },
		245: { n: "SxItm" },
		246: { n: "SxName" },
		247: { n: "SxSelect" },
		248: { n: "SXPair" },
		249: { n: "SxFmla" },
		251: { n: "SxFormat" },
		252: { n: "SST", f: Ii },
		253: { n: "LabelSst", f: Wi },
		255: { n: "ExtSST", f: Ai },
		256: { n: "SXVDEx" },
		259: { n: "SXFormula" },
		290: { n: "SXDBEx" },
		311: { n: "RRDInsDel" },
		312: { n: "RRDHead" },
		315: { n: "RRDChgCell" },
		317: { n: "RRTabId", f: Hn },
		318: { n: "RRDRenSheet" },
		319: { n: "RRSort" },
		320: { n: "RRDMove" },
		330: { n: "RRFormat" },
		331: { n: "RRAutoFmt" },
		333: { n: "RRInsertSh" },
		334: { n: "RRDMoveBegin" },
		335: { n: "RRDMoveEnd" },
		336: { n: "RRDInsDelBegin" },
		337: { n: "RRDInsDelEnd" },
		338: { n: "RRDConflict" },
		339: { n: "RRDDefName" },
		340: { n: "RRDRstEtxp" },
		351: { n: "LRng" },
		352: { n: "UsesELFs", f: Nn },
		353: { n: "DSF", f: On },
		401: { n: "CUsr" },
		402: { n: "CbUsr" },
		403: { n: "UsrInfo" },
		404: { n: "UsrExcl" },
		405: { n: "FileLock" },
		406: { n: "RRDInfo" },
		407: { n: "BCUsrs" },
		408: { n: "UsrChk" },
		425: { n: "UserBView" },
		426: { n: "UserSViewBegin" },
		427: { n: "UserSViewEnd" },
		428: { n: "RRDUserView" },
		429: { n: "Qsi" },
		430: { n: "SupBook", f: ls },
		431: { n: "Prot4Rev", f: Nn },
		432: { n: "CondFmt" },
		433: { n: "CF" },
		434: { n: "DVal" },
		437: { n: "DConBin" },
		438: { n: "TxO", f: Bs },
		439: { n: "RefreshAll", f: Nn },
		440: { n: "HLink", f: Ts },
		441: { n: "Lel" },
		442: { n: "CodeName", f: jn },
		443: { n: "SXFDBType" },
		444: { n: "Prot4RevPass", f: Mn },
		445: { n: "ObNoMacros" },
		446: { n: "Dv" },
		448: { n: "Excel9File", f: On },
		449: { n: "RecalcId", f: Oi, r: 2 },
		450: { n: "EntExU2", f: On },
		512: { n: "Dimensions", f: Ki },
		513: { n: "Blank", f: Us },
		515: { n: "Number", f: is },
		516: { n: "Label", f: Vi },
		517: { n: "BoolErr", f: as },
		518: { n: "Formula", f: Iu },
		519: { n: "String", f: Ws },
		520: { n: "Row", f: Ri },
		523: { n: "Index" },
		545: { n: "Array", f: ms },
		549: { n: "DefaultRowHeight", f: Fi },
		566: { n: "Table" },
		574: { n: "Window2", f: Li },
		638: { n: "RK", f: $i },
		659: { n: "Style" },
		1030: { n: "Formula", f: Iu },
		1048: { n: "BigName" },
		1054: { n: "Format", f: Xi },
		1084: { n: "ContinueBigName" },
		1212: { n: "ShrFmla", f: ps },
		2048: { n: "HLinkTooltip", f: ys },
		2049: { n: "WebPub" },
		2050: { n: "QsiSXTag" },
		2051: { n: "DBQueryExt" },
		2052: { n: "ExtString" },
		2053: { n: "TxtQry" },
		2054: { n: "Qsir" },
		2055: { n: "Qsif" },
		2056: { n: "RRDTQSIF" },
		2057: { n: "BOF", f: ki },
		2058: { n: "OleDbConn" },
		2059: { n: "WOpt" },
		2060: { n: "SXViewEx" },
		2061: { n: "SXTH" },
		2062: { n: "SXPIEx" },
		2063: { n: "SXVDTEx" },
		2064: { n: "SXViewEx9" },
		2066: { n: "ContinueFrt" },
		2067: { n: "RealTimeData" },
		2128: { n: "ChartFrtInfo" },
		2129: { n: "FrtWrapper" },
		2130: { n: "StartBlock" },
		2131: { n: "EndBlock" },
		2132: { n: "StartObject" },
		2133: { n: "EndObject" },
		2134: { n: "CatLab" },
		2135: { n: "YMult" },
		2136: { n: "SXViewLink" },
		2137: { n: "PivotChartBits" },
		2138: { n: "FrtFontList" },
		2146: { n: "SheetExt" },
		2147: { n: "BookExt", r: 12 },
		2148: { n: "SXAddl" },
		2149: { n: "CrErr" },
		2150: { n: "HFPicture" },
		2151: { n: "FeatHdr", f: On },
		2152: { n: "Feat" },
		2154: { n: "DataLabExt" },
		2155: { n: "DataLabExtContents" },
		2156: { n: "CellWatch" },
		2161: { n: "FeatHdr11" },
		2162: { n: "Feature11" },
		2164: { n: "DropDownObjIds" },
		2165: { n: "ContinueFrt11" },
		2166: { n: "DConn" },
		2167: { n: "List12" },
		2168: { n: "Feature12" },
		2169: { n: "CondFmt12" },
		2170: { n: "CF12" },
		2171: { n: "CFEx" },
		2172: { n: "XFCRC", f: Fs, r: 12 },
		2173: { n: "XFExt", f: ho, r: 12 },
		2174: { n: "AutoFilter12" },
		2175: { n: "ContinueFrt12" },
		2180: { n: "MDTInfo" },
		2181: { n: "MDXStr" },
		2182: { n: "MDXTuple" },
		2183: { n: "MDXSet" },
		2184: { n: "MDXProp" },
		2185: { n: "MDXKPI" },
		2186: { n: "MDB" },
		2187: { n: "PLV" },
		2188: { n: "Compat12", f: Nn, r: 12 },
		2189: { n: "DXF" },
		2190: { n: "TableStyles", r: 12 },
		2191: { n: "TableStyle" },
		2192: { n: "TableStyleElement" },
		2194: { n: "StyleExt" },
		2195: { n: "NamePublish" },
		2196: { n: "NameCmt", f: vs, r: 12 },
		2197: { n: "SortData" },
		2198: { n: "Theme", f: so, r: 12 },
		2199: { n: "GUIDTypeLib" },
		2200: { n: "FnGrp12" },
		2201: { n: "NameFnGrp12" },
		2202: { n: "MTRSettings", f: bs, r: 12 },
		2203: { n: "CompressPictures", f: On },
		2204: { n: "HeaderFooter" },
		2205: { n: "CrtLayout12" },
		2206: { n: "CrtMlFrt" },
		2207: { n: "CrtMlFrtContinue" },
		2211: { n: "ForceFullCalculation", f: Di },
		2212: { n: "ShapePropsStream" },
		2213: { n: "TextPropsStream" },
		2214: { n: "RichTextStream" },
		2215: { n: "CrtLayout12A" },
		4097: { n: "Units" },
		4098: { n: "Chart" },
		4099: { n: "Series" },
		4102: { n: "DataFormat" },
		4103: { n: "LineFormat" },
		4105: { n: "MarkerFormat" },
		4106: { n: "AreaFormat" },
		4107: { n: "PieFormat" },
		4108: { n: "AttachedLabel" },
		4109: { n: "SeriesText" },
		4116: { n: "ChartFormat" },
		4117: { n: "Legend" },
		4118: { n: "SeriesList" },
		4119: { n: "Bar" },
		4120: { n: "Line" },
		4121: { n: "Pie" },
		4122: { n: "Area" },
		4123: { n: "Scatter" },
		4124: { n: "CrtLine" },
		4125: { n: "Axis" },
		4126: { n: "Tick" },
		4127: { n: "ValueRange" },
		4128: { n: "CatSerRange" },
		4129: { n: "AxisLine" },
		4130: { n: "CrtLink" },
		4132: { n: "DefaultText" },
		4133: { n: "Text" },
		4134: { n: "FontX", f: Mn },
		4135: { n: "ObjectLink" },
		4146: { n: "Frame" },
		4147: { n: "Begin" },
		4148: { n: "End" },
		4149: { n: "PlotArea" },
		4154: { n: "Chart3d" },
		4156: { n: "PicF" },
		4157: { n: "DropBar" },
		4158: { n: "Radar" },
		4159: { n: "Surf" },
		4160: { n: "RadarArea" },
		4161: { n: "AxisParent" },
		4163: { n: "LegendException" },
		4164: { n: "ShtProps", f: Ls },
		4165: { n: "SerToCrt" },
		4166: { n: "AxesUsed" },
		4168: { n: "SBaseRef" },
		4170: { n: "SerParent" },
		4171: { n: "SerAuxTrend" },
		4174: { n: "IFmtRecord" },
		4175: { n: "Pos" },
		4176: { n: "AlRuns" },
		4177: { n: "BRAI" },
		4187: { n: "SerAuxErrBar" },
		4188: { n: "ClrtClient", f: Ds },
		4189: { n: "SerFmt" },
		4191: { n: "Chart3DBarShape" },
		4192: { n: "Fbi" },
		4193: { n: "BopPop" },
		4194: { n: "AxcExt" },
		4195: { n: "Dat" },
		4196: { n: "PlotGrowth" },
		4197: { n: "SIIndex" },
		4198: { n: "GelFrame" },
		4199: { n: "BopPopCustom" },
		4200: { n: "Fbi2" },
		0: { n: "Dimensions", f: Ki },
		2: { n: "BIFF2INT", f: js },
		5: { n: "BoolErr", f: as },
		7: { n: "String", f: Ys },
		8: { n: "BIFF2ROW" },
		11: { n: "Index" },
		22: { n: "ExternCount", f: Mn },
		30: { n: "BIFF2FORMAT", f: ji },
		31: { n: "BIFF2FMTCNT" },
		32: { n: "BIFF2COLINFO" },
		33: { n: "Array", f: ms },
		37: { n: "DefaultRowHeight", f: Fi },
		50: { n: "BIFF2FONTXTRA", f: $s },
		52: { n: "DDEObjName" },
		62: { n: "BIFF2WINDOW2" },
		67: { n: "BIFF2XF" },
		69: { n: "BIFF2FONTCLR" },
		86: { n: "BIFF4FMTCNT" },
		126: { n: "RK" },
		127: { n: "ImData", f: Vs },
		135: { n: "Addin" },
		136: { n: "Edg" },
		137: { n: "Pub" },
		145: { n: "Sub" },
		148: { n: "LHRecord" },
		149: { n: "LHNGraph" },
		150: { n: "Sound" },
		169: { n: "CoordList" },
		171: { n: "GCW" },
		188: { n: "ShrFmla" },
		191: { n: "ToolbarHdr" },
		192: { n: "ToolbarEnd" },
		194: { n: "AddMenu" },
		195: { n: "DelMenu" },
		214: { n: "RString", f: Zs },
		223: { n: "UDDesc" },
		234: { n: "TabIdConf" },
		354: { n: "XL5Modify" },
		421: { n: "FileSharing2" },
		521: { n: "BOF", f: ki },
		536: { n: "Lbl", f: us },
		547: { n: "ExternName", f: os },
		561: { n: "Font" },
		579: { n: "BIFF3XF" },
		1033: { n: "BOF", f: ki },
		1091: { n: "BIFF4XF" },
		2157: { n: "FeatInfo" },
		2163: { n: "FeatInfo11" },
		2177: { n: "SXAddl12" },
		2240: { n: "AutoWebPub" },
		2241: { n: "ListObj" },
		2242: { n: "ListField" },
		2243: { n: "ListDV" },
		2244: { n: "ListCondFmt" },
		2245: { n: "ListCF" },
		2246: { n: "FMQry" },
		2247: { n: "FMSQry" },
		2248: { n: "PLV" },
		2249: { n: "LnExt" },
		2250: { n: "MkrExt" },
		2251: { n: "CrtCoopt" },
		2262: { n: "FRTArchId$", r: 12 },
		29282: {},
	};
	var hp = G(up, "n");
	function dp(e, r, t, a) {
		var n = +r || +hp[r];
		if (isNaN(n)) return;
		var i = a || (t || []).length || 0;
		var s = e.next(4);
		s._W(2, n);
		s._W(2, i);
		if (i > 0 && yr(t)) e.push(t);
	}
	function vp(e, r, t) {
		if (!e) e = zr(7);
		e._W(2, r);
		e._W(2, t);
		e._W(2, 0);
		e._W(1, 0);
		return e;
	}
	function pp(e, r, t, a) {
		var n = zr(9);
		vp(n, e, r);
		if (a == "e") {
			n._W(1, t);
			n._W(1, 1);
		} else {
			n._W(1, t ? 1 : 0);
			n._W(1, 0);
		}
		return n;
	}
	function mp(e, r, t) {
		var a = zr(8 + 2 * t.length);
		vp(a, e, r);
		a._W(1, t.length);
		a._W(t.length, t, "sbcs");
		return a.l < a.length ? a.slice(0, a.l) : a;
	}
	function bp(e, r, t, a) {
		if (r.v != null)
			switch (r.t) {
				case "d":
				case "n":
					var n = r.t == "d" ? J(ae(r.v)) : r.v;
					if (n == (n | 0) && n >= 0 && n < 65536) dp(e, 2, Ks(t, a, n));
					else dp(e, 3, Gs(t, a, n));
					return;
				case "b":
				case "e":
					dp(e, 5, pp(t, a, r.v, r.t));
					return;
				case "s":
				case "str":
					dp(e, 4, mp(t, a, r.v));
					return;
			}
		dp(e, 1, vp(null, t, a));
	}
	function gp(e, r, t, a) {
		var n = Array.isArray(r);
		var i = ht(r["!ref"] || "A1"),
			s,
			f = "",
			l = [];
		if (i.e.c > 255 || i.e.r > 16383) {
			if (a.WTF)
				throw new Error(
					"Range " + (r["!ref"] || "A1") + " exceeds format limit A1:IV16384"
				);
			i.e.c = Math.min(i.e.c, 255);
			i.e.r = Math.min(i.e.c, 16383);
			s = ut(i);
		}
		for (var o = i.s.r; o <= i.e.r; ++o) {
			f = et(o);
			for (var c = i.s.c; c <= i.e.c; ++c) {
				if (o === i.s.r) l[c] = nt(c);
				s = l[c] + f;
				var u = n ? (r[o] || [])[c] : r[s];
				if (!u) continue;
				bp(e, u, o, c, a);
			}
		}
	}
	function wp(e, r) {
		var t = r || {};
		if (p != null && t.dense == null) t.dense = p;
		var a = Gr();
		var n = 0;
		for (var i = 0; i < e.SheetNames.length; ++i)
			if (e.SheetNames[i] == t.sheet) n = i;
		if (n == 0 && !!t.sheet && e.SheetNames[0] != t.sheet)
			throw new Error("Sheet not found: " + t.sheet);
		dp(a, 9, Si(e, 16, t));
		gp(a, e.Sheets[e.SheetNames[n]], n, t, e);
		dp(a, 10);
		return a.end();
	}
	function Ep(e, r, t) {
		dp(
			e,
			"Font",
			Hi(
				{
					sz: 12,
					color: { theme: 1 },
					name: "Arial",
					family: 2,
					scheme: "minor",
				},
				t
			)
		);
	}
	function kp(e, r, t) {
		if (!r) return;
		[
			[5, 8],
			[23, 26],
			[41, 44],
			[50, 392],
		].forEach(function (a) {
			for (var n = a[0]; n <= a[1]; ++n)
				if (r[n] != null) dp(e, "Format", Gi(n, r[n], t));
		});
	}
	function Sp(e, r) {
		var t = zr(19);
		t._W(4, 2151);
		t._W(4, 0);
		t._W(4, 0);
		t._W(2, 3);
		t._W(1, 1);
		t._W(4, 0);
		dp(e, "FeatHdr", t);
		t = zr(39);
		t._W(4, 2152);
		t._W(4, 0);
		t._W(4, 0);
		t._W(2, 3);
		t._W(1, 0);
		t._W(4, 0);
		t._W(2, 1);
		t._W(4, 4);
		t._W(2, 0);
		hi(ht(r["!ref"] || "A1"), t);
		t._W(4, 4);
		dp(e, "Feat", t);
	}
	function _p(e, r) {
		for (var t = 0; t < 16; ++t)
			dp(e, "XF", es({ numFmtId: 0, style: true }, 0, r));
		r.cellXfs.forEach(function (t) {
			dp(e, "XF", es(t, 0, r));
		});
	}
	function Cp(e, r) {
		for (var t = 0; t < r["!links"].length; ++t) {
			var a = r["!links"][t];
			dp(e, "HLink", xs(a));
			if (a[1].Tooltip) dp(e, "HLinkTooltip", Is(a));
		}
		delete r["!links"];
	}
	function Bp(e, r, t, a, n) {
		var i = 16 + $u(n.cellXfs, r, n);
		if (r.v != null)
			switch (r.t) {
				case "d":
				case "n":
					var s = r.t == "d" ? J(ae(r.v)) : r.v;
					dp(e, "Number", ss(t, a, s, i, n));
					return;
				case "b":
				case "e":
					dp(e, 517, ns(t, a, r.v, i, n, r.t));
					return;
				case "s":
				case "str":
					dp(e, "Label", zi(t, a, r.v, i, n));
					return;
			}
		dp(e, "Blank", ii(t, a, i));
	}
	function Tp(e, r, t) {
		var a = Gr();
		var n = t.SheetNames[e],
			i = t.Sheets[n] || {};
		var s = (t || {}).Workbook || {};
		var f = (s.Sheets || [])[e] || {};
		var l = Array.isArray(i);
		var o = r.biff == 8;
		var c,
			u = "",
			h = [];
		var d = ht(i["!ref"] || "A1");
		var v = o ? 65536 : 16384;
		if (d.e.c > 255 || d.e.r >= v) {
			if (r.WTF)
				throw new Error(
					"Range " + (i["!ref"] || "A1") + " exceeds format limit A1:IV16384"
				);
			d.e.c = Math.min(d.e.c, 255);
			d.e.r = Math.min(d.e.c, v - 1);
		}
		dp(a, 2057, Si(t, 16, r));
		dp(a, "CalcMode", Un(1));
		dp(a, "CalcCount", Un(100));
		dp(a, "CalcRefMode", Ln(true));
		dp(a, "CalcIter", Ln(false));
		dp(a, "CalcDelta", zt(0.001));
		dp(a, "CalcSaveRecalc", Ln(true));
		dp(a, "PrintRowCol", Ln(false));
		dp(a, "PrintGrid", Ln(false));
		dp(a, "GridSet", Un(1));
		dp(a, "Guts", ts([0, 0]));
		dp(a, "HCenter", Ln(false));
		dp(a, "VCenter", Ln(false));
		dp(a, "Dimensions", Yi(d, r));
		if (o) i["!links"] = [];
		for (var p = d.s.r; p <= d.e.r; ++p) {
			u = et(p);
			for (var m = d.s.c; m <= d.e.c; ++m) {
				if (p === d.s.r) h[m] = nt(m);
				c = h[m] + u;
				var b = l ? (i[p] || [])[m] : i[c];
				if (!b) continue;
				Bp(a, b, p, m, r);
				if (o && b.l) i["!links"].push([c, b.l]);
			}
		}
		var g = f.CodeName || f.name || n;
		if (o && s.Views) dp(a, "Window2", Mi(s.Views[0]));
		if (o && (i["!merges"] || []).length) dp(a, "MergeCells", ks(i["!merges"]));
		if (o) Cp(a, i);
		dp(a, "CodeName", Yn(g, r));
		if (o) Sp(a, i);
		dp(a, "EOF");
		return a.end();
	}
	function xp(e, r, t) {
		var a = Gr();
		var n = (e || {}).Workbook || {};
		var i = n.Sheets || [];
		var s = n.WBProps || {};
		var f = t.biff == 8,
			l = t.biff == 5;
		dp(a, 2057, Si(e, 5, t));
		if (t.bookType == "xla") dp(a, "Addin");
		dp(a, "InterfaceHdr", f ? Un(1200) : null);
		dp(a, "Mms", Fn(2));
		if (l) dp(a, "ToolbarHdr");
		if (l) dp(a, "ToolbarEnd");
		dp(a, "InterfaceEnd");
		dp(a, "WriteAccess", Bi("SheetJS", t));
		dp(a, "CodePage", Un(f ? 1200 : 1252));
		if (f) dp(a, "DSF", Un(0));
		if (f) dp(a, "Excel9File");
		dp(a, "RRTabId", Ms(e.SheetNames.length));
		if (f && e.vbaraw) {
			dp(a, "ObProj");
			var o = s.CodeName || "ThisWorkbook";
			dp(a, "CodeName", Yn(o, t));
		}
		dp(a, "BuiltInFnGroupCount", Un(17));
		dp(a, "WinProtect", Ln(false));
		dp(a, "Protect", Ln(false));
		dp(a, "Password", Un(0));
		if (f) dp(a, "Prot4Rev", Ln(false));
		if (f) dp(a, "Prot4RevPass", Un(0));
		dp(a, "Window1", Ni(t));
		dp(a, "Backup", Ln(false));
		dp(a, "HideObj", Un(0));
		dp(a, "Date1904", Ln(Wd(e) == "true"));
		dp(a, "CalcPrecision", Ln(true));
		if (f) dp(a, "RefreshAll", Ln(false));
		dp(a, "BookBool", Un(0));
		Ep(a, e, t);
		kp(a, e.SSF, t);
		_p(a, t);
		if (f) dp(a, "UsesELFs", Ln(false));
		var c = a.end();
		var u = Gr();
		if (f) dp(u, "Country", Rs());
		dp(u, "EOF");
		var h = u.end();
		var d = Gr();
		var v = 0,
			p = 0;
		for (p = 0; p < e.SheetNames.length; ++p)
			v += (f ? 12 : 11) + (f ? 2 : 1) * e.SheetNames[p].length;
		var m = c.length + v + h.length;
		for (p = 0; p < e.SheetNames.length; ++p) {
			var b = i[p] || {};
			dp(
				d,
				"BoundSheet8",
				yi({ pos: m, hs: b.Hidden || 0, dt: 0, name: e.SheetNames[p] }, t)
			);
			m += r[p].length;
		}
		var g = d.end();
		if (v != g.length) throw new Error("BS8 " + v + " != " + g.length);
		var w = [];
		if (c.length) w.push(c);
		if (g.length) w.push(g);
		if (h.length) w.push(h);
		return lr([w]);
	}
	function yp(e, r) {
		var t = r || {};
		var a = [];
		if (e && !e.SSF) {
			e.SSF = R.get_table();
		}
		if (e && e.SSF) {
			D(R);
			R.load_table(e.SSF);
			t.revssf = K(e.SSF);
			t.revssf[e.SSF[65535]] = 0;
			t.ssf = e.SSF;
		}
		t.cellXfs = [];
		t.Strings = [];
		t.Strings.Count = 0;
		t.Strings.Unique = 0;
		$u(t.cellXfs, {}, { revssf: { General: 0 } });
		for (var n = 0; n < e.SheetNames.length; ++n) a[a.length] = Tp(n, t, e);
		a.unshift(xp(e, a, t));
		return lr([a]);
	}
	function Ip(e, r) {
		var t = r || {};
		switch (t.biff || 2) {
			case 8:
			case 5:
				return yp(e, r);
			case 4:
			case 3:
			case 2:
				return wp(e, r);
		}
		throw new Error("invalid type " + t.bookType + " for BIFF");
	}
	var Ap = (function () {
		function e(e, r) {
			var t = r || {};
			if (p != null && t.dense == null) t.dense = p;
			var a = t.dense ? [] : {};
			var n = e.match(/<table/i);
			if (!n) throw new Error("Invalid HTML: could not find <table>");
			var i = e.match(/<\/table/i);
			var s = n.index,
				f = (i && i.index) || e.length;
			var l = ce(e.slice(s, f), /(:?<tr[^>]*>)/i, "<tr>");
			var o = -1,
				c = 0,
				u = 0,
				h = 0;
			var d = { s: { r: 1e7, c: 1e7 }, e: { r: 0, c: 0 } };
			var v = [];
			for (s = 0; s < l.length; ++s) {
				var m = l[s].trim();
				var b = m.slice(0, 3).toLowerCase();
				if (b == "<tr") {
					++o;
					if (t.sheetRows && t.sheetRows <= o) {
						--o;
						break;
					}
					c = 0;
					continue;
				}
				if (b != "<td" && b != "<th") continue;
				var g = m.split(/<\/t[dh]>/i);
				for (f = 0; f < g.length; ++f) {
					var w = g[f].trim();
					if (!w.match(/<t[dh]/i)) continue;
					var E = w,
						k = 0;
					while (E.charAt(0) == "<" && (k = E.indexOf(">")) > -1)
						E = E.slice(k + 1);
					var S = Te(w.slice(0, w.indexOf(">")));
					h = S.colspan ? +S.colspan : 1;
					if ((u = +S.rowspan) > 1 || h > 1)
						v.push({
							s: { r: o, c: c },
							e: { r: o + (u || 1) - 1, c: c + h - 1 },
						});
					var _ = S.t || "";
					if (!E.length) {
						c += h;
						continue;
					}
					E = Ke(E);
					if (d.s.r > o) d.s.r = o;
					if (d.e.r < o) d.e.r = o;
					if (d.s.c > c) d.s.c = c;
					if (d.e.c < c) d.e.c = c;
					if (!E.length) continue;
					var C = { t: "s", v: E };
					if (t.raw || !E.trim().length || _ == "s") {
					} else if (E === "TRUE") C = { t: "b", v: true };
					else if (E === "FALSE") C = { t: "b", v: false };
					else if (!isNaN(fe(E))) C = { t: "n", v: fe(E) };
					else if (!isNaN(le(E).getDate())) {
						C = { t: "d", v: ae(E) };
						if (!t.cellDates) C = { t: "n", v: J(C.v) };
						C.z = t.dateNF || R._table[14];
					}
					if (t.dense) {
						if (!a[o]) a[o] = [];
						a[o][c] = C;
					} else a[ot({ r: o, c: c })] = C;
					c += h;
				}
			}
			a["!ref"] = ut(d);
			return a;
		}
		function r(r, t) {
			return pt(e(r, t), t);
		}
		function t(e, r, t, a) {
			var n = e["!merges"] || [];
			var i = [];
			var s =
				"<td>" +
				(a.editable ? '<span contenteditable="true"></span>' : "") +
				"</td>";
			for (var f = r.s.c; f <= r.e.c; ++f) {
				var l = 0,
					o = 0;
				for (var c = 0; c < n.length; ++c) {
					if (n[c].s.r > t || n[c].s.c > f) continue;
					if (n[c].e.r < t || n[c].e.c < f) continue;
					if (n[c].s.r < t || n[c].s.c < f) {
						l = -1;
						break;
					}
					l = n[c].e.r - n[c].s.r + 1;
					o = n[c].e.c - n[c].s.c + 1;
					break;
				}
				if (l < 0) continue;
				var u = ot({ r: t, c: f });
				var h = a.dense ? (e[t] || [])[f] : e[u];
				if (!h || h.v == null) {
					i.push(s);
					continue;
				}
				var d = h.h || Oe(h.w || (vt(h), h.w) || "");
				var v = {};
				if (l > 1) v.rowspan = l;
				if (o > 1) v.colspan = o;
				v.t = h.t;
				if (a.editable) d = '<span contenteditable="true">' + d + "</span>";
				v.id = "sjs-" + u;
				i.push(rr("td", d, v));
			}
			var p = "<tr>";
			return p + i.join("") + "</tr>";
		}
		function a(e, r, t) {
			var a = [];
			return (
				a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">"
			);
		}
		var n =
			'<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';
		var i = "</body></html>";
		function s(e, r) {
			var s = r || {};
			var f = s.header != null ? s.header : n;
			var l = s.footer != null ? s.footer : i;
			var o = [f];
			var c = ct(e["!ref"]);
			s.dense = Array.isArray(e);
			o.push(a(e, c, s));
			for (var u = c.s.r; u <= c.e.r; ++u) o.push(t(e, c, u, s));
			o.push("</table>" + l);
			return o.join("");
		}
		return {
			to_workbook: r,
			to_sheet: e,
			_row: t,
			BEGIN: n,
			END: i,
			_preamble: a,
			from_sheet: s,
		};
	})();
	function Rp(e, r) {
		var t = r || {};
		if (p != null) t.dense = p;
		var a = t.dense ? [] : {};
		var n = e.getElementsByTagName("tr");
		var i = t.sheetRows || 1e7;
		var s = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
		var f = [],
			l = 0;
		var o = [];
		var c = 0,
			u = 0,
			h,
			d,
			v,
			m;
		for (; c < n.length && u < i; ++c) {
			var b = n[c];
			if (Op(b)) {
				if (t.display) continue;
				o[u] = { hidden: true };
			}
			var g = b.children;
			for (h = d = 0; h < g.length; ++h) {
				var w = g[h];
				if (t.display && Op(w)) continue;
				var E = Ke(w.innerHTML);
				for (l = 0; l < f.length; ++l) {
					var k = f[l];
					if (k.s.c == d && k.s.r <= u && u <= k.e.r) {
						d = k.e.c + 1;
						l = -1;
					}
				}
				m = +w.getAttribute("colspan") || 1;
				if ((v = +w.getAttribute("rowspan")) > 0 || m > 1)
					f.push({
						s: { r: u, c: d },
						e: { r: u + (v || 1) - 1, c: d + m - 1 },
					});
				var S = { t: "s", v: E };
				var _ = w.getAttribute("t") || "";
				if (E != null) {
					if (E.length == 0) S.t = _ || "z";
					else if (t.raw || E.trim().length == 0 || _ == "s") {
					} else if (E === "TRUE") S = { t: "b", v: true };
					else if (E === "FALSE") S = { t: "b", v: false };
					else if (!isNaN(fe(E))) S = { t: "n", v: fe(E) };
					else if (!isNaN(le(E).getDate())) {
						S = { t: "d", v: ae(E) };
						if (!t.cellDates) S = { t: "n", v: J(S.v) };
						S.z = t.dateNF || R._table[14];
					}
				}
				if (t.dense) {
					if (!a[u]) a[u] = [];
					a[u][d] = S;
				} else a[ot({ c: d, r: u })] = S;
				if (s.e.c < d) s.e.c = d;
				d += m;
			}
			++u;
		}
		if (f.length) a["!merges"] = f;
		if (o.length) a["!rows"] = o;
		s.e.r = u - 1;
		a["!ref"] = ut(s);
		if (u >= i) a["!fullref"] = ut(((s.e.r = n.length - c + u - 1), s));
		return a;
	}
	function Dp(e, r) {
		return pt(Rp(e, r), r);
	}
	function Op(e) {
		var r = "";
		var t = Fp(e);
		if (t) r = t(e).getPropertyValue("display");
		if (!r) r = e.style.display;
		return r === "none";
	}
	function Fp(e) {
		if (
			e.ownerDocument.defaultView &&
			typeof e.ownerDocument.defaultView.getComputedStyle === "function"
		)
			return e.ownerDocument.defaultView.getComputedStyle;
		if (typeof getComputedStyle === "function") return getComputedStyle;
		return null;
	}
	var Pp = (function () {
		var e = function (e) {
			return Ae(
				e
					.replace(/[\t\r\n]/g, " ")
					.trim()
					.replace(/ +/g, " ")
					.replace(/<text:s\/>/g, " ")
					.replace(/<text:s text:c="(\d+)"\/>/g, function (e, r) {
						return Array(parseInt(r, 10) + 1).join(" ");
					})
					.replace(/<text:tab[^>]*\/>/g, "\t")
					.replace(/<text:line-break\/>/g, "\n")
					.replace(/<[^>]*>/g, "")
			);
		};
		var r = {
			day: ["d", "dd"],
			month: ["m", "mm"],
			year: ["y", "yy"],
			hours: ["h", "hh"],
			minutes: ["m", "mm"],
			seconds: ["s", "ss"],
			"am-pm": ["A/P", "AM/PM"],
			"day-of-week": ["ddd", "dddd"],
			era: ["e", "ee"],
			quarter: ["\\Qm", 'm\\"th quarter"'],
		};
		return function t(a, n) {
			var i = n || {};
			if (p != null && i.dense == null) i.dense = p;
			var s = Nv(a);
			var f = [],
				l;
			var o;
			var c = { name: "" },
				u = "",
				h = 0;
			var d;
			var v;
			var m = {},
				b = [];
			var g = i.dense ? [] : {};
			var w, E;
			var k = { value: "" };
			var S = "",
				_ = 0,
				C;
			var B = -1,
				T = -1,
				x = { s: { r: 1e6, c: 1e7 }, e: { r: 0, c: 0 } };
			var y = 0;
			var I = {};
			var A = [],
				R = {},
				D = 0,
				O = 0;
			var F = [],
				P = 1,
				N = 1;
			var L = [];
			var M = { Names: [] };
			var U = {};
			var H = ["", ""];
			var W = [],
				V = {};
			var z = "",
				X = 0;
			var G = false,
				j = false;
			var K = 0;
			Lv.lastIndex = 0;
			s = s
				.replace(/<!--([\s\S]*?)-->/gm, "")
				.replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
			while ((w = Lv.exec(s)))
				switch ((w[3] = w[3].replace(/_.*$/, ""))) {
					case "table":
					case "工作表":
						if (w[1] === "/") {
							if (x.e.c >= x.s.c && x.e.r >= x.s.r) g["!ref"] = ut(x);
							if (i.sheetRows > 0 && i.sheetRows <= x.e.r) {
								g["!fullref"] = g["!ref"];
								x.e.r = i.sheetRows - 1;
								g["!ref"] = ut(x);
							}
							if (A.length) g["!merges"] = A;
							if (F.length) g["!rows"] = F;
							d.name = We(d["名称"] || d.name);
							if (typeof JSON !== "undefined") JSON.stringify(d);
							b.push(d.name);
							m[d.name] = g;
							j = false;
						} else if (w[0].charAt(w[0].length - 2) !== "/") {
							d = Te(w[0], false);
							B = T = -1;
							x.s.r = x.s.c = 1e7;
							x.e.r = x.e.c = 0;
							g = i.dense ? [] : {};
							A = [];
							F = [];
							j = true;
						}
						break;
					case "table-row-group":
						if (w[1] === "/") --y;
						else ++y;
						break;
					case "table-row":
					case "行":
						if (w[1] === "/") {
							B += P;
							P = 1;
							break;
						}
						v = Te(w[0], false);
						if (v["行号"]) B = v["行号"] - 1;
						else if (B == -1) B = 0;
						P = +v["number-rows-repeated"] || 1;
						if (P < 10)
							for (K = 0; K < P; ++K) if (y > 0) F[B + K] = { level: y };
						T = -1;
						break;
					case "covered-table-cell":
						++T;
						if (i.sheetStubs) {
							if (i.dense) {
								if (!g[B]) g[B] = [];
								g[B][T] = { t: "z" };
							} else g[ot({ r: B, c: T })] = { t: "z" };
						}
						break;
					case "table-cell":
					case "数据":
						if (w[0].charAt(w[0].length - 2) === "/") {
							++T;
							k = Te(w[0], false);
							N = parseInt(k["number-columns-repeated"] || "1", 10);
							E = { t: "z", v: null };
							if (k.formula && i.cellFormula != false) E.f = Uu(Ae(k.formula));
							if ((k["数据类型"] || k["value-type"]) == "string") {
								E.t = "s";
								E.v = Ae(k["string-value"] || "");
								if (i.dense) {
									if (!g[B]) g[B] = [];
									g[B][T] = E;
								} else {
									g[ot({ r: B, c: T })] = E;
								}
							}
							T += N - 1;
						} else if (w[1] !== "/") {
							++T;
							N = 1;
							var Y = P ? B + P - 1 : B;
							if (T > x.e.c) x.e.c = T;
							if (T < x.s.c) x.s.c = T;
							if (B < x.s.r) x.s.r = B;
							if (Y > x.e.r) x.e.r = Y;
							k = Te(w[0], false);
							W = [];
							V = {};
							E = { t: k["数据类型"] || k["value-type"], v: null };
							if (i.cellFormula) {
								if (k.formula) k.formula = Ae(k.formula);
								if (
									k["number-matrix-columns-spanned"] &&
									k["number-matrix-rows-spanned"]
								) {
									D = parseInt(k["number-matrix-rows-spanned"], 10) || 0;
									O = parseInt(k["number-matrix-columns-spanned"], 10) || 0;
									R = { s: { r: B, c: T }, e: { r: B + D - 1, c: T + O - 1 } };
									E.F = ut(R);
									L.push([R, E.F]);
								}
								if (k.formula) E.f = Uu(k.formula);
								else
									for (K = 0; K < L.length; ++K)
										if (B >= L[K][0].s.r && B <= L[K][0].e.r)
											if (T >= L[K][0].s.c && T <= L[K][0].e.c) E.F = L[K][1];
							}
							if (k["number-columns-spanned"] || k["number-rows-spanned"]) {
								D = parseInt(k["number-rows-spanned"], 10) || 0;
								O = parseInt(k["number-columns-spanned"], 10) || 0;
								R = { s: { r: B, c: T }, e: { r: B + D - 1, c: T + O - 1 } };
								A.push(R);
							}
							if (k["number-columns-repeated"])
								N = parseInt(k["number-columns-repeated"], 10);
							switch (E.t) {
								case "boolean":
									E.t = "b";
									E.v = He(k["boolean-value"]);
									break;
								case "float":
									E.t = "n";
									E.v = parseFloat(k.value);
									break;
								case "percentage":
									E.t = "n";
									E.v = parseFloat(k.value);
									break;
								case "currency":
									E.t = "n";
									E.v = parseFloat(k.value);
									break;
								case "date":
									E.t = "d";
									E.v = ae(k["date-value"]);
									if (!i.cellDates) {
										E.t = "n";
										E.v = J(E.v);
									}
									E.z = "m/d/yy";
									break;
								case "time":
									E.t = "n";
									E.v = ee(k["time-value"]) / 86400;
									break;
								case "number":
									E.t = "n";
									E.v = parseFloat(k["数据数值"]);
									break;
								default:
									if (E.t === "string" || E.t === "text" || !E.t) {
										E.t = "s";
										if (k["string-value"] != null) S = Ae(k["string-value"]);
									} else throw new Error("Unsupported value type " + E.t);
							}
						} else {
							G = false;
							if (E.t === "s") {
								E.v = S || "";
								G = _ == 0;
							}
							if (U.Target) E.l = U;
							if (W.length > 0) {
								E.c = W;
								W = [];
							}
							if (S && i.cellText !== false) E.w = S;
							if (!G || i.sheetStubs) {
								if (!(i.sheetRows && i.sheetRows <= B)) {
									for (var $ = 0; $ < P; ++$) {
										N = parseInt(k["number-columns-repeated"] || "1", 10);
										if (i.dense) {
											if (!g[B + $]) g[B + $] = [];
											g[B + $][T] = $ == 0 ? E : ie(E);
											while (--N > 0) g[B + $][T + N] = ie(E);
										} else {
											g[ot({ r: B + $, c: T })] = E;
											while (--N > 0) g[ot({ r: B + $, c: T + N })] = ie(E);
										}
										if (x.e.c <= T) x.e.c = T;
									}
								}
							}
							N = parseInt(k["number-columns-repeated"] || "1", 10);
							T += N - 1;
							N = 0;
							E = {};
							S = "";
						}
						U = {};
						break;
					case "document":
					case "document-content":
					case "电子表格文档":
					case "spreadsheet":
					case "主体":
					case "scripts":
					case "styles":
					case "font-face-decls":
						if (w[1] === "/") {
							if ((l = f.pop())[0] !== w[3]) throw "Bad state: " + l;
						} else if (w[0].charAt(w[0].length - 2) !== "/")
							f.push([w[3], true]);
						break;
					case "annotation":
						if (w[1] === "/") {
							if ((l = f.pop())[0] !== w[3]) throw "Bad state: " + l;
							V.t = S;
							V.a = z;
							W.push(V);
						} else if (w[0].charAt(w[0].length - 2) !== "/") {
							f.push([w[3], false]);
						}
						z = "";
						X = 0;
						S = "";
						_ = 0;
						break;
					case "creator":
						if (w[1] === "/") {
							z = s.slice(X, w.index);
						} else X = w.index + w[0].length;
						break;
					case "meta":
					case "元数据":
					case "settings":
					case "config-item-set":
					case "config-item-map-indexed":
					case "config-item-map-entry":
					case "config-item-map-named":
					case "shapes":
					case "frame":
					case "text-box":
					case "image":
					case "data-pilot-tables":
					case "list-style":
					case "form":
					case "dde-links":
					case "event-listeners":
					case "chart":
						if (w[1] === "/") {
							if ((l = f.pop())[0] !== w[3]) throw "Bad state: " + l;
						} else if (w[0].charAt(w[0].length - 2) !== "/")
							f.push([w[3], false]);
						S = "";
						_ = 0;
						break;
					case "scientific-number":
						break;
					case "currency-symbol":
						break;
					case "currency-style":
						break;
					case "number-style":
					case "percentage-style":
					case "date-style":
					case "time-style":
						if (w[1] === "/") {
							I[c.name] = u;
							if ((l = f.pop())[0] !== w[3]) throw "Bad state: " + l;
						} else if (w[0].charAt(w[0].length - 2) !== "/") {
							u = "";
							c = Te(w[0], false);
							f.push([w[3], true]);
						}
						break;
					case "script":
						break;
					case "libraries":
						break;
					case "automatic-styles":
						break;
					case "master-styles":
						break;
					case "default-style":
					case "page-layout":
						break;
					case "style":
						break;
					case "map":
						break;
					case "font-face":
						break;
					case "paragraph-properties":
						break;
					case "table-properties":
						break;
					case "table-column-properties":
						break;
					case "table-row-properties":
						break;
					case "table-cell-properties":
						break;
					case "number":
						switch (f[f.length - 1][0]) {
							case "time-style":
							case "date-style":
								o = Te(w[0], false);
								u += r[w[3]][o.style === "long" ? 1 : 0];
								break;
						}
						break;
					case "fraction":
						break;
					case "day":
					case "month":
					case "year":
					case "era":
					case "day-of-week":
					case "week-of-year":
					case "quarter":
					case "hours":
					case "minutes":
					case "seconds":
					case "am-pm":
						switch (f[f.length - 1][0]) {
							case "time-style":
							case "date-style":
								o = Te(w[0], false);
								u += r[w[3]][o.style === "long" ? 1 : 0];
								break;
						}
						break;
					case "boolean-style":
						break;
					case "boolean":
						break;
					case "text-style":
						break;
					case "text":
						if (w[0].slice(-2) === "/>") break;
						else if (w[1] === "/")
							switch (f[f.length - 1][0]) {
								case "number-style":
								case "date-style":
								case "time-style":
									u += s.slice(h, w.index);
									break;
							}
						else h = w.index + w[0].length;
						break;
					case "named-range":
						o = Te(w[0], false);
						H = Wu(o["cell-range-address"]);
						var Z = { Name: o.name, Ref: H[0] + "!" + H[1] };
						if (j) Z.Sheet = b.length;
						M.Names.push(Z);
						break;
					case "text-content":
						break;
					case "text-properties":
						break;
					case "embedded-text":
						break;
					case "body":
					case "电子表格":
						break;
					case "forms":
						break;
					case "table-column":
						break;
					case "table-header-rows":
						break;
					case "table-rows":
						break;
					case "table-column-group":
						break;
					case "table-header-columns":
						break;
					case "table-columns":
						break;
					case "null-date":
						break;
					case "graphic-properties":
						break;
					case "calculation-settings":
						break;
					case "named-expressions":
						break;
					case "label-range":
						break;
					case "label-ranges":
						break;
					case "named-expression":
						break;
					case "sort":
						break;
					case "sort-by":
						break;
					case "sort-groups":
						break;
					case "tab":
						break;
					case "line-break":
						break;
					case "span":
						break;
					case "p":
					case "文本串":
						if (w[1] === "/" && (!k || !k["string-value"]))
							S = (S.length > 0 ? S + "\n" : "") + e(s.slice(_, w.index), C);
						else {
							C = Te(w[0], false);
							_ = w.index + w[0].length;
						}
						break;
					case "s":
						break;
					case "database-range":
						if (w[1] === "/") break;
						try {
							H = Wu(Te(w[0])["target-range-address"]);
							m[H[0]]["!autofilter"] = { ref: H[1] };
						} catch (Q) {}
						break;
					case "date":
						break;
					case "object":
						break;
					case "title":
					case "标题":
						break;
					case "desc":
						break;
					case "binary-data":
						break;
					case "table-source":
						break;
					case "scenario":
						break;
					case "iteration":
						break;
					case "content-validations":
						break;
					case "content-validation":
						break;
					case "help-message":
						break;
					case "error-message":
						break;
					case "database-ranges":
						break;
					case "filter":
						break;
					case "filter-and":
						break;
					case "filter-or":
						break;
					case "filter-condition":
						break;
					case "list-level-style-bullet":
						break;
					case "list-level-style-number":
						break;
					case "list-level-properties":
						break;
					case "sender-firstname":
					case "sender-lastname":
					case "sender-initials":
					case "sender-title":
					case "sender-position":
					case "sender-email":
					case "sender-phone-private":
					case "sender-fax":
					case "sender-company":
					case "sender-phone-work":
					case "sender-street":
					case "sender-city":
					case "sender-postal-code":
					case "sender-country":
					case "sender-state-or-province":
					case "author-name":
					case "author-initials":
					case "chapter":
					case "file-name":
					case "template-name":
					case "sheet-name":
						break;
					case "event-listener":
						break;
					case "initial-creator":
					case "creation-date":
					case "print-date":
					case "generator":
					case "document-statistic":
					case "user-defined":
					case "editing-duration":
					case "editing-cycles":
						break;
					case "config-item":
						break;
					case "page-number":
						break;
					case "page-count":
						break;
					case "time":
						break;
					case "cell-range-source":
						break;
					case "detective":
						break;
					case "operation":
						break;
					case "highlighted-range":
						break;
					case "data-pilot-table":
					case "source-cell-range":
					case "source-service":
					case "data-pilot-field":
					case "data-pilot-level":
					case "data-pilot-subtotals":
					case "data-pilot-subtotal":
					case "data-pilot-members":
					case "data-pilot-member":
					case "data-pilot-display-info":
					case "data-pilot-sort-info":
					case "data-pilot-layout-info":
					case "data-pilot-field-reference":
					case "data-pilot-groups":
					case "data-pilot-group":
					case "data-pilot-group-member":
						break;
					case "rect":
						break;
					case "dde-connection-decls":
					case "dde-connection-decl":
					case "dde-link":
					case "dde-source":
						break;
					case "properties":
						break;
					case "property":
						break;
					case "a":
						if (w[1] !== "/") {
							U = Te(w[0], false);
							if (!U.href) break;
							U.Target = U.href;
							delete U.href;
							if (U.Target.charAt(0) == "#" && U.Target.indexOf(".") > -1) {
								H = Wu(U.Target.slice(1));
								U.Target = "#" + H[0] + "!" + H[1];
							}
						}
						break;
					case "table-protection":
						break;
					case "data-pilot-grand-total":
						break;
					case "office-document-common-attrs":
						break;
					default:
						switch (w[2]) {
							case "dc:":
							case "calcext:":
							case "loext:":
							case "ooo:":
							case "chartooo:":
							case "draw:":
							case "style:":
							case "chart:":
							case "form:":
							case "uof:":
							case "表:":
							case "字:":
								break;
							default:
								if (i.WTF) throw new Error(w);
						}
				}
			var q = { Sheets: m, SheetNames: b, Workbook: M };
			if (i.bookSheets) delete q.Sheets;
			return q;
		};
	})();
	function Np(e, r) {
		r = r || {};
		var t = !!ve(e, "objectdata");
		if (t) Na(me(e, "META-INF/manifest.xml"), r);
		var a = be(e, "content.xml");
		if (!a)
			throw new Error(
				"Missing content.xml in " + (t ? "ODS" : "UOF") + " file"
			);
		var n = Pp(t ? a : We(a), r);
		if (ve(e, "meta.xml")) n.Props = Xa(me(e, "meta.xml"));
		return n;
	}
	function Lp(e, r) {
		return Pp(e, r);
	}
	var Mp = (function () {
		var e =
			"<office:document-styles " +
			er({
				"xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
				"xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
				"xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
				"xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
				"xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
				"xmlns:fo":
					"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
				"xmlns:xlink": "http://www.w3.org/1999/xlink",
				"xmlns:dc": "http://purl.org/dc/elements/1.1/",
				"xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
				"xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
				"xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
				"office:version": "1.2",
			}) +
			"></office:document-styles>";
		return function r() {
			return ke + e;
		};
	})();
	var Up = (function () {
		var e = function (e) {
			return Oe(e)
				.replace(/  +/g, function (e) {
					return '<text:s text:c="' + e.length + '"/>';
				})
				.replace(/\t/g, "<text:tab/>")
				.replace(/\n/g, "<text:line-break/>")
				.replace(/^ /, "<text:s/>")
				.replace(/ $/, "<text:s/>");
		};
		var r = "          <table:table-cell />\n";
		var t = "          <table:covered-table-cell/>\n";
		var a = function (a, n, i) {
			var s = [];
			s.push('      <table:table table:name="' + Oe(n.SheetNames[i]) + '">\n');
			var f = 0,
				l = 0,
				o = ct(a["!ref"]);
			var c = a["!merges"] || [],
				u = 0;
			var h = Array.isArray(a);
			for (f = 0; f < o.s.r; ++f)
				s.push("        <table:table-row></table:table-row>\n");
			for (; f <= o.e.r; ++f) {
				s.push("        <table:table-row>\n");
				for (l = 0; l < o.s.c; ++l) s.push(r);
				for (; l <= o.e.c; ++l) {
					var d = false,
						v = {},
						p = "";
					for (u = 0; u != c.length; ++u) {
						if (c[u].s.c > l) continue;
						if (c[u].s.r > f) continue;
						if (c[u].e.c < l) continue;
						if (c[u].e.r < f) continue;
						if (c[u].s.c != l || c[u].s.r != f) d = true;
						v["table:number-columns-spanned"] = c[u].e.c - c[u].s.c + 1;
						v["table:number-rows-spanned"] = c[u].e.r - c[u].s.r + 1;
						break;
					}
					if (d) {
						s.push(t);
						continue;
					}
					var m = ot({ r: f, c: l }),
						b = h ? (a[f] || [])[l] : a[m];
					if (b && b.f) {
						v["table:formula"] = Oe(Hu(b.f));
						if (b.F) {
							if (b.F.slice(0, m.length) == m) {
								var g = ct(b.F);
								v["table:number-matrix-columns-spanned"] = g.e.c - g.s.c + 1;
								v["table:number-matrix-rows-spanned"] = g.e.r - g.s.r + 1;
							}
						}
					}
					if (!b) {
						s.push(r);
						continue;
					}
					switch (b.t) {
						case "b":
							p = b.v ? "TRUE" : "FALSE";
							v["office:value-type"] = "boolean";
							v["office:boolean-value"] = b.v ? "true" : "false";
							break;
						case "n":
							p = b.w || String(b.v || 0);
							v["office:value-type"] = "float";
							v["office:value"] = b.v || 0;
							break;
						case "s":
						case "str":
							p = b.v;
							v["office:value-type"] = "string";
							break;
						case "d":
							p = b.w || ae(b.v).toISOString();
							v["office:value-type"] = "date";
							v["office:date-value"] = ae(b.v).toISOString();
							v["table:style-name"] = "ce1";
							break;
						default:
							s.push(r);
							continue;
					}
					var w = e(p);
					if (b.l && b.l.Target) {
						var E = b.l.Target;
						E = E.charAt(0) == "#" ? "#" + Vu(E.slice(1)) : E;
						w = rr("text:a", w, { "xlink:href": E });
					}
					s.push(
						"          " + rr("table:table-cell", rr("text:p", w, {}), v) + "\n"
					);
				}
				s.push("        </table:table-row>\n");
			}
			s.push("      </table:table>\n");
			return s.join("");
		};
		var n = function (e) {
			e.push(" <office:automatic-styles>\n");
			e.push(
				'  <number:date-style style:name="N37" number:automatic-order="true">\n'
			);
			e.push('   <number:month number:style="long"/>\n');
			e.push("   <number:text>/</number:text>\n");
			e.push('   <number:day number:style="long"/>\n');
			e.push("   <number:text>/</number:text>\n");
			e.push("   <number:year/>\n");
			e.push("  </number:date-style>\n");
			e.push(
				'  <style:style style:name="ce1" style:family="table-cell" style:parent-style-name="Default" style:data-style-name="N37"/>\n'
			);
			e.push(" </office:automatic-styles>\n");
		};
		return function i(e, r) {
			var t = [ke];
			var i = er({
				"xmlns:office": "urn:oasis:names:tc:opendocument:xmlns:office:1.0",
				"xmlns:table": "urn:oasis:names:tc:opendocument:xmlns:table:1.0",
				"xmlns:style": "urn:oasis:names:tc:opendocument:xmlns:style:1.0",
				"xmlns:text": "urn:oasis:names:tc:opendocument:xmlns:text:1.0",
				"xmlns:draw": "urn:oasis:names:tc:opendocument:xmlns:drawing:1.0",
				"xmlns:fo":
					"urn:oasis:names:tc:opendocument:xmlns:xsl-fo-compatible:1.0",
				"xmlns:xlink": "http://www.w3.org/1999/xlink",
				"xmlns:dc": "http://purl.org/dc/elements/1.1/",
				"xmlns:meta": "urn:oasis:names:tc:opendocument:xmlns:meta:1.0",
				"xmlns:number": "urn:oasis:names:tc:opendocument:xmlns:datastyle:1.0",
				"xmlns:presentation":
					"urn:oasis:names:tc:opendocument:xmlns:presentation:1.0",
				"xmlns:svg": "urn:oasis:names:tc:opendocument:xmlns:svg-compatible:1.0",
				"xmlns:chart": "urn:oasis:names:tc:opendocument:xmlns:chart:1.0",
				"xmlns:dr3d": "urn:oasis:names:tc:opendocument:xmlns:dr3d:1.0",
				"xmlns:math": "http://www.w3.org/1998/Math/MathML",
				"xmlns:form": "urn:oasis:names:tc:opendocument:xmlns:form:1.0",
				"xmlns:script": "urn:oasis:names:tc:opendocument:xmlns:script:1.0",
				"xmlns:ooo": "http://openoffice.org/2004/office",
				"xmlns:ooow": "http://openoffice.org/2004/writer",
				"xmlns:oooc": "http://openoffice.org/2004/calc",
				"xmlns:dom": "http://www.w3.org/2001/xml-events",
				"xmlns:xforms": "http://www.w3.org/2002/xforms",
				"xmlns:xsd": "http://www.w3.org/2001/XMLSchema",
				"xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
				"xmlns:sheet": "urn:oasis:names:tc:opendocument:sh33tjs:1.0",
				"xmlns:rpt": "http://openoffice.org/2005/report",
				"xmlns:of": "urn:oasis:names:tc:opendocument:xmlns:of:1.2",
				"xmlns:xhtml": "http://www.w3.org/1999/xhtml",
				"xmlns:grddl": "http://www.w3.org/2003/g/data-view#",
				"xmlns:tableooo": "http://openoffice.org/2009/table",
				"xmlns:drawooo": "http://openoffice.org/2010/draw",
				"xmlns:calcext":
					"urn:org:documentfoundation:names:experimental:calc:xmlns:calcext:1.0",
				"xmlns:loext":
					"urn:org:documentfoundation:names:experimental:office:xmlns:loext:1.0",
				"xmlns:field":
					"urn:openoffice:names:experimental:ooo-ms-interop:xmlns:field:1.0",
				"xmlns:formx":
					"urn:openoffice:names:experimental:ooxml-odf-interop:xmlns:form:1.0",
				"xmlns:css3t": "http://www.w3.org/TR/css3-text/",
				"office:version": "1.2",
			});
			var s = er({
				"xmlns:config": "urn:oasis:names:tc:opendocument:xmlns:config:1.0",
				"office:mimetype": "application/vnd.oasis.opendocument.spreadsheet",
			});
			if (r.bookType == "fods") t.push("<office:document" + i + s + ">\n");
			else t.push("<office:document-content" + i + ">\n");
			n(t);
			t.push("  <office:body>\n");
			t.push("    <office:spreadsheet>\n");
			for (var f = 0; f != e.SheetNames.length; ++f)
				t.push(a(e.Sheets[e.SheetNames[f]], e, f, r));
			t.push("    </office:spreadsheet>\n");
			t.push("  </office:body>\n");
			if (r.bookType == "fods") t.push("</office:document>");
			else t.push("</office:document-content>");
			return t.join("");
		};
	})();
	function Hp(e, r) {
		if (r.bookType == "fods") return Up(e, r);
		var t = new we();
		var a = "";
		var n = [];
		var i = [];
		a = "mimetype";
		t.file(a, "application/vnd.oasis.opendocument.spreadsheet");
		a = "content.xml";
		t.file(a, Up(e, r));
		n.push([a, "text/xml"]);
		i.push([a, "ContentFile"]);
		a = "styles.xml";
		t.file(a, Mp(e, r));
		n.push([a, "text/xml"]);
		i.push([a, "StylesFile"]);
		a = "meta.xml";
		t.file(a, Wa());
		n.push([a, "text/xml"]);
		i.push([a, "MetadataFile"]);
		a = "manifest.rdf";
		t.file(a, Ha(i));
		n.push([a, "application/rdf+xml"]);
		a = "META-INF/manifest.xml";
		t.file(a, La(n));
		return t;
	}
	function Wp(e, r) {
		if (!r) return 0;
		var t = e.SheetNames.indexOf(r);
		if (t == -1) throw new Error("Sheet not found: " + r);
		return t;
	}
	function Vp(e) {
		return function r(t, a) {
			var n = Wp(t, a.sheet);
			return e.from_sheet(t.Sheets[t.SheetNames[n]], a, t);
		};
	}
	var zp = Vp(Ap);
	var Xp = Vp({ from_sheet: Dm });
	var Gp = Vp(Js);
	var jp = Vp(qs);
	var Kp = Vp(rf);
	var Yp = Vp(Xf);
	var $p = Vp({ from_sheet: Om });
	var Zp = Vp(Qs);
	var Qp = Vp(ef);
	function Jp(e) {
		return function r(t) {
			for (var a = 0; a != e.length; ++a) {
				var n = e[a];
				if (t[n[0]] === undefined) t[n[0]] = n[1];
				if (n[2] === "n") t[n[0]] = Number(t[n[0]]);
			}
		};
	}
	var qp = Jp([
		["cellNF", false],
		["cellHTML", true],
		["cellFormula", true],
		["cellStyles", false],
		["cellText", true],
		["cellDates", false],
		["sheetStubs", false],
		["sheetRows", 0, "n"],
		["bookDeps", false],
		["bookSheets", false],
		["bookProps", false],
		["bookFiles", false],
		["bookVBA", false],
		["password", ""],
		["WTF", false],
	]);
	var em = Jp([
		["cellDates", false],
		["bookSST", false],
		["bookType", "xlsx"],
		["compression", false],
		["WTF", false],
	]);
	function rm(e) {
		if (Ia.WS.indexOf(e) > -1) return "sheet";
		if (Ia.CS && e == Ia.CS) return "chart";
		if (Ia.DS && e == Ia.DS) return "dialog";
		if (Ia.MS && e == Ia.MS) return "macro";
		return e && e.length ? e : "sheet";
	}
	function tm(e, r) {
		if (!e) return 0;
		try {
			e = r.map(function a(r) {
				if (!r.id) r.id = r.strRelID;
				return [r.name, e["!id"][r.id].Target, rm(e["!id"][r.id].Type)];
			});
		} catch (t) {
			return null;
		}
		return !e || e.length === 0 ? null : e;
	}
	function am(e, r, t, a, n, i, s, f, l, o, c, u) {
		try {
			i[a] = Ra(be(e, t, true), r);
			var h = me(e, r);
			var d;
			switch (f) {
				case "sheet":
					d = ov(h, r, n, l, i[a], o, c, u);
					break;
				case "chart":
					d = cv(h, r, n, l, i[a], o, c, u);
					if (!d || !d["!chart"]) break;
					var v = Ee(d["!chart"].Target, r);
					var p = Aa(v);
					var m = Eo(be(e, v, true), Ra(be(e, p, true), v));
					var b = Ee(m, v);
					var g = Aa(b);
					d = xd(be(e, b, true), b, l, Ra(be(e, g, true), b), o, d);
					break;
				case "macro":
					d = uv(h, r, n, l, i[a], o, c, u);
					break;
				case "dialog":
					d = hv(h, r, n, l, i[a], o, c, u);
					break;
			}
			s[a] = d;
		} catch (w) {
			if (l.WTF) throw w;
		}
	}
	function nm(e) {
		return e.charAt(0) == "/" ? e.slice(1) : e;
	}
	function im(e, r) {
		D(R);
		r = r || {};
		qp(r);
		if (ve(e, "META-INF/manifest.xml")) return Np(e, r);
		if (ve(e, "objectdata.xml")) return Np(e, r);
		if (ve(e, "Index/Document.iwa"))
			throw new Error("Unsupported NUMBERS file");
		var t = ge(e);
		var a = Ba(be(e, "[Content_Types].xml"));
		var n = false;
		var i, s;
		if (a.workbooks.length === 0) {
			s = "xl/workbook.xml";
			if (me(e, s, true)) a.workbooks.push(s);
		}
		if (a.workbooks.length === 0) {
			s = "xl/workbook.bin";
			if (!me(e, s, true)) throw new Error("Could not find workbook");
			a.workbooks.push(s);
			n = true;
		}
		if (a.workbooks[0].slice(-3) == "bin") n = true;
		var f = {};
		var l = {};
		if (!r.bookSheets && !r.bookProps) {
			zu = [];
			if (a.sst)
				try {
					zu = pv(me(e, nm(a.sst)), a.sst, r);
				} catch (o) {
					if (r.WTF) throw o;
				}
			if (r.cellStyles && a.themes.length)
				f = vv(
					be(e, a.themes[0].replace(/^\//, ""), true) || "",
					a.themes[0],
					r
				);
			if (a.style) l = dv(me(e, nm(a.style)), a.style, f, r);
		}
		a.links.map(function (t) {
			return gv(me(e, nm(t)), t, r);
		});
		var c = lv(me(e, nm(a.workbooks[0])), a.workbooks[0], r);
		var u = {},
			h = "";
		if (a.coreprops.length) {
			h = me(e, nm(a.coreprops[0]), true);
			if (h) u = Xa(h);
			if (a.extprops.length !== 0) {
				h = me(e, nm(a.extprops[0]), true);
				if (h) Qa(h, u, r);
			}
		}
		var d = {};
		if (!r.bookSheets || r.bookProps) {
			if (a.custprops.length !== 0) {
				h = be(e, nm(a.custprops[0]), true);
				if (h) d = rn(h, r);
			}
		}
		var v = {};
		if (r.bookSheets || r.bookProps) {
			if (c.Sheets)
				i = c.Sheets.map(function y(e) {
					return e.name;
				});
			else if (u.Worksheets && u.SheetNames.length > 0) i = u.SheetNames;
			if (r.bookProps) {
				v.Props = u;
				v.Custprops = d;
			}
			if (r.bookSheets && typeof i !== "undefined") v.SheetNames = i;
			if (r.bookSheets ? v.SheetNames : r.bookProps) return v;
		}
		i = {};
		var p = {};
		if (r.bookDeps && a.calcchain)
			p = bv(me(e, nm(a.calcchain)), a.calcchain, r);
		var m = 0;
		var b = {};
		var g, w;
		{
			var E = c.Sheets;
			u.Worksheets = E.length;
			u.SheetNames = [];
			for (var k = 0; k != E.length; ++k) {
				u.SheetNames[k] = E[k].name;
			}
		}
		var S = n ? "bin" : "xml";
		var _ = a.workbooks[0].lastIndexOf("/");
		var C = (
			a.workbooks[0].slice(0, _ + 1) +
			"_rels/" +
			a.workbooks[0].slice(_ + 1) +
			".rels"
		).replace(/^\//, "");
		if (!ve(e, C)) C = "xl/_rels/workbook." + S + ".rels";
		var B = Ra(be(e, C, true), C);
		if (B) B = tm(B, c.Sheets);
		var T = me(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;
		for (m = 0; m != u.Worksheets; ++m) {
			var x = "sheet";
			if (B && B[m]) {
				g = "xl/" + B[m][1].replace(/[\/]?xl\//, "");
				if (!ve(e, g)) g = B[m][1];
				if (!ve(e, g)) g = C.replace(/_rels\/.*$/, "") + B[m][1];
				x = B[m][2];
			} else {
				g = "xl/worksheets/sheet" + (m + 1 - T) + "." + S;
				g = g.replace(/sheet0\./, "sheet.");
			}
			w = g.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
			am(e, g, w, u.SheetNames[m], m, b, i, x, r, c, f, l);
		}
		if (a.comments) _o(e, a.comments, i, b, r);
		v = {
			Directory: a,
			Workbook: c,
			Props: u,
			Custprops: d,
			Deps: p,
			Sheets: i,
			SheetNames: u.SheetNames,
			Strings: zu,
			Styles: l,
			Themes: f,
			SSF: R.get_table(),
		};
		if (r.bookFiles) {
			v.keys = t;
			v.files = e.files;
		}
		if (r.bookVBA) {
			if (a.vba.length > 0) v.vbaraw = me(e, nm(a.vba[0]), true);
			else if (a.defaults && a.defaults.bin === Fo)
				v.vbaraw = me(e, "xl/vbaProject.bin", true);
		}
		return v;
	}
	function sm(e, r) {
		var t = r || {};
		var a = "Workbook",
			n = U.find(e, a);
		try {
			a = "/!DataSpaces/Version";
			n = U.find(e, a);
			if (!n || !n.content)
				throw new Error("ECMA-376 Encrypted file missing " + a);
			_f(n.content);
			a = "/!DataSpaces/DataSpaceMap";
			n = U.find(e, a);
			if (!n || !n.content)
				throw new Error("ECMA-376 Encrypted file missing " + a);
			var i = Bf(n.content);
			if (
				i.length !== 1 ||
				i[0].comps.length !== 1 ||
				i[0].comps[0].t !== 0 ||
				i[0].name !== "StrongEncryptionDataSpace" ||
				i[0].comps[0].v !== "EncryptedPackage"
			)
				throw new Error("ECMA-376 Encrypted file bad " + a);
			a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace";
			n = U.find(e, a);
			if (!n || !n.content)
				throw new Error("ECMA-376 Encrypted file missing " + a);
			var s = Tf(n.content);
			if (s.length != 1 || s[0] != "StrongEncryptionTransform")
				throw new Error("ECMA-376 Encrypted file bad " + a);
			a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary";
			n = U.find(e, a);
			if (!n || !n.content)
				throw new Error("ECMA-376 Encrypted file missing " + a);
			yf(n.content);
		} catch (f) {}
		a = "/EncryptionInfo";
		n = U.find(e, a);
		if (!n || !n.content)
			throw new Error("ECMA-376 Encrypted file missing " + a);
		var l = Rf(n.content);
		a = "/EncryptedPackage";
		n = U.find(e, a);
		if (!n || !n.content)
			throw new Error("ECMA-376 Encrypted file missing " + a);
		if (l[0] == 4 && typeof decrypt_agile !== "undefined")
			return decrypt_agile(l[1], n.content, t.password || "", t);
		if (l[0] == 2 && typeof decrypt_std76 !== "undefined")
			return decrypt_std76(l[1], n.content, t.password || "", t);
		throw new Error("File is password-protected");
	}
	function fm(e, r) {
		ko = 1024;
		if (r.bookType == "ods") return Hp(e, r);
		if (e && !e.SSF) {
			e.SSF = R.get_table();
		}
		if (e && e.SSF) {
			D(R);
			R.load_table(e.SSF);
			r.revssf = K(e.SSF);
			r.revssf[e.SSF[65535]] = 0;
			r.ssf = e.SSF;
		}
		r.rels = {};
		r.wbrels = {};
		r.Strings = [];
		r.Strings.Count = 0;
		r.Strings.Unique = 0;
		if (Gu) r.revStrings = new Map();
		else {
			r.revStrings = {};
			r.revStrings.foo = [];
			delete r.revStrings.foo;
		}
		var t = r.bookType == "xlsb" ? "bin" : "xml";
		var a = Lo.indexOf(r.bookType) > -1;
		var n = Ca();
		em((r = r || {}));
		var i = new we();
		var s = "",
			f = 0;
		r.cellXfs = [];
		$u(r.cellXfs, {}, { revssf: { General: 0 } });
		if (!e.Props) e.Props = {};
		s = "docProps/core.xml";
		i.file(s, Ka(e.Props, r));
		n.coreprops.push(s);
		Fa(r.rels, 2, s, Ia.CORE_PROPS);
		s = "docProps/app.xml";
		if (e.Props && e.Props.SheetNames) {
		} else if (!e.Workbook || !e.Workbook.Sheets)
			e.Props.SheetNames = e.SheetNames;
		else {
			var l = [];
			for (var o = 0; o < e.SheetNames.length; ++o)
				if ((e.Workbook.Sheets[o] || {}).Hidden != 2) l.push(e.SheetNames[o]);
			e.Props.SheetNames = l;
		}
		e.Props.Worksheets = e.Props.SheetNames.length;
		i.file(s, qa(e.Props, r));
		n.extprops.push(s);
		Fa(r.rels, 3, s, Ia.EXT_PROPS);
		if (e.Custprops !== e.Props && X(e.Custprops || {}).length > 0) {
			s = "docProps/custom.xml";
			i.file(s, an(e.Custprops, r));
			n.custprops.push(s);
			Fa(r.rels, 4, s, Ia.CUST_PROPS);
		}
		for (f = 1; f <= e.SheetNames.length; ++f) {
			var c = { "!id": {} };
			var u = e.Sheets[e.SheetNames[f - 1]];
			var h = (u || {})["!type"] || "sheet";
			switch (h) {
				case "chart":
				default:
					s = "xl/worksheets/sheet" + f + "." + t;
					i.file(s, Ev(f - 1, s, r, e, c));
					n.sheets.push(s);
					Fa(r.wbrels, -1, "worksheets/sheet" + f + "." + t, Ia.WS[0]);
			}
			if (u) {
				var d = u["!comments"];
				if (d && d.length > 0) {
					var v = "xl/comments" + f + "." + t;
					i.file(v, Cv(d, v, r));
					n.comments.push(v);
					Fa(c, -1, "../comments" + f + "." + t, Ia.CMNT);
				}
				if (u["!legacy"]) {
					i.file("xl/drawings/vmlDrawing" + f + ".vml", So(f, u["!comments"]));
				}
				delete u["!comments"];
				delete u["!legacy"];
			}
			if (c["!id"].rId1) i.file(Aa(s), Oa(c));
		}
		if (r.Strings != null && r.Strings.length > 0) {
			s = "xl/sharedStrings." + t;
			i.file(s, _v(r.Strings, s, r));
			n.strs.push(s);
			Fa(r.wbrels, -1, "sharedStrings." + t, Ia.SST);
		}
		s = "xl/workbook." + t;
		i.file(s, wv(e, s, r));
		n.workbooks.push(s);
		Fa(r.rels, 1, s, Ia.WB);
		s = "xl/theme/theme1.xml";
		i.file(s, io(e.Themes, r));
		n.themes.push(s);
		Fa(r.wbrels, -1, "theme/theme1.xml", Ia.THEME);
		s = "xl/styles." + t;
		i.file(s, Sv(e, s, r));
		n.styles.push(s);
		Fa(r.wbrels, -1, "styles." + t, Ia.STY);
		if (e.vbaraw && a) {
			s = "xl/vbaProject.bin";
			i.file(s, e.vbaraw);
			n.vba.push(s);
			Fa(r.wbrels, -1, "vbaProject.bin", Ia.VBA);
		}
		i.file("[Content_Types].xml", ya(n, r));
		i.file("_rels/.rels", Oa(r.rels));
		i.file("xl/_rels/workbook." + t + ".rels", Oa(r.wbrels));
		delete r.revssf;
		delete r.ssf;
		return i;
	}
	function lm(e, r) {
		var t = "";
		switch ((r || {}).type || "base64") {
			case "buffer":
				return [e[0], e[1], e[2], e[3]];
			case "base64":
				t = b.decode(e.slice(0, 24));
				break;
			case "binary":
				t = e;
				break;
			case "array":
				return [e[0], e[1], e[2], e[3]];
			default:
				throw new Error("Unrecognized type " + ((r && r.type) || "undefined"));
		}
		return [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)];
	}
	function om(e, r) {
		if (U.find(e, "EncryptedPackage")) return sm(e, r);
		return fp(e, r);
	}
	function cm(e, r) {
		var t,
			a = e;
		var n = r || {};
		if (!n.type) n.type = g && Buffer.isBuffer(e) ? "buffer" : "base64";
		switch (n.type) {
			case "base64":
				t = new we(a, { base64: true });
				break;
			case "binary":
			case "array":
				t = new we(a, { base64: false });
				break;
			case "buffer":
				t = new we(a);
				break;
			default:
				throw new Error("Unrecognized type " + n.type);
		}
		return im(t, n);
	}
	function um(e, r) {
		var t = 0;
		e: while (t < e.length)
			switch (e.charCodeAt(t)) {
				case 10:
				case 13:
				case 32:
					++t;
					break;
				case 60:
					return Uv(e.slice(t), r);
				default:
					break e;
			}
		return rf.to_workbook(e, r);
	}
	function hm(e, r) {
		var t = "",
			a = lm(e, r);
		switch (r.type) {
			case "base64":
				t = b.decode(e);
				break;
			case "binary":
				t = e;
				break;
			case "buffer":
				t = e.toString("binary");
				break;
			case "array":
				t = ne(e);
				break;
			default:
				throw new Error("Unrecognized type " + r.type);
		}
		if (a[0] == 239 && a[1] == 187 && a[2] == 191) t = We(t);
		return um(t, r);
	}
	function dm(e, r) {
		var t = e;
		if (r.type == "base64") t = b.decode(t);
		t = cptable.utils.decode(1200, t.slice(2), "str");
		r.type = "binary";
		return um(t, r);
	}
	function vm(e) {
		return !e.match(/[^\x00-\x7F]/) ? e : Ve(e);
	}
	function pm(e, r, t, a) {
		if (a) {
			t.type = "string";
			return rf.to_workbook(e, t);
		}
		return rf.to_workbook(r, t);
	}
	function mm(e, r) {
		o();
		if (typeof ArrayBuffer !== "undefined" && e instanceof ArrayBuffer)
			return mm(new Uint8Array(e), r);
		var t = e,
			a = [0, 0, 0, 0],
			n = false;
		var i = r || {};
		Xu = {};
		if (i.dateNF) Xu.dateNF = i.dateNF;
		if (!i.type) i.type = g && Buffer.isBuffer(e) ? "buffer" : "base64";
		if (i.type == "file") {
			i.type = g ? "buffer" : "binary";
			t = z(e);
		}
		if (i.type == "string") {
			n = true;
			i.type = "binary";
			i.codepage = 65001;
			t = vm(e);
		}
		if (
			i.type == "array" &&
			typeof Uint8Array !== "undefined" &&
			e instanceof Uint8Array &&
			typeof ArrayBuffer !== "undefined"
		) {
			var s = new ArrayBuffer(3),
				f = new Uint8Array(s);
			f.foo = "bar";
			if (!f.foo) {
				i = ie(i);
				i.type = "array";
				return mm(x(t), i);
			}
		}
		switch ((a = lm(t, i))[0]) {
			case 208:
				return om(U.read(t, i), i);
			case 9:
				return fp(t, i);
			case 60:
				return Uv(t, i);
			case 73:
				if (a[1] === 68) return tf(t, i);
				break;
			case 84:
				if (a[1] === 65 && a[2] === 66 && a[3] === 76)
					return qs.to_workbook(t, i);
				break;
			case 80:
				return a[1] === 75 && a[2] < 9 && a[3] < 9 ? cm(t, i) : pm(e, t, i, n);
			case 239:
				return a[3] === 60 ? Uv(t, i) : pm(e, t, i, n);
			case 255:
				if (a[1] === 254) {
					return dm(t, i);
				}
				break;
			case 0:
				if (a[1] === 0 && a[2] >= 2 && a[3] === 0) return af.to_workbook(t, i);
				break;
			case 3:
			case 131:
			case 139:
			case 140:
				return Qs.to_workbook(t, i);
			case 123:
				if (a[1] === 92 && a[2] === 114 && a[3] === 116)
					return Xf.to_workbook(t, i);
				break;
			case 10:
			case 13:
			case 32:
				return hm(t, i);
		}
		if (a[2] <= 12 && a[3] <= 31) return Qs.to_workbook(t, i);
		return pm(e, t, i, n);
	}
	function bm(e, r) {
		var t = r || {};
		t.type = "file";
		return mm(e, t);
	}
	function gm(e, r) {
		switch (r.type) {
			case "base64":
			case "binary":
				break;
			case "buffer":
			case "array":
				r.type = "";
				break;
			case "file":
				return V(r.file, U.write(e, { type: g ? "buffer" : "" }));
			case "string":
				throw new Error(
					"'string' output type invalid for '" + r.bookType + "' files"
				);
			default:
				throw new Error("Unrecognized type " + r.type);
		}
		return U.write(e, r);
	}
	function wm(e, r) {
		var t = r || {};
		var a = fm(e, t);
		var n = {};
		if (t.compression) n.compression = "DEFLATE";
		if (t.password) n.type = g ? "nodebuffer" : "string";
		else
			switch (t.type) {
				case "base64":
					n.type = "base64";
					break;
				case "binary":
					n.type = "string";
					break;
				case "string":
					throw new Error(
						"'string' output type invalid for '" + t.bookType + "' files"
					);
				case "buffer":
				case "file":
					n.type = g ? "nodebuffer" : "string";
					break;
				default:
					throw new Error("Unrecognized type " + t.type);
			}
		var i = a.generate(n);
		if (t.password && typeof encrypt_agile !== "undefined")
			return gm(encrypt_agile(i, t.password), t);
		if (t.type === "file") return V(t.file, i);
		return t.type == "string" ? We(i) : i;
	}
	function Em(e, r) {
		var t = r || {};
		var a = lp(e, t);
		return gm(a, t);
	}
	function km(e, r, t) {
		if (!t) t = "";
		var a = t + e;
		switch (r.type) {
			case "base64":
				return b.encode(Ve(a));
			case "binary":
				return Ve(a);
			case "string":
				return e;
			case "file":
				return V(r.file, a, "utf8");
			case "buffer": {
				if (g) return w(a, "utf8");
				else
					return km(a, { type: "binary" })
						.split("")
						.map(function (e) {
							return e.charCodeAt(0);
						});
			}
		}
		throw new Error("Unrecognized type " + r.type);
	}
	function Sm(e, r) {
		switch (r.type) {
			case "base64":
				return b.encode(e);
			case "binary":
				return e;
			case "string":
				return e;
			case "file":
				return V(r.file, e, "binary");
			case "buffer": {
				if (g) return w(e, "binary");
				else
					return e.split("").map(function (e) {
						return e.charCodeAt(0);
					});
			}
		}
		throw new Error("Unrecognized type " + r.type);
	}
	function _m(e, r) {
		switch (r.type) {
			case "string":
			case "base64":
			case "binary":
				var t = "";
				for (var a = 0; a < e.length; ++a) t += String.fromCharCode(e[a]);
				return r.type == "base64"
					? b.encode(t)
					: r.type == "string"
					? We(t)
					: t;
			case "file":
				return V(r.file, e);
			case "buffer":
				return e;
			default:
				throw new Error("Unrecognized type " + r.type);
		}
	}
	function Cm(e, r) {
		Gd(e);
		var t = r || {};
		if (t.type == "array") {
			t.type = "binary";
			var a = Cm(e, t);
			t.type = "array";
			return C(a);
		}
		switch (t.bookType || "xlsb") {
			case "xml":
			case "xlml":
				return km(Jv(e, t), t);
			case "slk":
			case "sylk":
				return km(Gp(e, t), t);
			case "htm":
			case "html":
				return km(zp(e, t), t);
			case "txt":
				return Sm($p(e, t), t);
			case "csv":
				return km(Xp(e, t), t, "\ufeff");
			case "dif":
				return km(jp(e, t), t);
			case "dbf":
				return _m(Zp(e, t), t);
			case "prn":
				return km(Kp(e, t), t);
			case "rtf":
				return km(Yp(e, t), t);
			case "eth":
				return km(Qp(e, t), t);
			case "fods":
				return km(Hp(e, t), t);
			case "biff2":
				if (!t.biff) t.biff = 2;
			case "biff3":
				if (!t.biff) t.biff = 3;
			case "biff4":
				if (!t.biff) t.biff = 4;
				return _m(Ip(e, t), t);
			case "biff5":
				if (!t.biff) t.biff = 5;
			case "biff8":
			case "xla":
			case "xls":
				if (!t.biff) t.biff = 8;
				return Em(e, t);
			case "xlsx":
			case "xlsm":
			case "xlam":
			case "xlsb":
			case "ods":
				return wm(e, t);
			default:
				throw new Error("Unrecognized bookType |" + t.bookType + "|");
		}
	}
	function Bm(e) {
		if (e.bookType) return;
		var r = {
			xls: "biff8",
			htm: "html",
			slk: "sylk",
			socialcalc: "eth",
			Sh33tJS: "WTF",
		};
		var t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
		if (t.match(/^\.[a-z]+$/)) e.bookType = t.slice(1);
		e.bookType = r[e.bookType] || e.bookType;
	}
	function Tm(e, r, t) {
		var a = t || {};
		a.type = "file";
		a.file = r;
		Bm(a);
		return Cm(e, a);
	}
	function xm(e, r, t, a) {
		var n = t || {};
		n.type = "file";
		n.file = e;
		Bm(n);
		n.type = "buffer";
		var i = a;
		if (!(i instanceof Function)) i = t;
		return H.writeFile(e, Cm(r, n), i);
	}
	function ym(e, r, t, a, n, i, s, f) {
		var l = et(t);
		var o = f.defval,
			c = f.raw;
		var u = true;
		var h = n === 1 ? [] : {};
		if (n !== 1) {
			if (Object.defineProperty)
				try {
					Object.defineProperty(h, "__rowNum__", {
						value: t,
						enumerable: false,
					});
				} catch (d) {
					h.__rowNum__ = t;
				}
			else h.__rowNum__ = t;
		}
		if (!s || e[t])
			for (var v = r.s.c; v <= r.e.c; ++v) {
				var p = s ? e[t][v] : e[a[v] + l];
				if (p === undefined || p.t === undefined) {
					if (o === undefined) continue;
					if (i[v] != null) {
						h[i[v]] = o;
					}
					continue;
				}
				var m = p.v;
				switch (p.t) {
					case "z":
						if (m == null) break;
						continue;
					case "e":
						m = void 0;
						break;
					case "s":
					case "d":
					case "b":
					case "n":
						break;
					default:
						throw new Error("unrecognized type " + p.t);
				}
				if (i[v] != null) {
					if (m == null) {
						if (o !== undefined) h[i[v]] = o;
						else if (c && m === null) h[i[v]] = null;
						else continue;
					} else {
						h[i[v]] = c ? m : vt(p, m, f);
					}
					if (m != null) u = false;
				}
			}
		return { row: h, isempty: u };
	}
	function Im(e, r) {
		if (e == null || e["!ref"] == null) return [];
		var t = { t: "n", v: 0 },
			a = 0,
			n = 1,
			i = [],
			s = 0,
			f = "";
		var l = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
		var o = r || {};
		var c = o.range != null ? o.range : e["!ref"];
		if (o.header === 1) a = 1;
		else if (o.header === "A") a = 2;
		else if (Array.isArray(o.header)) a = 3;
		switch (typeof c) {
			case "string":
				l = ht(c);
				break;
			case "number":
				l = ht(e["!ref"]);
				l.s.r = c;
				break;
			default:
				l = c;
		}
		if (a > 0) n = 0;
		var u = et(l.s.r);
		var h = [];
		var d = [];
		var v = 0,
			p = 0;
		var m = Array.isArray(e);
		var b = l.s.r,
			g = 0,
			w = 0;
		if (m && !e[b]) e[b] = [];
		for (g = l.s.c; g <= l.e.c; ++g) {
			h[g] = nt(g);
			t = m ? e[b][g] : e[h[g] + u];
			switch (a) {
				case 1:
					i[g] = g - l.s.c;
					break;
				case 2:
					i[g] = h[g];
					break;
				case 3:
					i[g] = o.header[g - l.s.c];
					break;
				default:
					if (t == null) t = { w: "__EMPTY", t: "s" };
					f = s = vt(t, null, o);
					p = 0;
					for (w = 0; w < i.length; ++w) if (i[w] == f) f = s + "_" + ++p;
					i[g] = f;
			}
		}
		for (b = l.s.r + n; b <= l.e.r; ++b) {
			var E = ym(e, l, b, h, a, i, m, o);
			if (
				E.isempty === false ||
				(a === 1 ? o.blankrows !== false : !!o.blankrows)
			)
				d[v++] = E.row;
		}
		d.length = v;
		return d;
	}
	var Am = /"/g;
	function Rm(e, r, t, a, n, i, s, f) {
		var l = true;
		var o = [],
			c = "",
			u = et(t);
		for (var h = r.s.c; h <= r.e.c; ++h) {
			if (!a[h]) continue;
			var d = f.dense ? (e[t] || [])[h] : e[a[h] + u];
			if (d == null) c = "";
			else if (d.v != null) {
				l = false;
				c = "" + vt(d, null, f);
				for (var v = 0, p = 0; v !== c.length; ++v)
					if ((p = c.charCodeAt(v)) === n || p === i || p === 34) {
						c = '"' + c.replace(Am, '""') + '"';
						break;
					}
				if (c == "ID") c = '"ID"';
			} else if (d.f != null && !d.F) {
				l = false;
				c = "=" + d.f;
				if (c.indexOf(",") >= 0) c = '"' + c.replace(Am, '""') + '"';
			} else c = "";
			o.push(c);
		}
		if (f.blankrows === false && l) return null;
		return o.join(s);
	}
	function Dm(e, r) {
		var t = [];
		var a = r == null ? {} : r;
		if (e == null || e["!ref"] == null) return "";
		var n = ht(e["!ref"]);
		var i = a.FS !== undefined ? a.FS : ",",
			s = i.charCodeAt(0);
		var f = a.RS !== undefined ? a.RS : "\n",
			l = f.charCodeAt(0);
		var o = new RegExp((i == "|" ? "\\|" : i) + "+$");
		var c = "",
			u = [];
		a.dense = Array.isArray(e);
		var h = (a.skipHidden && e["!cols"]) || [];
		var d = (a.skipHidden && e["!rows"]) || [];
		for (var v = n.s.c; v <= n.e.c; ++v) if (!(h[v] || {}).hidden) u[v] = nt(v);
		for (var p = n.s.r; p <= n.e.r; ++p) {
			if ((d[p] || {}).hidden) continue;
			c = Rm(e, n, p, u, s, l, i, a);
			if (c == null) {
				continue;
			}
			if (a.strip) c = c.replace(o, "");
			t.push(c + f);
		}
		delete a.dense;
		return t.join("");
	}
	function Om(e, r) {
		if (!r) r = {};
		r.FS = "\t";
		r.RS = "\n";
		var t = Dm(e, r);
		if (typeof cptable == "undefined" || r.type == "string") return t;
		var a = cptable.utils.encode(1200, t, "str");
		return String.fromCharCode(255) + String.fromCharCode(254) + a;
	}
	function Fm(e) {
		var r = "",
			t,
			a = "";
		if (e == null || e["!ref"] == null) return [];
		var n = ht(e["!ref"]),
			i = "",
			s = [],
			f;
		var l = [];
		var o = Array.isArray(e);
		for (f = n.s.c; f <= n.e.c; ++f) s[f] = nt(f);
		for (var c = n.s.r; c <= n.e.r; ++c) {
			i = et(c);
			for (f = n.s.c; f <= n.e.c; ++f) {
				r = s[f] + i;
				t = o ? (e[c] || [])[f] : e[r];
				a = "";
				if (t === undefined) continue;
				else if (t.F != null) {
					r = t.F;
					if (!t.f) continue;
					a = t.f;
					if (r.indexOf(":") == -1) r = r + ":" + r;
				}
				if (t.f != null) a = t.f;
				else if (t.t == "z") continue;
				else if (t.t == "n" && t.v != null) a = "" + t.v;
				else if (t.t == "b") a = t.v ? "TRUE" : "FALSE";
				else if (t.w !== undefined) a = "'" + t.w;
				else if (t.v === undefined) continue;
				else if (t.t == "s") a = "'" + t.v;
				else a = "" + t.v;
				l[l.length] = r + "=" + a;
			}
		}
		return l;
	}
	function Pm(e, r, t) {
		var a = t || {};
		var n = +!a.skipHeader;
		var i = e || {};
		var s = 0,
			f = 0;
		if (i && a.origin != null) {
			if (typeof a.origin == "number") s = a.origin;
			else {
				var l = typeof a.origin == "string" ? lt(a.origin) : a.origin;
				s = l.r;
				f = l.c;
			}
		}
		var o;
		var c = { s: { c: 0, r: 0 }, e: { c: f, r: s + r.length - 1 + n } };
		if (i["!ref"]) {
			var u = ht(i["!ref"]);
			c.e.c = Math.max(c.e.c, u.e.c);
			c.e.r = Math.max(c.e.r, u.e.r);
			if (s == -1) {
				s = c.e.r + 1;
				c.e.r = s + r.length - 1 + n;
			}
		}
		var h = a.header || [],
			d = 0;
		r.forEach(function (e, r) {
			X(e).forEach(function (t) {
				if ((d = h.indexOf(t)) == -1) h[(d = h.length)] = t;
				var l = e[t];
				var c = "z";
				var u = "";
				if (l && typeof l === "object" && !(l instanceof Date)) {
					i[ot({ c: f + d, r: s + r + n })] = l;
				} else {
					if (typeof l == "number") c = "n";
					else if (typeof l == "boolean") c = "b";
					else if (typeof l == "string") c = "s";
					else if (l instanceof Date) {
						c = "d";
						if (!a.cellDates) {
							c = "n";
							l = J(l);
						}
						u = a.dateNF || R._table[14];
					}
					i[ot({ c: f + d, r: s + r + n })] = o = { t: c, v: l };
					if (u) o.z = u;
				}
			});
		});
		c.e.c = Math.max(c.e.c, f + h.length - 1);
		var v = et(s);
		if (n)
			for (d = 0; d < h.length; ++d) i[nt(d + f) + v] = { t: "s", v: h[d] };
		i["!ref"] = ut(c);
		return i;
	}
	function Nm(e, r) {
		return Pm(null, e, r);
	}
	var Lm = {
		encode_col: nt,
		encode_row: et,
		encode_cell: ot,
		encode_range: ut,
		decode_col: at,
		decode_row: qr,
		split_cell: ft,
		decode_cell: lt,
		decode_range: ct,
		format_cell: vt,
		get_formulae: Fm,
		make_csv: Dm,
		make_json: Im,
		make_formulae: Fm,
		sheet_add_aoa: mt,
		sheet_add_json: Pm,
		aoa_to_sheet: bt,
		json_to_sheet: Nm,
		table_to_sheet: Rp,
		table_to_book: Dp,
		sheet_to_csv: Dm,
		sheet_to_txt: Om,
		sheet_to_json: Im,
		sheet_to_html: Ap.from_sheet,
		sheet_to_dif: qs.from_sheet,
		sheet_to_slk: Js.from_sheet,
		sheet_to_eth: ef.from_sheet,
		sheet_to_formulae: Fm,
		sheet_to_row_object_array: Im,
	};
	(function (e) {
		e.consts = e.consts || {};
		function r(r) {
			r.forEach(function (r) {
				e.consts[r[0]] = r[1];
			});
		}
		function t(e, r, t) {
			return e[r] != null ? e[r] : (e[r] = t);
		}
		function a(e, r, t) {
			if (typeof r == "string") return e[r] || (e[r] = { t: "z" });
			if (typeof r != "number") return a(e, ot(r));
			return a(e, ot({ r: r, c: t || 0 }));
		}
		function n(e, r) {
			if (typeof r == "number") {
				if (r >= 0 && e.SheetNames.length > r) return r;
				throw new Error("Cannot find sheet # " + r);
			} else if (typeof r == "string") {
				var t = e.SheetNames.indexOf(r);
				if (t > -1) return t;
				throw new Error("Cannot find sheet name |" + r + "|");
			} else throw new Error("Cannot find sheet |" + r + "|");
		}
		e.book_new = function () {
			return { SheetNames: [], Sheets: {} };
		};
		e.book_append_sheet = function (e, r, t) {
			if (!t)
				for (var a = 1; a <= 65535; ++a)
					if (e.SheetNames.indexOf((t = "Sheet" + a)) == -1) break;
			if (!t) throw new Error("Too many worksheets");
			zd(t);
			if (e.SheetNames.indexOf(t) >= 0)
				throw new Error("Worksheet with name |" + t + "| already exists!");
			e.SheetNames.push(t);
			e.Sheets[t] = r;
		};
		e.book_set_sheet_visibility = function (e, r, a) {
			t(e, "Workbook", {});
			t(e.Workbook, "Sheets", []);
			var i = n(e, r);
			t(e.Workbook.Sheets, i, {});
			switch (a) {
				case 0:
				case 1:
				case 2:
					break;
				default:
					throw new Error("Bad sheet visibility setting " + a);
			}
			e.Workbook.Sheets[i].Hidden = a;
		};
		r([
			["SHEET_VISIBLE", 0],
			["SHEET_HIDDEN", 1],
			["SHEET_VERY_HIDDEN", 2],
		]);
		e.cell_set_number_format = function (e, r) {
			e.z = r;
			return e;
		};
		e.cell_set_hyperlink = function (e, r, t) {
			if (!r) {
				delete e.l;
			} else {
				e.l = { Target: r };
				if (t) e.l.Tooltip = t;
			}
			return e;
		};
		e.cell_set_internal_link = function (r, t, a) {
			return e.cell_set_hyperlink(r, "#" + t, a);
		};
		e.cell_add_comment = function (e, r, t) {
			if (!e.c) e.c = [];
			e.c.push({ t: r, a: t || "SheetJS" });
		};
		e.sheet_set_array_formula = function (e, r, t) {
			var n = typeof r != "string" ? r : ht(r);
			var i = typeof r == "string" ? r : ut(r);
			for (var s = n.s.r; s <= n.e.r; ++s)
				for (var f = n.s.c; f <= n.e.c; ++f) {
					var l = a(e, s, f);
					l.t = "n";
					l.F = i;
					delete l.v;
					if (s == n.s.r && f == n.s.c) l.f = t;
				}
			return e;
		};
		return e;
	})(Lm);
	if (g && typeof require != "undefined")
		(function () {
			var r = {}.Readable;
			var t = function (e, t) {
				var a = r();
				var n = t == null ? {} : t;
				if (e == null || e["!ref"] == null) {
					a.push(null);
					return a;
				}
				var i = ht(e["!ref"]);
				var s = n.FS !== undefined ? n.FS : ",",
					f = s.charCodeAt(0);
				var l = n.RS !== undefined ? n.RS : "\n",
					o = l.charCodeAt(0);
				var c = new RegExp((s == "|" ? "\\|" : s) + "+$");
				var u = "",
					h = [];
				n.dense = Array.isArray(e);
				var d = (n.skipHidden && e["!cols"]) || [];
				var v = (n.skipHidden && e["!rows"]) || [];
				for (var p = i.s.c; p <= i.e.c; ++p)
					if (!(d[p] || {}).hidden) h[p] = nt(p);
				var m = i.s.r;
				var b = false;
				a._read = function () {
					if (!b) {
						b = true;
						return a.push("\ufeff");
					}
					if (m > i.e.r) return a.push(null);
					while (m <= i.e.r) {
						++m;
						if ((v[m - 1] || {}).hidden) continue;
						u = Rm(e, i, m - 1, h, f, o, s, n);
						if (u != null) {
							if (n.strip) u = u.replace(c, "");
							a.push(u + l);
							break;
						}
					}
				};
				return a;
			};
			var a = function (e, t) {
				var a = r();
				var n = t || {};
				var i = n.header != null ? n.header : Ap.BEGIN;
				var s = n.footer != null ? n.footer : Ap.END;
				a.push(i);
				var f = ct(e["!ref"]);
				n.dense = Array.isArray(e);
				a.push(Ap._preamble(e, f, n));
				var l = f.s.r;
				var o = false;
				a._read = function () {
					if (l > f.e.r) {
						if (!o) {
							o = true;
							a.push("</table>" + s);
						}
						return a.push(null);
					}
					while (l <= f.e.r) {
						a.push(Ap._row(e, f, l, n));
						++l;
						break;
					}
				};
				return a;
			};
			var n = function (e, t) {
				var a = r({ objectMode: true });
				if (e == null || e["!ref"] == null) {
					a.push(null);
					return a;
				}
				var n = { t: "n", v: 0 },
					i = 0,
					s = 1,
					f = [],
					l = 0,
					o = "";
				var c = { s: { r: 0, c: 0 }, e: { r: 0, c: 0 } };
				var u = t || {};
				var h = u.range != null ? u.range : e["!ref"];
				if (u.header === 1) i = 1;
				else if (u.header === "A") i = 2;
				else if (Array.isArray(u.header)) i = 3;
				switch (typeof h) {
					case "string":
						c = ht(h);
						break;
					case "number":
						c = ht(e["!ref"]);
						c.s.r = h;
						break;
					default:
						c = h;
				}
				if (i > 0) s = 0;
				var d = et(c.s.r);
				var v = [];
				var p = 0;
				var m = Array.isArray(e);
				var b = c.s.r,
					g = 0,
					w = 0;
				if (m && !e[b]) e[b] = [];
				for (g = c.s.c; g <= c.e.c; ++g) {
					v[g] = nt(g);
					n = m ? e[b][g] : e[v[g] + d];
					switch (i) {
						case 1:
							f[g] = g - c.s.c;
							break;
						case 2:
							f[g] = v[g];
							break;
						case 3:
							f[g] = u.header[g - c.s.c];
							break;
						default:
							if (n == null) n = { w: "__EMPTY", t: "s" };
							o = l = vt(n, null, u);
							p = 0;
							for (w = 0; w < f.length; ++w) if (f[w] == o) o = l + "_" + ++p;
							f[g] = o;
					}
				}
				b = c.s.r + s;
				a._read = function () {
					if (b > c.e.r) return a.push(null);
					while (b <= c.e.r) {
						++b;
						var r = ym(e, c, b, v, i, f, m, u);
						if (
							r.isempty === false ||
							(i === 1 ? u.blankrows !== false : !!u.blankrows)
						) {
							a.push(r.row);
							break;
						}
					}
				};
				return a;
			};
			e.stream = { to_json: n, to_html: a, to_csv: t };
		})();
	e.parse_xlscfb = fp;
	e.parse_ods = Np;
	e.parse_fods = Lp;
	e.write_ods = Hp;
	e.parse_zip = im;
	e.read = mm;
	e.readFile = bm;
	e.readFileSync = bm;
	e.write = Cm;
	e.writeFile = Tm;
	e.writeFileSync = Tm;
	e.writeFileAsync = xm;
	e.utils = Lm;
	e.SSF = R;
	e.CFB = U;
}
if (typeof exports !== "undefined") make_xlsx_lib(exports);
else if (typeof module !== "undefined" && module.exports)
	make_xlsx_lib(module.exports);
else if (typeof define === "function" && define.amd)
	define("xlsx", function () {
		if (!XLSX.version) make_xlsx_lib(XLSX);
		return XLSX;
	});
else make_xlsx_lib(XLSX);
var XLS = XLSX,
	ODS = XLSX;
