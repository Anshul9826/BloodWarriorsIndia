#pragma once

#include <eosio/asset.hpp>
#include <eosio/eosio.hpp>
#include <string>

#include <utils.hpp>
#include <bloodwarriorcode.hpp>

using namespace std;
using namespace eosio;

CONTRACT bloodwarriorcoin : public contract
{
public:
   using contract::contract;

   ACTION clear(const asset &current_asset, const name owner);

   /**
   * Allows `issuer` account to create a token in supply of `maximum_supply`. If validation is successful a new entry in statstable for token symbol scope gets created.
   *
   * @param issuer - the account that creates the token,
   * @param maximum_supply - the maximum supply set for the token created.
   *
   * @pre Token symbol has to be valid,
   * @pre Token symbol must not be already created,
   * @pre maximum_supply has to be smaller than the maximum supply allowed by the system: 1^62 - 1.
   * @pre Maximum supply must be positive;
   */
   ACTION create(const name &issuer,
                 const asset &maximum_supply);
   /**
   *  This action issues to `to` account a `quantity` of tokens and make a in-line action to transfer
   * @param bloodwarrior - bloodwarrior account to issue tokens to,
   * @param to - donor account to transfer tokens to, it must be the same as the issuer,
   * @param quntity - the amount of tokens to be issued,
   * @memo - the memo string that accompanies the token issue transaction.
   */
   ACTION issue(const name &bloodwarrior, const name &to, const string &memo);

   /**
   * Allows `from` account to transfer to `to` account the `quantity` tokens.
   * One account is debited and the other is credited with quantity tokens.
   *
   * @param from - the account to transfer from,
   * @param to - the account to be transferred to,
   * @param quantity - the quantity of tokens to be transferred,
   * @param memo - the memo string to accompany the transaction.
   */
   ACTION transfer(const name &from,
                   const name &to,
                   const asset &quantity,
                   const string &memo);
   /**
   *  Contract only
   *  For in-line action
   *  Allow transfer tokens to donor account
   *
   * @param from - the account to transfer from,
   * @param to - the account to be transferred to,
   * @param quantity - the quantity of tokens to be transferred,
   * @param memo - the memo string to accompany the transaction.
   */
   ACTION transferlife(const name &from,
                       const name &to,
                       const asset &quantity,
                       const string &memo);

   /**
   *  Contract only
   *  For in-line action
   *  Allow to redeem offers
   *
   * @param from - the account to transfer from,
   * @param to - the account to be transferred to,
   * @param quantity - the quantity of tokens to be transferred,
   * @param memo - the memo string to accompany the transaction.
   */
   ACTION redeemoffer(uint64_t offer_comm_id, name donor_name);

   /**
   *  TODO:
   *
   * @param token_contract_account - TODO:,
   * @param sym_code - Symbol of the token,
   * 
   * @return current supply
   */
   static asset get_supply(const name &token_contract_account, const symbol_code &sym_code)
   {
      stats statstable(token_contract_account, sym_code.raw());
      const auto &st = statstable.get(sym_code.raw());
      return st.supply;
   }

   /**
   *  Returns the balance for an account
   *
   * @param token_contract_account - TODO:,
   * @param owner - The contract's owner
   * @param sym_code - Symbol of the token,
   * 
   * @return the contract's balance
   */
   static asset get_balance(const name &token_contract_account, const name &owner, const symbol_code &sym_code)
   {
      accounts accountstable(token_contract_account, owner.value);
      const auto &ac = accountstable.get(sym_code.raw());
      return ac.balance;
   }

   using create_action = eosio::action_wrapper<"create"_n, &bloodwarriorcoin::create>;
   using issue_action = eosio::action_wrapper<"issue"_n, &bloodwarriorcoin::issue>;
   using transfer_action = eosio::action_wrapper<"transfer"_n, &bloodwarriorcoin::transfer>;

private:
   bool is_valid_transaction(const name &from,
                             const name &to);

   /*
      Table for store tha data related with account's balance
   */
   struct [[eosio::table]] account
   {
      asset balance;

      uint64_t primary_key() const { return balance.symbol.code().raw(); }
   };
   typedef eosio::multi_index<"accounts"_n, account> accounts;

   /*
      Table for store tha data related with currencies' stats
   */
   struct [[eosio::table]] currency_stats
   {
      asset supply;
      asset max_supply;
      name issuer;

      uint64_t primary_key() const { return supply.symbol.code().raw(); }
   };
   typedef eosio::multi_index<"stat"_n, currency_stats> stats;

   /*
      Table for store tha data related with the redeems offers
   */
   TABLE redeem_offer
   {
      uint64_t id;
      name donor_name;
      uint64_t offer_comm_id;
      auto primary_key() const { return id; }
      EOSLIB_SERIALIZE(redeem_offer, (id)(donor_name)(offer_comm_id));
   };
   typedef multi_index<name("redeemoffer"), redeem_offer> redeem_offer_table;

   void sub_balance(const name &owner, const asset &value);
   void add_balance(const name &owner, const asset &value, const name &ram_payer);
};

/*
   Struct for store tha data related with community for inline calls
*/
struct community
{
   eosio::symbol symbol;

   name creator;
   string community_name;
   string description;
   string logo;

   uint64_t primary_key() const { return symbol.raw(); };

   EOSLIB_SERIALIZE(community,
                    (symbol)(creator)(community_name)(description)(logo));
};

typedef eosio::multi_index<name{"community"}, community> communities_table;

/*
   Struct for store tha data related with donors for inline calls
*/
struct donor
{
   name account;

   checksum256 tx;
   auto primary_key() const { return account.value; }
   EOSLIB_SERIALIZE(donor,
                    (account)(tx));
};
typedef multi_index<name("donors"), donor> donors_table;

/*
   Struct for store tha data related with bloodwarrior for inline calls
*/
struct bloodwarrior
{
   name account;
   eosio::symbol community;
   uint8_t blood_urgency_level;
   checksum256 tx;
   auto primary_key() const { return account.value; }
   EOSLIB_SERIALIZE(bloodwarrior,
                    (account)(community)(blood_urgency_level)(tx));
};
typedef multi_index<name("bloodwarriors"), bloodwarrior> bloodwarriors_table;

/*
   Struct for store tha data related with sponsors for inline calls
*/
struct sponsor
{
   name account;

   checksum256 tx;
   auto primary_key() const { return account.value; }
   EOSLIB_SERIALIZE(sponsor,
                    (account)(tx));
};
typedef multi_index<name("sponsors"), sponsor> sponsors_table;

constexpr name bloodwarriorcode_account{"bloodwarriorcode"_n};

/*
   Struct for store tha data related with network for inline calls
*/
struct network
{
   uint64_t id;

   eosio::symbol community;
   name user;

   uint64_t primary_key() const { return id; }
   uint64_t users_by_community() const { return community.raw(); }

   EOSLIB_SERIALIZE(network,
                    (id)(community)(user));
};

typedef eosio::multi_index<name("network"),
                           network,
                           eosio::indexed_by<name{"usersbycmm"},
                                             eosio::const_mem_fun<network, uint64_t, &network::users_by_community>>>
    networks_table;