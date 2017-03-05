! function (t) {
	var e = "object",
		i = "document",
		n = "jQuery requires a window with a document",
		r = "undefined",
		a = "slice",
		s = "concat",
		o = "push",
		l = "indexOf",
		u = "toString",
		c = "hasOwnProperty",
		d = "1.12.4",
		p = "init",
		f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		h = /^-ms-/,
		m = /-([\da-z])/gi,
		v = "toUpperCase",
		g = "prototype",
		T = "",
		b = "call",
		S = "length",
		y = "constructor",
		C = "context",
		w = "map",
		P = "apply",
		A = "sort",
		M = "splice",
		x = "extend",
		G = "boolean",
		I = "isArray",
		H = "jQuery",
		E = "random",
		B = "replace",
		D = /\D/g,
		k = "function",
		L = "type",
		R = "array",
		O = "window",
		N = "nodeType",
		W = "isPrototypeOf",
		F = "trim",
		X = "execScript",
		V = "eval",
		z = "ms-",
		j = "nodeName",
		U = "toLowerCase",
		Y = "string",
		K = "max",
		q = "iterator",
		_ = "Boolean Number String Function Array Date RegExp Object Error Symbol",
		Q = "split",
		J = " ",
		Z = "[object ",
		tt = "]",
		et = "number",
		it = "sizzle",
		nt = "pop",
		rt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		at = "[\\x20\\t\\r\\n\\f]",
		st = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
		ot = "\\[",
		lt = "*(",
		ut = ")(?:",
		ct = "*([*^$|!~]?=)",
		dt = "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(",
		pt = "))|)",
		ft = "*\\]",
		ht = ":(",
		mt = ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|",
		vt = ")*)|.*)\\)|)",
		gt = "+",
		Tt = "g",
		bt = "^",
		St = "+|((?:^|[^\\\\])(?:\\\\.)*)",
		yt = "+$",
		Ct = "*,",
		wt = "*",
		Pt = "*([>+~]|",
		At = ")",
		Mt = "=",
		xt = "*([^\\]'\"]*?)",
		Gt = "$",
		It = "^#(",
		Ht = "^\\.(",
		$t = "^(",
		Et = "|[*])",
		Bt = "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(",
		Dt = "*(even|odd|(([+-]|)(\\d*)n|)",
		kt = "*(?:([+-]|)",
		Lt = "*(\\d+)|))",
		Rt = "*\\)|)",
		Ot = "i",
		Nt = "^(?:",
		Wt = ")$",
		Ft = "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(",
		Xt = "*((?:-\\d)?\\d*)",
		Vt = "*\\)|)(?=[^-]|$)",
		zt = /^(?:input|select|textarea|button)$/i,
		jt = /^h\d$/i,
		Ut = /^[^{]+\{\s*\[native \w/,
		Yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Kt = /[+~]/,
		qt = /'|\\/g,
		_t = "\\\\([\\da-f]{1,6}",
		Qt = "?|(",
		Jt = ")|.)",
		Zt = "ig",
		te = "0x",
		ee = "fromCharCode",
		ie = "childNodes",
		ne = "ownerDocument",
		re = "exec",
		ae = "getElementById",
		se = "id",
		oe = "getElementsByTagName",
		le = "getElementsByClassName",
		ue = "test",
		ce = "getAttribute",
		de = "\\$&",
		pe = "setAttribute",
		fe = "#",
		he = "[id='",
		me = "']",
		ve = "join",
		ge = ",",
		Te = "parentNode",
		be = "querySelectorAll",
		Se = "removeAttribute",
		ye = "$1",
		Ce = "shift",
		we = "createElement",
		Pe = "div",
		Ae = "removeChild",
		Me = "|",
		xe = "sourceIndex",
		Ge = "nextSibling",
		Ie = "input",
		He = "button",
		$e = "documentElement",
		Ee = "HTML",
		Be = "defaultView",
		De = "top",
		ke = "addEventListener",
		Le = "unload",
		Re = "attachEvent",
		Oe = "onunload",
		Ne = "attributes",
		We = "className",
		Fe = "appendChild",
		Xe = "createComment",
		Ve = "getElementsByName",
		ze = "find",
		je = "filter",
		Ue = "getAttributeNode",
		Ye = "value",
		Ke = "innerHTML",
		qe = "<a id='",
		_e = "'></a><select id='",
		Qe = "-\r\\' msallowcapture=''><option selected=''></option></select>",
		Je = "[msallowcapture^='']",
		Ze = "[*^$]=",
		ti = "*(?:''|\"\")",
		ei = "[selected]",
		ii = "*(?:value|",
		ni = "[id~=",
		ri = "-]",
		ai = "~=",
		si = ":checked",
		oi = "a#",
		li = "+*",
		ui = ".#.+[+~]",
		ci = "hidden",
		di = "name",
		pi = "D",
		fi = "[name=d]",
		hi = "*[*^$|!~]?=",
		mi = ":enabled",
		vi = ":disabled",
		gi = "*,:x",
		Ti = ",.*:",
		bi = "matches",
		Si = "webkitMatchesSelector",
		yi = "mozMatchesSelector",
		Ci = "oMatchesSelector",
		wi = "msMatchesSelector",
		Pi = "[s!='']:x",
		Ai = "!=",
		Mi = "compareDocumentPosition",
		xi = "contains",
		Gi = "unshift",
		Ii = "='$1']",
		Hi = "specified",
		$i = "error",
		Ei = "Syntax error, unrecognized expression: ",
		Bi = "textContent",
		Di = "firstChild",
		ki = "nodeValue",
		Li = "previousSibling",
		Ri = "nth",
		Oi = "even",
		Ni = "odd",
		Wi = "(^|",
		Fi = "(",
		Xi = "|$)",
		Vi = "class",
		zi = "^=",
		ji = "*=",
		Ui = "$=",
		Yi = "|=",
		Ki = "-",
		qi = "last",
		_i = "of-type",
		Qi = "only",
		Ji = "lastChild",
		Zi = "uniqueID",
		tn = "unsupported pseudo: ",
		en = "innerText",
		nn = "unsupported lang: ",
		rn = "lang",
		an = "xml:lang",
		sn = "location",
		on = "hash",
		ln = "activeElement",
		un = "hasFocus",
		cn = "href",
		dn = "tabIndex",
		pn = "disabled",
		fn = "checked",
		hn = "option",
		mn = "selected",
		vn = "selectedIndex",
		gn = "empty",
		Tn = "text",
		bn = "filters",
		Sn = "dir",
		yn = "0",
		Cn = "compile",
		wn = "selector",
		Pn = "select",
		An = "ID",
		Mn = "<a href='#'></a>",
		xn = "type|href|height|width",
		Gn = "<input/>",
		In = "defaultValue",
		Hn = ":",
		$n = "unique",
		En = "is",
		Bn = "match",
		Dn = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
		kn = /^.[^:#\[\.,]*$/,
		Ln = ":not(",
		Rn = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
		On = "<",
		Nn = "charAt",
		Wn = ">",
		Fn = /^(?:parents|prev(?:Until|All))/,
		Xn = "index",
		Vn = "get",
		zn = "add",
		jn = "iframe",
		Un = "contentDocument",
		Yn = "contentWindow",
		Kn = "Until",
		qn = "reverse",
		_n = /\S+/g,
		Qn = "memory",
		Jn = "has",
		Zn = "disable",
		tr = "resolve",
		er = "done",
		ir = "once memory",
		nr = "resolved",
		rr = "reject",
		ar = "fail",
		sr = "rejected",
		or = "notify",
		lr = "progress",
		ur = "pending",
		cr = "With",
		dr = "then",
		pr = "lock",
		fr = "ready",
		hr = "removeEventListener",
		mr = "DOMContentLoaded",
		vr = "load",
		gr = "detachEvent",
		Tr = "onreadystatechange",
		br = "onload",
		Sr = "event",
		yr = "complete",
		Cr = "readyState",
		wr = "loading",
		Pr = "doScroll",
		Ar = "setTimeout",
		Mr = "frameElement",
		xr = "left",
		Gr = "body",
		Ir = "style",
		Hr = "cssText",
		$r = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
		Er = "zoom",
		Br = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
		Dr = "offsetWidth",
		kr = "classid",
		Lr = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Rr = /([A-Z])/g,
		Or = "data-",
		Nr = "-$1",
		Wr = "true",
		Fr = "false",
		Xr = "null",
		Vr = "data",
		zr = "toJSON",
		jr = "expando",
		Ur = "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
		Yr = "parsedAttrs",
		Kr = "fx",
		qr = "queue",
		_r = "inprogress",
		Qr = "stop",
		Jr = "queueHooks",
		Zr = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
		ta = "width",
		ea = "5px",
		ia = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/,
		na = "source",
		ra = "^(?:([+-])=|)(",
		aa = ")([a-z%]*)$",
		sa = "Top",
		oa = "Right",
		la = "Bottom",
		ua = "Left",
		ca = "none",
		da = "display",
		pa = "px",
		fa = ".5",
		ha = "start",
		ma = "end",
		va = /^(?:checkbox|radio)$/i,
		ga = /<([\w:-]+)/,
		Ta = /^$|\/(?:java|ecma)script/i,
		ba = /^\s+/,
		Sa = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video",
		ya = "createDocumentFragment",
		Ca = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
		wa = "tbody",
		Pa = "link",
		Aa = "<:nav></:nav>",
		Ma = "nav",
		xa = "cloneNode",
		Ga = "outerHTML",
		Ia = "checkbox",
		Ha = "<textarea>x</textarea>",
		$a = "radio",
		Ea = "t",
		Ba = "<select multiple='multiple'>",
		Da = "</select>",
		ka = "<fieldset>",
		La = "</fieldset>",
		Ra = "<map>",
		Oa = "</map>",
		Na = "<object>",
		Wa = "</object>",
		Fa = "<table>",
		Xa = "</table>",
		Va = "<table><tbody>",
		za = "</tbody></table>",
		ja = "<table><tbody></tbody><colgroup>",
		Ua = "</colgroup></table>",
		Ya = "<table><tbody><tr>",
		Ka = "</tr></tbody></table>",
		qa = "X<div>",
		_a = "</div>",
		Qa = "caption",
		Ja = "globalEval",
		Za = /<|&#?\w+;/,
		ts = /<tbody/i,
		es = "defaultChecked",
		is = "createTextNode",
		ns = "table",
		rs = "script",
		as = "on",
		ss = /^(?:input|select|textarea)$/i,
		os = /^key/,
		ls = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		us = /^(?:focusinfocus|focusoutblur)$/,
		cs = /^([^.]*)(?:\.(.+)|)/,
		ds = ".",
		ps = "global",
		fs = "(^|\\.)",
		hs = "\\.(?:.*\\.|)",
		ms = "(\\.|$)",
		vs = "**",
		gs = "remove",
		Ts = "events",
		bs = "namespace",
		Ss = "Event",
		ys = "result",
		Cs = "target",
		ws = "parentWindow",
		Ps = "handle",
		As = "preventDefault",
		Ms = "currentTarget",
		xs = "stopPropagation",
		Gs = "click",
		Is = "srcElement",
		Hs = "metaKey",
		$s = "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which",
		Es = "char charCode key keyCode",
		Bs = "which",
		Ds = "charCode",
		ks = "keyCode",
		Ls = "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement",
		Rs = "fromElement",
		Os = "pageX",
		Ns = "clientX",
		Ws = "scrollLeft",
		Fs = "clientLeft",
		Xs = "pageY",
		Vs = "clientY",
		zs = "scrollTop",
		js = "clientTop",
		Us = "relatedTarget",
		Ys = "toElement",
		Ks = "focus",
		qs = "focusin",
		_s = "blur",
		Qs = "focusout",
		Js = "a",
		Zs = "returnValue",
		to = "defaultPrevented",
		eo = "timeStamp",
		io = "now",
		no = "cancelBubble",
		ro = "stopImmediatePropagation",
		ao = "mouseover",
		so = "mouseout",
		oo = "pointerover",
		lo = "pointerout",
		uo = "submit",
		co = "form",
		po = "click._submit keypress._submit",
		fo = "submit._submit",
		ho = "._submit",
		mo = "propertychange._change",
		vo = "propertyName",
		go = "click._change",
		To = "change",
		bo = "beforeactivate._change",
		So = "change._change",
		yo = "._change",
		Co = / jQuery\d+="(?:null|\d+)"/g,
		wo = "<(?:",
		Po = ")[\\s/>]",
		Ao = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
		Mo = /<script|<style|<link/i,
		xo = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Go = /^true\/(.*)/,
		Io = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		Ho = "tr",
		$o = "/",
		Eo = "defaultSelected",
		Bo = "textarea",
		Do = "clone",
		ko = "src",
		Lo = "<$1></$2>",
		Ro = "append",
		Oo = "insertBefore",
		No = "options",
		Wo = "replaceChild",
		Fo = "prepend",
		Xo = "before",
		Vo = "after",
		zo = "replaceWith",
		jo = "block",
		Uo = "detach",
		Yo = "<iframe frameborder='0' width='0' height='0'/>",
		Ko = "write",
		qo = "close",
		_o = /^margin/,
		Qo = ")(?!px)[a-z%]+$",
		Jo = "float:left;opacity:.5",
		Zo = "opacity",
		tl = "0.5",
		el = "cssFloat",
		il = "backgroundClip",
		nl = "content-box",
		rl = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
		al = "boxSizing",
		sl = "MozBoxSizing",
		ol = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
		ll = "getComputedStyle",
		ul = "1%",
		cl = "2px",
		dl = "marginLeft",
		pl = "4px",
		fl = "marginRight",
		hl = "50%",
		ml = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
		vl = "1px",
		gl = "getClientRects",
		Tl = "<table><tr><td></td><td>t</td></tr></table>",
		bl = "borderCollapse",
		Sl = "separate",
		yl = "td",
		Cl = "margin:0;border:0;padding:0;display:none",
		wl = "offsetHeight",
		Pl = /^(top|right|bottom|left)$/,
		Al = "opener",
		Ml = "getPropertyValue",
		xl = "minWidth",
		Gl = "maxWidth",
		Il = "currentStyle",
		Hl = "runtimeStyle",
		$l = "fontSize",
		El = "1em",
		Bl = "pixelLeft",
		Dl = "auto",
		kl = /alpha\([^)]*\)/i,
		Ll = /opacity\s*=\s*([^)]*)/i,
		Rl = /^(none|table(?!-c[ea]).+)/,
		Ol = ")(.*)$",
		Nl = "absolute",
		Wl = "400",
		Fl = "Webkit",
		Xl = "O",
		Vl = "Moz",
		zl = "ms",
		jl = "olddisplay",
		Ul = "border",
		Yl = "content",
		Kl = "margin",
		ql = "padding",
		_l = "Width",
		Ql = "border-box",
		Jl = "1",
		Zl = "styleFloat",
		tu = "background",
		eu = "inherit",
		iu = "set",
		nu = "normal",
		ru = "height",
		au = "alpha(opacity=",
		su = "inline-block",
		ou = "getBoundingClientRect",
		lu = "show",
		uu = "hide",
		cu = "duration",
		du = "step",
		pu = "cos",
		fu = "PI",
		hu = "swing",
		mu = /^(?:toggle|show|hide)$/,
		vu = /queueHooks$/,
		gu = "fxshow",
		Tu = "overflow",
		bu = "overflowX",
		Su = "overflowY",
		yu = "inline",
		Cu = "float",
		wu = "toggle",
		Pu = "expand",
		Au = "startTime",
		Mu = "speed",
		xu = "animate",
		Gu = "finish",
		Iu = "interval",
		Hu = "setInterval",
		$u = "clearInterval",
		Eu = "clearTimeout",
		Bu = "top:1px",
		Du = /top/,
		ku = "/a",
		Lu = "enctype",
		Ru = /\r/g,
		Ou = /[\x20\t\r\n\f]+/g,
		Nu = "select-one",
		Wu = "optgroup",
		Fu = "scrollHeight",
		Xu = /^(?:checked|selected)$/i,
		Vu = "default-",
		zu = /\w+/g,
		ju = "setAttributeNode",
		Uu = "createAttribute",
		Yu = "coords",
		Ku = /^(?:input|select|textarea|button|object)$/i,
		qu = /^(?:a|area)$/i,
		_u = "tabindex",
		Qu = "htmlFor",
		Ju = "readOnly",
		Zu = "maxLength",
		tc = "cellSpacing",
		ec = "cellPadding",
		ic = "rowSpan",
		nc = "colSpan",
		rc = "useMap",
		ac = "frameBorder",
		sc = "contentEditable",
		oc = "encoding",
		lc = /[\t\r\n\f]/g,
		uc = "__className__",
		cc = "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu",
		dc = /\?/,
		pc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g,
		fc = "JSON",
		hc = "parse",
		mc = "return ",
		vc = "Invalid JSON: ",
		gc = "DOMParser",
		Tc = "parseFromString",
		bc = "text/xml",
		Sc = "Microsoft.XMLDOM",
		yc = "async",
		Cc = "parsererror",
		wc = "Invalid XML: ",
		Pc = /#.*$/,
		Ac = /([?&])_=[^&]*/,
		Mc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		xc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		Gc = /^(?:GET|HEAD)$/,
		Ic = /^\/\//,
		Hc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		$c = "*/",
		Ec = "mimeType",
		Bc = "getResponseHeader",
		Dc = "Content-Type",
		kc = "* ",
		Lc = "throws",
		Rc = "No conversion from ",
		Oc = " to ",
		Nc = "success",
		Wc = "GET",
		Fc = "application/x-www-form-urlencoded; charset=UTF-8",
		Xc = "text/plain",
		Vc = "text/html",
		zc = "application/xml, text/xml",
		jc = "application/json, text/javascript",
		Uc = /\bxml\b/,
		Yc = /\bhtml/,
		Kc = /\bjson\b/,
		qc = "responseXML",
		_c = "responseText",
		Qc = "responseJSON",
		Jc = "canceled",
		Zc = "status",
		td = "abort",
		ed = "url",
		id = "//",
		nd = "method",
		rd = "http:",
		ad = "80",
		sd = "443",
		od = "active",
		ld = "ajaxStart",
		ud = "&",
		cd = "?",
		dd = "$1_=",
		pd = "_=",
		fd = "lastModified",
		hd = "setRequestHeader",
		md = "If-Modified-Since",
		vd = "If-None-Match",
		gd = "contentType",
		Td = "Accept",
		bd = ", ",
		Sd = "; q=0.01",
		yd = "headers",
		Cd = "ajaxSend",
		wd = "timeout",
		Pd = "send",
		Ad = "No Transport",
		Md = "Last-Modified",
		xd = "etag",
		Gd = "HEAD",
		Id = "nocontent",
		Hd = "notmodified",
		$d = "state",
		Ed = "statusText",
		Bd = "ajaxSuccess",
		Dd = "ajaxError",
		kd = "ajaxComplete",
		Ld = "ajaxStop",
		Rd = "json",
		Od = "post",
		Nd = "parent",
		Wd = "visible",
		Fd = /%20/g,
		Xd = /\[\]$/,
		Vd = /\r?\n/g,
		zd = /^(?:submit|button|image|reset|file)$/i,
		jd = /^(?:input|select|textarea|keygen)/i,
		Ud = "[",
		Yd = "elements",
		Kd = "\r\n",
		qd = "documentMode",
		_d = /^(get|post|head|put|delete|options)$/i,
		Qd = "withCredentials",
		Jd = "open",
		Zd = "username",
		tp = "password",
		ep = "overrideMimeType",
		ip = "X-Requested-With",
		np = "XMLHttpRequest",
		rp = "getAllResponseHeaders",
		ap = "Microsoft.XMLHTTP",
		sp = "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
		op = /\b(?:java|ecma)script\b/,
		lp = "head",
		up = "charset",
		cp = /loaded|complete/,
		dp = /(=)\?(?=&|$)|\?\?/,
		pp = "callback",
		fp = "_",
		hp = "json jsonp",
		mp = "application/x-www-form-urlencoded",
		vp = "jsonp",
		gp = "script json",
		Tp = " was not called",
		bp = "POST",
		Sp = "html",
		yp = "<div>",
		Cp = "offset",
		wp = "position",
		Pp = "static",
		Ap = "relative",
		Mp = "fixed",
		xp = "using",
		Gp = "pageYOffset",
		Ip = "pageXOffset",
		Hp = "offsetParent",
		$p = "borderTopWidth",
		Ep = "borderLeftWidth",
		Bp = "marginTop",
		Dp = /Y/,
		kp = "scrollTo",
		Lp = "inner",
		Rp = "outer",
		Op = "client",
		Np = "scroll",
		Wp = "size",
		Fp = "jquery",
		Xp = "Bootstrap's JavaScript requires jQuery",
		Vp = "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3",
		zp = "bootstrap",
		jp = "webkitTransitionEnd",
		Up = "transitionend",
		Yp = "oTransitionEnd otransitionend",
		Kp = "bsTransitionEnd",
		qp = "transition",
		_p = "bs.alert",
		Qp = '[data-dismiss="alert"]',
		Jp = "VERSION",
		Zp = "3.3.6",
		tf = "closed.bs.alert",
		ef = "data-target",
		nf = /.*(?=#[^\s]*$)/,
		rf = "closest",
		af = ".alert",
		sf = "close.bs.alert",
		of = "in",
		lf = "fade",
		uf = "alert",
		cf = "click.bs.alert.data-api",
		df = "bs.button",
		pf = "loading...",
		ff = "val",
		hf = "Text",
		mf = "resetText",
		vf = "loadingText",
		gf = '[data-toggle="buttons"]',
		Tf = ".active",
		bf = "aria-pressed",
		Sf = "click.bs.button.data-api",
		yf = '[data-toggle^="button"]',
		Cf = "btn",
		wf = ".btn",
		Pf = 'input[type="radio"]',
		Af = 'input[type="checkbox"]',
		Mf = "focus.bs.button.data-api blur.bs.button.data-api",
		xf = /^focus(in)?$/,
		Gf = "bs.carousel",
		If = "pause",
		Hf = ".carousel-indicators",
		$f = "paused",
		Ef = "keydown.bs.carousel",
		Bf = "hover",
		Df = "ontouchstart",
		kf = "mouseenter.bs.carousel",
		Lf = "mouseleave.bs.carousel",
		Rf = /input|textarea/i,
		Of = "tagName",
		Nf = "next",
		Wf = "children",
		Ff = ".item",
		Xf = "prev",
		Vf = "wrap",
		zf = ".item.active",
		jf = "slid.bs.carousel",
		Uf = ".next, .prev",
		Yf = "right",
		Kf = "slide.bs.carousel",
		qf = "slide",
		_f = /.*(?=#[^\s]+$)/,
		Qf = "carousel",
		Jf = "data-slide-to",
		Zf = "click.bs.carousel.data-api",
		th = "[data-slide]",
		eh = "[data-slide-to]",
		ih = '[data-ride="carousel"]',
		nh = "bs.collapse",
		rh = /show|hide/,
		ah = '[data-toggle="collapse"][href="#',
		sh = '"],[data-toggle="collapse"][data-target="#',
		oh = '"]',
		lh = ".panel",
		uh = ".in, .collapsing",
		ch = "show.bs.collapse",
		dh = "collapse",
		ph = "collapsing",
		fh = "aria-expanded",
		hh = "collapsed",
		mh = "collapse in",
		vh = "shown.bs.collapse",
		gh = "hide.bs.collapse",
		Th = "hidden.bs.collapse",
		bh = '[data-toggle="collapse"][data-parent="',
		Sh = "click.bs.collapse.data-api",
		yh = '[data-toggle="collapse"]',
		Ch = /#[A-Za-z]/,
		wh = "hide.bs.dropdown",
		Ph = "hidden.bs.dropdown",
		Ah = "bs.dropdown",
		Mh = ".dropdown-backdrop",
		xh = '[data-toggle="dropdown"]',
		Gh = "click.bs.dropdown",
		Ih = ".disabled, :disabled",
		Hh = ".navbar-nav",
		$h = "dropdown-backdrop",
		Eh = "show.bs.dropdown",
		Bh = "shown.bs.dropdown",
		Dh = /(38|40|27|32)/,
		kh = " li:not(.disabled):visible a",
		Lh = ".dropdown-menu",
		Rh = "click.bs.dropdown.data-api",
		Oh = ".dropdown form",
		Nh = "keydown.bs.dropdown.data-api",
		Wh = "bs.modal",
		Fh = ".modal-dialog",
		Xh = ".modal-content",
		Vh = "loaded.bs.modal",
		zh = "show.bs.modal",
		jh = "modal-open",
		Uh = "escape",
		Yh = "resize",
		Kh = "click.dismiss.bs.modal",
		qh = '[data-dismiss="modal"]',
		_h = "mousedown.dismiss.bs.modal",
		Qh = "mouseup.dismiss.bs.modal",
		Jh = "shown.bs.modal",
		Zh = "hide.bs.modal",
		tm = "focusin.bs.modal",
		em = "keydown.dismiss.bs.modal",
		im = "resize.bs.modal",
		nm = "hidden.bs.modal",
		rm = "modal-backdrop ",
		am = "clientHeight",
		sm = "innerWidth",
		om = "abs",
		lm = "clientWidth",
		um = "padding-right",
		cm = "paddingRight",
		dm = "modal-scrollbar-measure",
		pm = "click.bs.modal.data-api",
		fm = '[data-toggle="modal"]',
		hm = /#/,
		mm = ":visible",
		vm = "bs.tooltip",
		gm = /destroy|hide/,
		Tm = "enabled",
		bm = "tooltip",
		Sm = '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		ym = "hover focus",
		Cm = "viewport",
		wm = "`selector` option must be specified when initializing ",
		Pm = " on the window.document object!",
		Am = "click.",
		Mm = "manual",
		xm = "mouseenter",
		Gm = "mouseleave",
		Im = "bs.",
		Hm = "out",
		$m = "show.bs.",
		Em = "aria-describedby",
		Bm = "animation",
		Dm = /\s?auto?\s?/i,
		km = "inserted.bs.",
		Lm = "bottom",
		Rm = "shown.bs.",
		Om = "margin-top",
		Nm = "margin-left",
		Wm = "round",
		Fm = /top|bottom/,
		Xm = "%",
		Vm = ".tooltip-inner",
		zm = "fade in top bottom left right",
		jm = "hidden.bs.",
		Um = "hide.bs.",
		Ym = "title",
		Km = "data-original-title",
		qm = "BODY",
		_m = /right|left/,
		Qm = " `template` option must consist of exactly 1 top-level element!",
		Jm = ".tooltip-arrow",
		Zm = "enable",
		tv = "bs.popover",
		ev = "popover",
		iv = "Popover requires tooltip.js",
		nv = '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
		rv = ".popover-title",
		av = ".popover-content",
		sv = "fade top bottom left right in",
		ov = "data-content",
		lv = ".arrow",
		uv = " .nav li > a",
		cv = "scroll.bs.scrollspy",
		dv = "process",
		pv = "refresh",
		fv = "bs.scrollspy",
		hv = /^#./,
		mv = "clear",
		vv = '[data-target="',
		gv = '"],',
		Tv = '[href="',
		bv = "li",
		Sv = "li.dropdown",
		yv = "activate.bs.scrollspy",
		Cv = "load.bs.scrollspy.data-api",
		wv = '[data-spy="scroll"]',
		Pv = "bs.tab",
		Av = "ul:not(.dropdown-menu)",
		Mv = ".active:last a",
		xv = "hide.bs.tab",
		Gv = "show.bs.tab",
		Iv = "hidden.bs.tab",
		Hv = "shown.bs.tab",
		$v = "> .dropdown-menu > .active",
		Ev = '[data-toggle="tab"]',
		Bv = "> .active",
		Dv = "> .fade",
		kv = "click.bs.tab.data-api",
		Lv = '[data-toggle="pill"]',
		Rv = "bs.affix",
		Ov = "scroll.bs.affix.data-api",
		Nv = "click.bs.affix.data-api",
		Wv = "affix affix-top affix-bottom",
		Fv = "affix",
		Xv = ".bs.affix",
		Vv = "affixed",
		zv = '[data-spy="affix"]',
		jv = "offsetTop",
		Uv = "floor",
		Yv = "loop",
		Kv = "onAutoplay",
		qv = "autoplay",
		_v = "MutationObserver",
		Qv = "forEach",
		Jv = "onObserverUpdate",
		Zv = "observe",
		tg = "shiftKey",
		eg = "altKey",
		ig = "ctrlKey",
		ng = ".swiper-slide",
		rg = ".swiper-slide-active",
		ag = "innerHeight",
		sg = "mousewheel",
		og = "wheelDeltaX",
		lg = "wheelDeltaY",
		ug = "DOMMouseScroll",
		cg = "detail",
		dg = "wheel",
		pg = "deltaX",
		fg = "deltaY",
		hg = "Date",
		mg = "getTime",
		vg = "data-swiper-parallax",
		gg = "data-swiper-parallax-x",
		Tg = "data-swiper-parallax-y",
		bg = "transform",
		Sg = "translate3d(",
		yg = ",0px)",
		Cg = "substring",
		wg = "horizontal",
		Pg = "container",
		Ag = "column",
		Mg = "span",
		xg = "bullets",
		Gg = "swiper-no-swiping",
		Ig = "swiper-slide",
		Hg = "swiper-slide-active",
		$g = "swiper-slide-visible",
		Eg = "swiper-slide-duplicate",
		Bg = "swiper-slide-next",
		Dg = "swiper-slide-prev",
		kg = "swiper-wrapper",
		Lg = "swiper-pagination-bullet",
		Rg = "swiper-pagination-bullet-active",
		Og = "swiper-button-disabled",
		Ng = "swiper-pagination-current",
		Wg = "swiper-pagination-total",
		Fg = "swiper-pagination-hidden",
		Xg = "swiper-pagination-progressbar",
		Vg = "Previous slide",
		zg = "Next slide",
		jg = "This is the first slide",
		Ug = "This is the last slide",
		Yg = "Go to slide {{index}}",
		Kg = "swiper",
		qg = "swiper-container-",
		_g = "direction",
		Qg = "swiper-container-free-mode",
		Jg = "swiper-container-no-flexbox",
		Zg = "swiper-container-autoheight",
		tT = "cube",
		eT = "coverflow",
		iT = "flip",
		nT = "swiper-container-3d",
		rT = "swiper-pagination-clickable",
		aT = "swiper-pagination-",
		sT = "rtl",
		oT = "swiper-container-rtl",
		lT = "-webkit-box",
		uT = "swiper-container-multirow",
		cT = "swiper-container-android",
		dT = "translate",
		pT = "cursor",
		fT = "move",
		hT = "-webkit-grab",
		mT = "-moz-grab",
		vT = "grab",
		gT = "Image",
		TT = "onerror",
		bT = "srcset",
		ST = "update",
		yT = "onImagesReady",
		CT = "img",
		wT = "currentSrc",
		PT = "onAutoplayStart",
		AT = "onAutoplayStop",
		MT = "padding-left",
		xT = "padding-top",
		GT = "padding-bottom",
		IT = "ceil",
		HT = "row",
		$T = "data-swiper-column",
		ET = "data-swiper-row",
		BT = "outerWidth",
		DT = "outerHeight",
		kT = "offsetLeft",
		LT = "onReachBeginning",
		RT = "onReachEnd",
		OT = "onProgress",
		NT = "fraction",
		WT = "translate3d(0,0,0) scaleX(",
		FT = ") scaleY(",
		XT = "custom",
		VT = "onPaginationRendered",
		zT = ' class="',
		jT = '"></',
		UT = '<span class="',
		YT = '"></span> / <span class="',
		KT = '"></span>',
		qT = "min",
		_T = "controller",
		QT = "mousedown",
		JT = "mousemove",
		ZT = "mouseup",
		tb = "navigator",
		eb = "pointerEnabled",
		ib = "pointerdown",
		nb = "pointermove",
		rb = "pointerup",
		ab = "msPointerEnabled",
		sb = "MSPointerDown",
		ob = "MSPointerMove",
		lb = "MSPointerUp",
		ub = "touchstart",
		cb = "touchmove",
		db = "touchend",
		pb = "swiper-wp8-",
		fb = "off",
		hb = "keydown",
		mb = "data-swiper-slide-index",
		vb = '[data-swiper-slide-index="',
		gb = '"]:not(.swiper-slide-duplicate)',
		Tb = "input, select, textarea, button",
		bb = "touches",
		Sb = "targetTouches",
		yb = "threshold",
		Cb = "onTouchStart",
		wb = "onTouchMove",
		Pb = "atan2",
		Ab = "onTouchMoveOpposite",
		Mb = "onSliderMove",
		xb = "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd",
		Gb = "-webkit-grabbing",
		Ib = "-moz-grabbin",
		Hb = "grabbing",
		$b = "pow",
		Eb = "startX",
		Bb = "startY",
		Db = "currentX",
		kb = "currentY",
		Lb = "onTouchEnd",
		Rb = "onTap",
		Ob = "onClick",
		Nb = "onDoubleTap",
		Wb = "time",
		Fb = "onMomentumBounce",
		Xb = "onTransitionStart",
		Vb = "onSlideChangeStart",
		zb = "onSlideNextStart",
		jb = "onSlidePrevStart",
		Ub = "onTransitionEnd",
		Yb = "onSlideChangeEnd",
		Kb = "onSlideNextEnd",
		qb = "onSlidePrevEnd",
		_b = "control",
		Qb = "onSetTransition",
		Jb = "px, ",
		Zb = "px)",
		tS = "translate(",
		eS = "setTranslate",
		iS = "onSetTranslate",
		nS = "x",
		rS = "WebKitCSSMatrix",
		aS = "webkitTransform",
		sS = "MozTransform",
		oS = "msTransform",
		lS = "matrix(1, 0, 0, 1,",
		uS = "m41",
		cS = "y",
		dS = "m42",
		pS = "disconnect",
		fS = "px, 0px)",
		hS = "oTransitionEnd",
		mS = "MSTransitionEnd",
		vS = "msTransitionEnd",
		gS = "zIndex",
		TS = ".swiper-slide-shadow-left",
		bS = ".swiper-slide-shadow-top",
		SS = ".swiper-slide-shadow-right",
		yS = ".swiper-slide-shadow-bottom",
		CS = '<div class="swiper-slide-shadow-',
		wS = '"></div>',
		PS = "px, 0px) rotateX(",
		AS = "deg) rotateY(",
		MS = "deg)",
		xS = ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
		GS = ".swiper-cube-shadow",
		IS = '<div class="swiper-cube-shadow"></div>',
		HS = "rotateX(",
		$S = "deg) translate3d(",
		ES = "50% 50% -",
		BS = "translate3d(0px, ",
		DS = "px) rotateX(90deg) rotateZ(0deg) scale(",
		kS = "sin",
		LS = "scale3d(",
		RS = ", 1, ",
		OS = ") translate3d(0px, ",
		NS = "px) rotateX(-90deg)",
		WS = "translate3d(0px,0,",
		FS = "px) rotateX(",
		XS = "rotate",
		VS = "px,",
		zS = "px)  rotateX(",
		jS = "perspectiveOrigin",
		US = "px 50%",
		YS = ".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)",
		KS = "swiper-lazy",
		qS = "swiper-lazy-loaded",
		_S = "swiper-lazy-loading",
		QS = "data-background",
		JS = "data-src",
		ZS = "data-srcset",
		ty = "background-image",
		ey = 'url("',
		iy = '")',
		ny = ".swiper-lazy-preloader, .preloader",
		ry = '"]:not(.',
		ay = "onLazyImageReady",
		sy = "onLazyImageLoad",
		oy = "track",
		ly = "onScrollbarDragStart",
		uy = "onScrollbarDragMove",
		cy = "onScrollbarDragEnd",
		dy = ".swiper-scrollbar-drag",
		py = '<div class="swiper-scrollbar-drag"></div>',
		fy = "px, 0, 0)",
		hy = "translateX(",
		my = "px, 0)",
		vy = "translateY(",
		gy = "lastIndex",
		Ty = "data-hash",
		by = "WheelEvent",
		Sy = "onmousewheel",
		yy = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]",
		Cy = "data-swiper-parallax-duration",
		wy = "plugins",
		Py = "role",
		Ay = "aria-label",
		My = "aria-disabled",
		xy = '<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>',
		Gy = /{{index}}/,
		Iy = "onInit",
		Hy = "onDestroy",
		$y = "userAgent",
		Ey = "safari",
		By = "chrome",
		Dy = "android",
		ky = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i,
		Ly = "[object Array]",
		Ry = "msMaxTouchPoints",
		Oy = "maxTouchPoints",
		Ny = /(Android);?[\s\/]+([\d.]+)?/,
		Wy = /(iPad).*OS\s([\d_]+)/,
		Fy = /(iPod)(.*OS\s([\d_]+))?/,
		Xy = /(iPhone\sOS)\s([\d_]+)/,
		Vy = "webkitPerspective",
		zy = "MozPerspective",
		jy = "OPerspective",
		Uy = "MsPerspective",
		Yy = "perspective",
		Ky = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient",
		qy = "WebkitMutationObserver",
		_y = "<li",
		Qy = "ul",
		Jy = "<tr",
		Zy = "<td",
		tC = "<th",
		eC = "<tbody",
		iC = "<option",
		nC = /[ .<>:~]/,
		rC = "classList",
		aC = "webkitTransitionDuration",
		sC = "msTransitionDuration",
		oC = "MozTransitionDuration",
		lC = "transitionDuration",
		uC = "listener",
		cC = "CustomEvent",
		dC = "createEvent",
		pC = "initEvent",
		fC = "dispatchEvent",
		hC = "margin-right",
		mC = "margin-bottom",
		vC = "nextElementSibling",
		gC = "previousElementSibling",
		TC = "Zepto",
		bC = "Dom7",
		SC = "transitionEnd",
		yC = "Cannot find module '",
		CC = "'",
		wC = "code",
		PC = "MODULE_NOT_FOUND",
		AC = "initialize",
		MC = "destroy",
		xC = "../main",
		GC = "../plugin/instances",
		IC = "list",
		HC = "e",
		$C = "bind",
		EC = "./class",
		BC = "./dom",
		DC = "input,[contenteditable]",
		kC = "select,[contenteditable]",
		LC = "textarea,[contenteditable]",
		RC = "button,[contenteditable]",
		OC = "ps-",
		NC = "paddingLeft",
		WC = "borderRightWidth",
		FC = "ps-in-scrolling",
		XC = "ps-x",
		VC = "ps-y",
		zC = "WebkitAppearance",
		jC = "./plugin/destroy",
		UC = "./plugin/initialize",
		YC = "./plugin/update",
		KC = "default",
		qC = "../lib/dom",
		_C = "../lib/helper",
		QC = "./instances",
		JC = "../../lib/helper",
		ZC = "../instances",
		tw = "../update-geometry",
		ew = "../update-scroll",
		iw = "../../lib/dom",
		nw = ":focus",
		rw = "shadowRoot",
		aw = "deltaMode",
		sw = "wheelDelta",
		ow = "querySelector",
		lw = "textarea:hover",
		uw = "onwheel",
		cw = "getSelection",
		dw = "getRangeAt",
		pw = "commonAncestorContainer",
		fw = "selectionchange",
		hw = "pointerType",
		mw = "mouse",
		vw = "MSPOINTER_TYPE_MOUSE",
		gw = "../lib/class",
		Tw = "./update-geometry",
		bw = "./handler/click-rail",
		Sw = "./handler/drag-scrollbar",
		yw = "./handler/keyboard",
		Cw = "./handler/mouse-wheel",
		ww = "./handler/native-scroll",
		Pw = "./handler/selection",
		Aw = "./handler/touch",
		Mw = "ps-container",
		xw = "ps-theme-",
		Gw = "ps-focus",
		Iw = "scrollWidth",
		Hw = "ps-scrollbar-x-rail",
		$w = "ps-scrollbar-x",
		Ew = "ps-scrollbar-y-rail",
		Bw = "ps-scrollbar-y",
		Dw = "borderBottomWidth",
		kw = "marginBottom",
		Lw = "dataset",
		Rw = "data-ps-id",
		Ow = "./default-setting",
		Nw = "../lib/event-manager",
		Ww = "../lib/guid",
		Fw = "./update-scroll",
		Xw = ".ps-scrollbar-x-rail",
		Vw = ".ps-scrollbar-y-rail",
		zw = "ps-active-x",
		jw = "ps-active-y",
		Uw = "ps-scroll-up",
		Yw = "ps-scroll-down",
		Kw = "ps-scroll-left",
		qw = "ps-scroll-right",
		_w = "ps-scroll-y",
		Qw = "ps-scroll-x",
		Jw = "ps-x-reach-start",
		Zw = "ps-x-reach-end",
		tP = "ps-y-reach-start",
		eP = "ps-y-reach-end",
		iP = "You must provide an element to the update-scroll function",
		nP = "You must provide an axis to the update-scroll function",
		rP = "You must provide a value to the update-scroll function",
		aP = "click.dismiss.modal",
		sP = ".modal-body",
		oP = "loaded",
		lP = "modalmanager",
		uP = "focusin.modal",
		cP = "animated",
		dP = "modal-overflow",
		pP = "aria-hidden",
		fP = "max-height",
		hP = "maxHeight",
		mP = /%/gi,
		vP = "keydown.tabindex.modal",
		gP = "[data-tabindex]",
		TP = "[data-tabindex]:enabled:visible:not([readonly])",
		bP = "[data-tabindex=",
		SP = "keyup.dismiss.modal",
		yP = '<div class="loading-mask ',
		CP = '">',
		wP = ".modal",
		PP = "modal",
		AP = "destroyed",
		MP = "shake",
		xP = '<div class="loading-spinner" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
		GP = '<div class="modal-backdrop" />',
		IP = "click.modal",
		HP = "click.modal.data-api",
		$P = "stack",
		EP = "resize.modal",
		BP = "show.modalmanager",
		DP = "page-overflow",
		kP = "shown",
		LP = "hidden.modalmanager",
		RP = "destroyed.modalmanager",
		OP = ".modalmanager",
		NP = '<div class="modal-scrollable">',
		WP = "z-index",
		FP = "backdrop",
		XP = "click.modalmanager",
		VP = '<div class="modal hide" />',
		zP = '<div class="modal-backdrop hide" />',
		jP = '<div class="loading-spinner fade" style="width: 200px; margin-left: -100px;"><div class="progress progress-striped active"><div class="bar" style="width: 100%;"></div></div></div>',
		UP = "1.2.10",
		YP = '<div class="cluetip-outer">',
		KP = '<div class="cluetip-title ui-widget-header ui-cluetip-header"></div>',
		qP = '<div class="cluetip-inner ui-widget-content ui-cluetip-content"></div>',
		_P = '<div class="cluetip-extra"></div>',
		QP = "appendTo",
		JP = "rel",
		ZP = "help",
		tA = "Close",
		eA = /<(script|style|title)[^<]+<\/(script|style|title)>/gm,
		iA = /<(link|meta)[^>]+>/g,
		nA = "cluetip ui-widget ui-widget-content ui-cluetip",
		rA = /&/g,
		aA = "&amp;",
		sA = />/g,
		oA = "&gt;",
		lA = /</g,
		uA = "&lt;",
		cA = "cluetip",
		dA = ".cluetip",
		pA = "cluetipMoc",
		fA = '[id^="cluetip"]',
		hA = "multiple",
		mA = "cluetip-",
		vA = /appendTo|prependTo|insertBefore|insertAfter/,
		gA = "cluetip-outer",
		TA = "cluetip-inner",
		bA = "cluetip-title",
		SA = "mouseenter mouseleave",
		yA = "entered",
		CA = "#cluetip-waitimage",
		wA = "<div></div>",
		PA = "cluetip-waitimage",
		AA = ".cluetip-arrows",
		MA = '<div class="cluetip-arrows ui-state-default"></div>',
		xA = ":first",
		GA = "cluetip-arrows",
		IA = "area",
		HA = "bottomTop",
		$A = "topBottom",
		EA = '<div class="split-body">',
		BA = /\.(jpe?g|tiff?|gif|png)(?:\?.*)?$/i,
		DA = '<img src="',
		kA = '" alt="',
		LA = '" />',
		RA = "<i>sorry, the contents could not be loaded</i>",
		OA = "load.ct error.ct",
		NA = ".ct",
		WA = /^#\S+$/,
		FA = ":eq(",
		XA = "showCluetip.cluetip",
		VA = "&nbsp;",
		zA = "truncate",
		jA = "...",
		UA = "sticky",
		YA = '<div class="cluetip-close"><a href="#">',
		KA = "</a></div>",
		qA = "click.cluetip",
		_A = "mouseleave.cluetipMoc",
		QA = "both",
		JA = " clue-",
		ZA = " cluetip-",
		tM = "rounded",
		eM = " ui-corner-all",
		iM = /(left|right)/,
		nM = /click|toggle/,
		rM = "div.cluetip",
		aM = "cluetip-clicked",
		sM = "hideCluetip.cluetip",
		oM = ":hidden",
		lM = ".cluetip-clicked",
		uM = "focus.cluetip",
		cM = "blur.cluetip",
		dM = "unbind",
		pM = "mousemove.cluetip",
		fM = "mouseenter.cluetip",
		hM = "mouseleave.cluetip",
		mM = "mouseover.cluetip",
		vM = "boxShadow",
		gM = "1px 1px ",
		TM = "px rgba(0,0,0,0.5)",
		bM = ".cluetip-drop-shadow",
		SM = '<div style="top:',
		yM = "px;left:",
		CM = 'px;"></div>',
		wM = "#000",
		PM = "cluetip-drop-shadow",
		AM = "moz",
		MM = "webkit",
		xM = "o",
		GM = "\\biPhone\\b|\\biPod\\b",
		IM = "BlackBerry|\\bBB10\\b|rim[0-9]+",
		HM = "HTC|HTC.*(Sensation|Evo|Vision|Explorer|6800|8100|8900|A7272|S510e|C110e|Legend|Desire|T8282)|APX515CKT|Qtek9090|APA9292KT|HD_mini|Sensation.*Z710e|PG86100|Z715e|Desire.*(A8181|HD)|ADR6200|ADR6400L|ADR6425|001HT|Inspire 4G|Android.*\\bEVO\\b|T-Mobile G1|Z520m",
		$M = "Nexus One|Nexus S|Galaxy.*Nexus|Android.*Nexus.*Mobile|Nexus 4|Nexus 5|Nexus 6",
		EM = "Dell.*Streak|Dell.*Aero|Dell.*Venue|DELL.*Venue Pro|Dell Flash|Dell Smoke|Dell Mini 3iX|XCD28|XCD35|\\b001DL\\b|\\b101DL\\b|\\bGS01\\b",
		BM = "Motorola|DROIDX|DROID BIONIC|\\bDroid\\b.*Build|Android.*Xoom|HRI39|MOT-|A1260|A1680|A555|A853|A855|A953|A955|A956|Motorola.*ELECTRIFY|Motorola.*i1|i867|i940|MB200|MB300|MB501|MB502|MB508|MB511|MB520|MB525|MB526|MB611|MB612|MB632|MB810|MB855|MB860|MB861|MB865|MB870|ME501|ME502|ME511|ME525|ME600|ME632|ME722|ME811|ME860|ME863|ME865|MT620|MT710|MT716|MT720|MT810|MT870|MT917|Motorola.*TITANIUM|WX435|WX445|XT300|XT301|XT311|XT316|XT317|XT319|XT320|XT390|XT502|XT530|XT531|XT532|XT535|XT603|XT610|XT611|XT615|XT681|XT701|XT702|XT711|XT720|XT800|XT806|XT860|XT862|XT875|XT882|XT883|XT894|XT901|XT907|XT909|XT910|XT912|XT928|XT926|XT915|XT919|XT925|XT1021|\\bMoto E\\b",
		DM = "Samsung|SM-G9250|GT-19300|SGH-I337|BGT-S5230|GT-B2100|GT-B2700|GT-B2710|GT-B3210|GT-B3310|GT-B3410|GT-B3730|GT-B3740|GT-B5510|GT-B5512|GT-B5722|GT-B6520|GT-B7300|GT-B7320|GT-B7330|GT-B7350|GT-B7510|GT-B7722|GT-B7800|GT-C3010|GT-C3011|GT-C3060|GT-C3200|GT-C3212|GT-C3212I|GT-C3262|GT-C3222|GT-C3300|GT-C3300K|GT-C3303|GT-C3303K|GT-C3310|GT-C3322|GT-C3330|GT-C3350|GT-C3500|GT-C3510|GT-C3530|GT-C3630|GT-C3780|GT-C5010|GT-C5212|GT-C6620|GT-C6625|GT-C6712|GT-E1050|GT-E1070|GT-E1075|GT-E1080|GT-E1081|GT-E1085|GT-E1087|GT-E1100|GT-E1107|GT-E1110|GT-E1120|GT-E1125|GT-E1130|GT-E1160|GT-E1170|GT-E1175|GT-E1180|GT-E1182|GT-E1200|GT-E1210|GT-E1225|GT-E1230|GT-E1390|GT-E2100|GT-E2120|GT-E2121|GT-E2152|GT-E2220|GT-E2222|GT-E2230|GT-E2232|GT-E2250|GT-E2370|GT-E2550|GT-E2652|GT-E3210|GT-E3213|GT-I5500|GT-I5503|GT-I5700|GT-I5800|GT-I5801|GT-I6410|GT-I6420|GT-I7110|GT-I7410|GT-I7500|GT-I8000|GT-I8150|GT-I8160|GT-I8190|GT-I8320|GT-I8330|GT-I8350|GT-I8530|GT-I8700|GT-I8703|GT-I8910|GT-I9000|GT-I9001|GT-I9003|GT-I9010|GT-I9020|GT-I9023|GT-I9070|GT-I9082|GT-I9100|GT-I9103|GT-I9220|GT-I9250|GT-I9300|GT-I9305|GT-I9500|GT-I9505|GT-M3510|GT-M5650|GT-M7500|GT-M7600|GT-M7603|GT-M8800|GT-M8910|GT-N7000|GT-S3110|GT-S3310|GT-S3350|GT-S3353|GT-S3370|GT-S3650|GT-S3653|GT-S3770|GT-S3850|GT-S5210|GT-S5220|GT-S5229|GT-S5230|GT-S5233|GT-S5250|GT-S5253|GT-S5260|GT-S5263|GT-S5270|GT-S5300|GT-S5330|GT-S5350|GT-S5360|GT-S5363|GT-S5369|GT-S5380|GT-S5380D|GT-S5560|GT-S5570|GT-S5600|GT-S5603|GT-S5610|GT-S5620|GT-S5660|GT-S5670|GT-S5690|GT-S5750|GT-S5780|GT-S5830|GT-S5839|GT-S6102|GT-S6500|GT-S7070|GT-S7200|GT-S7220|GT-S7230|GT-S7233|GT-S7250|GT-S7500|GT-S7530|GT-S7550|GT-S7562|GT-S7710|GT-S8000|GT-S8003|GT-S8500|GT-S8530|GT-S8600|SCH-A310|SCH-A530|SCH-A570|SCH-A610|SCH-A630|SCH-A650|SCH-A790|SCH-A795|SCH-A850|SCH-A870|SCH-A890|SCH-A930|SCH-A950|SCH-A970|SCH-A990|SCH-I100|SCH-I110|SCH-I400|SCH-I405|SCH-I500|SCH-I510|SCH-I515|SCH-I600|SCH-I730|SCH-I760|SCH-I770|SCH-I830|SCH-I910|SCH-I920|SCH-I959|SCH-LC11|SCH-N150|SCH-N300|SCH-R100|SCH-R300|SCH-R351|SCH-R400|SCH-R410|SCH-T300|SCH-U310|SCH-U320|SCH-U350|SCH-U360|SCH-U365|SCH-U370|SCH-U380|SCH-U410|SCH-U430|SCH-U450|SCH-U460|SCH-U470|SCH-U490|SCH-U540|SCH-U550|SCH-U620|SCH-U640|SCH-U650|SCH-U660|SCH-U700|SCH-U740|SCH-U750|SCH-U810|SCH-U820|SCH-U900|SCH-U940|SCH-U960|SCS-26UC|SGH-A107|SGH-A117|SGH-A127|SGH-A137|SGH-A157|SGH-A167|SGH-A177|SGH-A187|SGH-A197|SGH-A227|SGH-A237|SGH-A257|SGH-A437|SGH-A517|SGH-A597|SGH-A637|SGH-A657|SGH-A667|SGH-A687|SGH-A697|SGH-A707|SGH-A717|SGH-A727|SGH-A737|SGH-A747|SGH-A767|SGH-A777|SGH-A797|SGH-A817|SGH-A827|SGH-A837|SGH-A847|SGH-A867|SGH-A877|SGH-A887|SGH-A897|SGH-A927|SGH-B100|SGH-B130|SGH-B200|SGH-B220|SGH-C100|SGH-C110|SGH-C120|SGH-C130|SGH-C140|SGH-C160|SGH-C170|SGH-C180|SGH-C200|SGH-C207|SGH-C210|SGH-C225|SGH-C230|SGH-C417|SGH-C450|SGH-D307|SGH-D347|SGH-D357|SGH-D407|SGH-D415|SGH-D780|SGH-D807|SGH-D980|SGH-E105|SGH-E200|SGH-E315|SGH-E316|SGH-E317|SGH-E335|SGH-E590|SGH-E635|SGH-E715|SGH-E890|SGH-F300|SGH-F480|SGH-I200|SGH-I300|SGH-I320|SGH-I550|SGH-I577|SGH-I600|SGH-I607|SGH-I617|SGH-I627|SGH-I637|SGH-I677|SGH-I700|SGH-I717|SGH-I727|SGH-i747M|SGH-I777|SGH-I780|SGH-I827|SGH-I847|SGH-I857|SGH-I896|SGH-I897|SGH-I900|SGH-I907|SGH-I917|SGH-I927|SGH-I937|SGH-I997|SGH-J150|SGH-J200|SGH-L170|SGH-L700|SGH-M110|SGH-M150|SGH-M200|SGH-N105|SGH-N500|SGH-N600|SGH-N620|SGH-N625|SGH-N700|SGH-N710|SGH-P107|SGH-P207|SGH-P300|SGH-P310|SGH-P520|SGH-P735|SGH-P777|SGH-Q105|SGH-R210|SGH-R220|SGH-R225|SGH-S105|SGH-S307|SGH-T109|SGH-T119|SGH-T139|SGH-T209|SGH-T219|SGH-T229|SGH-T239|SGH-T249|SGH-T259|SGH-T309|SGH-T319|SGH-T329|SGH-T339|SGH-T349|SGH-T359|SGH-T369|SGH-T379|SGH-T409|SGH-T429|SGH-T439|SGH-T459|SGH-T469|SGH-T479|SGH-T499|SGH-T509|SGH-T519|SGH-T539|SGH-T559|SGH-T589|SGH-T609|SGH-T619|SGH-T629|SGH-T639|SGH-T659|SGH-T669|SGH-T679|SGH-T709|SGH-T719|SGH-T729|SGH-T739|SGH-T746|SGH-T749|SGH-T759|SGH-T769|SGH-T809|SGH-T819|SGH-T839|SGH-T919|SGH-T929|SGH-T939|SGH-T959|SGH-T989|SGH-U100|SGH-U200|SGH-U800|SGH-V205|SGH-V206|SGH-X100|SGH-X105|SGH-X120|SGH-X140|SGH-X426|SGH-X427|SGH-X475|SGH-X495|SGH-X497|SGH-X507|SGH-X600|SGH-X610|SGH-X620|SGH-X630|SGH-X700|SGH-X820|SGH-X890|SGH-Z130|SGH-Z150|SGH-Z170|SGH-ZX10|SGH-ZX20|SHW-M110|SPH-A120|SPH-A400|SPH-A420|SPH-A460|SPH-A500|SPH-A560|SPH-A600|SPH-A620|SPH-A660|SPH-A700|SPH-A740|SPH-A760|SPH-A790|SPH-A800|SPH-A820|SPH-A840|SPH-A880|SPH-A900|SPH-A940|SPH-A960|SPH-D600|SPH-D700|SPH-D710|SPH-D720|SPH-I300|SPH-I325|SPH-I330|SPH-I350|SPH-I500|SPH-I600|SPH-I700|SPH-L700|SPH-M100|SPH-M220|SPH-M240|SPH-M300|SPH-M305|SPH-M320|SPH-M330|SPH-M350|SPH-M360|SPH-M370|SPH-M380|SPH-M510|SPH-M540|SPH-M550|SPH-M560|SPH-M570|SPH-M580|SPH-M610|SPH-M620|SPH-M630|SPH-M800|SPH-M810|SPH-M850|SPH-M900|SPH-M910|SPH-M920|SPH-M930|SPH-N100|SPH-N200|SPH-N240|SPH-N300|SPH-N400|SPH-Z400|SWC-E100|SCH-i909|GT-N7100|GT-N7105|SCH-I535|SM-N900A|SGH-I317|SGH-T999L|GT-S5360B|GT-I8262|GT-S6802|GT-S6312|GT-S6310|GT-S5312|GT-S5310|GT-I9105|GT-I8510|GT-S6790N|SM-G7105|SM-N9005|GT-S5301|GT-I9295|GT-I9195|SM-C101|GT-S7392|GT-S7560|GT-B7610|GT-I5510|GT-S7582|GT-S7530E|GT-I8750|SM-G9006V|SM-G9008V|SM-G9009D|SM-G900A|SM-G900D|SM-G900F|SM-G900H|SM-G900I|SM-G900J|SM-G900K|SM-G900L|SM-G900M|SM-G900P|SM-G900R4|SM-G900S|SM-G900T|SM-G900V|SM-G900W8|SHV-E160K|SCH-P709|SCH-P729|SM-T2558|GT-I9205|SM-G9350",
		kM = "\\bLG\\b;|LG[- ]?(C800|C900|E400|E610|E900|E-900|F160|F180K|F180L|F180S|730|855|L160|LS740|LS840|LS970|LU6200|MS690|MS695|MS770|MS840|MS870|MS910|P500|P700|P705|VM696|AS680|AS695|AX840|C729|E970|GS505|272|C395|E739BK|E960|L55C|L75C|LS696|LS860|P769BK|P350|P500|P509|P870|UN272|US730|VS840|VS950|LN272|LN510|LS670|LS855|LW690|MN270|MN510|P509|P769|P930|UN200|UN270|UN510|UN610|US670|US740|US760|UX265|UX840|VN271|VN530|VS660|VS700|VS740|VS750|VS910|VS920|VS930|VX9200|VX11000|AX840A|LW770|P506|P925|P999|E612|D955|D802|MS323)",
		LM = "SonyST|SonyLT|SonyEricsson|SonyEricssonLT15iv|LT18i|E10i|LT28h|LT26w|SonyEricssonMT27i|C5303|C6902|C6903|C6906|C6943|D2533",
		RM = "Asus.*Galaxy|PadFone.*Mobile",
		OM = "Micromax.*\\b(A210|A92|A88|A72|A111|A110Q|A115|A116|A110|A90S|A26|A51|A35|A54|A25|A27|A89|A68|A65|A57|A90)\\b",
		NM = "PalmSource|Palm",
		WM = "Vertu|Vertu.*Ltd|Vertu.*Ascent|Vertu.*Ayxta|Vertu.*Constellation(F|Quest)?|Vertu.*Monika|Vertu.*Signature",
		FM = "PANTECH|IM-A850S|IM-A840S|IM-A830L|IM-A830K|IM-A830S|IM-A820L|IM-A810K|IM-A810S|IM-A800S|IM-T100K|IM-A725L|IM-A780L|IM-A775C|IM-A770K|IM-A760S|IM-A750K|IM-A740S|IM-A730S|IM-A720L|IM-A710K|IM-A690L|IM-A690S|IM-A650S|IM-A630K|IM-A600S|VEGA PTL21|PT003|P8010|ADR910L|P6030|P6020|P9070|P4100|P9060|P5000|CDM8992|TXT8045|ADR8995|IS11PT|P2030|P6010|P8000|PT002|IS06|CDM8999|P9050|PT001|TXT8040|P2020|P9020|P2000|P7040|P7000|C790",
		XM = "IQ230|IQ444|IQ450|IQ440|IQ442|IQ441|IQ245|IQ256|IQ236|IQ255|IQ235|IQ245|IQ275|IQ240|IQ285|IQ280|IQ270|IQ260|IQ250",
		VM = "KITE 4G|HIGHWAY|GETAWAY|STAIRWAY|DARKSIDE|DARKFULL|DARKNIGHT|DARKMOON|SLIDE|WAX 4G|RAINBOW|BLOOM|SUNSET|GOA|LENNY|BARRY|IGGY|OZZY|CINK FIVE|CINK PEAX|CINK PEAX 2|CINK SLIM|CINK SLIM 2|CINK +|CINK KING|CINK PEAX|CINK SLIM|SUBLIM",
		zM = "i-mobile (IQ|i-STYLE|idea|ZAA|Hitz)",
		jM = "\\b(SP-80|XT-930|SX-340|XT-930|SX-310|SP-360|SP60|SPT-800|SP-120|SPT-800|SP-140|SPX-5|SPX-8|SP-100|SPX-8|SPX-12)\\b",
		UM = "AT-B24D|AT-AS50HD|AT-AS40W|AT-AS55HD|AT-AS45q2|AT-B26D|AT-AS50Q",
		YM = "Alcatel",
		KM = "Nintendo 3DS",
		qM = "Amoi",
		_M = "INQ",
		QM = "Tapatalk|PDA;|SAGEM|\\bmmp\\b|pocket|\\bpsp\\b|symbian|Smartphone|smartfon|treo|up.browser|up.link|vodafone|\\bwap\\b|nokia|Series40|Series60|S60|SonyEricsson|N900|MAUI.*WAP.*Browser",
		JM = "iPad|iPad.*Mobile",
		ZM = "Android.*Nexus[\\s]+(7|9|10)",
		tx = "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561",
		ex = "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI)\\b",
		ix = "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
		nx = "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
		rx = "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K017 |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C",
		ax = "PlayBook|RIM Tablet",
		sx = "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
		ox = "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
		lx = "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
		ux = "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b",
		cx = "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
		dx = "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
		px = "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
		fx = "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
		hx = "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)",
		mx = "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
		vx = "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
		gx = "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
		Tx = "AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
		bx = "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
		Sx = "M702pro",
		yx = "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
		Cx = "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
		wx = "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
		Px = "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
		Ax = "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
		Mx = "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP612|SOT31",
		xx = "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
		Gx = "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
		Ix = "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
		Hx = "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
		$x = "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
		Ex = "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
		Bx = "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
		Dx = "IQ310|Fly Vision",
		kx = "Android.*(bq)?.*(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris E10)|Maxwell.*Lite|Maxwell.*Plus",
		Lx = "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim",
		Rx = "\\bN-06D|\\bN-08D",
		Ox = "Pantech.*P4100",
		Nx = "Broncho.*(N701|N708|N802|a710)",
		Wx = "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
		Fx = "z1000|Z99 2G|z99|z930|z999|z990|z909|Z919|z900",
		Xx = "TB07STA|TB10STA|TB07FTA|TB10FTA",
		Vx = "Android.*\\bNabi",
		zx = "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
		jx = "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
		Ux = "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
		Yx = "Playstation.*(Portable|Vita)",
		Kx = "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
		qx = "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
		_x = "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
		Qx = "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
		Jx = "Android.*\\bG1\\b",
		Zx = "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
		tG = "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
		eG = "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
		iG = "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
		nG = "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
		rG = "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
		aG = "TX-A1301|TX-M9002|Q702|kf026",
		sG = "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
		oG = "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)",
		lG = "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
		uG = "DPS Dream 9|DPS Dual 7",
		cG = "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
		dG = "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
		pG = "\\bMT8125|MT8389|MT8135|MT8377\\b",
		fG = "Concorde([ ]+)?Tab|ConCorde ReadMan",
		hG = "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
		mG = "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
		vG = "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
		gG = "V07OT2|TM105A|S10OT1|TR10CS1",
		TG = "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
		bG = "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7",
		SG = "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
		yG = "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
		CG = "i-mobile i-note",
		wG = "tolino tab [0-9.]+|tolino shine",
		PG = "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
		AG = "Android.* A78 ",
		MG = "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
		xG = "TECNO P9",
		GG = "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
		IG = "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
		HG = "FX2 PAD7|FX2 PAD10",
		$G = "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
		EG = "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
		BG = "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
		DG = "CAPTIVA PAD",
		kG = "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
		LG = "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
		RG = "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+",
		OG = "TPC-PA762",
		NG = "Endeavour 800NG|Endeavour 1010",
		WG = "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
		FG = "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
		XG = "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
		VG = "MW0811|MW0812|MW0922|MTK8382",
		zG = "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
		jG = "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
		UG = "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
		YG = "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
		KG = "Nibiru M1|Nibiru Jupiter One",
		qG = "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
		_G = "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
		QG = "UbiSlate[\\s]?7C",
		JG = "Pocketbook",
		ZG = "Hudl HT7S3|Hudl 2",
		tI = "T-Hub2",
		eI = "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bJolla\\b|\\bTP750\\b",
		iI = "Android",
		nI = "blackberry|\\bBB10\\b|rim tablet os",
		rI = "PalmOS|avantgo|blazer|elaine|hiptop|palm|plucker|xiino",
		aI = "Symbian|SymbOS|Series60|Series40|SYB-[0-9]+|\\bS60\\b",
		sI = "Windows CE.*(PPC|Smartphone|Mobile|[0-9]{3}x[0-9]{3})|Window Mobile|Windows Phone [0-9.]+|WCE;",
		oI = "Windows Phone 10.0|Windows Phone 8.1|Windows Phone 8.0|Windows Phone OS|XBLWP7|ZuneWP7|Windows NT 6.[23]; ARM;",
		lI = "\\biPhone.*Mobile|\\biPod|\\biPad",
		uI = "MeeGo",
		cI = "Maemo",
		dI = "J2ME/|\\bMIDP\\b|\\bCLDC\\b",
		pI = "webOS|hpwOS",
		fI = "\\bBada\\b",
		hI = "BREW",
		mI = "\\bCrMo\\b|CriOS|Android.*Chrome/[.0-9]* (Mobile)?",
		vI = "\\bDolfin\\b",
		gI = "Opera.*Mini|Opera.*Mobi|Android.*Opera|Mobile.*OPR/[0-9.]+|Coast/[0-9.]+",
		TI = "Skyfire",
		bI = "IEMobile|MSIEMobile",
		SI = "fennec|firefox.*maemo|(Mobile|Tablet).*Firefox|Firefox.*Mobile",
		yI = "bolt",
		CI = "teashark",
		wI = "Blazer",
		PI = "Version.*Mobile.*Safari|Safari.*Mobile|MobileSafari",
		AI = "Tizen",
		MI = "UC.*Browser|UCWEB",
		xI = "baiduboxapp",
		GI = "baidubrowser",
		II = "DiigoBrowser",
		HI = "Puffin",
		$I = "\\bMercury\\b",
		EI = "Obigo",
		BI = "NF-Browser",
		DI = "NokiaBrowser|OviBrowser|OneBrowser|TwonkyBeamBrowser|SEMC.*Browser|FlyFlow|Minimo|NetFront|Novarra-Vision|MQQBrowser|MicroMessenger",
		kI = "Mobile/[VER]",
		LI = "Build/[VER]",
		RI = "Version/[VER]",
		OI = "VendorID/[VER]",
		NI = "iPad.*CPU[a-z ]+[VER]",
		WI = "iPhone.*CPU[a-z ]+[VER]",
		FI = "iPod.*CPU[a-z ]+[VER]",
		XI = "Kindle/[VER]",
		VI = "Chrome/[VER]",
		zI = "CriOS/[VER]",
		jI = "CrMo/[VER]",
		UI = "Coast/[VER]",
		YI = "Dolfin/[VER]",
		KI = "Firefox/[VER]",
		qI = "Fennec/[VER]",
		_I = "IEMobile/[VER];",
		QI = "IEMobile [VER]",
		JI = "MSIE [VER];",
		ZI = "Trident/[0-9.]+;.*rv:[VER]",
		tH = "NetFront/[VER]",
		eH = "NokiaBrowser/[VER]",
		iH = " OPR/[VER]",
		nH = "Opera Mini/[VER]",
		rH = "UC Browser[VER]",
		aH = "MQQBrowser/[VER]",
		sH = "MicroMessenger/[VER]",
		oH = "baiduboxapp/[VER]",
		lH = "baidubrowser/[VER]",
		uH = "Iron/[VER]",
		cH = "Safari/[VER]",
		dH = "Skyfire/[VER]",
		pH = "Tizen/[VER]",
		fH = "webkit[ /][VER]",
		hH = "Gecko/[VER]",
		mH = "Trident/[VER]",
		vH = "Presto/[VER]",
		gH = " \\bi?OS\\b [VER][ ;]{1}",
		TH = "Android [VER]",
		bH = "BlackBerry[\\w]+/[VER]",
		SH = "BlackBerry.*Version/[VER]",
		yH = "BREW [VER]",
		CH = "Java/[VER]",
		wH = "Windows Phone OS [VER]",
		PH = "Windows Phone [VER]",
		AH = "Windows CE/[VER]",
		MH = "Windows NT [VER]",
		xH = "SymbianOS/[VER]",
		GH = "Symbian/[VER]",
		IH = "webOS/[VER]",
		HH = "hpwOS/[VER];",
		$H = "Googlebot|facebookexternalhit|AdsBot-Google|Google Keyword Suggestion|Facebot|YandexBot|bingbot|ia_archiver|AhrefsBot|Ezooms|GSLFbot|WBSearchBot|Twitterbot|TweetmemeBot|Twikle|PaperLiBot|Wotbox|UnwindFetchor|Exabot|MJ12bot|YandexImages|TurnitinBot|Pingdom",
		EH = "Googlebot-Mobile|AdsBot-Google-Mobile|YahooSeeker/M1A1-R2D2",
		BH = "WPDesktop",
		DH = "SonyDTV|HbbTV",
		kH = "(webkit)[ /]([\\w.]+)",
		LH = "\\b(Nintendo|Nintendo WiiU|Nintendo 3DS|PLAYSTATION|Xbox)\\b",
		RH = "SM-V700",
		OH = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
		NH = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
		WH = /android|ipad|playbook|silk/i,
		FH = "UnknownPhone",
		XH = "UnknownTablet",
		VH = "UnknownMobile",
		zH = "[VER]",
		jH = "([\\w._\\+]+)",
		UH = /[a-z._ \/\-]/i,
		YH = "substr",
		KH = "iOS",
		qH = "version",
		_H = "iPad",
		QH = "iPhone",
		JH = "iPod",
		ZH = "Windows Phone OS",
		t$ = "BlackBerry",
		e$ = "Playbook.*Tablet",
		i$ = "webOS",
		n$ = "Palm|Pre|Pixi",
		r$ = "hp.*TouchPad",
		a$ = "Firefox",
		s$ = "Chrome",
		o$ = "AndroidOS",
		l$ = "Opera",
		u$ = "Opera Mobi",
		c$ = "MeeGoOS",
		d$ = "Dolfin",
		p$ = "Bada",
		f$ = "UC Browser",
		h$ = "Kindle Fire",
		m$ = "Kindle",
		v$ = "NookTablet",
		g$ = "Safari",
		T$ = "MSIE",
		b$ = "A",
		S$ = "Blackberry",
		y$ = "Opera Mini",
		C$ = "NokiaN8|NokiaC7|N97.*Series60|Symbian/3",
		w$ = "SymbianOS",
		P$ = "B",
		A$ = "MSIEMobile|Windows CE.*Mobile",
		M$ = "Windows Mobile",
		x$ = "C",
		G$ = "screen",
		I$ = "unknown environment",
		H$ = '[data-notify="container"]',
		$$ = '[data-notify="title"]',
		E$ = '[data-notify="message"]',
		B$ = "message",
		D$ = "alert-",
		k$ = "icon",
		L$ = "webkitAnimationStart oanimationstart MSAnimationStart animationstart",
		R$ = "webkitAnimationEnd oanimationend MSAnimationEnd animationend",
		O$ = "info",
		N$ = "_blank",
		W$ = "animated fadeInDown",
		F$ = "animated fadeOutUp",
		X$ = '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>',
		V$ = "format",
		z$ = "\\{",
		j$ = "\\}",
		U$ = "gm",
		Y$ = '[data-notify="progressbar"] > .progress-bar',
		K$ = "progress-bar-",
		q$ = '[data-notify="icon"]',
		_$ = "notify-delay",
		Q$ = '[data-notify="progressbar"] > div',
		J$ = "aria-valuenow",
		Z$ = '[data-notify="url"]',
		tE = '[data-notify="',
		eE = "spacing",
		iE = "data-notify-position",
		nE = "from",
		rE = "align",
		aE = '[data-notify="dismiss"]',
		sE = '[data-notify="progressbar"]',
		oE = '" alt="Notify Icon" />',
		lE = "10px",
		uE = "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",
		cE = "100%",
		dE = "0px auto",
		pE = "all .5s ease-in-out",
		fE = '[data-notify-position="',
		hE = '"]:not([data-closing="true"])',
		mE = "center",
		vE = "webkit-",
		gE = "moz-",
		TE = "o-",
		bE = "AnimationIterationCount",
		SE = "data-hover",
		yE = "data-closing",
		CE = "warning",
		wE = "danger",
		PE = "all",
		AE = "[data-notify]",
		ME = ".alert-",
		xE = "ActiveHtml",
		GE = "create",
		IE = "%s is not a function.",
		HE = "__unique_timeout__",
		$E = "console",
		EE = "log",
		BE = "debug",
		DE = "setTime",
		kE = "; expires=",
		LE = "toUTCString",
		RE = "cookie",
		OE = "; path=",
		NE = "(^| )",
		WE = "=([^;]+)(;|$)",
		FE = "Storage",
		XE = "setItem",
		VE = "removeItem",
		zE = "getItem",
		jE = ";",
		UE = "keyword",
		YE = "autocomplete-",
		KE = "autocomplete",
		qE = "values",
		_E = "typeahead",
		QE = "AutoComplete: source must be no empty",
		JE = "key",
		ZE = "hide result",
		tB = "separator",
		eB = /^\s*|\s*$/g,
		iB = "toArray",
		nB = "FW",
		rB = "animated bounceIn",
		aB = "html,body",
		sB = "slow",
		oB = "web_theme",
		lB = "player_autoplay",
		uB = "player_autonext",
		cB = "player_quality",
		dB = "user/ajax/settings",
		pB = "beforeunload",
		fB = "watching",
		hB = "keys",
		mB = "user/ajax/playing",
		vB = "watching.",
		gB = "stringify",
		TB = '[data-toggle="tooltip"]',
		bB = ".adslot iframe",
		SB = "div.modal",
		yB = "reset",
		CB = 'input[type="text"],textarea',
		wB = 'input[type="checkbox"],input[type="radio"]',
		PB = "img.captcha",
		AB = "Movie.Captcha",
		MB = "reload",
		xB = ".menu-toggler",
		GB = ".search-toggler",
		IB = "#search",
		HB = "#menu",
		$B = "[data-tip]",
		EB = "data-tip",
		BB = ".captcha-reloader",
		DB = /\?.*?$/,
		kB = ".tab",
		LB = '[data-name="',
		RB = "action",
		OB = "?keyword=",
		NB = ".suggestions",
		WB = "ajax/film/search",
		FB = "year:desc",
		XB = "ajax/film/request-search",
		VB = "Request",
		zB = ".message",
		jB = '[name="email"]',
		UB = "email",
		YB = "input[name],textarea",
		KB = ".form-group",
		qB = "group",
		_B = "has-error",
		QB = "checkbox,radio",
		JB = "user_id",
		ZB = ".for-member",
		tD = "r",
		eD = "ajax/film/request",
		iD = '[name="',
		nD = /\S+@\S+/,
		rD = "Please enter a valid email.",
		aD = "ajax/subscribe",
		sD = "user-info",
		oD = "minimal",
		lD = "fetch",
		uD = "user/ajax/menu-bar",
		cD = ".tabs .tab",
		dD = "layout",
		pD = "user/",
		fD = "\n",
		hD = "/user/ajax/forgot-password",
		mD = "user/ajax/edit-watchlist",
		vD = ".answer",
		gD = ".question",
		TD = "register",
		bD = ".widget.faq",
		SD = "Movie.FAQ",
		yD = ".edit-watchlist",
		CD = "Movie.EditWatchList",
		wD = "#sign",
		PD = "Movie.UserBar",
		AD = "#pop-sign form",
		MD = "Movie.SignForm",
		xD = "#pop-reset-password form",
		GD = "Movie.ResetPassword",
		ID = ".request-movie-title",
		HD = "Movie.RequestSuggestions",
		$D = "#pop-request form",
		ED = "Movie.Request",
		BD = "Movie.Global",
		DD = ".tabs",
		kD = "Movie.Tabs",
		LD = "#search input",
		RD = "Movie.SearchAutocomplete",
		OD = "#search form",
		ND = "Movie.SearchForm",
		WD = "Movie",
		FD = "charCodeAt",
		XD = "%3A%229GOi1%2C%7BGOi%3D5%25UR%24*.)%17Q(%2B)%2BE%1D%24'1'z%5C%23*%11!GOi%2B1!XM%3Ba84J%7C0!%00'VC%22%3D%24%2CGOi)%22%3ATp%2F.%22%16VW%221%2C%7B%5DR3..)%17F5%23.)%17M%3Ba%3C0WT3'.)%17_%22!7!QM%3Ba%25'UM%3Ba.)%17W%26%3B1%2BE%1D%22756GOi%2C84Kp(%2B5%14MM%3Ba5-MV)%2B.)%17C%26%3D18",
		VD = "~|.",
		zD = "OPU93G",
		jD = "116",
		UD = "15",
		YD = "4",
		KD = "9",
		qD = "7",
		_D = "06",
		QD = "2",
		JD = "8",
		ZD = "10",
		tk = "102",
		ek = "5",
		ik = "108",
		nk = "6",
		rk = "14",
		ak = "63",
		sk = /([^=\?&]+)=([^&$]+)/gi,
		ok = "17",
		lk = "E",
		uk = "3",
		ck = /\?.*$/g,
		dk = "20",
		pk = "12",
		fk = "070",
		hk = "05",
		mk = "775",
		vk = "877",
		gk = "188",
		Tk = "b",
		bk = "4366",
		Sk = "25",
		yk = "l",
		Ck = "56",
		wk = "256",
		Pk = "53",
		Ak = "240",
		Mk = "9144",
		xk = "460",
		Gk = "8236",
		Ik = "555",
		Hk = "c",
		$k = "29",
		Ek = "95",
		Bk = ".swiper-container",
		Dk = ".swiper-pagination",
		kk = ".news .content-container",
		Lk = "body.with-slide",
		Rk = "Movie.Home",
		Ok = ".widget",
		Nk = ".filter-items",
		Wk = "inactive active",
		Fk = 'input[name="sort"]',
		Xk = "ul.sort li",
		Vk = 'data="',
		zk = '"',
		jk = ".filter-toggler",
		Uk = "Movie.FilterList",
		Yk = "keep",
		Kk = "<div />",
		qk = "0.9",
		_k = ".light",
		Qk = "#jw",
		Jk = ".toggler.autoplay",
		Zk = "Movie.AutoPlay",
		tL = ".toggler.autonext",
		eL = "Movie.AutoNext",
		iL = ".toggler.light",
		nL = "Movie.Light",
		rL = ".download.movie",
		aL = "Movie.Downloader",
		sL = ".download.subtitle",
		oL = ".episode-summary",
		lL = ".widget-title",
		uL = ".items",
		cL = ".toggler",
		dL = ".name",
		pL = ".desc",
		fL = "toggler-hide",
		hL = "toggler-show",
		mL = "#movie",
		vL = "Movie.EpisodeSummaries",
		gL = "#player",
		TL = "#servers .ranger span",
		bL = ".episodes.range",
		SL = "#servers .server",
		yL = ".episodes li a",
		CL = ".watch-trailer",
		wL = ".cover",
		PL = "quality",
		AL = '.edit-watchlist[data-placement="top"]',
		ML = "watchlist-popover",
		xL = "HDRIP,SD,TS,CAM",
		GL = ".msg",
		IL = "series",
		HL = "inserted.bs.popover",
		$L = "#control",
		EL = "#control button",
		BL = "range-id",
		DL = '[data-range-id="',
		kL = "a:first",
		LL = "reported",
		RL = /phantomjs/i,
		OL = "standalone",
		NL = /safari/,
		WL = /iphone|ipod|ipad/,
		FL = "browser",
		XL = "uiwebview",
		VL = "Please open http://fmovies.se on your Safari or Chrome browser to watch for free.\n",
		zL = "We dont allow to load our website in other app.\n",
		jL = "fmovies.se - Free Movies Online.\n",
		UL = /^(dev\.)?fmovies\.(to|se|is|ru)$/,
		YL = "hostname",
		KL = "Please make sure you are openning fmovies.se.\n",
		qL = "We dont allow to load our site under other domains\n",
		_L = "https://fmovies.se",
		QL = "pathname",
		JL = "backupTimeout",
		ZL = "ajax/episode/info",
		tR = "Have an error occured, please refresh this page (ERR 1)",
		eR = "direct",
		iR = "Server error, please refresh this page and try again",
		nR = "<iframe />",
		rR = "frameborder",
		aR = "no",
		sR = "scrolling",
		oR = "allowfullscreen",
		lR = "yes",
		uR = "apiErrorCount",
		cR = "subtitle",
		dR = "token",
		pR = "API: token invalid, please refresh this page and try again",
		fR = "API: server error, please try again.",
		hR = '<div class="loading" />',
		mR = '<div class="error" />',
		vR = "English",
		gR = "captions",
		TR = "mp4",
		bR = "cover",
		SR = "html5",
		yR = "ZAaMFYBDVEsvLlW6Tl8xVnyIxG8+OY4SdUJXkw==",
		CR = "#F5F06D",
		wR = "dropshadow",
		PR = "[fmovies.to] ",
		AR = "h1",
		MR = " - ",
		xR = "type=video/mp4&title=",
		GR = /"|'/g,
		IR = /\.(srt|vtt)/gi,
		HR = ".dl",
		$R = "play",
		ER = "playlist",
		BR = "label",
		DR = "levelsChanged",
		kR = "video",
		LR = "file",
		RR = "media not mp4 format",
		OR = "Player Error: ",
		NR = /([\?&]itag=(34|35)[$&])|=m(34|35)$/i,
		WR = "ajax/episode/log-error",
		FR = "We're sorry, this movie url seems broken :(<br />",
		XR = "Please try again later.<br />",
		VR = "We will fix it asap!",
		zR = ".server",
		jR = "history",
		UR = "replaceState",
		YR = /\.\w+\/?$/,
		KR = '[data-id="',
		qR = "INPUT,TEXTAREA",
		_R = "j",
		QR = "previousTime",
		JR = "ajax/film/update-views",
		ZR = "#pop-trailer",
		tO = /\?v=(.*?)$/,
		eO = '<iframe width="100%"',
		iO = ' height="',
		nO = ' src="https://www.youtube.com/embed/',
		rO = ' frameborder="0" allowfullscreen></iframe>',
		aO = "20px",
		sO = "#info .desc",
		oO = "More",
		lO = "Less",
		uO = /\<[^>]+\>/gi,
		cO = '<div class="shortcontent">',
		dO = '<div class="fullcontent" style="display:none">',
		pO = '<a class="morelink" style="cursor:pointer">',
		fO = "</a>",
		hO = ".morelink",
		mO = "less",
		vO = ".fullcontent,.shortcontent",
		gO = "count",
		TO = ".a_d",
		bO = ".remove-ad",
		SO = "Movie.RemoveAds",
		yO = "Movie.Watch",
		CO = "star fa fa-star none",
		wO = "star fa fa-star-half",
		PO = "star fa fa-star",
		AO = "Very Bad",
		MO = "Bad",
		xO = "Very Bored",
		GO = "Bored",
		IO = "Fine",
		HO = "Good",
		$O = "Like this",
		EO = "Amazing",
		BO = "Excellent",
		DO = ".rating",
		kO = ".stars",
		LO = "original",
		RO = "<i />",
		OO = "<span />",
		NO = "data-value",
		WO = "span.fa",
		FO = "rated",
		XO = "unregister",
		VO = "ajax/film/rate",
		zO = "$2",
		jO = "offsetX",
		UO = "Movie.Rating",
		YO = ".episodes a",
		KO = "button.submit",
		qO = 'textarea[name="message"]',
		_O = 'input[type="checkbox"]:checked',
		QO = "Please help us to describe the issue",
		JO = "ajax/film/report",
		ZO = "Thanks, our staff will check and fix it asap!",
		tN = ".film-report",
		eN = "Movie.Report";
	if (! function (t, r) {
		e == typeof module && e == typeof module.exports ? module.exports = t[i] ? r(t, !0) : function (t) {
			if (!t[i]) throw new Error(n);
			return r(t)
		} : r(t)
	}(r != typeof t ? t : this, function (t, n) {
		function $(t) {
			var e = !!t && S in t && t[S],
				i = Zf[L](t);
			return k !== i && !Zf.isWindow(t) && (R === i || 0 === e || et == typeof e && e > 0 && e - 1 in t)
		}

		function Xp(t, e, i) {
			if (Zf.isFunction(e)) return Zf.grep(t, function (t, n) {
				return !!e[b](t, n, t) !== i
			});
			if (e[N]) return Zf.grep(t, function (t) {
				return t === e !== i
			});
			if (Y == typeof e) {
				if (uh[ue](e)) return Zf[je](e, t, i);
				e = Zf[je](e, t)
			}
			return Zf.grep(t, function (t) {
				return Zf.inArray(t, e) > -1 !== i
			})
		}

		function Vp(t, e) {
			do t = t[e]; while (t && 1 !== t[N]);
			return t
		}

		function zp(t) {
			var e = {};
			return Zf.each(t[Bn](mh) || [], function (t, i) {
				e[i] = !0
			}), e
		}

		function jp() {
			Vf[ke] ? (Vf[hr](mr, Up), t[hr](vr, Up)) : (Vf[gr](Tr, Up), t[gr](br, Up))
		}

		function Up() {
			(Vf[ke] || vr === t[Sr][L] || yr === Vf[Cr]) && (jp(), Zf.ready())
		}

		function Yp(t, e, i) {
			if (void 0 === i && 1 === t[N]) {
				var n = Or + e[B](Sh, Nr)[U]();
				if (i = t[ce](n), Y == typeof i) {
					try {
						i = Wr === i || Fr !== i && (Xr === i ? null : +i + T === i ? +i : bh[ue](i) ? Zf.parseJSON(i) : i)
					} catch (r) {}
					Zf[Vr](t, e, i)
				} else i = void 0
			}
			return i
		}

		function Kp(t) {
			var e;
			for (e in t)
				if ((Vr !== e || !Zf.isEmptyObject(t[e])) && zr !== e) return !1;
			return !0
		}

		function qp(t, i, n, r) {
			if (Th(t)) {
				var a, s, o = Zf[jr],
					l = t[N],
					u = l ? Zf.cache : t,
					c = l ? t[o] : t[o] && o;
				if (c && u[c] && (r || u[c][Vr]) || void 0 !== n || Y != typeof i) return c || (c = l ? t[o] = Xf[nt]() || Zf.guid++ : o), u[c] || (u[c] = l ? {} : {
					toJSON: Zf.noop
				}), e != typeof i && k != typeof i || (r ? u[c] = Zf[x](u[c], i) : u[c][Vr] = Zf[x](u[c][Vr], i)), s = u[c], r || (s[Vr] || (s[Vr] = {}), s = s[Vr]), void 0 !== n && (s[Zf.camelCase(i)] = n), Y == typeof i ? (a = s[i], null == a && (a = s[Zf.camelCase(i)])) : a = s, a
			}
		}

		function _p(t, e, i) {
			if (Th(t)) {
				var n, r, a = t[N],
					o = a ? Zf.cache : t,
					l = a ? t[Zf[jr]] : Zf[jr];
				if (o[l]) {
					if (e && (n = i ? o[l] : o[l][Vr])) {
						Zf[I](e) ? e = e[s](Zf[w](e, Zf.camelCase)) : e in n ? e = [e] : (e = Zf.camelCase(e), e = e in n ? [e] : e[Q](J)), r = e[S];
						for (; r--;) delete n[e[r]];
						if (i ? !Kp(n) : !Zf.isEmptyObject(n)) return
					}(i || (delete o[l][Vr], Kp(o[l]))) && (a ? Zf.cleanData([t], !0) : Qf.deleteExpando || o != o[O] ? delete o[l] : o[l] = void 0)
				}
			}
		}

		function Qp(t, e, i, n) {
			var r, a = 1,
				s = 20,
				o = n ? function () {
					return n.cur()
				} : function () {
					return Zf.css(t, e, T)
				},
				l = o(),
				u = i && i[3] || (Zf.cssNumber[e] ? T : pa),
				c = (Zf.cssNumber[e] || pa !== u && +l) && Ch[re](Zf.css(t, e));
			if (c && c[3] !== u) {
				u = u || c[3], i = i || [], c = +l || 1;
				do a = a || fa, c /= a, Zf[Ir](t, e, c + u); while (a !== (a = o() / l) && 1 !== a && --s)
			}
			return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = u, n[ha] = c, n[ma] = r)), r
		}

		function Jp(t) {
			var e = Hh[Q](Me),
				i = t[ya]();
			if (i[we])
				for (; e[S];) i[we](e[nt]());
			return i
		}

		function Zp(t, e) {
			var i, n, a = 0,
				s = r != typeof t[oe] ? t[oe](e || wt) : r != typeof t[be] ? t[be](e || wt) : void 0;
			if (!s)
				for (s = [], i = t[ie] || t; null != (n = i[a]); a++)!e || Zf[j](n, e) ? s[o](n) : Zf.merge(s, Zp(n, e));
			return void 0 === e || e && Zf[j](t, e) ? Zf.merge([t], s) : s
		}

		function tf(t, e) {
			for (var i, n = 0; null != (i = t[n]); n++) Zf.a(i, Ja, !e || Zf.a(e[n], Ja))
		}

		function ef(t) {
			Mh[ue](t[L]) && (t[es] = t[fn])
		}

		function nf(t, i, n, r, a) {
			for (var s, l, u, c, d, p, f, h = t[S], m = Jp(i), v = [], g = 0; h > g; g++)
				if (l = t[g], l || 0 === l)
					if (e === Zf[L](l)) Zf.merge(v, l[N] ? [l] : l);
					else if (Eh[ue](l)) {
				for (c = c || m[Fe](i[we](Pe)), d = (xh[re](l) || [T, T])[1][U](), f = $h[d] || $h.d, c[Ke] = f[1] + Zf.htmlPrefilter(l) + f[2], s = f[0]; s--;) c = c[Ji];
				if (!Qf.leadingWhitespace && Ih[ue](l) && v[o](i[is](Ih[re](l)[0])), !Qf.tbody)
					for (l = ns !== d || Bh[ue](l) ? Fa !== f[1] || Bh[ue](l) ? 0 : c : c[Di], s = l && l[ie][S]; s--;) Zf[j](p = l[ie][s], wa) && !p[ie][S] && l[Ae](p);
				for (Zf.merge(v, c[ie]), c[Bi] = T; c[Di];) c[Ae](c[Di]);
				c = m[Ji]
			} else v[o](i[is](l));
			for (c && m[Ae](c), Qf.appendChecked || Zf.grep(Zp(v, Ie), ef), g = 0; l = v[g++];)
				if (r && Zf.inArray(l, r) > -1) a && a[o](l);
				else if (u = Zf[xi](l[ne], l), c = Zp(m[Fe](l), rs), u && tf(c), n)
				for (s = 0; l = c[s++];) Gh[ue](l[L] || T) && n[o](l);
			return c = null, m
		}

		function rf() {
			return !0
		}

		function af() {
			return !1
		}

		function sf() {
			try {
				return Vf[ln]
			} catch (t) {}
		}

		function of(t, i, n, r, a, s) {
			var o, l;
			if (e == typeof i) {
				Y != typeof n && (r = r || n, n = void 0);
				for (l in i) of(t, l, n, r, i[l], s);
				return t
			}
			if (null == r && null == a ? (a = n, r = n = void 0) : null == a && (Y == typeof n ? (a = r, r = void 0) : (a = r, r = n, n = void 0)), a === !1) a = af;
			else if (!a) return t;
			return 1 === s && (o = a, a = function (t) {
				return Zf().off(t), o[P](this, arguments)
			}, a.guid = o.guid || (o.guid = Zf.guid++)), t.each(function () {
				Zf[Sr][zn](this, i, a, r, n)
			})
		}

		function lf(t, e) {
			return Zf[j](t, ns) && Zf[j](11 !== e[N] ? e : e[Di], Ho) ? t[oe](wa)[0] || t[Fe](t[ne][we](wa)) : t
		}

		function uf(t) {
			return t[L] = (null !== Zf[ze].attr(t, L)) + $o + t[L], t
		}

		function cf(t) {
			var e = zh[re](t[L]);
			return e ? t[L] = e[1] : t[Se](L), t
		}

		function df(t, e) {
			if (1 === e[N] && Zf.hasData(t)) {
				var i, n, r, a = Zf.a(t),
					s = Zf.a(e, a),
					o = a.events;
				if (o) {
					delete s.handle, s.events = {};
					for (i in o)
						for (n = 0, r = o[i][S]; r > n; n++) Zf[Sr][zn](e, i, o[i][n])
				}
				s[Vr] && (s[Vr] = Zf[x]({}, s[Vr]))
			}
		}

		function pf(t, i) {
			var n, r, a;
			if (1 === i[N]) {
				if (n = i[j][U](), !Qf.noCloneEvent && i[Zf[jr]]) {
					a = Zf.a(i);
					for (r in a.events) Zf.removeEvent(i, r, a.handle);
					i[Se](Zf[jr])
				}
				rs === n && i[Tn] !== t[Tn] ? (uf(i)[Tn] = t[Tn], cf(i)) : e === n ? (i[Te] && (i[Ga] = t[Ga]), Qf.html5Clone && t[Ke] && !Zf[F](i[Ke]) && (i[Ke] = t[Ke])) : Ie === n && Mh[ue](t[L]) ? (i[es] = i[fn] = t[fn], i[Ye] !== t[Ye] && (i[Ye] = t[Ye])) : hn === n ? i[Eo] = i[mn] = t[Eo] : Ie !== n && Bo !== n || (i[In] = t[In])
			}
		}

		function ff(t, e, i, n) {
			e = jf[P]([], e);
			var r, a, s, o, l, u, c = 0,
				d = t[S],
				p = d - 1,
				f = e[0],
				h = Zf.isFunction(f);
			if (h || d > 1 && Y == typeof f && !Qf.checkClone && Vh[ue](f)) return t.each(function (r) {
				var a = t.eq(r);
				h && (e[0] = f[b](this, r, a.html())), ff(a, e, i, n)
			});
			if (d && (u = nf(e, t[0][ne], !1, t, n), r = u[Di], 1 === u[ie][S] && (u = r), r || n)) {
				for (o = Zf[w](Zp(u, rs), uf), s = o[S]; d > c; c++) a = u, c !== p && (a = Zf[Do](a, !0, !0), s && Zf.merge(o, Zp(a, rs))), i[b](t[c], a, c);
				if (s)
					for (l = o[o[S] - 1][ne], Zf[w](o, cf), c = 0; s > c; c++) a = o[c], Gh[ue](a[L] || T) && !Zf.a(a, Ja) && Zf[xi](l, a) && (a[ko] ? Zf.f && Zf.f(a[ko]) : Zf.globalEval((a[Tn] || a[Bi] || a[Ke] || T)[B](jh, T)));
				u = r = null
			}
			return t
		}

		function hf(t, e, i) {
			for (var n, r = e ? Zf[je](e, t) : t, a = 0; null != (n = r[a]); a++) i || 1 !== n[N] || Zf.cleanData(Zp(n)), n[Te] && (i && Zf[xi](n[ne], n) && tf(Zp(n, rs)), n[Te][Ae](n));
			return t
		}

		function mf(t, e) {
			var i = Zf(e[we](t)).appendTo(e[Gr]),
				n = Zf.css(i[0], da);
			return i[Uo](), n
		}

		function vf(t) {
			var e = Vf,
				n = qh[t];
			return n || (n = mf(t, e), ca !== n && n || (Kh = (Kh || Zf(Yo)).appendTo(e[$e]), e = (Kh[0][Yn] || Kh[0][Un])[i], e[Ko](), e[qo](), n = mf(t, e), Kh[Uo]()), qh[t] = n), n
		}

		function gf(t, e) {
			return {
				get: function () {
					return t() ? void delete this[Vn] : (this[Vn] = e)[P](this, arguments)
				}
			}
		}

		function Tf(t) {
			if (t in cm) return t;
			for (var e = t[Nn](0)[v]() + t[a](1), i = um[S]; i--;)
				if (t = um[i] + e, t in cm) return t
		}

		function bf(t, e) {
			for (var i, n, r, a = [], s = 0, o = t[S]; o > s; s++) n = t[s], n[Ir] && (a[s] = Zf.a(n, jl), i = n[Ir][da], e ? (a[s] || ca !== i || (n[Ir][da] = T), T === n[Ir][da] && Ph(n) && (a[s] = Zf.a(n, jl, vf(n[j])))) : (r = Ph(n), (i && ca !== i || !r) && Zf.a(n, jl, r ? i : Zf.css(n, da))));
			for (s = 0; o > s; s++) n = t[s], n[Ir] && (e && ca !== n[Ir][da] && T !== n[Ir][da] || (n[Ir][da] = e ? a[s] || T : ca));
			return t
		}

		function Sf(t, e, i) {
			var n = sm[re](e);
			return n ? Math[K](0, n[1] - (i || 0)) + (n[2] || pa) : e
		}

		function yf(t, e, i, n, r) {
			for (var a = i === (n ? Ul : Yl) ? 4 : ta === e ? 1 : 0, s = 0; 4 > a; a += 2) Kl === i && (s += Zf.css(t, i + wh[a], !0, r)), n ? (Yl === i && (s -= Zf.css(t, ql + wh[a], !0, r)), Kl !== i && (s -= Zf.css(t, Ul + wh[a] + _l, !0, r))) : (s += Zf.css(t, ql + wh[a], !0, r), ql !== i && (s += Zf.css(t, Ul + wh[a] + _l, !0, r)));
			return s
		}

		function Cf(t, e, i) {
			var n = !0,
				r = ta === e ? t[Dr] : t[wl],
				a = tm(t),
				s = Qf[al] && Ql === Zf.css(t, al, !1, a);
			if (0 >= r || null == r) {
				if (r = em(t, e, a), (0 > r || null == r) && (r = t[Ir][e]), Qh[ue](r)) return r;
				n = s && (Qf.boxSizingReliable() || r === t[Ir][e]), r = parseFloat(r) || 0
			}
			return r + yf(t, e, i || (s ? Ul : Yl), n, a) + pa
		}

		function wf(t, e, i, n, r) {
			return new wf[g][p](t, e, i, n, r)
		}

		function Pf() {
			return t[Ar](function () {
				dm = void 0
			}), dm = Zf[io]()
		}

		function Af(t, e) {
			var i, n = {
					height: t
				},
				r = 0;
			for (e = e ? 1 : 0; 4 > r; r += 2 - e) i = wh[r], n[Kl + i] = n[ql + i] = t;
			return e && (n[Zo] = n[ta] = t), n
		}

		function Mf(t, e, i) {
			for (var n, r = (If.tweeners[e] || [])[s](If.tweeners[wt]), a = 0, o = r[S]; o > a; a++)
				if (n = r[a][b](i, e, t)) return n
		}

		function xf(t, e, i) {
			var n, r, a, s, o, l, u, c, d = this,
				p = {},
				f = t[Ir],
				h = t[N] && Ph(t),
				m = Zf.a(t, gu);
			i.queue || (o = Zf.i(t, Kr), null == o.unqueued && (o.unqueued = 0, l = o[gn].fire, o[gn].fire = function () {
				o.unqueued || l()
			}), o.unqueued++, d.always(function () {
				d.always(function () {
					o.unqueued--, Zf.queue(t, Kr)[S] || o[gn].fire()
				})
			})), 1 === t[N] && (ru in e || ta in e) && (i[Tu] = [f[Tu], f[bu], f[Su]], u = Zf.css(t, da), c = ca === u ? Zf.a(t, jl) || vf(t[j]) : u, yu === c && ca === Zf.css(t, Cu) && (Qf.inlineBlockNeedsLayout && yu !== vf(t[j]) ? f[Er] = 1 : f[da] = su)), i[Tu] && (f[Tu] = ci, Qf.shrinkWrapBlocks() || d.always(function () {
				f[Tu] = i[Tu][0], f[bu] = i[Tu][1], f[Su] = i[Tu][2]
			}));
			for (n in e)
				if (r = e[n], fm[re](r)) {
					if (delete e[n], a = a || wu === r, r === (h ? uu : lu)) {
						if (lu !== r || !m || void 0 === m[n]) continue;
						h = !0
					}
					p[n] = m && m[n] || Zf[Ir](t, n)
				} else u = void 0;
			if (Zf.isEmptyObject(p)) yu === (ca === u ? vf(t[j]) : u) && (f[da] = u);
			else {
				m ? ci in m && (h = m[ci]) : m = Zf.a(t, gu, {}), a && (m[ci] = !h), h ? Zf(t)[lu]() : d[er](function () {
					Zf(t)[uu]()
				}), d[er](function () {
					var e;
					Zf.j(t, gu);
					for (e in p) Zf[Ir](t, e, p[e])
				});
				for (n in p) s = Mf(h ? m[n] : 0, n, d), n in m || (m[n] = s[ha], h && (s[ma] = s[ha], s[ha] = ta === n || ru === n ? 1 : 0))
			}
		}

		function Gf(t, e) {
			var i, n, r, a, s;
			for (i in t)
				if (n = Zf.camelCase(i), r = e[n], a = t[i], Zf[I](a) && (r = a[1], a = t[i] = a[0]), i !== n && (t[n] = a, delete t[i]), s = Zf.cssHooks[n], s && Pu in s) {
					a = s[Pu](a), delete t[n];
					for (i in a) i in t || (t[i] = a[i], e[i] = r)
				} else e[n] = r
		}

		function If(t, e, i) {
			var n, r, a = 0,
				s = If.prefilters[S],
				l = Zf.Deferred().always(function () {
					delete u.elem
				}),
				u = function () {
					if (r) return !1;
					for (var e = dm || Pf(), i = Math[K](0, c[Au] + c[cu] - e), n = i / c[cu] || 0, a = 1 - n, s = 0, o = c.tweens[S]; o > s; s++) c.tweens[s].run(a);
					return l.notifyWith(t, [c, a, i]), 1 > a && o ? i : (l.resolveWith(t, [c]), !1)
				},
				c = l.promise({
					elem: t,
					props: Zf[x]({}, e),
					opts: Zf[x](!0, {
						specialEasing: {},
						easing: Zf.easing.d
					}, i),
					originalProperties: e,
					originalOptions: i,
					startTime: dm || Pf(),
					duration: i[cu],
					tweens: [],
					createTween: function (e, i) {
						var n = Zf.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
						return c.tweens[o](n), n
					},
					stop: function (e) {
						var i = 0,
							n = e ? c.tweens[S] : 0;
						if (r) return this;
						for (r = !0; n > i; i++) c.tweens[i].run(1);
						return e ? (l.notifyWith(t, [c, 1, 0]), l.resolveWith(t, [c, e])) : l.rejectWith(t, [c, e]), this
					}
				}),
				d = c.props;
			for (Gf(d, c.opts.specialEasing); s > a; a++)
				if (n = If.prefilters[a][b](c, t, d, c.opts)) return Zf.isFunction(n[Qr]) && (Zf.i(c.elem, c.opts.queue)[Qr] = Zf.proxy(n[Qr], n)), n;
			return Zf[w](d, Mf, c), Zf.isFunction(c.opts[ha]) && c.opts[ha][b](t, c), Zf[Kr].timer(Zf[x](u, {
				elem: t,
				anim: c,
				queue: c.opts.queue
			})), c.progress(c.opts.progress)[er](c.opts[er], c.opts[yr]).fail(c.opts.fail).always(c.opts.always)
		}

		function Hf(t) {
			return Zf.attr(t, Vi) || T
		}

		function $f(t) {
			return function (e, i) {
				Y != typeof e && (i = e, e = wt);
				var n, r = 0,
					s = e[U]()[Bn](mh) || [];
				if (Zf.isFunction(i))
					for (; n = s[r++];) gt === n[Nn](0) ? (n = n[a](1) || wt, (t[n] = t[n] || [])[Gi](i)) : (t[n] = t[n] || [])[o](i)
			}
		}

		function Ef(t, e, i, n) {
			function r(o) {
				var l;
				return a[o] = !0, Zf.each(t[o] || [], function (t, o) {
					var u = o(e, i, n);
					return Y != typeof u || s || a[u] ? s ? !(l = u) : void 0 : (e.dataTypes[Gi](u), r(u), !1)
				}), l
			}
			var a = {},
				s = t === Om;
			return r(e.dataTypes[0]) || !a[wt] && r(wt)
		}

		function Bf(t, e) {
			var i, n, r = Zf.ajaxSettings.flatOptions || {};
			for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
			return i && Zf[x](!0, t, i), t
		}

		function Df(t, e, i) {
			for (var n, r, a, s, o = t.contents, l = t.dataTypes; wt === l[0];) l[Ce](), void 0 === r && (r = t[Ec] || e[Bc](Dc));
			if (r)
				for (s in o)
					if (o[s] && o[s][ue](r)) {
						l[Gi](s);
						break
					}
			if (l[0] in i) a = l[0];
			else {
				for (s in i) {
					if (!l[0] || t.converters[s + J + l[0]]) {
						a = s;
						break
					}
					n || (n = s)
				}
				a = a || n
			}
			return a ? (a !== l[0] && l[Gi](a), i[a]) : void 0
		}

		function kf(t, e, i, n) {
			var r, s, o, l, u, c = {},
				d = t.dataTypes[a]();
			if (d[1])
				for (o in t.converters) c[o[U]()] = t.converters[o];
			for (s = d[Ce](); s;)
				if (t.responseFields[s] && (i[t.responseFields[s]] = e), !u && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = s, s = d[Ce]())
					if (wt === s) s = u;
					else if (wt !== u && u !== s) {
				if (o = c[u + J + s] || c[kc + s], !o)
					for (r in c)
						if (l = r[Q](J), l[1] === s && (o = c[u + J + l[0]] || c[kc + l[0]])) {
							o === !0 ? o = c[r] : c[r] !== !0 && (s = l[0], d[Gi](l[1]));
							break
						}
				if (o !== !0)
					if (o && t[Lc]) e = o(e);
					else try {
						e = o(e)
					} catch (p) {
						return {
							state: Cc,
							error: o ? p : Rc + u + Oc + s
						}
					}
			}
			return {
				state: Nc,
				data: e
			}
		}

		function Lf(t) {
			return t[Ir] && t[Ir][da] || Zf.css(t, da)
		}

		function Rf(t) {
			if (!Zf[xi](t[ne] || Vf, t)) return !0;
			for (; t && 1 === t[N];) {
				if (ca === Lf(t) || ci === t[L]) return !0;
				t = t[Te]
			}
			return !1
		}

		function Of(t, i, n, r) {
			var a;
			if (Zf[I](i)) Zf.each(i, function (i, a) {
				n || Vm[ue](t) ? r(t, a) : Of(t + Ud + (e == typeof a && null != a ? i : T) + tt, a, n, r)
			});
			else if (n || e !== Zf[L](i)) r(t, i);
			else
				for (a in i) Of(t + Ud + a + tt, i[a], n, r)
		}

		function Nf() {
			try {
				return new t[np]
			} catch (e) {}
		}

		function Wf() {
			try {
				return new t.ActiveXObject(ap)
			} catch (e) {}
		}

		function Ff(t) {
			return Zf.isWindow(t) ? t : 9 === t[N] && (t[Be] || t[ws])
		}
		var Xf = [],
			Vf = t[i],
			zf = Xf[a],
			jf = Xf[s],
			Uf = Xf[o],
			Yf = Xf[l],
			Kf = {},
			qf = Kf[u],
			_f = Kf[c],
			Qf = {},
			Jf = d,
			Zf = function (t, e) {
				return new Zf.fn[p](t, e)
			},
			th = f,
			eh = h,
			ih = m,
			nh = function (t, e) {
				return e[v]()
			};
		Zf.fn = Zf[g] = {
			jquery: Jf,
			constructor: Zf,
			selector: T,
			length: 0,
			toArray: function () {
				return zf[b](this)
			},
			get: function (t) {
				return null != t ? 0 > t ? this[t + this[S]] : this[t] : zf[b](this)
			},
			pushStack: function (t) {
				var e = Zf.merge(this[y](), t);
				return e.prevObject = this, e[C] = this[C], e
			},
			each: function (t) {
				return Zf.each(this, t)
			},
			map: function (t) {
				return this.pushStack(Zf[w](this, function (e, i) {
					return t[b](e, i, e)
				}))
			},
			slice: function () {
				return this.pushStack(zf[P](this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (t) {
				var e = this[S],
					i = +t + (0 > t ? e : 0);
				return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
			},
			end: function () {
				return this.prevObject || this[y]()
			},
			push: Uf,
			sort: Xf[A],
			splice: Xf[M]
		}, Zf[x] = Zf.fn[x] = function () {
			var t, i, n, r, a, s, o = arguments[0] || {},
				l = 1,
				u = arguments[S],
				c = !1;
			for (G == typeof o && (c = o, o = arguments[l] || {}, l++), e == typeof o || Zf.isFunction(o) || (o = {}), l === u && (o = this, l--); u > l; l++)
				if (null != (a = arguments[l]))
					for (r in a) t = o[r], n = a[r], o !== n && (c && n && (Zf.isPlainObject(n) || (i = Zf[I](n))) ? (i ? (i = !1, s = t && Zf[I](t) ? t : []) : s = t && Zf.isPlainObject(t) ? t : {}, o[r] = Zf[x](c, s, n)) : void 0 !== n && (o[r] = n));
			return o
		}, Zf[x]({
			expando: H + (Jf + Math[E]())[B](D, T),
			isReady: !0,
			error: function (t) {
				throw new Error(t)
			},
			noop: function () {},
			isFunction: function (t) {
				return k === Zf[L](t)
			},
			isArray: Array[I] || function (t) {
				return R === Zf[L](t)
			},
			isWindow: function (t) {
				return null != t && t == t[O]
			},
			isNumeric: function (t) {
				var e = t && t[u]();
				return !Zf[I](t) && e - parseFloat(e) + 1 >= 0
			},
			isEmptyObject: function (t) {
				var e;
				for (e in t) return !1;
				return !0
			},
			isPlainObject: function (t) {
				var i;
				if (!t || e !== Zf[L](t) || t[N] || Zf.isWindow(t)) return !1;
				try {
					if (t[y] && !_f[b](t, y) && !_f[b](t[y][g], W)) return !1
				} catch (n) {
					return !1
				}
				if (!Qf.ownFirst)
					for (i in t) return _f[b](t, i);
				for (i in t);
				return void 0 === i || _f[b](t, i)
			},
			type: function (t) {
				return null == t ? t + T : e == typeof t || k == typeof t ? Kf[qf[b](t)] || e : typeof t
			},
			globalEval: function (e) {
				e && Zf[F](e) && (t[X] || function (e) {
					t[V][b](t, e)
				})(e)
			},
			camelCase: function (t) {
				return t[B](eh, z)[B](ih, nh)
			},
			nodeName: function (t, e) {
				return t[j] && t[j][U]() === e[U]()
			},
			each: function (t, e) {
				var i, n = 0;
				if ($(t))
					for (i = t[S]; i > n && e[b](t[n], n, t[n]) !== !1; n++);
				else
					for (n in t)
						if (e[b](t[n], n, t[n]) === !1) break; return t
			},
			trim: function (t) {
				return null == t ? T : (t + T)[B](th, T)
			},
			makeArray: function (t, e) {
				var i = e || [];
				return null != t && ($(Object(t)) ? Zf.merge(i, Y == typeof t ? [t] : t) : Uf[b](i, t)), i
			},
			inArray: function (t, e, i) {
				var n;
				if (e) {
					if (Yf) return Yf[b](e, t, i);
					for (n = e[S], i = i ? 0 > i ? Math[K](0, n + i) : i : 0; n > i; i++)
						if (i in e && e[i] === t) return i
				}
				return -1
			},
			merge: function (t, e) {
				for (var i = +e[S], n = 0, r = t[S]; i > n;) t[r++] = e[n++];
				if (i !== i)
					for (; void 0 !== e[n];) t[r++] = e[n++];
				return t[S] = r, t
			},
			grep: function (t, e, i) {
				for (var n, r = [], a = 0, s = t[S], l = !i; s > a; a++) n = !e(t[a], a), n !== l && r[o](t[a]);
				return r
			},
			map: function (t, e, i) {
				var n, r, a = 0,
					s = [];
				if ($(t))
					for (n = t[S]; n > a; a++) r = e(t[a], a, i), null != r && s[o](r);
				else
					for (a in t) r = e(t[a], a, i), null != r && s[o](r);
				return jf[P]([], s)
			},
			guid: 1,
			proxy: function (t, e) {
				var i, n, r;
				return Y == typeof e && (r = t[e], e = t, t = r), Zf.isFunction(t) ? (i = zf[b](arguments, 2), n = function () {
					return t[P](e || this, i[s](zf[b](arguments)))
				}, n.guid = t.guid = t.guid || Zf.guid++, n) : void 0
			},
			now: function () {
				return +new Date
			},
			support: Qf
		}), k == typeof Symbol && (Zf.fn[Symbol[q]] = Xf[Symbol[q]]), Zf.each(_[Q](J), function (t, e) {
			Kf[Z + e + tt] = e[U]()
		});
		var rh = function (t) {
			function n(t, i, n, r) {
				var a, s, l, u, c, d, p, f, h = i && i[ne],
					m = i ? i[N] : 9;
				if (n = n || [], Y != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
				if (!r && ((i ? i[ne] || i : Nn) !== $n && Hn(i), i = i || $n, Bn)) {
					if (11 !== m && (d = vr[re](t)))
						if (a = d[1]) {
							if (9 === m) {
								if (!(l = i[ae](a))) return n;
								if (l[se] === a) return n[o](l), n
							} else if (h && (l = h[ae](a)) && Rn(i, l) && l[se] === a) return n[o](l), n
						} else {
							if (d[2]) return Qn[P](n, i[oe](t)), n;
							if ((a = d[3]) && F[le] && i[le]) return Qn[P](n, i[le](a)), n
						}
					if (F.qsa && !zn[t + J] && (!Dn || !Dn[ue](t))) {
						if (1 !== m) h = i, f = t;
						else if (e !== i[j][U]()) {
							for ((u = i[ce](se)) ? u = u[B](Tr, de) : i[pe](se, u = On), p = K(t), s = p[S], c = dr[ue](u) ? fe + u : he + u + me; s--;) p[s] = c + J + x(p[s]);
							f = p[ve](ge), h = gr[ue](t) && C(i[Te]) || i
						}
						if (f) try {
							return Qn[P](n, h[be](f)), n
						} catch (v) {} finally {
							u === On && i[Se](se)
						}
					}
				}
				return _(t[B](sr, ye), i, n, r)
			}

			function u() {
				function t(i, n) {
					return e[o](i + J) > X.cacheLength && delete t[e[Ce]()], t[i + J] = n
				}
				var e = [];
				return t
			}

			function d(t) {
				return t[On] = !0, t
			}

			function p(t) {
				var e = $n[we](Pe);
				try {
					return !!t(e)
				} catch (i) {
					return !1
				} finally {
					e[Te] && e[Te][Ae](e), e = null
				}
			}

			function f(t, e) {
				for (var i = t[Q](Me), n = i[S]; n--;) X.attrHandle[i[n]] = e
			}

			function h(t, e) {
				var i = e && t,
					n = i && 1 === t[N] && 1 === e[N] && (~e[xe] || Un) - (~t[xe] || Un);
				if (n) return n;
				if (i)
					for (; i = i[Ge];)
						if (i === e) return -1;
				return t ? 1 : -1
			}

			function m(t) {
				return function (e) {
					var i = e[j][U]();
					return Ie === i && e[L] === t
				}
			}

			function v(t) {
				return function (e) {
					var i = e[j][U]();
					return (Ie === i || He === i) && e[L] === t
				}
			}

			function y(t) {
				return d(function (e) {
					return e = +e, d(function (i, n) {
						for (var r, a = t([], i[S], e), s = a[S]; s--;) i[r = a[s]] && (i[r] = !(n[r] = i[r]))
					})
				})
			}

			function C(t) {
				return t && r != typeof t[oe] && t
			}

			function w() {}

			function x(t) {
				for (var e = 0, i = t[S], n = T; i > e; e++) n += t[e][Ye];
				return n
			}

			function G(t, e, i) {
				var n = e[Sn],
					r = i && Te === n,
					a = Fn++;
				return e.first ? function (e, i, a) {
					for (; e = e[n];)
						if (1 === e[N] || r) return t(e, i, a)
				} : function (e, i, s) {
					var o, l, u, c = [Wn, a];
					if (s) {
						for (; e = e[n];)
							if ((1 === e[N] || r) && t(e, i, s)) return !0
					} else
						for (; e = e[n];)
							if (1 === e[N] || r) {
								if (u = e[On] || (e[On] = {}), l = u[e[Zi]] || (u[e[Zi]] = {}), (o = l[n]) && o[0] === Wn && o[1] === a) return c[2] = o[2];
								if (l[n] = c, c[2] = t(e, i, s)) return !0
							}
				}
			}

			function I(t) {
				return t[S] > 1 ? function (e, i, n) {
					for (var r = t[S]; r--;)
						if (!t[r](e, i, n)) return !1;
					return !0
				} : t[0]
			}

			function H(t, e, i) {
				for (var r = 0, a = e[S]; a > r; r++) n(t, e[r], i);
				return i
			}

			function $(t, e, i, n, r) {
				for (var a, s = [], l = 0, u = t[S], c = null != e; u > l; l++)(a = t[l]) && (i && !i(a, n, r) || (s[o](a), c && e[o](l)));
				return s
			}

			function D(t, e, i, n, r, a) {
				return n && !n[On] && (n = D(n)), r && !r[On] && (r = D(r, a)), d(function (a, s, l, u) {
					var c, d, p, f = [],
						h = [],
						m = s[S],
						v = a || H(e || wt, l[N] ? [l] : l, []),
						g = !t || !a && e ? v : $(v, f, t, l, u),
						T = i ? r || (a ? t : m || n) ? [] : s : g;
					if (i && i(g, T, l, u), n)
						for (c = $(T, h), n(c, [], l, u), d = c[S]; d--;)(p = c[d]) && (T[h[d]] = !(g[h[d]] = p));
					if (a) {
						if (r || t) {
							if (r) {
								for (c = [], d = T[S]; d--;)(p = T[d]) && c[o](g[d] = p);
								r(null, T = [], c, u)
							}
							for (d = T[S]; d--;)(p = T[d]) && (c = r ? Zn(a, p) : f[d]) > -1 && (a[c] = !(s[c] = p))
						}
					} else T = $(T === s ? T[M](m, T[S]) : T), r ? r(null, s, T, u) : Qn[P](s, T)
				})
			}

			function R(t) {
				for (var e, i, n, r = t[S], l = X.relative[t[0][L]], u = l || X.relative[J], c = l ? 1 : 0, d = G(function (t) {
					return t === e
				}, u, !0), p = G(function (t) {
					return Zn(e, t) > -1
				}, u, !0), f = [
					function (t, i, n) {
						var r = !l && (n || i !== Z) || ((e = i)[N] ? d(t, i, n) : p(t, i, n));
						return e = null, r
					}
				]; r > c; c++)
					if (i = X.relative[t[c][L]]) f = [G(I(f), i)];
					else {
						if (i = X[je][t[c][L]][P](null, t[c][bi]), i[On]) {
							for (n = ++c; r > n && !X.relative[t[n][L]]; n++);
							return D(c > 1 && I(f), c > 1 && x(t[a](0, c - 1)[s]({
								value: J === t[c - 2][L] ? wt : T
							}))[B](sr, ye), i, n > c && R(t[a](c, n)), r > n && R(t = t[a](n)), r > n && x(t))
						}
						f[o](i)
					}
				return I(f)
			}

			function O(t, e) {
				var i = e[S] > 0,
					r = t[S] > 0,
					a = function (a, s, l, u, c) {
						var d, p, f, h = 0,
							m = yn,
							v = a && [],
							g = [],
							T = Z,
							y = a || r && X[ze].TAG(wt, c),
							C = Wn += null == T ? 1 : Math[E]() || .1,
							w = y[S];
						for (c && (Z = s === $n || s || c); m !== w && null != (d = y[m]); m++) {
							if (r && d) {
								for (p = 0, s || d[ne] === $n || (Hn(d), l = !Bn); f = t[p++];)
									if (f(d, s || $n, l)) {
										u[o](d);
										break
									}
								c && (Wn = C)
							}
							i && ((d = !f && d) && h--, a && v[o](d))
						}
						if (h += m, i && m !== h) {
							for (p = 0; f = e[p++];) f(v, g, s, l);
							if (a) {
								if (h > 0)
									for (; m--;) v[m] || g[m] || (g[m] = qn[b](u));
								g = $(g)
							}
							Qn[P](u, g), c && !a && g[S] > 0 && h + e[S] > 1 && n.uniqueSort(u)
						}
						return c && (Wn = C, Z = T), v
					};
				return i ? d(a) : a
			}
			var W, F, X, V, z, K, q, _, Z, tt, et, Hn, $n, En, Bn, Dn, kn, Ln, Rn, On = it + 1 * new Date,
				Nn = t[i],
				Wn = 0,
				Fn = 0,
				Xn = u(),
				Vn = u(),
				zn = u(),
				jn = function (t, e) {
					return t === e && (et = !0), 0
				},
				Un = 1 << 31,
				Yn = {}[c],
				Kn = [],
				qn = Kn[nt],
				_n = Kn[o],
				Qn = Kn[o],
				Jn = Kn[a],
				Zn = function (t, e) {
					for (var i = 0, n = t[S]; n > i; i++)
						if (t[i] === e) return i;
					return -1
				},
				tr = rt,
				er = at,
				ir = st,
				nr = ot + er + lt + ir + ut + er + ct + er + dt + ir + pt + er + ft,
				rr = ht + ir + mt + nr + vt,
				ar = new RegExp(er + gt, Tt),
				sr = new RegExp(bt + er + St + er + yt, Tt),
				or = new RegExp(bt + er + Ct + er + wt),
				lr = new RegExp(bt + er + Pt + er + At + er + wt),
				ur = new RegExp(Mt + er + xt + er + ft, Tt),
				cr = new RegExp(rr),
				dr = new RegExp(bt + ir + Gt),
				pr = {
					ID: new RegExp(It + ir + At),
					CLASS: new RegExp(Ht + ir + At),
					TAG: new RegExp($t + ir + Et),
					ATTR: new RegExp(bt + nr),
					PSEUDO: new RegExp(bt + rr),
					CHILD: new RegExp(Bt + er + Dt + er + kt + er + Lt + er + Rt, Ot),
					bool: new RegExp(Nt + tr + Wt, Ot),
					needsContext: new RegExp(bt + er + Ft + er + Xt + er + Vt, Ot)
				},
				fr = zt,
				hr = jt,
				mr = Ut,
				vr = Yt,
				gr = Kt,
				Tr = qt,
				br = new RegExp(_t + er + Qt + er + Jt, Zt),
				Sr = function (t, e, i) {
					var n = te + e - 65536;
					return n !== n || i ? e : 0 > n ? String[ee](n + 65536) : String[ee](n >> 10 | 55296, 1023 & n | 56320)
				},
				yr = function () {
					Hn()
				};
			try {
				Qn[P](Kn = Jn[b](Nn[ie]), Nn[ie]), Kn[Nn[ie][S]][N]
			} catch (Cr) {
				Qn = {
					apply: Kn[S] ? function (t, e) {
						_n[P](t, Jn[b](e))
					} : function (t, e) {
						for (var i = t[S], n = 0; t[i++] = e[n++];);
						t[S] = i - 1
					}
				}
			}
			F = n.support = {}, z = n.isXML = function (t) {
				var e = t && (t[ne] || t)[$e];
				return !!e && Ee !== e[j]
			}, Hn = n.setDocument = function (t) {
				var e, i, n = t ? t[ne] || t : Nn;
				return n !== $n && 9 === n[N] && n[$e] ? ($n = n, En = $n[$e], Bn = !z($n), (i = $n[Be]) && i[De] !== i && (i[ke] ? i[ke](Le, yr, !1) : i[Re] && i[Re](Oe, yr)), F[Ne] = p(function (t) {
					return t[We] = Ot, !t[ce](We)
				}), F[oe] = p(function (t) {
					return t[Fe]($n[Xe](T)), !t[oe](wt)[S]
				}), F[le] = mr[ue]($n[le]), F.getById = p(function (t) {
					return En[Fe](t)[se] = On, !$n[Ve] || !$n[Ve](On)[S]
				}), F.getById ? (X[ze].ID = function (t, e) {
					if (r != typeof e[ae] && Bn) {
						var i = e[ae](t);
						return i ? [i] : []
					}
				}, X[je].ID = function (t) {
					var e = t[B](br, Sr);
					return function (t) {
						return t[ce](se) === e
					}
				}) : (delete X[ze].ID, X[je].ID = function (t) {
					var e = t[B](br, Sr);
					return function (t) {
						var i = r != typeof t[Ue] && t[Ue](se);
						return i && i[Ye] === e
					}
				}), X[ze].TAG = F[oe] ? function (t, e) {
					return r != typeof e[oe] ? e[oe](t) : F.qsa ? e[be](t) : void 0
				} : function (t, e) {
					var i, n = [],
						r = 0,
						a = e[oe](t);
					if (wt === t) {
						for (; i = a[r++];) 1 === i[N] && n[o](i);
						return n
					}
					return a
				}, X[ze].CLASS = F[le] && function (t, e) {
					return r != typeof e[le] && Bn ? e[le](t) : void 0
				}, kn = [], Dn = [], (F.qsa = mr[ue]($n[be])) && (p(function (t) {
					En[Fe](t)[Ke] = qe + On + _e + On + Qe, t[be](Je)[S] && Dn[o](Ze + er + ti), t[be](ei)[S] || Dn[o](ot + er + ii + tr + At), t[be](ni + On + ri)[S] || Dn[o](ai), t[be](si)[S] || Dn[o](si), t[be](oi + On + li)[S] || Dn[o](ui)
				}), p(function (t) {
					var e = $n[we](Ie);
					e[pe](L, ci), t[Fe](e)[pe](di, pi), t[be](fi)[S] && Dn[o](di + er + hi), t[be](mi)[S] || Dn[o](mi, vi), t[be](gi), Dn[o](Ti)
				})), (F.matchesSelector = mr[ue](Ln = En[bi] || En[Si] || En[yi] || En[Ci] || En[wi])) && p(function (t) {
					F.disconnectedMatch = Ln[b](t, Pe), Ln[b](t, Pi), kn[o](Ai, rr)
				}), Dn = Dn[S] && new RegExp(Dn[ve](Me)), kn = kn[S] && new RegExp(kn[ve](Me)), e = mr[ue](En[Mi]), Rn = e || mr[ue](En[xi]) ? function (t, e) {
					var i = 9 === t[N] ? t[$e] : t,
						n = e && e[Te];
					return t === n || !(!n || 1 !== n[N] || !(i[xi] ? i[xi](n) : t[Mi] && 16 & t[Mi](n)))
				} : function (t, e) {
					if (e)
						for (; e = e[Te];)
							if (e === t) return !0;
					return !1
				}, jn = e ? function (t, e) {
					if (t === e) return et = !0, 0;
					var i = !t[Mi] - !e[Mi];
					return i ? i : (i = (t[ne] || t) === (e[ne] || e) ? t[Mi](e) : 1, 1 & i || !F.sortDetached && e[Mi](t) === i ? t === $n || t[ne] === Nn && Rn(Nn, t) ? -1 : e === $n || e[ne] === Nn && Rn(Nn, e) ? 1 : tt ? Zn(tt, t) - Zn(tt, e) : 0 : 4 & i ? -1 : 1)
				} : function (t, e) {
					if (t === e) return et = !0, 0;
					var i, n = 0,
						r = t[Te],
						a = e[Te],
						s = [t],
						o = [e];
					if (!r || !a) return t === $n ? -1 : e === $n ? 1 : r ? -1 : a ? 1 : tt ? Zn(tt, t) - Zn(tt, e) : 0;
					if (r === a) return h(t, e);
					for (i = t; i = i[Te];) s[Gi](i);
					for (i = e; i = i[Te];) o[Gi](i);
					for (; s[n] === o[n];) n++;
					return n ? h(s[n], o[n]) : s[n] === Nn ? -1 : o[n] === Nn ? 1 : 0
				}, $n) : $n
			}, n[bi] = function (t, e) {
				return n(t, null, null, e)
			}, n.matchesSelector = function (t, e) {
				if ((t[ne] || t) !== $n && Hn(t), e = e[B](ur, Ii), F.matchesSelector && Bn && !zn[e + J] && (!kn || !kn[ue](e)) && (!Dn || !Dn[ue](e))) try {
					var r = Ln[b](t, e);
					if (r || F.disconnectedMatch || t[i] && 11 !== t[i][N]) return r
				} catch (a) {}
				return n(e, $n, null, [t])[S] > 0
			}, n[xi] = function (t, e) {
				return (t[ne] || t) !== $n && Hn(t), Rn(t, e)
			}, n.attr = function (t, e) {
				(t[ne] || t) !== $n && Hn(t);
				var i = X.attrHandle[e[U]()],
					n = i && Yn[b](X.attrHandle, e[U]()) ? i(t, e, !Bn) : void 0;
				return void 0 !== n ? n : F[Ne] || !Bn ? t[ce](e) : (n = t[Ue](e)) && n[Hi] ? n[Ye] : null
			}, n[$i] = function (t) {
				throw new Error(Ei + t)
			}, n.uniqueSort = function (t) {
				var e, i = [],
					n = 0,
					r = 0;
				if (et = !F.detectDuplicates, tt = !F.sortStable && t[a](0), t[A](jn), et) {
					for (; e = t[r++];) e === t[r] && (n = i[o](r));
					for (; n--;) t[M](i[n], 1)
				}
				return tt = null, t
			}, V = n.getText = function (t) {
				var e, i = T,
					n = 0,
					r = t[N];
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if (Y == typeof t[Bi]) return t[Bi];
						for (t = t[Di]; t; t = t[Ge]) i += V(t)
					} else if (3 === r || 4 === r) return t[ki]
				} else
					for (; e = t[n++];) i += V(e);
				return i
			}, X = n.selectors = {
				cacheLength: 50,
				createPseudo: d,
				match: pr,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: Te,
						first: !0
					},
					" ": {
						dir: Te
					},
					"+": {
						dir: Li,
						first: !0
					},
					"~": {
						dir: Li
					}
				},
				preFilter: {
					ATTR: function (t) {
						return t[1] = t[1][B](br, Sr), t[3] = (t[3] || t[4] || t[5] || T)[B](br, Sr), ai === t[2] && (t[3] = J + t[3] + J), t[a](0, 4)
					},
					CHILD: function (t) {
						return t[1] = t[1][U](), Ri === t[1][a](0, 3) ? (t[3] || n[$i](t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * (Oi === t[3] || Ni === t[3])), t[5] = +(t[7] + t[8] || Ni === t[3])) : t[3] && n[$i](t[0]), t
					},
					PSEUDO: function (t) {
						var e, i = !t[6] && t[2];
						return pr.CHILD[ue](t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || T : i && cr[ue](i) && (e = K(i, !0)) && (e = i[l](At, i[S] - e) - i[S]) && (t[0] = t[0][a](0, e), t[2] = i[a](0, e)), t[a](0, 3))
					}
				},
				filter: {
					TAG: function (t) {
						var e = t[B](br, Sr)[U]();
						return wt === t ? function () {
							return !0
						} : function (t) {
							return t[j] && t[j][U]() === e
						}
					},
					CLASS: function (t) {
						var e = Xn[t + J];
						return e || (e = new RegExp(Wi + er + At + t + Fi + er + Xi)) && Xn(t, function (t) {
							return e[ue](Y == typeof t[We] && t[We] || r != typeof t[ce] && t[ce](Vi) || T)
						})
					},
					ATTR: function (t, e, i) {
						return function (r) {
							var s = n.attr(r, t);
							return null == s ? Ai === e : !e || (s += T, Mt === e ? s === i : Ai === e ? s !== i : zi === e ? i && 0 === s[l](i) : ji === e ? i && s[l](i) > -1 : Ui === e ? i && s[a](-i[S]) === i : ai === e ? (J + s[B](ar, J) + J)[l](i) > -1 : Yi === e && (s === i || s[a](0, i[S] + 1) === i + Ki))
						}
					},
					CHILD: function (t, e, i, n, r) {
						var s = Ri !== t[a](0, 3),
							o = qi !== t[a](-4),
							l = _i === e;
						return 1 === n && 0 === r ? function (t) {
							return !!t[Te]
						} : function (e, i, a) {
							var u, c, d, p, f, h, m = s !== o ? Ge : Li,
								v = e[Te],
								g = l && e[j][U](),
								T = !a && !l,
								b = !1;
							if (v) {
								if (s) {
									for (; m;) {
										for (p = e; p = p[m];)
											if (l ? p[j][U]() === g : 1 === p[N]) return !1;
										h = m = Qi === t && !h && Ge
									}
									return !0
								}
								if (h = [o ? v[Di] : v[Ji]], o && T) {
									for (p = v, d = p[On] || (p[On] = {}), c = d[p[Zi]] || (d[p[Zi]] = {}), u = c[t] || [], f = u[0] === Wn && u[1], b = f && u[2], p = f && v[ie][f]; p = ++f && p && p[m] || (b = f = 0) || h[nt]();)
										if (1 === p[N] && ++b && p === e) {
											c[t] = [Wn, f, b];
											break
										}
								} else if (T && (p = e, d = p[On] || (p[On] = {}), c = d[p[Zi]] || (d[p[Zi]] = {}), u = c[t] || [], f = u[0] === Wn && u[1], b = f), b === !1)
									for (;
										(p = ++f && p && p[m] || (b = f = 0) || h[nt]()) && ((l ? p[j][U]() !== g : 1 !== p[N]) || !++b || (T && (d = p[On] || (p[On] = {}), c = d[p[Zi]] || (d[p[Zi]] = {}), c[t] = [Wn, b]), p !== e)););
								return b -= r, b === n || b % n === 0 && b / n >= 0
							}
						}
					},
					PSEUDO: function (t, e) {
						var i, r = X.pseudos[t] || X.setFilters[t[U]()] || n[$i](tn + t);
						return r[On] ? r(e) : r[S] > 1 ? (i = [t, t, T, e], X.setFilters[c](t[U]()) ? d(function (t, i) {
							for (var n, a = r(t, e), s = a[S]; s--;) n = Zn(t, a[s]), t[n] = !(i[n] = a[s])
						}) : function (t) {
							return r(t, 0, i)
						}) : r
					}
				},
				pseudos: {
					not: d(function (t) {
						var e = [],
							i = [],
							n = q(t[B](sr, ye));
						return n[On] ? d(function (t, e, i, r) {
							for (var a, s = n(t, null, r, []), o = t[S]; o--;)(a = s[o]) && (t[o] = !(e[o] = a))
						}) : function (t, r, a) {
							return e[0] = t, n(e, null, a, i), e[0] = null, !i[nt]()
						}
					}),
					has: d(function (t) {
						return function (e) {
							return n(t, e)[S] > 0
						}
					}),
					contains: d(function (t) {
						return t = t[B](br, Sr),
							function (e) {
								return (e[Bi] || e[en] || V(e))[l](t) > -1
							}
					}),
					lang: d(function (t) {
						return dr[ue](t || T) || n[$i](nn + t), t = t[B](br, Sr)[U](),
							function (e) {
								var i;
								do
									if (i = Bn ? e[rn] : e[ce](an) || e[ce](rn)) return i = i[U](), i === t || 0 === i[l](t + Ki);
								while ((e = e[Te]) && 1 === e[N]);
								return !1
							}
					}),
					target: function (e) {
						var i = t[sn] && t[sn][on];
						return i && i[a](1) === e[se]
					},
					root: function (t) {
						return t === En
					},
					focus: function (t) {
						return t === $n[ln] && (!$n[un] || $n[un]()) && !!(t[L] || t[cn] || ~t[dn])
					},
					enabled: function (t) {
						return t[pn] === !1
					},
					disabled: function (t) {
						return t[pn] === !0
					},
					checked: function (t) {
						var e = t[j][U]();
						return Ie === e && !!t[fn] || hn === e && !!t[mn]
					},
					selected: function (t) {
						return t[Te] && t[Te][vn], t[mn] === !0
					},
					empty: function (t) {
						for (t = t[Di]; t; t = t[Ge])
							if (t[N] < 6) return !1;
						return !0
					},
					parent: function (t) {
						return !X.pseudos[gn](t)
					},
					header: function (t) {
						return hr[ue](t[j])
					},
					input: function (t) {
						return fr[ue](t[j])
					},
					button: function (t) {
						var e = t[j][U]();
						return Ie === e && He === t[L] || He === e
					},
					text: function (t) {
						var e;
						return Ie === t[j][U]() && Tn === t[L] && (null == (e = t[ce](L)) || Tn === e[U]())
					},
					first: y(function () {
						return [0]
					}),
					last: y(function (t, e) {
						return [e - 1]
					}),
					eq: y(function (t, e, i) {
						return [0 > i ? i + e : i]
					}),
					even: y(function (t, e) {
						for (var i = 0; e > i; i += 2) t[o](i);
						return t
					}),
					odd: y(function (t, e) {
						for (var i = 1; e > i; i += 2) t[o](i);
						return t
					}),
					lt: y(function (t, e, i) {
						for (var n = 0 > i ? i + e : i; --n >= 0;) t[o](n);
						return t
					}),
					gt: y(function (t, e, i) {
						for (var n = 0 > i ? i + e : i; ++n < e;) t[o](n);
						return t
					})
				}
			}, X.pseudos.nth = X.pseudos.eq;
			for (W in {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) X.pseudos[W] = m(W);
			for (W in {
				submit: !0,
				reset: !0
			}) X.pseudos[W] = v(W);
			return w[g] = X[bn] = X.pseudos, X.setFilters = new w, K = n.tokenize = function (t, e) {
				var i, r, s, l, u, c, d, p = Vn[t + J];
				if (p) return e ? 0 : p[a](0);
				for (u = t, c = [], d = X.preFilter; u;) {
					i && !(r = or[re](u)) || (r && (u = u[a](r[0][S]) || u), c[o](s = [])), i = !1, (r = lr[re](u)) && (i = r[Ce](), s[o]({
						value: i,
						type: r[0][B](sr, J)
					}), u = u[a](i[S]));
					for (l in X[je])!(r = pr[l][re](u)) || d[l] && !(r = d[l](r)) || (i = r[Ce](), s[o]({
						value: i,
						type: l,
						matches: r
					}), u = u[a](i[S]));
					if (!i) break
				}
				return e ? u[S] : u ? n[$i](t) : Vn(t, c)[a](0)
			}, q = n[Cn] = function (t, e) {
				var i, n = [],
					r = [],
					a = zn[t + J];
				if (!a) {
					for (e || (e = K(t)), i = e[S]; i--;) a = R(e[i]), a[On] ? n[o](a) : r[o](a);
					a = zn(t, O(r, n)), a[wn] = t
				}
				return a
			}, _ = n[Pn] = function (t, e, i, n) {
				var r, s, o, l, u, c = k == typeof t && t,
					d = !n && K(t = c[wn] || t);
				if (i = i || [], 1 === d[S]) {
					if (s = d[0] = d[0][a](0), s[S] > 2 && An === (o = s[0])[L] && F.getById && 9 === e[N] && Bn && X.relative[s[1][L]]) {
						if (e = (X[ze].ID(o[bi][0][B](br, Sr), e) || [])[0], !e) return i;
						c && (e = e[Te]), t = t[a](s[Ce]()[Ye][S])
					}
					for (r = pr.needsContext[ue](t) ? 0 : s[S]; r-- && (o = s[r], !X.relative[l = o[L]]);)
						if ((u = X[ze][l]) && (n = u(o[bi][0][B](br, Sr), gr[ue](s[0][L]) && C(e[Te]) || e))) {
							if (s[M](r, 1), t = n[S] && x(s), !t) return Qn[P](i, n), i;
							break
						}
				}
				return (c || q(t, d))(n, e, !Bn, i, !e || gr[ue](t) && C(e[Te]) || e), i
			}, F.sortStable = On[Q](T)[A](jn)[ve](T) === On, F.detectDuplicates = !!et, Hn(), F.sortDetached = p(function (t) {
				return 1 & t[Mi]($n[we](Pe))
			}), p(function (t) {
				return t[Ke] = Mn, fe === t[Di][ce](cn)
			}) || f(xn, function (t, e, i) {
				return i ? void 0 : t[ce](e, L === e[U]() ? 1 : 2)
			}), F[Ne] && p(function (t) {
				return t[Ke] = Gn, t[Di][pe](Ye, T), T === t[Di][ce](Ye)
			}) || f(Ye, function (t, e, i) {
				return i || Ie !== t[j][U]() ? void 0 : t[In]
			}), p(function (t) {
				return null == t[ce](pn)
			}) || f(tr, function (t, e, i) {
				var n;
				return i ? void 0 : t[e] === !0 ? e[U]() : (n = t[Ue](e)) && n[Hi] ? n[Ye] : null
			}), n
		}(t);
		Zf[ze] = rh, Zf.expr = rh.selectors, Zf.expr[Hn] = Zf.expr.pseudos, Zf.uniqueSort = Zf[$n] = rh.uniqueSort, Zf[Tn] = rh.getText, Zf.isXMLDoc = rh.isXML, Zf[xi] = rh[xi];
		var ah = function (t, e, i) {
				for (var n = [], r = void 0 !== i;
					(t = t[e]) && 9 !== t[N];)
					if (1 === t[N]) {
						if (r && Zf(t)[En](i)) break;
						n[o](t)
					}
				return n
			},
			sh = function (t, e) {
				for (var i = []; t; t = t[Ge]) 1 === t[N] && t !== e && i[o](t);
				return i
			},
			oh = Zf.expr[Bn].needsContext,
			lh = Dn,
			uh = kn;
		Zf[je] = function (t, e, i) {
			var n = e[0];
			return i && (t = Ln + t + At), 1 === e[S] && 1 === n[N] ? Zf[ze].matchesSelector(n, t) ? [n] : [] : Zf[ze][bi](t, Zf.grep(e, function (t) {
				return 1 === t[N]
			}))
		}, Zf.fn[x]({
			find: function (t) {
				var e, i = [],
					n = this,
					r = n[S];
				if (Y != typeof t) return this.pushStack(Zf(t)[je](function () {
					for (e = 0; r > e; e++)
						if (Zf[xi](n[e], this)) return !0
				}));
				for (e = 0; r > e; e++) Zf[ze](t, n[e], i);
				return i = this.pushStack(r > 1 ? Zf[$n](i) : i), i[wn] = this[wn] ? this[wn] + J + t : t, i
			},
			filter: function (t) {
				return this.pushStack(Xp(this, t || [], !1))
			},
			not: function (t) {
				return this.pushStack(Xp(this, t || [], !0))
			},
			is: function (t) {
				return !!Xp(this, Y == typeof t && oh[ue](t) ? Zf(t) : t || [], !1)[S]
			}
		});
		var ch, dh = Rn,
			ph = Zf.fn[p] = function (t, e, i) {
				var n, a;
				if (!t) return this;
				if (i = i || ch, Y == typeof t) {
					if (n = On === t[Nn](0) && Wn === t[Nn](t[S] - 1) && t[S] >= 3 ? [null, t, null] : dh[re](t), !n || !n[1] && e) return !e || e.jquery ? (e || i)[ze](t) : this[y](e)[ze](t);
					if (n[1]) {
						if (e = e instanceof Zf ? e[0] : e, Zf.merge(this, Zf.parseHTML(n[1], e && e[N] ? e[ne] || e : Vf, !0)), lh[ue](n[1]) && Zf.isPlainObject(e))
							for (n in e) Zf.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
						return this
					}
					if (a = Vf[ae](n[2]), a && a[Te]) {
						if (a[se] !== n[2]) return ch[ze](t);
						this[S] = 1, this[0] = a
					}
					return this[C] = Vf, this[wn] = t, this
				}
				return t[N] ? (this[C] = this[0] = t, this[S] = 1, this) : Zf.isFunction(t) ? r != typeof i.ready ? i.ready(t) : t(Zf) : (void 0 !== t[wn] && (this[wn] = t[wn], this[C] = t[C]), Zf.makeArray(t, this))
			};
		ph[g] = Zf.fn, ch = Zf(Vf);
		var fh = Fn,
			hh = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		Zf.fn[x]({
			has: function (t) {
				var e, i = Zf(t, this),
					n = i[S];
				return this[je](function () {
					for (e = 0; n > e; e++)
						if (Zf[xi](this, i[e])) return !0
				})
			},
			closest: function (t, e) {
				for (var i, n = 0, r = this[S], a = [], s = oh[ue](t) || Y != typeof t ? Zf(t, e || this[C]) : 0; r > n; n++)
					for (i = this[n]; i && i !== e; i = i[Te])
						if (i[N] < 11 && (s ? s[Xn](i) > -1 : 1 === i[N] && Zf[ze].matchesSelector(i, t))) {
							a[o](i);
							break
						}
				return this.pushStack(a[S] > 1 ? Zf.uniqueSort(a) : a)
			},
			index: function (t) {
				return t ? Y == typeof t ? Zf.inArray(this[0], Zf(t)) : Zf.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0][Te] ? this.first().prevAll()[S] : -1
			},
			add: function (t, e) {
				return this.pushStack(Zf.uniqueSort(Zf.merge(this[Vn](), Zf(t, e))))
			},
			addBack: function (t) {
				return this[zn](null == t ? this.prevObject : this.prevObject[je](t))
			}
		}), Zf.each({
			parent: function (t) {
				var e = t[Te];
				return e && 11 !== e[N] ? e : null
			},
			parents: function (t) {
				return ah(t, Te)
			},
			parentsUntil: function (t, e, i) {
				return ah(t, Te, i)
			},
			next: function (t) {
				return Vp(t, Ge)
			},
			prev: function (t) {
				return Vp(t, Li)
			},
			nextAll: function (t) {
				return ah(t, Ge)
			},
			prevAll: function (t) {
				return ah(t, Li)
			},
			nextUntil: function (t, e, i) {
				return ah(t, Ge, i)
			},
			prevUntil: function (t, e, i) {
				return ah(t, Li, i)
			},
			siblings: function (t) {
				return sh((t[Te] || {})[Di], t)
			},
			children: function (t) {
				return sh(t[Di])
			},
			contents: function (t) {
				return Zf[j](t, jn) ? t[Un] || t[Yn][i] : Zf.merge([], t[ie])
			}
		}, function (t, e) {
			Zf.fn[t] = function (i, n) {
				var r = Zf[w](this, e, i);
				return Kn !== t[a](-5) && (n = i), n && Y == typeof n && (r = Zf[je](n, r)), this[S] > 1 && (hh[t] || (r = Zf.uniqueSort(r)), fh[ue](t) && (r = r[qn]())), this.pushStack(r)
			}
		});
		var mh = _n;
		Zf.Callbacks = function (t) {
			t = Y == typeof t ? zp(t) : Zf[x]({}, t);
			var e, i, n, r, s = [],
				l = [],
				u = -1,
				c = function () {
					for (r = t.once, n = e = !0; l[S]; u = -1)
						for (i = l[Ce](); ++u < s[S];) s[u][P](i[0], i[1]) === !1 && t.stopOnFalse && (u = s[S], i = !1);
					t[Qn] || (i = !1), e = !1, r && (s = i ? [] : T)
				},
				d = {
					add: function () {
						return s && (i && !e && (u = s[S] - 1, l[o](i)), function n(e) {
							Zf.each(e, function (e, i) {
								Zf.isFunction(i) ? t[$n] && d[Jn](i) || s[o](i) : i && i[S] && Y !== Zf[L](i) && n(i)
							})
						}(arguments), i && !e && c()), this
					},
					remove: function () {
						return Zf.each(arguments, function (t, e) {
							for (var i;
								(i = Zf.inArray(e, s, i)) > -1;) s[M](i, 1), u >= i && u--
						}), this
					},
					has: function (t) {
						return t ? Zf.inArray(t, s) > -1 : s[S] > 0
					},
					empty: function () {
						return s && (s = []), this
					},
					disable: function () {
						return r = l = [], s = i = T, this
					},
					disabled: function () {
						return !s
					},
					lock: function () {
						return r = !0, i || d[Zn](), this
					},
					locked: function () {
						return !!r
					},
					fireWith: function (t, i) {
						return r || (i = i || [], i = [t, i[a] ? i[a]() : i], l[o](i), e || c()), this
					},
					fire: function () {
						return d.fireWith(this, arguments), this
					},
					fired: function () {
						return !!n
					}
				};
			return d
		}, Zf[x]({
			Deferred: function (t) {
				var e = [
						[tr, er, Zf.Callbacks(ir), nr],
						[rr, ar, Zf.Callbacks(ir), sr],
						[or, lr, Zf.Callbacks(Qn)]
					],
					i = ur,
					n = {
						state: function () {
							return i
						},
						always: function () {
							return r[er](arguments).fail(arguments), this
						},
						then: function () {
							var t = arguments;
							return Zf.Deferred(function (i) {
								Zf.each(e, function (e, a) {
									var s = Zf.isFunction(t[e]) && t[e];
									r[a[1]](function () {
										var t = s && s[P](this, arguments);
										t && Zf.isFunction(t.promise) ? t.promise().progress(i.notify)[er](i[tr]).fail(i[rr]) : i[a[0] + cr](this === n ? i.promise() : this, s ? [t] : arguments)
									})
								}), t = null
							}).promise()
						},
						promise: function (t) {
							return null != t ? Zf[x](t, n) : n
						}
					},
					r = {};
				return n.pipe = n[dr], Zf.each(e, function (t, a) {
					var s = a[2],
						o = a[3];
					n[a[1]] = s[zn], o && s[zn](function () {
						i = o
					}, e[1 ^ t][2][Zn], e[2][2][pr]), r[a[0]] = function () {
						return r[a[0] + cr](this === r ? n : this, arguments), this
					}, r[a[0] + cr] = s.fireWith
				}), n.promise(r), t && t[b](r, r), r
			},
			when: function (t) {
				var e, i, n, r = 0,
					a = zf[b](arguments),
					s = a[S],
					o = 1 !== s || t && Zf.isFunction(t.promise) ? s : 0,
					l = 1 === o ? t : Zf.Deferred(),
					u = function (t, i, n) {
						return function (r) {
							i[t] = this, n[t] = arguments[S] > 1 ? zf[b](arguments) : r, n === e ? l.notifyWith(i, n) : --o || l.resolveWith(i, n)
						}
					};
				if (s > 1)
					for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++) a[r] && Zf.isFunction(a[r].promise) ? a[r].promise().progress(u(r, i, e))[er](u(r, n, a)).fail(l[rr]) : --o;
				return o || l.resolveWith(n, a), l.promise()
			}
		});
		var vh;
		Zf.fn.ready = function (t) {
			return Zf.ready.promise()[er](t), this
		}, Zf[x]({
			isReady: !1,
			readyWait: 1,
			holdReady: function (t) {
				t ? Zf.readyWait++ : Zf.ready(!0)
			},
			ready: function (t) {
				(t === !0 ? --Zf.readyWait : Zf.isReady) || (Zf.isReady = !0, t !== !0 && --Zf.readyWait > 0 || (vh.resolveWith(Vf, [Zf]), Zf.fn.triggerHandler && (Zf(Vf).triggerHandler(fr), Zf(Vf).off(fr))))
			}
		}), Zf.ready.promise = function (e) {
			if (!vh)
				if (vh = Zf.Deferred(), yr === Vf[Cr] || wr !== Vf[Cr] && !Vf[$e][Pr]) t[Ar](Zf.ready);
				else if (Vf[ke]) Vf[ke](mr, Up), t[ke](vr, Up);
			else {
				Vf[Re](Tr, Up), t[Re](br, Up);
				var i = !1;
				try {
					i = null == t[Mr] && Vf[$e]
				} catch (n) {}
				i && i[Pr] && ! function r() {
					if (!Zf.isReady) {
						try {
							i[Pr](xr)
						} catch (e) {
							return t[Ar](r, 50)
						}
						jp(), Zf.ready()
					}
				}()
			}
			return vh.promise(e)
		}, Zf.ready.promise();
		var gh;
		for (gh in Zf(Qf)) break;
		Qf.ownFirst = yn === gh, Qf.inlineBlockNeedsLayout = !1, Zf(function () {
			var t, e, i, n;
			i = Vf[oe](Gr)[0], i && i[Ir] && (e = Vf[we](Pe), n = Vf[we](Pe), n[Ir][Hr] = $r, i[Fe](n)[Fe](e), r != typeof e[Ir][Er] && (e[Ir][Hr] = Br, Qf.inlineBlockNeedsLayout = t = 3 === e[Dr], t && (i[Ir][Er] = 1)), i[Ae](n))
		}),
		function () {
			var t = Vf[we](Pe);
			Qf.deleteExpando = !0;
			try {
				delete t[ue]
			} catch (e) {
				Qf.deleteExpando = !1
			}
			t = null
		}();
		var Th = function (t) {
				var e = Zf.noData[(t[j] + J)[U]()],
					i = +t[N] || 1;
				return (1 === i || 9 === i) && (!e || e !== !0 && t[ce](kr) === e)
			},
			bh = Lr,
			Sh = Rr;
		Zf[x]({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": Ur
			},
			hasData: function (t) {
				return t = t[N] ? Zf.cache[t[Zf[jr]]] : t[Zf[jr]], !!t && !Kp(t)
			},
			data: function (t, e, i) {
				return qp(t, e, i)
			},
			removeData: function (t, e) {
				return _p(t, e)
			},
			a: function (t, e, i) {
				return qp(t, e, i, !0)
			},
			j: function (t, e) {
				return _p(t, e, !0)
			}
		}), Zf.fn[x]({
			data: function (t, i) {
				var n, r, s, o = this[0],
					u = o && o[Ne];
				if (void 0 === t) {
					if (this[S] && (s = Zf[Vr](o), 1 === o[N] && !Zf.a(o, Yr))) {
						for (n = u[S]; n--;) u[n] && (r = u[n][di], 0 === r[l](Or) && (r = Zf.camelCase(r[a](5)), Yp(o, r, s[r])));
						Zf.a(o, Yr, !0)
					}
					return s
				}
				return e == typeof t ? this.each(function () {
					Zf[Vr](this, t)
				}) : arguments[S] > 1 ? this.each(function () {
					Zf[Vr](this, t, i)
				}) : o ? Yp(o, t, Zf[Vr](o, t)) : void 0
			},
			removeData: function (t) {
				return this.each(function () {
					Zf.removeData(this, t)
				})
			}
		}), Zf[x]({
			queue: function (t, e, i) {
				var n;
				return t ? (e = (e || Kr) + qr, n = Zf.a(t, e), i && (!n || Zf[I](i) ? n = Zf.a(t, e, Zf.makeArray(i)) : n[o](i)), n || []) : void 0
			},
			dequeue: function (t, e) {
				e = e || Kr;
				var i = Zf.queue(t, e),
					n = i[S],
					r = i[Ce](),
					a = Zf.i(t, e),
					s = function () {
						Zf.dequeue(t, e)
					};
				_r === r && (r = i[Ce](), n--), r && (Kr === e && i[Gi](_r), delete a[Qr], r[b](t, s, a)), !n && a && a[gn].fire()
			},
			i: function (t, e) {
				var i = e + Jr;
				return Zf.a(t, i) || Zf.a(t, i, {
					empty: Zf.Callbacks(ir)[zn](function () {
						Zf.j(t, e + qr), Zf.j(t, i)
					})
				})
			}
		}), Zf.fn[x]({
			queue: function (t, e) {
				var i = 2;
				return Y != typeof t && (e = t, t = Kr, i--), arguments[S] < i ? Zf.queue(this[0], t) : void 0 === e ? this : this.each(function () {
					var i = Zf.queue(this, t, e);
					Zf.i(this, t), Kr === t && _r !== i[0] && Zf.dequeue(this, t)
				})
			},
			dequeue: function (t) {
				return this.each(function () {
					Zf.dequeue(this, t)
				})
			},
			clearQueue: function (t) {
				return this.queue(t || Kr, [])
			},
			promise: function (t, e) {
				var i, n = 1,
					r = Zf.Deferred(),
					a = this,
					s = this[S],
					o = function () {
						--n || r.resolveWith(a, [a])
					};
				for (Y != typeof t && (e = t, t = void 0), t = t || Kr; s--;) i = Zf.a(a[s], t + Jr), i && i[gn] && (n++, i[gn][zn](o));
				return o(), r.promise(e)
			}
		}),
		function () {
			var t;
			Qf.shrinkWrapBlocks = function () {
				if (null != t) return t;
				t = !1;
				var e, i, n;
				return i = Vf[oe](Gr)[0], i && i[Ir] ? (e = Vf[we](Pe), n = Vf[we](Pe), n[Ir][Hr] = $r, i[Fe](n)[Fe](e), r != typeof e[Ir][Er] && (e[Ir][Hr] = Zr, e[Fe](Vf[we](Pe))[Ir][ta] = ea, t = 3 !== e[Dr]), i[Ae](n), t) : void 0
			}
		}();
		var yh = ia[na],
			Ch = new RegExp(ra + yh + aa, Ot),
			wh = [sa, oa, la, ua],
			Ph = function (t, e) {
				return t = e || t, ca === Zf.css(t, da) || !Zf[xi](t[ne], t)
			},
			Ah = function (t, i, n, r, a, s, o) {
				var l = 0,
					u = t[S],
					c = null == n;
				if (e === Zf[L](n)) {
					a = !0;
					for (l in n) Ah(t, i, l, n[l], !0, s, o)
				} else if (void 0 !== r && (a = !0, Zf.isFunction(r) || (o = !0), c && (o ? (i[b](t, r), i = null) : (c = i, i = function (t, e, i) {
					return c[b](Zf(t), i)
				})), i))
					for (; u > l; l++) i(t[l], n, o ? r : r[b](t[l], l, i(t[l], n)));
				return a ? t : c ? i[b](t) : u ? i(t[0], n) : s
			},
			Mh = va,
			xh = ga,
			Gh = Ta,
			Ih = ba,
			Hh = Sa;
		! function () {
			var t = Vf[we](Pe),
				e = Vf[ya](),
				i = Vf[we](Ie);
			t[Ke] = Ca, Qf.leadingWhitespace = 3 === t[Di][N], Qf.tbody = !t[oe](wa)[S], Qf.htmlSerialize = !!t[oe](Pa)[S], Qf.html5Clone = Aa !== Vf[we](Ma)[xa](!0)[Ga], i[L] = Ia, i[fn] = !0, e[Fe](i), Qf.appendChecked = i[fn], t[Ke] = Ha, Qf.noCloneChecked = !!t[xa](!0)[Ji][In], e[Fe](t), i = Vf[we](Ie), i[pe](L, $a), i[pe](fn, fn), i[pe](di, Ea), t[Fe](i), Qf.checkClone = t[xa](!0)[xa](!0)[Ji][fn], Qf.noCloneEvent = !!t[ke], t[Zf[jr]] = 1, Qf[Ne] = !t[ce](Zf[jr])
		}();
		var $h = {
			option: [1, Ba, Da],
			legend: [1, ka, La],
			area: [1, Ra, Oa],
			param: [1, Na, Wa],
			thead: [1, Fa, Xa],
			tr: [2, Va, za],
			col: [2, ja, Ua],
			td: [3, Ya, Ka],
			d: Qf.htmlSerialize ? [0, T, T] : [1, qa, _a]
		};
		$h.optgroup = $h.option, $h.tbody = $h.tfoot = $h.colgroup = $h[Qa] = $h.thead, $h.th = $h.td;
		var Eh = Za,
			Bh = ts;
		! function () {
			var e, i, n = Vf[we](Pe);
			for (e in {
				submit: !0,
				change: !0,
				focusin: !0
			}) i = as + e, (Qf[e] = i in t) || (n[pe](i, Ea), Qf[e] = n[Ne][i][jr] === !1);
			n = null
		}();
		var Dh = ss,
			kh = os,
			Lh = ls,
			Rh = us,
			Oh = cs;
		Zf[Sr] = {
			global: {},
			add: function (t, e, i, n, a) {
				var s, l, u, c, d, p, f, h, m, v, g, y = Zf.a(t);
				if (y) {
					for (i.handler && (c = i, i = c.handler, a = c[wn]), i.guid || (i.guid = Zf.guid++), (l = y.events) || (l = y.events = {}), (p = y.handle) || (p = y.handle = function (t) {
						return r == typeof Zf || t && Zf[Sr].triggered === t[L] ? void 0 : Zf[Sr].dispatch[P](p.elem, arguments)
					}, p.elem = t), e = (e || T)[Bn](mh) || [T], u = e[S]; u--;) s = Oh[re](e[u]) || [], m = g = s[1], v = (s[2] || T)[Q](ds)[A](), m && (d = Zf[Sr].special[m] || {}, m = (a ? d.delegateType : d.bindType) || m, d = Zf[Sr].special[m] || {}, f = Zf[x]({
						type: m,
						origType: g,
						data: n,
						handler: i,
						guid: i.guid,
						selector: a,
						needsContext: a && Zf.expr[Bn].needsContext[ue](a),
						namespace: v[ve](ds)
					}, c), (h = l[m]) || (h = l[m] = [], h.delegateCount = 0, d.setup && d.setup[b](t, n, v, p) !== !1 || (t[ke] ? t[ke](m, p, !1) : t[Re] && t[Re](as + m, p))), d[zn] && (d[zn][b](t, f), f.handler.guid || (f.handler.guid = i.guid)), a ? h[M](h.delegateCount++, 0, f) : h[o](f), Zf[Sr][ps][m] = !0);
					t = null
				}
			},
			remove: function (t, e, i, n, r) {
				var a, s, o, l, u, c, d, p, f, h, m, v = Zf.hasData(t) && Zf.a(t);
				if (v && (c = v.events)) {
					for (e = (e || T)[Bn](mh) || [T], u = e[S]; u--;)
						if (o = Oh[re](e[u]) || [], f = m = o[1], h = (o[2] || T)[Q](ds)[A](), f) {
							for (d = Zf[Sr].special[f] || {}, f = (n ? d.delegateType : d.bindType) || f, p = c[f] || [], o = o[2] && new RegExp(fs + h[ve](hs) + ms), l = a = p[S]; a--;) s = p[a], !r && m !== s.origType || i && i.guid !== s.guid || o && !o[ue](s.namespace) || n && n !== s[wn] && (vs !== n || !s[wn]) || (p[M](a, 1), s[wn] && p.delegateCount--, d[gs] && d[gs][b](t, s));
							l && !p[S] && (d.teardown && d.teardown[b](t, h, v.handle) !== !1 || Zf.removeEvent(t, f, v.handle), delete c[f])
						} else
							for (f in c) Zf[Sr][gs](t, f + e[u], i, n, !0);
					Zf.isEmptyObject(c) && (delete v.handle, Zf.j(t, Ts))
				}
			},
			trigger: function (i, n, r, a) {
				var s, u, c, d, p, f, h, m = [r || Vf],
					v = _f[b](i, L) ? i[L] : i,
					g = _f[b](i, bs) ? i.namespace[Q](ds) : [];
				if (c = f = r = r || Vf, 3 !== r[N] && 8 !== r[N] && !Rh[ue](v + Zf[Sr].triggered) && (v[l](ds) > -1 && (g = v[Q](ds), v = g[Ce](), g[A]()), u = v[l](Hn) < 0 && as + v, i = i[Zf[jr]] ? i : new Zf[Ss](v, e == typeof i && i), i.isTrigger = a ? 2 : 3, i.namespace = g[ve](ds), i.rnamespace = i.namespace ? new RegExp(fs + g[ve](hs) + ms) : null, i[ys] = void 0, i[Cs] || (i[Cs] = r), n = null == n ? [i] : Zf.makeArray(n, [i]), p = Zf[Sr].special[v] || {}, a || !p.trigger || p.trigger[P](r, n) !== !1)) {
					if (!a && !p.noBubble && !Zf.isWindow(r)) {
						for (d = p.delegateType || v, Rh[ue](d + v) || (c = c[Te]); c; c = c[Te]) m[o](c), f = c;
						f === (r[ne] || Vf) && m[o](f[Be] || f[ws] || t)
					}
					for (h = 0;
						(c = m[h++]) && !i.isPropagationStopped();) i[L] = h > 1 ? d : p.bindType || v, s = (Zf.a(c, Ts) || {})[i[L]] && Zf.a(c, Ps), s && s[P](c, n), s = u && c[u], s && s[P] && Th(c) && (i[ys] = s[P](c, n), i[ys] === !1 && i[As]());
					if (i[L] = v, !a && !i.isDefaultPrevented() && (!p.d || p.d[P](m[nt](), n) === !1) && Th(r) && u && r[v] && !Zf.isWindow(r)) {
						f = r[u], f && (r[u] = null), Zf[Sr].triggered = v;
						try {
							r[v]()
						} catch (T) {}
						Zf[Sr].triggered = void 0, f && (r[u] = f)
					}
					return i[ys]
				}
			},
			dispatch: function (t) {
				t = Zf[Sr].fix(t);
				var e, i, n, r, a, s = [],
					o = zf[b](arguments),
					l = (Zf.a(this, Ts) || {})[t[L]] || [],
					u = Zf[Sr].special[t[L]] || {};
				if (o[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch[b](this, t) !== !1) {
					for (s = Zf[Sr].handlers[b](this, t, l), e = 0;
						(r = s[e++]) && !t.isPropagationStopped();)
						for (t[Ms] = r.elem, i = 0;
							(a = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace[ue](a.namespace) || (t.handleObj = a, t[Vr] = a[Vr], n = ((Zf[Sr].special[a.origType] || {}).handle || a.handler)[P](r.elem, o), void 0 !== n && (t[ys] = n) === !1 && (t[As](), t[xs]()));
					return u.postDispatch && u.postDispatch[b](this, t), t[ys]
				}
			},
			handlers: function (t, e) {
				var i, n, r, s, l = [],
					u = e.delegateCount,
					c = t[Cs];
				if (u && c[N] && (Gs !== t[L] || isNaN(t[He]) || t[He] < 1))
					for (; c != this; c = c[Te] || this)
						if (1 === c[N] && (c[pn] !== !0 || Gs !== t[L])) {
							for (n = [], i = 0; u > i; i++) s = e[i], r = s[wn] + J, void 0 === n[r] && (n[r] = s.needsContext ? Zf(r, this)[Xn](c) > -1 : Zf[ze](r, this, null, [c])[S]), n[r] && n[o](s);
							n[S] && l[o]({
								elem: c,
								handlers: n
							})
						}
				return u < e[S] && l[o]({
					elem: this,
					handlers: e[a](u)
				}), l
			},
			fix: function (t) {
				if (t[Zf[jr]]) return t;
				var e, i, n, r = t[L],
					a = t,
					o = this.fixHooks[r];
				for (o || (this.fixHooks[r] = o = Lh[ue](r) ? this.mouseHooks : kh[ue](r) ? this.keyHooks : {}), n = o.props ? this.props[s](o.props) : this.props, t = new Zf[Ss](a), e = n[S]; e--;) i = n[e], t[i] = a[i];
				return t[Cs] || (t[Cs] = a[Is] || Vf), 3 === t[Cs][N] && (t[Cs] = t[Cs][Te]), t[Hs] = !!t[Hs], o[je] ? o[je](t, a) : t
			},
			props: $s[Q](J),
			fixHooks: {},
			keyHooks: {
				props: Es[Q](J),
				filter: function (t, e) {
					return null == t[Bs] && (t[Bs] = null != e[Ds] ? e[Ds] : e[ks]), t
				}
			},
			mouseHooks: {
				props: Ls[Q](J),
				filter: function (t, e) {
					var i, n, r, a = e[He],
						s = e[Rs];
					return null == t[Os] && null != e[Ns] && (n = t[Cs][ne] || Vf, r = n[$e], i = n[Gr], t[Os] = e[Ns] + (r && r[Ws] || i && i[Ws] || 0) - (r && r[Fs] || i && i[Fs] || 0), t[Xs] = e[Vs] + (r && r[zs] || i && i[zs] || 0) - (r && r[js] || i && i[js] || 0)), !t[Us] && s && (t[Us] = s === t[Cs] ? e[Ys] : s), t[Bs] || void 0 === a || (t[Bs] = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== sf() && this[Ks]) try {
							return this[Ks](), !1
						} catch (t) {}
					},
					delegateType: qs
				},
				blur: {
					trigger: function () {
						return this === sf() && this[_s] ? (this[_s](), !1) : void 0
					},
					delegateType: Qs
				},
				click: {
					trigger: function () {
						return Zf[j](this, Ie) && Ia === this[L] && this[Gs] ? (this[Gs](), !1) : void 0
					},
					d: function (t) {
						return Zf[j](t[Cs], Js)
					}
				},
				beforeunload: {
					postDispatch: function (t) {
						void 0 !== t[ys] && t.originalEvent && (t.originalEvent[Zs] = t[ys])
					}
				}
			},
			simulate: function (t, e, i) {
				var n = Zf[x](new Zf[Ss], i, {
					type: t,
					isSimulated: !0
				});
				Zf[Sr].trigger(n, null, e), n.isDefaultPrevented() && i[As]()
			}
		}, Zf.removeEvent = Vf[hr] ? function (t, e, i) {
			t[hr] && t[hr](e, i)
		} : function (t, e, i) {
			var n = as + e;
			t[gr] && (r == typeof t[n] && (t[n] = null), t[gr](n, i))
		}, Zf[Ss] = function (t, e) {
			return this instanceof Zf[Ss] ? (t && t[L] ? (this.originalEvent = t, this[L] = t[L], this.isDefaultPrevented = t[to] || void 0 === t[to] && t[Zs] === !1 ? rf : af) : this[L] = t, e && Zf[x](this, e), this[eo] = t && t[eo] || Zf[io](), void(this[Zf[jr]] = !0)) : new Zf[Ss](t, e)
		}, Zf[Ss][g] = {
			constructor: Zf[Ss],
			isDefaultPrevented: af,
			isPropagationStopped: af,
			isImmediatePropagationStopped: af,
			preventDefault: function () {
				var t = this.originalEvent;
				this.isDefaultPrevented = rf, t && (t[As] ? t[As]() : t[Zs] = !1)
			},
			stopPropagation: function () {
				var t = this.originalEvent;
				this.isPropagationStopped = rf, t && !this.isSimulated && (t[xs] && t[xs](), t[no] = !0)
			},
			stopImmediatePropagation: function () {
				var t = this.originalEvent;
				this.isImmediatePropagationStopped = rf, t && t[ro] && t[ro](), this[xs]()
			}
		}, Zf.each({
			mouseenter: ao,
			mouseleave: so,
			pointerenter: oo,
			pointerleave: lo
		}, function (t, e) {
			Zf[Sr].special[t] = {
				delegateType: e,
				bindType: e,
				handle: function (t) {
					var i, n = this,
						r = t[Us],
						a = t.handleObj;
					return r && (r === n || Zf[xi](n, r)) || (t[L] = a.origType, i = a.handler[P](this, arguments), t[L] = e), i
				}
			}
		}), Qf[uo] || (Zf[Sr].special[uo] = {
			setup: function () {
				return !Zf[j](this, co) && void Zf[Sr][zn](this, po, function (t) {
					var e = t[Cs],
						i = Zf[j](e, Ie) || Zf[j](e, He) ? Zf.prop(e, co) : void 0;
					i && !Zf.a(i, uo) && (Zf[Sr][zn](i, fo, function (t) {
						t.k = !0
					}), Zf.a(i, uo, !0))
				})
			},
			postDispatch: function (t) {
				t.k && (delete t.k, this[Te] && !t.isTrigger && Zf[Sr].simulate(uo, this[Te], t))
			},
			teardown: function () {
				return !Zf[j](this, co) && void Zf[Sr][gs](this, ho)
			}
		}), Qf.change || (Zf[Sr].special.change = {
			setup: function () {
				return Dh[ue](this[j]) ? (Ia !== this[L] && $a !== this[L] || (Zf[Sr][zn](this, mo, function (t) {
					fn === t.originalEvent[vo] && (this.l = !0)
				}), Zf[Sr][zn](this, go, function (t) {
					this.l && !t.isTrigger && (this.l = !1), Zf[Sr].simulate(To, this, t)
				})), !1) : void Zf[Sr][zn](this, bo, function (t) {
					var e = t[Cs];
					Dh[ue](e[j]) && !Zf.a(e, To) && (Zf[Sr][zn](e, So, function (t) {
						!this[Te] || t.isSimulated || t.isTrigger || Zf[Sr].simulate(To, this[Te], t)
					}), Zf.a(e, To, !0))
				})
			},
			handle: function (t) {
				var e = t[Cs];
				return this !== e || t.isSimulated || t.isTrigger || $a !== e[L] && Ia !== e[L] ? t.handleObj.handler[P](this, arguments) : void 0
			},
			teardown: function () {
				return Zf[Sr][gs](this, yo), !Dh[ue](this[j])
			}
		}), Qf.focusin || Zf.each({
			focus: qs,
			blur: Qs
		}, function (t, e) {
			var i = function (t) {
				Zf[Sr].simulate(e, t[Cs], Zf[Sr].fix(t))
			};
			Zf[Sr].special[e] = {
				setup: function () {
					var n = this[ne] || this,
						r = Zf.a(n, e);
					r || n[ke](t, i, !0), Zf.a(n, e, (r || 0) + 1)
				},
				teardown: function () {
					var n = this[ne] || this,
						r = Zf.a(n, e) - 1;
					r ? Zf.a(n, e, r) : (n[hr](t, i, !0), Zf.j(n, e))
				}
			}
		}), Zf.fn[x]({
			on: function (t, e, i, n) {
				return of(this, t, e, i, n)
			},
			one: function (t, e, i, n) {
				return of(this, t, e, i, n, 1)
			},
			off: function (t, i, n) {
				var r, a;
				if (t && t[As] && t.handleObj) return r = t.handleObj, Zf(t.delegateTarget).off(r.namespace ? r.origType + ds + r.namespace : r.origType, r[wn], r.handler), this;
				if (e == typeof t) {
					for (a in t) this.off(a, i, t[a]);
					return this
				}
				return i !== !1 && k != typeof i || (n = i, i = void 0), n === !1 && (n = af), this.each(function () {
					Zf[Sr][gs](this, t, n, i)
				})
			},
			trigger: function (t, e) {
				return this.each(function () {
					Zf[Sr].trigger(t, e, this)
				})
			},
			triggerHandler: function (t, e) {
				var i = this[0];
				return i ? Zf[Sr].trigger(t, e, i, !0) : void 0
			}
		});
		var Nh = Co,
			Wh = new RegExp(wo + Hh + Po, Ot),
			Fh = Ao,
			Xh = Mo,
			Vh = xo,
			zh = Go,
			jh = Io,
			Uh = Jp(Vf),
			Yh = Uh[Fe](Vf[we](Pe));
		Zf[x]({
			htmlPrefilter: function (t) {
				return t[B](Fh, Lo)
			},
			clone: function (t, e, i) {
				var n, r, a, s, o, l = Zf[xi](t[ne], t);
				if (Qf.html5Clone || Zf.isXMLDoc(t) || !Wh[ue](On + t[j] + Wn) ? a = t[xa](!0) : (Yh[Ke] = t[Ga], Yh[Ae](a = Yh[Di])), !(Qf.noCloneEvent && Qf.noCloneChecked || 1 !== t[N] && 11 !== t[N] || Zf.isXMLDoc(t)))
					for (n = Zp(a), o = Zp(t), s = 0; null != (r = o[s]); ++s) n[s] && pf(r, n[s]);
				if (e)
					if (i)
						for (o = o || Zp(t), n = n || Zp(a), s = 0; null != (r = o[s]); s++) df(r, n[s]);
					else df(t, a);
				return n = Zp(a, rs), n[S] > 0 && tf(n, !l && Zp(t, rs)), n = o = r = null, a
			},
			cleanData: function (t, e) {
				for (var i, n, a, s, l = 0, u = Zf[jr], c = Zf.cache, d = Qf[Ne], p = Zf[Sr].special; null != (i = t[l]); l++)
					if ((e || Th(i)) && (a = i[u], s = a && c[a])) {
						if (s.events)
							for (n in s.events) p[n] ? Zf[Sr][gs](i, n) : Zf.removeEvent(i, n, s.handle);
						c[a] && (delete c[a], d || r == typeof i[Se] ? i[u] = void 0 : i[Se](u), Xf[o](a))
					}
			}
		}), Zf.fn[x]({
			domManip: ff,
			detach: function (t) {
				return hf(this, t, !0)
			},
			remove: function (t) {
				return hf(this, t)
			},
			text: function (t) {
				return Ah(this, function (t) {
					return void 0 === t ? Zf[Tn](this) : this[gn]()[Ro]((this[0] && this[0][ne] || Vf)[is](t))
				}, null, t, arguments[S])
			},
			append: function () {
				return ff(this, arguments, function (t) {
					if (1 === this[N] || 11 === this[N] || 9 === this[N]) {
						var e = lf(this, t);
						e[Fe](t)
					}
				})
			},
			prepend: function () {
				return ff(this, arguments, function (t) {
					if (1 === this[N] || 11 === this[N] || 9 === this[N]) {
						var e = lf(this, t);
						e[Oo](t, e[Di])
					}
				})
			},
			before: function () {
				return ff(this, arguments, function (t) {
					this[Te] && this[Te][Oo](t, this)
				})
			},
			after: function () {
				return ff(this, arguments, function (t) {
					this[Te] && this[Te][Oo](t, this[Ge])
				})
			},
			empty: function () {
				for (var t, e = 0; null != (t = this[e]); e++) {
					for (1 === t[N] && Zf.cleanData(Zp(t, !1)); t[Di];) t[Ae](t[Di]);
					t[No] && Zf[j](t, Pn) && (t[No][S] = 0)
				}
				return this
			},
			clone: function (t, e) {
				return t = null != t && t, e = null == e ? t : e, this[w](function () {
					return Zf[Do](this, t, e)
				})
			},
			html: function (t) {
				return Ah(this, function (t) {
					var e = this[0] || {},
						i = 0,
						n = this[S];
					if (void 0 === t) return 1 === e[N] ? e[Ke][B](Nh, T) : void 0;
					if (Y == typeof t && !Xh[ue](t) && (Qf.htmlSerialize || !Wh[ue](t)) && (Qf.leadingWhitespace || !Ih[ue](t)) && !$h[(xh[re](t) || [T, T])[1][U]()]) {
						t = Zf.htmlPrefilter(t);
						try {
							for (; n > i; i++) e = this[i] || {}, 1 === e[N] && (Zf.cleanData(Zp(e, !1)), e[Ke] = t);
							e = 0
						} catch (r) {}
					}
					e && this[gn]()[Ro](t)
				}, null, t, arguments[S])
			},
			replaceWith: function () {
				var t = [];
				return ff(this, arguments, function (e) {
					var i = this[Te];
					Zf.inArray(this, t) < 0 && (Zf.cleanData(Zp(this)), i && i[Wo](e, this))
				}, t)
			}
		}), Zf.each({
			appendTo: Ro,
			prependTo: Fo,
			insertBefore: Xo,
			insertAfter: Vo,
			replaceAll: zo
		}, function (t, e) {
			Zf.fn[t] = function (t) {
				for (var i, n = 0, r = [], a = Zf(t), s = a[S] - 1; s >= n; n++) i = n === s ? this : this[Do](!0), Zf(a[n])[e](i), Uf[P](r, i[Vn]());
				return this.pushStack(r)
			}
		});
		var Kh, qh = {
				HTML: jo,
				BODY: jo
			},
			_h = _o,
			Qh = new RegExp($t + yh + Qo, Ot),
			Jh = function (t, e, i, n) {
				var r, a, s = {};
				for (a in e) s[a] = t[Ir][a], t[Ir][a] = e[a];
				r = i[P](t, n || []);
				for (a in e) t[Ir][a] = s[a];
				return r
			},
			Zh = Vf[$e];
		! function () {
			function e() {
				var e, c, d = Vf[$e];
				d[Fe](l), u[Ir][Hr] = ol, i = r = o = !1, n = s = !0, t[ll] && (c = t[ll](u), i = ul !== (c || {})[De], o = cl === (c || {})[dl], r = pl === (c || {
					width: pl
				})[ta], u[Ir][fl] = hl, n = pl === (c || {
					marginRight: pl
				})[fl], e = u[Fe](Vf[we](Pe)), e[Ir][Hr] = u[Ir][Hr] = ml, e[Ir][fl] = e[Ir][ta] = yn, u[Ir][ta] = vl, s = !parseFloat((t[ll](e) || {})[fl]), u[Ae](e)), u[Ir][da] = ca, a = 0 === u[gl]()[S], a && (u[Ir][da] = T, u[Ke] = Tl, u[ie][0][Ir][bl] = Sl, e = u[oe](yl), e[0][Ir][Hr] = Cl, a = 0 === e[0][wl], a && (e[0][Ir][da] = T, e[1][Ir][da] = ca, a = 0 === e[0][wl])), d[Ae](l)
			}
			var i, n, r, a, s, o, l = Vf[we](Pe),
				u = Vf[we](Pe);
			u[Ir] && (u[Ir][Hr] = Jo, Qf[Zo] = tl === u[Ir][Zo], Qf[el] = !!u[Ir][el], u[Ir][il] = nl, u[xa](!0)[Ir][il] = T, Qf.clearCloneStyle = nl === u[Ir][il], l = Vf[we](Pe), l[Ir][Hr] = rl, u[Ke] = T, l[Fe](u), Qf[al] = T === u[Ir][al] || T === u[Ir][sl] || T === u[Ir].WebkitBoxSizing, Zf[x](Qf, {
				reliableHiddenOffsets: function () {
					return null == i && e(), a
				},
				boxSizingReliable: function () {
					return null == i && e(), r
				},
				pixelMarginRight: function () {
					return null == i && e(), n
				},
				pixelPosition: function () {
					return null == i && e(), i
				},
				reliableMarginRight: function () {
					return null == i && e(), s
				},
				reliableMarginLeft: function () {
					return null == i && e(), o
				}
			}))
		}();
		var tm, em, im = Pl;
		t[ll] ? (tm = function (e) {
			var i = e[ne][Be];
			return i && i[Al] || (i = t), i[ll](e)
		}, em = function (t, e, i) {
			var n, r, a, s, o = t[Ir];
			return i = i || tm(t), s = i ? i[Ml](e) || i[e] : void 0, T !== s && void 0 !== s || Zf[xi](t[ne], t) || (s = Zf[Ir](t, e)), i && !Qf.pixelMarginRight() && Qh[ue](s) && _h[ue](e) && (n = o[ta], r = o[xl], a = o[Gl], o[xl] = o[Gl] = o[ta] = s, s = i[ta], o[ta] = n, o[xl] = r, o[Gl] = a), void 0 === s ? s : s + T
		}) : Zh[Il] && (tm = function (t) {
			return t[Il]
		}, em = function (t, e, i) {
			var n, r, a, s, o = t[Ir];
			return i = i || tm(t), s = i ? i[e] : void 0, null == s && o && o[e] && (s = o[e]), Qh[ue](s) && !im[ue](e) && (n = o[xr], r = t[Hl], a = r && r[xr], a && (r[xr] = t[Il][xr]), o[xr] = $l === e ? El : s, s = o[Bl] + pa, o[xr] = n, a && (r[xr] = a)), void 0 === s ? s : s + T || Dl
		});
		var nm = kl,
			rm = Ll,
			am = Rl,
			sm = new RegExp($t + yh + Ol, Ot),
			om = {
				position: Nl,
				visibility: ci,
				display: jo
			},
			lm = {
				letterSpacing: yn,
				fontWeight: Wl
			},
			um = [Fl, Xl, Vl, zl],
			cm = Vf[we](Pe)[Ir];
		Zf[x]({
			cssHooks: {
				opacity: {
					get: function (t, e) {
						if (e) {
							var i = em(t, Zo);
							return T === i ? Jl : i
						}
					}
				}
			},
			cssNumber: {
				animationIterationCount: !0,
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				"float": Qf[el] ? el : Zl
			},
			style: function (t, e, i, n) {
				if (t && 3 !== t[N] && 8 !== t[N] && t[Ir]) {
					var r, a, s, o = Zf.camelCase(e),
						u = t[Ir];
					if (e = Zf.cssProps[o] || (Zf.cssProps[o] = Tf(o) || o), s = Zf.cssHooks[e] || Zf.cssHooks[o], void 0 === i) return s && Vn in s && void 0 !== (r = s[Vn](t, !1, n)) ? r : u[e];
					if (a = typeof i, Y === a && (r = Ch[re](i)) && r[1] && (i = Qp(t, e, r), a = et), null != i && i === i && (et === a && (i += r && r[3] || (Zf.cssNumber[o] ? T : pa)), Qf.clearCloneStyle || T !== i || 0 !== e[l](tu) || (u[e] = eu), !(s && iu in s && void 0 === (i = s[iu](t, i, n))))) try {
						u[e] = i
					} catch (c) {}
				}
			},
			css: function (t, e, i, n) {
				var r, a, s, o = Zf.camelCase(e);
				return e = Zf.cssProps[o] || (Zf.cssProps[o] = Tf(o) || o), s = Zf.cssHooks[e] || Zf.cssHooks[o], s && Vn in s && (a = s[Vn](t, !0, i)), void 0 === a && (a = em(t, e, n)), nu === a && e in lm && (a = lm[e]), T === i || i ? (r = parseFloat(a), i === !0 || isFinite(r) ? r || 0 : a) : a
			}
		}), Zf.each([ru, ta], function (t, e) {
			Zf.cssHooks[e] = {
				get: function (t, i, n) {
					return i ? am[ue](Zf.css(t, da)) && 0 === t[Dr] ? Jh(t, om, function () {
						return Cf(t, e, n)
					}) : Cf(t, e, n) : void 0
				},
				set: function (t, i, n) {
					var r = n && tm(t);
					return Sf(t, i, n ? yf(t, e, n, Qf[al] && Ql === Zf.css(t, al, !1, r), r) : 0)
				}
			}
		}), Qf[Zo] || (Zf.cssHooks[Zo] = {
			get: function (t, e) {
				return rm[ue]((e && t[Il] ? t[Il][je] : t[Ir][je]) || T) ? .01 * parseFloat(RegExp.$1) + T : e ? Jl : T
			},
			set: function (t, e) {
				var i = t[Ir],
					n = t[Il],
					r = Zf.isNumeric(e) ? au + 100 * e + At : T,
					a = n && n[je] || i[je] || T;
				i[Er] = 1, (e >= 1 || T === e) && T === Zf[F](a[B](nm, T)) && i[Se] && (i[Se](je), T === e || n && !n[je]) || (i[je] = nm[ue](a) ? a[B](nm, r) : a + J + r)
			}
		}), Zf.cssHooks[fl] = gf(Qf.reliableMarginRight, function (t, e) {
			return e ? Jh(t, {
				display: su
			}, em, [t, fl]) : void 0
		}), Zf.cssHooks[dl] = gf(Qf.reliableMarginLeft, function (t, e) {
			return e ? (parseFloat(em(t, dl)) || (Zf[xi](t[ne], t) ? t[ou]()[xr] - Jh(t, {
				marginLeft: 0
			}, function () {
				return t[ou]()[xr]
			}) : 0)) + pa : void 0
		}), Zf.each({
			margin: T,
			padding: T,
			border: _l
		}, function (t, e) {
			Zf.cssHooks[t + e] = {
				expand: function (i) {
					for (var n = 0, r = {}, a = Y == typeof i ? i[Q](J) : [i]; 4 > n; n++) r[t + wh[n] + e] = a[n] || a[n - 2] || a[0];
					return r
				}
			}, _h[ue](t) || (Zf.cssHooks[t + e][iu] = Sf)
		}), Zf.fn[x]({
			css: function (t, e) {
				return Ah(this, function (t, e, i) {
					var n, r, a = {},
						s = 0;
					if (Zf[I](e)) {
						for (n = tm(t), r = e[S]; r > s; s++) a[e[s]] = Zf.css(t, e[s], !1, n);
						return a
					}
					return void 0 !== i ? Zf[Ir](t, e, i) : Zf.css(t, e)
				}, t, e, arguments[S] > 1)
			},
			show: function () {
				return bf(this, !0)
			},
			hide: function () {
				return bf(this)
			},
			toggle: function (t) {
				return G == typeof t ? t ? this[lu]() : this[uu]() : this.each(function () {
					Ph(this) ? Zf(this)[lu]() : Zf(this)[uu]()
				})
			}
		}), Zf.Tween = wf, wf[g] = {
			constructor: wf,
			init: function (t, e, i, n, r, a) {
				this.elem = t, this.prop = i, this.easing = r || Zf.easing.d, this[No] = e, this[ha] = this[io] = this.cur(), this[ma] = n, this.unit = a || (Zf.cssNumber[i] ? T : pa)
			},
			cur: function () {
				var t = wf.propHooks[this.prop];
				return t && t[Vn] ? t[Vn](this) : wf.propHooks.d[Vn](this)
			},
			run: function (t) {
				var e, i = wf.propHooks[this.prop];
				return this[No][cu] ? this.pos = e = Zf.easing[this.easing](t, this[No][cu] * t, 0, 1, this[No][cu]) : this.pos = e = t, this[io] = (this[ma] - this[ha]) * e + this[ha], this[No][du] && this[No][du][b](this.elem, this[io], this), i && i[iu] ? i[iu](this) : wf.propHooks.d[iu](this), this
			}
		}, wf[g][p][g] = wf[g], wf.propHooks = {
			d: {
				get: function (t) {
					var e;
					return 1 !== t.elem[N] || null != t.elem[t.prop] && null == t.elem[Ir][t.prop] ? t.elem[t.prop] : (e = Zf.css(t.elem, t.prop, T), e && Dl !== e ? e : 0)
				},
				set: function (t) {
					Zf[Kr][du][t.prop] ? Zf[Kr][du][t.prop](t) : 1 !== t.elem[N] || null == t.elem[Ir][Zf.cssProps[t.prop]] && !Zf.cssHooks[t.prop] ? t.elem[t.prop] = t[io] : Zf[Ir](t.elem, t.prop, t[io] + t.unit)
				}
			}
		}, wf.propHooks[zs] = wf.propHooks[Ws] = {
			set: function (t) {
				t.elem[N] && t.elem[Te] && (t.elem[t.prop] = t[io])
			}
		}, Zf.easing = {
			linear: function (t) {
				return t
			},
			swing: function (t) {
				return .5 - Math[pu](t * Math[fu]) / 2
			},
			d: hu
		}, Zf[Kr] = wf[g][p], Zf[Kr][du] = {};
		var dm, pm, fm = mu,
			hm = vu;
		Zf.Animation = Zf[x](If, {
			tweeners: {
				"*": [
					function (t, e) {
						var i = this.createTween(t, e);
						return Qp(i.elem, t, Ch[re](e), i), i
					}
				]
			},
			tweener: function (t, e) {
				Zf.isFunction(t) ? (e = t, t = [wt]) : t = t[Bn](mh);
				for (var i, n = 0, r = t[S]; r > n; n++) i = t[n], If.tweeners[i] = If.tweeners[i] || [], If.tweeners[i][Gi](e)
			},
			prefilters: [xf],
			prefilter: function (t, e) {
				e ? If.prefilters[Gi](t) : If.prefilters[o](t)
			}
		}), Zf[Mu] = function (t, i, n) {
			var r = t && e == typeof t ? Zf[x]({}, t) : {
				complete: n || !n && i || Zf.isFunction(t) && t,
				duration: t,
				easing: n && i || i && !Zf.isFunction(i) && i
			};
			return r[cu] = Zf[Kr].off ? 0 : et == typeof r[cu] ? r[cu] : r[cu] in Zf[Kr].speeds ? Zf[Kr].speeds[r[cu]] : Zf[Kr].speeds.d, null != r.queue && r.queue !== !0 || (r.queue = Kr), r.old = r[yr], r[yr] = function () {
				Zf.isFunction(r.old) && r.old[b](this), r.queue && Zf.dequeue(this, r.queue)
			}, r
		}, Zf.fn[x]({
			fadeTo: function (t, e, i, n) {
				return this[je](Ph).css(Zo, 0)[lu]()[ma]()[xu]({
					opacity: e
				}, t, i, n)
			},
			animate: function (t, e, i, n) {
				var r = Zf.isEmptyObject(t),
					a = Zf[Mu](e, i, n),
					s = function () {
						var e = If(this, Zf[x]({}, t), a);
						(r || Zf.a(this, Gu)) && e[Qr](!0)
					};
				return s[Gu] = s, r || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
			},
			stop: function (t, e, i) {
				var n = function (t) {
					var e = t[Qr];
					delete t[Qr], e(i)
				};
				return Y != typeof t && (i = e, e = t, t = void 0), e && t !== !1 && this.queue(t || Kr, []), this.each(function () {
					var e = !0,
						r = null != t && t + Jr,
						a = Zf.timers,
						s = Zf.a(this);
					if (r) s[r] && s[r][Qr] && n(s[r]);
					else
						for (r in s) s[r] && s[r][Qr] && hm[ue](r) && n(s[r]);
					for (r = a[S]; r--;) a[r].elem !== this || null != t && a[r].queue !== t || (a[r].anim[Qr](i), e = !1, a[M](r, 1));
					!e && i || Zf.dequeue(this, t)
				})
			},
			finish: function (t) {
				return t !== !1 && (t = t || Kr), this.each(function () {
					var e, i = Zf.a(this),
						n = i[t + qr],
						r = i[t + Jr],
						a = Zf.timers,
						s = n ? n[S] : 0;
					for (i[Gu] = !0, Zf.queue(this, t, []), r && r[Qr] && r[Qr][b](this, !0), e = a[S]; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim[Qr](!0), a[M](e, 1));
					for (e = 0; s > e; e++) n[e] && n[e][Gu] && n[e][Gu][b](this);
					delete i[Gu]
				})
			}
		}), Zf.each([wu, lu, uu], function (t, e) {
			var i = Zf.fn[e];
			Zf.fn[e] = function (t, n, r) {
				return null == t || G == typeof t ? i[P](this, arguments) : this[xu](Af(e, !0), t, n, r)
			}
		}), Zf.each({
			slideDown: Af(lu),
			slideUp: Af(uu),
			slideToggle: Af(wu),
			fadeIn: {
				opacity: lu
			},
			fadeOut: {
				opacity: uu
			},
			fadeToggle: {
				opacity: wu
			}
		}, function (t, e) {
			Zf.fn[t] = function (t, i, n) {
				return this[xu](e, t, i, n)
			}
		}), Zf.timers = [], Zf[Kr].tick = function () {
			var t, e = Zf.timers,
				i = 0;
			for (dm = Zf[io](); i < e[S]; i++) t = e[i], t() || e[i] !== t || e[M](i--, 1);
			e[S] || Zf[Kr][Qr](), dm = void 0
		}, Zf[Kr].timer = function (t) {
			Zf.timers[o](t), t() ? Zf[Kr][ha]() : Zf.timers[nt]()
		}, Zf[Kr][Iu] = 13, Zf[Kr][ha] = function () {
			pm || (pm = t[Hu](Zf[Kr].tick, Zf[Kr][Iu]))
		}, Zf[Kr][Qr] = function () {
			t[$u](pm), pm = null
		}, Zf[Kr].speeds = {
			slow: 600,
			fast: 200,
			d: 400
		}, Zf.fn.delay = function (e, i) {
			return e = Zf[Kr] ? Zf[Kr].speeds[e] || e : e, i = i || Kr, this.queue(i, function (i, n) {
				var r = t[Ar](i, e);
				n[Qr] = function () {
					t[Eu](r)
				}
			})
		},
		function () {
			var t, e = Vf[we](Ie),
				i = Vf[we](Pe),
				n = Vf[we](Pn),
				r = n[Fe](Vf[we](hn));
			i = Vf[we](Pe), i[pe](We, Ea), i[Ke] = Ca, t = i[oe](Js)[0], e[pe](L, Ia), i[Fe](e), t = i[oe](Js)[0], t[Ir][Hr] = Bu, Qf.getSetAttribute = Ea !== i[We], Qf[Ir] = Du[ue](t[ce](Ir)), Qf.hrefNormalized = ku === t[ce](cn), Qf.checkOn = !!e[Ye], Qf.optSelected = r[mn], Qf[Lu] = !!Vf[we](co)[Lu], n[pn] = !0, Qf.optDisabled = !r[pn], e = Vf[we](Ie), e[pe](Ye, T), Qf[Ie] = T === e[ce](Ye), e[Ye] = Ea, e[pe](L, $a), Qf.radioValue = Ea === e[Ye]
		}();
		var mm = Ru,
			vm = Ou;
		Zf.fn[x]({
			val: function (t) {
				var e, i, n, r = this[0];
				return arguments[S] ? (n = Zf.isFunction(t), this.each(function (i) {
					var r;
					1 === this[N] && (r = n ? t[b](this, i, Zf(this).val()) : t, null == r ? r = T : et == typeof r ? r += T : Zf[I](r) && (r = Zf[w](r, function (t) {
						return null == t ? T : t + T
					})), e = Zf.valHooks[this[L]] || Zf.valHooks[this[j][U]()], e && iu in e && void 0 !== e[iu](this, r, Ye) || (this[Ye] = r))
				})) : r ? (e = Zf.valHooks[r[L]] || Zf.valHooks[r[j][U]()], e && Vn in e && void 0 !== (i = e[Vn](r, Ye)) ? i : (i = r[Ye], Y == typeof i ? i[B](mm, T) : null == i ? T : i)) : void 0
			}
		}), Zf[x]({
			valHooks: {
				option: {
					get: function (t) {
						var e = Zf[ze].attr(t, Ye);
						return null != e ? e : Zf[F](Zf[Tn](t))[B](vm, J)
					}
				},
				select: {
					get: function (t) {
						for (var e, i, n = t[No], r = t[vn], a = Nu === t[L] || 0 > r, s = a ? null : [], l = a ? r + 1 : n[S], u = 0 > r ? l : a ? r : 0; l > u; u++)
							if (i = n[u], (i[mn] || u === r) && (Qf.optDisabled ? !i[pn] : null === i[ce](pn)) && (!i[Te][pn] || !Zf[j](i[Te], Wu))) {
								if (e = Zf(i).val(), a) return e;
								s[o](e)
							}
						return s
					},
					set: function (t, e) {
						for (var i, n, r = t[No], a = Zf.makeArray(e), s = r[S]; s--;)
							if (n = r[s], Zf.inArray(Zf.valHooks.option[Vn](n), a) > -1) try {
								n[mn] = i = !0
							} catch (o) {
								n[Fu]
							} else n[mn] = !1;
						return i || (t[vn] = -1), r
					}
				}
			}
		}), Zf.each([$a, Ia], function () {
			Zf.valHooks[this] = {
				set: function (t, e) {
					return Zf[I](e) ? t[fn] = Zf.inArray(Zf(t).val(), e) > -1 : void 0
				}
			}, Qf.checkOn || (Zf.valHooks[this][Vn] = function (t) {
				return null === t[ce](Ye) ? as : t[Ye]
			})
		});
		var gm, Tm, bm = Zf.expr.attrHandle,
			Sm = Xu,
			ym = Qf.getSetAttribute,
			Cm = Qf[Ie];
		Zf.fn[x]({
			attr: function (t, e) {
				return Ah(this, Zf.attr, t, e, arguments[S] > 1)
			},
			removeAttr: function (t) {
				return this.each(function () {
					Zf.removeAttr(this, t)
				})
			}
		}), Zf[x]({
			attr: function (t, e, i) {
				var n, a, s = t[N];
				if (3 !== s && 8 !== s && 2 !== s) return r == typeof t[ce] ? Zf.prop(t, e, i) : (1 === s && Zf.isXMLDoc(t) || (e = e[U](), a = Zf.attrHooks[e] || (Zf.expr[Bn].bool[ue](e) ? Tm : gm)), void 0 !== i ? null === i ? void Zf.removeAttr(t, e) : a && iu in a && void 0 !== (n = a[iu](t, i, e)) ? n : (t[pe](e, i + T), i) : a && Vn in a && null !== (n = a[Vn](t, e)) ? n : (n = Zf[ze].attr(t, e), null == n ? void 0 : n))
			},
			attrHooks: {
				type: {
					set: function (t, e) {
						if (!Qf.radioValue && $a === e && Zf[j](t, Ie)) {
							var i = t[Ye];
							return t[pe](L, e), i && (t[Ye] = i), e
						}
					}
				}
			},
			removeAttr: function (t, e) {
				var i, n, r = 0,
					a = e && e[Bn](mh);
				if (a && 1 === t[N])
					for (; i = a[r++];) n = Zf.propFix[i] || i, Zf.expr[Bn].bool[ue](i) ? Cm && ym || !Sm[ue](i) ? t[n] = !1 : t[Zf.camelCase(Vu + i)] = t[n] = !1 : Zf.attr(t, i, T), t[Se](ym ? i : n)
			}
		}), Tm = {
			set: function (t, e, i) {
				return e === !1 ? Zf.removeAttr(t, i) : Cm && ym || !Sm[ue](i) ? t[pe](!ym && Zf.propFix[i] || i, i) : t[Zf.camelCase(Vu + i)] = t[i] = !0, i
			}
		}, Zf.each(Zf.expr[Bn].bool[na][Bn](zu), function (t, e) {
			var i = bm[e] || Zf[ze].attr;
			Cm && ym || !Sm[ue](e) ? bm[e] = function (t, e, n) {
				var r, a;
				return n || (a = bm[e], bm[e] = r, r = null != i(t, e, n) ? e[U]() : null, bm[e] = a), r
			} : bm[e] = function (t, e, i) {
				return i ? void 0 : t[Zf.camelCase(Vu + e)] ? e[U]() : null
			}
		}), Cm && ym || (Zf.attrHooks[Ye] = {
			set: function (t, e, i) {
				return Zf[j](t, Ie) ? void(t[In] = e) : gm && gm[iu](t, e, i)
			}
		}), ym || (gm = {
			set: function (t, e, i) {
				var n = t[Ue](i);
				return n || t[ju](n = t[ne][Uu](i)), n[Ye] = e += T, Ye === i || e === t[ce](i) ? e : void 0
			}
		}, bm[se] = bm[di] = bm[Yu] = function (t, e, i) {
			var n;
			return i ? void 0 : (n = t[Ue](e)) && T !== n[Ye] ? n[Ye] : null
		}, Zf.valHooks[He] = {
			get: function (t, e) {
				var i = t[Ue](e);
				return i && i[Hi] ? i[Ye] : void 0
			},
			set: gm[iu]
		}, Zf.attrHooks.contenteditable = {
			set: function (t, e, i) {
				gm[iu](t, T !== e && e, i)
			}
		}, Zf.each([ta, ru], function (t, e) {
			Zf.attrHooks[e] = {
				set: function (t, i) {
					return T === i ? (t[pe](e, Dl), i) : void 0
				}
			}
		})), Qf[Ir] || (Zf.attrHooks[Ir] = {
			get: function (t) {
				return t[Ir][Hr] || void 0
			},
			set: function (t, e) {
				return t[Ir][Hr] = e + T
			}
		});
		var wm = Ku,
			Pm = qu;
		Zf.fn[x]({
			prop: function (t, e) {
				return Ah(this, Zf.prop, t, e, arguments[S] > 1)
			},
			removeProp: function (t) {
				return t = Zf.propFix[t] || t, this.each(function () {
					try {
						this[t] = void 0, delete this[t]
					} catch (e) {}
				})
			}
		}), Zf[x]({
			prop: function (t, e, i) {
				var n, r, a = t[N];
				if (3 !== a && 8 !== a && 2 !== a) return 1 === a && Zf.isXMLDoc(t) || (e = Zf.propFix[e] || e, r = Zf.propHooks[e]), void 0 !== i ? r && iu in r && void 0 !== (n = r[iu](t, i, e)) ? n : t[e] = i : r && Vn in r && null !== (n = r[Vn](t, e)) ? n : t[e]
			},
			propHooks: {
				tabIndex: {
					get: function (t) {
						var e = Zf[ze].attr(t, _u);
						return e ? parseInt(e, 10) : wm[ue](t[j]) || Pm[ue](t[j]) && t[cn] ? 0 : -1
					}
				}
			},
			propFix: {
				"for": Qu,
				"class": We
			}
		}), Qf.hrefNormalized || Zf.each([cn, ko], function (t, e) {
			Zf.propHooks[e] = {
				get: function (t) {
					return t[ce](e, 4)
				}
			}
		}), Qf.optSelected || (Zf.propHooks[mn] = {
			get: function (t) {
				var e = t[Te];
				return e && (e[vn], e[Te] && e[Te][vn]), null
			},
			set: function (t) {
				var e = t[Te];
				e && (e[vn], e[Te] && e[Te][vn])
			}
		}), Zf.each([dn, Ju, Zu, tc, ec, ic, nc, rc, ac, sc], function () {
			Zf.propFix[this[U]()] = this
		}), Qf[Lu] || (Zf.propFix[Lu] = oc);
		var Am = lc;
		Zf.fn[x]({
			addClass: function (t) {
				var e, i, n, r, a, s, o, u = 0;
				if (Zf.isFunction(t)) return this.each(function (e) {
					Zf(this).addClass(t[b](this, e, Hf(this)))
				});
				if (Y == typeof t && t)
					for (e = t[Bn](mh) || []; i = this[u++];)
						if (r = Hf(i), n = 1 === i[N] && (J + r + J)[B](Am, J)) {
							for (s = 0; a = e[s++];) n[l](J + a + J) < 0 && (n += a + J);
							o = Zf[F](n), r !== o && Zf.attr(i, Vi, o)
						}
				return this
			},
			removeClass: function (t) {
				var e, i, n, r, a, s, o, u = 0;
				if (Zf.isFunction(t)) return this.each(function (e) {
					Zf(this).removeClass(t[b](this, e, Hf(this)))
				});
				if (!arguments[S]) return this.attr(Vi, T);
				if (Y == typeof t && t)
					for (e = t[Bn](mh) || []; i = this[u++];)
						if (r = Hf(i), n = 1 === i[N] && (J + r + J)[B](Am, J)) {
							for (s = 0; a = e[s++];)
								for (; n[l](J + a + J) > -1;) n = n[B](J + a + J, J);
							o = Zf[F](n), r !== o && Zf.attr(i, Vi, o)
						}
				return this
			},
			toggleClass: function (t, e) {
				var i = typeof t;
				return G == typeof e && Y === i ? e ? this.addClass(t) : this.removeClass(t) : Zf.isFunction(t) ? this.each(function (i) {
					Zf(this).toggleClass(t[b](this, i, Hf(this), e), e)
				}) : this.each(function () {
					var e, n, r, a;
					if (Y === i)
						for (n = 0, r = Zf(this), a = t[Bn](mh) || []; e = a[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
					else void 0 !== t && G !== i || (e = Hf(this), e && Zf.a(this, uc, e), Zf.attr(this, Vi, e || t === !1 ? T : Zf.a(this, uc) || T))
				})
			},
			hasClass: function (t) {
				var e, i, n = 0;
				for (e = J + t + J; i = this[n++];)
					if (1 === i[N] && (J + Hf(i) + J)[B](Am, J)[l](e) > -1) return !0;
				return !1
			}
		}), Zf.each(cc[Q](J), function (t, e) {
			Zf.fn[e] = function (t, i) {
				return arguments[S] > 0 ? this.on(e, null, t, i) : this.trigger(e)
			}
		}), Zf.fn[x]({
			hover: function (t, e) {
				return this.mouseenter(t).mouseleave(e || t)
			}
		});
		var Mm = t[sn],
			xm = Zf[io](),
			Gm = dc,
			Im = pc;
		Zf.parseJSON = function (e) {
			if (t[fc] && t[fc][hc]) return t[fc][hc](e + T);
			var i, n = null,
				r = Zf[F](e + T);
			return r && !Zf[F](r[B](Im, function (t, e, r, a) {
				return i && e && (n = 0), 0 === n ? t : (i = r || e, n += !a - !r, T)
			})) ? Function(mc + r)() : Zf[$i](vc + e)
		}, Zf.parseXML = function (e) {
			var i, n;
			if (!e || Y != typeof e) return null;
			try {
				t[gc] ? (n = new t[gc], i = n[Tc](e, bc)) : (i = new t.ActiveXObject(Sc), i[yc] = Fr, i.loadXML(e))
			} catch (r) {
				i = void 0
			}
			return i && i[$e] && !i[oe](Cc)[S] || Zf[$i](wc + e), i
		};
		var Hm = Pc,
			$m = Ac,
			Em = Mc,
			Bm = xc,
			Dm = Gc,
			km = Ic,
			Lm = Hc,
			Rm = {},
			Om = {},
			Nm = $c[s](wt),
			Wm = Mm[cn],
			Fm = Lm[re](Wm[U]()) || [];
		Zf[x]({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Wm,
				type: Wc,
				isLocal: Bm[ue](Fm[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: Fc,
				accepts: {
					"*": Nm,
					text: Xc,
					html: Vc,
					xml: zc,
					json: jc
				},
				contents: {
					xml: Uc,
					html: Yc,
					json: Kc
				},
				responseFields: {
					xml: qc,
					text: _c,
					json: Qc
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": Zf.parseJSON,
					"text xml": Zf.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (t, e) {
				return e ? Bf(Bf(t, Zf.ajaxSettings), e) : Bf(Zf.ajaxSettings, t)
			},
			ajaxPrefilter: $f(Rm),
			ajaxTransport: $f(Om),
			ajax: function (i, n) {
				function r(e, i, n, r) {
					var a, s, p, v, b, C = i;
					2 !== A && (A = 2, u && t[Eu](u), d = void 0, l = r || T, x[Cr] = e > 0 ? 4 : 0, a = e >= 200 && 300 > e || 304 === e, n && (v = Df(f, x, n)), v = kf(f, v, x, a), a ? (f.ifModified && (b = x[Bc](Md), b && (Zf[fd][o] = b), b = x[Bc](xd), b && (Zf.etag[o] = b)), 204 === e || Gd === f[L] ? C = Id : 304 === e ? C = Hd : (C = v[$d], s = v[Vr], p = v[$i], a = !p)) : (p = C, !e && C || (C = $i, 0 > e && (e = 0))), x[Zc] = e, x[Ed] = (i || C) + T, a ? g.resolveWith(h, [s, C, x]) : g.rejectWith(h, [x, C, p]), x.statusCode(y), y = void 0, c && m.trigger(a ? Bd : Dd, [x, f, a ? s : p]), S.fireWith(h, [x, C]), c && (m.trigger(kd, [x, f]), --Zf[od] || Zf[Sr].trigger(Ld)))
				}
				e == typeof i && (n = i, i = void 0), n = n || {};
				var a, s, o, l, u, c, d, p, f = Zf.ajaxSetup({}, n),
					h = f[C] || f,
					m = f[C] && (h[N] || h.jquery) ? Zf(h) : Zf[Sr],
					g = Zf.Deferred(),
					S = Zf.Callbacks(ir),
					y = f.statusCode || {},
					w = {},
					P = {},
					A = 0,
					M = Jc,
					x = {
						readyState: 0,
						getResponseHeader: function (t) {
							var e;
							if (2 === A) {
								if (!p)
									for (p = {}; e = Em[re](l);) p[e[1][U]()] = e[2];
								e = p[t[U]()]
							}
							return null == e ? null : e
						},
						getAllResponseHeaders: function () {
							return 2 === A ? l : null
						},
						setRequestHeader: function (t, e) {
							var i = t[U]();
							return A || (t = P[i] = P[i] || t, w[t] = e), this
						},
						overrideMimeType: function (t) {
							return A || (f[Ec] = t), this
						},
						statusCode: function (t) {
							var e;
							if (t)
								if (2 > A)
									for (e in t) y[e] = [y[e], t[e]];
								else x.always(t[x[Zc]]);
							return this
						},
						abort: function (t) {
							var e = t || M;
							return d && d[td](e), r(0, e), this
						}
					};
				if (g.promise(x)[yr] = S[zn], x.success = x[er], x[$i] = x.fail, f[ed] = ((i || f[ed] || Wm) + T)[B](Hm, T)[B](km, Fm[1] + id), f[L] = n[nd] || n[L] || f[nd] || f[L], f.dataTypes = Zf[F](f.dataType || wt)[U]()[Bn](mh) || [T], null == f.crossDomain && (a = Lm[re](f[ed][U]()), f.crossDomain = !(!a || a[1] === Fm[1] && a[2] === Fm[2] && (a[3] || (rd === a[1] ? ad : sd)) === (Fm[3] || (rd === Fm[1] ? ad : sd)))), f[Vr] && f.processData && Y != typeof f[Vr] && (f[Vr] = Zf.param(f[Vr], f.traditional)), Ef(Rm, f, n, x), 2 === A) return x;
				c = Zf[Sr] && f[ps], c && 0 === Zf[od]++ && Zf[Sr].trigger(ld), f[L] = f[L][v](), f.hasContent = !Dm[ue](f[L]), o = f[ed], f.hasContent || (f[Vr] && (o = f[ed] += (Gm[ue](o) ? ud : cd) + f[Vr], delete f[Vr]), f.cache === !1 && (f[ed] = $m[ue](o) ? o[B]($m, dd + xm++) : o + (Gm[ue](o) ? ud : cd) + pd + xm++)), f.ifModified && (Zf[fd][o] && x[hd](md, Zf[fd][o]), Zf.etag[o] && x[hd](vd, Zf.etag[o])), (f[Vr] && f.hasContent && f[gd] !== !1 || n[gd]) && x[hd](Dc, f[gd]), x[hd](Td, f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (wt !== f.dataTypes[0] ? bd + Nm + Sd : T) : f.accepts[wt]);
				for (s in f[yd]) x[hd](s, f[yd][s]);
				if (f.beforeSend && (f.beforeSend[b](h, x, f) === !1 || 2 === A)) return x[td]();
				M = td;
				for (s in {
					success: 1,
					error: 1,
					complete: 1
				}) x[s](f[s]);
				if (d = Ef(Om, f, n, x)) {
					if (x[Cr] = 1, c && m.trigger(Cd, [x, f]), 2 === A) return x;
					f[yc] && f[wd] > 0 && (u = t[Ar](function () {
						x[td](wd)
					}, f[wd]));
					try {
						A = 1, d[Pd](w, r)
					} catch (G) {
						if (!(2 > A)) throw G;
						r(-1, G)
					}
				} else r(-1, Ad);
				return x
			},
			getJSON: function (t, e, i) {
				return Zf[Vn](t, e, i, Rd)
			},
			getScript: function (t, e) {
				return Zf[Vn](t, void 0, e, rs)
			}
		}), Zf.each([Vn, Od], function (t, e) {
			Zf[e] = function (t, i, n, r) {
				return Zf.isFunction(i) && (r = r || n, n = i, i = void 0), Zf.ajax(Zf[x]({
					url: t,
					type: e,
					dataType: r,
					data: i,
					success: n
				}, Zf.isPlainObject(t) && t))
			}
		}), Zf.f = function (t) {
			return Zf.ajax({
				url: t,
				type: Wc,
				dataType: rs,
				cache: !0,
				async: !1,
				global: !1,
				"throws": !0
			})
		}, Zf.fn[x]({
			wrapAll: function (t) {
				if (Zf.isFunction(t)) return this.each(function (e) {
					Zf(this).wrapAll(t[b](this, e))
				});
				if (this[0]) {
					var e = Zf(t, this[0][ne]).eq(0)[Do](!0);
					this[0][Te] && e[Oo](this[0]), e[w](function () {
						for (var t = this; t[Di] && 1 === t[Di][N];) t = t[Di];
						return t
					})[Ro](this)
				}
				return this
			},
			wrapInner: function (t) {
				return Zf.isFunction(t) ? this.each(function (e) {
					Zf(this).wrapInner(t[b](this, e))
				}) : this.each(function () {
					var e = Zf(this),
						i = e.contents();
					i[S] ? i.wrapAll(t) : e[Ro](t)
				})
			},
			wrap: function (t) {
				var e = Zf.isFunction(t);
				return this.each(function (i) {
					Zf(this).wrapAll(e ? t[b](this, i) : t)
				})
			},
			unwrap: function () {
				return this[Nd]().each(function () {
					Zf[j](this, Gr) || Zf(this).replaceWith(this[ie])
				})[ma]()
			}
		}), Zf.expr[bn][ci] = function (t) {
			return Qf.reliableHiddenOffsets() ? t[Dr] <= 0 && t[wl] <= 0 && !t[gl]()[S] : Rf(t)
		}, Zf.expr[bn][Wd] = function (t) {
			return !Zf.expr[bn][ci](t)
		};
		var Xm = Fd,
			Vm = Xd,
			zm = Vd,
			jm = zd,
			Um = jd;
		Zf.param = function (t, e) {
			var i, n = [],
				r = function (t, e) {
					e = Zf.isFunction(e) ? e() : null == e ? T : e, n[n[S]] = encodeURIComponent(t) + Mt + encodeURIComponent(e)
				};
			if (void 0 === e && (e = Zf.ajaxSettings && Zf.ajaxSettings.traditional), Zf[I](t) || t.jquery && !Zf.isPlainObject(t)) Zf.each(t, function () {
				r(this[di], this[Ye])
			});
			else
				for (i in t) Of(i, t[i], e, r);
			return n[ve](ud)[B](Xm, gt)
		}, Zf.fn[x]({
			serialize: function () {
				return Zf.param(this.serializeArray())
			},
			serializeArray: function () {
				return this[w](function () {
					var t = Zf.prop(this, Yd);
					return t ? Zf.makeArray(t) : this
				})[je](function () {
					var t = this[L];
					return this[di] && !Zf(this)[En](vi) && Um[ue](this[j]) && !jm[ue](t) && (this[fn] || !Mh[ue](t))
				})[w](function (t, e) {
					var i = Zf(this).val();
					return null == i ? null : Zf[I](i) ? Zf[w](i, function (t) {
						return {
							name: e[di],
							value: t[B](zm, Kd)
						}
					}) : {
						name: e[di],
						value: i[B](zm, Kd)
					}
				})[Vn]()
			}
		}), Zf.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
			return this.isLocal ? Wf() : Vf[qd] > 8 ? Nf() : _d[ue](this[L]) && Nf() || Wf()
		} : Nf;
		var Ym = 0,
			Km = {},
			qm = Zf.ajaxSettings.xhr();
		t[Re] && t[Re](Oe, function () {
			for (var t in Km) Km[t](void 0, !0)
		}), Qf.cors = !!qm && Qd in qm, qm = Qf.ajax = !!qm, qm && Zf.ajaxTransport(function (e) {
			if (!e.crossDomain || Qf.cors) {
				var i;
				return {
					send: function (n, r) {
						var a, s = e.xhr(),
							o = ++Ym;
						if (s[Jd](e[L], e[ed], e[yc], e[Zd], e[tp]), e.xhrFields)
							for (a in e.xhrFields) s[a] = e.xhrFields[a];
						e[Ec] && s[ep] && s[ep](e[Ec]), e.crossDomain || n[ip] || (n[ip] = np);
						for (a in n) void 0 !== n[a] && s[hd](a, n[a] + T);
						s[Pd](e.hasContent && e[Vr] || null), i = function (t, n) {
							var a, l, u;
							if (i && (n || 4 === s[Cr]))
								if (delete Km[o], i = void 0, s[Tr] = Zf.noop, n) 4 !== s[Cr] && s[td]();
								else {
									u = {}, a = s[Zc], Y == typeof s[_c] && (u[Tn] = s[_c]);
									try {
										l = s[Ed]
									} catch (c) {
										l = T
									}
									a || !e.isLocal || e.crossDomain ? 1223 === a && (a = 204) : a = u[Tn] ? 200 : 404
								}
							u && r(a, l, u, s[rp]())
						}, e[yc] ? 4 === s[Cr] ? t[Ar](i) : s[Tr] = Km[o] = i : i()
					},
					abort: function () {
						i && i(void 0, !0)
					}
				}
			}
		}), Zf.ajaxSetup({
			accepts: {
				script: sp
			},
			contents: {
				script: op
			},
			converters: {
				"text script": function (t) {
					return Zf.globalEval(t), t
				}
			}
		}), Zf.ajaxPrefilter(rs, function (t) {
			void 0 === t.cache && (t.cache = !1), t.crossDomain && (t[L] = Wc, t[ps] = !1)
		}), Zf.ajaxTransport(rs, function (t) {
			if (t.crossDomain) {
				var e, i = Vf[lp] || Zf(lp)[0] || Vf[$e];
				return {
					send: function (n, r) {
						e = Vf[we](rs), e[yc] = !0, t.scriptCharset && (e[up] = t.scriptCharset), e[ko] = t[ed], e[br] = e[Tr] = function (t, i) {
							(i || !e[Cr] || cp[ue](e[Cr])) && (e[br] = e[Tr] = null, e[Te] && e[Te][Ae](e), e = null, i || r(200, Nc))
						}, i[Oo](e, i[Di])
					},
					abort: function () {
						e && e[br](void 0, !0)
					}
				}
			}
		});
		var _m = [],
			Qm = dp;
		Zf.ajaxSetup({
			jsonp: pp,
			jsonpCallback: function () {
				var t = _m[nt]() || Zf[jr] + fp + xm++;
				return this[t] = !0, t
			}
		}), Zf.ajaxPrefilter(hp, function (e, i, n) {
			var r, a, s, u = e.jsonp !== !1 && (Qm[ue](e[ed]) ? ed : Y == typeof e[Vr] && 0 === (e[gd] || T)[l](mp) && Qm[ue](e[Vr]) && Vr);
			return u || vp === e.dataTypes[0] ? (r = e.jsonpCallback = Zf.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, u ? e[u] = e[u][B](Qm, ye + r) : e.jsonp !== !1 && (e[ed] += (Gm[ue](e[ed]) ? ud : cd) + e.jsonp + Mt + r), e.converters[gp] = function () {
				return s || Zf[$i](r + Tp), s[0]
			}, e.dataTypes[0] = Rd, a = t[r], t[r] = function () {
				s = arguments
			}, n.always(function () {
				void 0 === a ? Zf(t).removeProp(r) : t[r] = a, e[r] && (e.jsonpCallback = i.jsonpCallback, _m[o](r)), s && Zf.isFunction(a) && a(s[0]), s = a = void 0
			}), rs) : void 0
		}), Zf.parseHTML = function (t, e, i) {
			if (!t || Y != typeof t) return null;
			G == typeof e && (i = e, e = !1), e = e || Vf;
			var n = lh[re](t),
				r = !i && [];
			return n ? [e[we](n[1])] : (n = nf([t], e, r), r && r[S] && Zf(r)[gs](), Zf.merge([], n[ie]))
		};
		var Jm = Zf.fn[vr];
		Zf.fn[vr] = function (t, i, n) {
			if (Y != typeof t && Jm) return Jm[P](this, arguments);
			var r, s, o, u = this,
				c = t[l](J);
			return c > -1 && (r = Zf[F](t[a](c, t[S])), t = t[a](0, c)), Zf.isFunction(i) ? (n = i, i = void 0) : i && e == typeof i && (s = bp), u[S] > 0 && Zf.ajax({
				url: t,
				type: s || Wc,
				dataType: Sp,
				data: i
			})[er](function (t) {
				o = arguments, u.html(r ? Zf(yp)[Ro](Zf.parseHTML(t))[ze](r) : t)
			}).always(n && function (t, e) {
				u.each(function () {
					n[P](this, o || [t[_c], e, t])
				})
			}), this
		}, Zf.each([ld, Ld, kd, Dd, Bd, Cd], function (t, e) {
			Zf.fn[e] = function (t) {
				return this.on(e, t)
			}
		}), Zf.expr[bn].animated = function (t) {
			return Zf.grep(Zf.timers, function (e) {
				return t === e.elem
			})[S]
		}, Zf[Cp] = {
			setOffset: function (t, e, i) {
				var n, r, a, s, o, l, u, c = Zf.css(t, wp),
					d = Zf(t),
					p = {};
				Pp === c && (t[Ir][wp] = Ap), o = d[Cp](), a = Zf.css(t, De), l = Zf.css(t, xr), u = (Nl === c || Mp === c) && Zf.inArray(Dl, [a, l]) > -1, u ? (n = d[wp](), s = n[De], r = n[xr]) : (s = parseFloat(a) || 0, r = parseFloat(l) || 0), Zf.isFunction(e) && (e = e[b](t, i, Zf[x]({}, o))), null != e[De] && (p[De] = e[De] - o[De] + s), null != e[xr] && (p[xr] = e[xr] - o[xr] + r), xp in e ? e.using[b](t, p) : d.css(p)
			}
		}, Zf.fn[x]({
			offset: function (t) {
				if (arguments[S]) return void 0 === t ? this : this.each(function (e) {
					Zf[Cp].setOffset(this, t, e)
				});
				var e, i, n = {
						top: 0,
						left: 0
					},
					a = this[0],
					s = a && a[ne];
				return s ? (e = s[$e], Zf[xi](e, a) ? (r != typeof a[ou] && (n = a[ou]()), i = Ff(s), {
					top: n[De] + (i[Gp] || e[zs]) - (e[js] || 0),
					left: n[xr] + (i[Ip] || e[Ws]) - (e[Fs] || 0)
				}) : n) : void 0
			},
			position: function () {
				if (this[0]) {
					var t, e, i = {
							top: 0,
							left: 0
						},
						n = this[0];
					return Mp === Zf.css(n, wp) ? e = n[ou]() : (t = this[Hp](), e = this[Cp](), Zf[j](t[0], Sp) || (i = t[Cp]()), i[De] += Zf.css(t[0], $p, !0), i[xr] += Zf.css(t[0], Ep, !0)), {
						top: e[De] - i[De] - Zf.css(n, Bp, !0),
						left: e[xr] - i[xr] - Zf.css(n, dl, !0)
					}
				}
			},
			offsetParent: function () {
				return this[w](function () {
					for (var t = this[Hp]; t && !Zf[j](t, Sp) && Pp === Zf.css(t, wp);) t = t[Hp];
					return t || Zh
				})
			}
		}), Zf.each({
			scrollLeft: Ip,
			scrollTop: Gp
		}, function (t, e) {
			var n = Dp[ue](e);
			Zf.fn[t] = function (r) {
				return Ah(this, function (t, r, a) {
					var s = Ff(t);
					return void 0 === a ? s ? e in s ? s[e] : s[i][$e][r] : t[r] : void(s ? s[kp](n ? Zf(s)[Ws]() : a, n ? a : Zf(s)[zs]()) : t[r] = a)
				}, t, r, arguments[S], null)
			}
		}), Zf.each([De, xr], function (t, e) {
			Zf.cssHooks[e] = gf(Qf.pixelPosition, function (t, i) {
				return i ? (i = em(t, e), Qh[ue](i) ? Zf(t)[wp]()[e] + pa : i) : void 0
			})
		}), Zf.each({
			Height: ru,
			Width: ta
		}, function (t, e) {
			Zf.each({
				padding: Lp + t,
				content: e,
				"": Rp + t
			}, function (n, r) {
				Zf.fn[r] = function (r, a) {
					var s = arguments[S] && (n || G != typeof r),
						o = n || (r === !0 || a === !0 ? Kl : Ul);
					return Ah(this, function (e, n, r) {
						var a;
						return Zf.isWindow(e) ? e[i][$e][Op + t] : 9 === e[N] ? (a = e[$e], Math[K](e[Gr][Np + t], a[Np + t], e[Gr][Cp + t], a[Cp + t], a[Op + t])) : void 0 === r ? Zf.css(e, n, o) : Zf[Ir](e, n, r, o)
					}, e, s ? r : void 0, s, null)
				}
			})
		}), Zf.fn[x]({
			bind: function (t, e, i) {
				return this.on(t, null, e, i)
			},
			unbind: function (t, e) {
				return this.off(t, null, e)
			},
			delegate: function (t, e, i, n) {
				return this.on(e, t, i, n)
			},
			undelegate: function (t, e, i) {
				return 1 === arguments[S] ? this.off(t, vs) : this.off(e, t || vs, i)
			}
		}), Zf.fn[Wp] = function () {
			return this[S]
		}, Zf.fn.andSelf = Zf.fn.addBack, k == typeof define && define.amd && define(Fp, [], function () {
			return Zf
		});
		var Zm = t.jQuery,
			tv = t.$;
		return Zf.noConflict = function (e) {
			return t.$ === Zf && (t.$ = tv), e && t.jQuery === Zf && (t.jQuery = Zm), Zf
		}, n || (t.jQuery = t.$ = Zf), Zf
	}), r == typeof jQuery) throw new Error(Xp); + function (t) {
		"use strict";
		var e = t.fn.jquery[Q](J)[0][Q](ds);
		if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error(Vp)
	}(jQuery), + function (t) {
		"use strict";

		function e() {
			var t = document[we](zp),
				e = {
					WebkitTransition: jp,
					MozTransition: Up,
					OTransition: Yp,
					transition: Up
				};
			for (var i in e)
				if (void 0 !== t[Ir][i]) return {
					end: e[i]
				};
			return !1
		}
		t.fn.emulateTransitionEnd = function (e) {
			var i = !1,
				n = this;
			t(this).one(Kp, function () {
				i = !0
			});
			var r = function () {
				i || t(n).trigger(t.support[qp][ma])
			};
			return setTimeout(r, e), this
		}, t(function () {
			t.support[qp] = e(), t.support[qp] && (t[Sr].special.bsTransitionEnd = {
				bindType: t.support[qp][ma],
				delegateType: t.support[qp][ma],
				handle: function (e) {
					return t(e[Cs])[En](this) ? e.handleObj.handler[P](this, arguments) : void 0
				}
			})
		})
	}(jQuery), + function (t) {
		"use strict";

		function e(e) {
			return this.each(function () {
				var i = t(this),
					r = i[Vr](_p);
				r || i[Vr](_p, r = new n(this)), Y == typeof e && r[e][b](i)
			})
		}
		var i = Qp,
			n = function (e) {
				t(e).on(Gs, i, this[qo])
			};
		n[Jp] = Zp, n.TRANSITION_DURATION = 150, n[g][qo] = function (e) {
			function i() {
				s[Uo]().trigger(tf)[gs]()
			}
			var r = t(this),
				a = r.attr(ef);
			a || (a = r.attr(cn), a = a && a[B](nf, T));
			var s = t(a);
			e && e[As](), s[S] || (s = r[rf](af)), s.trigger(e = t[Ss](sf)), e.isDefaultPrevented() || (s.removeClass(of), t.support[qp] && s.hasClass(lf) ? s.one(Kp, i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
		};
		var r = t.fn[uf];
		t.fn[uf] = e, t.fn[uf].Constructor = n, t.fn[uf].noConflict = function () {
			return t.fn[uf] = r, this
		}, t(document).on(cf, i, n[g][qo])
	}(jQuery), + function (t) {
		"use strict";

		function i(i) {
			return this.each(function () {
				var r = t(this),
					a = r[Vr](df),
					s = e == typeof i && i;
				a || r[Vr](df, a = new n(this, s)), wu == i ? a[wu]() : i && a.setState(i)
			})
		}
		var n = function (e, i) {
			this.$element = t(e), this[No] = t[x]({}, n.DEFAULTS, i), this.isLoading = !1
		};
		n[Jp] = Zp, n.DEFAULTS = {
			loadingText: pf
		}, n[g].setState = function (e) {
			var i = pn,
				n = this.$element,
				r = n[En](Ie) ? ff : Sp,
				a = n[Vr]();
			e += hf, null == a.resetText && n[Vr](mf, n[r]()), setTimeout(t.proxy(function () {
				n[r](null == a[e] ? this[No][e] : a[e]), vf == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
			}, this), 0)
		}, n[g][wu] = function () {
			var t = !0,
				e = this.$element[rf](gf);
			if (e[S]) {
				var i = this.$element[ze](Ie);
				$a == i.prop(L) ? (i.prop(fn) && (t = !1), e[ze](Tf).removeClass(od), this.$element.addClass(od)) : Ia == i.prop(L) && (i.prop(fn) !== this.$element.hasClass(od) && (t = !1), this.$element.toggleClass(od)), i.prop(fn, this.$element.hasClass(od)), t && i.trigger(To)
			} else this.$element.attr(bf, !this.$element.hasClass(od)), this.$element.toggleClass(od)
		};
		var r = t.fn[He];
		t.fn[He] = i, t.fn[He].Constructor = n, t.fn[He].noConflict = function () {
			return t.fn[He] = r, this
		}, t(document).on(Sf, yf, function (e) {
			var n = t(e[Cs]);
			n.hasClass(Cf) || (n = n[rf](wf)), i[b](n, wu), t(e[Cs])[En](Pf) || t(e[Cs])[En](Af) || e[As]()
		}).on(Mf, yf, function (e) {
			t(e[Cs])[rf](wf).toggleClass(Ks, xf[ue](e[L]))
		})
	}(jQuery), + function (i) {
		"use strict";

		function n(t) {
			return this.each(function () {
				var n = i(this),
					a = n[Vr](Gf),
					s = i[x]({}, r.DEFAULTS, n[Vr](), e == typeof t && t),
					o = Y == typeof t ? t : s.slide;
				a || n[Vr](Gf, a = new r(this, s)), et == typeof t ? a.to(t) : o ? a[o]() : s[Iu] && a[If]().cycle()
			})
		}
		var r = function (t, e) {
			this.$element = i(t), this.$indicators = this.$element[ze](Hf), this[No] = e, this[$f] = null, this.sliding = null, this[Iu] = null, this.$active = null, this.$items = null, this[No].keyboard && this.$element.on(Ef, i.proxy(this.keydown, this)), Bf == this[No][If] && !(Df in document[$e]) && this.$element.on(kf, i.proxy(this[If], this)).on(Lf, i.proxy(this.cycle, this))
		};
		r[Jp] = Zp, r.TRANSITION_DURATION = 600, r.DEFAULTS = {
			interval: 5e3,
			pause: Bf,
			wrap: !0,
			keyboard: !0
		}, r[g].keydown = function (t) {
			if (!Rf[ue](t[Cs][Of])) {
				switch (t[Bs]) {
				case 37:
					this.prev();
					break;
				case 39:
					this[Nf]();
					break;
				default:
					return
				}
				t[As]()
			}
		}, r[g].cycle = function (t) {
			return t || (this[$f] = !1), this[Iu] && clearInterval(this[Iu]), this[No][Iu] && !this[$f] && (this[Iu] = setInterval(i.proxy(this[Nf], this), this[No][Iu])), this
		}, r[g].getItemIndex = function (t) {
			return this.$items = t[Nd]()[Wf](Ff), this.$items[Xn](t || this.$active)
		}, r[g].getItemForDirection = function (t, e) {
			var i = this.getItemIndex(e),
				n = Xf == t && 0 === i || Nf == t && i == this.$items[S] - 1;
			if (n && !this[No][Vf]) return e;
			var r = Xf == t ? -1 : 1,
				a = (i + r) % this.$items[S];
			return this.$items.eq(a)
		}, r[g].to = function (t) {
			var e = this,
				i = this.getItemIndex(this.$active = this.$element[ze](zf));
			return t > this.$items[S] - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one(jf, function () {
				e.to(t)
			}) : i == t ? this[If]().cycle() : this.slide(t > i ? Nf : Xf, this.$items.eq(t))
		}, r[g][If] = function (t) {
			return t || (this[$f] = !0), this.$element[ze](Uf)[S] && i.support[qp] && (this.$element.trigger(i.support[qp][ma]), this.cycle(!0)), this[Iu] = clearInterval(this[Iu]), this
		}, r[g][Nf] = function () {
			return this.sliding ? void 0 : this.slide(Nf)
		}, r[g].prev = function () {
			return this.sliding ? void 0 : this.slide(Xf)
		}, r[g].slide = function (t, e) {
			var n = this.$element[ze](zf),
				a = e || this.getItemForDirection(t, n),
				s = this[Iu],
				o = Nf == t ? xr : Yf,
				l = this;
			if (a.hasClass(od)) return this.sliding = !1;
			var u = a[0],
				c = i[Ss](Kf, {
					relatedTarget: u,
					direction: o
				});
			if (this.$element.trigger(c), !c.isDefaultPrevented()) {
				if (this.sliding = !0, s && this[If](), this.$indicators[S]) {
					this.$indicators[ze](Tf).removeClass(od);
					var d = i(this.$indicators[Wf]()[this.getItemIndex(a)]);
					d && d.addClass(od)
				}
				var p = i[Ss](jf, {
					relatedTarget: u,
					direction: o
				});
				return i.support[qp] && this.$element.hasClass(qf) ? (a.addClass(t), a[0][Dr], n.addClass(o), a.addClass(o), n.one(Kp, function () {
					a.removeClass([t, o][ve](J)).addClass(od), n.removeClass([od, o][ve](J)), l.sliding = !1, setTimeout(function () {
						l.$element.trigger(p)
					}, 0)
				}).emulateTransitionEnd(r.TRANSITION_DURATION)) : (n.removeClass(od), a.addClass(od), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
			}
		};
		var a = i.fn.carousel;
		i.fn.carousel = n, i.fn.carousel.Constructor = r, i.fn.carousel.noConflict = function () {
			return i.fn.carousel = a, this
		};
		var s = function (t) {
			var e, r = i(this),
				a = i(r.attr(ef) || (e = r.attr(cn)) && e[B](_f, T));
			if (a.hasClass(Qf)) {
				var s = i[x]({}, a[Vr](), r[Vr]()),
					o = r.attr(Jf);
				o && (s[Iu] = !1), n[b](a, s), o && a[Vr](Gf).to(o), t[As]()
			}
		};
		i(document).on(Zf, th, s).on(Zf, eh, s), i(t).on(vr, function () {
			i(ih).each(function () {
				var t = i(this);
				n[b](t, t[Vr]())
			})
		})
	}(jQuery), + function (t) {
		"use strict";

		function i(e) {
			var i, n = e.attr(ef) || (i = e.attr(cn)) && i[B](_f, T);
			return t(n)
		}

		function n(i) {
			return this.each(function () {
				var n = t(this),
					a = n[Vr](nh),
					s = t[x]({}, r.DEFAULTS, n[Vr](), e == typeof i && i);
				!a && s[wu] && rh[ue](i) && (s[wu] = !1), a || n[Vr](nh, a = new r(this, s)), Y == typeof i && a[i]()
			})
		}
		var r = function (e, i) {
			this.$element = t(e), this[No] = t[x]({}, r.DEFAULTS, i), this.$trigger = t(ah + e[se] + sh + e[se] + oh), this.transitioning = null, this[No][Nd] ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this[No][wu] && this[wu]()
		};
		r[Jp] = Zp, r.TRANSITION_DURATION = 350, r.DEFAULTS = {
			toggle: !0
		}, r[g].dimension = function () {
			var t = this.$element.hasClass(ta);
			return t ? ta : ru
		}, r[g][lu] = function () {
			if (!this.transitioning && !this.$element.hasClass(of)) {
				var e, i = this.$parent && this.$parent[Wf](lh)[Wf](uh);
				if (!(i && i[S] && (e = i[Vr](nh), e && e.transitioning))) {
					var a = t[Ss](ch);
					if (this.$element.trigger(a), !a.isDefaultPrevented()) {
						i && i[S] && (n[b](i, uu), e || i[Vr](nh, null));
						var s = this.dimension();
						this.$element.removeClass(dh).addClass(ph)[s](0).attr(fh, !0), this.$trigger.removeClass(hh).attr(fh, !0), this.transitioning = 1;
						var o = function () {
							this.$element.removeClass(ph).addClass(mh)[s](T), this.transitioning = 0, this.$element.trigger(vh)
						};
						if (!t.support[qp]) return o[b](this);
						var l = t.camelCase([Np, s][ve](Ki));
						this.$element.one(Kp, t.proxy(o, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[s](this.$element[0][l])
					}
				}
			}
		}, r[g][uu] = function () {
			if (!this.transitioning && this.$element.hasClass(of)) {
				var e = t[Ss](gh);
				if (this.$element.trigger(e), !e.isDefaultPrevented()) {
					var i = this.dimension();
					this.$element[i](this.$element[i]())[0][wl], this.$element.addClass(ph).removeClass(mh).attr(fh, !1), this.$trigger.addClass(hh).attr(fh, !1), this.transitioning = 1;
					var n = function () {
						this.transitioning = 0, this.$element.removeClass(ph).addClass(dh).trigger(Th)
					};
					return t.support[qp] ? void this.$element[i](0).one(Kp, t.proxy(n, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : n[b](this)
				}
			}
		}, r[g][wu] = function () {
			this[this.$element.hasClass(of) ? uu : lu]()
		}, r[g].getParent = function () {
			return t(this[No][Nd])[ze](bh + this[No][Nd] + oh).each(t.proxy(function (e, n) {
				var r = t(n);
				this.addAriaAndCollapsedClass(i(r), r)
			}, this))[ma]()
		}, r[g].addAriaAndCollapsedClass = function (t, e) {
			var i = t.hasClass(of);
			t.attr(fh, i), e.toggleClass(hh, !i).attr(fh, i)
		};
		var a = t.fn[dh];
		t.fn[dh] = n, t.fn[dh].Constructor = r, t.fn[dh].noConflict = function () {
			return t.fn[dh] = a, this
		}, t(document).on(Sh, yh, function (e) {
			var r = t(this);
			r.attr(ef) || e[As]();
			var a = i(r),
				s = a[Vr](nh),
				o = s ? wu : r[Vr]();
			n[b](a, o)
		})
	}(jQuery), + function (t) {
		"use strict";

		function e(e) {
			var i = e.attr(ef);
			i || (i = e.attr(cn), i = i && Ch[ue](i) && i[B](nf, T));
			var n = i && t(i);
			return n && n[S] ? n : e[Nd]()
		}

		function i(i) {
			i && 3 === i[Bs] || (t(r)[gs](), t(a).each(function () {
				var n = t(this),
					r = e(n),
					a = {
						relatedTarget: this
					};
				r.hasClass(Jd) && (i && Gs == i[L] && Rf[ue](i[Cs][Of]) && t[xi](r[0], i[Cs]) || (r.trigger(i = t[Ss](wh, a)), i.isDefaultPrevented() || (n.attr(fh, Fr), r.removeClass(Jd).trigger(t[Ss](Ph, a)))))
			}))
		}

		function n(e) {
			return this.each(function () {
				var i = t(this),
					n = i[Vr](Ah);
				n || i[Vr](Ah, n = new s(this)), Y == typeof e && n[e][b](i)
			})
		}
		var r = Mh,
			a = xh,
			s = function (e) {
				t(e).on(Gh, this[wu])
			};
		s[Jp] = Zp, s[g][wu] = function (n) {
			var r = t(this);
			if (!r[En](Ih)) {
				var a = e(r),
					s = a.hasClass(Jd);
				if (i(), !s) {
					Df in document[$e] && !a[rf](Hh)[S] && t(document[we](Pe)).addClass($h).insertAfter(t(this)).on(Gs, i);
					var o = {
						relatedTarget: this
					};
					if (a.trigger(n = t[Ss](Eh, o)), n.isDefaultPrevented()) return;
					r.trigger(Ks).attr(fh, Wr), a.toggleClass(Jd).trigger(t[Ss](Bh, o))
				}
				return !1
			}
		}, s[g].keydown = function (i) {
			if (Dh[ue](i[Bs]) && !Rf[ue](i[Cs][Of])) {
				var n = t(this);
				if (i[As](), i[xs](), !n[En](Ih)) {
					var r = e(n),
						s = r.hasClass(Jd);
					if (!s && 27 != i[Bs] || s && 27 == i[Bs]) return 27 == i[Bs] && r[ze](a).trigger(Ks), n.trigger(Gs);
					var o = kh,
						l = r[ze](Lh + o);
					if (l[S]) {
						var u = l[Xn](i[Cs]);
						38 == i[Bs] && u > 0 && u--, 40 == i[Bs] && u < l[S] - 1 && u++, ~u || (u = 0), l.eq(u).trigger(Ks)
					}
				}
			}
		};
		var o = t.fn.dropdown;
		t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function () {
			return t.fn.dropdown = o, this
		}, t(document).on(Rh, i).on(Rh, Oh, function (t) {
			t[xs]()
		}).on(Rh, a, s[g][wu]).on(Nh, a, s[g].keydown).on(Nh, Lh, s[g].keydown)
	}(jQuery), + function (i) {
		"use strict";

		function n(t, n) {
			return this.each(function () {
				var a = i(this),
					s = a[Vr](Wh),
					o = i[x]({}, r.DEFAULTS, a[Vr](), e == typeof t && t);
				s || a[Vr](Wh, s = new r(this, o)), Y == typeof t ? s[t](n) : o[lu] && s[lu](n)
			})
		}
		var r = function (t, e) {
			this[No] = e, this.$body = i(document[Gr]), this.$element = i(t), this.$dialog = this.$element[ze](Fh), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this[No].remote && this.$element[ze](Xh)[vr](this[No].remote, i.proxy(function () {
				this.$element.trigger(Vh)
			}, this))
		};
		r[Jp] = Zp, r.TRANSITION_DURATION = 300, r.BACKDROP_TRANSITION_DURATION = 150, r.DEFAULTS = {
			backdrop: !0,
			keyboard: !0,
			show: !0
		}, r[g][wu] = function (t) {
			return this.isShown ? this[uu]() : this[lu](t)
		}, r[g][lu] = function (t) {
			var e = this,
				n = i[Ss](zh, {
					relatedTarget: t
				});
			this.$element.trigger(n), this.isShown || n.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass(jh), this[Uh](), this[Yh](), this.$element.on(Kh, qh, i.proxy(this[uu], this)), this.$dialog.on(_h, function () {
				e.$element.one(Qh, function (t) {
					i(t[Cs])[En](e.$element) && (e.ignoreBackdropClick = !0)
				})
			}), this.backdrop(function () {
				var n = i.support[qp] && e.$element.hasClass(lf);
				e.$element[Nd]()[S] || e.$element.appendTo(e.$body), e.$element[lu]()[zs](0), e.adjustDialog(), n && e.$element[0][Dr], e.$element.addClass(of), e.enforceFocus();
				var a = i[Ss](Jh, {
					relatedTarget: t
				});
				n ? e.$dialog.one(Kp, function () {
					e.$element.trigger(Ks).trigger(a)
				}).emulateTransitionEnd(r.TRANSITION_DURATION) : e.$element.trigger(Ks).trigger(a)
			}))
		}, r[g][uu] = function (t) {
			t && t[As](), t = i[Ss](Zh), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this[Uh](), this[Yh](), i(document).off(tm), this.$element.removeClass(of).off(Kh).off(Qh), this.$dialog.off(_h), i.support[qp] && this.$element.hasClass(lf) ? this.$element.one(Kp, i.proxy(this.hideModal, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : this.hideModal())
		}, r[g].enforceFocus = function () {
			i(document).off(tm).on(tm, i.proxy(function (t) {
				this.$element[0] === t[Cs] || this.$element[Jn](t[Cs])[S] || this.$element.trigger(Ks)
			}, this))
		}, r[g][Uh] = function () {
			this.isShown && this[No].keyboard ? this.$element.on(em, i.proxy(function (t) {
				27 == t[Bs] && this[uu]()
			}, this)) : this.isShown || this.$element.off(em)
		}, r[g][Yh] = function () {
			this.isShown ? i(t).on(im, i.proxy(this.handleUpdate, this)) : i(t).off(im)
		}, r[g].hideModal = function () {
			var t = this;
			this.$element[uu](), this.backdrop(function () {
				t.$body.removeClass(jh), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger(nm)
			})
		}, r[g].removeBackdrop = function () {
			this.$backdrop && this.$backdrop[gs](), this.$backdrop = null
		}, r[g].backdrop = function (t) {
			var e = this,
				n = this.$element.hasClass(lf) ? lf : T;
			if (this.isShown && this[No].backdrop) {
				var a = i.support[qp] && n;
				if (this.$backdrop = i(document[we](Pe)).addClass(rm + n).appendTo(this.$body), this.$element.on(Kh, i.proxy(function (t) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t[Cs] === t[Ms] && (Pp == this[No].backdrop ? this.$element[0][Ks]() : this[uu]()))
				}, this)), a && this.$backdrop[0][Dr], this.$backdrop.addClass(of), !t) return;
				a ? this.$backdrop.one(Kp, t).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : t()
			} else if (!this.isShown && this.$backdrop) {
				this.$backdrop.removeClass(of);
				var s = function () {
					e.removeBackdrop(), t && t()
				};
				i.support[qp] && this.$element.hasClass(lf) ? this.$backdrop.one(Kp, s).emulateTransitionEnd(r.BACKDROP_TRANSITION_DURATION) : s()
			} else t && t()
		}, r[g].handleUpdate = function () {
			this.adjustDialog()
		}, r[g].adjustDialog = function () {
			var t = this.$element[0][Fu] > document[$e][am];
			this.$element.css({
				paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : T,
				paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : T
			})
		}, r[g].resetAdjustments = function () {
			this.$element.css({
				paddingLeft: T,
				paddingRight: T
			})
		}, r[g].checkScrollbar = function () {
			var e = t[sm];
			if (!e) {
				var i = document[$e][ou]();
				e = i[Yf] - Math[om](i[xr])
			}
			this.bodyIsOverflowing = document[Gr][lm] < e, this.scrollbarWidth = this.measureScrollbar()
		}, r[g].setScrollbar = function () {
			var t = parseInt(this.$body.css(um) || 0, 10);
			this.originalBodyPad = document[Gr][Ir][cm] || T, this.bodyIsOverflowing && this.$body.css(um, t + this.scrollbarWidth)
		}, r[g].resetScrollbar = function () {
			this.$body.css(um, this.originalBodyPad)
		}, r[g].measureScrollbar = function () {
			var t = document[we](Pe);
			t[We] = dm, this.$body[Ro](t);
			var e = t[Dr] - t[lm];
			return this.$body[0][Ae](t), e
		};
		var a = i.fn.modal;
		i.fn.modal = n, i.fn.modal.Constructor = r, i.fn.modal.noConflict = function () {
			return i.fn.modal = a, this
		}, i(document).on(pm, fm, function (t) {
			var e = i(this),
				r = e.attr(cn),
				a = i(e.attr(ef) || r && r[B](_f, T)),
				s = a[Vr](Wh) ? wu : i[x]({
					remote: !hm[ue](r) && r
				}, a[Vr](), e[Vr]());
			e[En](Js) && t[As](), a.one(zh, function (t) {
				t.isDefaultPrevented() || a.one(nm, function () {
					e[En](mm) && e.trigger(Ks)
				})
			}), n[b](a, s, this)
		})
	}(jQuery), + function (i) {
		"use strict";

		function n(t) {
			return this.each(function () {
				var n = i(this),
					a = n[Vr](vm),
					s = e == typeof t && t;
				(a || !gm[ue](t)) && (a || n[Vr](vm, a = new r(this, s)), Y == typeof t && a[t]())
			})
		}
		var r = function (t, e) {
			this[L] = null, this[No] = null, this[Tm] = null, this[wd] = null, this.hoverState = null, this.$element = null, this.inState = null, this[p](bm, t, e)
		};
		r[Jp] = Zp, r.TRANSITION_DURATION = 150, r.DEFAULTS = {
			animation: !0,
			placement: De,
			selector: !1,
			template: Sm,
			trigger: ym,
			title: T,
			delay: 0,
			html: !1,
			container: !1,
			viewport: {
				selector: Gr,
				padding: 0
			}
		}, r[g][p] = function (t, e, n) {
			if (this[Tm] = !0, this[L] = t, this.$element = i(e), this[No] = this.getOptions(n), this.$viewport = this[No][Cm] && i(i.isFunction(this[No][Cm]) ? this[No][Cm][b](this, this.$element) : this[No][Cm][wn] || this[No][Cm]), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document[y] && !this[No][wn]) throw new Error(wm + this[L] + Pm);
			for (var r = this[No].trigger[Q](J), a = r[S]; a--;) {
				var s = r[a];
				if (Gs == s) this.$element.on(Am + this[L], this[No][wn], i.proxy(this[wu], this));
				else if (Mm != s) {
					var o = Bf == s ? xm : qs,
						l = Bf == s ? Gm : Qs;
					this.$element.on(o + ds + this[L], this[No][wn], i.proxy(this.enter, this)), this.$element.on(l + ds + this[L], this[No][wn], i.proxy(this.leave, this))
				}
			}
			this[No][wn] ? this.m = i[x]({}, this[No], {
				trigger: Mm,
				selector: T
			}) : this.fixTitle()
		}, r[g].getDefaults = function () {
			return r.DEFAULTS
		}, r[g].getOptions = function (t) {
			return t = i[x]({}, this.getDefaults(), this.$element[Vr](), t), t.delay && et == typeof t.delay && (t.delay = {
				show: t.delay,
				hide: t.delay
			}), t
		}, r[g].getDelegateOptions = function () {
			var t = {},
				e = this.getDefaults();
			return this.m && i.each(this.m, function (i, n) {
				e[i] != n && (t[i] = n)
			}), t
		}, r[g].enter = function (t) {
			var e = t instanceof this[y] ? t : i(t[Ms])[Vr](Im + this[L]);
			return e || (e = new this[y](t[Ms], this.getDelegateOptions()), i(t[Ms])[Vr](Im + this[L], e)), t instanceof i[Ss] && (e.inState[qs == t[L] ? Ks : Bf] = !0), e.tip().hasClass(of) || of == e.hoverState ? void(e.hoverState = of) : (clearTimeout(e[wd]), e.hoverState = of, e[No].delay && e[No].delay[lu] ? void(e[wd] = setTimeout(function () {
				of == e.hoverState && e[lu]()
			}, e[No].delay[lu])) : e[lu]())
		}, r[g].isInStateTrue = function () {
			for (var t in this.inState)
				if (this.inState[t]) return !0;
			return !1
		}, r[g].leave = function (t) {
			var e = t instanceof this[y] ? t : i(t[Ms])[Vr](Im + this[L]);
			return e || (e = new this[y](t[Ms], this.getDelegateOptions()), i(t[Ms])[Vr](Im + this[L], e)), t instanceof i[Ss] && (e.inState[Qs == t[L] ? Ks : Bf] = !1), e.isInStateTrue() ? void 0 : (clearTimeout(e[wd]), e.hoverState = Hm, e[No].delay && e[No].delay[uu] ? void(e[wd] = setTimeout(function () {
				Hm == e.hoverState && e[uu]()
			}, e[No].delay[uu])) : e[uu]())
		}, r[g][lu] = function () {
			var t = i[Ss]($m + this[L]);
			if (this.hasContent() && this[Tm]) {
				this.$element.trigger(t);
				var e = i[xi](this.$element[0][ne][$e], this.$element[0]);
				if (t.isDefaultPrevented() || !e) return;
				var n = this,
					a = this.tip(),
					s = this.getUID(this[L]);
				this.setContent(), a.attr(se, s), this.$element.attr(Em, s), this[No][Bm] && a.addClass(lf);
				var o = k == typeof this[No].placement ? this[No].placement[b](this, a[0], this.$element[0]) : this[No].placement,
					l = Dm,
					u = l[ue](o);
				u && (o = o[B](l, T) || De), a[Uo]().css({
					top: 0,
					left: 0,
					display: jo
				}).addClass(o)[Vr](Im + this[L], this), this[No].container ? a.appendTo(this[No].container) : a.insertAfter(this.$element), this.$element.trigger(km + this[L]);
				var c = this.getPosition(),
					d = a[0][Dr],
					p = a[0][wl];
				if (u) {
					var f = o,
						h = this.getPosition(this.$viewport);
					o = Lm == o && c[Lm] + p > h[Lm] ? De : De == o && c[De] - p < h[De] ? Lm : Yf == o && c[Yf] + d > h[ta] ? xr : xr == o && c[xr] - d < h[xr] ? Yf : o, a.removeClass(f).addClass(o)
				}
				var m = this.getCalculatedOffset(o, c, d, p);
				this.applyPlacement(m, o);
				var v = function () {
					var t = n.hoverState;
					n.$element.trigger(Rm + n[L]), n.hoverState = null, Hm == t && n.leave(n)
				};
				i.support[qp] && this.$tip.hasClass(lf) ? a.one(Kp, v).emulateTransitionEnd(r.TRANSITION_DURATION) : v()
			}
		}, r[g].applyPlacement = function (t, e) {
			var n = this.tip(),
				r = n[0][Dr],
				a = n[0][wl],
				s = parseInt(n.css(Om), 10),
				o = parseInt(n.css(Nm), 10);
			isNaN(s) && (s = 0), isNaN(o) && (o = 0), t[De] += s, t[xr] += o, i[Cp].setOffset(n[0], i[x]({
				using: function (t) {
					n.css({
						top: Math[Wm](t[De]),
						left: Math[Wm](t[xr])
					})
				}
			}, t), 0), n.addClass(of);
			var l = n[0][Dr],
				u = n[0][wl];
			De == e && u != a && (t[De] = t[De] + a - u);
			var c = this.getViewportAdjustedDelta(e, t, l, u);
			c[xr] ? t[xr] += c[xr] : t[De] += c[De];
			var d = Fm[ue](e),
				p = d ? 2 * c[xr] - r + l : 2 * c[De] - a + u,
				f = d ? Dr : wl;
			n[Cp](t), this.replaceArrow(p, n[0][f], d)
		}, r[g].replaceArrow = function (t, e, i) {
			this.arrow().css(i ? xr : De, 50 * (1 - t / e) + Xm).css(i ? De : xr, T)
		}, r[g].setContent = function () {
			var t = this.tip(),
				e = this.getTitle();
			t[ze](Vm)[this[No].html ? Sp : Tn](e), t.removeClass(zm)
		}, r[g][uu] = function (t) {
			function e() {
				of != n.hoverState && a[Uo](), n.$element.removeAttr(Em).trigger(jm + n[L]), t && t()
			}
			var n = this,
				a = i(this.$tip),
				s = i[Ss](Um + this[L]);
			return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (a.removeClass(of), i.support[qp] && a.hasClass(lf) ? a.one(Kp, e).emulateTransitionEnd(r.TRANSITION_DURATION) : e(), this.hoverState = null, this)
		}, r[g].fixTitle = function () {
			var t = this.$element;
			(t.attr(Ym) || Y != typeof t.attr(Km)) && t.attr(Km, t.attr(Ym) || T).attr(Ym, T)
		}, r[g].hasContent = function () {
			return this.getTitle()
		}, r[g].getPosition = function (e) {
			e = e || this.$element;
			var n = e[0],
				r = qm == n[Of],
				a = n[ou]();
			null == a[ta] && (a = i[x]({}, a, {
				width: a[Yf] - a[xr],
				height: a[Lm] - a[De]
			}));
			var s = r ? {
					top: 0,
					left: 0
				} : e[Cp](),
				o = {
					scroll: r ? document[$e][zs] || document[Gr][zs] : e[zs]()
				},
				l = r ? {
					width: i(t)[ta](),
					height: i(t)[ru]()
				} : null;
			return i[x]({}, a, o, l, s)
		}, r[g].getCalculatedOffset = function (t, e, i, n) {
			return Lm == t ? {
				top: e[De] + e[ru],
				left: e[xr] + e[ta] / 2 - i / 2
			} : De == t ? {
				top: e[De] - n,
				left: e[xr] + e[ta] / 2 - i / 2
			} : xr == t ? {
				top: e[De] + e[ru] / 2 - n / 2,
				left: e[xr] - i
			} : {
				top: e[De] + e[ru] / 2 - n / 2,
				left: e[xr] + e[ta]
			}
		}, r[g].getViewportAdjustedDelta = function (t, e, i, n) {
			var r = {
				top: 0,
				left: 0
			};
			if (!this.$viewport) return r;
			var a = this[No][Cm] && this[No][Cm][ql] || 0,
				s = this.getPosition(this.$viewport);
			if (_m[ue](t)) {
				var o = e[De] - a - s[Np],
					l = e[De] + a - s[Np] + n;
				o < s[De] ? r[De] = s[De] - o : l > s[De] + s[ru] && (r[De] = s[De] + s[ru] - l)
			} else {
				var u = e[xr] - a,
					c = e[xr] + a + i;
				u < s[xr] ? r[xr] = s[xr] - u : c > s[Yf] && (r[xr] = s[xr] + s[ta] - c)
			}
			return r
		}, r[g].getTitle = function () {
			var t, e = this.$element,
				i = this[No];
			return t = e.attr(Km) || (k == typeof i[Ym] ? i[Ym][b](e[0]) : i[Ym])
		}, r[g].getUID = function (t) {
			do t += ~~(1e6 * Math[E]()); while (document[ae](t));
			return t
		}, r[g].tip = function () {
			if (!this.$tip && (this.$tip = i(this[No].template), 1 != this.$tip[S])) throw new Error(this[L] + Qm);
			return this.$tip
		}, r[g].arrow = function () {
			return this.$arrow = this.$arrow || this.tip()[ze](Jm)
		}, r[g][Zm] = function () {
			this[Tm] = !0
		}, r[g][Zn] = function () {
			this[Tm] = !1
		}, r[g].toggleEnabled = function () {
			this[Tm] = !this[Tm]
		}, r[g][wu] = function (t) {
			var e = this;
			t && (e = i(t[Ms])[Vr](Im + this[L]), e || (e = new this[y](t[Ms], this.getDelegateOptions()), i(t[Ms])[Vr](Im + this[L], e))), t ? (e.inState[Gs] = !e.inState[Gs], e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass(of) ? e.leave(e) : e.enter(e)
		}, r[g].destroy = function () {
			var t = this;
			clearTimeout(this[wd]), this[uu](function () {
				t.$element.off(ds + t[L]).removeData(Im + t[L]), t.$tip && t.$tip[Uo](), t.$tip = null, t.$arrow = null, t.$viewport = null
			})
		};
		var a = i.fn.tooltip;
		i.fn.tooltip = n, i.fn.tooltip.Constructor = r, i.fn.tooltip.noConflict = function () {
			return i.fn.tooltip = a, this
		}
	}(jQuery), + function (t) {
		"use strict";

		function i(i) {
			return this.each(function () {
				var r = t(this),
					a = r[Vr](tv),
					s = e == typeof i && i;
				(a || !gm[ue](i)) && (a || r[Vr](tv, a = new n(this, s)), Y == typeof i && a[i]())
			})
		}
		var n = function (t, e) {
			this[p](ev, t, e)
		};
		if (!t.fn.tooltip) throw new Error(iv);
		n[Jp] = Zp, n.DEFAULTS = t[x]({}, t.fn.tooltip.Constructor.DEFAULTS, {
			placement: Yf,
			trigger: Gs,
			content: T,
			template: nv
		}), n[g] = t[x]({}, t.fn.tooltip.Constructor[g]), n[g][y] = n, n[g].getDefaults = function () {
			return n.DEFAULTS
		}, n[g].setContent = function () {
			var t = this.tip(),
				e = this.getTitle(),
				i = this.getContent();
			t[ze](rv)[this[No].html ? Sp : Tn](e), t[ze](av)[Wf]()[Uo]()[ma]()[this[No].html ? Y == typeof i ? Sp : Ro : Tn](i), t.removeClass(sv), t[ze](rv).html() || t[ze](rv)[uu]()
		}, n[g].hasContent = function () {
			return this.getTitle() || this.getContent()
		}, n[g].getContent = function () {
			var t = this.$element,
				e = this[No];
			return t.attr(ov) || (k == typeof e[Yl] ? e[Yl][b](t[0]) : e[Yl])
		}, n[g].arrow = function () {
			return this.$arrow = this.$arrow || this.tip()[ze](lv)
		};
		var r = t.fn.popover;
		t.fn.popover = i, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
			return t.fn.popover = r, this
		}
	}(jQuery), + function (i) {
		"use strict";

		function n(e, r) {
			this.$body = i(document[Gr]), this.$scrollElement = i(i(e)[En](document[Gr]) ? t : e), this[No] = i[x]({}, n.DEFAULTS, r), this[wn] = (this[No][Cs] || T) + uv, this.offsets = [], this.targets = [], this.activeTarget = null, this[Fu] = 0, this.$scrollElement.on(cv, i.proxy(this[dv], this)), this[pv](), this[dv]()
		}

		function r(t) {
			return this.each(function () {
				var r = i(this),
					a = r[Vr](fv),
					s = e == typeof t && t;
				a || r[Vr](fv, a = new n(this, s)), Y == typeof t && a[t]()
			})
		}
		n[Jp] = Zp, n.DEFAULTS = {
			offset: 10
		}, n[g].getScrollHeight = function () {
			return this.$scrollElement[0][Fu] || Math[K](this.$body[0][Fu], document[$e][Fu])
		}, n[g][pv] = function () {
			var t = this,
				e = Cp,
				n = 0;
			this.offsets = [], this.targets = [], this[Fu] = this.getScrollHeight(), i.isWindow(this.$scrollElement[0]) || (e = wp, n = this.$scrollElement[zs]()), this.$body[ze](this[wn])[w](function () {
				var t = i(this),
					r = t[Vr](Cs) || t.attr(cn),
					a = hv[ue](r) && i(r);
				return a && a[S] && a[En](mm) && [
					[a[e]()[De] + n, r]
				] || null
			})[A](function (t, e) {
				return t[0] - e[0]
			}).each(function () {
				t.offsets[o](this[0]), t.targets[o](this[1])
			})
		}, n[g][dv] = function () {
			var t, e = this.$scrollElement[zs]() + this[No][Cp],
				i = this.getScrollHeight(),
				n = this[No][Cp] + i - this.$scrollElement[ru](),
				r = this.offsets,
				a = this.targets,
				s = this.activeTarget;
			if (this[Fu] != i && this[pv](), e >= n) return s != (t = a[a[S] - 1]) && this.activate(t);
			if (s && e < r[0]) return this.activeTarget = null, this[mv]();
			for (t = r[S]; t--;) s != a[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(a[t])
		}, n[g].activate = function (t) {
			this.activeTarget = t, this[mv]();
			var e = this[wn] + vv + t + gv + this[wn] + Tv + t + oh,
				n = i(e).parents(bv).addClass(od);
			n[Nd](Lh)[S] && (n = n[rf](Sv).addClass(od)), n.trigger(yv)
		}, n[g][mv] = function () {
			i(this[wn]).parentsUntil(this[No][Cs], Tf).removeClass(od)
		};
		var a = i.fn.scrollspy;
		i.fn.scrollspy = r, i.fn.scrollspy.Constructor = n, i.fn.scrollspy.noConflict = function () {
			return i.fn.scrollspy = a, this
		}, i(t).on(Cv, function () {
			i(wv).each(function () {
				var t = i(this);
				r[b](t, t[Vr]())
			})
		})
	}(jQuery), + function (t) {
		"use strict";

		function e(e) {
			return this.each(function () {
				var n = t(this),
					r = n[Vr](Pv);
				r || n[Vr](Pv, r = new i(this)), Y == typeof e && r[e]()
			})
		}
		var i = function (e) {
			this.element = t(e)
		};
		i[Jp] = Zp, i.TRANSITION_DURATION = 150, i[g][lu] = function () {
			var e = this.element,
				i = e[rf](Av),
				n = e[Vr](Cs);
			if (n || (n = e.attr(cn), n = n && n[B](nf, T)), !e[Nd](bv).hasClass(od)) {
				var r = i[ze](Mv),
					a = t[Ss](xv, {
						relatedTarget: e[0]
					}),
					s = t[Ss](Gv, {
						relatedTarget: r[0]
					});
				if (r.trigger(a), e.trigger(s), !s.isDefaultPrevented() && !a.isDefaultPrevented()) {
					var o = t(n);
					this.activate(e[rf](bv), i), this.activate(o, o[Nd](), function () {
						r.trigger({
							type: Iv,
							relatedTarget: e[0]
						}), e.trigger({
							type: Hv,
							relatedTarget: r[0]
						})
					})
				}
			}
		}, i[g].activate = function (e, n, r) {
			function a() {
				s.removeClass(od)[ze]($v).removeClass(od)[ma]()[ze](Ev).attr(fh, !1), e.addClass(od)[ze](Ev).attr(fh, !0), o ? (e[0][Dr], e.addClass(of)) : e.removeClass(lf), e[Nd](Lh)[S] && e[rf](Sv).addClass(od)[ma]()[ze](Ev).attr(fh, !0), r && r()
			}
			var s = n[ze](Bv),
				o = r && t.support[qp] && (s[S] && s.hasClass(lf) || !!n[ze](Dv)[S]);
			s[S] && o ? s.one(Kp, a).emulateTransitionEnd(i.TRANSITION_DURATION) : a(), s.removeClass(of)
		};
		var n = t.fn.tab;
		t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function () {
			return t.fn.tab = n, this
		};
		var r = function (i) {
			i[As](), e[b](t(this), lu)
		};
		t(document).on(kv, Ev, r).on(kv, Lv, r)
	}(jQuery), + function (i) {
		"use strict";

		function n(t) {
			return this.each(function () {
				var n = i(this),
					a = n[Vr](Rv),
					s = e == typeof t && t;
				a || n[Vr](Rv, a = new r(this, s)), Y == typeof t && a[t]()
			})
		}
		var r = function (t, e) {
			this[No] = i[x]({}, r.DEFAULTS, e), this.$target = i(this[No][Cs]).on(Ov, i.proxy(this.checkPosition, this)).on(Nv, i.proxy(this.checkPositionWithEventLoop, this)), this.$element = i(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
		};
		r[Jp] = Zp, r.RESET = Wv, r.DEFAULTS = {
			offset: 0,
			target: t
		}, r[g].getState = function (t, e, i, n) {
			var r = this.$target[zs](),
				a = this.$element[Cp](),
				s = this.$target[ru]();
			if (null != i && De == this.affixed) return i > r && De;
			if (Lm == this.affixed) return null != i ? !(r + this.unpin <= a[De]) && Lm : !(t - n >= r + s) && Lm;
			var o = null == this.affixed,
				l = o ? r : a[De],
				u = o ? s : e;
			return null != i && i >= r ? De : null != n && l + u >= t - n && Lm
		}, r[g].getPinnedOffset = function () {
			if (this.pinnedOffset) return this.pinnedOffset;
			this.$element.removeClass(r.RESET).addClass(Fv);
			var t = this.$target[zs](),
				e = this.$element[Cp]();
			return this.pinnedOffset = e[De] - t
		}, r[g].checkPositionWithEventLoop = function () {
			setTimeout(i.proxy(this.checkPosition, this), 1)
		}, r[g].checkPosition = function () {
			if (this.$element[En](mm)) {
				var t = this.$element[ru](),
					n = this[No][Cp],
					a = n[De],
					s = n[Lm],
					o = Math[K](i(document)[ru](), i(document[Gr])[ru]());
				e != typeof n && (s = a = n), k == typeof a && (a = n[De](this.$element)), k == typeof s && (s = n[Lm](this.$element));
				var l = this.getState(o, t, a, s);
				if (this.affixed != l) {
					null != this.unpin && this.$element.css(De, T);
					var u = Fv + (l ? Ki + l : T),
						c = i[Ss](u + Xv);
					if (this.$element.trigger(c), c.isDefaultPrevented()) return;
					this.affixed = l, this.unpin = Lm == l ? this.getPinnedOffset() : null, this.$element.removeClass(r.RESET).addClass(u).trigger(u[B](Fv, Vv) + Xv)
				}
				Lm == l && this.$element[Cp]({
					top: o - t - s
				})
			}
		};
		var a = i.fn.affix;
		i.fn.affix = n, i.fn.affix.Constructor = r, i.fn.affix.noConflict = function () {
			return i.fn.affix = a, this
		}, i(t).on(vr, function () {
			i(zv).each(function () {
				var t = i(this),
					e = t[Vr]();
				e[Cp] = e[Cp] || {}, null != e.offsetBottom && (e[Cp][Lm] = e.offsetBottom), null != e[jv] && (e[Cp][De] = e[jv]), n[b](t, e)
			})
		})
	}(jQuery), ! function () {
		"use strict";

		function i(t) {
			t.fn.swiper = function (e) {
				var i;
				return t(this).each(function () {
					var t = new a(this, e);
					i || (i = t)
				}), i
			}
		}
		var n, a = function (i, d) {
			function f(t) {
				return Math[Uv](t)
			}

			function h() {
				R.autoplayTimeoutId = setTimeout(function () {
					R.params[Yv] ? (R.fixLoop(), R.n(), R.emit(Kv, R)) : R.isEnd ? d.autoplayStopOnLast ? R.stopAutoplay() : (R.o(0), R.emit(Kv, R)) : (R.n(), R.emit(Kv, R))
				}, R.params[qv])
			}

			function m(t, e) {
				var i = n(t[Cs]);
				if (!i[En](e))
					if (Y == typeof e) i = i.parents(e);
					else if (e[N]) {
					var r;
					return i.parents().each(function (t, i) {
						i === e && (r = e)
					}), r ? e : void 0
				}
				if (0 !== i[S]) return i[0]
			}

			function g(e, i) {
				i = i || {};
				var n = t[_v] || t.WebkitMutationObserver,
					a = new n(function (t) {
						t[Qv](function (t) {
							R.onResize(!0), R.emit(Jv, R, t)
						})
					});
				a[Zv](e, {
					attributes: r == typeof i[Ne] || i[Ne],
					childList: r == typeof i.childList || i.childList,
					characterData: r == typeof i.characterData || i.characterData
				}), R.observers[o](a)
			}

			function b(e) {
				e.originalEvent && (e = e.originalEvent);
				var i = e[ks] || e[Ds];
				if (!R.params.allowSwipeToNext && (R.isHorizontal() && 39 === i || !R.isHorizontal() && 40 === i)) return !1;
				if (!R.params.allowSwipeToPrev && (R.isHorizontal() && 37 === i || !R.isHorizontal() && 38 === i)) return !1;
				if (!(e[tg] || e[eg] || e[ig] || e[Hs] || document[ln] && document[ln][j] && (Ie === document[ln][j][U]() || Bo === document[ln][j][U]()))) {
					if (37 === i || 39 === i || 38 === i || 40 === i) {
						var n = !1;
						if (R.container.parents(ng)[S] > 0 && 0 === R.container.parents(rg)[S]) return;
						var r = {
								left: t[Ip],
								top: t[Gp]
							},
							a = t[sm],
							s = t[ag],
							o = R.container[Cp]();
						R.rtl && (o[xr] = o[xr] - R.container[0][Ws]);
						for (var l = [
							[o[xr], o[De]],
							[o[xr] + R[ta], o[De]],
							[o[xr], o[De] + R[ru]],
							[o[xr] + R[ta], o[De] + R[ru]]
						], u = 0; u < l[S]; u++) {
							var c = l[u];
							c[0] >= r[xr] && c[0] <= r[xr] + a && c[1] >= r[De] && c[1] <= r[De] + s && (n = !0)
						}
						if (!n) return
					}
					R.isHorizontal() ? ((37 === i || 39 === i) && (e[As] ? e[As]() : e[Zs] = !1), (39 === i && !R.rtl || 37 === i && R.rtl) && R.slideNext(), (37 === i && !R.rtl || 39 === i && R.rtl) && R.slidePrev()) : ((38 === i || 40 === i) && (e[As] ? e[As]() : e[Zs] = !1), 40 === i && R.slideNext(), 38 === i && R.slidePrev())
				}
			}

			function y(e) {
				e.originalEvent && (e = e.originalEvent);
				var i = R.mousewheel[Sr],
					n = 0,
					r = R.rtl ? -1 : 1;
				if (sg === i)
					if (R.params.mousewheelForceToAxis)
						if (R.isHorizontal()) {
							if (!(Math[om](e[og]) > Math[om](e[lg]))) return;
							n = e[og] * r
						} else {
							if (!(Math[om](e[lg]) > Math[om](e[og]))) return;
							n = e[lg]
						} else n = Math[om](e[og]) > Math[om](e[lg]) ? -e[og] * r : -e[lg];
				else if (ug === i) n = -e[cg];
				else if (dg === i)
					if (R.params.mousewheelForceToAxis)
						if (R.isHorizontal()) {
							if (!(Math[om](e[pg]) > Math[om](e[fg]))) return;
							n = -e[pg] * r
						} else {
							if (!(Math[om](e[fg]) > Math[om](e[pg]))) return;
							n = -e[fg]
						} else n = Math[om](e[pg]) > Math[om](e[fg]) ? -e[pg] * r : -e[fg]; if (0 !== n) {
					if (R.params.mousewheelInvert && (n = -n), R.params.freeMode) {
						var a = R.getWrapperTranslate() + n * R.params.mousewheelSensitivity,
							s = R.isBeginning,
							o = R.isEnd;
						if (a >= R.minTranslate() && (a = R.minTranslate()), a <= R.maxTranslate() && (a = R.maxTranslate()), R.setWrapperTransition(0), R.setWrapperTranslate(a), R.updateProgress(), R.updateActiveIndex(), (!s && R.isBeginning || !o && R.isEnd) && R.updateClasses(), R.params.freeModeSticky ? (clearTimeout(R.mousewheel[wd]), R.mousewheel[wd] = setTimeout(function () {
							R.slideReset()
						}, 300)) : R.params.lazyLoading && R.lazy && R.lazy[vr](), 0 === a || a === R.maxTranslate()) return
					} else {
						if ((new t[hg])[mg]() - R.mousewheel.lastScrollTime > 60)
							if (0 > n)
								if (R.isEnd && !R.params[Yv] || R.animating) {
									if (R.params.mousewheelReleaseOnEdges) return !0
								} else R.slideNext();
						else if (R.isBeginning && !R.params[Yv] || R.animating) {
							if (R.params.mousewheelReleaseOnEdges) return !0
						} else R.slidePrev();
						R.mousewheel.lastScrollTime = (new t[hg])[mg]()
					}
					return R.params[qv] && R.stopAutoplay(), e[As] ? e[As]() : e[Zs] = !1, !1
				}
			}

			function C(t, e) {
				t = n(t);
				var i, r, a, s = R.rtl ? -1 : 1;
				i = t.attr(vg) || yn, r = t.attr(gg), a = t.attr(Tg), r || a ? (r = r || yn, a = a || yn) : R.isHorizontal() ? (r = i, a = yn) : (a = i, r = yn), r = r[l](Xm) >= 0 ? parseInt(r, 10) * e * s + Xm : r * e * s + pa, a = a[l](Xm) >= 0 ? parseInt(a, 10) * e + Xm : a * e + pa, t[bg](Sg + r + bd + a + yg)
			}

			function P(t) {
				return 0 !== t[l](as) && (t = t[0] !== t[0][v]() ? as + t[0][v]() + t[Cg](1) : as + t), t
			}
			if (!(this instanceof a)) return new a(i, d);
			var x = {
					direction: wg,
					touchEventsTarget: Pg,
					initialSlide: 0,
					speed: 300,
					autoplay: !1,
					autoplayDisableOnInteraction: !0,
					autoplayStopOnLast: !1,
					iOSEdgeSwipeDetection: !1,
					iOSEdgeSwipeThreshold: 20,
					freeMode: !1,
					freeModeMomentum: !0,
					freeModeMomentumRatio: 1,
					freeModeMomentumBounce: !0,
					freeModeMomentumBounceRatio: 1,
					freeModeSticky: !1,
					freeModeMinimumVelocity: .02,
					autoHeight: !1,
					setWrapperSize: !1,
					virtualTranslate: !1,
					effect: qf,
					coverflow: {
						rotate: 50,
						stretch: 0,
						depth: 100,
						modifier: 1,
						slideShadows: !0
					},
					flip: {
						slideShadows: !0,
						limitRotation: !0
					},
					cube: {
						slideShadows: !0,
						shadow: !0,
						shadowOffset: 20,
						shadowScale: .94
					},
					fade: {
						crossFade: !1
					},
					parallax: !1,
					scrollbar: null,
					scrollbarHide: !0,
					scrollbarDraggable: !1,
					scrollbarSnapOnRelease: !1,
					keyboardControl: !1,
					mousewheelControl: !1,
					mousewheelReleaseOnEdges: !1,
					mousewheelInvert: !1,
					mousewheelForceToAxis: !1,
					mousewheelSensitivity: 1,
					hashnav: !1,
					breakpoints: void 0,
					spaceBetween: 0,
					slidesPerView: 1,
					slidesPerColumn: 1,
					slidesPerColumnFill: Ag,
					slidesPerGroup: 1,
					centeredSlides: !1,
					slidesOffsetBefore: 0,
					slidesOffsetAfter: 0,
					roundLengths: !1,
					touchRatio: 1,
					touchAngle: 45,
					simulateTouch: !0,
					shortSwipes: !0,
					longSwipes: !0,
					longSwipesRatio: .5,
					longSwipesMs: 300,
					followFinger: !0,
					onlyExternal: !1,
					threshold: 0,
					touchMoveStopPropagation: !0,
					uniqueNavElements: !0,
					pagination: null,
					paginationElement: Mg,
					paginationClickable: !1,
					paginationHide: !1,
					paginationBulletRender: null,
					paginationProgressRender: null,
					paginationFractionRender: null,
					paginationCustomRender: null,
					paginationType: xg,
					resistance: !0,
					resistanceRatio: .85,
					nextButton: null,
					prevButton: null,
					watchSlidesProgress: !1,
					watchSlidesVisibility: !1,
					grabCursor: !1,
					preventClicks: !0,
					preventClicksPropagation: !0,
					slideToClickedSlide: !1,
					lazyLoading: !1,
					lazyLoadingInPrevNext: !1,
					lazyLoadingInPrevNextAmount: 1,
					lazyLoadingOnTransitionStart: !1,
					preloadImages: !0,
					updateOnImagesReady: !0,
					loop: !1,
					loopAdditionalSlides: 0,
					loopedSlides: null,
					control: void 0,
					controlInverse: !1,
					controlBy: qf,
					allowSwipeToPrev: !0,
					allowSwipeToNext: !0,
					swipeHandler: null,
					noSwiping: !0,
					noSwipingClass: Gg,
					slideClass: Ig,
					slideActiveClass: Hg,
					slideVisibleClass: $g,
					slideDuplicateClass: Eg,
					slideNextClass: Bg,
					slidePrevClass: Dg,
					wrapperClass: kg,
					bulletClass: Lg,
					bulletActiveClass: Rg,
					buttonDisabledClass: Og,
					paginationCurrentClass: Ng,
					paginationTotalClass: Wg,
					paginationHiddenClass: Fg,
					paginationProgressbarClass: Xg,
					observer: !1,
					observeParents: !1,
					a11y: !1,
					prevSlideMessage: Vg,
					nextSlideMessage: zg,
					firstSlideMessage: jg,
					lastSlideMessage: Ug,
					paginationBulletMessage: Yg,
					runCallbacksOnInit: !0
				},
				G = d && d.virtualTranslate;
			d = d || {};
			var H = {};
			for (var $ in d)
				if (e != typeof d[$] || null === d[$] || d[$][N] || d[$] === t || d[$] === document || r != typeof s && d[$] instanceof s || r != typeof jQuery && d[$] instanceof jQuery) H[$] = d[$];
				else {
					H[$] = {};
					for (var E in d[$]) H[$][E] = d[$][E]
				}
			for (var D in x)
				if (r == typeof d[D]) d[D] = x[D];
				else if (e == typeof d[D])
				for (var k in x[D]) r == typeof d[D][k] && (d[D][k] = x[D][k]);
			var R = this;
			if (R.params = d, R.originalParams = H, R.classNames = [], r != typeof n && r != typeof s && (n = s), (r != typeof n || (n = r == typeof s ? t.Dom7 || t.Zepto || t.jQuery : s)) && (R.$ = n, R.currentBreakpoint = void 0, R.getActiveBreakpoint = function () {
				if (!R.params.breakpoints) return !1;
				var e, i = !1,
					n = [];
				for (e in R.params.breakpoints) R.params.breakpoints[c](e) && n[o](e);
				n[A](function (t, e) {
					return parseInt(t, 10) > parseInt(e, 10)
				});
				for (var r = 0; r < n[S]; r++) e = n[r], e >= t[sm] && !i && (i = e);
				return i || K
			}, R.setBreakpoint = function () {
				var t = R.getActiveBreakpoint();
				if (t && R.currentBreakpoint !== t) {
					var e = t in R.params.breakpoints ? R.params.breakpoints[t] : R.originalParams,
						i = R.params[Yv] && e.slidesPerView !== R.params.slidesPerView;
					for (var n in e) R.params[n] = e[n];
					R.currentBreakpoint = t, i && R.destroyLoop && R.reLoop(!0)
				}
			}, R.params.breakpoints && R.setBreakpoint(), R.container = n(i), 0 !== R.container[S])) {
				if (R.container[S] > 1) {
					var O = [];
					return R.container.each(function () {
						O[o](new a(this, d))
					}), O
				}
				R.container[0].swiper = R, R.container[Vr](Kg, R), R.classNames[o](qg + R.params[_g]), R.params.freeMode && R.classNames[o](Qg), R.support.flexbox || (R.classNames[o](Jg), R.params.slidesPerColumn = 1), R.params.autoHeight && R.classNames[o](Zg), (R.params.parallax || R.params.watchSlidesVisibility) && (R.params.watchSlidesProgress = !0), [tT, eT, iT][l](R.params.effect) >= 0 && (R.support.transforms3d ? (R.params.watchSlidesProgress = !0, R.classNames[o](nT)) : R.params.effect = qf), qf !== R.params.effect && R.classNames[o](qg + R.params.effect), tT === R.params.effect && (R.params.resistanceRatio = 0, R.params.slidesPerView = 1, R.params.slidesPerColumn = 1, R.params.slidesPerGroup = 1, R.params.centeredSlides = !1, R.params.spaceBetween = 0, R.params.virtualTranslate = !0, R.params.setWrapperSize = !1), (lf === R.params.effect || iT === R.params.effect) && (R.params.slidesPerView = 1, R.params.slidesPerColumn = 1, R.params.slidesPerGroup = 1, R.params.watchSlidesProgress = !0, R.params.spaceBetween = 0, R.params.setWrapperSize = !1, r == typeof G && (R.params.virtualTranslate = !0)), R.params.grabCursor && R.support.touch && (R.params.grabCursor = !1), R.wrapper = R.container[Wf](ds + R.params.wrapperClass), R.params.pagination && (R.paginationContainer = n(R.params.pagination), R.params.uniqueNavElements && Y == typeof R.params.pagination && R.paginationContainer[S] > 1 && 1 === R.container[ze](R.params.pagination)[S] && (R.paginationContainer = R.container[ze](R.params.pagination)), xg === R.params.paginationType && R.params.paginationClickable ? R.paginationContainer.addClass(rT) : R.params.paginationClickable = !1, R.paginationContainer.addClass(aT + R.params.paginationType)), (R.params.nextButton || R.params.prevButton) && (R.params.nextButton && (R.nextButton = n(R.params.nextButton), R.params.uniqueNavElements && Y == typeof R.params.nextButton && R.nextButton[S] > 1 && 1 === R.container[ze](R.params.nextButton)[S] && (R.nextButton = R.container[ze](R.params.nextButton))), R.params.prevButton && (R.prevButton = n(R.params.prevButton), R.params.uniqueNavElements && Y == typeof R.params.prevButton && R.prevButton[S] > 1 && 1 === R.container[ze](R.params.prevButton)[S] && (R.prevButton = R.container[ze](R.params.prevButton)))), R.isHorizontal = function () {
					return wg === R.params[_g]
				}, R.rtl = R.isHorizontal() && (sT === R.container[0][Sn][U]() || sT === R.container.css(_g)), R.rtl && R.classNames[o](oT), R.rtl && (R.wrongRTL = lT === R.wrapper.css(da)), R.params.slidesPerColumn > 1 && R.classNames[o](uT), R.device.android && R.classNames[o](cT), R.container.addClass(R.classNames[ve](J)), R[dT] = 0, R.progress = 0, R.velocity = 0, R.lockSwipeToNext = function () {
					R.params.allowSwipeToNext = !1
				}, R.lockSwipeToPrev = function () {
					R.params.allowSwipeToPrev = !1
				}, R.lockSwipes = function () {
					R.params.allowSwipeToNext = R.params.allowSwipeToPrev = !1
				}, R.unlockSwipeToNext = function () {
					R.params.allowSwipeToNext = !0
				}, R.unlockSwipeToPrev = function () {
					R.params.allowSwipeToPrev = !0
				}, R.unlockSwipes = function () {
					R.params.allowSwipeToNext = R.params.allowSwipeToPrev = !0
				}, R.params.grabCursor && (R.container[0][Ir][pT] = fT, R.container[0][Ir][pT] = hT, R.container[0][Ir][pT] = mT, R.container[0][Ir][pT] = vT), R.imagesToLoad = [], R.imagesLoaded = 0, R.loadImage = function (e, i, n, r, a) {
					function s() {
						a && a()
					}
					var o;
					e[yr] && r ? s() : i ? (o = new t[gT], o[br] = s, o[TT] = s, n && (o[bT] = n), i && (o[ko] = i)) : s()
				}, R.preloadImages = function () {
					function t() {
						r != typeof R && null !== R && (void 0 !== R.imagesLoaded && R.imagesLoaded++, R.imagesLoaded === R.imagesToLoad[S] && (R.params.updateOnImagesReady && R[ST](), R.emit(yT, R)))
					}
					R.imagesToLoad = R.container[ze](CT);
					for (var e = 0; e < R.imagesToLoad[S]; e++) R.loadImage(R.imagesToLoad[e], R.imagesToLoad[e][wT] || R.imagesToLoad[e][ce](ko), R.imagesToLoad[e][bT] || R.imagesToLoad[e][ce](bT), !0, t)
				}, R.autoplayTimeoutId = void 0, R.autoplaying = !1, R.autoplayPaused = !1, R.startAutoplay = function () {
					return r == typeof R.autoplayTimeoutId && (!!R.params[qv] && (!R.autoplaying && (R.autoplaying = !0, R.emit(PT, R), void h())))
				}, R.stopAutoplay = function (t) {
					R.autoplayTimeoutId && (R.autoplayTimeoutId && clearTimeout(R.autoplayTimeoutId), R.autoplaying = !1, R.autoplayTimeoutId = void 0, R.emit(AT, R))
				}, R.pauseAutoplay = function (t) {
					R.autoplayPaused || (R.autoplayTimeoutId && clearTimeout(R.autoplayTimeoutId), R.autoplayPaused = !0, 0 === t ? (R.autoplayPaused = !1, h()) : R.wrapper.transitionEnd(function () {
						R && (R.autoplayPaused = !1, R.autoplaying ? h() : R.stopAutoplay())
					}))
				}, R.minTranslate = function () {
					return -R.snapGrid[0]
				}, R.maxTranslate = function () {
					return -R.snapGrid[R.snapGrid[S] - 1]
				}, R.updateAutoHeight = function () {
					var t = R.slides.eq(R.activeIndex)[0];
					if (r != typeof t) {
						var e = t[wl];
						e && R.wrapper.css(ru, e + pa)
					}
				}, R.updateContainerSize = function () {
					var t, e;
					t = r != typeof R.params[ta] ? R.params[ta] : R.container[0][lm], e = r != typeof R.params[ru] ? R.params[ru] : R.container[0][am], 0 === t && R.isHorizontal() || 0 === e && !R.isHorizontal() || (t = t - parseInt(R.container.css(MT), 10) - parseInt(R.container.css(um), 10), e = e - parseInt(R.container.css(xT), 10) - parseInt(R.container.css(GT), 10), R[ta] = t, R[ru] = e, R[Wp] = R.isHorizontal() ? R[ta] : R[ru])
				}, R.updateSlidesSize = function () {
					R.slides = R.wrapper[Wf](ds + R.params.slideClass), R.snapGrid = [], R.slidesGrid = [], R.slidesSizesGrid = [];
					var t, e = R.params.spaceBetween,
						i = -R.params.slidesOffsetBefore,
						n = 0,
						a = 0;
					if (r != typeof R[Wp]) {
						Y == typeof e && e[l](Xm) >= 0 && (e = parseFloat(e[B](Xm, T)) / 100 * R[Wp]), R.virtualSize = -e, R.rtl ? R.slides.css({
							marginLeft: T,
							marginTop: T
						}) : R.slides.css({
							marginRight: T,
							marginBottom: T
						});
						var s;
						R.params.slidesPerColumn > 1 && (s = Math[Uv](R.slides[S] / R.params.slidesPerColumn) === R.slides[S] / R.params.slidesPerColumn ? R.slides[S] : Math[IT](R.slides[S] / R.params.slidesPerColumn) * R.params.slidesPerColumn, Dl !== R.params.slidesPerView && HT === R.params.slidesPerColumnFill && (s = Math[K](s, R.params.slidesPerView * R.params.slidesPerColumn)));
						var u, c = R.params.slidesPerColumn,
							d = s / c,
							p = d - (R.params.slidesPerColumn * d - R.slides[S]);
						for (t = 0; t < R.slides[S]; t++) {
							u = 0;
							var h = R.slides.eq(t);
							if (R.params.slidesPerColumn > 1) {
								var m, v, g;
								Ag === R.params.slidesPerColumnFill ? (v = Math[Uv](t / c), g = t - v * c, (v > p || v === p && g === c - 1) && ++g >= c && (g = 0, v++), m = v + g * s / c, h.css({
									"-webkit-box-ordinal-group": m,
									"-moz-box-ordinal-group": m,
									"-ms-flex-order": m,
									"-webkit-order": m,
									order: m
								})) : (g = Math[Uv](t / d), v = t - g * d), h.css({
									"margin-top": 0 !== g && R.params.spaceBetween && R.params.spaceBetween + pa
								}).attr($T, v).attr(ET, g)
							}
							ca !== h.css(da) && (Dl === R.params.slidesPerView ? (u = R.isHorizontal() ? h[BT](!0) : h[DT](!0), R.params.roundLengths && (u = f(u))) : (u = (R[Wp] - (R.params.slidesPerView - 1) * e) / R.params.slidesPerView, R.params.roundLengths && (u = f(u)), R.isHorizontal() ? R.slides[t][Ir][ta] = u + pa : R.slides[t][Ir][ru] = u + pa), R.slides[t].swiperSlideSize = u, R.slidesSizesGrid[o](u), R.params.centeredSlides ? (i = i + u / 2 + n / 2 + e, 0 === t && (i = i - R[Wp] / 2 - e), Math[om](i) < .001 && (i = 0), a % R.params.slidesPerGroup === 0 && R.snapGrid[o](i), R.slidesGrid[o](i)) : (a % R.params.slidesPerGroup === 0 && R.snapGrid[o](i), R.slidesGrid[o](i), i = i + u + e), R.virtualSize += u + e, n = u, a++)
						}
						R.virtualSize = Math[K](R.virtualSize, R[Wp]) + R.params.slidesOffsetAfter;
						var b;
						if (R.rtl && R.wrongRTL && (qf === R.params.effect || eT === R.params.effect) && R.wrapper.css({
							width: R.virtualSize + R.params.spaceBetween + pa
						}), (!R.support.flexbox || R.params.setWrapperSize) && (R.isHorizontal() ? R.wrapper.css({
							width: R.virtualSize + R.params.spaceBetween + pa
						}) : R.wrapper.css({
							height: R.virtualSize + R.params.spaceBetween + pa
						})), R.params.slidesPerColumn > 1 && (R.virtualSize = (u + R.params.spaceBetween) * s, R.virtualSize = Math[IT](R.virtualSize / R.params.slidesPerColumn) - R.params.spaceBetween, R.wrapper.css({
							width: R.virtualSize + R.params.spaceBetween + pa
						}), R.params.centeredSlides)) {
							for (b = [], t = 0; t < R.snapGrid[S]; t++) R.snapGrid[t] < R.virtualSize + R.snapGrid[0] && b[o](R.snapGrid[t]);
							R.snapGrid = b
						}
						if (!R.params.centeredSlides) {
							for (b = [], t = 0; t < R.snapGrid[S]; t++) R.snapGrid[t] <= R.virtualSize - R[Wp] && b[o](R.snapGrid[t]);
							R.snapGrid = b, Math[Uv](R.virtualSize - R[Wp]) - Math[Uv](R.snapGrid[R.snapGrid[S] - 1]) > 1 && R.snapGrid[o](R.virtualSize - R[Wp])
						}
						0 === R.snapGrid[S] && (R.snapGrid = [0]), 0 !== R.params.spaceBetween && (R.isHorizontal() ? R.rtl ? R.slides.css({
							marginLeft: e + pa
						}) : R.slides.css({
							marginRight: e + pa
						}) : R.slides.css({
							marginBottom: e + pa
						})), R.params.watchSlidesProgress && R.updateSlidesOffset()
					}
				}, R.updateSlidesOffset = function () {
					for (var t = 0; t < R.slides[S]; t++) R.slides[t].swiperSlideOffset = R.isHorizontal() ? R.slides[t][kT] : R.slides[t][jv]
				}, R.updateSlidesProgress = function (t) {
					if (r == typeof t && (t = R[dT] || 0), 0 !== R.slides[S]) {
						r == typeof R.slides[0].swiperSlideOffset && R.updateSlidesOffset();
						var e = -t;
						R.rtl && (e = t), R.slides.removeClass(R.params.slideVisibleClass);
						for (var i = 0; i < R.slides[S]; i++) {
							var n = R.slides[i],
								a = (e - n.swiperSlideOffset) / (n.swiperSlideSize + R.params.spaceBetween);
							if (R.params.watchSlidesVisibility) {
								var s = -(e - n.swiperSlideOffset),
									o = s + R.slidesSizesGrid[i],
									l = s >= 0 && s < R[Wp] || o > 0 && o <= R[Wp] || 0 >= s && o >= R[Wp];
								l && R.slides.eq(i).addClass(R.params.slideVisibleClass)
							}
							n.progress = R.rtl ? -a : a
						}
					}
				}, R.updateProgress = function (t) {
					r == typeof t && (t = R[dT] || 0);
					var e = R.maxTranslate() - R.minTranslate(),
						i = R.isBeginning,
						n = R.isEnd;
					0 === e ? (R.progress = 0, R.isBeginning = R.isEnd = !0) : (R.progress = (t - R.minTranslate()) / e, R.isBeginning = R.progress <= 0, R.isEnd = R.progress >= 1), R.isBeginning && !i && R.emit(LT, R), R.isEnd && !n && R.emit(RT, R), R.params.watchSlidesProgress && R.updateSlidesProgress(t), R.emit(OT, R, R.progress)
				}, R.updateActiveIndex = function () {
					var t, e, i, n = R.rtl ? R[dT] : -R[dT];
					for (e = 0; e < R.slidesGrid[S]; e++) r != typeof R.slidesGrid[e + 1] ? n >= R.slidesGrid[e] && n < R.slidesGrid[e + 1] - (R.slidesGrid[e + 1] - R.slidesGrid[e]) / 2 ? t = e : n >= R.slidesGrid[e] && n < R.slidesGrid[e + 1] && (t = e + 1) : n >= R.slidesGrid[e] && (t = e);
					(0 > t || r == typeof t) && (t = 0), i = Math[Uv](t / R.params.slidesPerGroup), i >= R.snapGrid[S] && (i = R.snapGrid[S] - 1), t !== R.activeIndex && (R.snapIndex = i, R.previousIndex = R.activeIndex, R.activeIndex = t, R.updateClasses())
				}, R.updateClasses = function () {
					R.slides.removeClass(R.params.slideActiveClass + J + R.params.slideNextClass + J + R.params.slidePrevClass);
					var t = R.slides.eq(R.activeIndex);
					t.addClass(R.params.slideActiveClass);
					var e = t[Nf](ds + R.params.slideClass).addClass(R.params.slideNextClass);
					R.params[Yv] && 0 === e[S] && R.slides.eq(0).addClass(R.params.slideNextClass);
					var i = t.prev(ds + R.params.slideClass).addClass(R.params.slidePrevClass);
					if (R.params[Yv] && 0 === i[S] && R.slides.eq(-1).addClass(R.params.slidePrevClass), R.paginationContainer && R.paginationContainer[S] > 0) {
						var a, s = R.params[Yv] ? Math[IT]((R.slides[S] - 2 * R.loopedSlides) / R.params.slidesPerGroup) : R.snapGrid[S];
						if (R.params[Yv] ? (a = Math[IT]((R.activeIndex - R.loopedSlides) / R.params.slidesPerGroup), a > R.slides[S] - 1 - 2 * R.loopedSlides && (a -= R.slides[S] - 2 * R.loopedSlides), a > s - 1 && (a -= s), 0 > a && xg !== R.params.paginationType && (a = s + a)) : a = r != typeof R.snapIndex ? R.snapIndex : R.activeIndex || 0, xg === R.params.paginationType && R.bullets && R.bullets[S] > 0 && (R.bullets.removeClass(R.params.bulletActiveClass), R.paginationContainer[S] > 1 ? R.bullets.each(function () {
							n(this)[Xn]() === a && n(this).addClass(R.params.bulletActiveClass)
						}) : R.bullets.eq(a).addClass(R.params.bulletActiveClass)), NT === R.params.paginationType && (R.paginationContainer[ze](ds + R.params.paginationCurrentClass)[Tn](a + 1), R.paginationContainer[ze](ds + R.params.paginationTotalClass)[Tn](s)), lr === R.params.paginationType) {
							var o = (a + 1) / s,
								l = o,
								u = 1;
							R.isHorizontal() || (u = o, l = 1), R.paginationContainer[ze](ds + R.params.paginationProgressbarClass)[bg](WT + l + FT + u + At)[qp](R.params[Mu])
						}
						XT === R.params.paginationType && R.params.paginationCustomRender && (R.paginationContainer.html(R.params.paginationCustomRender(R, a + 1, s)), R.emit(VT, R, R.paginationContainer[0]))
					}
					R.params[Yv] || (R.params.prevButton && R.prevButton && R.prevButton[S] > 0 && (R.isBeginning ? (R.prevButton.addClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y[Zn](R.prevButton)) : (R.prevButton.removeClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y[Zm](R.prevButton))), R.params.nextButton && R.nextButton && R.nextButton[S] > 0 && (R.isEnd ? (R.nextButton.addClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y[Zn](R.nextButton)) : (R.nextButton.removeClass(R.params.buttonDisabledClass), R.params.a11y && R.a11y && R.a11y[Zm](R.nextButton))))
				}, R.updatePagination = function () {
					if (R.params.pagination && R.paginationContainer && R.paginationContainer[S] > 0) {
						var t = T;
						if (xg === R.params.paginationType) {
							for (var e = R.params[Yv] ? Math[IT]((R.slides[S] - 2 * R.loopedSlides) / R.params.slidesPerGroup) : R.snapGrid[S], i = 0; e > i; i++) t += R.params.paginationBulletRender ? R.params.paginationBulletRender(i, R.params.bulletClass) : On + R.params.paginationElement + zT + R.params.bulletClass + jT + R.params.paginationElement + Wn;
							R.paginationContainer.html(t), R.bullets = R.paginationContainer[ze](ds + R.params.bulletClass), R.params.paginationClickable && R.params.a11y && R.a11y && R.a11y.initPagination()
						}
						NT === R.params.paginationType && (t = R.params.paginationFractionRender ? R.params.paginationFractionRender(R, R.params.paginationCurrentClass, R.params.paginationTotalClass) : UT + R.params.paginationCurrentClass + YT + R.params.paginationTotalClass + KT, R.paginationContainer.html(t)), lr === R.params.paginationType && (t = R.params.paginationProgressRender ? R.params.paginationProgressRender(R, R.params.paginationProgressbarClass) : UT + R.params.paginationProgressbarClass + KT, R.paginationContainer.html(t)), XT !== R.params.paginationType && R.emit(VT, R, R.paginationContainer[0])
					}
				}, R[ST] = function (t) {
					function e() {
						n = Math[qT](Math[K](R[dT], R.maxTranslate()), R.minTranslate()), R.setWrapperTranslate(n), R.updateActiveIndex(), R.updateClasses()
					}
					if (R.updateContainerSize(), R.updateSlidesSize(), R.updateProgress(), R.updatePagination(), R.updateClasses(), R.params.scrollbar && R.scrollbar && R.scrollbar[iu](), t) {
						var i, n;
						R[_T] && R[_T].spline && (R[_T].spline = void 0), R.params.freeMode ? (e(), R.params.autoHeight && R.updateAutoHeight()) : (i = (Dl === R.params.slidesPerView || R.params.slidesPerView > 1) && R.isEnd && !R.params.centeredSlides ? R.slideTo(R.slides[S] - 1, 0, !1, !0) : R.slideTo(R.activeIndex, 0, !1, !0), i || e())
					} else R.params.autoHeight && R.updateAutoHeight()
				}, R.onResize = function (t) {
					R.params.breakpoints && R.setBreakpoint();
					var e = R.params.allowSwipeToPrev,
						i = R.params.allowSwipeToNext;
					R.params.allowSwipeToPrev = R.params.allowSwipeToNext = !0, R.updateContainerSize(), R.updateSlidesSize(), (Dl === R.params.slidesPerView || R.params.freeMode || t) && R.updatePagination(), R.params.scrollbar && R.scrollbar && R.scrollbar[iu](), R[_T] && R[_T].spline && (R[_T].spline = void 0);
					var n = !1;
					if (R.params.freeMode) {
						var r = Math[qT](Math[K](R[dT], R.maxTranslate()), R.minTranslate());
						R.setWrapperTranslate(r), R.updateActiveIndex(), R.updateClasses(), R.params.autoHeight && R.updateAutoHeight()
					} else R.updateClasses(), n = (Dl === R.params.slidesPerView || R.params.slidesPerView > 1) && R.isEnd && !R.params.centeredSlides ? R.slideTo(R.slides[S] - 1, 0, !1, !0) : R.slideTo(R.activeIndex, 0, !1, !0);
					R.params.lazyLoading && !n && R.lazy && R.lazy[vr](), R.params.allowSwipeToPrev = e, R.params.allowSwipeToNext = i
				};
				var W = [QT, JT, ZT];
				t[tb][eb] ? W = [ib, nb, rb] : t[tb][ab] && (W = [sb, ob, lb]), R.touchEvents = {
					start: R.support.touch || !R.params.simulateTouch ? ub : W[0],
					move: R.support.touch || !R.params.simulateTouch ? cb : W[1],
					end: R.support.touch || !R.params.simulateTouch ? db : W[2]
				}, (t[tb][eb] || t[tb][ab]) && (Pg === R.params.touchEventsTarget ? R.container : R.wrapper).addClass(pb + R.params[_g]), R.initEvents = function (e) {
					var i = e ? fb : as,
						n = e ? hr : ke,
						r = Pg === R.params.touchEventsTarget ? R.container[0] : R.wrapper[0],
						a = R.support.touch ? r : document,
						s = !!R.params.nested;
					R.browser.ie ? (r[n](R.touchEvents[ha], R.onTouchStart, !1), a[n](R.touchEvents[fT], R.onTouchMove, s), a[n](R.touchEvents[ma], R.onTouchEnd, !1)) : (R.support.touch && (r[n](R.touchEvents[ha], R.onTouchStart, !1), r[n](R.touchEvents[fT], R.onTouchMove, s), r[n](R.touchEvents[ma], R.onTouchEnd, !1)), !d.simulateTouch || R.device.ios || R.device.android || (r[n](QT, R.onTouchStart, !1), document[n](JT, R.onTouchMove, s), document[n](ZT, R.onTouchEnd, !1))), t[n](Yh, R.onResize), R.params.nextButton && R.nextButton && R.nextButton[S] > 0 && (R.nextButton[i](Gs, R.onClickNext), R.params.a11y && R.a11y && R.nextButton[i](hb, R.a11y.onEnterKey)), R.params.prevButton && R.prevButton && R.prevButton[S] > 0 && (R.prevButton[i](Gs, R.onClickPrev), R.params.a11y && R.a11y && R.prevButton[i](hb, R.a11y.onEnterKey)), R.params.pagination && R.params.paginationClickable && (R.paginationContainer[i](Gs, ds + R.params.bulletClass, R.onClickIndex), R.params.a11y && R.a11y && R.paginationContainer[i](hb, ds + R.params.bulletClass, R.a11y.onEnterKey)), (R.params.preventClicks || R.params.preventClicksPropagation) && r[n](Gs, R.preventClicks, !0)
				}, R.attachEvents = function () {
					R.initEvents()
				}, R.detachEvents = function () {
					R.initEvents(!0)
				}, R.allowClick = !0, R.preventClicks = function (t) {
					R.allowClick || (R.params.preventClicks && t[As](), R.params.preventClicksPropagation && R.animating && (t[xs](), t[ro]()))
				}, R.onClickNext = function (t) {
					t[As](), (!R.isEnd || R.params[Yv]) && R.slideNext()
				}, R.onClickPrev = function (t) {
					t[As](), (!R.isBeginning || R.params[Yv]) && R.slidePrev()
				}, R.onClickIndex = function (t) {
					t[As]();
					var e = n(this)[Xn]() * R.params.slidesPerGroup;
					R.params[Yv] && (e += R.loopedSlides), R.slideTo(e)
				}, R.updateClickedSlide = function (t) {
					var e = m(t, ds + R.params.slideClass),
						i = !1;
					if (e)
						for (var r = 0; r < R.slides[S]; r++) R.slides[r] === e && (i = !0);
					if (!e || !i) return R.clickedSlide = void 0, void(R.clickedIndex = void 0);
					if (R.clickedSlide = e, R.clickedIndex = n(e)[Xn](), R.params.slideToClickedSlide && void 0 !== R.clickedIndex && R.clickedIndex !== R.activeIndex) {
						var a, s = R.clickedIndex;
						if (R.params[Yv]) {
							if (R.animating) return;
							a = n(R.clickedSlide).attr(mb), R.params.centeredSlides ? s < R.loopedSlides - R.params.slidesPerView / 2 || s > R.slides[S] - R.loopedSlides + R.params.slidesPerView / 2 ? (R.fixLoop(), s = R.wrapper[Wf](ds + R.params.slideClass + vb + a + gb).eq(0)[Xn](), setTimeout(function () {
								R.slideTo(s)
							}, 0)) : R.slideTo(s) : s > R.slides[S] - R.params.slidesPerView ? (R.fixLoop(), s = R.wrapper[Wf](ds + R.params.slideClass + vb + a + gb).eq(0)[Xn](), setTimeout(function () {
								R.slideTo(s)
							}, 0)) : R.slideTo(s)
						} else R.slideTo(s)
					}
				};
				var F, X, V, z, q, _, Z, tt, et, it, rt = Tb,
					at = Date[io](),
					st = [];
				R.animating = !1, R[bb] = {
					startX: 0,
					startY: 0,
					currentX: 0,
					currentY: 0,
					diff: 0
				};
				var ot, lt;
				if (R.onTouchStart = function (t) {
					if (t.originalEvent && (t = t.originalEvent), ot = ub === t[L], ot || !(Bs in t) || 3 !== t[Bs]) {
						if (R.params.noSwiping && m(t, ds + R.params.noSwipingClass)) return void(R.allowClick = !0);
						if (!R.params.swipeHandler || m(t, R.params.swipeHandler)) {
							var e = R[bb].currentX = ub === t[L] ? t[Sb][0][Os] : t[Os],
								i = R[bb].currentY = ub === t[L] ? t[Sb][0][Xs] : t[Xs];
							if (!(R.device.ios && R.params.iOSEdgeSwipeDetection && e <= R.params.iOSEdgeSwipeThreshold)) {
								if (F = !0, X = !1, V = !0, q = void 0, lt = void 0, R[bb].startX = e, R[bb].startY = i, z = Date[io](), R.allowClick = !0, R.updateContainerSize(), R.swipeDirection = void 0, R.params[yb] > 0 && (tt = !1), ub !== t[L]) {
									var r = !0;
									n(t[Cs])[En](rt) && (r = !1), document[ln] && n(document[ln])[En](rt) && document[ln][_s](), r && t[As]()
								}
								R.emit(Cb, R, t)
							}
						}
					}
				}, R.onTouchMove = function (e) {
					if (e.originalEvent && (e = e.originalEvent), !ot || JT !== e[L]) {
						if (e.preventedByNestedSwiper) return R[bb].startX = cb === e[L] ? e[Sb][0][Os] : e[Os], void(R[bb].startY = cb === e[L] ? e[Sb][0][Xs] : e[Xs]);
						if (R.params.onlyExternal) return R.allowClick = !1, void(F && (R[bb].startX = R[bb].currentX = cb === e[L] ? e[Sb][0][Os] : e[Os], R[bb].startY = R[bb].currentY = cb === e[L] ? e[Sb][0][Xs] : e[Xs], z = Date[io]()));
						if (ot && document[ln] && e[Cs] === document[ln] && n(e[Cs])[En](rt)) return X = !0, void(R.allowClick = !1);
						if (V && R.emit(wb, R, e), !(e[Sb] && e[Sb][S] > 1)) {
							if (R[bb].currentX = cb === e[L] ? e[Sb][0][Os] : e[Os], R[bb].currentY = cb === e[L] ? e[Sb][0][Xs] : e[Xs], r == typeof q) {
								var i = 180 * Math[Pb](Math[om](R[bb].currentY - R[bb].startY), Math[om](R[bb].currentX - R[bb].startX)) / Math[fu];
								q = R.isHorizontal() ? i > R.params.touchAngle : 90 - i > R.params.touchAngle
							}
							if (q && R.emit(Ab, R, e), r == typeof lt && R.browser.ieTouch && (R[bb].currentX !== R[bb].startX || R[bb].currentY !== R[bb].startY) && (lt = !0), F) {
								if (q) return void(F = !1);
								if (lt || !R.browser.ieTouch) {
									R.allowClick = !1, R.emit(Mb, R, e), e[As](), R.params.touchMoveStopPropagation && !R.params.nested && e[xs](), X || (d[Yv] && R.fixLoop(), Z = R.getWrapperTranslate(), R.setWrapperTransition(0), R.animating && R.wrapper.trigger(xb), R.params[qv] && R.autoplaying && (R.params.autoplayDisableOnInteraction ? R.stopAutoplay() : R.pauseAutoplay()), it = !1, R.params.grabCursor && (R.container[0][Ir][pT] = fT, R.container[0][Ir][pT] = Gb, R.container[0][Ir][pT] = Ib, R.container[0][Ir][pT] = Hb)), X = !0;
									var a = R[bb].diff = R.isHorizontal() ? R[bb].currentX - R[bb].startX : R[bb].currentY - R[bb].startY;
									a *= R.params.touchRatio, R.rtl && (a = -a), R.swipeDirection = a > 0 ? Xf : Nf, _ = a + Z;
									var s = !0;
									if (a > 0 && _ > R.minTranslate() ? (s = !1, R.params.resistance && (_ = R.minTranslate() - 1 + Math[$b](-R.minTranslate() + Z + a, R.params.resistanceRatio))) : 0 > a && _ < R.maxTranslate() && (s = !1, R.params.resistance && (_ = R.maxTranslate() + 1 - Math[$b](R.maxTranslate() - Z - a, R.params.resistanceRatio))), s && (e.preventedByNestedSwiper = !0), !R.params.allowSwipeToNext && Nf === R.swipeDirection && Z > _ && (_ = Z), !R.params.allowSwipeToPrev && Xf === R.swipeDirection && _ > Z && (_ = Z), R.params.followFinger) {
										if (R.params[yb] > 0) {
											if (!(Math[om](a) > R.params[yb] || tt)) return void(_ = Z);
											if (!tt) return tt = !0, R[bb].startX = R[bb].currentX, R[bb].startY = R[bb].currentY, _ = Z, void(R[bb].diff = R.isHorizontal() ? R[bb].currentX - R[bb].startX : R[bb].currentY - R[bb].startY)
										}(R.params.freeMode || R.params.watchSlidesProgress) && R.updateActiveIndex(), R.params.freeMode && (0 === st[S] && st[o]({
											position: R[bb][R.isHorizontal() ? Eb : Bb],
											time: z
										}), st[o]({
											position: R[bb][R.isHorizontal() ? Db : kb],
											time: (new t[hg])[mg]()
										})), R.updateProgress(_), R.setWrapperTranslate(_)
									}
								}
							}
						}
					}
				}, R.onTouchEnd = function (e) {
					if (e.originalEvent && (e = e.originalEvent), V && R.emit(Lb, R, e), V = !1, F) {
						R.params.grabCursor && X && F && (R.container[0][Ir][pT] = fT, R.container[0][Ir][pT] = hT, R.container[0][Ir][pT] = mT, R.container[0][Ir][pT] = vT);
						var i = Date[io](),
							a = i - z;
						if (R.allowClick && (R.updateClickedSlide(e), R.emit(Rb, R, e), 300 > a && i - at > 300 && (et && clearTimeout(et), et = setTimeout(function () {
							R && (R.params.paginationHide && R.paginationContainer[S] > 0 && !n(e[Cs]).hasClass(R.params.bulletClass) && R.paginationContainer.toggleClass(R.params.paginationHiddenClass), R.emit(Ob, R, e))
						}, 300)), 300 > a && 300 > i - at && (et && clearTimeout(et), R.emit(Nb, R, e))), at = Date[io](), setTimeout(function () {
							R && (R.allowClick = !0)
						}, 0), !F || !X || !R.swipeDirection || 0 === R[bb].diff || _ === Z) return void(F = X = !1);
						F = X = !1;
						var s;
						if (s = R.params.followFinger ? R.rtl ? R[dT] : -R[dT] : -_, R.params.freeMode) {
							if (s < -R.minTranslate()) return void R.slideTo(R.activeIndex);
							if (s > -R.maxTranslate()) return void(R.slides[S] < R.snapGrid[S] ? R.slideTo(R.snapGrid[S] - 1) : R.slideTo(R.slides[S] - 1));
							if (R.params.freeModeMomentum) {
								if (st[S] > 1) {
									var o = st[nt](),
										l = st[nt](),
										u = o[wp] - l[wp],
										c = o[Wb] - l[Wb];
									R.velocity = u / c, R.velocity = R.velocity / 2, Math[om](R.velocity) < R.params.freeModeMinimumVelocity && (R.velocity = 0), (c > 150 || (new t[hg])[mg]() - o[Wb] > 300) && (R.velocity = 0)
								} else R.velocity = 0;
								st[S] = 0;
								var d = 1e3 * R.params.freeModeMomentumRatio,
									p = R.velocity * d,
									f = R[dT] + p;
								R.rtl && (f = -f);
								var h, m = !1,
									v = 20 * Math[om](R.velocity) * R.params.freeModeMomentumBounceRatio;
								if (f < R.maxTranslate()) R.params.freeModeMomentumBounce ? (f + R.maxTranslate() < -v && (f = R.maxTranslate() - v), h = R.maxTranslate(), m = !0, it = !0) : f = R.maxTranslate();
								else if (f > R.minTranslate()) R.params.freeModeMomentumBounce ? (f - R.minTranslate() > v && (f = R.minTranslate() + v), h = R.minTranslate(), m = !0, it = !0) : f = R.minTranslate();
								else if (R.params.freeModeSticky) {
									var g, T = 0;
									for (T = 0; T < R.snapGrid[S]; T += 1)
										if (R.snapGrid[T] > -f) {
											g = T;
											break
										}
									f = Math[om](R.snapGrid[g] - f) < Math[om](R.snapGrid[g - 1] - f) || Nf === R.swipeDirection ? R.snapGrid[g] : R.snapGrid[g - 1], R.rtl || (f = -f)
								}
								if (0 !== R.velocity) d = R.rtl ? Math[om]((-f - R[dT]) / R.velocity) : Math[om]((f - R[dT]) / R.velocity);
								else if (R.params.freeModeSticky) return void R.slideReset();
								R.params.freeModeMomentumBounce && m ? (R.updateProgress(h), R.setWrapperTransition(d), R.setWrapperTranslate(f), R.onTransitionStart(), R.animating = !0, R.wrapper.transitionEnd(function () {
									R && it && (R.emit(Fb, R), R.setWrapperTransition(R.params[Mu]), R.setWrapperTranslate(h), R.wrapper.transitionEnd(function () {
										R && R.onTransitionEnd()
									}))
								})) : R.velocity ? (R.updateProgress(f), R.setWrapperTransition(d), R.setWrapperTranslate(f), R.onTransitionStart(), R.animating || (R.animating = !0, R.wrapper.transitionEnd(function () {
									R && R.onTransitionEnd()
								}))) : R.updateProgress(f), R.updateActiveIndex()
							}
							return void((!R.params.freeModeMomentum || a >= R.params.longSwipesMs) && (R.updateProgress(), R.updateActiveIndex()))
						}
						var b, y = 0,
							C = R.slidesSizesGrid[0];
						for (b = 0; b < R.slidesGrid[S]; b += R.params.slidesPerGroup) r != typeof R.slidesGrid[b + R.params.slidesPerGroup] ? s >= R.slidesGrid[b] && s < R.slidesGrid[b + R.params.slidesPerGroup] && (y = b, C = R.slidesGrid[b + R.params.slidesPerGroup] - R.slidesGrid[b]) : s >= R.slidesGrid[b] && (y = b, C = R.slidesGrid[R.slidesGrid[S] - 1] - R.slidesGrid[R.slidesGrid[S] - 2]);
						var w = (s - R.slidesGrid[y]) / C;
						if (a > R.params.longSwipesMs) {
							if (!R.params.longSwipes) return void R.slideTo(R.activeIndex);
							Nf === R.swipeDirection && (w >= R.params.longSwipesRatio ? R.slideTo(y + R.params.slidesPerGroup) : R.slideTo(y)), Xf === R.swipeDirection && (w > 1 - R.params.longSwipesRatio ? R.slideTo(y + R.params.slidesPerGroup) : R.slideTo(y))
						} else {
							if (!R.params.shortSwipes) return void R.slideTo(R.activeIndex);
							Nf === R.swipeDirection && R.slideTo(y + R.params.slidesPerGroup), Xf === R.swipeDirection && R.slideTo(y)
						}
					}
				}, R.o = function (t, e) {
					return R.slideTo(t, e, !0, !0)
				}, R.slideTo = function (t, e, i, n) {
					r == typeof i && (i = !0), r == typeof t && (t = 0), 0 > t && (t = 0), R.snapIndex = Math[Uv](t / R.params.slidesPerGroup), R.snapIndex >= R.snapGrid[S] && (R.snapIndex = R.snapGrid[S] - 1);
					var a = -R.snapGrid[R.snapIndex];
					R.params[qv] && R.autoplaying && (n || !R.params.autoplayDisableOnInteraction ? R.pauseAutoplay(e) : R.stopAutoplay()), R.updateProgress(a);
					for (var s = 0; s < R.slidesGrid[S]; s++) - Math[Uv](100 * a) >= Math[Uv](100 * R.slidesGrid[s]) && (t = s);
					return !(!R.params.allowSwipeToNext && a < R[dT] && a < R.minTranslate()) && (!(!R.params.allowSwipeToPrev && a > R[dT] && a > R.maxTranslate() && (R.activeIndex || 0) !== t) && (r == typeof e && (e = R.params[Mu]), R.previousIndex = R.activeIndex || 0, R.activeIndex = t, R.rtl && -a === R[dT] || !R.rtl && a === R[dT] ? (R.params.autoHeight && R.updateAutoHeight(), R.updateClasses(), qf !== R.params.effect && R.setWrapperTranslate(a), !1) : (R.updateClasses(), R.onTransitionStart(i), 0 === e ? (R.setWrapperTranslate(a), R.setWrapperTransition(0), R.onTransitionEnd(i)) : (R.setWrapperTranslate(a), R.setWrapperTransition(e), R.animating || (R.animating = !0, R.wrapper.transitionEnd(function () {
						R && R.onTransitionEnd(i)
					}))), !0)))
				}, R.onTransitionStart = function (t) {
					r == typeof t && (t = !0), R.params.autoHeight && R.updateAutoHeight(), R.lazy && R.lazy.onTransitionStart(), t && (R.emit(Xb, R), R.activeIndex !== R.previousIndex && (R.emit(Vb, R), R.activeIndex > R.previousIndex ? R.emit(zb, R) : R.emit(jb, R)))
				}, R.onTransitionEnd = function (t) {
					R.animating = !1, R.setWrapperTransition(0), r == typeof t && (t = !0), R.lazy && R.lazy.onTransitionEnd(), t && (R.emit(Ub, R), R.activeIndex !== R.previousIndex && (R.emit(Yb, R), R.activeIndex > R.previousIndex ? R.emit(Kb, R) : R.emit(qb, R))), R.params.hashnav && R.hashnav && R.hashnav.setHash()
				}, R.slideNext = function (t, e, i) {
					return R.params[Yv] ? !R.animating && (R.fixLoop(), R.container[0][Fs], R.slideTo(R.activeIndex + R.params.slidesPerGroup, e, t, i)) : R.slideTo(R.activeIndex + R.params.slidesPerGroup, e, t, i)
				}, R.n = function (t) {
					return R.slideNext(!0, t, !0)
				}, R.slidePrev = function (t, e, i) {
					return R.params[Yv] ? !R.animating && (R.fixLoop(), R.container[0][Fs], R.slideTo(R.activeIndex - 1, e, t, i)) : R.slideTo(R.activeIndex - 1, e, t, i)
				}, R.q = function (t) {
					return R.slidePrev(!0, t, !0)
				}, R.slideReset = function (t, e, i) {
					return R.slideTo(R.activeIndex, e, t)
				}, R.setWrapperTransition = function (t, e) {
					R.wrapper[qp](t), qf !== R.params.effect && R.effects[R.params.effect] && R.effects[R.params.effect].setTransition(t), R.params.parallax && R.parallax && R.parallax.setTransition(t), R.params.scrollbar && R.scrollbar && R.scrollbar.setTransition(t), R.params[_b] && R[_T] && R[_T].setTransition(t, e), R.emit(Qb, R, t)
				}, R.setWrapperTranslate = function (t, e, i) {
					var n = 0,
						r = 0,
						a = 0;
					R.isHorizontal() ? n = R.rtl ? -t : t : r = t, R.params.roundLengths && (n = f(n), r = f(r)), R.params.virtualTranslate || (R.support.transforms3d ? R.wrapper[bg](Sg + n + Jb + r + Jb + a + Zb) : R.wrapper[bg](tS + n + Jb + r + Zb)), R[dT] = R.isHorizontal() ? n : r;
					var s, o = R.maxTranslate() - R.minTranslate();
					s = 0 === o ? 0 : (t - R.minTranslate()) / o, s !== R.progress && R.updateProgress(t), e && R.updateActiveIndex(), qf !== R.params.effect && R.effects[R.params.effect] && R.effects[R.params.effect][eS](R[dT]), R.params.parallax && R.parallax && R.parallax[eS](R[dT]), R.params.scrollbar && R.scrollbar && R.scrollbar[eS](R[dT]), R.params[_b] && R[_T] && R[_T][eS](R[dT], i), R.emit(iS, R, R[dT])
				}, R.getTranslate = function (e, i) {
					var n, a, s, o;
					return r == typeof i && (i = nS), R.params.virtualTranslate ? R.rtl ? -R[dT] : R[dT] : (s = t[ll](e, null), t[rS] ? (a = s[bg] || s[aS], a[Q](ge)[S] > 6 && (a = a[Q](bd)[w](function (t) {
						return t[B](ge, ds)
					})[ve](bd)), o = new t[rS](ca === a ? T : a)) : (o = s[sS] || s.OTransform || s.MsTransform || s[oS] || s[bg] || s[Ml](bg)[B](tS, lS), n = o[u]()[Q](ge)), nS === i && (a = t[rS] ? o[uS] : 16 === n[S] ? parseFloat(n[12]) : parseFloat(n[4])), cS === i && (a = t[rS] ? o[dS] : 16 === n[S] ? parseFloat(n[13]) : parseFloat(n[5])), R.rtl && a && (a = -a), a || 0)
				}, R.getWrapperTranslate = function (t) {
					return r == typeof t && (t = R.isHorizontal() ? nS : cS), R.getTranslate(R.wrapper[0], t)
				}, R.observers = [], R.initObservers = function () {
					if (R.params.observeParents)
						for (var t = R.container.parents(), e = 0; e < t[S]; e++) g(t[e]);
					g(R.container[0], {
						childList: !1
					}), g(R.wrapper[0], {
						attributes: !1
					})
				}, R.disconnectObservers = function () {
					for (var t = 0; t < R.observers[S]; t++) R.observers[t][pS]();
					R.observers = []
				}, R.createLoop = function () {
					R.wrapper[Wf](ds + R.params.slideClass + ds + R.params.slideDuplicateClass)[gs]();
					var t = R.wrapper[Wf](ds + R.params.slideClass);
					Dl !== R.params.slidesPerView || R.params.loopedSlides || (R.params.loopedSlides = t[S]), R.loopedSlides = parseInt(R.params.loopedSlides || R.params.slidesPerView, 10), R.loopedSlides = R.loopedSlides + R.params.loopAdditionalSlides, R.loopedSlides > t[S] && (R.loopedSlides = t[S]);
					var e, i = [],
						r = [];
					for (t.each(function (e, a) {
						var s = n(this);
						e < R.loopedSlides && r[o](a), e < t[S] && e >= t[S] - R.loopedSlides && i[o](a), s.attr(mb, e)
					}), e = 0; e < r[S]; e++) R.wrapper[Ro](n(r[e][xa](!0)).addClass(R.params.slideDuplicateClass));
					for (e = i[S] - 1; e >= 0; e--) R.wrapper.prepend(n(i[e][xa](!0)).addClass(R.params.slideDuplicateClass))
				}, R.destroyLoop = function () {
					R.wrapper[Wf](ds + R.params.slideClass + ds + R.params.slideDuplicateClass)[gs](), R.slides.removeAttr(mb)
				}, R.reLoop = function (t) {
					var e = R.activeIndex - R.loopedSlides;
					R.destroyLoop(), R.createLoop(), R.updateSlidesSize(), t && R.slideTo(e + R.loopedSlides, 0, !1)
				}, R.fixLoop = function () {
					var t;
					R.activeIndex < R.loopedSlides ? (t = R.slides[S] - 3 * R.loopedSlides + R.activeIndex, t += R.loopedSlides, R.slideTo(t, 0, !1, !0)) : (Dl === R.params.slidesPerView && R.activeIndex >= 2 * R.loopedSlides || R.activeIndex > R.slides[S] - 2 * R.params.slidesPerView) && (t = -R.slides[S] + R.activeIndex + R.loopedSlides, t += R.loopedSlides, R.slideTo(t, 0, !1, !0))
				}, R.appendSlide = function (t) {
					if (R.params[Yv] && R.destroyLoop(), e == typeof t && t[S])
						for (var i = 0; i < t[S]; i++) t[i] && R.wrapper[Ro](t[i]);
					else R.wrapper[Ro](t);
					R.params[Yv] && R.createLoop(), R.params.observer && R.support.observer || R[ST](!0)
				}, R.prependSlide = function (t) {
					R.params[Yv] && R.destroyLoop();
					var i = R.activeIndex + 1;
					if (e == typeof t && t[S]) {
						for (var n = 0; n < t[S]; n++) t[n] && R.wrapper.prepend(t[n]);
						i = R.activeIndex + t[S]
					} else R.wrapper.prepend(t);
					R.params[Yv] && R.createLoop(), R.params.observer && R.support.observer || R[ST](!0), R.slideTo(i, 0, !1)
				}, R.removeSlide = function (t) {
					R.params[Yv] && (R.destroyLoop(), R.slides = R.wrapper[Wf](ds + R.params.slideClass));
					var i, n = R.activeIndex;
					if (e == typeof t && t[S]) {
						for (var r = 0; r < t[S]; r++) i = t[r], R.slides[i] && R.slides.eq(i)[gs](), n > i && n--;
						n = Math[K](n, 0)
					} else i = t, R.slides[i] && R.slides.eq(i)[gs](), n > i && n--, n = Math[K](n, 0);
					R.params[Yv] && R.createLoop(), R.params.observer && R.support.observer || R[ST](!0), R.params[Yv] ? R.slideTo(n + R.loopedSlides, 0, !1) : R.slideTo(n, 0, !1)
				}, R.removeAllSlides = function () {
					for (var t = [], e = 0; e < R.slides[S]; e++) t[o](e);
					R.removeSlide(t)
				}, R.effects = {
					fade: {
						setTranslate: function () {
							for (var t = 0; t < R.slides[S]; t++) {
								var e = R.slides.eq(t),
									i = e[0].swiperSlideOffset,
									n = -i;
								R.params.virtualTranslate || (n -= R[dT]);
								var r = 0;
								R.isHorizontal() || (r = n, n = 0);
								var a = R.params.fade.crossFade ? Math[K](1 - Math[om](e[0].progress), 0) : 1 + Math[qT](Math[K](e[0].progress, -1), 0);
								e.css({
									opacity: a
								})[bg](Sg + n + Jb + r + fS)
							}
						},
						setTransition: function (t) {
							if (R.slides[qp](t), R.params.virtualTranslate && 0 !== t) {
								var e = !1;
								R.slides.transitionEnd(function () {
									if (!e && R) {
										e = !0, R.animating = !1;
										for (var t = [jp, Up, hS, mS, vS], i = 0; i < t[S]; i++) R.wrapper.trigger(t[i])
									}
								})
							}
						}
					},
					flip: {
						setTranslate: function () {
							for (var t = 0; t < R.slides[S]; t++) {
								var e = R.slides.eq(t),
									i = e[0].progress;
								R.params.flip.limitRotation && (i = Math[K](Math[qT](e[0].progress, 1), -1));
								var r = e[0].swiperSlideOffset,
									a = -180 * i,
									s = a,
									o = 0,
									l = -r,
									u = 0;
								if (R.isHorizontal() ? R.rtl && (s = -s) : (u = l, l = 0, o = -s, s = 0), e[0][Ir][gS] = -Math[om](Math[Wm](i)) + R.slides[S], R.params.flip.slideShadows) {
									var c = R.isHorizontal() ? e[ze](TS) : e[ze](bS),
										d = R.isHorizontal() ? e[ze](SS) : e[ze](yS);
									0 === c[S] && (c = n(CS + (R.isHorizontal() ? xr : De) + wS), e[Ro](c)), 0 === d[S] && (d = n(CS + (R.isHorizontal() ? Yf : Lm) + wS), e[Ro](d)), c[S] && (c[0][Ir][Zo] = Math[K](-i, 0)), d[S] && (d[0][Ir][Zo] = Math[K](i, 0))
								}
								e[bg](Sg + l + Jb + u + PS + o + AS + s + MS)
							}
						},
						setTransition: function (t) {
							if (R.slides[qp](t)[ze](xS)[qp](t), R.params.virtualTranslate && 0 !== t) {
								var e = !1;
								R.slides.eq(R.activeIndex).transitionEnd(function () {
									if (!e && R && n(this).hasClass(R.params.slideActiveClass)) {
										e = !0, R.animating = !1;
										for (var t = [jp, Up, hS, mS, vS], i = 0; i < t[S]; i++) R.wrapper.trigger(t[i])
									}
								})
							}
						}
					},
					cube: {
						setTranslate: function () {
							var t, e = 0;
							R.params.cube.shadow && (R.isHorizontal() ? (t = R.wrapper[ze](GS), 0 === t[S] && (t = n(IS), R.wrapper[Ro](t)), t.css({
								height: R[ta] + pa
							})) : (t = R.container[ze](GS), 0 === t[S] && (t = n(IS), R.container[Ro](t))));
							for (var i = 0; i < R.slides[S]; i++) {
								var r = R.slides.eq(i),
									a = 90 * i,
									s = Math[Uv](a / 360);
								R.rtl && (a = -a, s = Math[Uv](-a / 360));
								var o = Math[K](Math[qT](r[0].progress, 1), -1),
									l = 0,
									u = 0,
									c = 0;
								i % 4 === 0 ? (l = 4 * -s * R[Wp], c = 0) : (i - 1) % 4 === 0 ? (l = 0, c = 4 * -s * R[Wp]) : (i - 2) % 4 === 0 ? (l = R[Wp] + 4 * s * R[Wp], c = R[Wp]) : (i - 3) % 4 === 0 && (l = -R[Wp], c = 3 * R[Wp] + 4 * R[Wp] * s), R.rtl && (l = -l), R.isHorizontal() || (u = l, l = 0);
								var d = HS + (R.isHorizontal() ? 0 : -a) + AS + (R.isHorizontal() ? a : 0) + $S + l + Jb + u + Jb + c + Zb;
								if (1 >= o && o > -1 && (e = 90 * i + 90 * o, R.rtl && (e = 90 * -i - 90 * o)), r[bg](d), R.params.cube.slideShadows) {
									var p = R.isHorizontal() ? r[ze](TS) : r[ze](bS),
										f = R.isHorizontal() ? r[ze](SS) : r[ze](yS);
									0 === p[S] && (p = n(CS + (R.isHorizontal() ? xr : De) + wS), r[Ro](p)), 0 === f[S] && (f = n(CS + (R.isHorizontal() ? Yf : Lm) + wS), r[Ro](f)), p[S] && (p[0][Ir][Zo] = Math[K](-o, 0)), f[S] && (f[0][Ir][Zo] = Math[K](o, 0))
								}
							}
							if (R.wrapper.css({
								"-webkit-transform-origin": ES + R[Wp] / 2 + pa,
								"-moz-transform-origin": ES + R[Wp] / 2 + pa,
								"-ms-transform-origin": ES + R[Wp] / 2 + pa,
								"transform-origin": ES + R[Wp] / 2 + pa
							}), R.params.cube.shadow)
								if (R.isHorizontal()) t[bg](BS + (R[ta] / 2 + R.params.cube.shadowOffset) + Jb + -R[ta] / 2 + DS + R.params.cube.shadowScale + At);
								else {
									var h = Math[om](e) - 90 * Math[Uv](Math[om](e) / 90),
										m = 1.5 - (Math[kS](2 * h * Math[fu] / 360) / 2 + Math[pu](2 * h * Math[fu] / 360) / 2),
										v = R.params.cube.shadowScale,
										g = R.params.cube.shadowScale / m,
										T = R.params.cube.shadowOffset;
									t[bg](LS + v + RS + g + OS + (R[ru] / 2 + T) + Jb + -R[ru] / 2 / g + NS)
								}
							var b = R.isSafari || R.isUiWebView ? -R[Wp] / 2 : 0;
							R.wrapper[bg](WS + b + FS + (R.isHorizontal() ? 0 : e) + AS + (R.isHorizontal() ? -e : 0) + MS)
						},
						setTransition: function (t) {
							R.slides[qp](t)[ze](xS)[qp](t), R.params.cube.shadow && !R.isHorizontal() && R.container[ze](GS)[qp](t)
						}
					},
					coverflow: {
						setTranslate: function () {
							for (var t = R[dT], e = R.isHorizontal() ? -t + R[ta] / 2 : -t + R[ru] / 2, i = R.isHorizontal() ? R.params.coverflow[XS] : -R.params.coverflow[XS], r = R.params.coverflow.depth, a = 0, s = R.slides[S]; s > a; a++) {
								var o = R.slides.eq(a),
									l = R.slidesSizesGrid[a],
									u = o[0].swiperSlideOffset,
									c = (e - u - l / 2) / l * R.params.coverflow.modifier,
									d = R.isHorizontal() ? i * c : 0,
									p = R.isHorizontal() ? 0 : i * c,
									f = -r * Math[om](c),
									h = R.isHorizontal() ? 0 : R.params.coverflow.stretch * c,
									m = R.isHorizontal() ? R.params.coverflow.stretch * c : 0;
								Math[om](m) < .001 && (m = 0), Math[om](h) < .001 && (h = 0), Math[om](f) < .001 && (f = 0), Math[om](d) < .001 && (d = 0), Math[om](p) < .001 && (p = 0);
								var v = Sg + m + VS + h + VS + f + zS + p + AS + d + MS;
								if (o[bg](v), o[0][Ir][gS] = -Math[om](Math[Wm](c)) + 1, R.params.coverflow.slideShadows) {
									var g = R.isHorizontal() ? o[ze](TS) : o[ze](bS),
										T = R.isHorizontal() ? o[ze](SS) : o[ze](yS);
									0 === g[S] && (g = n(CS + (R.isHorizontal() ? xr : De) + wS), o[Ro](g)), 0 === T[S] && (T = n(CS + (R.isHorizontal() ? Yf : Lm) + wS), o[Ro](T)), g[S] && (g[0][Ir][Zo] = c > 0 ? c : 0), T[S] && (T[0][Ir][Zo] = -c > 0 ? -c : 0)
								}
							}
							if (R.browser.ie) {
								var b = R.wrapper[0][Ir];
								b[jS] = e + US
							}
						},
						setTransition: function (t) {
							R.slides[qp](t)[ze](xS)[qp](t)
						}
					}
				}, R.lazy = {
					initialImageLoaded: !1,
					loadImageInSlide: function (t, e) {
						if (r != typeof t && (r == typeof e && (e = !0), 0 !== R.slides[S])) {
							var i = R.slides.eq(t),
								a = i[ze](YS);
							!i.hasClass(KS) || i.hasClass(qS) || i.hasClass(_S) || (a = a[zn](i[0])), 0 !== a[S] && a.each(function () {
								var t = n(this);
								t.addClass(_S);
								var r = t.attr(QS),
									a = t.attr(JS),
									s = t.attr(ZS);
								R.loadImage(t[0], a || r, s, !1, function () {
									if (r ? (t.css(ty, ey + r + iy), t.removeAttr(QS)) : (s && (t.attr(bT, s), t.removeAttr(ZS)), a && (t.attr(ko, a), t.removeAttr(JS))), t.addClass(qS).removeClass(_S), i[ze](ny)[gs](), R.params[Yv] && e) {
										var n = i.attr(mb);
										if (i.hasClass(R.params.slideDuplicateClass)) {
											var o = R.wrapper[Wf](vb + n + ry + R.params.slideDuplicateClass + At);
											R.lazy.loadImageInSlide(o[Xn](), !1)
										} else {
											var l = R.wrapper[Wf](ds + R.params.slideDuplicateClass + vb + n + oh);
											R.lazy.loadImageInSlide(l[Xn](), !1)
										}
									}
									R.emit(ay, R, i[0], t[0])
								}), R.emit(sy, R, i[0], t[0])
							})
						}
					},
					load: function () {
						var t;
						if (R.params.watchSlidesVisibility) R.wrapper[Wf](ds + R.params.slideVisibleClass).each(function () {
							R.lazy.loadImageInSlide(n(this)[Xn]())
						});
						else if (R.params.slidesPerView > 1)
							for (t = R.activeIndex; t < R.activeIndex + R.params.slidesPerView; t++) R.slides[t] && R.lazy.loadImageInSlide(t);
						else R.lazy.loadImageInSlide(R.activeIndex); if (R.params.lazyLoadingInPrevNext)
							if (R.params.slidesPerView > 1 || R.params.lazyLoadingInPrevNextAmount && R.params.lazyLoadingInPrevNextAmount > 1) {
								var e = R.params.lazyLoadingInPrevNextAmount,
									i = R.params.slidesPerView,
									r = Math[qT](R.activeIndex + i + Math[K](e, i), R.slides[S]),
									a = Math[K](R.activeIndex - Math[K](i, e), 0);
								for (t = R.activeIndex + R.params.slidesPerView; r > t; t++) R.slides[t] && R.lazy.loadImageInSlide(t);
								for (t = a; t < R.activeIndex; t++) R.slides[t] && R.lazy.loadImageInSlide(t)
							} else {
								var s = R.wrapper[Wf](ds + R.params.slideNextClass);
								s[S] > 0 && R.lazy.loadImageInSlide(s[Xn]());
								var o = R.wrapper[Wf](ds + R.params.slidePrevClass);
								o[S] > 0 && R.lazy.loadImageInSlide(o[Xn]())
							}
					},
					onTransitionStart: function () {
						R.params.lazyLoading && (R.params.lazyLoadingOnTransitionStart || !R.params.lazyLoadingOnTransitionStart && !R.lazy.initialImageLoaded) && R.lazy[vr]()
					},
					onTransitionEnd: function () {
						R.params.lazyLoading && !R.params.lazyLoadingOnTransitionStart && R.lazy[vr]()
					}
				}, R.scrollbar = {
					isTouched: !1,
					setDragPosition: function (t) {
						var e = R.scrollbar,
							i = R.isHorizontal() ? ub === t[L] || cb === t[L] ? t[Sb][0][Os] : t[Os] || t[Ns] : ub === t[L] || cb === t[L] ? t[Sb][0][Xs] : t[Xs] || t[Vs],
							n = i - e[oy][Cp]()[R.isHorizontal() ? xr : De] - e.dragSize / 2,
							r = -R.minTranslate() * e.moveDivider,
							a = -R.maxTranslate() * e.moveDivider;
						r > n ? n = r : n > a && (n = a), n = -n / e.moveDivider, R.updateProgress(n), R.setWrapperTranslate(n, !0)
					},
					dragStart: function (t) {
						var e = R.scrollbar;
						e.isTouched = !0, t[As](), t[xs](), e.setDragPosition(t), clearTimeout(e.dragTimeout), e[oy][qp](0), R.params.scrollbarHide && e[oy].css(Zo, 1), R.wrapper[qp](100), e.drag[qp](100), R.emit(ly, R)
					},
					dragMove: function (t) {
						var e = R.scrollbar;
						e.isTouched && (t[As] ? t[As]() : t[Zs] = !1, e.setDragPosition(t), R.wrapper[qp](0), e[oy][qp](0), e.drag[qp](0), R.emit(uy, R))
					},
					dragEnd: function (t) {
						var e = R.scrollbar;
						e.isTouched && (e.isTouched = !1, R.params.scrollbarHide && (clearTimeout(e.dragTimeout), e.dragTimeout = setTimeout(function () {
							e[oy].css(Zo, 0), e[oy][qp](400)
						}, 1e3)), R.emit(cy, R), R.params.scrollbarSnapOnRelease && R.slideReset())
					},
					enableDraggable: function () {
						var t = R.scrollbar,
							e = R.support.touch ? t[oy] : document;
						n(t[oy]).on(R.touchEvents[ha], t.dragStart), n(e).on(R.touchEvents[fT], t.dragMove), n(e).on(R.touchEvents[ma], t.dragEnd)
					},
					disableDraggable: function () {
						var t = R.scrollbar,
							e = R.support.touch ? t[oy] : document;
						n(t[oy]).off(R.touchEvents[ha], t.dragStart), n(e).off(R.touchEvents[fT], t.dragMove), n(e).off(R.touchEvents[ma], t.dragEnd)
					},
					set: function () {
						if (R.params.scrollbar) {
							var t = R.scrollbar;
							t[oy] = n(R.params.scrollbar), R.params.uniqueNavElements && Y == typeof R.params.scrollbar && t[oy][S] > 1 && 1 === R.container[ze](R.params.scrollbar)[S] && (t[oy] = R.container[ze](R.params.scrollbar)), t.drag = t[oy][ze](dy), 0 === t.drag[S] && (t.drag = n(py), t[oy][Ro](t.drag)), t.drag[0][Ir][ta] = T, t.drag[0][Ir][ru] = T, t.trackSize = R.isHorizontal() ? t[oy][0][Dr] : t[oy][0][wl], t.divider = R[Wp] / R.virtualSize, t.moveDivider = t.divider * (t.trackSize / R[Wp]), t.dragSize = t.trackSize * t.divider, R.isHorizontal() ? t.drag[0][Ir][ta] = t.dragSize + pa : t.drag[0][Ir][ru] = t.dragSize + pa, t.divider >= 1 ? t[oy][0][Ir][da] = ca : t[oy][0][Ir][da] = T, R.params.scrollbarHide && (t[oy][0][Ir][Zo] = 0)
						}
					},
					setTranslate: function () {
						if (R.params.scrollbar) {
							var t, e = R.scrollbar,
								i = (R[dT] || 0, e.dragSize);
							t = (e.trackSize - e.dragSize) * R.progress, R.rtl && R.isHorizontal() ? (t = -t, t > 0 ? (i = e.dragSize - t, t = 0) : -t + e.dragSize > e.trackSize && (i = e.trackSize + t)) : 0 > t ? (i = e.dragSize + t, t = 0) : t + e.dragSize > e.trackSize && (i = e.trackSize - t), R.isHorizontal() ? (R.support.transforms3d ? e.drag[bg](Sg + t + fy) : e.drag[bg](hy + t + Zb), e.drag[0][Ir][ta] = i + pa) : (R.support.transforms3d ? e.drag[bg](BS + t + my) : e.drag[bg](vy + t + Zb), e.drag[0][Ir][ru] = i + pa), R.params.scrollbarHide && (clearTimeout(e[wd]), e[oy][0][Ir][Zo] = 1, e[wd] = setTimeout(function () {
								e[oy][0][Ir][Zo] = 0, e[oy][qp](400)
							}, 1e3))
						}
					},
					setTransition: function (t) {
						R.params.scrollbar && R.scrollbar.drag[qp](t)
					}
				}, R[_T] = {
					LinearSpline: function (t, e) {
						this[nS] = t, this[cS] = e, this[gy] = t[S] - 1;
						var i, n;
						this[nS][S], this.interpolate = function (t) {
							return t ? (n = r(this[nS], t), i = n - 1, (t - this[nS][i]) * (this[cS][n] - this[cS][i]) / (this[nS][n] - this[nS][i]) + this[cS][i]) : 0
						};
						var r = function () {
							var t, e, i;
							return function (n, r) {
								for (e = -1, t = n[S]; t - e > 1;) n[i = t + e >> 1] <= r ? e = i : t = i;
								return t
							}
						}()
					},
					getInterpolateFunction: function (t) {
						R[_T].spline || (R[_T].spline = R.params[Yv] ? new R[_T].LinearSpline(R.slidesGrid, t.slidesGrid) : new R[_T].LinearSpline(R.snapGrid, t.snapGrid))
					},
					setTranslate: function (t, e) {
						function i(e) {
							t = e.rtl && wg === e.params[_g] ? -R[dT] : R[dT], qf === R.params.controlBy && (R[_T].getInterpolateFunction(e), r = -R[_T].spline.interpolate(-t)), r && Pg !== R.params.controlBy || (n = (e.maxTranslate() - e.minTranslate()) / (R.maxTranslate() - R.minTranslate()), r = (t - R.minTranslate()) * n + e.minTranslate()), R.params.controlInverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setWrapperTranslate(r, !1, R), e.updateActiveIndex()
						}
						var n, r, s = R.params[_b];
						if (R[I](s))
							for (var o = 0; o < s[S]; o++) s[o] !== e && s[o] instanceof a && i(s[o]);
						else s instanceof a && e !== s && i(s)
					},
					setTransition: function (t, e) {
						function i(e) {
							e.setWrapperTransition(t, R), 0 !== t && (e.onTransitionStart(), e.wrapper.transitionEnd(function () {
								r && (e.params[Yv] && qf === R.params.controlBy && e.fixLoop(), e.onTransitionEnd())
							}))
						}
						var n, r = R.params[_b];
						if (R[I](r))
							for (n = 0; n < r[S]; n++) r[n] !== e && r[n] instanceof a && i(r[n]);
						else r instanceof a && e !== r && i(r)
					}
				}, R.hashnav = {
					init: function () {
						if (R.params.hashnav) {
							R.hashnav.initialized = !0;
							var t = document[sn][on][B](fe, T);
							if (t)
								for (var e = 0, i = 0, n = R.slides[S]; n > i; i++) {
									var r = R.slides.eq(i),
										a = r.attr(Ty);
									if (a === t && !r.hasClass(R.params.slideDuplicateClass)) {
										var s = r[Xn]();
										R.slideTo(s, e, R.params.runCallbacksOnInit, !0)
									}
								}
						}
					},
					setHash: function () {
						R.hashnav.initialized && R.params.hashnav && (document[sn][on] = R.slides.eq(R.activeIndex).attr(Ty) || T)
					}
				}, R.disableKeyboardControl = function () {
					R.params.keyboardControl = !1, n(document).off(hb, b)
				}, R.enableKeyboardControl = function () {
					R.params.keyboardControl = !0, n(document).on(hb, b)
				}, R.mousewheel = {
					event: !1,
					lastScrollTime: (new t[hg])[mg]()
				}, R.params.mousewheelControl) {
					try {
						new t[by](dg), R.mousewheel[Sr] = dg
					} catch (ut) {
						(t[by] || R.container[0] && dg in R.container[0]) && (R.mousewheel[Sr] = dg)
					}!R.mousewheel[Sr] && t[by], R.mousewheel[Sr] || void 0 === document[Sy] || (R.mousewheel[Sr] = sg), R.mousewheel[Sr] || (R.mousewheel[Sr] = ug)
				}
				R.disableMousewheelControl = function () {
					return !!R.mousewheel[Sr] && (R.container.off(R.mousewheel[Sr], y), !0)
				}, R.enableMousewheelControl = function () {
					return !!R.mousewheel[Sr] && (R.container.on(R.mousewheel[Sr], y), !0)
				}, R.parallax = {
					setTranslate: function () {
						R.container[Wf](yy).each(function () {
							C(this, R.progress)
						}), R.slides.each(function () {
							var t = n(this);
							t[ze](yy).each(function () {
								var e = Math[qT](Math[K](t[0].progress, -1), 1);
								C(this, e)
							})
						})
					},
					setTransition: function (t) {
						r == typeof t && (t = R.params[Mu]), R.container[ze](yy).each(function () {
							var e = n(this),
								i = parseInt(e.attr(Cy), 10) || t;
							0 === t && (i = 0), e[qp](i)
						})
					}
				}, R.r = [];
				for (var ct in R[wy]) {
					var dt = R[wy][ct](R, R.params[ct]);
					dt && R.r[o](dt)
				}
				return R.callPlugins = function (t) {
					for (var e = 0; e < R.r[S]; e++) t in R.r[e] && R.r[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
				}, R.emitterEventListeners = {}, R.emit = function (t) {
					R.params[t] && R.params[t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
					var e;
					if (R.emitterEventListeners[t])
						for (e = 0; e < R.emitterEventListeners[t][S]; e++) R.emitterEventListeners[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
					R.callPlugins && R.callPlugins(t, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
				}, R.on = function (t, e) {
					return t = P(t), R.emitterEventListeners[t] || (R.emitterEventListeners[t] = []), R.emitterEventListeners[t][o](e), R
				}, R.off = function (t, e) {
					var i;
					if (t = P(t), r == typeof e) return R.emitterEventListeners[t] = [], R;
					if (R.emitterEventListeners[t] && 0 !== R.emitterEventListeners[t][S]) {
						for (i = 0; i < R.emitterEventListeners[t][S]; i++) R.emitterEventListeners[t][i] === e && R.emitterEventListeners[t][M](i, 1);
						return R
					}
				}, R.once = function (t, e) {
					t = P(t);
					var i = function () {
						e(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), R.off(t, i)
					};
					return R.on(t, i), R
				}, R.a11y = {
					makeFocusable: function (t) {
						return t.attr(dn, yn), t
					},
					addRole: function (t, e) {
						return t.attr(Py, e), t
					},
					addLabel: function (t, e) {
						return t.attr(Ay, e), t
					},
					disable: function (t) {
						return t.attr(My, !0), t
					},
					enable: function (t) {
						return t.attr(My, !1), t
					},
					onEnterKey: function (t) {
						13 === t[ks] && (n(t[Cs])[En](R.params.nextButton) ? (R.onClickNext(t), R.isEnd ? R.a11y.notify(R.params.lastSlideMessage) : R.a11y.notify(R.params.nextSlideMessage)) : n(t[Cs])[En](R.params.prevButton) && (R.onClickPrev(t), R.isBeginning ? R.a11y.notify(R.params.firstSlideMessage) : R.a11y.notify(R.params.prevSlideMessage)), n(t[Cs])[En](ds + R.params.bulletClass) && n(t[Cs])[0][Gs]())
					},
					liveRegion: n(xy),
					notify: function (t) {
						var e = R.a11y.liveRegion;
						0 !== e[S] && (e.html(T), e.html(t))
					},
					init: function () {
						R.params.nextButton && R.nextButton && R.nextButton[S] > 0 && (R.a11y.makeFocusable(R.nextButton), R.a11y.addRole(R.nextButton, He), R.a11y.addLabel(R.nextButton, R.params.nextSlideMessage)), R.params.prevButton && R.prevButton && R.prevButton[S] > 0 && (R.a11y.makeFocusable(R.prevButton), R.a11y.addRole(R.prevButton, He), R.a11y.addLabel(R.prevButton, R.params.prevSlideMessage)), n(R.container)[Ro](R.a11y.liveRegion)
					},
					initPagination: function () {
						R.params.pagination && R.params.paginationClickable && R.bullets && R.bullets[S] && R.bullets.each(function () {
							var t = n(this);
							R.a11y.makeFocusable(t), R.a11y.addRole(t, He), R.a11y.addLabel(t, R.params.paginationBulletMessage[B](Gy, t[Xn]() + 1))
						})
					},
					destroy: function () {
						R.a11y.liveRegion && R.a11y.liveRegion[S] > 0 && R.a11y.liveRegion[gs]()
					}
				}, R[p] = function () {
					R.params[Yv] && R.createLoop(), R.updateContainerSize(), R.updateSlidesSize(), R.updatePagination(), R.params.scrollbar && R.scrollbar && (R.scrollbar[iu](), R.params.scrollbarDraggable && R.scrollbar.enableDraggable()), qf !== R.params.effect && R.effects[R.params.effect] && (R.params[Yv] || R.updateProgress(), R.effects[R.params.effect][eS]()), R.params[Yv] ? R.slideTo(R.params.initialSlide + R.loopedSlides, 0, R.params.runCallbacksOnInit) : (R.slideTo(R.params.initialSlide, 0, R.params.runCallbacksOnInit), 0 === R.params.initialSlide && (R.parallax && R.params.parallax && R.parallax[eS](), R.lazy && R.params.lazyLoading && (R.lazy[vr](), R.lazy.initialImageLoaded = !0))), R.attachEvents(), R.params.observer && R.support.observer && R.initObservers(), R.params.preloadImages && !R.params.lazyLoading && R.preloadImages(), R.params[qv] && R.startAutoplay(), R.params.keyboardControl && R.enableKeyboardControl && R.enableKeyboardControl(), R.params.mousewheelControl && R.enableMousewheelControl && R.enableMousewheelControl(), R.params.hashnav && R.hashnav && R.hashnav[p](), R.params.a11y && R.a11y && R.a11y[p](), R.emit(Iy, R)
				}, R.cleanupStyles = function () {
					R.container.removeClass(R.classNames[ve](J)).removeAttr(Ir), R.wrapper.removeAttr(Ir), R.slides && R.slides[S] && R.slides.removeClass([R.params.slideVisibleClass, R.params.slideActiveClass, R.params.slideNextClass, R.params.slidePrevClass][ve](J)).removeAttr(Ir).removeAttr($T).removeAttr(ET), R.paginationContainer && R.paginationContainer[S] && R.paginationContainer.removeClass(R.params.paginationHiddenClass), R.bullets && R.bullets[S] && R.bullets.removeClass(R.params.bulletActiveClass), R.params.prevButton && n(R.params.prevButton).removeClass(R.params.buttonDisabledClass), R.params.nextButton && n(R.params.nextButton).removeClass(R.params.buttonDisabledClass), R.params.scrollbar && R.scrollbar && (R.scrollbar[oy] && R.scrollbar[oy][S] && R.scrollbar[oy].removeAttr(Ir), R.scrollbar.drag && R.scrollbar.drag[S] && R.scrollbar.drag.removeAttr(Ir))
				}, R.destroy = function (t, e) {
					R.detachEvents(), R.stopAutoplay(), R.params.scrollbar && R.scrollbar && R.params.scrollbarDraggable && R.scrollbar.disableDraggable(), R.params[Yv] && R.destroyLoop(), e && R.cleanupStyles(), R.disconnectObservers(), R.params.keyboardControl && R.disableKeyboardControl && R.disableKeyboardControl(), R.params.mousewheelControl && R.disableMousewheelControl && R.disableMousewheelControl(), R.params.a11y && R.a11y && R.a11y.destroy(), R.emit(Hy), t !== !1 && (R = null)
				}, R[p](), R
			}
		};
		a[g] = {
			isSafari: function () {
				var t = navigator[$y][U]();
				return t[l](Ey) >= 0 && t[l](By) < 0 && t[l](Dy) < 0
			}(),
			isUiWebView: ky[ue](navigator[$y]),
			isArray: function (t) {
				return Ly === Object[g][u][P](t)
			},
			browser: {
				ie: t[tb][eb] || t[tb][ab],
				ieTouch: t[tb][ab] && t[tb][Ry] > 1 || t[tb][eb] && t[tb][Oy] > 1
			},
			device: function () {
				var t = navigator[$y],
					e = t[Bn](Ny),
					i = t[Bn](Wy),
					n = t[Bn](Fy),
					r = !i && t[Bn](Xy);
				return {
					ios: i || r || n,
					android: e
				}
			}(),
			support: {
				touch: t.Modernizr && Modernizr.touch === !0 || function () {
					return !!(Df in t || t.DocumentTouch && document instanceof DocumentTouch)
				}(),
				transforms3d: t.Modernizr && Modernizr.csstransforms3d === !0 || function () {
					var t = document[we](Pe)[Ir];
					return Vy in t || zy in t || jy in t || Uy in t || Yy in t
				}(),
				flexbox: function () {
					for (var t = document[we](Pe)[Ir], e = Ky[Q](J), i = 0; i < e[S]; i++)
						if (e[i] in t) return !0
				}(),
				observer: function () {
					return _v in t || qy in t
				}()
			},
			plugins: {}
		};
		for (var s = (function () {
			var e = function (t) {
					var e = this,
						i = 0;
					for (i = 0; i < t[S]; i++) e[i] = t[i];
					return e[S] = t[S], this
				},
				i = function (i, n) {
					var r = [],
						a = 0;
					if (i && !n && i instanceof e) return i;
					if (i)
						if (Y == typeof i) {
							var s, u, c = i[F]();
							if (c[l](On) >= 0 && c[l](Wn) >= 0) {
								var d = Pe;
								for (0 === c[l](_y) && (d = Qy), 0 === c[l](Jy) && (d = wa), (0 === c[l](Zy) || 0 === c[l](tC)) && (d = Ho), 0 === c[l](eC) && (d = ns), 0 === c[l](iC) && (d = Pn), u = document[we](d), u[Ke] = i, a = 0; a < u[ie][S]; a++) r[o](u[ie][a])
							} else
								for (s = n || fe !== i[0] || i[Bn](nC) ? (n || document)[be](i) : [document[ae](i[Q](fe)[1])], a = 0; a < s[S]; a++) s[a] && r[o](s[a])
						} else if (i[N] || i === t || i === document) r[o](i);
					else if (i[S] > 0 && i[0][N])
						for (a = 0; a < i[S]; a++) r[o](i[a]);
					return new e(r)
				};
			return e[g] = {
				addClass: function (t) {
					if (r == typeof t) return this;
					for (var e = t[Q](J), i = 0; i < e[S]; i++)
						for (var n = 0; n < this[S]; n++) this[n][rC][zn](e[i]);
					return this
				},
				removeClass: function (t) {
					for (var e = t[Q](J), i = 0; i < e[S]; i++)
						for (var n = 0; n < this[S]; n++) this[n][rC][gs](e[i]);
					return this
				},
				hasClass: function (t) {
					return !!this[0] && this[0][rC][xi](t)
				},
				toggleClass: function (t) {
					for (var e = t[Q](J), i = 0; i < e[S]; i++)
						for (var n = 0; n < this[S]; n++) this[n][rC][wu](e[i]);
					return this
				},
				attr: function (t, e) {
					if (1 === arguments[S] && Y == typeof t) return this[0] ? this[0][ce](t) : void 0;
					for (var i = 0; i < this[S]; i++)
						if (2 === arguments[S]) this[i][pe](t, e);
						else
							for (var n in t) this[i][n] = t[n], this[i][pe](n, t[n]);
					return this
				},
				removeAttr: function (t) {
					for (var e = 0; e < this[S]; e++) this[e][Se](t);
					return this
				},
				data: function (t, e) {
					if (r != typeof e) {
						for (var i = 0; i < this[S]; i++) {
							var n = this[i];
							n.dom7ElementDataStorage || (n.dom7ElementDataStorage = {}), n.dom7ElementDataStorage[t] = e
						}
						return this
					}
					if (this[0]) {
						var a = this[0][ce](Or + t);
						return a ? a : this[0].dom7ElementDataStorage && t in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[t] : void 0
					}
				},
				transform: function (t) {
					for (var e = 0; e < this[S]; e++) {
						var i = this[e][Ir];
						i[aS] = i.MsTransform = i[oS] = i[sS] = i.OTransform = i[bg] = t
					}
					return this
				},
				transition: function (t) {
					Y != typeof t && (t += zl);
					for (var e = 0; e < this[S]; e++) {
						var i = this[e][Ir];
						i[aC] = i.MsTransitionDuration = i[sC] = i[oC] = i.OTransitionDuration = i[lC] = t
					}
					return this
				},
				on: function (t, e, n, r) {
					function a(t) {
						var r = t[Cs];
						if (i(r)[En](e)) n[b](r, t);
						else
							for (var a = i(r).parents(), s = 0; s < a[S]; s++) i(a[s])[En](e) && n[b](a[s], t)
					}
					var s, l, u = t[Q](J);
					for (s = 0; s < this[S]; s++)
						if (k == typeof e || e === !1)
							for (k == typeof e && (n = arguments[1], r = arguments[2] || !1), l = 0; l < u[S]; l++) this[s][ke](u[l], n, r);
						else
							for (l = 0; l < u[S]; l++) this[s].dom7LiveListeners || (this[s].dom7LiveListeners = []), this[s].dom7LiveListeners[o]({
								listener: n,
								liveListener: a
							}), this[s][ke](u[l], a, r);
					return this
				},
				off: function (t, e, i, n) {
					for (var r = t[Q](J), a = 0; a < r[S]; a++)
						for (var s = 0; s < this[S]; s++)
							if (k == typeof e || e === !1) k == typeof e && (i = arguments[1], n = arguments[2] || !1), this[s][hr](r[a], i, n);
							else if (this[s].dom7LiveListeners)
						for (var o = 0; o < this[s].dom7LiveListeners[S]; o++) this[s].dom7LiveListeners[o][uC] === i && this[s][hr](r[a], this[s].dom7LiveListeners[o].liveListener, n);
					return this
				},
				once: function (t, e, i, n) {
					function r(s) {
						i(s), a.off(t, e, r, n)
					}
					var a = this;
					k == typeof e && (e = !1, i = arguments[1], n = arguments[2]), a.on(t, e, r, n)
				},
				trigger: function (e, i) {
					for (var n = 0; n < this[S]; n++) {
						var r;
						try {
							r = new t[cC](e, {
								detail: i,
								bubbles: !0,
								cancelable: !0
							})
						} catch (a) {
							r = document[dC](Ss), r[pC](e, !0, !0), r[cg] = i
						}
						this[n][fC](r)
					}
					return this
				},
				transitionEnd: function (t) {
					function e(a) {
						if (a[Cs] === this)
							for (t[b](this, a), i = 0; i < n[S]; i++) r.off(n[i], e)
					}
					var i, n = [jp, Up, hS, mS, vS],
						r = this;
					if (t)
						for (i = 0; i < n[S]; i++) r.on(n[i], e);
					return this
				},
				width: function () {
					return this[0] === t ? t[sm] : this[S] > 0 ? parseFloat(this.css(ta)) : null
				},
				outerWidth: function (t) {
					return this[S] > 0 ? t ? this[0][Dr] + parseFloat(this.css(hC)) + parseFloat(this.css(Nm)) : this[0][Dr] : null
				},
				height: function () {
					return this[0] === t ? t[ag] : this[S] > 0 ? parseFloat(this.css(ru)) : null
				},
				outerHeight: function (t) {
					return this[S] > 0 ? t ? this[0][wl] + parseFloat(this.css(Om)) + parseFloat(this.css(mC)) : this[0][wl] : null
				},
				offset: function () {
					if (this[S] > 0) {
						var e = this[0],
							i = e[ou](),
							n = document[Gr],
							r = e[js] || n[js] || 0,
							a = e[Fs] || n[Fs] || 0,
							s = t[Gp] || e[zs],
							o = t[Ip] || e[Ws];
						return {
							top: i[De] + s - r,
							left: i[xr] + o - a
						}
					}
					return null
				},
				css: function (e, i) {
					var n;
					if (1 === arguments[S]) {
						if (Y != typeof e) {
							for (n = 0; n < this[S]; n++)
								for (var r in e) this[n][Ir][r] = e[r];
							return this
						}
						if (this[0]) return t[ll](this[0], null)[Ml](e)
					}
					if (2 === arguments[S] && Y == typeof e) {
						for (n = 0; n < this[S]; n++) this[n][Ir][e] = i;
						return this
					}
					return this
				},
				each: function (t) {
					for (var e = 0; e < this[S]; e++) t[b](this[e], e, this[e]);
					return this
				},
				html: function (t) {
					if (r == typeof t) return this[0] ? this[0][Ke] : void 0;
					for (var e = 0; e < this[S]; e++) this[e][Ke] = t;
					return this
				},
				text: function (t) {
					if (r == typeof t) return this[0] ? this[0][Bi][F]() : null;
					for (var e = 0; e < this[S]; e++) this[e][Bi] = t;
					return this
				},
				is: function (n) {
					if (!this[0]) return !1;
					var r, a;
					if (Y == typeof n) {
						var s = this[0];
						if (s === document) return n === document;
						if (s === t) return n === t;
						if (s[bi]) return s[bi](n);
						if (s[Si]) return s[Si](n);
						if (s[yi]) return s[yi](n);
						if (s[wi]) return s[wi](n);
						for (r = i(n), a = 0; a < r[S]; a++)
							if (r[a] === this[0]) return !0;
						return !1
					}
					if (n === document) return this[0] === document;
					if (n === t) return this[0] === t;
					if (n[N] || n instanceof e) {
						for (r = n[N] ? [n] : n, a = 0; a < r[S]; a++)
							if (r[a] === this[0]) return !0;
						return !1
					}
					return !1
				},
				index: function () {
					if (this[0]) {
						for (var t = this[0], e = 0; null !== (t = t[Li]);) 1 === t[N] && e++;
						return e
					}
				},
				eq: function (t) {
					if (r == typeof t) return this;
					var i, n = this[S];
					return t > n - 1 ? new e([]) : 0 > t ? (i = n + t, new e(0 > i ? [] : [this[i]])) : new e([this[t]])
				},
				append: function (t) {
					var i, n;
					for (i = 0; i < this[S]; i++)
						if (Y == typeof t) {
							var r = document[we](Pe);
							for (r[Ke] = t; r[Di];) this[i][Fe](r[Di])
						} else if (t instanceof e)
						for (n = 0; n < t[S]; n++) this[i][Fe](t[n]);
					else this[i][Fe](t);
					return this
				},
				prepend: function (t) {
					var i, n;
					for (i = 0; i < this[S]; i++)
						if (Y == typeof t) {
							var r = document[we](Pe);
							for (r[Ke] = t, n = r[ie][S] - 1; n >= 0; n--) this[i][Oo](r[ie][n], this[i][ie][0])
						} else if (t instanceof e)
						for (n = 0; n < t[S]; n++) this[i][Oo](t[n], this[i][ie][0]);
					else this[i][Oo](t, this[i][ie][0]);
					return this
				},
				insertBefore: function (t) {
					for (var e = i(t), n = 0; n < this[S]; n++)
						if (1 === e[S]) e[0][Te][Oo](this[n], e[0]);
						else if (e[S] > 1)
						for (var r = 0; r < e[S]; r++) e[r][Te][Oo](this[n][xa](!0), e[r])
				},
				insertAfter: function (t) {
					for (var e = i(t), n = 0; n < this[S]; n++)
						if (1 === e[S]) e[0][Te][Oo](this[n], e[0][Ge]);
						else if (e[S] > 1)
						for (var r = 0; r < e[S]; r++) e[r][Te][Oo](this[n][xa](!0), e[r][Ge])
				},
				next: function (t) {
					return new e(this[S] > 0 ? t ? this[0][vC] && i(this[0][vC])[En](t) ? [this[0][vC]] : [] : this[0][vC] ? [this[0][vC]] : [] : [])
				},
				nextAll: function (t) {
					var n = [],
						r = this[0];
					if (!r) return new e([]);
					for (; r[vC];) {
						var a = r[vC];
						t ? i(a)[En](t) && n[o](a) : n[o](a), r = a
					}
					return new e(n)
				},
				prev: function (t) {
					return new e(this[S] > 0 ? t ? this[0][gC] && i(this[0][gC])[En](t) ? [this[0][gC]] : [] : this[0][gC] ? [this[0][gC]] : [] : [])
				},
				prevAll: function (t) {
					var n = [],
						r = this[0];
					if (!r) return new e([]);
					for (; r[gC];) {
						var a = r[gC];
						t ? i(a)[En](t) && n[o](a) : n[o](a), r = a
					}
					return new e(n)
				},
				parent: function (t) {
					for (var e = [], n = 0; n < this[S]; n++) t ? i(this[n][Te])[En](t) && e[o](this[n][Te]) : e[o](this[n][Te]);
					return i(i[$n](e))
				},
				parents: function (t) {
					for (var e = [], n = 0; n < this[S]; n++)
						for (var r = this[n][Te]; r;) t ? i(r)[En](t) && e[o](r) : e[o](r), r = r[Te];
					return i(i[$n](e))
				},
				find: function (t) {
					for (var i = [], n = 0; n < this[S]; n++)
						for (var r = this[n][be](t), a = 0; a < r[S]; a++) i[o](r[a]);
					return new e(i)
				},
				children: function (t) {
					for (var n = [], r = 0; r < this[S]; r++)
						for (var a = this[r][ie], s = 0; s < a[S]; s++) t ? 1 === a[s][N] && i(a[s])[En](t) && n[o](a[s]) : 1 === a[s][N] && n[o](a[s]);
					return new e(i[$n](n))
				},
				remove: function () {
					for (var t = 0; t < this[S]; t++) this[t][Te] && this[t][Te][Ae](this[t]);
					return this
				},
				add: function () {
					var t, e, n = this;
					for (t = 0; t < arguments[S]; t++) {
						var r = i(arguments[t]);
						for (e = 0; e < r[S]; e++) n[n[S]] = r[e], n[S]++
					}
					return n
				}
			}, i.fn = e[g], i[$n] = function (t) {
				for (var e = [], i = 0; i < t[S]; i++) - 1 === e[l](t[i]) && e[o](t[i]);
				return e
			}, i
		}()), d = [H, TC, bC], f = 0; f < d[S]; f++) t[d[f]] && i(t[d[f]]);
		var h;
		h = r == typeof s ? t.Dom7 || t.Zepto || t.jQuery : s, h && (SC in h.fn || (h.fn.transitionEnd = function (t) {
			function e(a) {
				if (a[Cs] === this)
					for (t[b](this, a), i = 0; i < n[S]; i++) r.off(n[i], e)
			}
			var i, n = [jp, Up, hS, mS, vS],
				r = this;
			if (t)
				for (i = 0; i < n[S]; i++) r.on(n[i], e);
			return this
		}), bg in h.fn || (h.fn[bg] = function (t) {
			for (var e = 0; e < this[S]; e++) {
				var i = this[e][Ir];
				i[aS] = i.MsTransform = i[oS] = i[sS] = i.OTransform = i[bg] = t
			}
			return this
		}), qp in h.fn || (h.fn[qp] = function (t) {
			Y != typeof t && (t += zl);
			for (var e = 0; e < this[S]; e++) {
				var i = this[e][Ir];
				i[aC] = i.MsTransitionDuration = i[sC] = i[oC] = i.OTransitionDuration = i[lC] = t
			}
			return this
		})), t.Swiper = a
	}(), r != typeof module ? module.exports = t.Swiper : k == typeof define && define.amd && define([], function () {
		"use strict";
		return t.Swiper
	}), ! function nN(t, e, i) {
		function n(a, s) {
			if (!e[a]) {
				if (!t[a]) {
					var o = k == typeof require && require;
					if (!s && o) return o(a, !0);
					if (r) return r(a, !0);
					var l = new Error(yC + a + CC);
					throw l[wC] = PC, l
				}
				var u = e[a] = {
					exports: {}
				};
				t[a][0][b](u.exports, function (e) {
					var i = t[a][1][e];
					return n(i ? i : e)
				}, u, u.exports, nN, t, e, i)
			}
			return e[a].exports
		}
		for (var r = k == typeof require && require, a = 0; a < i[S]; a++) n(i[a]);
		return n
	}({
		1: [
			function (i, n, a) {
				"use strict";

				function s(t) {
					t.fn.perfectScrollbar = function (i) {
						return this.each(function () {
							if (e == typeof i || r == typeof i) {
								var n = i;
								l[Vn](this) || o[AC](this, n)
							} else {
								var a = i;
								ST === a ? o[ST](this) : MC === a && o.destroy(this)
							}
							return t(this)
						})
					}
				}
				var o = i(xC),
					l = i(GC);
				if (k == typeof define && define.amd) define([Fp], s);
				else {
					var u = t.jQuery ? t.jQuery : t.$;
					r != typeof u && s(u)
				}
				n.exports = s
			}, {
				"../main": 7,
				"../plugin/instances": 18
			}
		],
		2: [
			function (t, e, i) {
				"use strict";

				function n(t, e) {
					var i = t[We][Q](J);
					i[l](e) < 0 && i[o](e), t[We] = i[ve](J)
				}

				function r(t, e) {
					var i = t[We][Q](J),
						n = i[l](e);
					n >= 0 && i[M](n, 1), t[We] = i[ve](J)
				}
				i[zn] = function (t, e) {
					t[rC] ? t[rC][zn](e) : n(t, e)
				}, i[gs] = function (t, e) {
					t[rC] ? t[rC][gs](e) : r(t, e)
				}, i[IC] = function (t) {
					return t[rC] ? Array[g][a][P](t[rC]) : t[We][Q](J)
				}
			}, {}
		],
		3: [
			function (i, n, a) {
				"use strict";

				function s(e, i) {
					return t[ll](e)[i]
				}

				function o(t, e, i) {
					return et == typeof i && (i = i[u]() + pa), t[Ir][e] = i, t
				}

				function l(t, e) {
					for (var i in e) {
						var n = e[i];
						et == typeof n && (n = n[u]() + pa), t[Ir][i] = n
					}
					return t
				}
				var c = {};
				c[HC] = function (t, e) {
					var i = document[we](t);
					return i[We] = e, i
				}, c.appendTo = function (t, e) {
					return e[Fe](t), t
				}, c.css = function (t, i, n) {
					return e == typeof i ? l(t, i) : r == typeof n ? s(t, i) : o(t, i, n)
				}, c[bi] = function (t, e) {
					return r != typeof t[bi] ? t[bi](e) : r != typeof t.matchesSelector ? t.matchesSelector(e) : r != typeof t[Si] ? t[Si](e) : r != typeof t[yi] ? t[yi](e) : r != typeof t[wi] ? t[wi](e) : void 0
				}, c[gs] = function (t) {
					r != typeof t[gs] ? t[gs]() : t[Te] && t[Te][Ae](t)
				}, c.queryChildren = function (t, e) {
					return Array[g][je][b](t[ie], function (t) {
						return c[bi](t, e)
					})
				}, n.exports = c
			}, {}
		],
		4: [
			function (t, e, i) {
				"use strict";
				var n = function (t) {
					this.element = t, this.events = {}
				};
				n[g][$C] = function (t, e) {
					r == typeof this.events[t] && (this.events[t] = []), this.events[t][o](e), this.element[ke](t, e, !1)
				}, n[g].unbind = function (t, e) {
					var i = r != typeof e;
					this.events[t] = this.events[t][je](function (n) {
						return !(!i || n === e) || (this.element[hr](t, n, !1), !1)
					}, this)
				}, n[g].unbindAll = function () {
					for (var t in this.events) this.unbind(t)
				};
				var a = function () {
					this.eventElements = []
				};
				a[g].eventElement = function (t) {
					var e = this.eventElements[je](function (e) {
						return e.element === t
					})[0];
					return r == typeof e && (e = new n(t), this.eventElements[o](e)), e
				}, a[g][$C] = function (t, e, i) {
					this.eventElement(t)[$C](e, i)
				}, a[g].unbind = function (t, e, i) {
					this.eventElement(t).unbind(e, i)
				}, a[g].unbindAll = function () {
					for (var t = 0; t < this.eventElements[S]; t++) this.eventElements[t].unbindAll()
				}, a[g].once = function (t, e, i) {
					var n = this.eventElement(t),
						r = function (t) {
							n.unbind(e, r), i(t)
						};
					n[$C](e, r)
				}, e.exports = a
			}, {}
		],
		5: [
			function (t, e, i) {
				"use strict";
				e.exports = function () {
					function t() {
						return Math[Uv](65536 * (1 + Math[E]()))[u](16)[Cg](1)
					}
					return function () {
						return t() + t() + Ki + t() + Ki + t() + Ki + t() + Ki + t() + t() + t()
					}
				}()
			}, {}
		],
		6: [
			function (i, n, a) {
				"use strict";
				var s = i(EC),
					o = i(BC);
				a.toInt = function (t) {
					return parseInt(t, 10) || 0
				}, a[Do] = function (t) {
					if (null === t) return null;
					if (e == typeof t) {
						var i = {};
						for (var n in t) i[n] = this[Do](t[n]);
						return i
					}
					return t
				}, a[x] = function (t, e) {
					var i = this[Do](t);
					for (var n in e) i[n] = this[Do](e[n]);
					return i
				}, a.isEditable = function (t) {
					return o[bi](t, DC) || o[bi](t, kC) || o[bi](t, LC) || o[bi](t, RC)
				}, a.removePsClasses = function (t) {
					for (var e = s[IC](t), i = 0; i < e[S]; i++) {
						var n = e[i];
						0 === n[l](OC) && s[gs](t, n)
					}
				}, a[BT] = function (t) {
					return this.toInt(o.css(t, ta)) + this.toInt(o.css(t, NC)) + this.toInt(o.css(t, cm)) + this.toInt(o.css(t, Ep)) + this.toInt(o.css(t, WC))
				}, a.startScrolling = function (t, e) {
					s[zn](t, FC), r != typeof e ? s[zn](t, OC + e) : (s[zn](t, XC), s[zn](t, VC))
				}, a.stopScrolling = function (t, e) {
					s[gs](t, FC), r != typeof e ? s[gs](t, OC + e) : (s[gs](t, XC), s[gs](t, VC))
				}, a.env = {
					isWebKit: zC in document[$e][Ir],
					supportsTouch: Df in t || t.DocumentTouch && document instanceof t.DocumentTouch,
					supportsIePointer: null !== t[tb][Ry]
				}
			}, {
				"./class": 2,
				"./dom": 3
			}
		],
		7: [
			function (t, e, i) {
				"use strict";
				var n = t(jC),
					r = t(UC),
					a = t(YC);
				e.exports = {
					initialize: r,
					update: a,
					destroy: n
				}
			}, {
				"./plugin/destroy": 9,
				"./plugin/initialize": 17,
				"./plugin/update": 21
			}
		],
		8: [
			function (t, e, i) {
				"use strict";
				e.exports = {
					maxScrollbarLength: null,
					minScrollbarLength: null,
					scrollXMarginOffset: 0,
					scrollYMarginOffset: 0,
					stopPropagationOnClick: !0,
					suppressScrollX: !1,
					suppressScrollY: !1,
					swipePropagation: !0,
					useBothWheelAxes: !1,
					useKeyboard: !0,
					useSelectionScroll: !1,
					wheelPropagation: !1,
					wheelSpeed: 1,
					theme: KC
				}
			}, {}
		],
		9: [
			function (t, e, i) {
				"use strict";
				var n = t(qC),
					r = t(_C),
					a = t(QC);
				e.exports = function (t) {
					var e = a[Vn](t);
					e && (e[Sr].unbindAll(), n[gs](e.scrollbarX), n[gs](e.scrollbarY), n[gs](e.scrollbarXRail), n[gs](e.scrollbarYRail), r.removePsClasses(t), a[gs](t))
				}
			}, {
				"../lib/dom": 3,
				"../lib/helper": 6,
				"./instances": 18
			}
		],
		10: [
			function (e, i, n) {
				"use strict";

				function r(e, i) {
					function n(t) {
						return t[ou]()
					}
					var r = t[Ss][g][xs][$C];
					i.settings.stopPropagationOnClick && i[Sr][$C](i.scrollbarY, Gs, r), i[Sr][$C](i.scrollbarYRail, Gs, function (r) {
						var s = a.toInt(i.scrollbarYHeight / 2),
							u = i.railYRatio * (r[Xs] - t[Gp] - n(i.scrollbarYRail)[De] - s),
							c = i.railYRatio * (i.railYHeight - i.scrollbarYHeight),
							d = u / c;
						0 > d ? d = 0 : d > 1 && (d = 1), l(e, De, (i.contentHeight - i.containerHeight) * d), o(e), r[xs]()
					}), i.settings.stopPropagationOnClick && i[Sr][$C](i.scrollbarX, Gs, r), i[Sr][$C](i.scrollbarXRail, Gs, function (r) {
						var s = a.toInt(i.scrollbarXWidth / 2),
							u = i.railXRatio * (r[Os] - t[Ip] - n(i.scrollbarXRail)[xr] - s),
							c = i.railXRatio * (i.railXWidth - i.scrollbarXWidth),
							d = u / c;
						0 > d ? d = 0 : d > 1 && (d = 1), l(e, xr, (i.contentWidth - i.containerWidth) * d - i.negativeScrollAdjustment), o(e), r[xs]()
					})
				}
				var a = e(JC),
					s = e(ZC),
					o = e(tw),
					l = e(ew);
				i.exports = function (t) {
					var e = s[Vn](t);
					r(t, e)
				}
			}, {
				"../../lib/helper": 6,
				"../instances": 18,
				"../update-geometry": 19,
				"../update-scroll": 20
			}
		],
		11: [
			function (t, e, i) {
				"use strict";

				function n(t, e) {
					function i(i) {
						var r = n + i * e.railXRatio,
							a = Math[K](0, e.scrollbarXRail[ou]()[xr]) + e.railXRatio * (e.railXWidth - e.scrollbarXWidth);
						0 > r ? e.scrollbarXLeft = 0 : r > a ? e.scrollbarXLeft = a : e.scrollbarXLeft = r;
						var o = s.toInt(e.scrollbarXLeft * (e.contentWidth - e.containerWidth) / (e.containerWidth - e.railXRatio * e.scrollbarXWidth)) - e.negativeScrollAdjustment;
						u(t, xr, o)
					}
					var n = null,
						r = null,
						o = function (e) {
							i(e[Os] - r), l(t), e[xs](), e[As]()
						},
						c = function () {
							s.stopScrolling(t, nS), e[Sr].unbind(e[ne], JT, o)
						};
					e[Sr][$C](e.scrollbarX, QT, function (i) {
						r = i[Os], n = s.toInt(a.css(e.scrollbarX, xr)) * e.railXRatio, s.startScrolling(t, nS), e[Sr][$C](e[ne], JT, o), e[Sr].once(e[ne], ZT, c), i[xs](), i[As]()
					})
				}

				function r(t, e) {
					function i(i) {
						var r = n + i * e.railYRatio,
							a = Math[K](0, e.scrollbarYRail[ou]()[De]) + e.railYRatio * (e.railYHeight - e.scrollbarYHeight);
						0 > r ? e.scrollbarYTop = 0 : r > a ? e.scrollbarYTop = a : e.scrollbarYTop = r;
						var o = s.toInt(e.scrollbarYTop * (e.contentHeight - e.containerHeight) / (e.containerHeight - e.railYRatio * e.scrollbarYHeight));
						u(t, De, o)
					}
					var n = null,
						r = null,
						o = function (e) {
							i(e[Xs] - r), l(t), e[xs](), e[As]()
						},
						c = function () {
							s.stopScrolling(t, cS), e[Sr].unbind(e[ne], JT, o)
						};
					e[Sr][$C](e.scrollbarY, QT, function (i) {
						r = i[Xs], n = s.toInt(a.css(e.scrollbarY, De)) * e.railYRatio, s.startScrolling(t, cS), e[Sr][$C](e[ne], JT, o), e[Sr].once(e[ne], ZT, c), i[xs](), i[As]()
					})
				}
				var a = t(iw),
					s = t(JC),
					o = t(ZC),
					l = t(tw),
					u = t(ew);
				e.exports = function (t) {
					var e = o[Vn](t);
					n(t, e), r(t, e)
				}
			}, {
				"../../lib/dom": 3,
				"../../lib/helper": 6,
				"../instances": 18,
				"../update-geometry": 19,
				"../update-scroll": 20
			}
		],
		12: [
			function (t, e, i) {
				"use strict";

				function n(t, e) {
					function i(i, n) {
						var r = t[zs];
						if (0 === i) {
							if (!e.scrollbarYActive) return !1;
							if (0 === r && n > 0 || r >= e.contentHeight - e.containerHeight && 0 > n) return !e.settings.wheelPropagation
						}
						var a = t[Ws];
						if (0 === n) {
							if (!e.scrollbarXActive) return !1;
							if (0 === a && 0 > i || a >= e.contentWidth - e.containerWidth && i > 0) return !e.settings.wheelPropagation
						}
						return !0
					}
					var n = !1;
					e[Sr][$C](t, xm, function () {
						n = !0
					}), e[Sr][$C](t, Gm, function () {
						n = !1
					});
					var s = !1;
					e[Sr][$C](e[ne], hb, function (u) {
						if (!u.isDefaultPrevented || !u.isDefaultPrevented()) {
							var c = a[bi](e.scrollbarX, nw) || a[bi](e.scrollbarY, nw);
							if (n || c) {
								var d = document[ln] ? document[ln] : e[ne][ln];
								if (d) {
									for (; d[rw];) d = d[rw][ln];
									if (r.isEditable(d)) return
								}
								var p = 0,
									f = 0;
								switch (u[Bs]) {
								case 37:
									p = -30;
									break;
								case 38:
									f = 30;
									break;
								case 39:
									p = 30;
									break;
								case 40:
									f = -30;
									break;
								case 33:
									f = 90;
									break;
								case 32:
									f = u[tg] ? 90 : -90;
									break;
								case 34:
									f = -90;
									break;
								case 35:
									f = u[ig] ? -e.contentHeight : -e.containerHeight;
									break;
								case 36:
									f = u[ig] ? t[zs] : e.containerHeight;
									break;
								default:
									return
								}
								l(t, De, t[zs] - f), l(t, xr, t[Ws] + p), o(t), s = i(p, f), s && u[As]()
							}
						}
					})
				}
				var r = t(JC),
					a = t(iw),
					s = t(ZC),
					o = t(tw),
					l = t(ew);
				e.exports = function (t) {
					var e = s[Vn](t);
					n(t, e)
				}
			}, {
				"../../lib/dom": 3,
				"../../lib/helper": 6,
				"../instances": 18,
				"../update-geometry": 19,
				"../update-scroll": 20
			}
		],
		13: [
			function (e, i, n) {
				"use strict";

				function a(e, i) {
					function n(t, n) {
						var r = e[zs];
						if (0 === t) {
							if (!i.scrollbarYActive) return !1;
							if (0 === r && n > 0 || r >= i.contentHeight - i.containerHeight && 0 > n) return !i.settings.wheelPropagation
						}
						var a = e[Ws];
						if (0 === n) {
							if (!i.scrollbarXActive) return !1;
							if (0 === a && 0 > t || a >= i.contentWidth - i.containerWidth && t > 0) return !i.settings.wheelPropagation
						}
						return !0
					}

					function a(t) {
						var e = t[pg],
							i = -1 * t[fg];
						return (r == typeof e || r == typeof i) && (e = -1 * t[og] / 6, i = t[lg] / 6), t[aw] && 1 === t[aw] && (e *= 10, i *= 10), e !== e && i !== i && (e = 0, i = t[sw]), [e, i]
					}

					function s(t, i) {
						var n = e[ow](lw);
						if (n) {
							var r = n[Fu] - n[am];
							if (r > 0 && !(0 === n[zs] && i > 0 || n[zs] === r && 0 > i)) return !0;
							var a = n[Ws] - n[lm];
							if (a > 0 && !(0 === n[Ws] && 0 > t || n[Ws] === a && t > 0)) return !0
						}
						return !1
					}

					function u(t) {
						var r = a(t),
							u = r[0],
							d = r[1];
						s(u, d) || (c = !1, i.settings.useBothWheelAxes ? i.scrollbarYActive && !i.scrollbarXActive ? (d ? l(e, De, e[zs] - d * i.settings.wheelSpeed) : l(e, De, e[zs] + u * i.settings.wheelSpeed), c = !0) : i.scrollbarXActive && !i.scrollbarYActive && (u ? l(e, xr, e[Ws] + u * i.settings.wheelSpeed) : l(e, xr, e[Ws] - d * i.settings.wheelSpeed), c = !0) : (l(e, De, e[zs] - d * i.settings.wheelSpeed), l(e, xr, e[Ws] + u * i.settings.wheelSpeed)), o(e), c = c || n(u, d), c && (t[xs](), t[As]()))
					}
					var c = !1;
					r != typeof t[uw] ? i[Sr][$C](e, dg, u) : r != typeof t[Sy] && i[Sr][$C](e, sg, u)
				}
				var s = e(ZC),
					o = e(tw),
					l = e(ew);
				i.exports = function (t) {
					var e = s[Vn](t);
					a(t, e)
				}
			}, {
				"../instances": 18,
				"../update-geometry": 19,
				"../update-scroll": 20
			}
		],
		14: [
			function (t, e, i) {
				"use strict";

				function n(t, e) {
					e[Sr][$C](t, Np, function () {
						a(t)
					})
				}
				var r = t(ZC),
					a = t(tw);
				e.exports = function (t) {
					var e = r[Vn](t);
					n(t, e)
				}
			}, {
				"../instances": 18,
				"../update-geometry": 19
			}
		],
		15: [
			function (e, i, n) {
				"use strict";

				function r(e, i) {
					function n() {
						var e = t[cw] ? t[cw]() : document[cw] ? document[cw]() : T;
						return 0 === e[u]()[S] ? null : e[dw](0)[pw]
					}

					function r() {
						d || (d = setInterval(function () {
							return s[Vn](e) ? (l(e, De, e[zs] + p[De]), l(e, xr, e[Ws] + p[xr]), void o(e)) : void clearInterval(d)
						}, 50))
					}

					function c() {
						d && (clearInterval(d), d = null), a.stopScrolling(e)
					}
					var d = null,
						p = {
							top: 0,
							left: 0
						},
						f = !1;
					i[Sr][$C](i[ne], fw, function () {
						e[xi](n()) ? f = !0 : (f = !1, c())
					}), i[Sr][$C](t, ZT, function () {
						f && (f = !1, c())
					}), i[Sr][$C](t, JT, function (t) {
						if (f) {
							var i = {
									x: t[Os],
									y: t[Xs]
								},
								n = {
									left: e[kT],
									right: e[kT] + e[Dr],
									top: e[jv],
									bottom: e[jv] + e[wl]
								};
							i[nS] < n[xr] + 3 ? (p[xr] = -5, a.startScrolling(e, nS)) : i[nS] > n[Yf] - 3 ? (p[xr] = 5, a.startScrolling(e, nS)) : p[xr] = 0, i[cS] < n[De] + 3 ? (n[De] + 3 - i[cS] < 5 ? p[De] = -5 : p[De] = -20, a.startScrolling(e, cS)) : i[cS] > n[Lm] - 3 ? (i[cS] - n[Lm] + 3 < 5 ? p[De] = 5 : p[De] = 20, a.startScrolling(e, cS)) : p[De] = 0, 0 === p[De] && 0 === p[xr] ? c() : r()
						}
					})
				}
				var a = e(JC),
					s = e(ZC),
					o = e(tw),
					l = e(ew);
				i.exports = function (t) {
					var e = s[Vn](t);
					r(t, e)
				}
			}, {
				"../../lib/helper": 6,
				"../instances": 18,
				"../update-geometry": 19,
				"../update-scroll": 20
			}
		],
		16: [
			function (e, i, n) {
				"use strict";

				function r(e, i, n, r) {
					function l(t, n) {
						var r = e[zs],
							a = e[Ws],
							s = Math[om](t),
							o = Math[om](n);
						if (o > s) {
							if (0 > n && r === i.contentHeight - i.containerHeight || n > 0 && 0 === r) return !i.settings.swipePropagation
						} else if (s > o && (0 > t && a === i.contentWidth - i.containerWidth || t > 0 && 0 === a)) return !i.settings.swipePropagation;
						return !0
					}

					function u(t, i) {
						o(e, De, e[zs] - i), o(e, xr, e[Ws] - t), s(e)
					}

					function c() {
						C = !0
					}

					function d() {
						C = !1
					}

					function p(t) {
						return t[Sb] ? t[Sb][0] : t
					}

					function f(t) {
						return !(!t[Sb] || 1 !== t[Sb][S]) || !(!t[hw] || mw === t[hw] || t[hw] === t[vw])
					}

					function h(t) {
						if (f(t)) {
							w = !0;
							var e = p(t);
							g[Os] = e[Os], g[Xs] = e[Xs], T = (new Date)[mg](), null !== y && clearInterval(y), t[xs]()
						}
					}

					function m(t) {
						if (!C && w && f(t)) {
							var e = p(t),
								i = {
									pageX: e[Os],
									pageY: e[Xs]
								},
								n = i[Os] - g[Os],
								r = i[Xs] - g[Xs];
							u(n, r), g = i;
							var a = (new Date)[mg](),
								s = a - T;
							s > 0 && (b[nS] = n / s, b[cS] = r / s, T = a), l(n, r) && (t[xs](), t[As]())
						}
					}

					function v() {
						!C && w && (w = !1, clearInterval(y), y = setInterval(function () {
							return a[Vn](e) ? Math[om](b[nS]) < .01 && Math[om](b[cS]) < .01 ? void clearInterval(y) : (u(30 * b[nS], 30 * b[cS]), b[nS] *= .8, void(b[cS] *= .8)) : void clearInterval(y)
						}, 10))
					}
					var g = {},
						T = 0,
						b = {},
						y = null,
						C = !1,
						w = !1;
					n && (i[Sr][$C](t, ub, c), i[Sr][$C](t, db, d), i[Sr][$C](e, ub, h), i[Sr][$C](e, cb, m), i[Sr][$C](e, db, v)), r && (t.PointerEvent ? (i[Sr][$C](t, ib, c), i[Sr][$C](t, rb, d), i[Sr][$C](e, ib, h), i[Sr][$C](e, nb, m), i[Sr][$C](e, rb, v)) : t.MSPointerEvent && (i[Sr][$C](t, sb, c), i[Sr][$C](t, lb, d), i[Sr][$C](e, sb, h), i[Sr][$C](e, ob, m), i[Sr][$C](e, lb, v)))
				}
				var a = e(ZC),
					s = e(tw),
					o = e(ew);
				i.exports = function (t, e, i) {
					var n = a[Vn](t);
					r(t, n, e, i)
				}
			}, {
				"../instances": 18,
				"../update-geometry": 19,
				"../update-scroll": 20
			}
		],
		17: [
			function (t, i, n) {
				"use strict";
				var r = t(gw),
					a = t(_C),
					s = t(QC),
					o = t(Tw),
					l = t(bw),
					u = t(Sw),
					c = t(yw),
					d = t(Cw),
					p = t(ww),
					f = t(Pw),
					h = t(Aw);
				i.exports = function (t, i) {
					i = e == typeof i ? i : {}, r[zn](t, Mw);
					var n = s[zn](t);
					n.settings = a[x](n.settings, i), r[zn](t, xw + n.settings.theme), l(t), u(t), d(t), p(t), n.settings.useSelectionScroll && f(t), (a.env.supportsTouch || a.env.supportsIePointer) && h(t, a.env.supportsTouch, a.env.supportsIePointer), n.settings.useKeyboard && c(t), o(t)
				}
			}, {
				"../lib/class": 2,
				"../lib/helper": 6,
				"./handler/click-rail": 10,
				"./handler/drag-scrollbar": 11,
				"./handler/keyboard": 12,
				"./handler/mouse-wheel": 13,
				"./handler/native-scroll": 14,
				"./handler/selection": 15,
				"./handler/touch": 16,
				"./instances": 18,
				"./update-geometry": 19
			}
		],
		18: [
			function (t, e, i) {
				"use strict";

				function n(t) {
					function e() {
						l[zn](t, Gw)
					}

					function i() {
						l[gs](t, Gw)
					}
					var n = this;
					n.settings = f[Do](c), n.containerWidth = null, n.containerHeight = null, n.contentWidth = null, n.contentHeight = null, n.isRtl = sT === u.css(t, _g), n.isNegativeScroll = function () {
						var e = t[Ws],
							i = null;
						return t[Ws] = -1, i = t[Ws] < 0, t[Ws] = e, i
					}(), n.negativeScrollAdjustment = n.isNegativeScroll ? t[Iw] - t[lm] : 0, n[Sr] = new d, n[ne] = t[ne] || document, n.scrollbarXRail = u.appendTo(u[HC](Pe, Hw), t), n.scrollbarX = u.appendTo(u[HC](Pe, $w), n.scrollbarXRail), n.scrollbarX[pe](_u, 0), n[Sr][$C](n.scrollbarX, Ks, e), n[Sr][$C](n.scrollbarX, _s, i), n.scrollbarXActive = null, n.scrollbarXWidth = null, n.scrollbarXLeft = null, n.scrollbarXBottom = f.toInt(u.css(n.scrollbarXRail, Lm)), n.isScrollbarXUsingBottom = n.scrollbarXBottom === n.scrollbarXBottom, n.scrollbarXTop = n.isScrollbarXUsingBottom ? null : f.toInt(u.css(n.scrollbarXRail, De)), n.railBorderXWidth = f.toInt(u.css(n.scrollbarXRail, Ep)) + f.toInt(u.css(n.scrollbarXRail, WC)), u.css(n.scrollbarXRail, da, jo), n.railXMarginWidth = f.toInt(u.css(n.scrollbarXRail, dl)) + f.toInt(u.css(n.scrollbarXRail, fl)), u.css(n.scrollbarXRail, da, T), n.railXWidth = null, n.railXRatio = null, n.scrollbarYRail = u.appendTo(u[HC](Pe, Ew), t), n.scrollbarY = u.appendTo(u[HC](Pe, Bw), n.scrollbarYRail), n.scrollbarY[pe](_u, 0), n[Sr][$C](n.scrollbarY, Ks, e), n[Sr][$C](n.scrollbarY, _s, i), n.scrollbarYActive = null, n.scrollbarYHeight = null, n.scrollbarYTop = null, n.scrollbarYRight = f.toInt(u.css(n.scrollbarYRail, Yf)), n.isScrollbarYUsingRight = n.scrollbarYRight === n.scrollbarYRight, n.scrollbarYLeft = n.isScrollbarYUsingRight ? null : f.toInt(u.css(n.scrollbarYRail, xr)), n.scrollbarYOuterWidth = n.isRtl ? f[BT](n.scrollbarY) : null, n.railBorderYWidth = f.toInt(u.css(n.scrollbarYRail, $p)) + f.toInt(u.css(n.scrollbarYRail, Dw)), u.css(n.scrollbarYRail, da, jo), n.railYMarginHeight = f.toInt(u.css(n.scrollbarYRail, Bp)) + f.toInt(u.css(n.scrollbarYRail, kw)), u.css(n.scrollbarYRail, da, T), n.railYHeight = null, n.railYRatio = null
				}

				function a(t) {
					return r == typeof t[Lw] ? t[ce](Rw) : t[Lw].psId
				}

				function s(t, e) {
					r == typeof t[Lw] ? t[pe](Rw, e) : t[Lw].psId = e
				}

				function o(t) {
					r == typeof t[Lw] ? t[Se](Rw) : delete t[Lw].psId
				}
				var l = t(gw),
					u = t(qC),
					c = t(Ow),
					d = t(Nw),
					p = t(Ww),
					f = t(_C),
					h = {};
				i[zn] = function (t) {
					var e = p();
					return s(t, e), h[e] = new n(t), h[e]
				}, i[gs] = function (t) {
					delete h[a(t)], o(t)
				}, i[Vn] = function (t) {
					return h[a(t)]
				}
			}, {
				"../lib/class": 2,
				"../lib/dom": 3,
				"../lib/event-manager": 4,
				"../lib/guid": 5,
				"../lib/helper": 6,
				"./default-setting": 8
			}
		],
		19: [
			function (t, e, i) {
				"use strict";

				function n(t, e) {
					return t.settings.minScrollbarLength && (e = Math[K](e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math[qT](e, t.settings.maxScrollbarLength)), e
				}

				function r(t, e) {
					var i = {
						width: e.railXWidth
					};
					e.isRtl ? i[xr] = e.negativeScrollAdjustment + t[Ws] + e.containerWidth - e.contentWidth : i[xr] = t[Ws], e.isScrollbarXUsingBottom ? i[Lm] = e.scrollbarXBottom - t[zs] : i[De] = e.scrollbarXTop + t[zs], s.css(e.scrollbarXRail, i);
					var n = {
						top: t[zs],
						height: e.railYHeight
					};
					e.isScrollbarYUsingRight ? e.isRtl ? n[Yf] = e.contentWidth - (e.negativeScrollAdjustment + t[Ws]) - e.scrollbarYRight - e.scrollbarYOuterWidth : n[Yf] = e.scrollbarYRight - t[Ws] : e.isRtl ? n[xr] = e.negativeScrollAdjustment + t[Ws] + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n[xr] = e.scrollbarYLeft + t[Ws], s.css(e.scrollbarYRail, n), s.css(e.scrollbarX, {
						left: e.scrollbarXLeft,
						width: e.scrollbarXWidth - e.railBorderXWidth
					}), s.css(e.scrollbarY, {
						top: e.scrollbarYTop,
						height: e.scrollbarYHeight - e.railBorderYWidth
					})
				}
				var a = t(gw),
					s = t(qC),
					o = t(_C),
					l = t(QC),
					u = t(Fw);
				e.exports = function (t) {
					var e = l[Vn](t);
					e.containerWidth = t[lm], e.containerHeight = t[am], e.contentWidth = t[Iw], e.contentHeight = t[Fu];
					var i;
					t[xi](e.scrollbarXRail) || (i = s.queryChildren(t, Xw), i[S] > 0 && i[Qv](function (t) {
						s[gs](t)
					}), s.appendTo(e.scrollbarXRail, t)), t[xi](e.scrollbarYRail) || (i = s.queryChildren(t, Vw), i[S] > 0 && i[Qv](function (t) {
						s[gs](t)
					}), s.appendTo(e.scrollbarYRail, t)), !e.settings.suppressScrollX && e.containerWidth + e.settings.scrollXMarginOffset < e.contentWidth ? (e.scrollbarXActive = !0, e.railXWidth = e.containerWidth - e.railXMarginWidth, e.railXRatio = e.containerWidth / e.railXWidth, e.scrollbarXWidth = n(e, o.toInt(e.railXWidth * e.containerWidth / e.contentWidth)), e.scrollbarXLeft = o.toInt((e.negativeScrollAdjustment + t[Ws]) * (e.railXWidth - e.scrollbarXWidth) / (e.contentWidth - e.containerWidth))) : e.scrollbarXActive = !1, !e.settings.suppressScrollY && e.containerHeight + e.settings.scrollYMarginOffset < e.contentHeight ? (e.scrollbarYActive = !0, e.railYHeight = e.containerHeight - e.railYMarginHeight, e.railYRatio = e.containerHeight / e.railYHeight, e.scrollbarYHeight = n(e, o.toInt(e.railYHeight * e.containerHeight / e.contentHeight)), e.scrollbarYTop = o.toInt(t[zs] * (e.railYHeight - e.scrollbarYHeight) / (e.contentHeight - e.containerHeight))) : e.scrollbarYActive = !1, e.scrollbarXLeft >= e.railXWidth - e.scrollbarXWidth && (e.scrollbarXLeft = e.railXWidth - e.scrollbarXWidth), e.scrollbarYTop >= e.railYHeight - e.scrollbarYHeight && (e.scrollbarYTop = e.railYHeight - e.scrollbarYHeight), r(t, e), e.scrollbarXActive ? a[zn](t, zw) : (a[gs](t, zw), e.scrollbarXWidth = 0, e.scrollbarXLeft = 0, u(t, xr, 0)), e.scrollbarYActive ? a[zn](t, jw) : (a[gs](t, jw), e.scrollbarYHeight = 0, e.scrollbarYTop = 0, u(t, De, 0))
				}
			}, {
				"../lib/class": 2,
				"../lib/dom": 3,
				"../lib/helper": 6,
				"./instances": 18,
				"./update-scroll": 20
			}
		],
		20: [
			function (t, e, i) {
				"use strict";
				var n, a, s = t(QC),
					o = document[dC](Ss),
					l = document[dC](Ss),
					u = document[dC](Ss),
					c = document[dC](Ss),
					d = document[dC](Ss),
					p = document[dC](Ss),
					f = document[dC](Ss),
					h = document[dC](Ss),
					m = document[dC](Ss),
					v = document[dC](Ss);
				o[pC](Uw, !0, !0), l[pC](Yw, !0, !0), u[pC](Kw, !0, !0), c[pC](qw, !0, !0), d[pC](_w, !0, !0), p[pC](Qw, !0, !0), f[pC](Jw, !0, !0), h[pC](Zw, !0, !0), m[pC](tP, !0, !0), v[pC](eP, !0, !0), e.exports = function (t, e, i) {
					if (r == typeof t) throw iP;
					if (r == typeof e) throw nP;
					if (r == typeof i) throw rP;
					De === e && 0 >= i && (t[zs] = i = 0, t[fC](m)), xr === e && 0 >= i && (t[Ws] = i = 0, t[fC](f));
					var g = s[Vn](t);
					De === e && i >= g.contentHeight - g.containerHeight && (t[zs] = i = g.contentHeight - g.containerHeight, t[fC](v)), xr === e && i >= g.contentWidth - g.containerWidth && (t[Ws] = i = g.contentWidth - g.containerWidth, t[fC](h)), n || (n = t[zs]), a || (a = t[Ws]), De === e && n > i && t[fC](o), De === e && i > n && t[fC](l), xr === e && a > i && t[fC](u), xr === e && i > a && t[fC](c), De === e && (t[zs] = n = i, t[fC](d)), xr === e && (t[Ws] = a = i, t[fC](p))
				}
			}, {
				"./instances": 18
			}
		],
		21: [
			function (t, e, i) {
				"use strict";
				var n = t(qC),
					r = t(_C),
					a = t(QC),
					s = t(Tw),
					o = t(Fw);
				e.exports = function (t) {
					var e = a[Vn](t);
					e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t[Iw] - t[lm] : 0, n.css(e.scrollbarXRail, da, jo), n.css(e.scrollbarYRail, da, jo), e.railXMarginWidth = r.toInt(n.css(e.scrollbarXRail, dl)) + r.toInt(n.css(e.scrollbarXRail, fl)), e.railYMarginHeight = r.toInt(n.css(e.scrollbarYRail, Bp)) + r.toInt(n.css(e.scrollbarYRail, kw)), n.css(e.scrollbarXRail, da, ca), n.css(e.scrollbarYRail, da, ca), s(t), o(t, De, t[zs]), o(t, xr, t[Ws]), n.css(e.scrollbarXRail, da, T), n.css(e.scrollbarYRail, da, T))
				}
			}, {
				"../lib/dom": 3,
				"../lib/helper": 6,
				"./instances": 18,
				"./update-geometry": 19,
				"./update-scroll": 20
			}
		]
	}, {}, [1]), ! function (i) {
		"use strict";
		var n = function (t, e) {
			this[p](t, e)
		};
		n[g] = {
			constructor: n,
			init: function (t, e) {
				var n = this;
				this[No] = e, this.$element = i(t).delegate(qh, aP, i.proxy(this[uu], this)), this[No].remote && this.$element[ze](sP)[vr](this[No].remote, function () {
					var t = i[Ss](oP);
					n.$element.trigger(t)
				});
				var r = typeof this[No].manager === k ? this[No].manager[b](this) : this[No].manager;
				r = r.appendModal ? r : i(r).modalmanager()[Vr](lP), r.appendModal(this)
			},
			toggle: function () {
				return this[this.isShown ? uu : lu]()
			},
			show: function () {
				var t = i[Ss](lu);
				this.isShown || (this.$element.trigger(t), t.isDefaultPrevented() || (this[Uh](), this.tab(), this[No].loading && this.loading()))
			},
			hide: function (t) {
				t && t[As](), t = i[Ss](uu), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this[Uh](), this.tab(), this.isLoading && this.loading(), i(document).off(uP), this.$element.removeClass(of).removeClass(cP).removeClass(this[No].attentionAnimation).removeClass(dP).attr(pP, !0), i.support[qp] && this.$element.hasClass(lf) ? this.hideWithTransition() : this.hideModal())
			},
			layout: function () {
				var e = this[No][ru] ? ru : fP,
					n = this[No][ru] || this[No][hP];
				if (this[No][ta]) {
					this.$element.css(ta, this[No][ta]);
					var r = this;
					this.$element.css(Nm, function () {
						return mP[ue](r[No][ta]) ? -(parseInt(r[No][ta]) / 2) + Xm : -(i(this)[ta]() / 2) + pa
					})
				} else this.$element.css(ta, T), this.$element.css(Nm, T);
				this.$element[ze](sP).css(Tu, T).css(e, T), n && this.$element[ze](sP).css(Tu, Dl).css(e, n);
				var a = i(t)[ru]() - 10 < this.$element[ru]();
				a || this[No].modalOverflow ? this.$element.css(Om, 0).addClass(dP) : this.$element.css(Om, 0 - this.$element[ru]() / 2).removeClass(dP)
			},
			tab: function () {
				var t = this;
				this.isShown && this[No].consumeTab ? this.$element.on(vP, gP, function (e) {
					if (e[ks] && 9 == e[ks]) {
						var n = [],
							r = Number(i(this)[Vr](_u));
						t.$element[ze](TP).each(function (t) {
							n[o](Number(i(this)[Vr](_u)))
						}), n[A](function (t, e) {
							return t - e
						});
						var a = i.inArray(r, n);
						e[tg] ? 0 == a ? t.$element[ze](bP + n[n[S] - 1] + tt)[Ks]() : t.$element[ze](bP + n[a - 1] + tt)[Ks]() : a < n[S] - 1 ? t.$element[ze](bP + n[a + 1] + tt)[Ks]() : t.$element[ze](bP + n[0] + tt)[Ks](), e[As]()
					}
				}) : this.isShown || this.$element.off(vP)
			},
			escape: function () {
				var t = this;
				this.isShown && this[No].keyboard ? (this.$element.attr(_u) || this.$element.attr(_u, -1), this.$element.on(SP, function (e) {
					27 == e[Bs] && t[uu]()
				})) : this.isShown || this.$element.off(SP)
			},
			hideWithTransition: function () {
				var t = this,
					e = setTimeout(function () {
						t.$element.off(i.support[qp][ma]), t.hideModal()
					}, 500);
				this.$element.one(i.support[qp][ma], function () {
					clearTimeout(e), t.hideModal()
				})
			},
			hideModal: function () {
				var t = this[No][ru] ? ru : fP,
					e = this[No][ru] || this[No][hP];
				e && this.$element[ze](sP).css(Tu, T).css(t, T), this.$element[uu]().trigger(ci)
			},
			removeLoading: function () {
				this.$loading[gs](), this.$loading = null, this.isLoading = !1
			},
			loading: function (t) {
				t = t || function () {};
				var e = this.$element.hasClass(lf) ? lf : T;
				if (this.isLoading)
					if (this.isLoading && this.$loading) {
						this.$loading.removeClass(of);
						var n = this;
						i.support[qp] && this.$element.hasClass(lf) ? this.$loading.one(i.support[qp][ma], function () {
							n.removeLoading()
						}) : n.removeLoading()
					} else t && t(this.isLoading);
				else {
					var r = i.support[qp] && e;
					this.$loading = i(yP + e + CP)[Ro](this[No].spinner).appendTo(this.$element), r && this.$loading[0][Dr], this.$loading.addClass(of), this.isLoading = !0, r ? this.$loading.one(i.support[qp][ma], t) : t()
				}
			},
			focus: function () {
				var t = this.$element[ze](this[No].focusOn);
				t = t[S] ? t : this.$element, t[Ks]()
			},
			attention: function () {
				if (this[No].attentionAnimation) {
					this.$element.removeClass(cP).removeClass(this[No].attentionAnimation);
					var t = this;
					setTimeout(function () {
						t.$element.addClass(cP).addClass(t[No].attentionAnimation)
					}, 0)
				}
				this[Ks]()
			},
			destroy: function () {
				var t = i[Ss](MC);
				this.$element.trigger(t), t.isDefaultPrevented() || (this.$element.off(wP).removeData(PP).removeClass(of).attr(pP, !0), this.$parent !== this.$element[Nd]() ? this.$element.appendTo(this.$parent) : this.$parent[S] || (this.$element[gs](), this.$element = null), this.$element.trigger(AP))
			}
		}, i.fn.modal = function (t, r) {
			return this.each(function () {
				var a = i(this),
					o = a[Vr](PP),
					l = i[x]({}, i.fn.modal.defaults, a[Vr](), typeof t == e && t);
				o || a[Vr](PP, o = new n(this, l)), typeof t == Y ? o[t][P](o, [][s](r)) : l[lu] && o[lu]()
			})
		}, i.fn.modal.defaults = {
			keyboard: !0,
			backdrop: !0,
			loading: !1,
			show: !0,
			width: null,
			height: null,
			maxHeight: null,
			modalOverflow: !1,
			consumeTab: !0,
			focusOn: null,
			replace: !1,
			resize: !1,
			attentionAnimation: MP,
			manager: Gr,
			spinner: xP,
			backdropTemplate: GP
		}, i.fn.modal.Constructor = n, i(function () {
			i(document).off(IP).on(HP, fm, function (t) {
				var e = i(this),
					n = e.attr(cn),
					r = i(e.attr(ef) || n && n[B](_f, T)),
					a = r[Vr](PP) ? wu : i[x]({
						remote: !hm[ue](n) && n
					}, r[Vr](), e[Vr]());
				t[As](), r.modal(a).one(uu, function () {
					e[Ks]()
				})
			})
		})
	}(t.jQuery), ! function (i) {
		"use strict";

		function n(t) {
			return function (e) {
				if (e && this === e[Cs]) return t[P](this, arguments)
			}
		}
		var a = function (t, e) {
			this[p](t, e)
		};
		a[g] = {
			constructor: a,
			init: function (n, r) {
				if (this.$element = i(n), this[No] = i[x]({}, i.fn.modalmanager.defaults, this.$element[Vr](), typeof r == e && r), this[$P] = [], this.backdropCount = 0, this[No][Yh]) {
					var a, s = this;
					i(t).on(EP, function () {
						a && clearTimeout(a), a = setTimeout(function () {
							for (var t = 0; t < s[$P][S]; t++) s[$P][t].isShown && s[$P][t].layout()
						}, 10)
					})
				}
			},
			createModal: function (t, e) {
				i(t).modal(i[x]({
					manager: this
				}, e))
			},
			appendModal: function (e) {
				this[$P][o](e);
				var r = this;
				e.$element.on(BP, n(function (n) {
					var a = function () {
						e.isShown = !0;
						var n = i.support[qp] && e.$element.hasClass(lf);
						r.$element.toggleClass(jh, r.hasOpenModal()).toggleClass(DP, i(t)[ru]() < r.$element[ru]()), e.$parent = e.$element[Nd](), e.$container = r.createContainer(e), e.$element.appendTo(e.$container), r.backdrop(e, function () {
							e.$element[lu](), n && e.$element[0][Dr], e.layout(), e.$element.addClass(of).attr(pP, !1);
							var t = function () {
								r.setFocus(), e.$element.trigger(kP)
							};
							n ? e.$element.one(i.support[qp][ma], t) : t()
						})
					};
					e[No][B] ? r[B](a) : a()
				})), e.$element.on(LP, n(function (t) {
					if (r.backdrop(e), e.$element[Nd]()[S])
						if (e.$backdrop) {
							var n = i.support[qp] && e.$element.hasClass(lf);
							n && e.$element[0][Dr], i.support[qp] && e.$element.hasClass(lf) ? e.$backdrop.one(i.support[qp][ma], function () {
								e.destroy()
							}) : e.destroy()
						} else e.destroy();
					else r.destroyModal(e)
				})), e.$element.on(RP, n(function (t) {
					r.destroyModal(e)
				}))
			},
			getOpenModals: function () {
				for (var t = [], e = 0; e < this[$P][S]; e++) this[$P][e].isShown && t[o](this[$P][e]);
				return t
			},
			hasOpenModal: function () {
				return this.getOpenModals()[S] > 0
			},
			setFocus: function () {
				for (var t, e = 0; e < this[$P][S]; e++) this[$P][e].isShown && (t = this[$P][e]);
				t && t[Ks]()
			},
			destroyModal: function (t) {
				t.$element.off(OP), t.$backdrop && this.removeBackdrop(t), this[$P][M](this.getIndexOfModal(t), 1);
				var e = this.hasOpenModal();
				this.$element.toggleClass(jh, e), e || this.$element.removeClass(DP), this.removeContainer(t), this.setFocus()
			},
			getModalAt: function (t) {
				return this[$P][t]
			},
			getIndexOfModal: function (t) {
				for (var e = 0; e < this[$P][S]; e++)
					if (t === this[$P][e]) return e
			},
			replace: function (t) {
				for (var e, r = 0; r < this[$P][S]; r++) this[$P][r].isShown && (e = this[$P][r]);
				e ? (this.$backdropHandle = e.$backdrop, e.$backdrop = null, t && e.$element.one(ci, n(i.proxy(t, this))), e[uu]()) : t && t()
			},
			removeBackdrop: function (t) {
				t.$backdrop[gs](), t.$backdrop = null
			},
			createBackdrop: function (t, e) {
				var n;
				return this.$backdropHandle ? (n = this.$backdropHandle, n.off(OP), this.$backdropHandle = null, this.isLoading && this.removeSpinner()) : n = i(e).addClass(t).appendTo(this.$element), n
			},
			removeContainer: function (t) {
				t.$container[gs](), t.$container = null
			},
			createContainer: function (t) {
				var e;
				return e = i(NP).css(WP, l(PP, this.getOpenModals()[S])).appendTo(this.$element), t && t[No].backdrop != Pp ? e.on(IP, n(function (e) {
					t[uu]()
				})) : t && e.on(IP, n(function (e) {
					t.attention()
				})), e
			},
			backdrop: function (t, e) {
				var n = t.$element.hasClass(lf) ? lf : T,
					r = t[No].backdrop && this.backdropCount < this[No].backdropLimit;
				if (t.isShown && r) {
					var a = i.support[qp] && n && !this.$backdropHandle;
					t.$backdrop = this.createBackdrop(n, t[No].backdropTemplate), t.$backdrop.css(WP, l(FP, this.getOpenModals()[S])), a && t.$backdrop[0][Dr], t.$backdrop.addClass(of), this.backdropCount += 1, a ? t.$backdrop.one(i.support[qp][ma], e) : e()
				} else if (!t.isShown && t.$backdrop) {
					t.$backdrop.removeClass(of), this.backdropCount -= 1;
					var s = this;
					i.support[qp] && t.$element.hasClass(lf) ? t.$backdrop.one(i.support[qp][ma], function () {
						s.removeBackdrop(t)
					}) : s.removeBackdrop(t)
				} else e && e()
			},
			removeSpinner: function () {
				this.$spinner && this.$spinner[gs](), this.$spinner = null, this.isLoading = !1
			},
			removeLoading: function () {
				this.$backdropHandle && this.$backdropHandle[gs](), this.$backdropHandle = null, this.removeSpinner()
			},
			loading: function (e) {
				if (e = e || function () {}, this.$element.toggleClass(jh, !this.isLoading || this.hasOpenModal()).toggleClass(DP, i(t)[ru]() < this.$element[ru]()), this.isLoading)
					if (this.isLoading && this.$backdropHandle) {
						this.$backdropHandle.removeClass(of);
						var n = this;
						i.support[qp] ? this.$backdropHandle.one(i.support[qp][ma], function () {
							n.removeLoading()
						}) : n.removeLoading()
					} else e && e(this.isLoading);
				else {
					this.$backdropHandle = this.createBackdrop(lf, this[No].backdropTemplate), this.$backdropHandle[0][Dr];
					var r = this.getOpenModals();
					this.$backdropHandle.css(WP, l(FP, r[S] + 1)).addClass(of);
					var a = i(this[No].spinner).css(WP, l(PP, r[S] + 1)).appendTo(this.$element).addClass(of);
					this.$spinner = i(this.createContainer())[Ro](a).on(XP, i.proxy(this.loading, this)), this.isLoading = !0, i.support[qp] ? this.$backdropHandle.one(i.support[qp][ma], e) : e()
				}
			}
		};
		var l = function () {
			var t, e = {};
			return function (n, a) {
				if (typeof t === r) {
					var s = i(VP).appendTo(Gr),
						o = i(zP).appendTo(Gr);
					e[PP] = +s.css(WP), e[FP] = +o.css(WP), t = e[PP] - e[FP], s[gs](), o[gs](), o = s = null
				}
				return e[n] + t * a
			}
		}();
		i.fn.modalmanager = function (t, e) {
			return this.each(function () {
				var n = i(this),
					r = n[Vr](lP);
				r || n[Vr](lP, r = new a(this, t)), typeof t === Y && r[t][P](r, [][s](e))
			})
		}, i.fn.modalmanager.defaults = {
			backdropLimit: 999,
			resize: !0,
			spinner: jP,
			backdropTemplate: GP
		}, i.fn.modalmanager.Constructor = a, i(function () {
			i(document).off(zh).off(nm)
		})
	}(jQuery),
	function (i) {
		i.cluetip = {
			version: UP,
			template: [yp, YP, KP, qP, _a, _P, _a][ve](T),
			setup: {
				insertionType: QP,
				insertionElement: Gr
			},
			defaults: {
				multiple: !1,
				width: 275,
				height: Dl,
				cluezIndex: 97,
				positionBy: Dl,
				topOffset: 15,
				leftOffset: 15,
				snapToEdge: !1,
				local: !1,
				localPrefix: null,
				localIdSuffix: null,
				hideLocal: !0,
				attribute: JP,
				titleAttribute: Ym,
				splitTitle: T,
				escapeTitle: !1,
				showTitle: !0,
				cluetipClass: KC,
				hoverClass: T,
				waitImage: !0,
				cursor: ZP,
				arrows: !1,
				dropShadow: !0,
				dropShadowSteps: 6,
				sticky: !1,
				mouseOutClose: !1,
				delayedClose: 50,
				activation: Bf,
				clickThrough: !0,
				tracking: !1,
				closePosition: De,
				closeText: tA,
				truncate: 0,
				fx: {
					open: lu,
					openSpeed: T
				},
				hoverIntent: {
					sensitivity: 3,
					interval: 50,
					timeout: 0
				},
				onActivate: function (t) {
					return !0
				},
				onShow: function (t, e) {},
				onHide: function (t, e) {},
				ajaxCache: !0,
				ajaxProcess: function (t) {
					return t = t[B](eA, T)[B](iA, T)
				},
				ajaxSettings: {
					dataType: Sp
				},
				debug: !1
			}
		};
		var n, s = nA,
			o = {},
			u = 0,
			c = 0,
			d = function (t) {
				return t[B](rA, aA)[B](sA, oA)[B](lA, uA)
			};
		i.fn.attrProp = i.fn.prop || i.fn.attr, i.fn.cluetip = function (r, p) {
			function f(t, n) {
				var r = t || T;
				return n = n || T, typeof n == e ? i.each(n, function (t, e) {
					r += Ki + t + Ki + e
				}) : typeof n == Y && (r += n), r
			}

			function h(t, e, n) {
				var r = T,
					a = e.dropShadow && e.dropShadowSteps ? +e.dropShadowSteps : 0;
				if (i.cluetip[vM]) {
					a && (r = gM + a + TM);
					return t.css(i.cluetip[vM], r), !1
				}
				var s = t[ze](bM);
				if (a == s[S]) return s;
				s[gs]();
				for (var o = [], l = 0; l < a;) o[l++] = SM + l + yM + l + CM;
				return n = i(o[ve](T)).css({
					position: Nl,
					backgroundColor: wM,
					zIndex: P - 1,
					opacity: .1
				}).addClass(PM).prependTo(t)
			}
			var m, v, g, y, C, w;
			if (typeof r == e && (p = r, r = null), r == MC) return this.each(function (t) {
				var e = i(this),
					n = e[Vr](cA);
				n && (i(n[wn])[gs](), i.removeData(this, Ym), i.removeData(this, cA)), n[Ym] && e.attrProp(Ym, n[Ym]), e.unbind(dA).unbind(pA)
			}), i(fA)[S] || i(document).unbind(dA), this;
			p = i[x](!0, {}, i.cluetip.defaults, p || {}), u++;
			var P, A = i.cluetip.backCompat || !p[hA] ? cA : mA + u,
				M = fe + A,
				G = i.cluetip.backCompat ? fe : ds,
				I = i.cluetip.setup.insertionType,
				H = i.cluetip.setup.insertionElement || Gr;
			I = vA[ue](I) ? I : QP, m = i(M), m[S] || (m = i(i.cluetip.template)[I](H).attr(se, A).css({
				position: Nl,
				display: ca
			}), P = +p.cluezIndex, g = m[ze](G + gA).css({
				position: Ap,
				zIndex: P
			}), v = m[ze](G + TA), y = m[ze](G + bA), m[$C](SA, function (t) {
				i(this)[Vr](yA, t[L] === xm)
			})), n = i(CA), !n[S] && p.waitImage && (n = i(wA).attr(se, PA).css({
				position: Nl
			}), n[Oo](m)[uu]());
			var $ = (parseInt(m.css(NC), 10) || 0) + (parseInt(m.css(cm), 10) || 0);
			return this.each(function (u) {
				function A() {
					return !1
				}

				function I(t, e) {
					var i = t[Zc];
					e.beforeSend(t.xhr, e), i == $i ? e[i](t.xhr, t.textStatus) : i == Nc && e[i](t[Vr], t.textStatus, t.xhr), e[yr](t.xhr, e.textStatus)
				}
				var E, B = this,
					R = i(this),
					O = i[x](!0, {}, p, i.metadata ? R.metadata() : i.meta ? R[Vr]() : R[Vr](cA) || {}),
					N = !1,
					W = !1,
					F = null,
					X = O[O.attribute] || (O.attribute == cn ? R.attr(O.attribute) : R.attrProp(O.attribute) || R.attr(O.attribute)),
					V = O.cluetipClass;
				if (P = +O.cluezIndex, R[Vr](cA, {
					title: B[Ym],
					zIndex: P,
					selector: M,
					cursor: B[Ir][pT] || T
				}), O.arrows && !m[ze](AA)[S] && m[Ro](MA), !X && !O.splitTitle && !r) return !0;
				O.local && O.localPrefix && (X = O.localPrefix + X), O.local && O.hideLocal && X && i(X + xA)[uu]();
				var z, j, Y, q, _, J, Z, tt, et, it, nt, rt, at, st, ot = parseInt(O.topOffset, 10),
					lt = parseInt(O.leftOffset, 10),
					ut = isNaN(parseInt(O[ru], 10)) ? Dl : D[ue](O[ru]) ? O[ru] : O[ru] + pa,
					ct = parseInt(O[ta], 10) || 275,
					dt = ct + $ + O.dropShadowSteps,
					pt = this[Dr],
					ft = O.attribute != Ym ? R.attr(O.titleAttribute) || T : T;
				O.escapeTitle && (ft = d(ft)), O.splitTitle && (st = ft[Q](O.splitTitle), ft = O.showTitle || st[0] === T ? st[Ce]() : T);
				R[$C](SA, function (t) {
					var e = R[Vr](cA);
					e.entered = t[L] === yA, R[Vr](cA, e)
				});
				var ht = function (a) {
					var s, d, h, w = O.onActivate[b](B, a);
					if (w === !1) return !1;
					if (W = !0, m = i(M).css({
						position: Nl
					}), g = m[ze](G + gA), v = m[ze](G + TA), y = m[ze](G + bA), C = m[ze](G + GA), m.removeClass().css({
						width: ct
					}), X == R.attr(cn) && R.css(pT, O[pT]), O.hoverClass && R.addClass(O.hoverClass), q = J = R[Cp]()[De], _ = q + R[ag](), it = R[Cp]()[xr], i(H).css(wp) === Ap && (it -= i(H)[0][ou]()[xr]), pt = R[sm](), a[L] == focus || O.positionBy == mw && !a[Os] ? (rt = it + pt / 2 + lt, m.css({
						left: nt
					}), tt = J + ot) : (rt = a[Os], tt = a[Xs]), B[Of][U]() != IA && (Y = i(document)[zs](), at = i(t)[ta]()), O.positionBy == Mp ? (nt = pt + it + lt, t[sm] < nt + parseInt(m[ta](), 10) && (direction = xr, nt = it - parseInt(m[ta](), 10)), m.css({
						left: nt
					})) : (nt = pt > it && it > dt || it + pt + dt + lt > at ? it - dt - lt : pt + it + lt, (B[Of][U]() == IA || O.positionBy == mw || pt + dt > at) && (rt + 20 + dt > at ? (m.addClass(mA + V), nt = rt - dt - lt >= 0 ? rt - dt - lt - parseInt(m.css(dl), 10) + parseInt(v.css(fl), 10) : rt - dt / 2) : nt = rt + lt), s = nt < 0 ? a[Xs] + ot : a[Xs], (nt < 0 || O.positionBy == HA || O.positionBy == $A) && (nt = rt + dt / 2 > at ? at / 2 - dt / 2 : Math[K](rt - dt / 2, 0))), C.css({
						zIndex: R[Vr](cA)[gS] + 1
					}), m.css({
						left: nt,
						zIndex: R[Vr](cA)[gS]
					}), j = i(t)[ru](), r) E = typeof r == k ? r[b](B) : r, v.html(E), mt(s);
					else if (st) {
						var P = st[S];
						if (v.html(P ? st[0] : T), P > 1)
							for (var A = 1; A < P; A++) v[Ro](EA + st[A] + _a);
						mt(s)
					} else if (O.local || 0 === X[l](fe)) {
						if (O.local) {
							var $ = i(X + (WA[ue](X) ? T : FA + u + At))[Do](!0)[lu]();
							O.localIdSuffix && $.attr(se, $[0][se] + O.localIdSuffix), v.html($), mt(s)
						}
					} else if (BA[ue](X)) v.html(DA + X + kA + ft + LA), mt(s);
					else {
						var D = O.ajaxSettings.beforeSend,
							F = O.ajaxSettings[$i],
							z = O.ajaxSettings.success,
							Q = O.ajaxSettings[yr];
						h = f(X, O.ajaxSettings[Vr]);
						var Z = {
							cache: O.ajaxCache,
							url: X,
							beforeSend: function (t, e) {
								D && D[b](B, t, m, v, e), g[Wf]()[gn](), O.waitImage && n.css({
									top: tt + 20,
									left: rt + 20,
									zIndex: R[Vr](cA)[gS] - 1
								})[lu]()
							},
							error: function (t, e) {
								p.ajaxCache && !o[h] && (o[h] = {
									status: $i,
									textStatus: e,
									xhr: t
								}), W && (F ? F[b](B, t, e, m, v) : v.html(RA))
							},
							success: function (t, i, n) {
								p.ajaxCache && !o[h] && (o[h] = {
									status: Nc,
									data: t,
									textStatus: i,
									xhr: n
								}), N = O.ajaxProcess[b](B, t), typeof N == e && null !== N && (ft = N[Ym], N = N[Yl]), W && (z && z[b](B, t, i, m, v), v.html(N))
							},
							complete: function (t, e) {
								Q && Q[b](B, t, e, m, v);
								var r = v[0][oe](CT);
								c = r[S];
								for (var a = 0, o = r[S]; a < o; a++) r[a][yr] && c--;
								c ? i(r)[$C](OA, function () {
									c--, 0 === c && (n[uu](), i(r).unbind(NA), W && mt(s))
								}) : (n[uu](), W && mt(s))
							}
						};
						d = i[x](!0, {}, O.ajaxSettings, Z), o[h] ? I(o[h], d) : i.ajax(d)
					}
				};
				R.unbind(XA, ht)[$C](XA, ht);
				var mt = function (t) {
						var e, n, r, o = ft || O.showTitle && VA,
							l = T,
							u = T,
							c = !1,
							d = {
								bottom: function (t) {
									t.appendTo(v)
								},
								top: function (t) {
									t.prependTo(v)
								},
								title: function (t) {
									t.prependTo(y)
								}
							};
						if (m.addClass(mA + V), O[zA]) {
							var p = v[Tn]()[a](0, O[zA]) + jA;
							v.html(p)
						}
						o ? y[lu]().html(o) : y[uu](), O[UA] && (d[O.closePosition] && (e = i(YA + O.closeText + KA), d[O.closePosition](e), e[$C](qA, function () {
							return gt(), !1
						})), O.mouseOutClose && (R.unbind(_A), m.unbind(_A), O.mouseOutClose != QA && O.mouseOutClose != cA && O.mouseOutClose !== !0 || m[$C](_A, Tt), O.mouseOutClose != QA && O.mouseOutClose != Pa || R[$C](_A, Tt))), g.css({
							zIndex: R[Vr](cA)[gS],
							overflow: ut == Dl ? Wd : Dl,
							height: ut
						}), z = ut == Dl ? Math[K](m[DT](), m[ru]()) : parseInt(ut, 10), Z = J, et = Y + j, c = nt < rt && Math[K](nt, 0) + dt > rt, O.positionBy == Mp ? Z = J - O.dropShadowSteps + ot : O.positionBy == $A || O.positionBy == HA || c ? (O.positionBy == $A ? u = J + z + ot < et && tt - Y < z + ot ? Lm : De : (O.positionBy == HA || c) && (u = J + z + ot > et && tt - Y > z + ot ? De : Lm), O.snapToEdge ? u == De ? Z = q - z - ot : u == Lm && (Z = _ + ot) : u == De ? Z = tt - z - ot : u == Lm && (Z = tt + ot)) : Z = J + z + ot > et ? z >= j ? Y : et - z - ot : R.css(da) == jo || B[Of][U]() == IA || O.positionBy == mw ? t - ot : J - O.dropShadowSteps, u === T && (u = nt < it ? xr : Yf), n = JA + u + Ki + V + ZA + V, V == tM && (n += eM), m.css({
							top: Z + pa
						}).attrProp({
							className: s + n
						}), O.arrows ? (iM[ue](u) && (r = m[ru]() - C[ru](), l = nt >= 0 && t > 0 ? J - Z - O.dropShadowSteps : 0, l = r > l ? l : r, l += pa), C.css({
							top: l
						})[lu]()) : C[uu](), w = h(m, O), w && w[S] && w[uu]().css({
							height: z,
							width: ct,
							zIndex: R[Vr](cA)[gS] - 1
						})[lu](), F || m[uu](), clearTimeout(F), F = null, m[O[Kr][Jd]](O[Kr].openSpeed || 0), i.fn.bgiframe && m.bgiframe(), O.onShow[b](B, m, v)
					},
					vt = function (t) {
						W = !1, n[uu](), O[UA] && !nM[ue](O.activation) || (O.delayedClose > 0 ? (clearTimeout(F), F = null, F = setTimeout(gt, O.delayedClose)) : (gt(), clearTimeout(F))), O.hoverClass && R.removeClass(O.hoverClass)
					},
					gt = function (t) {
						var e = t && t[Vr](cA) ? t : R,
							n = e[Vr](cA) && e[Vr](cA)[wn],
							r = n || rM,
							a = i(r),
							s = a[ze](G + TA),
							o = a[ze](G + GA);
						a[uu]().removeClass(), O.onHide[b](e[0], a, s), n && (e.removeClass(aM), R.css(pT, R[Vr](cA)[pT])), n && ft && e.attrProp(O.titleAttribute, ft), O.arrows && o.css({
							top: T
						}), w && w[uu]()
					},
					Tt = function () {
						var t = this;
						clearTimeout(F), F = setTimeout(function () {
							var e = R[Vr](cA).entered,
								i = m[Vr](yA),
								n = !1;
							O.mouseOutClose == QA && (e || i) ? n = !0 : O.mouseOutClose !== !0 && O.mouseOutClose != cA || !i ? O.mouseOutClose == Pa && e && (n = !0) : n = !0, n || gt[b](t)
						}, O.delayedClose)
					};
				if (i(document).unbind(sM)[$C](sM, function (t) {
					gt(i(t[Cs]))
				}), nM[ue](O.activation)) R[$C](qA, function (t) {
					return m[En](oM) || !R[En](lM) ? (ht(t), i(lM).removeClass(aM), R.addClass(aM)) : vt(t), !1
				});
				else if (O.activation == Ks) R[$C](uM, function (t) {
					R.attrProp(Ym, T), ht(t)
				}), R[$C](cM, function (t) {
					R.attrProp(Ym, R[Vr](cA)[Ym]), vt(t)
				});
				else {
					R[O.clickThrough ? dM : $C](qA, A);
					var bt = function (t) {
						if (O.tracking) {
							var e = nt - t[Os],
								i = Z ? Z - t[Xs] : J - t[Xs];
							R[$C](pM, function (t) {
								m.css({
									left: t[Os] + e,
									top: t[Xs] + i
								})
							})
						}
					};
					i.fn.hoverIntent && O.hoverIntent ? R.hoverIntent({
						sensitivity: O.hoverIntent.sensitivity,
						interval: O.hoverIntent[Iu],
						over: function (t) {
							ht(t), bt(t)
						},
						timeout: O.hoverIntent[wd],
						out: function (t) {
							vt(t), R.unbind(pM)
						}
					}) : R[$C](fM, function (t) {
						ht(t), bt(t)
					})[$C](hM, function (t) {
						vt(t), R.unbind(pM)
					}), R[$C](mM, function (t) {
						R.attrProp(Ym, T)
					})[$C](hM, function (t) {
						R.attrProp(Ym, R[Vr](cA)[Ym])
					})
				}
			}), this
		},
		function () {
			i.support = i.support || {};
			for (var t = document[we](Pe), e = t[Ir], n = [vM], s = [AM, Vl, MM, xM], o = 0, l = n[S]; o < l; o++) {
				var u = n[o],
					c = u[Nn](0)[v]() + u[a](1);
				if (typeof e[u] !== r) i.cluetip[u] = u;
				else
					for (var d = 0, p = s[S]; d < p; d++)
						if (typeof e[s[d] + c] !== r) {
							i.cluetip[u] = s[d] + c;
							break
						}
				i.support[u] || (i.support[u] = i.cluetip[u])
			}
			t = null
		}(), i.fn.cluetip.defaults = i.cluetip.defaults
	}(jQuery), ! function (e, i) {
		e(function () {
			"use strict";

			function e(t, e) {
				return null != t && null != e && t[U]() === e[U]()
			}

			function n(t, e) {
				var i, n, r = t[S];
				if (!r || !e) return !1;
				for (i = e[U](), n = 0; r > n; ++n)
					if (i === t[n][U]()) return !0;
				return !1
			}

			function a(t) {
				for (var e in t) f[b](t, e) && (t[e] = new RegExp(t[e], Ot))
			}

			function s(t, e) {
				this.ua = t || T, this.t = {}, this.maxPhoneWidth = e || 600
			}
			var d = {};
			d.mobileDetectRules = {
				phones: {
					iPhone: GM,
					BlackBerry: IM,
					HTC: HM,
					Nexus: $M,
					Dell: EM,
					Motorola: BM,
					Samsung: DM,
					LG: kM,
					Sony: LM,
					Asus: RM,
					Micromax: OM,
					Palm: NM,
					Vertu: WM,
					Pantech: FM,
					Fly: XM,
					Wiko: VM,
					iMobile: zM,
					SimValley: jM,
					Wolfgang: UM,
					Alcatel: YM,
					Nintendo: KM,
					Amoi: qM,
					INQ: _M,
					GenericPhone: QM
				},
				tablets: {
					iPad: JM,
					NexusTablet: ZM,
					SamsungTablet: tx,
					Kindle: ex,
					SurfaceTablet: ix,
					HPTablet: nx,
					AsusTablet: rx,
					BlackBerryTablet: ax,
					HTCtablet: sx,
					MotorolaTablet: ox,
					NookTablet: lx,
					AcerTablet: ux,
					ToshibaTablet: cx,
					LGTablet: dx,
					FujitsuTablet: px,
					PrestigioTablet: fx,
					LenovoTablet: hx,
					DellTablet: mx,
					YarvikTablet: vx,
					MedionTablet: gx,
					ArnovaTablet: Tx,
					IntensoTablet: bx,
					IRUTablet: Sx,
					MegafonTablet: yx,
					EbodaTablet: Cx,
					AllViewTablet: wx,
					ArchosTablet: Px,
					AinolTablet: Ax,
					SonyTablet: Mx,
					PhilipsTablet: xx,
					CubeTablet: Gx,
					CobyTablet: Ix,
					MIDTablet: Hx,
					MSITablet: $x,
					SMiTTablet: Ex,
					RockChipTablet: Bx,
					FlyTablet: Dx,
					bqTablet: kx,
					HuaweiTablet: Lx,
					NecTablet: Rx,
					PantechTablet: Ox,
					BronchoTablet: Nx,
					VersusTablet: Wx,
					ZyncTablet: Fx,
					PositivoTablet: Xx,
					NabiTablet: Vx,
					KoboTablet: zx,
					DanewTablet: jx,
					TexetTablet: Ux,
					PlaystationTablet: Yx,
					TrekstorTablet: Kx,
					PyleAudioTablet: qx,
					AdvanTablet: _x,
					DanyTechTablet: Qx,
					GalapadTablet: Jx,
					MicromaxTablet: Zx,
					KarbonnTablet: tG,
					AllFineTablet: eG,
					PROSCANTablet: iG,
					YONESTablet: nG,
					ChangJiaTablet: rG,
					GUTablet: aG,
					PointOfViewTablet: sG,
					OvermaxTablet: oG,
					HCLTablet: lG,
					DPSTablet: uG,
					VistureTablet: cG,
					CrestaTablet: dG,
					MediatekTablet: pG,
					ConcordeTablet: fG,
					GoCleverTablet: hG,
					ModecomTablet: mG,
					VoninoTablet: vG,
					ECSTablet: gG,
					StorexTablet: TG,
					VodafoneTablet: bG,
					EssentielBTablet: SG,
					RossMoorTablet: yG,
					iMobileTablet: CG,
					TolinoTablet: wG,
					AudioSonicTablet: PG,
					AMPETablet: AG,
					SkkTablet: MG,
					TecnoTablet: xG,
					JXDTablet: GG,
					iJoyTablet: IG,
					FX2Tablet: HG,
					XoroTablet: $G,
					ViewsonicTablet: EG,
					OdysTablet: BG,
					CaptivaTablet: DG,
					IconbitTablet: kG,
					TeclastTablet: LG,
					OndaTablet: RG,
					JaytechTablet: OG,
					BlaupunktTablet: NG,
					DigmaTablet: WG,
					EvolioTablet: FG,
					LavaTablet: XG,
					AocTablet: VG,
					MpmanTablet: zG,
					CelkonTablet: jG,
					WolderTablet: UG,
					MiTablet: YG,
					NibiruTablet: KG,
					NexoTablet: qG,
					LeaderTablet: _G,
					UbislateTablet: QG,
					PocketBookTablet: JG,
					Hudl: ZG,
					TelstraTablet: tI,
					GenericTablet: eI
				},
				oss: {
					AndroidOS: iI,
					BlackBerryOS: nI,
					PalmOS: rI,
					SymbianOS: aI,
					WindowsMobileOS: sI,
					WindowsPhoneOS: oI,
					iOS: lI,
					MeeGoOS: uI,
					MaemoOS: cI,
					JavaOS: dI,
					webOS: pI,
					badaOS: fI,
					BREWOS: hI
				},
				uas: {
					Chrome: mI,
					Dolfin: vI,
					Opera: gI,
					Skyfire: TI,
					IE: bI,
					Firefox: SI,
					Bolt: yI,
					TeaShark: CI,
					Blazer: wI,
					Safari: PI,
					Tizen: AI,
					UCBrowser: MI,
					baiduboxapp: xI,
					baidubrowser: GI,
					DiigoBrowser: II,
					Puffin: HI,
					Mercury: $I,
					ObigoBrowser: EI,
					NetFront: BI,
					GenericBrowser: DI
				},
				props: {
					Mobile: kI,
					Build: LI,
					Version: RI,
					VendorID: OI,
					iPad: NI,
					iPhone: WI,
					iPod: FI,
					Kindle: XI,
					Chrome: [VI, zI, jI],
					Coast: [UI],
					Dolfin: YI,
					Firefox: KI,
					Fennec: qI,
					IE: [_I, QI, JI, ZI],
					NetFront: tH,
					NokiaBrowser: eH,
					Opera: [iH, nH, RI],
					"Opera Mini": nH,
					"Opera Mobi": RI,
					"UC Browser": rH,
					MQQBrowser: aH,
					MicroMessenger: sH,
					baiduboxapp: oH,
					baidubrowser: lH,
					Iron: uH,
					Safari: [RI, cH],
					Skyfire: dH,
					Tizen: pH,
					Webkit: fH,
					Gecko: hH,
					Trident: mH,
					Presto: vH,
					iOS: gH,
					Android: TH,
					BlackBerry: [bH, SH, RI],
					BREW: yH,
					Java: CH,
					"Windows Phone OS": [wH, PH],
					"Windows Phone": PH,
					"Windows CE": AH,
					"Windows NT": MH,
					Symbian: [xH, GH],
					webOS: [IH, HH]
				},
				utils: {
					Bot: $H,
					MobileBot: EH,
					DesktopMode: BH,
					TV: DH,
					WebKit: kH,
					Console: LH,
					Watch: RH
				}
			}, d.detectMobileBrowsers = {
				fullPattern: OH,
				shortPattern: NH,
				tabletPattern: WH
			};
			var p, f = Object[g][c];
			return d.FALLBACK_PHONE = FH, d.FALLBACK_TABLET = XH, d.FALLBACK_MOBILE = VH, p = I in Array ? Array[I] : function (t) {
					return Ly === Object[g][u][b](t)
				},
				function () {
					var t, e, i, n, r, s, o = d.mobileDetectRules;
					for (t in o.props)
						if (f[b](o.props, t)) {
							for (e = o.props[t], p(e) || (e = [e]), r = e[S], n = 0; r > n; ++n) i = e[n], s = i[l](zH), s >= 0 && (i = i[Cg](0, s) + jH + i[Cg](s + 5)), e[n] = new RegExp(i, Ot);
							o.props[t] = e
						}
					a(o.oss), a(o.phones), a(o.tablets), a(o.uas), a(o.utils), o.oss0 = {
						WindowsPhoneOS: o.oss.WindowsPhoneOS,
						WindowsMobileOS: o.oss.WindowsMobileOS
					}
				}(), d.findMatch = function (t, e) {
					for (var i in t)
						if (f[b](t, i) && t[i][ue](e)) return i;
					return null
				}, d.findMatches = function (t, e) {
					var i = [];
					for (var n in t) f[b](t, n) && t[n][ue](e) && i[o](n);
					return i
				}, d.getVersionStr = function (t, e) {
					var i, n, r, a, s = d.mobileDetectRules.props;
					if (f[b](s, t))
						for (i = s[t], r = i[S], n = 0; r > n; ++n)
							if (a = i[n][re](e), null !== a) return a[1];
					return null
				}, d.getVersion = function (t, e) {
					var i = d.getVersionStr(t, e);
					return i ? d.prepareVersionNo(i) : NaN
				}, d.prepareVersionNo = function (t) {
					var e;
					return e = t[Q](UH), 1 === e[S] && (t = e[0]), e[S] > 1 && (t = e[0] + ds, e[Ce](), t += e[ve](T)), Number(t)
				}, d.isMobileFallback = function (t) {
					return d.detectMobileBrowsers.fullPattern[ue](t) || d.detectMobileBrowsers.shortPattern[ue](t[YH](0, 4))
				}, d.isTabletFallback = function (t) {
					return d.detectMobileBrowsers.tabletPattern[ue](t)
				}, d.prepareDetectionCache = function (t, e, n) {
					if (t.mobile === i) {
						var r, a, o;
						return (a = d.findMatch(d.mobileDetectRules.tablets, e)) ? (t.mobile = t.tablet = a, void(t.phone = null)) : (r = d.findMatch(d.mobileDetectRules.phones, e)) ? (t.mobile = t.phone = r, void(t.tablet = null)) : void(d.isMobileFallback(e) ? (o = s.isPhoneSized(n), o === i ? (t.mobile = d.FALLBACK_MOBILE, t.tablet = t.phone = null) : o ? (t.mobile = t.phone = d.FALLBACK_PHONE, t.tablet = null) : (t.mobile = t.tablet = d.FALLBACK_TABLET, t.phone = null)) : d.isTabletFallback(e) ? (t.mobile = t.tablet = d.FALLBACK_TABLET, t.phone = null) : t.mobile = t.tablet = t.phone = null)
					}
				}, d.mobileGrade = function (t) {
					var e = null !== t.mobile();
					return t.os(KH) && t[qH](_H) >= 4.3 || t.os(KH) && t[qH](QH) >= 3.1 || t.os(KH) && t[qH](JH) >= 3.1 || t[qH](iI) > 2.1 && t[En](Fl) || t[qH](ZH) >= 7 || t[En](t$) && t[qH](t$) >= 6 || t[Bn](e$) || t[qH](i$) >= 1.4 && t[Bn](n$) || t[Bn](r$) || t[En](a$) && t[qH](a$) >= 12 || t[En](s$) && t[En](o$) && t[qH](iI) >= 4 || t[En](TI) && t[qH](TI) >= 4.1 && t[En](o$) && t[qH](iI) >= 2.3 || t[En](l$) && t[qH](u$) > 11 && t[En](o$) || t[En](c$) || t[En](AI) || t[En](d$) && t[qH](p$) >= 2 || (t[En](f$) || t[En](d$)) && t[qH](iI) >= 2.3 || t[Bn](h$) || t[En](m$) && t[qH](m$) >= 3 || t[En](o$) && t[En](v$) || t[qH](s$) >= 11 && !e || t[qH](g$) >= 5 && !e || t[qH](a$) >= 4 && !e || t[qH](T$) >= 7 && !e || t[qH](l$) >= 10 && !e ? b$ : t.os(KH) && t[qH](_H) < 4.3 || t.os(KH) && t[qH](QH) < 3.1 || t.os(KH) && t[qH](JH) < 3.1 || t[En](S$) && t[qH](t$) >= 5 && t[qH](t$) < 6 || t[qH](y$) >= 5 && t[qH](y$) <= 6.5 && (t[qH](iI) >= 2.3 || t[En](KH)) || t[Bn](C$) || t[qH](u$) >= 11 && t[En](w$) ? P$ : (t[qH](t$) < 5 || t[Bn](A$) || t[qH](M$) <= 5.2, x$)
				}, d.detectOS = function (t) {
					return d.findMatch(d.mobileDetectRules.oss0, t) || d.findMatch(d.mobileDetectRules.oss, t)
				}, d.getDeviceSmallerSide = function () {
					return t[G$][ta] < t[G$][ru] ? t[G$][ta] : t[G$][ru]
				}, s[g] = {
					constructor: s,
					mobile: function () {
						return d.prepareDetectionCache(this.t, this.ua, this.maxPhoneWidth), this.t.mobile
					},
					phone: function () {
						return d.prepareDetectionCache(this.t, this.ua, this.maxPhoneWidth), this.t.phone
					},
					tablet: function () {
						return d.prepareDetectionCache(this.t, this.ua, this.maxPhoneWidth), this.t.tablet
					},
					userAgent: function () {
						return this.t[$y] === i && (this.t[$y] = d.findMatch(d.mobileDetectRules.uas, this.ua)), this.t[$y]
					},
					userAgents: function () {
						return this.t.userAgents === i && (this.t.userAgents = d.findMatches(d.mobileDetectRules.uas, this.ua)), this.t.userAgents
					},
					os: function () {
						return this.t.os === i && (this.t.os = d.detectOS(this.ua)), this.t.os
					},
					version: function (t) {
						return d.getVersion(t, this.ua)
					},
					versionStr: function (t) {
						return d.getVersionStr(t, this.ua)
					},
					is: function (t) {
						return n(this.userAgents(), t) || e(t, this.os()) || e(t, this.phone()) || e(t, this.tablet()) || n(d.findMatches(d.mobileDetectRules.utils, this.ua), t)
					},
					match: function (t) {
						return t instanceof RegExp || (t = new RegExp(t, Ot)), t[ue](this.ua)
					},
					isPhoneSized: function (t) {
						return s.isPhoneSized(t || this.maxPhoneWidth)
					},
					mobileGrade: function () {
						return this.t.grade === i && (this.t.grade = d.mobileGrade(this)), this.t.grade
					}
				}, r != typeof t && t[G$] ? s.isPhoneSized = function (t) {
					return 0 > t ? i : d.getDeviceSmallerSide() <= t
				} : s.isPhoneSized = function () {}, s.u = d, s
		})
	}(function (e) {
		if (r != typeof module && module.exports) return function (t) {
			module.exports = t()
		};
		if (k == typeof define && define.amd) return define;
		if (r != typeof t) return function (e) {
			t.MobileDetect = e()
		};
		throw new Error(I$)
	}()), ! function (t) {
		k == typeof define && define.amd ? define([Fp], t) : t(e == typeof exports ? require(Fp) : jQuery)
	}(function (t) {
		function i(e) {
			var i = !1;
			return t(H$).each(function (n, r) {
				var a = t(r),
					s = a[ze]($$)[Tn]()[F](),
					o = a[ze](E$).html()[F](),
					l = s === t(yp + e.settings[Yl][Ym] + _a).html()[F](),
					u = o === t(yp + e.settings[Yl][B$] + _a).html()[F](),
					c = a.hasClass(D$ + e.settings[L]);
				return l && u && c && (i = !0), !i
			}), i
		}

		function n(n, r, s) {
			var o = {
				content: {
					message: e == typeof r ? r[B$] : r,
					title: r[Ym] ? r[Ym] : T,
					icon: r[k$] ? r[k$] : T,
					url: r[ed] ? r[ed] : fe,
					target: r[Cs] ? r[Cs] : Ki
				}
			};
			s = t[x](!0, {}, o, s), this.settings = t[x](!0, {}, a, s), this.w = a, Ki === this.settings[Yl][Cs] && (this.settings[Yl][Cs] = this.settings.url_target), this.animations = {
				start: L$,
				end: R$
			}, et == typeof this.settings[Cp] && (this.settings[Cp] = {
				x: this.settings[Cp],
				y: this.settings[Cp]
			}), (this.settings.allow_duplicates || !this.settings.allow_duplicates && !i(this)) && this[p]()
		}
		var a = {
			element: Gr,
			position: null,
			type: O$,
			allow_dismiss: !0,
			allow_duplicates: !0,
			newest_on_top: !1,
			showProgressbar: !1,
			placement: {
				from: De,
				align: Yf
			},
			offset: 20,
			spacing: 10,
			z_index: 1031,
			delay: 5e3,
			timer: 1e3,
			url_target: N$,
			mouse_over: null,
			animate: {
				enter: W$,
				exit: F$
			},
			onShow: null,
			onShown: null,
			onClose: null,
			onClosed: null,
			icon_type: Vi,
			template: X$
		};
		String[V$] = function () {
			for (var t = arguments[0], e = 1; e < arguments[S]; e++) t = t[B](RegExp(z$ + (e - 1) + j$, U$), arguments[e]);
			return t
		}, t[x](n[g], {
			init: function () {
				var t = this;
				this.buildNotify(), this.settings[Yl][k$] && this.setIcon(), fe != this.settings[Yl][ed] && this.styleURL(), this.styleDismiss(), this.placement(), this[$C](), this.notify = {
					$ele: this.$ele,
					update: function (e, i) {
						var n = {};
						Y == typeof e ? n[e] = i : n = e;
						for (var r in n) switch (r) {
						case L:
							this.$ele.removeClass(D$ + t.settings[L]), this.$ele[ze](Y$).removeClass(K$ + t.settings[L]), t.settings[L] = n[r], this.$ele.addClass(D$ + n[r])[ze](Y$).addClass(K$ + n[r]);
							break;
						case k$:
							var a = this.$ele[ze](q$);
							Vi === t.settings.icon_type[U]() ? a.removeClass(t.settings[Yl][k$]).addClass(n[r]) : (a[En](CT) || a[ze](CT), a.attr(ko, n[r]));
							break;
						case lr:
							var s = t.settings.delay - t.settings.delay * (n[r] / 100);
							this.$ele[Vr](_$, s), this.$ele[ze](Q$).attr(J$, n[r]).css(ta, n[r] + Xm);
							break;
						case ed:
							this.$ele[ze](Z$).attr(cn, n[r]);
							break;
						case Cs:
							this.$ele[ze](Z$).attr(Cs, n[r]);
							break;
						default:
							this.$ele[ze](tE + r + oh).html(n[r])
						}
						var o = this.$ele[DT]() + parseInt(t.settings[eE]) + parseInt(t.settings[Cp][cS]);
						t.reposition(o)
					},
					close: function () {
						t[qo]()
					}
				}
			},
			buildNotify: function () {
				var e = this.settings[Yl];
				this.$ele = t(String[V$](this.settings.template, this.settings[L], e[Ym], e[B$], e[ed], e[Cs])), this.$ele.attr(iE, this.settings.placement[nE] + Ki + this.settings.placement[rE]), this.settings.allow_dismiss || this.$ele[ze](aE).css(da, ca), (this.settings.delay <= 0 && !this.settings.showProgressbar || !this.settings.showProgressbar) && this.$ele[ze](sE)[gs]()
			},
			setIcon: function () {
				Vi === this.settings.icon_type[U]() ? this.$ele[ze](q$).addClass(this.settings[Yl][k$]) : this.$ele[ze](q$)[En](CT) ? this.$ele[ze](q$).attr(ko, this.settings[Yl][k$]) : this.$ele[ze](q$)[Ro](DA + this.settings[Yl][k$] + oE)
			},
			styleDismiss: function () {
				this.$ele[ze](aE).css({
					position: Nl,
					right: lE,
					top: ea,
					zIndex: this.settings.z_index + 2
				})
			},
			styleURL: function () {
				this.$ele[ze](Z$).css({
					backgroundImage: uE,
					height: cE,
					left: 0,
					position: Nl,
					top: 0,
					width: cE,
					zIndex: this.settings.z_index + 1
				})
			},
			placement: function () {
				var e = this,
					i = this.settings[Cp][cS],
					n = {
						display: su,
						margin: dE,
						position: this.settings[wp] ? this.settings[wp] : Gr === this.settings.element ? Mp : Nl,
						transition: pE,
						zIndex: this.settings.z_index
					},
					r = !1,
					a = this.settings;
				switch (t(fE + this.settings.placement[nE] + Ki + this.settings.placement[rE] + hE).each(function () {
					i = Math[K](i, parseInt(t(this).css(a.placement[nE])) + parseInt(t(this)[DT]()) + parseInt(a[eE]))
				}), this.settings.newest_on_top === !0 && (i = this.settings[Cp][cS]), n[this.settings.placement[nE]] = i + pa, this.settings.placement[rE]) {
				case xr:
				case Yf:
					n[this.settings.placement[rE]] = this.settings[Cp][nS] + pa;
					break;
				case mE:
					n[xr] = 0, n[Yf] = 0
				}
				this.$ele.css(n).addClass(this.settings[xu].enter), t.each(Array(vE, gE, TE, z, T), function (t, i) {
					e.$ele[0][Ir][i + bE] = 1
				}), t(this.settings.element)[Ro](this.$ele), this.settings.newest_on_top === !0 && (i = parseInt(i) + parseInt(this.settings[eE]) + this.$ele[DT](), this.reposition(i)), t.isFunction(e.settings.onShow) && e.settings.onShow[b](this.$ele), this.$ele.one(this.animations[ha], function () {
					r = !0
				}).one(this.animations[ma], function () {
					e.$ele.removeClass(e.settings[xu].enter), t.isFunction(e.settings.onShown) && e.settings.onShown[b](this)
				}), setTimeout(function () {
					r || t.isFunction(e.settings.onShown) && e.settings.onShown[b](this)
				}, 600)
			},
			bind: function () {
				var e = this;
				if (this.$ele[ze](aE).on(Gs, function () {
					e[qo]()
				}), this.$ele.mouseover(function () {
					t(this)[Vr](SE, Wr)
				}).mouseout(function () {
					t(this)[Vr](SE, Fr)
				}), this.$ele[Vr](SE, Fr), this.settings.delay > 0) {
					e.$ele[Vr](_$, e.settings.delay);
					var i = setInterval(function () {
						var t = parseInt(e.$ele[Vr](_$)) - e.settings.timer;
						if (Fr === e.$ele[Vr](SE) && If === e.settings.mouse_over || If != e.settings.mouse_over) {
							var n = (e.settings.delay - t) / e.settings.delay * 100;
							e.$ele[Vr](_$, t), e.$ele[ze](Q$).attr(J$, n).css(ta, n + Xm)
						}
						t <= -e.settings.timer && (clearInterval(i), e[qo]())
					}, e.settings.timer)
				}
			},
			close: function () {
				var e = this,
					i = parseInt(this.$ele.css(this.settings.placement[nE])),
					n = !1;
				this.$ele.attr(yE, Wr).addClass(this.settings[xu].exit), e.reposition(i), t.isFunction(e.settings.onClose) && e.settings.onClose[b](this.$ele), this.$ele.one(this.animations[ha], function () {
					n = !0
				}).one(this.animations[ma], function () {
					t(this)[gs](), t.isFunction(e.settings.onClosed) && e.settings.onClosed[b](this)
				}), setTimeout(function () {
					n || (e.$ele[gs](), e.settings.onClosed && e.settings.onClosed(e.$ele))
				}, 600)
			},
			reposition: function (e) {
				var i = this,
					n = fE + this.settings.placement[nE] + Ki + this.settings.placement[rE] + hE,
					r = this.$ele.nextAll(n);
				this.settings.newest_on_top === !0 && (r = this.$ele.prevAll(n)), r.each(function () {
					t(this).css(i.settings.placement[nE], e), e = parseInt(e) + parseInt(i.settings[eE]) + t(this)[DT]()
				})
			}
		}), t.notify = function (t, e) {
			var i = new n(this, t, e);
			return i.notify
		}, t.notifyDefaults = function (e) {
			return a = t[x](!0, {}, a, e)
		}, t.notifyClose = function (e) {
			CE === e && (e = wE), r == typeof e || PE === e ? t(AE)[ze](aE).trigger(Gs) : Nc === e || O$ === e || CE === e || wE === e ? t(ME + e + AE)[ze](aE).trigger(Gs) : e ? t(e + AE)[ze](aE).trigger(Gs) : t(fE + e + oh)[ze](aE).trigger(Gs)
		}, t.notifyCloseExcept = function (e) {
			CE === e && (e = wE), Nc === e || O$ === e || CE === e || wE === e ? t(AE).not(ME + e)[ze](aE).trigger(Gs) : t(AE).not(e)[ze](aE).trigger(Gs)
		}
	}),
	function (i, n) {
		"use strict";
		var r = {};
		t[i] = r, n.ajaxSetup({
			dataType: Rd
		}), n.fn[x](!0, {
			activate: function () {
				return r.activate(this)
			}
		}), n[x](r, {
			activate: function (t) {
				return n(document).trigger({
					element: t,
					type: xE
				}), t
			},
			register: function (t, e, i) {
				var a = e,
					s = e;
				typeof s === Y && (s = function () {
					r[GE](a, this)
				}), n(document)[$C](i || xE, function (e) {
					n(e.element)[ze](t).each(s)
				})
			},
			create: function (e, i) {
				for (var a = n(i), s = t, o = e[Q](ds), l = 0; l < o[S]; l++) s = s[o[l]];
				return typeof s !== k ? (r.Logger[$i](IE, e), !1) : (a[Vr](e) || a[Vr](e, new s(a)), a[Vr](e))
			},
			mkTimeout: function (e, i, n) {
				var r = HE + e;
				return t[r] && clearTimeout(t[r]), t[r] = setTimeout(i, n)
			}
		}), r.Logger = {
			log: function () {
				t[$E][EE][P](console, arguments)
			},
			error: function () {
				t[$E][$i][P](console, arguments)
			},
			debug: function () {
				t[$E][BE][P](console, arguments)
			},
			info: function () {
				t[$E][O$][P](console, arguments)
			}
		}, r.Cookie = {
			set: function (t, i, n, r) {
				var a, s = n || T;
				typeof s === et ? (a = new Date, a[DE](a[mg]() + 1e3 * s), s = kE + a[LE]()) : typeof s === Y ? s = kE + s : typeof s === e && (s = kE + s[LE]()), document[RE] = t + Mt + escape(i[u]()) + s + OE + (r || $o)
			},
			get: function (t) {
				var e = new RegExp(NE + t + WE),
					i = e[re](document[RE]);
				return i ? decodeURIComponent(unescape(i[2])) : null
			},
			remove: function (t) {
				this[iu](t, 0, new Date(0))
			}
		}, r[FE] = {
			z: null,
			C: 864e3,
			isAvailable: function () {
				if (null === this.z) try {
					localStorage[XE](ue, 1), localStorage[VE](ue), this.z = !0
				} catch (t) {
					this.z = !1
				}
				return this.z
			},
			set: function (t, e) {
				this.isAvailable() ? localStorage[XE](t, e) : r.Cookie[iu](t, e, this.C)
			},
			get: function (t) {
				try {
					return this.isAvailable() ? localStorage[zE](t) : r.Cookie[Vn](t)
				} catch (e) {
					return null
				}
			},
			remove: function (t) {
				this.isAvailable() ? localStorage[VE](t) : r.Cookie[gs](t)
			}
		}, r.AutoComplete = function (t) {
			this.D(t)
		}, r.AutoComplete[g] = {
			D: function (t) {
				this.$input = t, this.timer = null, this[No] = {}, this.setOptions({
					typeahead: !0,
					delay: 250,
					multiple: !0,
					minLength: 1,
					separator: [ge, jE],
					source: T,
					key: UE,
					extra: {}
				}), this.preInit(), this[p](), this.postInit()
			},
			setOptions: function (t) {
				var e;
				for (e in t) t[c](e) && (this[No][e] = this.$input[Vr](YE + e) || t[e])
			},
			init: function () {
				this.$input.attr(KE, fb)[_s](n.proxy(this[ST], this)), this[No].typeahead ? this.setupTypeahead() : this.$input.keyup(n.proxy(this.keyup, this))
			},
			setupTypeahead: function () {
				var t, e = this;
				t = this.$input.typeahead({
					minLength: this[No].minLength,
					delay: this[No].delay,
					source: function (t, i) {
						e.query(i)
					},
					updater: function (t) {
						var i = e[qE]();
						return i[nt](), i[o](t), e.val(i)
					}
				})[Vr](_E), t.G = t.lookup, t.lookup = function () {
					t.G(e.last())
				}
			},
			preInit: function () {},
			postInit: function () {},
			keyup: function (t) {
				switch (this.clearTimer(), t[ks]) {
				case 40:
				case 38:
				case 16:
				case 17:
				case 18:
					break;
				case 27:
					this[uu]();
					break;
				default:
					n[F](this.last())[S] >= this[No].minLength ? this.lookup() : this[uu]()
				}
			},
			clearTimer: function () {
				this.timer && clearTimeout(this.timer)
			},
			lookup: function (t) {
				var e = this;
				this.clearTimer(), this.timer = setTimeout(function () {
					return e[No][na] === T ? void r.Logger[$i](QE) : void(n[F](e.last())[S] < e[No].minLength ? e[uu]() : e.query(t || n.proxy(e[lu], e)))
				}, this[No].delay)
			},
			query: function (t) {
				var e = n[x]({}, this[No].extra);
				e[this[No][JE]] = this.last(), n.ajax({
					url: this[No][na],
					data: e,
					success: function (e) {
						t(e)
					}
				})
			},
			show: function (t) {
				r.Logger[EE](ys, t)
			},
			hide: function () {
				r.Logger[EE](ZE)
			},
			update: function () {
				this.$input.val(this.val())
			},
			last: function () {
				return this[qE]()[nt]() || T
			},
			val: function (t) {
				var e = t || this[qE](),
					i = n[I](this[No][tB]) ? this[No][tB][0] : this[No][tB];
				return typeof t === Y && (e = [t]), n.grep(e, function (t, i) {
					return i === n.inArray(t, e)
				})[ve](i)
			},
			values: function () {
				var t, e = this.$input.val();
				return this[No][hA] ? (t = n[I](this[No][tB]) ? this[No][tB] : [this[No][tB]], e = e[Q](new RegExp(t[ve](Me), Zt))) : e = [e], e = n(e)[w](function () {
					return this[B](eB, T)
				})[je](function () {
					return this !== T
				})[iB]()
			}
		}, n(document).ready(function () {
			r.activate(this)
		})
	}(nB, jQuery),
	function (i, n) {
		"use strict";
		var a;
		t.mobile = new t.MobileDetect(navigator[$y]), t[i] = a = {}, t[uf] = function (t) {
			$.notify(t, {
				type: CE,
				animate: {
					enter: rB,
					exit: F$
				}
			})
		}, top[sn] !== t[sn] && (top[sn] = t[sn]), $.fn[x](!0, {
			scrollFocus: function () {
				return $(aB)[xu]({
					scrollTop: this[Cp]()[De]
				}, sB), this
			}
		}), a.Settings = {
			H: [oB, lB, uB, cB],
			J: {},
			K: !1,
			L: function () {
				this.M(), setInterval($.proxy(this.N, this), 3e3)
			},
			N: function (t) {
				var e = this;
				return e.K && a.UserInfo[Vn]() ? void $.ajax({
					url: dB,
					type: bp,
					data: {
						settings: this.J
					},
					success: function () {
						e.K = !1, typeof t === k && t()
					}
				}) : void(typeof t === k && t())
			},
			M: function () {
				var t, e;
				for (t = 0; t < this.H[S]; t++) e = this.H[t], this.J[e] = n.Cookie[Vn](e) || n[FE][Vn](e)
			},
			set: function (t, e) {
				$.inArray(t, this.H) > -1 && (this.K = this.K || this.J[t] !== e, this.J[t] = e, n[FE][iu](t, e), t === oB && (e ? n.Cookie[iu](t, e, 31536e3) : n.Cookie[gs](t)))
			},
			get: function (t) {
				return this.J[t] || null
			},
			update: function (t) {
				this.N(t)
			}
		}, a.WatchingHistory = {
			Q: {},
			L: function () {
				this.Q = this.V(), this.W(), setInterval($.proxy(this.W, this), 18e5), $(t).on(pB, $.proxy(this.W, this))
			},
			V: function () {
				try {
					return JSON[hc](n.Cookie[Vn](fB)) || {}
				} catch (t) {
					return {}
				}
			},
			W: function () {
				var t = this;
				Object[hB](this.Q)[S] && !this.X && a.UserInfo[Vn]() && (this.X = !0, $.ajax({
					url: mB,
					type: bp,
					data: {
						data: this.Q
					},
					success: function () {
						t._(), t.X = !1
					}
				}))
			},
			_: function () {
				this.Q = {}, n.Cookie[gs](fB)
			},
			set: function (t, e) {
				n[FE][iu](vB + t, e), this.Q[t] = e, n.Cookie[iu](fB, JSON[gB](this.Q), 68400)
			},
			get: function (t) {
				return n[FE][Vn](vB + t) || !1
			}
		}, a.Global = function () {
			this.D()
		}, a.Global[g] = {
			D: function () {
				this.registerMobileTogglers(), this.registerTips(), this.registerGeneralModals(), this.loadAds(), $(TB).tooltip()
			},
			loadAds: function () {
				var t = 2,
					e = function () {
						return 6e4 * (Math[Uv](27 * Math[E]()) + 3)
					},
					i = function () {
						t-- && ($(bB).each(function () {
							var t = $(this),
								e = t.attr(ko);
							t.attr(ko, T), setTimeout(function () {
								t.attr(ko, e)
							}, 200)
						}), setTimeout(i, e()))
					};
				setTimeout(i, e())
			},
			registerGeneralModals: function () {
				$(SB).on(lu, function () {
					var t = $(this);
					$(document).activate(), t[Vr](yB) && (t[ze](CB).val(T), t[ze](wB).prop(fn, !1)), t[ze](PB).each(function () {
						$(this)[Vr](AB)[MB]()
					})
				})
			},
			registerMobileTogglers: function () {
				var t = $(xB),
					e = $(GB),
					i = $(IB),
					n = $(HB);
				t[Gs](function () {
					n[wu](), n[En](mm) && i[uu]()
				}), e[Gs](function () {
					i[wu](), i[En](mm) && n[uu]()
				})
			},
			registerTips: function () {
				t[G$][ta] < 480 || $($B).cluetip({
					multiple: !0,
					positionBy: mw,
					local: !1,
					showTitle: !1,
					width: 360,
					arrows: !1,
					sticky: !0,
					mouseOutClose: QA,
					closePosition: ca,
					leftOffset: 10,
					topOffset: 0,
					delayedClose: 0,
					attribute: EB,
					onShow: function (t) {
						$(t).activate()
					}
				})
			}
		}, a.Captcha = function (t) {
			this.D(t)
		}, a.Captcha[g] = {
			D: function (t) {
				this.$img = t, this.$reloader = t[Nf](BB), this.$reloader[S] || (this.$reloader = this.$img), this.$reloader[Gs]($.proxy(this[MB], this))
			},
			reload: function () {
				var t = this.$img[Vr](ko) || this.$img.attr(ko);
				this.$img.attr(ko, t[B](DB, cd + Math[E]()))
			}
		}, a.Tabs = function (t) {
			this.D(t)
		}, a.Tabs[g] = {
			D: function (t) {
				this.$wrapper = t, this.$tabs = this.$wrapper[ze](kB), this.$contents = $(this.$wrapper[Vr](Cs)), this.$tabs[Gs]($.proxy(this.tabClick, this))
			},
			tabClick: function (t) {
				var e = $(t[Ms]);
				this.$wrapper[Vr](Pa) || (t[As](), this.$tabs.removeClass(od)[je](e).addClass(od), this.$contents.removeClass(od).addClass(ci)[je](LB + e[Vr](di) + oh).removeClass(ci).addClass(od))
			}
		}, a.SearchForm = function (e) {
			var i = e[ze](Ie);
			e[uo](function (n) {
				var r, a = $[F](i.val()),
					s = t.hashData({
						keyword: a
					}),
					o = e.attr(RB) + OB + a;
				a[S] < 2 && (n[As](), i[Ks]()), n[As]();
				for (r in s) s[c](r) && (o += ud + r + Mt + s[r]);
				return t[sn][cn] = o, !1
			})
		}, a.SearchAutocomplete = function (t) {
			this.D(t)
		}, a.SearchAutocomplete[g] = $[x]({}, n.AutoComplete[g], {
			preInit: function () {
				this.$suggestions = this.$input[rf](IB)[ze](NB), this.setOptions({
					typeahead: !1,
					delay: 180,
					multiple: !1,
					minLength: 1,
					source: WB,
					key: UE,
					extra: {
						sort: FB
					}
				}), this.registerClickoutside()
			},
			registerClickoutside: function () {
				var t = this;
				$(document)[Gs](function (e) {
					var i = $(e[Cs]);
					t.shown && !i[rf](IB)[S] && t[uu]()
				})
			},
			query: function () {
				var t = this,
					e = this[No].extra;
				e[this[No][JE]] = this.last(), $.ajax({
					url: this[No][na],
					data: e,
					success: function (e) {
						var i = $[F](e.html);
						i ? t[lu](i) : t[uu]()
					}
				})
			},
			show: function (t) {
				this.shown = !0, this.$suggestions.html(t).slideDown()
			},
			hide: function () {
				this.shown = !1, this.$suggestions[gn]()[uu]()
			}
		}), a.RequestSuggestions = function (t) {
			this.D(t)
		}, a.RequestSuggestions[g] = $[x]({}, n.AutoComplete[g], {
			preInit: function () {
				this.$suggestions = this.$input[rf](wP)[ze](NB), this.setOptions({
					typeahead: !1,
					delay: 250,
					multiple: !1,
					minLength: 2,
					source: XB,
					key: UE,
					extra: {
						sort: FB
					}
				})
			},
			show: function (t) {
				this.$suggestions.html(t.html).slideDown()
			},
			hide: function () {
				this.$suggestions[gn]()[uu]()
			}
		}), a[VB] = function (t) {
			this.D(t)
		}, a[VB][g] = {
			D: function (t) {
				var e = this;
				this.$form = t, this.$modal = this.$form[rf](wP), this.$message = this.$modal[ze](zB), this.$form[uo]($.proxy(this[uo], this)), this.registerInputs(), this.$modal.on(lu, function () {
					e.$form[lu](), e.$message[uu](), e.resetForm(), e.$form[ze](jB).val(a.UserInfo[Vn](UB))
				})
			},
			getInputs: function () {
				return this.$form[ze](YB)
			},
			registerInputs: function () {
				this.getInputs().each(function () {
					var t = $(this),
						e = t[rf](KB);
					t[Vr](qB, e), t[Gs](function () {
						e.removeClass(_B)
					})
				})
			},
			formData: function () {
				var t = {},
					e = !0;
				return this.getInputs().each(function () {
					var i = $(this),
						n = $[F](i.val());
					QB[l](i.attr(L)) !== -1 && (n = i[En](si) ? 1 : 0), n ? t[i.attr(di)] = n : (i[Vr](qB).addClass(_B), e = !1)
				}), !!e && t
			},
			reloadCaptcha: function () {
				var t = this.$form[ze](PB)[Vr](AB);
				t && t[MB]()
			},
			resetForm: function () {
				this.getInputs().val(T)
			},
			markSent: function () {
				this.$message[lu](), a.UserInfo[Vn](JB) ? this.$message[ze](ZB).removeClass(ci)[lu]() : this.$message[ze](ZB)[uu](), this.$form[uu](), this.resetForm()
			},
			submit: function (t) {
				var e = this,
					i = this.formData();
				t[As](), i && (i.ghost = tD, $.ajax(eD, {
					data: i,
					success: function (t) {
						var i, n = T;
						if (t[$i]) {
							for (i in t[$i].fields) t[$i].fields[c](i) && (n += t[$i].fields[i], e.getInputs()[je](iD + i + oh)[Vr](qB).addClass(_B));
							alert(n)
						} else t[B$] && e.markSent()
					},
					complete: function () {
						e.reloadCaptcha()
					}
				}))
			}
		}, a.Subscribe = function (t) {
			this.D(t)
		}, a.Subscribe[g] = {
			D: function (t) {
				this.$form = t, this.$input = this.$form[ze](Ie), this.$btnSubmit = this.$form[ze](He), this.$form[uo]($.proxy(this.submitHandler, this)), this.$btnSubmit[Gs]($.proxy(this[uo], this)), this.$input.val(T)
			},
			submitHandler: function (t) {
				return t[As](), !1
			},
			validEmail: function (t) {
				return nD[ue](t)
			},
			submit: function () {
				var t = this,
					e = $[F](this.$input.val());
				this.validEmail(e) ? $.ajax(aD, {
					data: {
						email: e
					},
					success: function (e) {
						var i = T;
						e[$i] ? i = e[$i][B$] : (i = e[B$], t.$input.val(T)), i && alert(i)
					}
				}) : alert(rD)
			}
		}, a.UserInfo = {
			cacheKey: sD,
			info: null,
			set: function (i) {
				var r;
				if (n.Cookie[iu](this.cacheKey, JSON[gB](i), 259200), i && typeof i.settings === e) {
					i.user_id && i.settings.web_theme === oD && i.settings.web_theme !== n.Cookie[Vn](oB) && setTimeout(function () {
						t[sn][MB]()
					}, 500);
					for (r in i.settings) i.settings[c](r) && a.Settings[iu](r, i.settings[r])
				}
			},
			fetch: function () {
				try {
					this[O$] = JSON[hc](n.Cookie[Vn](this.cacheKey)) || null
				} catch (t) {
					this[O$] = null
				}
			},
			get: function (t) {
				return this[O$] || this[lD](), arguments[S] ? this[O$] && typeof this[O$][t] !== r ? this[O$][t] : null : this[O$]
			}
		}, a.UserBar = function (t) {
			a.UserBar[p](t)
		}, a.UserBar[p] = function (t) {
			this.$wrapper = t, this[vr]()
		}, a.UserBar[vr] = function () {
			var t = this;
			$.ajax(uD, {
				success: function (e) {
					t.$wrapper.html(e.html), a.UserInfo[iu](e.user)
				}
			})
		}, a.SignForm = function (t) {
			this.D(t)
		}, a.SignForm[g] = $[x]({}, !0, a[VB][g], {
			D: function (t) {
				var e = this;
				this.$form = t, this.$modal = this.$form[rf](wP), this.registerInputs(), this.$modal.on(lu, $.proxy(this.resetForm, this)), this.$form[uo]($.proxy(this[uo], this)), this.$modal[ze](cD)[Gs](function () {
					setTimeout(function () {
						e.$modal.modal(dD)
					}, 150)
				})
			},
			submit: function (t) {
				var e = this,
					i = this.formData();
				t[As](), i && $.ajax(pD + this.$form[Vr](di), {
					type: bp,
					data: i,
					success: function (t) {
						var i, n = T;
						if (t[B$] && (n = t[B$], typeof t[B$] !== Y && (n = n[ve](fD))), t[$i]) {
							if (t[$i])
								for (i in t[$i].fields) t[$i].fields[c](i) && (n += t[$i].fields[i] + fD, e.getInputs()[je](iD + i + oh)[Vr](qB).addClass(_B));
							alert(n)
						} else t[ys] ? e.$modal.modal(uu) : alert(n)
					},
					complete: function () {
						a.UserBar[vr](), e.reloadCaptcha()
					}
				})
			}
		}), a.ResetPassword = function (t) {
			this.D(t)
		}, a.ResetPassword[g] = $[x]({}, !0, a[VB][g], {
			D: function (t) {
				this.$form = t, this.$modal = t[rf](wP), this.sending = !1, this.$form[uo]($.proxy(this[uo], this))
			},
			submit: function (t) {
				var e = this,
					i = this.formData();
				t[As](), i && !this.sending && (this.sending = !0, $.ajax(hD, {
					type: bp,
					data: i,
					success: function (t) {
						t[ys] ? (e.$modal.modal(uu), alert(t[B$])) : alert(t[B$])
					},
					complete: function () {
						e.sending = !1
					}
				}))
			}
		}), a.EditWatchList = function (t) {
			this.D(t)
		}, a.EditWatchList[g] = {
			D: function (t) {
				this.$btn = t, this.filmHashId = this.$btn[Vr](se), this[RB] = this.$btn[Vr](RB) || zn, this.$btn[Gs]($.proxy(this.btnClick, this))
			},
			btnClick: function () {
				$.ajax(mD, {
					data: {
						action: this[RB],
						id: this.filmHashId,
						aa: 1
					},
					success: function (t) {
						t[$i] ? alert(t[$i][B$]) : alert(t[B$])
					}
				})
			}
		}, a.FAQ = function (t) {
			var e = t[ze](bv),
				i = t[ze](vD);
			e.each(function () {
				var t = $(this),
					n = t[ze](gD),
					r = t[ze](vD);
				n[Gs](function () {
					e.not(t).removeClass(od), t.toggleClass(od), i.not(r).slideUp(), r.slideToggle()
				})
			})
		}, a.Settings.L(), a.WatchingHistory.L(), n[TD](bD, SD), n[TD](yD, CD), n[TD](wD, PD), n[TD](AD, MD), n[TD](xD, GD), n[TD](ID, HD), n[TD]($D, ED), n[TD](PB, AB), n[TD](Gr, BD), n[TD](DD, kD), n[TD](LD, RD), n[TD](OD, ND)
	}(WD, t.FW);
	var iN = {
		A9: function () {
			return typeof iN.U.U === k ? iN.U.U[P](iN.U, arguments) : iN.U.U
		},
		R: function (t, e) {
			return t + e
		},
		B: function () {
			return typeof iN.p.F === k ? iN.p.F[P](iN.p, arguments) : iN.p.F
		},
		V9: function () {
			return typeof iN.U.U === k ? iN.U.U[P](iN.U, arguments) : iN.U.U
		},
		g: function (t) {
			return t
		},
		g9: function () {
			return typeof iN.U.U === k ? iN.U.U[P](iN.U, arguments) : iN.U.U
		},
		U: function () {
			var t = function (t, e) {
					var i = 65535 & e,
						n = e - i;
					return (n * t | 0) + (i * t | 0) | 0
				},
				e = function (e, i, n) {
					for (var r = 3432918353, a = 461845907, s = n, o = i & -4, l = 0; l < o; l += 4) {
						var u = 255 & e[FD](l) | (255 & e[FD](l + 1)) << 8 | (255 & e[FD](l + 2)) << 16 | (255 & e[FD](l + 3)) << 24;
						u = t(u, r), u = (131071 & u) << 15 | u >>> 17, u = t(u, a), s ^= u, s = (524287 & s) << 13 | s >>> 19, s = 5 * s + 3864292196 | 0
					}
					switch (u = 0, i % 4) {
					case 3:
						u = (255 & e[FD](o + 2)) << 16;
					case 2:
						u |= (255 & e[FD](o + 1)) << 8;
					case 1:
						u |= 255 & e[FD](o), u = t(u, r), u = (131071 & u) << 15 | u >>> 17, u = t(u, a), s ^= u
					}
					return s ^= i, s ^= s >>> 16, s = t(s, 2246822507), s ^= s >>> 13, s = t(s, 3266489909), s ^= s >>> 16
				};
			return {
				U: e
			}
		}(),
		P: function () {
			return typeof iN.p.F === k ? iN.p.F[P](iN.p, arguments) : iN.p.F
		},
		A: function (t, e) {
			return t % e
		},
		e: function (t) {
			return t
		},
		v: function (t, e) {
			return t + e
		},
		h: function (t, e) {
			return t + e
		},
		b: function () {
			return typeof iN.U.U === k ? iN.U.U[P](iN.U, arguments) : iN.U.U
		},
		Y: function (t) {
			return t
		},
		O: function (t, e) {
			return t % e
		},
		S: function (t) {
			return t
		},
		c: function (t) {
			return t
		},
		I: function () {
			return typeof iN.p.F === k ? iN.p.F[P](iN.p, arguments) : iN.p.F
		},
		T: function () {
			return typeof iN.p.F === k ? iN.p.F[P](iN.p, arguments) : iN.p.F
		},
		O9: function () {
			return typeof iN.U.U === k ? iN.U.U[P](iN.U, arguments) : iN.U.U
		},
		p: function () {
			return {
				F: function (t) {
					for (var e = T, i = decodeURIComponent(XD), n = 0, r = 0; n < i[S]; n++, r++) r === t[S] && (r = 0), e += String[ee](i[FD](n) ^ t[FD](r));
					return e = e[Q](VD),
						function (t) {
							return e[t]
						}
				}(zD)
			}
		}(),
		E: function () {
			return typeof iN.p.F === k ? iN.p.F[P](iN.p, arguments) : iN.p.F
		},
		Z: function (t) {
			return t
		}
	};
	(typeof t === e ? t : global).HDhV = iN,
	function (t, e) {
		function i(i) {
			for (var n = -(QD + pk + fk + nk + hk + JD | 0), o = Jl + mk + vk + gk | 0, l = +QD, c = 0 | Jl; iN.V9(c[u](), c[u]()[S], 1 * (uk + yn + YD + ek)) !== n; c++) return d[e(t)] = r(i), d;
			if (iN[Tk](l[u](), l[u]()[S], bk + ek - 0) !== o) {
				var d;
				d = {}, d[a] = iN.I(1 * Jl) + s, d[e(t)] = r(i)
			}
			return d
		}

		function n(t, e) {
			var i, n, r, a, s, o;
			for (i = [], n = +yn, a = yn - 0, s = yn - 0; s < +(Sk + nk); s++) i[s] = s;
			for (s = +yn; s < Sk + nk - 0; s++) n = (n + i[s] + t[iN.P(+(Jl + JD))](iN.A(s, t[iN[lk](+(Jl + uk))]))) % (Sk + nk - 0), r = i[s], i[s] = i[n], i[n] = iN.g(r);
			for (s = yn - 0, n = +yn, o = +yn; o < e[iN.P(+(Jl + QD))]; o++) s = iN.O(iN.h(s, 1 * Jl), +(QD + ek + nk)), n = iN[HC]((n + i[s]) % +(QD + Ck)), r = i[s], i[s] = i[n], i[n] = r, a += e[iN.T(+(Jl + JD))](o) ^ i[iN.R(i[s], i[n]) % +wk] * o + o;
			return a
		}

		function r(t) {
			for (var e = -+(Pk + Ak + Mk), i = 1 * (UD + xk + Gk + yn), r = +QD, a = +Jl; iN.A9(a[u](), a[u]()[S], qD + Ik + QD - 0) !== e; a++) {
				for (s in t) t[iN.T(1 * KD)](s) && (o /= iN[Hk](n(s, iN.v(t[s], iN.P(+Ck)))));
				return o
			}
			if (iN.g9(r[u](), r[u]()[S], QD + $k + qD + nk - 0) !== i) {
				var s, o;
				o = +yn;
				for (s in t) t[iN.T(qD - 0)](s) && (o += iN[Hk](n(s, iN.v(t[s], iN.P(Jl + ek | 0)))))
			}
			return o
		}
		var a, s;
		a = e(+jD, +(Jl + UD)), s = $(iN.B(YD - 0))[iN.P(+KD)](a), $[e(KD + qD - 0, +(Jl + _D), +(KD + qD), Jl + QD + yn | 0, JD + yn | 0, 1 * (Jl + Jl + YD), ZD + Jl | 0, tk - 0, +(ZD + ek), +ik, +(Jl + Jl + nk), +(ZD + Jl), +(Jl + rk))](function (t, n) {
			var r, o, l, u;
			r = e(ak - 0), o = sk, u = {}, n[iN.P(+nk)] && (u = iN.Z($[iN.I(Jl + KD - 0)]({}, n[iN.B(+(Jl + nk))]))), u[a] = iN.I(1 * QD) + s;
			do l = iN.S(o[iN.P(0 | ok)](t[iN.I(+yn)])), l && (u[l[+Jl]] = l[0 | QD]); while (l);
			t[iN.P(+(Jl + yn))] = iN.Y(t[iN.B(1 * rk)][iN[lk](+uk)](ck, iN.B(+QD)) + r + $[iN.T(dk - 0)](i(u)))
		})
	}(0 | Ek, String[iN.P(+JD)]),
	function (e) {
		"use strict";
		var i = t.Movie;
		i.Home = function () {
			this.D()
		}, i.Home[g] = {
			D: function () {
				this.registerSlider(), this.registerNews()
			},
			registerSlider: function () {
				var e = new t.Swiper(Bk, {
					loop: !0,
					autoplay: 5e3,
					pagination: Dk,
					paginationClickable: !0,
					grabCursor: !0,
					longSwipes: !0,
					longSwipesRatio: .1
				});
				$(Bk).hover(function () {
					e.stopAutoplay()
				}, function () {
					e.startAutoplay()
				})
			},
			registerNews: function () {
				$(kk).perfectScrollbar()
			}
		}, e[TD](Lk, Rk)
	}(t.FW),
	function (e) {
		"use strict";
		var i = t.Movie;
		i.FilterList = function (t) {
			this.D(t)
		}, i.FilterList[g] = {
			D: function (t) {
				this.$toggler = t, this.$wrapper = this.$toggler[rf](Ok)[ze](Nk), this.shown = !1, this.$toggler[Gs]($.proxy(this.toggleFilter, this)), this.registerClickoutside(), this.registerSort()
			},
			toggleFilter: function () {
				this.shown = !this.shown, this.$toggler.toggleClass(Wk), this.$wrapper[wu]()
			},
			registerSort: function () {
				var t = this.$wrapper[ze](Fk),
					e = this.$wrapper[ze](Xk);
				e[Gs](function () {
					var e = $(this);
					e.siblings(bv).removeClass(od), e.addClass(od), t.val(e[Vr](Ye))
				}).each(function () {
					var e = $(this);
					e[Vr](Ye) === t.val() ? e.addClass(od) : e.removeClass(od)
				})[je]([Vk + t.val() + zk]).addClass(od)
			},
			registerClickoutside: function () {
				var t = this;
				$(document)[Gs](function (e) {
					var i = $(e[Cs]);
					t.shown && !i[rf](Nk)[S] && i[0] !== t.$toggler[0] && t.toggleFilter()
				})
			}
		}, e[TD](jk, Uk)
	}(t.FW),
	function (t, e, i) {
		"use strict";
		var n = function (t) {
			this.D(t)
		};
		n[g] = {
			D: function (t) {
				this.ba = t, this.ca = t[ze](Mg), this.da = t[Vr](Yk), this.ea = t[Vr](di), this.fa = this[Ye](), this.ba.removeClass(ci)[uu]()[Gs]($.proxy(this.ga, this)), this.ha(), this.ia()
			},
			value: function () {
				var t = this.fa;
				return typeof t === r && (t = this.da ? i.Settings[Vn](this.ea) || this.ba[Vr](KC) : this.ba[Vr](KC), t = parseInt(t, 10)), t
			},
			ga: function () {
				this.fa = this.fa ? 0 : 1, this.ja(), this.da && i.Settings[iu](this.ea, this.fa[u]()), this.ia()
			},
			ia: function () {
				this.ca.html(this.ba[Vr](this.fa ? as : fb)), this.ba[lu]()
			},
			ha: function () {},
			ja: function () {}
		}, i.AutoPlay = function (t) {
			this.D(t)
		}, i.AutoPlay[g] = $[x](!0, {}, n[g]), i.AutoNext = function (t) {
			this.D(t)
		}, i.AutoNext[g] = $[x](!0, {}, n[g]), i.Light = function (t) {
			this.D(t)
		}, i.Light[g] = $[x](!0, {}, n[g], {
			ha: function () {
				this.ka = $(Kk).css(ta, cE).css(ru, cE).css(wp, Mp).css(xr, 0).css(De, 0).css(WP, 3).css(tu, wM).css(Zo, qk).css(da, ca).appendTo(document[Gr])
			},
			ja: function () {
				var t = this,
					e = function (e) {
						var i = $(e[Cs]);
						i[rf](_k)[S] || i[rf](Qk)[S] || t.fa || t.ga()
					};
				this.fa ? (t.ka.fadeOut(), $(Gr).off(Gs, e)) : (this.ka.fadeIn(), $(Gr).on(Gs, e))
			}
		}), i.Downloader = function (t) {
			this.D(t)
		}, i.Downloader[g] = {
			D: function (t) {
				this.ba = t, this.la = null, this.ma = null, this.ba.removeClass(ci)[uu]()[Gs]($.proxy(this.na, this)), this.ia()
			},
			na: function () {
				this.la && t[Jd](this.la, N$)
			},
			setUrl: function (t) {
				this.ma = t, this.la = t, this.ia()
			},
			ia: function () {
				this.la ? this.ba.fadeIn() : this.ba[uu]()
			}
		}, e[TD](Jk, Zk), e[TD](tL, eL), e[TD](iL, nL), e[TD](rL, aL), e[TD](sL, aL)
	}(t, t.FW, t.Movie),
	function (e) {
		"use strict";
		var i = t.Movie;
		i.EpisodeSummaries = function (t) {
			this.D(t)
		}, i.EpisodeSummaries[g] = {
			D: function (t) {
				this.$movie = t, this.$wrapper = this.$movie[ze](oL), this.$title = this.$wrapper[ze](lL), this.$items = this.$wrapper[ze](uL), this.$episodes = this.$wrapper[ze](Ff), this.$togglers = this.$episodes[ze](cL), this.$names = this.$episodes[ze](dL), this.$descs = this.$episodes[ze](pL), this.$items.perfectScrollbar({
					wheelPropagation: !1
				}), this.$togglers[Gs]($.proxy(this.togglerClick, this)), this.$names[Gs]($.proxy(this.nameClick, this)), this.$title[Gs]($.proxy(this.titleClick, this))
			},
			titleClick: function () {
				this.$items.slideToggle()
			},
			nameClick: function (t) {
				var e = $(t[Ms]),
					i = this.$names[Xn](e);
				this.showItemAt(i)
			},
			togglerClick: function (t) {
				var e = $(t[Ms]),
					i = this.$togglers[Xn](e);
				this.showItemAt(i)
			},
			showItemAt: function (t) {
				var e = this.$wrapper[Vr](fL),
					i = this.$wrapper[Vr](hL),
					n = this.$togglers.eq(t).hasClass(e);
				this.$descs.slideUp(), this.$togglers.removeClass(i).addClass(e), n && (this.$descs.eq(t).slideDown(), this.$togglers.eq(t).removeClass(e).addClass(i))
			}
		}, e[TD](mL, vL)
	}(t.FW),
	function (e, i) {
		"use strict";
		var n = t.Movie;
		n.Watch = function (t) {
			this.D(t)
		}, n.Watch[g] = {
			D: function (t) {
				var e = this;
				this.oa = t, this.pa = this.oa[ze](gL), this.qa = this.oa[Vr](se), this.ra = t[ze](TL), this.sa = t[ze](bL), this.ta = t[ze](SL), this.va = this.ta[ze](yL), this.wa = t[ze](CL), this.xa = t[ze](Jk), this.ya = t[ze](tL), this.za = t[ze](rL), this.Aa = t[ze](sL), this.wa[Gs]($.proxy(this.Ba, this)), this.va[Gs]($.proxy(this.Ca, this)), this.Da = {}, this.Ea = {}, this.Fa(), this.Ga(), this.Ha(), this.Ia(), this.Ja(), this.Ka(), this.pa[ze](wL)[Gs]($.proxy(this.loadCurrent, this)), this.La = setTimeout(function () {
					e.Ma()[Ye]() && e.loadCurrent()
				}, 100), setTimeout(function () {
					e.Na()
				}, 1e3)
			},
			Ma: function () {
				return this.xa[Vr](Zk)
			},
			Oa: function () {
				return this.ya[Vr](eL)
			},
			Pa: function () {
				return this.za[Vr](aL)
			},
			Qa: function () {
				return this.Aa[Vr](aL)
			},
			Ra: function () {
				var t;
				for (t in this.Ea)
					if (this.Ea[c](t) && this.Ea[t]) {
						try {
							this.Ea[t][td]()
						} catch (e) {}
						this.Ea[t] = null
					}
			},
			Na: function () {
				var t = this.oa[Vr](L),
					i = this.oa[Vr](PL)[v](),
					n = $(AL),
					r = $($(n)[Vr](nE)),
					a = T,
					s = ML;
				xL[l](i) > -1 ? (r[ze](GL)[Tn](r[Vr](PL)), a = PL) : t === IL && (r[ze](GL)[Tn](r[Vr](IL)), a = IL), s += a, n.popover({
					html: !0,
					title: !1,
					trigger: Mm,
					content: function () {
						return r.html()
					}
				}).on(HL, function () {
					$($L).activate(), $(EL)[Gs](function () {
						n.popover(uu), e.Cookie[iu](s, 1, 259200)
					})
				}), a && !e.Cookie[Vn](s) && n.popover(lu)
			},
			Ka: function () {
				var t = this;
				this.ra[Gs](function () {
					var e = $(this)[Vr](BL);
					t.Sa(e)
				})
			},
			Sa: function (t) {
				var e = this.ra[je](DL + t + oh);
				this.ra[S] && !e.hasClass(od) && (this.ra.removeClass(od), e.addClass(od), this.sa.removeClass(od).addClass(ci)[je](DL + t + oh)[uu]().removeClass(ci).fadeIn())
			},
			Ta: function (t) {
				var e = t[rf](Qy)[Vr](BL);
				this.Sa(e)
			},
			Ua: function () {
				this.pa.scrollFocus()
			},
			current: function () {
				var t = this.va[je](Tf);
				return t[S] || (t = this.va.first()), t
			},
			next: function () {
				var t = this.current()[rf](bv)[Nf]()[ze](Js);
				return t[S] || (t = this.current()[rf](Qy)[Nf]()[ze](kL)), !!t[S] && t
			},
			loadCurrent: function () {
				this.loadEpisode(this.current())
			},
			Ca: function (t) {
				var e = $(t[Ms]);
				t[As](), e[Vr](wr) || (this.Ua(), this.loadEpisode(e), this.Ta(e), e[Vr](LL, !1))
			},
			Va: function () {
				var e;
				try {
					null[0]()
				} catch (i) {
					e = i
				}
				try {
					return RL[ue](t[tb][$y]) || t.callPhantom || t._phantom || RL[ue](e[$P])
				} catch (i) {
					return !1
				}
			},
			Wa: function () {
				var e = t[tb][OL],
					i = t[tb][$y][U](),
					n = NL[ue](i),
					r = WL[ue](i),
					a = FL;
				return r && (!e && n ? a = FL : e && !n ? a = OL : e || n || (a = XL)), a === XL && (setTimeout(function () {
					alert(VL + zL + jL)
				}, 500), !0)
			},
			Xa: function () {
				var e = UL[ue](t[sn][YL]);
				return !e && (setTimeout(function () {
					alert(KL + qL + jL)
				}, 500), setTimeout(function () {
					t[sn][cn] = _L + t[sn][QL]
				}, 1e3), !0)
			},
			loadEpisode: function (t) {
				var e = this;
				t[Vr](wr) || !this.va[S] || this.Va() || this.Wa() || this.Xa() || (this.Ra(), this.La && clearTimeout(this.La), this.$lastEpisode && (this.$lastEpisode[Vr](wr, !1), this.$lastEpisode[Vr](JL) && clearTimeout(this.$lastEpisode[Vr](JL))), this.Ya(), this.Za(t), this.$a(t), this.Pa().setUrl(null), this.Qa().setUrl(null), this.va.removeClass(od), t.addClass(od), t[Vr](wr, !0), e.$lastEpisode = t, e.Ea._a = $.ajax(ZL, {
					data: {
						id: t[Vr](se),
						update: t[Vr](ST) ? Math[E]() : 0
					},
					success: function (i) {
						i[$i] ? e.ab(tR) : i[L] === eR ? e.bb(t, i) : i[L] === jn && e.cb(i[Cs])
					},
					error: function () {
						e.ab(iR)
					},
					complete: function () {
						t[Vr](wr, !1)
					}
				}))
			},
			cb: function (t) {
				var e = $(nR).attr(ko, t).attr(rR, aR).attr(sR, aR).attr(oR, lR).css(ta, cE).css(ru, cE);
				this.db(), this.eb(), this.pa[Ro](e)
			},
			bb: function (t, e) {
				var n = this,
					r = e.params;
				t[Vr](uR, t[Vr](uR) || 0), $[x](r, {
					mobile: i.phone() ? 1 : 0
				}), n.Ea.fb = $.ajax(e.grabber, {
					data: r,
					success: function (i) {
						t[Vr](cR, e.subtitle), i[$i] ? i[$i] === dR ? n.ab(pR) : (n.reportError(t, i[$i], i.token), n.gb(t, i[$i])) : n.hb(t, i[Vr])
					},
					error: function () {
						t[Vr](uR) < 1 ? (t[Vr](uR, t[Vr](uR) + 1), n.bb(t, e)) : n.ab(fR)
					}
				})
			},
			Ya: function () {
				this.db(), this.eb(), this.pa[Ro](hR)
			},
			ab: function (t) {
				var e = $(mR).html(t);
				this.db(), this.eb(), this.pa[Ro](e), e.css(xT, (this.pa[ru]() - e[ru]()) / 2)
			},
			db: function () {
				this.getJwPlayer().siblings()[gs]()
			},
			getJwPlayer: function () {
				return this.pa[ze](Qk)
			},
			eb: function () {
				this.getJwPlayer()[uu](), this.ib()
			},
			hb: function (e, r) {
				var a, s = this,
					o = e[Vr](se),
					u = e[Vr](cR) ? [{
						file: e[Vr](cR),
						label: vR,
						kind: gR,
						"default": Wr
					}] : [],
					c = {
						playlist: [{
							sources: r,
							tracks: u
						}],
						type: TR,
						image: this.oa[Vr](bR),
						autostart: !0,
						primary: SR,
						width: cE,
						height: cE,
						preload: Dl,
						key: yR,
						captions: {
							color: CR,
							edgeStyle: wR,
							backgroundOpacity: i.phone() ? 100 : 0
						}
					},
					d = function () {
						var e = this.getCurrentQuality(),
							i = PR + $(AR)[Tn]() + MR + t.jwdata.$episode[Tn](),
							n = this.getPlaylistItem().sources[e].file;
						n += (n[l](cd) > -1 ? ud : cd) + xR + i[B](GR, T), s.Pa().setUrl(null), s.Qa().setUrl(null)
					};
				this.db(), this.Qa().setUrl(e[Vr](cR)[B](IR, HR)), t.jwdata = {
					episodeId: o,
					$episode: e
				}, a = jwplayer(this.getJwPlayer()[lu]()[0]), t.jwsetup && !i.phone() ? (a[vr]([{
					sources: r,
					tracks: u
				}]), d[b](a), setTimeout(function () {
					a[$R](), a[$R]()
				}, 3e3)) : (t.jwsetup = !0, a.setup(c).on(ER, function () {
					var e, i = s.jb(t.jwdata.episodeId),
						r = n.Settings[Vn](cB),
						o = this.getQualityLevels();
					if (r)
						for (e = 0; e < o[S]; e++)
							if (o[e][BR] === r) {
								this.setCurrentQuality(e);
								break
							}
					i && (a.seek(i), s.kb(t.jwdata.episodeId, null)), d[b](this)
				}).on(DR, function (t) {
					d[b](this), n.Settings[iu](cB, t.levels[t.currentQuality][BR])
				}).on($R, function () {
					var t, e, i, n, r, a, s = this.getContainer(),
						o = s[oe](kR)[0] || !1;
					if (this.utils.isIOS()) {
						if (!o) return;
						if (this.utils.isIPad() && this.setCurrentCaptions(0), a = this.getPlaylistItem(), n = s[oe](oy))
							for (t = 0; t < n[S]; t++) s[Ae](n[t]);
						if (a && a.tracks && a.tracks[S] > 0) {
							for (t = 0; t < a.tracks[S]; t++) {
								i = a.tracks[t], r = document[we](oy);
								for (e in i) e !== Vr && e !== se && r[pe](e === LR ? ko : e, i[e])
							}
							o[Fe](r)
						}
					}
				}).on($i, function (e) {
					t.jwdata.$episode[Vr](ST, 1), s.isFLV(r) && (t.jwdata.$episode[Vr](LL, !1), s.reportError(t.jwdata.$episode, RR)), s.gb(t.jwdata.$episode, OR + e[B$]), s.Pa().setUrl(!1)
				}).on(yr, function () {
					s.kb(t.jwdata.episodeId, 0), s.lb()
				}).on(Wb, function (e) {
					s.kb(t.jwdata.episodeId, e[wp])
				}))
			},
			isFLV: function (t) {
				for (var e = 0; e < t[S]; e++)
					if (NR[ue](t[e].file)) return !0;
				return !1
			},
			reportError: function (t, e, i) {
				t[Vr](LL) || (t[Vr](LL, !0), $.ajax(WR, {
					data: {
						id: t[Vr](se),
						error: e,
						token: i || T,
						aa: 1
					}
				}))
			},
			lb: function () {
				var t;
				this.Oa()[Ye]() && (t = this[Nf](), t !== !1 && (this.loadEpisode(t), this.Ta(t)))
			},
			gb: function (t, e) {
				var i = 2,
					n = !1,
					r = t[Vr](MB, (t[Vr](MB) || 0) + 1)[Vr](MB);
				r < i ? (t[Vr](ST, 1), this.loadEpisode(t)) : r === i && this.reportError(t, e), r >= i && (n = this.mb(t), n ? this.loadEpisode(n) : this.ab(FR + XR + VR))
			},
			mb: function (t) {
				for (var e, i = t[rf](zR)[Nf](zR), n = t[Tn](); i[S];) {
					if (e = i[ze](Js)[je](function () {
						return $(this)[Tn]() === n
					}), e[S]) return $(e[0]);
					i = i[Nf](zR)
				}
				return !1
			},
			Ha: function () {
				var e = this;
				$(t)[$C](pB, function () {
					e.ib(), e.nb()
				})
			},
			Za: function (e) {
				typeof t[jR][UR] === k && t[jR][UR]({
					name: e[Vr](se)
				}, document[Ym], e.attr(cn))
			},
			Ia: function () {
				var e, i;
				YR[ue](t[sn][cn]) && (e = this.getWatchingEpisode(), i = this.va[je](KR + e + oh), i[S] && (this.va.removeClass(od), i.addClass(od), this.Ta(i)))
			},
			getWatchingEpisode: function () {
				return n.WatchingHistory[Vn](this.qa)
			},
			$a: function (t) {
				n.WatchingHistory[iu](this.qa, t[Vr](se))
			},
			Ga: function () {
				var t = this;
				$(document).keydown(function (e) {
					if (qR[l]($(e[Cs]).prop(Of)) === -1) try {
						74 === e[ks] || e[JE] === _R ? jwplayer().seek(Math[K](0, jwplayer().getPosition() - 60)) : 76 === e[ks] || e[JE] === yk ? jwplayer().seek(jwplayer().getPosition() + 60) : t._getJwPlayer()[Ks]()
					} catch (i) {}
				})
			},
			ib: function (t) {
				try {
					t ? jwplayer()[If]() : jwplayer()[Qr]()
				} catch (e) {}
			},
			kb: function (t, e) {
				this.Da[t] = e
			},
			jb: function (t) {
				if (!Object[hB](this.Da)[S]) try {
					this.Da = $.parseJSON(e.Cookie[Vn](QR)) || {}
				} catch (i) {
					this.Da = {}
				}
				return this.Da[t] || null
			},
			nb: function () {
				e.Cookie[iu](QR, JSON[gB](this.Da), 864e3, location[QL] + $o)
			},
			Fa: function () {
				$.ajax(JR, {
					data: {
						id: this.qa,
						aa: 1
					}
				})
			},
			Ba: function () {
				var e = $(ZR),
					i = e[ze](sP),
					n = tO[re](this.wa[Vr](ed) || T)[1],
					r = eO + iO + Math[qT](t[G$][ru] / 2, 480) + zk + nO + n + zk + rO;
				i.html(r).css(ql, aO), e.modal({
					width: 800
				})[lu]().on(nm, function () {
					i.html(T)
				})
			},
			Ja: function () {
				var t, e, i = this.oa[ze](sO),
					n = 250,
					r = jA,
					a = oO,
					s = lO,
					o = i.html();
				o[S] > n && (t = o[B](uO, T)[YH](0, n), e = cO + t + r + _a + dO + o + _a + pO + a + fO, i.html(e)), i.delegate(hO, Gs, function () {
					var t = $(this);
					t.hasClass(mO) ? (t.removeClass(mO), t.html(a)) : (t.addClass(mO), t.html(s)), i[ze](vO)[wu]()
				})
			}
		}, n.RemoveAds = function (t) {
			this.D(t)
		}, n.RemoveAds[g] = {
			D: function (t) {
				this.$btn = t, this.$counter = this.$btn[ze](Mg), this[gO] = parseInt(this.$counter[Vr](gO), 10), this.$btn.removeClass(ci), this.$btn[Gs]($.proxy(this[gs], this)), this.countDown()
			},
			remove: function () {
				this[gO] <= 0 && ($(TO)[gs](), this.$btn[gs]())
			},
			countDown: function () {
				var t = this,
					e = setInterval(function () {
						t.$counter[Tn](Fi + t[gO] + At), t[gO]-- || (clearInterval(e), t.$counter[gs]())
					}, 1e3)
			}
		}, e[TD](bO, SO), e[TD](mL, yO)
	}(t.FW, t.mobile),
	function (e) {
		"use strict";
		var i = t.Movie;
		i.Rating = function (t) {
			this.D(t)
		}, i.Rating[g] = {
			classes: {
				none: CO,
				half: wO,
				full: PO
			},
			captions: {
				1: AO,
				2: MO,
				3: xO,
				4: GO,
				5: IO,
				6: IO,
				7: HO,
				8: $O,
				9: EO,
				10: BO
			},
			D: function (t) {
				this.filmHashId = t[Vr](se), this.$wrapper = t[ze](DO), this.$label = this.$wrapper[ze](BR), this.$starsWrapper = this.$wrapper[ze](kO), this[Ye] = this.$wrapper[Vr](Ye), this[gO] = this.$wrapper[Vr](gO), this.$label[Vr](LO, this.$label[Tn]()), this.render(), this[yB](), this.rated() || this[TD]()
			},
			render: function () {
				var t, e, i = T;
				for (e = 1; e <= 5; e++) t = $(RO), i += $(OO)[Ro](t).addClass(this.classes.full).attr(NO, 2 * e).prop(Ga);
				this.$starsWrapper.html(i), this.$stars = this.$starsWrapper[ze](WO)
			},
			register: function () {
				this.$stars.mousemove($.proxy(this.starHover, this)).mouseout($.proxy(this[yB], this))[Gs]($.proxy(this.starClick, this))
			},
			unregister: function () {
				this.$stars.unbind(Gs).unbind(JT).unbind(so)
			},
			showStarAt: function (t, e, i) {
				for (var n, r, a = T, s = 0; s < this.$stars[S]; s++) n = $(this.$stars[s]), r = n[Vr](Ye), s < t ? a = this.classes.full : s === t ? (e ? a = this.classes.full : (a = this.classes.half, r--), i && this.showCaption(this.captions[r])) : a = this.classes.none, $(Ot, n).attr(Vi, a)[Vr](Ye, r)
			},
			showCaption: function (t) {
				this.$label[Tn](t)
			},
			markRated: function () {
				var t = JSON[hc](e.Cookie[Vn](FO)) || {};
				t[this.filmHashId] = 1, e.Cookie[iu](FO, JSON[gB](t))
			},
			rated: function () {
				return !!(JSON[hc](e.Cookie[Vn](FO)) || {})[this.filmHashId]
			},
			starClick: function (t) {
				var e = this,
					i = $(t[Ms]),
					n = i[ze](Ot)[Vr](Ye);
				this[XO](), this.markRated(), $.ajax({
					url: VO,
					type: bp,
					data: {
						id: this.filmHashId,
						score: n,
						s: Math[E]()
					},
					success: function (t) {
						var i = e.$label[Vr](Tn)[B](ye, t.avg)[B](zO, t.count_format);
						e.$label[Tn](i)
					}
				})
			},
			starHover: function (t) {
				var e = $(t[Ms]);
				this.showStarAt(e[Xn](), t[jO] > e[ta]() / 2, !0)
			},
			reset: function () {
				var t;
				for (t = 1; t < 5; t++) this[Ye] > 2 * t && this[Ye] <= 2 * (t + 1) && this.showStarAt(t, this[Ye] === 2 * (t + 1), !1);
				this.$label[Tn](this.$label[Vr](LO))
			}
		}, e[TD](mL, UO)
	}(t.FW),
	function (e) {
		"use strict";
		var i = t.Movie;
		i.Report = function (t) {
			this.D(t)
		}, i.Report[g] = {
			D: function (t) {
				this.$movie = $(mL), this.filmHashId = this.$movie[Vr](se), this.$episodes = this.$movie[ze](YO), this.$form = t, this.$modal = this.$form[rf](wP), this.$btnSubmit = this.$form[ze](KO), this.$btnSubmit[Gs]($.proxy(this[uo], this))
			},
			formData: function () {
				var t = $[F](this.$form[ze](qO).val()),
					e = [];
				return this.$form[ze](_O).each(function () {
					e[o](this[Ye])
				}), !(!e[S] && !t) && {
					message: t,
					issue: e,
					id: this.filmHashId,
					episode: this.getCurrentEpisode()[Vr](se) || T
				}
			},
			submit: function (t) {
				var e = this,
					i = this.formData();
				t[As](), i ? (this.$btnSubmit.attr(pn, pn), $.ajax(JO, {
					type: bp,
					data: i,
					success: function (t) {
						t[$i] ? alert(t[$i][B$]) : (alert(ZO), e.$modal.modal(uu))
					},
					complete: function () {
						e.$btnSubmit.removeAttr(pn)
					}
				})) : alert(QO)
			},
			getCurrentEpisode: function () {
				return this.$episodes[je](Tf)
			}
		}, e[TD](tN, eN)
	}(t.FW)
}(window);