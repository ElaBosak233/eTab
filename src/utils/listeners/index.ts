import BackgroundListener from "@/utils/listeners/background";
import MetaListener from "@/utils/listeners/meta";
import SearchListener from "@/utils/listeners/search";

export default function () {
	BackgroundListener();
	MetaListener();
	SearchListener();
}
