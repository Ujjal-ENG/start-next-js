import { env } from "@/env";
import {
  backInStockNotifications,
  checkout,
  currentCart,
  orders,
  recommendations,
} from "@wix/ecom";
import { redirects } from "@wix/redirects";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { collections, products } from "@wix/stores";

import { files } from "@wix/media";
import { members } from "@wix/members";
import { reviews } from "@wix/reviews";

export function getWixClientId() {
  return createClient({
    modules: {
      products,
      collections,
      currentCart,
      checkout,
      redirects,
      orders,
      recommendations,
      backInStockNotifications,
      reviews,
      members,
      files,
    },
    auth: OAuthStrategy({
      clientId: env.NEXT_PUBLIC_WIX_CLIENT_ID || "",
    }),
  });
}
